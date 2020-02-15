using AutoMapper;
using HaloArmory.API.Dto;
using HaloArmory.API.Models;

namespace HaloArmory.API.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Item, ItemsForDisplayDto>();
        }
    }
}