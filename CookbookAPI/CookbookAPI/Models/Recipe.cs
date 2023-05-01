namespace CookbookAPI.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Abstract { get; set; }
        public int Uses { get; set; }
        public int PrepTimeInMinutes { get; set; }
        public int CookTimeInMinutes { get; set; }
        public int Servings { get; set; }
        public string ImageUrl { get; set; }
        public List<string> Instructions { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
