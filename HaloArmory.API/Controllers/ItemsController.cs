﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using HaloArmory.API.Data;
using HaloArmory.API.Dto;
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
        public async Task<IActionResult> GetItems()
        {
            var items = await _repo.GetItems();
            var itemsToReturn = _mapper.Map<IEnumerable<ItemsForDisplayDto>>(items);

            return Ok(itemsToReturn); 
        }


    }
}
