using System.Threading.Tasks;
using HaloArmory.API.Helpers;
using HaloArmory.API.Models;

namespace HaloArmory.API.Data
{
    public interface IArmoryRepository
    {
        Task<PagedList<Item>> GetItems(ItemsParams itemsParams);
    }
}