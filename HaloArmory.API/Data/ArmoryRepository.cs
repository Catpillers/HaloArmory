using System.Collections.Generic;
using System.Threading.Tasks;
using HaloArmory.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HaloArmory.API.Data
{
    public class ArmoryRepository : IArmoryRepository
    {
        private readonly DataContext _context;
        public ArmoryRepository(DataContext context)
        {
            this._context = context;

        }

        public async Task<IEnumerable<Item>> GetItems()
        {
              var items = await _context.Items.ToListAsync();
              return items;
        }
    }
}