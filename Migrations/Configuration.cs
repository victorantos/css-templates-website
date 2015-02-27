namespace CssTemplatesForFree.Migrations
{
    using CssTemplatesForFree.Models;
    using Newtonsoft.Json;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Diagnostics;
    using System.IO;
    using System.Linq;
    using System.Web;
    using System.Web.Hosting;

    internal sealed class Configuration : DbMigrationsConfiguration<CssTemplatesForFree.Models.DBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "CssTemplatesForFree.Models.DBContext";
        }

        protected override void Seed(CssTemplatesForFree.Models.DBContext context)
        {

            //if (System.Diagnostics.Debugger.IsAttached == false)
            //    System.Diagnostics.Debugger.Launch();

            var filePath = Helpers.MapPath("~/default-csstemplates.json");
            Debug.Write(filePath);
            using (var r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                dynamic array = JsonConvert.DeserializeObject(json);
                foreach (var k in array)
                {
                    context.cssTemplates.AddOrUpdate(
                                            p=>p.name,
                                            new cssTemplate
                                            {
                                                name = k.name,
                                                imageFile = k.thumbnail,
                                                previewUrl = k.preview,
                                                description = k.description
                                            });
                }
                context.SaveChanges();
            }
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
