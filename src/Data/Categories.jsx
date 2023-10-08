// https://opentdb.com/api_config.php  -> triviya API

// this API is link to fetch is something look like this 
// https://opentdb.com/api.php?amount=10&category=21&difficulty=medium
// getting the things -> amount, category and difficulty level from the user and 
// set them to the Url and fetching it.

const Categories = [
  // value will be the one sent to fetch the data.
  {category: "General Knowledge",value: 9},
  { category: "Books", value: 10},
  { category: "Films", value: 11 },
  { category: "Music", value: 12 },
  { category: "Musicals and Theaters", value: 13 },
  { category: "Television", value: 14 },
  { category: "Video Games", value: 15 },
  { category: "Board Games", value: 16 },
  { category: "Science and Nature", value: 17 },
  { category: "Computer", value: 18 },
  { category: "Mathematics", value: 19 },
  { category: "Mythology", value: 20 },
  { category: "Sports", value: 21 },
  { category: "Geography", value: 22 },
  { category: "History", value: 23 },
  { category: "Politics", value: 24 },
  { category: "Art", value: 25 },
  { category: "Celebrities", value: 26 },
  { category: "Animals", value: 27 },
  { category: "Vehicles", value: 28 },
  { category: "Comics", value: 29 },
  { category: "Gadgets", value: 30 },
  { category: "Japanese Anime", value: 31 },
  { category: "Cartoon and Animations", value: 32 },
];

export default Categories;