using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using HaloArmory.API.Data;
using HaloArmory.API.Dto;
using HaloArmory.API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace HaloArmory.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IArmoryRepository _repo;
        private readonly IMapper _mapper;
        public ItemsController(IArmoryRepository repo, IMapper mapper)
        {
            this._mapper = mapper;
            this._repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems([FromQuery]ItemsParams itemsParams)
        {
            var items = await _repo.GetItems(itemsParams);

            var itemsToReturn = _mapper.Map<IEnumerable<ItemsForDisplayDto>>(items);

            Response.AddPagination(items.CurrentPage, items.PageSize, items.TotalCount, items.TotalPages);

            return Ok(itemsToReturn);
        }


    }
}
