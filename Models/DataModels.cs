using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Script.Serialization;

namespace CssTemplatesForFree.Models
{
    public class User : IdentityUser
    {
        //Validation on the UserName field is done by the CustomUserValidator, the CustomerUserValidator must be initialized and is done so in the AccountController contructor.
        public string phone { get; set; }
        public string zip { get; set; }
        public string firstName { get; set; }
        public string lastname { get; set; }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<User> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }

        public virtual List<userUpload> userUploads { get; set; }
    }

    public class userUpload
    {
        [Key]
        public int id { get; set; }
        public string fileName { get; set; }
        public bool completed { get; set; }
    }

    public class cssTemplate
    {
        public cssTemplate()
        {
            this.dateAdded = DateTime.UtcNow;
        }

        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string previewUrl { get; set; }
        public string imageFile { get; set; }
        public DateTime dateAdded { get; set; }
    }

    public class DBContext : IdentityDbContext<User>
    {
        public DBContext()
            : base("csstemplatesforfreeDB")
        {
            Database.SetInitializer(new DBInitializer());

        }
        //Override default table names
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //When the Model/Database are created, the default user and roles tables will be mapped to different names. EX: IdentityUser -> Users.
            modelBuilder.Entity<IdentityUser>().ToTable("Users");
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<IdentityRole>().ToTable("Roles");
            modelBuilder.Entity<IdentityUserRole>().ToTable("UserRoles");
        }

        public static DBContext Create()
        {
            return new DBContext();
        }

        public DbSet<userUpload> userUploads { get; set; }
        public DbSet<cssTemplate> cssTemplates { get; set; }

    }

    //This function will ensure the database is created and seeded with any default data.
    public class DBInitializer : CreateDatabaseIfNotExists<DBContext>
    {
        protected override void Seed(DBContext context)
        {
            var filePath = Path.Combine(HttpContext.Current.Request.PhysicalApplicationPath, "default-csstemplates.json");
            using (var r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                dynamic array = JsonConvert.DeserializeObject(json);
                foreach (var k in array)
                {
                    context.cssTemplates.Add(
                                            new cssTemplate
                                            {
                                                name = k.name,
                                                imageFile = k.thumbnail,
                                                previewUrl = k.preview
                                            });
                }
                context.SaveChanges();
            }
        }
    }
}

