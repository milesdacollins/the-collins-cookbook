using CookbookAPI.Models;
using CookbookAPI.Models.DTO;
using CookbookAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CookbookAPI.Controllers
{
    [Route("api/RecipeAPI")]
    [ApiController]
    public class RecipeAPIController : ControllerBase
    {
        private readonly IRecipeRepository _recipeDb;
        public RecipeAPIController(IRecipeRepository recipeDb)
        {
            _recipeDb = recipeDb;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
        {
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<Recipe>> GetRecipe(int id)
        {
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> CreateRecipe(RecipeDTO recipeDTO)
        {
            return Ok(recipeDTO);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateRecipe(int id, RecipeDTO recipeDTO)
        {
            return NoContent();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteRecipe(int id)
        {
            return NoContent();
        }
    }
}
