using HaloArmory.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HaloArmory.API.Data
{
    public class HaloArmoryDbContext : DbContext
    {
        public HaloArmoryDbContext(DbContextOptions<HaloArmoryDbContext> options) : base(options) { }
        public DbSet<Item> Items { get; set; }
    }
}