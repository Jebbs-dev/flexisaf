const foods = [
  {
    id: "1",
    name: "Margherita Pizza",
    price: "10.99",
    category: "Meal",
    ingredients: ["tomato", "mozzarella", "basil", "olive oil"],
  },
  {
    id: "2",
    name: "Caesar Salad",
    price: "7.99",
    category: "Meal",
    ingredients: ["romaine lettuce", "croutons", "parmesan", "caesar dressing"],
  },
  {
    id: "3",
    name: "Sushi Roll",
    price: "12.99",
    category: "Meal",
    ingredients: ["rice", "nori", "salmon", "avocado", "soy sauce"],
  },
  {
    id: "4",
    name: "Beef Burger",
    price: "9.99",
    category: "Meal",
    ingredients: ["beef patty", "bun", "cheese", "lettuce", "tomato"],
  },
  {
    id: "5",
    name: "Pad Thai",
    price: "11.99",
    category: "Meal",
    ingredients: ["rice noodles", "shrimp", "peanuts", "egg", "bean sprouts"],
  },
  {
    id: "6",
    name: "Chicken Tacos",
    price: "8.99",
    category: "Snack",
    ingredients: ["chicken", "tortilla", "salsa", "cheese", "avocado"],
  },
  {
    id: "7",
    name: "Spaghetti Carbonara",
    price: "13.99",
    category: "Meal",
    ingredients: ["spaghetti", "egg", "pancetta", "parmesan", "black pepper"],
  },
  {
    id: "8",
    name: "Falafel Wrap",
    price: "6.99",
    category: "Snack",
    ingredients: ["falafel", "pita", "hummus", "lettuce", "tomato"],
  },
  {
    id: "9",
    name: "Butter Chicken",
    price: "14.99",
    category: "Meal",
    ingredients: ["chicken", "butter", "cream", "tomato sauce", "spices"],
  },
  {
    id: "10",
    name: "French Fries",
    price: "3.99",
    category: "Snack",
    ingredients: ["potatoes", "salt", "oil"],
  },
];


const snacks = foods.filter((food) => food.category === "Snack");
console.log(snacks);