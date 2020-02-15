using HaloArmory.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HaloArmory.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Item> Items { get; set; }
    }
}