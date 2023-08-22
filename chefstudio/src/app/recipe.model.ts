// interface RecipeBeforeLoading{
    
// }

export interface Recipe {
    rating?: number,
    authorId: number,
    recipeId: number,
    description?: string,
    images?: string,
    authorName: string,
    cookTime?: string,
    prepTime?: string,
    totalTime?: string,
    category?: string,
    keywords?: string,
    name?: string,
    recipeInstructions?: string,
    recipeIngredient?: string,
    recipeInstructionsArray?: string[],
    recipeIngredientsArray?: string[],
    similarity?: number
}