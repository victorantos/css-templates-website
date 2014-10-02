namespace CssTemplatesForFree.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedcsstempaltetbl : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.cssTemplates", "previewUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.cssTemplates", "previewUrl");
        }
    }
}
