namespace CssTemplatesForFree.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedDescField : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.cssTemplates", "description", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.cssTemplates", "description");
        }
    }
}
