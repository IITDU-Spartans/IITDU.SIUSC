using CVAnalyzer.Authentication.Model;
using System.Data.Entity;
using FarmerBazzar.Models;

namespace FarmerBazzar.Repositories
{
    public class AppContext : DbContext
    {
        public DbSet<Farmer> Farmers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<AuthToken> AuthTokens { get; set; } 
    }
}