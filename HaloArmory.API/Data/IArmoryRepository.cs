using System.Collections.Generic;
using System.Threading.Tasks;
using HaloArmory.API.Models;

namespace HaloArmory.API.Data
{
    public interface IArmoryRepository
    {
         Task<IEnumerable<Item>> GetItems();
    
    }
}