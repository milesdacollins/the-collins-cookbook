using AutoMapper;
using CookbookAPI.Models;
using CookbookAPI.Models.DTO;

namespace CookbookAPI
{
    public class MappingConfig : Profile
    {
        public MappingConfig()
        {
            CreateMap<Recipe, RecipeDTO>().ReverseMap();
        }
    }
}
