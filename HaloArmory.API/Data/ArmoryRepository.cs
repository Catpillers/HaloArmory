using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HaloArmory.API.Helpers;
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

        public async Task<PagedList<Item>> GetItems(ItemsParams itemsParams)
        {
            var items = _context.Items.AsQueryable();

            if (itemsParams.Types != null)
            {
                items = items.Where(t => itemsParams.Types.Contains(t.Type));

            }


            if (itemsParams.MinPrice != 0 || itemsParams.MaxPrice != 9999)
            {
                var min = itemsParams.MinPrice;
                var max = itemsParams.MaxPrice;
                items = items.Where(p => p.Price >= min && p.Price <= max);
            }


            return await PagedList<Item>.CreatAsync(items, itemsParams.PageNumber, itemsParams.PageSize);
        }
    }
}