namespace CVAnalyzer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class aa : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AuthTokens",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        TokenValue = c.String(),
                        LastAccessTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Farmers",
                c => new
                    {
                        FarmerId = c.Int(nullable: false, identity: true),
                        MobileNumber = c.String(),
                        Password = c.String(),
                        FullName = c.String(),
                        Address = c.String(),
                        PhotoUrl = c.String(),
                    })
                .PrimaryKey(t => t.FarmerId);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        ProductId = c.Int(nullable: false, identity: true),
                        FarmerId = c.Int(nullable: false),
                        Name = c.String(),
                        District = c.String(),
                        Category = c.String(),
                        Subcategory = c.String(),
                        PriceRangeFrom = c.Double(nullable: false),
                        PriceRangeTo = c.Double(nullable: false),
                        PhotoUrl = c.String(),
                        ExpiryDate = c.String(),
                    })
                .PrimaryKey(t => t.ProductId);
            
            CreateTable(
                "dbo.Ratings",
                c => new
                    {
                        RatingId = c.Int(nullable: false, identity: true),
                        ProductId = c.Int(nullable: false),
                        FarmerId = c.Int(nullable: false),
                        Value = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.RatingId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Ratings");
            DropTable("dbo.Products");
            DropTable("dbo.Farmers");
            DropTable("dbo.AuthTokens");
        }
    }
}
