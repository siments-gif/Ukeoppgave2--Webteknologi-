import { faker } from "@faker-js/faker";

/* {
    id: string
    name: string
    ingredients: []
    instructions: []
    difficulty: ""
    prepTime: 30
} */

export const recipes = [
    {
        id: faker.string.uuid(),
        name: "Taco",
        ingredients: ["meat" , "salad", "tomato", "paprika", "sour-cream"],
        instructions: ["Add how you want to make it taste best for you" , "eat"],
        difficulty: "super-easy",
        prepTime: 15,
    },
    {
        id: faker.string.uuid(),
        name: "Kebab",
        ingredients: ["kebab-meat", "corn", "sous"],
        instructions: ["Make kebab-meat nicely" , "add corn and sous for ultimate flavour"],
        difficulty: "easy",
        prepTime: 30,
    },
    {
        id: faker.string.uuid(),
        name: "Kebab",
        ingredients: ["kebab-meat", "corn", "sous"],
        instructions: ["Make kebab-meat nicely" , "add corn and sous for ultimate flavour"],
        difficulty: "easy",
        prepTime: 30,
    }
]