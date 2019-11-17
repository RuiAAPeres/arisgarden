var db = {
  "recipes": {
    "breakfast-quinoa": {
      "meta": {
        "properties": {
          "belongs_to": "breakfast",
          "day_made": "[2019-10-03]",
          "ease_of_making": "5/5",
          "imgs": "false",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Breakfast Quinoa",
          "original_recipe": "https://cookieandkate.com/cinnamon-breakfast-quinoa-recipe/",
          "rating": "5/5",
          "serves": "4",
          "slug": "breakfast-quinoa",
          "time": "00:40:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Quinoa",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "quin"
          },
          {
            "Ingredient": "Water",
            "Quantity": "2",
            "Unit": "cups",
            "Id": "water"
          },
          {
            "Ingredient": "Maple Syrup",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "syr"
          },
          {
            "Ingredient": "Pecans or Walnuts (chopped)",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "nuts"
          },
          {
            "Ingredient": "Cinnamon",
            "Quantity": "1 or 2",
            "Unit": "tsp",
            "Id": "cin"
          },
          {
            "Ingredient": "Coconut oil",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "oil"
          },
          {
            "Ingredient": "Fresh berries",
            "Quantity": "",
            "Unit": "",
            "Id": "berr"
          },
          {
            "Ingredient": "Almond butter",
            "Quantity": "",
            "Unit": "",
            "Id": "almbut"
          }
        ]
      },
      "instructions": [
        {
          "o": "[&:00:15:00] Make the [#: quin | quinoa]: Put two cups of water and one cup of quinoa into a pot. Bring it to a boil and then reduce to a simmer and cover for 15 minutes",
          "f": [
            {
              "val": "Make the"
            },
            {
              "val": "quinoa",
              "attr": "quin"
            },
            {
              "val": ": Put two cups of water and one cup of quinoa into a pot. Bring it to a boil and then reduce to a simmer and cover for 15 minutes"
            }
          ],
          "timer": "00:15:00"
        },
        {
          "o": "[&:00:04:00] Heat chopped [#: nuts | nuts] in a saucepan. Stir frequently until they smell fragrant. Do it for 4-6 minutes.",
          "f": [
            {
              "val": "Heat chopped"
            },
            {
              "val": "nuts",
              "attr": "nuts"
            },
            {
              "val": "in a saucepan. Stir frequently until they smell fragrant. Do it for 4-6 minutes."
            }
          ],
          "timer": "00:04:00"
        },
        {
          "o": "[&:00:00:15] Add [#: oil | coconut oil], [#: cin | cinnamon] to the pot. Stir frequently until coconut oil melts and cinnamon becomes fragrant. About 15 seconds.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "coconut oil",
              "attr": "oil"
            },
            {
              "val": ","
            },
            {
              "val": "cinnamon",
              "attr": "cin"
            },
            {
              "val": "to the pot. Stir frequently until coconut oil melts and cinnamon becomes fragrant. About 15 seconds."
            }
          ],
          "timer": "00:00:15"
        },
        {
          "o": "[&:00:01:00] Add the quinoa to the pot and stir to combine. Cook, stirring constantly, until quinoa is warmed through. Should take a minute or two. Remove from the burner and add [#: syr | maple syrup].",
          "f": [
            {
              "val": "Add the quinoa to the pot and stir to combine. Cook, stirring constantly, until quinoa is warmed through. Should take a minute or two. Remove from the burner and add"
            },
            {
              "val": "maple syrup",
              "attr": "syr"
            },
            {
              "val": "."
            }
          ],
          "timer": "00:01:00"
        },
        {
          "o": "Add the nuts to the quinoa. Top with a sprinkle of cinnamon.",
          "f": [
            {
              "val": "Add the nuts to the quinoa. Top with a sprinkle of cinnamon."
            }
          ]
        },
        {
          "o": "Top with [#: berr | fresh berries] and [#: almbut | almond butter].",
          "f": [
            {
              "val": "Top with"
            },
            {
              "val": "fresh berries",
              "attr": "berr"
            },
            {
              "val": "and"
            },
            {
              "val": "almond butter",
              "attr": "almbut"
            },
            {
              "val": "."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "big-quote"
        },
        "value": [
          "I NEED ALL THE ALMOND BUTTER."
        ]
      }
    },
    "pantry-dahl": {
      "meta": {
        "properties": {
          "original_recipe": "https://ohsheglows.com/2017/07/21/8-minute-pantry-dal-two-ways/",
          "slug": "pantry-dahl",
          "day_made": "[2019-09-01]",
          "name": "Pantry Dahl",
          "serves": "4",
          "time": "00:40:00",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "ease_of_making": "5/5",
          "rating": "5/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "belongs_to": "main"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Coconut oil",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "oil-coconut",
            "Group": ""
          },
          {
            "Ingredient": "Diced vegetables (Carrots, Potatoes, Broccoli etc)",
            "Quantity": "4",
            "Unit": "cups",
            "Id": "vegetables-misc",
            "Group": ""
          },
          {
            "Ingredient": "Uncooked red lentils",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": "lentils-red",
            "Group": ""
          },
          {
            "Ingredient": "Water",
            "Quantity": "1/2+",
            "Unit": "cups",
            "Id": "water",
            "Group": ""
          },
          {
            "Ingredient": "Diced tomato",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "tomato-diced-can",
            "Group": ""
          },
          {
            "Ingredient": "Coconut milk",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "milk-coconut",
            "Group": ""
          },
          {
            "Ingredient": "Garlic powder",
            "Quantity": "1+1/2",
            "Unit": "tbsp",
            "Id": "powder-garlic",
            "Group": ""
          },
          {
            "Ingredient": "Minced onion",
            "Quantity": "1+1/2",
            "Unit": "tbsp",
            "Id": "onion-minced",
            "Group": ""
          },
          {
            "Ingredient": "Curry powder",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "powder-curry",
            "Group": ""
          },
          {
            "Ingredient": "Sea salt",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "salt-sea",
            "Group": ""
          },
          {
            "Ingredient": "Pepper",
            "Quantity": "1",
            "Unit": "pinch",
            "Id": "pepper",
            "Group": ""
          },
          {
            "Ingredient": "Rice or Grain for Base",
            "Quantity": "",
            "Unit": "",
            "Id": "rice",
            "Group": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "Melt [#: oil-coconut | coconut oil] in a large pot",
          "f": [
            {
              "val": "Melt"
            },
            {
              "val": "coconut oil",
              "attr": "oil-coconut"
            },
            {
              "val": "in a large pot"
            }
          ]
        },
        {
          "o": "Peel (if necessary) and dice vegetables into 1/2 inch pieces. Add to pot and stir.",
          "f": [
            {
              "val": "Peel (if necessary) and dice vegetables into 1/2 inch pieces. Add to pot and stir."
            }
          ]
        },
        {
          "o": "Add the rest of the ingredients (coconut milk, diced tomato, garlic powder, minced onion, lentils.)",
          "f": [
            {
              "val": "Add the rest of the ingredients (coconut milk, diced tomato, garlic powder, minced onion, lentils.)"
            }
          ]
        },
        {
          "o": "Bring to a boil and the reduce heat to medium.",
          "f": [
            {
              "val": "Bring to a boil and the reduce heat to medium."
            }
          ]
        },
        {
          "o": "[&: 00:18:00] Cook for 18-30 minutes. Stir frequently.",
          "f": [
            {
              "val": "Cook for 18-30 minutes. Stir frequently."
            }
          ],
          "timer": "00:18:00"
        },
        {
          "o": "Serve over rice. Optional: Garnish with cilantro and lime.",
          "f": [
            {
              "val": "Serve over rice. Optional: Garnish with cilantro and lime."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "whisper"
        },
        "value": [
          "I know of a pantry--and while the light at the outset glows bright and warm--it recedes into such depths that no light can reach. Now there... there grows the great and unimaginable vegetables."
        ]
      }
    },
    "chickpea-shakshuka": {
      "meta": {
        "properties": {
          "original_recipe": "https://minimalistbaker.com/1-pot-chickpea-shakshuka/",
          "day_made": "[2019-09-03]",
          "name": "1 Pot Chickpea Shakshuka",
          "belongs_to": "main",
          "slug": "chickpea-shakshuka",
          "is_vegan": "true",
          "time": "01:00:00",
          "is_vegetarian": "true",
          "serves": "3",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "ease_of_making": "5/5",
          "rating": "4/5"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Olive Oil",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "oil-olive",
            "Group": ""
          },
          {
            "Ingredient": "White onion (or: shallot)",
            "Quantity": "1/2/",
            "Unit": "cups",
            "Id": "onion-white",
            "Group": ""
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "3",
            "Unit": "cloves",
            "Id": "garlic",
            "Group": ""
          },
          {
            "Ingredient": "Bell Pepper (chopped)",
            "Quantity": "1/2/",
            "Unit": "cups",
            "Id": "pepper-bell",
            "Group": ""
          },
          {
            "Ingredient": "Diced tomatoes",
            "Quantity": "28",
            "Unit": "oz",
            "Id": "tomato-diced",
            "Group": ""
          },
          {
            "Ingredient": "Tomato paste",
            "Quantity": "3",
            "Unit": "tbsp",
            "Id": "tomato-paste",
            "Group": ""
          },
          {
            "Ingredient": "Olives",
            "Quantity": "5",
            "Unit": "",
            "Id": "olives",
            "Group": ""
          },
          {
            "Ingredient": "Maple syrup",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "maple-syrup",
            "Group": ""
          },
          {
            "Ingredient": "Ground cumin",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "cumin-ground",
            "Group": ""
          },
          {
            "Ingredient": "Paprika",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "paprika",
            "Group": ""
          },
          {
            "Ingredient": "Chili powder",
            "Quantity": "2",
            "Unit": "tsp",
            "Id": "chili-powder",
            "Group": ""
          },
          {
            "Ingredient": "Ground cinnamon",
            "Quantity": "1/4",
            "Unit": "tsp",
            "Id": "cinnamon-ground",
            "Group": ""
          },
          {
            "Ingredient": "Chickpeas",
            "Quantity": "24",
            "Unit": "oz",
            "Id": "chickpeas",
            "Group": ""
          },
          {
            "Ingredient": "Sea Salt",
            "Quantity": "1",
            "Unit": "pinch",
            "Id": "salt-sea",
            "Group": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "Heat a large metal or cast iron skilled on medium heat.",
          "f": [
            {
              "val": "Heat a large metal or cast iron skilled on medium heat."
            }
          ]
        },
        {
          "o": "[&: 00:04:00] When hot, add [#: oil-olive | olive oil ], [#: onion-white | onion], [#: pepper-bell | bell pepper] and [#: garlic | garlic]. Saute for 4-5 minutes, stirring frequently.",
          "f": [
            {
              "val": "When hot, add"
            },
            {
              "val": "olive oil",
              "attr": "oil-olive"
            },
            {
              "val": ","
            },
            {
              "val": "onion",
              "attr": "onion-white"
            },
            {
              "val": ","
            },
            {
              "val": "bell pepper",
              "attr": "pepper-bell"
            },
            {
              "val": "and"
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": ". Saute for 4-5 minutes, stirring frequently."
            }
          ],
          "timer": "00:04:00"
        },
        {
          "o": "Add [#: tomato-diced | diced tomatoes], [#: tomato-paste | tomato paste], [#: maple-syrup | maple syrup], [#: salt-sea | sea salt], [#: paprika | paprika], [#: cumin-ground | cumin], [#: chili-powder | chili powder], [#: cinnamon-ground | cinnamon]. Stir.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "diced tomatoes",
              "attr": "tomato-diced"
            },
            {
              "val": ","
            },
            {
              "val": "tomato paste",
              "attr": "tomato-paste"
            },
            {
              "val": ","
            },
            {
              "val": "maple syrup",
              "attr": "maple-syrup"
            },
            {
              "val": ","
            },
            {
              "val": "sea salt",
              "attr": "salt-sea"
            },
            {
              "val": ","
            },
            {
              "val": "paprika",
              "attr": "paprika"
            },
            {
              "val": ","
            },
            {
              "val": "cumin",
              "attr": "cumin-ground"
            },
            {
              "val": ","
            },
            {
              "val": "chili powder",
              "attr": "chili-powder"
            },
            {
              "val": ","
            },
            {
              "val": "cinnamon",
              "attr": "cinnamon-ground"
            },
            {
              "val": ". Stir."
            }
          ]
        },
        {
          "o": "[&: 00:03:00] Bring to a simmer. Cook for 2-3 minutes.",
          "f": [
            {
              "val": "Bring to a simmer. Cook for 2-3 minutes."
            }
          ],
          "timer": "00:03:00"
        },
        {
          "o": "[&: 00:15:00] Add [#: chickpeas | chickpeas] and [#: olives | olives]. Reduce heat to medium-low for 15-20 minutes.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "chickpeas",
              "attr": "chickpeas"
            },
            {
              "val": "and"
            },
            {
              "val": "olives",
              "attr": "olives"
            },
            {
              "val": ". Reduce heat to medium-low for 15-20 minutes."
            }
          ],
          "timer": "00:15:00"
        }
      ],
      "content": {
        "props": {
          "type": "big-quote"
        },
        "value": [
          "I will be forever de-shelling chickpeas."
        ]
      }
    },
    "collard-green-pasta": {
      "meta": {
        "properties": {
          "original_recipe": "https://cookieandkate.com/lemon-collard-greens-pasta/",
          "day_made": "[2019-09-04]",
          "belongs_to": "main",
          "slug": "collard-green-pasta",
          "is_vegan": "false",
          "is_vegetarian": "true",
          "time": "00:25:00",
          "serves": "2",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "name": "Leafy Spaghetti",
          "ease_of_making": "5/5",
          "rating": "5/5"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Swiss Chard",
            "Quantity": "10",
            "Unit": "leaves",
            "Id": "swiss-chard"
          },
          {
            "Ingredient": "Spaghetti",
            "Quantity": "1/3",
            "Unit": "package",
            "Id": "spaghetti"
          },
          {
            "Ingredient": "Chopped Nuts",
            "Quantity": "3",
            "Unit": "tbsp",
            "Id": "nuts"
          },
          {
            "Ingredient": "Olive Oil",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "oil-olive"
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "2",
            "Unit": "cloves",
            "Id": "garlic"
          },
          {
            "Ingredient": "Red Pepper Flakes",
            "Quantity": "1",
            "Unit": "pinch",
            "Id": "red-pepper-flakes"
          },
          {
            "Ingredient": "Parmesan Cheese",
            "Quantity": "1",
            "Unit": "ounce",
            "Id": "cheese-parmesan"
          },
          {
            "Ingredient": "Lemon",
            "Quantity": "1",
            "Unit": "",
            "Id": "lemon"
          }
        ]
      },
      "instructions": [
        {
          "o": "Bring a pot of salted water to boil. Cook the [#: spaghetti | pasta].",
          "f": [
            {
              "val": "Bring a pot of salted water to boil. Cook the"
            },
            {
              "val": "pasta",
              "attr": "spaghetti"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "Drain the pasta, reserving a bit of cooking water. Set aside.",
          "f": [
            {
              "val": "Drain the pasta, reserving a bit of cooking water. Set aside."
            }
          ]
        },
        {
          "o": "Cut out the \"rib\" of the swiss chard. Roll up the leaves like a cigar. Slice across the role, as thinly as possible.",
          "f": [
            {
              "val": "Cut out the \"rib\" of the swiss chard. Roll up the leaves like a cigar. Slice across the role, as thinly as possible."
            }
          ]
        },
        {
          "o": "Heat a skillet on medium heat. Toast the [#: nuts | nuts] until fragrant. Set aside.",
          "f": [
            {
              "val": "Heat a skillet on medium heat. Toast the"
            },
            {
              "val": "nuts",
              "attr": "nuts"
            },
            {
              "val": "until fragrant. Set aside."
            }
          ]
        },
        {
          "o": "Using the same skillet, heat the [#: oil-olive | olive oil]. When hot, put in the [#: garlic | garlic] and [#: red-pepper-flakes | red pepper flakes].",
          "f": [
            {
              "val": "Using the same skillet, heat the"
            },
            {
              "val": "olive oil",
              "attr": "oil-olive"
            },
            {
              "val": ". When hot, put in the"
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": "and"
            },
            {
              "val": "red pepper flakes",
              "attr": "red-pepper-flakes"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "[&: 00:03:00] After a bit, toss in the swiss-chard. Sprinkle with salt. Stir often, about three minutes.",
          "f": [
            {
              "val": "After a bit, toss in the swiss-chard. Sprinkle with salt. Stir often, about three minutes."
            }
          ],
          "timer": "00:03:00"
        },
        {
          "o": "Scoop chard into pasta pot and toss with oil. Add pasta water if necessary.",
          "f": [
            {
              "val": "Scoop chard into pasta pot and toss with oil. Add pasta water if necessary."
            }
          ]
        },
        {
          "o": "Divide onto plates, top with nuts and parmesan shavings. Add two big lemon wedges per person.",
          "f": [
            {
              "val": "Divide onto plates, top with nuts and parmesan shavings. Add two big lemon wedges per person."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "haiku"
        },
        "value": [
          "Big leaflet of chard",
          "Or, collars of collard greens",
          "Friend of spaghetti."
        ]
      }
    },
    "bowl1": {
      "meta": {
        "properties": {
          "original_recipe": "https://tasty.co/recipe/protein-packed-buddha-bowl",
          "day_made": "[2019-09-08]",
          "belongs_to": "main",
          "slug": "bowl1",
          "is_vegan": "true",
          "name": "Bowl #1",
          "serves": "2",
          "is_vegetarian": "true",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "ease_of_making": "3/5",
          "time": "00:50:00",
          "rating": "5/5"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Lemon",
            "Quantity": "1",
            "Unit": "",
            "Id": "lemon",
            "Group": ""
          },
          {
            "Ingredient": "Sweet Potato",
            "Quantity": "1",
            "Unit": "",
            "Id": "potato-sweet",
            "Group": ""
          },
          {
            "Ingredient": "Shredded Carrots",
            "Quantity": "1",
            "Unit": "",
            "Id": "avocado",
            "Group": ""
          },
          {
            "Ingredient": "Onion",
            "Quantity": "1",
            "Unit": "",
            "Id": "onion",
            "Group": ""
          },
          {
            "Ingredient": "Tofu",
            "Quantity": "8",
            "Unit": "oz",
            "Id": "tofu",
            "Group": ""
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "2",
            "Unit": "cloves",
            "Id": "garlic",
            "Group": ""
          },
          {
            "Ingredient": "Olive Oil",
            "Quantity": "3",
            "Unit": "tbsp",
            "Id": "oil-olive",
            "Group": "Marinade"
          },
          {
            "Ingredient": "Chickpeas",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "chickpeas",
            "Group": ""
          },
          {
            "Ingredient": "Salt",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "salt",
            "Group": "Marinade"
          },
          {
            "Ingredient": "Pepper",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "pepper",
            "Group": ""
          },
          {
            "Ingredient": "Chili powder",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "chili-powder",
            "Group": ""
          },
          {
            "Ingredient": "Garlic powder",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "garlic-powder",
            "Group": ""
          },
          {
            "Ingredient": "Quinoa",
            "Quantity": "1+1/2",
            "Unit": "cups",
            "Id": "quinoa",
            "Group": ""
          },
          {
            "Ingredient": "Avocado",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "carrots-shredded",
            "Group": ""
          },
          {
            "Ingredient": "Sesame Oil",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "oil-sesame",
            "Group": "Marinade"
          },
          {
            "Ingredient": "Hot Sauce",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "sauce-hot",
            "Group": "Marinade"
          },
          {
            "Ingredient": "Dried thyme",
            "Quantity": "2",
            "Unit": "tsp",
            "Id": "thyme",
            "Group": "Marinade"
          },
          {
            "Ingredient": "Paprika",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "paprika",
            "Group": "Marinade"
          }
        ]
      },
      "instructions": [
        {
          "o": "Make the marinade: combine [#: oil-olive | olive oil], [#: oil-sesame | seasame oil], [#: sauce-hot | hot sauce], [#: thyme | thyme], [#: paprika | paprika], and [#: salt | salt]. Set aside.",
          "f": [
            {
              "val": "Make the marinade: combine"
            },
            {
              "val": "olive oil",
              "attr": "oil-olive"
            },
            {
              "val": ","
            },
            {
              "val": "seasame oil",
              "attr": "oil-sesame"
            },
            {
              "val": ","
            },
            {
              "val": "hot sauce",
              "attr": "sauce-hot"
            },
            {
              "val": ","
            },
            {
              "val": "thyme",
              "attr": "thyme"
            },
            {
              "val": ","
            },
            {
              "val": "paprika",
              "attr": "paprika"
            },
            {
              "val": ", and"
            },
            {
              "val": "salt",
              "attr": "salt"
            },
            {
              "val": ". Set aside."
            }
          ]
        },
        {
          "o": "[&: 00:30:00] Add marinade and tofu to a container and marinate for at least 30 minutes (up to a day).",
          "f": [
            {
              "val": "Add marinade and tofu to a container and marinate for at least 30 minutes (up to a day)."
            }
          ],
          "timer": "00:30:00"
        },
        {
          "o": "Preheat the oven to 400F (200C).",
          "f": [
            {
              "val": "Preheat the oven to 400F (200C)."
            }
          ]
        },
        {
          "o": "[&: 00:20:00] Cut [#: potato-sweet | sweet potato] into cubes. Slice the [#: onion | onion], dice [#: garlic | garlic]. Put it all on a baking sheet. Drizzel with oil, season with salt and pepper. Bake for 20-25 min.",
          "f": [
            {
              "val": "Cut"
            },
            {
              "val": "sweet potato",
              "attr": "potato-sweet"
            },
            {
              "val": "into cubes. Slice the"
            },
            {
              "val": "onion",
              "attr": "onion"
            },
            {
              "val": ", dice"
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": ". Put it all on a baking sheet. Drizzel with oil, season with salt and pepper. Bake for 20-25 min."
            }
          ],
          "timer": "00:20:00"
        },
        {
          "o": "In a medium bowl, add the [#: chickpeas | chickpeas], salt, pepper, [#: chili-powder | chili powder], and [#: garlic-powder | garlic powder]. Stir to combine.",
          "f": [
            {
              "val": "In a medium bowl, add the"
            },
            {
              "val": "chickpeas",
              "attr": "chickpeas"
            },
            {
              "val": ", salt, pepper,"
            },
            {
              "val": "chili powder",
              "attr": "chili-powder"
            },
            {
              "val": ", and"
            },
            {
              "val": "garlic powder",
              "attr": "garlic-powder"
            },
            {
              "val": ". Stir to combine."
            }
          ]
        },
        {
          "o": "[&: 00:10:00] Transfer chickpeas to skillet and cook on medium heat for 10 minutes. Set aside.",
          "f": [
            {
              "val": "Transfer chickpeas to skillet and cook on medium heat for 10 minutes. Set aside."
            }
          ],
          "timer": "00:10:00"
        },
        {
          "o": "[&: 00:10:00] Fry the tofu in the same pan for about 10 minutes on each side.",
          "f": [
            {
              "val": "Fry the tofu in the same pan for about 10 minutes on each side."
            }
          ],
          "timer": "00:10:00"
        },
        {
          "o": "Slice tofu as you like.",
          "f": [
            {
              "val": "Slice tofu as you like."
            }
          ]
        },
        {
          "o": "Optional: Combine with quinoa, greens, sweet potatoes, onions, chickpeas, carrots, tofu, and avocado.",
          "f": [
            {
              "val": "Optional: Combine with quinoa, greens, sweet potatoes, onions, chickpeas, carrots, tofu, and avocado."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "big-quote"
        },
        "value": [
          "Sit and be patient, like marinating tofu."
        ]
      }
    },
    "massaman-curry": {
      "meta": {
        "properties": {
          "day_made": "[2019-09-10]",
          "ease_of_making": "5/5",
          "imgs": "false",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Massaman Curry",
          "original_recipe": "https://minimalistbaker.com/easy-1-pot-massaman-curry/",
          "rating": "5/5",
          "serves": "2",
          "belongs_to": "main",
          "slug": "massaman-curry",
          "time": "01:00:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Tofu",
            "Quantity": "1",
            "Unit": "package",
            "Id": "tofu"
          },
          {
            "Ingredient": "Coconut oil",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "oil-coconut"
          },
          {
            "Ingredient": "Cumin powder",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "cumin-powder"
          },
          {
            "Ingredient": "Coriander powder",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "coriander-powder"
          },
          {
            "Ingredient": "Red Curry Paste",
            "Quantity": "5",
            "Unit": "tbsp",
            "Id": "red-curry-paste"
          },
          {
            "Ingredient": "Baby potatoes",
            "Quantity": "1+1/2",
            "Unit": "cups",
            "Id": "potatoes-baby"
          },
          {
            "Ingredient": "Carrots",
            "Quantity": "2",
            "Unit": "",
            "Id": "carrots"
          },
          {
            "Ingredient": "Coconut milk",
            "Quantity": "28",
            "Unit": "oz",
            "Id": "milk-coconut"
          },
          {
            "Ingredient": "Water",
            "Quantity": "1+1/2",
            "Unit": "cups",
            "Id": "water"
          },
          {
            "Ingredient": "Ground cinnamon",
            "Quantity": "1/4",
            "Unit": "tsp",
            "Id": "ground-cinnamon"
          },
          {
            "Ingredient": "Soy sauce",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "sauce-soy"
          },
          {
            "Ingredient": "Maple syrup",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "maple-syrup"
          },
          {
            "Ingredient": "Peanut butter",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "peanut-butter"
          },
          {
            "Ingredient": "Lime juice",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "lime-juice"
          },
          {
            "Ingredient": "Rice/Grain",
            "Quantity": "",
            "Unit": "",
            "Id": "rice"
          }
        ]
      },
      "instructions": [
        {
          "o": "Press your tofu. You'll come back and cube it once pressed.",
          "f": [
            {
              "val": "Press your tofu. You'll come back and cube it once pressed."
            }
          ]
        },
        {
          "o": "Cook desired serving of rice as per package instructions",
          "f": [
            {
              "val": "Cook desired serving of rice as per package instructions"
            }
          ]
        },
        {
          "o": "Heat a large pot or dutch oven on medium heat. Once hot, add [#: oil-coconut | oil] and shallot.",
          "f": [
            {
              "val": "Heat a large pot or dutch oven on medium heat. Once hot, add"
            },
            {
              "val": "oil",
              "attr": "oil-coconut"
            },
            {
              "val": "and shallot."
            }
          ]
        },
        {
          "o": "[&: 00:02:00] Saute for 2 minutes. Stir frequently.",
          "f": [
            {
              "val": "Saute for 2 minutes. Stir frequently."
            }
          ],
          "timer": "00:02:00"
        },
        {
          "o": "[&: 00:02:00] Add [#: cumin-powder | cumin] and [#: coriander-powder | coriander]. Saute for 2 minutes, stirring frequently.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "cumin",
              "attr": "cumin-powder"
            },
            {
              "val": "and"
            },
            {
              "val": "coriander",
              "attr": "coriander-powder"
            },
            {
              "val": ". Saute for 2 minutes, stirring frequently."
            }
          ],
          "timer": "00:02:00"
        },
        {
          "o": "[&: 00:01:00] Add [#: red-curry-paste | red curry paste] and stir for another minute.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "red curry paste",
              "attr": "red-curry-paste"
            },
            {
              "val": "and stir for another minute."
            }
          ],
          "timer": "00:01:00"
        },
        {
          "o": "[&: 00:02:00] Add [#: potatoes-baby | potatoes] and [#: carrots | carrots] and stir to coat. Cook for 2 minutes.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "potatoes",
              "attr": "potatoes-baby"
            },
            {
              "val": "and"
            },
            {
              "val": "carrots",
              "attr": "carrots"
            },
            {
              "val": "and stir to coat. Cook for 2 minutes."
            }
          ],
          "timer": "00:02:00"
        },
        {
          "o": "Add [#: milk-coconut | coconut milk], [#: water | water], [#: ground-cinnamon | cinnamon], [#: sauce-soy | soy-sauce], [#: maple-syrup | maple syrup], and [#: peanut-butter | peanut butter]. Add your tofu or other protein now.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "coconut milk",
              "attr": "milk-coconut"
            },
            {
              "val": ","
            },
            {
              "val": "water",
              "attr": "water"
            },
            {
              "val": ","
            },
            {
              "val": "cinnamon",
              "attr": "ground-cinnamon"
            },
            {
              "val": ","
            },
            {
              "val": "soy-sauce",
              "attr": "sauce-soy"
            },
            {
              "val": ","
            },
            {
              "val": "maple syrup",
              "attr": "maple-syrup"
            },
            {
              "val": ", and"
            },
            {
              "val": "peanut butter",
              "attr": "peanut-butter"
            },
            {
              "val": ". Add your tofu or other protein now."
            }
          ]
        },
        {
          "o": "[&: 00:10:00] Bring to a simmer and cook for 10-15 minutes uncovered. Don't boil it. Simmer it.",
          "f": [
            {
              "val": "Bring to a simmer and cook for 10-15 minutes uncovered. Don't boil it. Simmer it."
            }
          ],
          "timer": "00:10:00"
        },
        {
          "o": "Near the end of the previous step, toss in your tofu and the [#: lime-juice | lime juice]. Cook for another few minutes.",
          "f": [
            {
              "val": "Near the end of the previous step, toss in your tofu and the"
            },
            {
              "val": "lime juice",
              "attr": "lime-juice"
            },
            {
              "val": ". Cook for another few minutes."
            }
          ]
        },
        {
          "o": "[&: 00:05:00] Let stand for 10 minutes.",
          "f": [
            {
              "val": "Let stand for 10 minutes."
            }
          ],
          "timer": "00:05:00"
        },
        {
          "o": "Enjoy with a side of rice.",
          "f": [
            {
              "val": "Enjoy with a side of rice."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "blurb"
        },
        "value": [
          "We made this quite a while ago. In fact, I can't really remember much about it since then, except that we used shrimp, and now I feel bad about that because the original recipe posts it up as vegan. I shouldn't feel bad, but I'm also making a concerted effort that these recipes be vegetarian or vegan. I've been thinking about those terms a lot. I rarely eat meat these days, and now my decision not to is becoming more intentional and political. So, I guess that comes with a bit of guilt. So yeah. Anyway. It was pretty good."
        ]
      }
    },
    "cauliflower-rice-stir-fry": {
      "meta": {
        "properties": {
          "day_made": "[2019-09-12]",
          "ease_of_making": "5/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Cauliflower Rice Stir Fry",
          "original_recipe": "https://minimalistbaker.com/30-minute-cauliflower-rice-stir-fry/",
          "rating": "3/5",
          "serves": "2",
          "belongs_to": "main",
          "slug": "cauliflower-rice-stir-fry",
          "timer": "00:45:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Cauliflower",
            "Quantity": "1",
            "Unit": "head",
            "Id": "cauliflower",
            "Group": "cauliflower"
          },
          {
            "Ingredient": "Water (for cauliflower rice)",
            "Quantity": "3",
            "Unit": "tbsp",
            "Id": "water",
            "Group": "cauliflower"
          },
          {
            "Ingredient": "Coconut oil",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "oil-coconut",
            "Group": "sauce"
          },
          {
            "Ingredient": "Peanut or Almond Butter",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "almond-butter",
            "Group": "sauce"
          },
          {
            "Ingredient": "ginger",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "ginger",
            "Group": "sauce"
          },
          {
            "Ingredient": "Maple syrup",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "maple-syrup",
            "Group": "sauce"
          },
          {
            "Ingredient": "Soy sauce (for the sauce)",
            "Quantity": "4",
            "Unit": "tbsp",
            "Id": "soy-sauce-1",
            "Group": "sauce"
          },
          {
            "Ingredient": "Lime juice",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "lime-juice",
            "Group": "sauce"
          },
          {
            "Ingredient": "Chili garlic sauce or sriracha",
            "Quantity": "2-4",
            "Unit": "tbsp",
            "Id": "chili-garlic-sauce",
            "Group": "sauce"
          },
          {
            "Ingredient": "Water",
            "Quantity": "2-3",
            "Unit": "tbsp",
            "Id": "water",
            "Group": "sauce"
          },
          {
            "Ingredient": "Green beans (trimmed and halved)",
            "Quantity": "1+1/2",
            "Unit": "cups",
            "Id": "green-beans",
            "Group": "stir-fry"
          },
          {
            "Ingredient": "Cabbage (thinly sliced)",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "cabbage",
            "Group": "stir-fry"
          },
          {
            "Ingredient": "soy-sauce",
            "Quantity": "3",
            "Unit": "tbsp",
            "Id": "soy-sauce-2",
            "Group": "stir-fry"
          },
          {
            "Ingredient": "Green onions (diced)",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "onions-green",
            "Group": "stir-fry"
          },
          {
            "Ingredient": "Bell Pepper (sliced thinly)",
            "Quantity": "1",
            "Unit": "",
            "Id": "pepper-bell",
            "Group": "stir-fry"
          },
          {
            "Ingredient": "Cashews",
            "Quantity": "3/4",
            "Unit": "cups",
            "Id": "cashews",
            "Group": "stir-fry"
          },
          {
            "Ingredient": "A Blender",
            "Quantity": "",
            "Unit": "",
            "Id": "",
            "Group": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "Wash the cauliflower. Chop it in a blender until you have small chunks (that look more like rice than cauliflower.)",
          "f": [
            {
              "val": "Wash the cauliflower. Chop it in a blender until you have small chunks (that look more like rice than cauliflower.)"
            }
          ]
        },
        {
          "o": "Create the sauce: add coconut oil, peanut butter, soy sauce lime juice, chili garlic sauce, fresh ginger, maple syrup, and water into a small bowl. Whisk to combine. Set aside.",
          "f": [
            {
              "val": "Create the sauce: add coconut oil, peanut butter, soy sauce lime juice, chili garlic sauce, fresh ginger, maple syrup, and water into a small bowl. Whisk to combine. Set aside."
            }
          ]
        },
        {
          "o": "[&: 00:05:00] Heat a skillet over medium-low. Add cauliflower rice and water. Stir and cover with a lid to steam. Cook for 4-6 minutes or until just tender. Remove and let some steam out.",
          "f": [
            {
              "val": "Heat a skillet over medium-low. Add cauliflower rice and water. Stir and cover with a lid to steam. Cook for 4-6 minutes or until just tender. Remove and let some steam out."
            }
          ],
          "timer": "00:05:00"
        },
        {
          "o": "[&: 00:04:00] Heat another skillet (or pot) on medium heat. When hot, add coconut oil and green beans. Season with 1/3 of the soy sauce used for the stirfry (1tbsp). Cover with lid and steam for about 4 minutes.",
          "f": [
            {
              "val": "Heat another skillet (or pot) on medium heat. When hot, add coconut oil and green beans. Season with 1/3 of the soy sauce used for the stirfry (1tbsp). Cover with lid and steam for about 4 minutes."
            }
          ],
          "timer": "00:04:00"
        },
        {
          "o": "[&: 00:03:00] Add bell peppers, green onion, cabbage, and remaining soy sauce (2tbsp). Stir. Saute for 3-4 minutes.",
          "f": [
            {
              "val": "Add bell peppers, green onion, cabbage, and remaining soy sauce (2tbsp). Stir. Saute for 3-4 minutes."
            }
          ],
          "timer": "00:03:00"
        },
        {
          "o": "Add cashes and cauliflower rice and stir to combine.",
          "f": [
            {
              "val": "Add cashes and cauliflower rice and stir to combine."
            }
          ]
        },
        {
          "o": "[&: 00:03:00] Add the sauce to the beans. Increase heat to medium-high. Cook for about 3 minutes until hot.",
          "f": [
            {
              "val": "Add the sauce to the beans. Increase heat to medium-high. Cook for about 3 minutes until hot."
            }
          ],
          "timer": "00:03:00"
        }
      ],
      "content": {
        "props": {
          "type": "whisper"
        },
        "value": [
          "Don't use too much soy-sauce. Just don't."
        ]
      }
    },
    "kale-coconut-rice": {
      "meta": {
        "properties": {
          "day_made": "[2019-09-17]",
          "ease_of_making": "4/5",
          "imgs": "1.JPG,2.JPG,3.gif",
          "is_vegan": "false",
          "is_vegetarian": "true",
          "name": "Kale And Coconut Rice",
          "original_recipe": "https://cookieandkate.com/spicy-kale-and-coconut-fried-rice/",
          "rating": "5/5",
          "serves": "4",
          "belongs_to": "main",
          "slug": "kale-coconut-rice",
          "time": "00:40:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Coconut oil",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "oil-coconut"
          },
          {
            "Ingredient": "Eggs",
            "Quantity": "2",
            "Unit": "",
            "Id": "eggs"
          },
          {
            "Ingredient": "Garlic (minced)",
            "Quantity": "2",
            "Unit": "cloves",
            "Id": "garlic"
          },
          {
            "Ingredient": "Green onions (chopped)",
            "Quantity": "1",
            "Unit": "bunch",
            "Id": "onions-green"
          },
          {
            "Ingredient": "Chopped vegetables (peppers, brussel sprouts etc)",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "vegetables-chopped"
          },
          {
            "Ingredient": "Kale (ribs removed, chopped)",
            "Quantity": "1",
            "Unit": "bunch",
            "Id": "kale"
          },
          {
            "Ingredient": "Sea salt",
            "Quantity": "1/4",
            "Unit": "tsp",
            "Id": "salt-sea"
          },
          {
            "Ingredient": "Coconut flakes",
            "Quantity": "3/4",
            "Unit": "cups",
            "Id": "coconut-flakes"
          },
          {
            "Ingredient": "Rice",
            "Quantity": "1",
            "Unit": "cup",
            "Id": "rice"
          },
          {
            "Ingredient": "Soy sauce",
            "Quantity": "2",
            "Unit": "tsp",
            "Id": "sauce-soy"
          },
          {
            "Ingredient": "Sriracha",
            "Quantity": "2",
            "Unit": "tsp",
            "Id": "sriracha"
          },
          {
            "Ingredient": "Lime (halved)",
            "Quantity": "1",
            "Unit": "",
            "Id": "lime"
          },
          {
            "Ingredient": "Cilantro",
            "Quantity": "1",
            "Unit": "handful",
            "Id": "cilantro"
          }
        ]
      },
      "instructions": [
        {
          "o": "Cook the [#: rice | rice] and set it aside to cool.",
          "f": [
            {
              "val": "Cook the"
            },
            {
              "val": "rice",
              "attr": "rice"
            },
            {
              "val": "and set it aside to cool."
            }
          ]
        },
        {
          "o": "Heat a large skillet on medium high heat. Add 1 teaspoon of [#: oil-coconut | coconut oil].",
          "f": [
            {
              "val": "Heat a large skillet on medium high heat. Add 1 teaspoon of"
            },
            {
              "val": "coconut oil",
              "attr": "oil-coconut"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "Add [#: eggs | eggs] and stir frequently so they are sort of scrambled. Transfer to bowl when done and wipe the pan clean.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "eggs",
              "attr": "eggs"
            },
            {
              "val": "and stir frequently so they are sort of scrambled. Transfer to bowl when done and wipe the pan clean."
            }
          ]
        },
        {
          "o": "Add a tablespoon of coconut oil to pan. Add [#: garlic | garlic], [#: onions-green | green onions] and [#: vegetables-chopped | vegetables]. Cook until fragrant (30 seconds).  Add the [#: kale | kale] and [#: salt-sea | salt] . Cook until wilted, about 1-2 minutes. Transfer to bowl with eggs.",
          "f": [
            {
              "val": "Add a tablespoon of coconut oil to pan. Add"
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": ","
            },
            {
              "val": "green onions",
              "attr": "onions-green"
            },
            {
              "val": "and"
            },
            {
              "val": "vegetables",
              "attr": "vegetables-chopped"
            },
            {
              "val": ". Cook until fragrant (30 seconds).  Add the"
            },
            {
              "val": "kale",
              "attr": "kale"
            },
            {
              "val": "and"
            },
            {
              "val": "salt",
              "attr": "salt-sea"
            },
            {
              "val": ". Cook until wilted, about 1-2 minutes. Transfer to bowl with eggs."
            }
          ]
        },
        {
          "o": "Add 2 more tablespoons of coconut oil to the pan AGAIN. Add the coconut flakes, stir frequently until golden. Add the cooked rice and stir occaisionally until hot, about 3 minutes.",
          "f": [
            {
              "val": "Add 2 more tablespoons of coconut oil to the pan AGAIN. Add the coconut flakes, stir frequently until golden. Add the cooked rice and stir occaisionally until hot, about 3 minutes."
            }
          ]
        },
        {
          "o": "Pour the contents of the bowl back into the pan, breaking up the scrambled egg with a spatula.",
          "f": [
            {
              "val": "Pour the contents of the bowl back into the pan, breaking up the scrambled egg with a spatula."
            }
          ]
        },
        {
          "o": "Add Soy sauce, Sriracha, and half of the lime juice. Stir.",
          "f": [
            {
              "val": "Add Soy sauce, Sriracha, and half of the lime juice. Stir."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "dialogue"
        },
        "value": [
          "Clap-Clap (!) You know what that means?",
          "Dinner time!"
        ]
      }
    },
    "sweet-potato-gnocci": {
      "meta": {
        "properties": {
          "day_made": "[2019-09-22]",
          "ease_of_making": "3/5",
          "imgs": "1.JPG,2.JPG,4.gif",
          "is_vegan": "false",
          "is_vegetarian": "true",
          "name": "Sweet Potato Gnocchi",
          "original_recipe": "https://biancazapatka.com/en/vegan-sweet-potato-gnocchi/",
          "rating": "4/5",
          "belongs_to": "main",
          "slug": "sweet-potato-gnocci",
          "serves": "2",
          "time": "01:10:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Sweet Potato (large / 600g)",
            "Quantity": "1",
            "Unit": "",
            "Id": "potato-sweet"
          },
          {
            "Ingredient": "Nutritional Yeast or Parmesan (optional)",
            "Quantity": "2-3",
            "Unit": "tbsp",
            "Id": "parm"
          },
          {
            "Ingredient": "Flour",
            "Quantity": "1/3",
            "Unit": "cups",
            "Id": "flour"
          },
          {
            "Ingredient": "Salt",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "salt"
          },
          {
            "Ingredient": "Cherry tomatoes",
            "Quantity": "250",
            "Unit": "grams",
            "Id": "tomatoes"
          },
          {
            "Ingredient": "Vegan butter or coconut oil",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "coco-oil"
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "3",
            "Unit": "cloves",
            "Id": "garlic"
          },
          {
            "Ingredient": "Optional Nuts (pine or pecan, or whatever)",
            "Quantity": "4",
            "Unit": "tbsp",
            "Id": "nuts"
          }
        ]
      },
      "instructions": [
        {
          "o": "[&: 00:50:00] Prick the [#: potato-sweet | sweet potato] several times with a fork. Put it in the oven for 50-60 minutes at about 425 degrees.",
          "f": [
            {
              "val": "Prick the"
            },
            {
              "val": "sweet potato",
              "attr": "potato-sweet"
            },
            {
              "val": "several times with a fork. Put it in the oven for 50-60 minutes at about 425 degrees."
            }
          ],
          "timer": "00:50:00"
        },
        {
          "o": "Peel the sweet potato. Scoop the inside into a bowl. Mash it smooth. Add [#: salt | salt]. Add nutritional yeast or parmesan if you want. Add the [#: flour | flour] and knead gently. Don't over knead. Try to use as little flour as possible.",
          "f": [
            {
              "val": "Peel the sweet potato. Scoop the inside into a bowl. Mash it smooth. Add"
            },
            {
              "val": "salt",
              "attr": "salt"
            },
            {
              "val": ". Add nutritional yeast or parmesan if you want. Add the"
            },
            {
              "val": "flour",
              "attr": "flour"
            },
            {
              "val": "and knead gently. Don't over knead. Try to use as little flour as possible."
            }
          ]
        },
        {
          "o": "Transfer the dough to a floured work surface. Form it in a flat ball and cut into quarters. Take a piece and form a long rope, rolling it into a long rope. Cut the rope into 2cm pieces.",
          "f": [
            {
              "val": "Transfer the dough to a floured work surface. Form it in a flat ball and cut into quarters. Take a piece and form a long rope, rolling it into a long rope. Cut the rope into 2cm pieces."
            }
          ]
        },
        {
          "o": "Create gnocchi \"ridges\" into the sweet potato pieces by rolling it along the tines of a fork (from the tip backward).",
          "f": [
            {
              "val": "Create gnocchi \"ridges\" into the sweet potato pieces by rolling it along the tines of a fork (from the tip backward)."
            }
          ]
        },
        {
          "o": "Bring a pot of salted water to a boil. Add the gnocchi, cook until they float to the top of the water. Drain. Optional: toss with a little olive oil to prevent sticking.",
          "f": [
            {
              "val": "Bring a pot of salted water to a boil. Add the gnocchi, cook until they float to the top of the water. Drain. Optional: toss with a little olive oil to prevent sticking."
            }
          ]
        },
        {
          "o": "If you have more gnocchi than you need, now is the time to freeze the abundance!",
          "f": [
            {
              "val": "If you have more gnocchi than you need, now is the time to freeze the abundance!"
            }
          ]
        },
        {
          "o": "[&: 00:15:00] Put [#: tomatoes | tomatoes] onto a baking sheet with cloves of garlic. Drizzle  with olive oil. Season with salt and pepper. Roast in the oven at 400 for 15 minutes.",
          "f": [
            {
              "val": "Put"
            },
            {
              "val": "tomatoes",
              "attr": "tomatoes"
            },
            {
              "val": "onto a baking sheet with cloves of garlic. Drizzle  with olive oil. Season with salt and pepper. Roast in the oven at 400 for 15 minutes."
            }
          ],
          "timer": "00:15:00"
        },
        {
          "o": "Toast [#: nuts | nuts] in a small pan with additional oil. Set aside.",
          "f": [
            {
              "val": "Toast"
            },
            {
              "val": "nuts",
              "attr": "nuts"
            },
            {
              "val": "in a small pan with additional oil. Set aside."
            }
          ]
        },
        {
          "o": "Heat [#: coco-oil | coconut oil] on medium. Add the gnocchi and roast until golden-brown and crispy.",
          "f": [
            {
              "val": "Heat"
            },
            {
              "val": "coconut oil",
              "attr": "coco-oil"
            },
            {
              "val": "on medium. Add the gnocchi and roast until golden-brown and crispy."
            }
          ]
        },
        {
          "o": "Serve Gnocchi with roasted tomatoes and nuts and sprinkle with cheese or fresh chooped herbs.",
          "f": [
            {
              "val": "Serve Gnocchi with roasted tomatoes and nuts and sprinkle with cheese or fresh chooped herbs."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "big-quote"
        },
        "value": [
          "This one is worth the extra prep time."
        ]
      }
    },
    "garlic-alfredo-pasta": {
      "meta": {
        "properties": {
          "day_made": "[2019-09-23]",
          "ease_of_making": "3/5",
          "imgs": "false",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "White Wine Pasta w/ Brussel Sprouts",
          "original_recipe": "https://minimalistbaker.com/vegan-garlic-alfredo-pasta/",
          "rating": "3/5",
          "belongs_to": "main",
          "slug": "garlic-alfredo-pasta",
          "serves": "2",
          "time": "00:30:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Brussel Sprouts (halved)",
            "Quantity": "16",
            "Unit": "ounces",
            "Id": "brus"
          },
          {
            "Ingredient": "Olive Oil",
            "Quantity": "1-2",
            "Unit": "tbsp",
            "Id": "oil"
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "4",
            "Unit": "cloves",
            "Id": "garlic"
          },
          {
            "Ingredient": "White Wine",
            "Quantity": "1/3",
            "Unit": "cups",
            "Id": "wine"
          },
          {
            "Ingredient": "Cornstarch",
            "Quantity": "4",
            "Unit": "tbsp",
            "Id": "corn"
          },
          {
            "Ingredient": "Almond milk",
            "Quantity": "3/4",
            "Unit": "cups",
            "Id": "milk"
          },
          {
            "Ingredient": "Nutritional Yeast",
            "Quantity": "4",
            "Unit": "tbsp",
            "Id": "yeast"
          },
          {
            "Ingredient": "Parmesean",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "parm"
          },
          {
            "Ingredient": "Pasta",
            "Quantity": "10",
            "Unit": "ounces",
            "Id": "pasta"
          },
          {
            "Ingredient": "",
            "Quantity": "",
            "Unit": "",
            "Id": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "Preheat oven to 400F. Add [#: brus | brussel sprouts] to baking sheet in a single layer. Drizzel with [#: oil | oil] and season with salt and pepper. Arranger in a single layer.",
          "f": [
            {
              "val": "Preheat oven to 400F. Add"
            },
            {
              "val": "brussel sprouts",
              "attr": "brus"
            },
            {
              "val": "to baking sheet in a single layer. Drizzel with"
            },
            {
              "val": "oil",
              "attr": "oil"
            },
            {
              "val": "and season with salt and pepper. Arranger in a single layer."
            }
          ]
        },
        {
          "o": "Bring a pot of water to a boil.",
          "f": [
            {
              "val": "Bring a pot of water to a boil."
            }
          ]
        },
        {
          "o": "Heat a skillet. Add 1-2 tbsp of oil. Add [#: garlic | garlic]. Saute for 3 minutes.",
          "f": [
            {
              "val": "Heat a skillet. Add 1-2 tbsp of oil. Add"
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": ". Saute for 3 minutes."
            }
          ]
        },
        {
          "o": "[&:00:02:00] Add [#: wine | wine]. Saute for 2-4 minutes.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "wine",
              "attr": "wine"
            },
            {
              "val": ". Saute for 2-4 minutes."
            }
          ],
          "timer": "00:02:00"
        },
        {
          "o": "Add [#: corn | cornstarch] and [#: milk | almond milk] and whisk. It'll be clumpy.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "cornstarch",
              "attr": "corn"
            },
            {
              "val": "and"
            },
            {
              "val": "almond milk",
              "attr": "milk"
            },
            {
              "val": "and whisk. It'll be clumpy."
            }
          ]
        },
        {
          "o": "Move the mixture to a blender. Add [#: yeast | nutritional yeast], salt + pepper, [#: parm | parmesan cheese]. Blend on high until creamy and smooth.",
          "f": [
            {
              "val": "Move the mixture to a blender. Add"
            },
            {
              "val": "nutritional yeast",
              "attr": "yeast"
            },
            {
              "val": ", salt + pepper,"
            },
            {
              "val": "parmesan cheese",
              "attr": "parm"
            },
            {
              "val": ". Blend on high until creamy and smooth."
            }
          ]
        },
        {
          "o": "Transfer sauce back to skilled and warm over medium low heat. It should thicken, then lower the heat to low and simmer until the pasta is cooked. If it gets too thick, add almond milk to thin it out. Try not to let a film form overtop.",
          "f": [
            {
              "val": "Transfer sauce back to skilled and warm over medium low heat. It should thicken, then lower the heat to low and simmer until the pasta is cooked. If it gets too thick, add almond milk to thin it out. Try not to let a film form overtop."
            }
          ]
        },
        {
          "o": "[&:00:12:00] Add brussel sprouts to the oven for 12-15 minutes or until golden brown.",
          "f": [
            {
              "val": "Add brussel sprouts to the oven for 12-15 minutes or until golden brown."
            }
          ],
          "timer": "00:12:00"
        },
        {
          "o": "At the same time as the previous step, add pasta to boiling water and cook according to the package instructions.",
          "f": [
            {
              "val": "At the same time as the previous step, add pasta to boiling water and cook according to the package instructions."
            }
          ]
        },
        {
          "o": "Once the pasta is cooked, drain the water and add directly to the sauce along with the brussel sprouts. Season with more parmesean if you want.",
          "f": [
            {
              "val": "Once the pasta is cooked, drain the water and add directly to the sauce along with the brussel sprouts. Season with more parmesean if you want."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "big-quote"
        },
        "value": [
          "I forgot to take photos for this one."
        ]
      }
    },
    "kimchi-udon": {
      "meta": {
        "properties": {
          "belongs_to": "main",
          "day_made": "[2019-09-30]",
          "ease_of_making": "4/5",
          "imgs": "1.JPG,2.JPG,3.JPG,4.JPG",
          "is_vegan": "false",
          "is_vegetarian": "true",
          "name": "Kimchi Udon",
          "original_recipe": "https://www.bonappetit.com/recipe/kimchi-udon-with-scallions",
          "rating": "4/5",
          "serves": "2",
          "slug": "kimchi-udon",
          "time": "00:30:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Butter, unsalted",
            "Quantity": "5",
            "Unit": "tbsp",
            "Id": "butter"
          },
          {
            "Ingredient": "Kimchi (chopped)",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "kimchi"
          },
          {
            "Ingredient": "Kimchi (juice)",
            "Quantity": "1/3",
            "Unit": "cups",
            "Id": "kimchi-juice"
          },
          {
            "Ingredient": "Gochujang",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "gochu"
          },
          {
            "Ingredient": "Vegetable Broth",
            "Quantity": "1/2/",
            "Unit": "cup",
            "Id": "veg-broth"
          },
          {
            "Ingredient": "Udon Noodles",
            "Quantity": "1",
            "Unit": "lb",
            "Id": "udon"
          },
          {
            "Ingredient": "Toasted Sesame Seeds",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "sesa"
          },
          {
            "Ingredient": "Salt",
            "Quantity": "1",
            "Unit": "pinch",
            "Id": "salt"
          },
          {
            "Ingredient": "Egg yolks",
            "Quantity": "2- 4",
            "Unit": "",
            "Id": "yolks"
          },
          {
            "Ingredient": "Scallions (thinly sliced)",
            "Quantity": "3",
            "Unit": "",
            "Id": "scall"
          }
        ]
      },
      "instructions": [
        {
          "o": "Chop [#: kimchi | kimchi] and collect [#: kimchi-juice | kimchi juice].",
          "f": [
            {
              "val": "Chop"
            },
            {
              "val": "kimchi",
              "attr": "kimchi"
            },
            {
              "val": "and collect"
            },
            {
              "val": "kimchi juice",
              "attr": "kimchi-juice"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "[&: 00:04:00] Heat 2 tbsp of butter on medium high. Add chopped kimchi and [#: gochu | gochujang] and cook, stirring until kimchi is softened and lightly caramelized, around 4 minutes.",
          "f": [
            {
              "val": "Heat 2 tbsp of butter on medium high. Add chopped kimchi and"
            },
            {
              "val": "gochujang",
              "attr": "gochu"
            },
            {
              "val": "and cook, stirring until kimchi is softened and lightly caramelized, around 4 minutes."
            }
          ],
          "timer": "00:04:00"
        },
        {
          "o": "[&: 00:03:00] Add [#: veg-broth | broth] and kimchi juice and bring to a simmer. Cook until slightly reduced, about 3 minutes.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "broth",
              "attr": "veg-broth"
            },
            {
              "val": "and kimchi juice and bring to a simmer. Cook until slightly reduced, about 3 minutes."
            }
          ],
          "timer": "00:03:00"
        },
        {
          "o": "Boil [#: udon | noodles] according to package directions.",
          "f": [
            {
              "val": "Boil"
            },
            {
              "val": "noodles",
              "attr": "udon"
            },
            {
              "val": "according to package directions."
            }
          ]
        },
        {
          "o": "[&: 00:02:00] Using tongs, transfer noodles to the skillet and add the remaining 3 tbsp of butter. Cook, tossing often, about 2 minutes.",
          "f": [
            {
              "val": "Using tongs, transfer noodles to the skillet and add the remaining 3 tbsp of butter. Cook, tossing often, about 2 minutes."
            }
          ],
          "timer": "00:02:00"
        },
        {
          "o": "Season with salt if needed.",
          "f": [
            {
              "val": "Season with salt if needed."
            }
          ]
        },
        {
          "o": "Divide into bowls, top with egg yolks, [#: scall | scallions] and sesame seeds.",
          "f": [
            {
              "val": "Divide into bowls, top with egg yolks,"
            },
            {
              "val": "scallions",
              "attr": "scall"
            },
            {
              "val": "and sesame seeds."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "whisper"
        },
        "value": [
          "You can remove an egg white by moving the egg from hand to hand."
        ]
      }
    },
    "asparagus-spaghetti": {
      "meta": {
        "properties": {
          "day_made": "",
          "ease_of_making": "5/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "is_vegan": "false",
          "is_vegetarian": "true",
          "name": "Asparagus Spaghetti + Egg",
          "original_recipe": "https://www.easycheesyvegetarian.com/asparagus-spaghetti-fried-egg/",
          "rating": "3.5/5",
          "belongs_to": "main",
          "slug": "asparagus-spaghetti",
          "serves": "2",
          "time": "00:25:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Spaghetti",
            "Quantity": "200",
            "Unit": "grams",
            "Id": "spag"
          },
          {
            "Ingredient": "Butter",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "but"
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "2",
            "Unit": "cloves",
            "Id": "garlic"
          },
          {
            "Ingredient": "Asparagus (cut to 1-inch pieces)",
            "Quantity": "150",
            "Unit": "grams",
            "Id": "asparagus"
          },
          {
            "Ingredient": "Salt/Pepper",
            "Quantity": "1",
            "Unit": "pinch",
            "Id": "sandp"
          },
          {
            "Ingredient": "Parmesan",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "parm"
          },
          {
            "Ingredient": "Eggs",
            "Quantity": "2",
            "Unit": "",
            "Id": "eggs"
          },
          {
            "Ingredient": "Pre-made pesto sauce",
            "Quantity": "",
            "Unit": "",
            "Id": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "[&:00:10:00] Boil spaghetti until al dente. Around 10 minutes.",
          "f": [
            {
              "val": "Boil spaghetti until al dente. Around 10 minutes."
            }
          ],
          "timer": "00:10:00"
        },
        {
          "o": "[&:00:04:00] Melt [#: but | butter] in a frying pan and add [#: asparagus | asparagus]. Cook for a few minutes.",
          "f": [
            {
              "val": "Melt"
            },
            {
              "val": "butter",
              "attr": "but"
            },
            {
              "val": "in a frying pan and add"
            },
            {
              "val": "asparagus",
              "attr": "asparagus"
            },
            {
              "val": ". Cook for a few minutes."
            }
          ],
          "timer": "00:04:00"
        },
        {
          "o": "Add the [#: garlic | garlic] and cook a little longer until the asparagus is tender with a bit of a crunch still. Season with salt and pepper.",
          "f": [
            {
              "val": "Add the"
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": "and cook a little longer until the asparagus is tender with a bit of a crunch still. Season with salt and pepper."
            }
          ]
        },
        {
          "o": "When the pasta is ready, drain and add the asparagus mixture and the pesto. Mix everything in and put a lit on to keep the heat in.",
          "f": [
            {
              "val": "When the pasta is ready, drain and add the asparagus mixture and the pesto. Mix everything in and put a lit on to keep the heat in."
            }
          ]
        },
        {
          "o": "Make two fried eggs. Plate the spaghetti and put the egg on top.",
          "f": [
            {
              "val": "Make two fried eggs. Plate the spaghetti and put the egg on top."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "blurb"
        },
        "value": [
          "The original recipe instructs you to make your own pesto. I don't have the energy to find million dollar pine nuts right now! Too bad! I'm buying a jar of pesto! Too bad for you recipe! You can't tell me what to do! .... Anyway. This was quick and easy to make, but make sure you use enough asparagus for variety. Maybe consider adding some chopped nuts."
        ]
      }
    },
    "thai-rice-bowl": {
      "meta": {
        "properties": {
          "day_made": "[2019-10-07]",
          "ease_of_making": "5/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Thai-Spice Rice Bowls",
          "original_recipe": "https://cookieandkate.com/thai-spiced-rice-bowls-recipe/",
          "rating": "3/5",
          "serves": "6",
          "belongs_to": "main",
          "slug": "thai-rice-bowl",
          "time": "00:40:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Olive oil",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "oil",
            "Group": "broth"
          },
          {
            "Ingredient": "Red curry paste",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "rcp",
            "Group": "broth"
          },
          {
            "Ingredient": "Soy sauce",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "soysauce",
            "Group": "broth"
          },
          {
            "Ingredient": "Peanut butter",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "pb",
            "Group": "broth"
          },
          {
            "Ingredient": "Vegetable broth",
            "Quantity": "4",
            "Unit": "cups",
            "Id": "vegbroth",
            "Group": "broth"
          },
          {
            "Ingredient": "Honey",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "honey",
            "Group": "broth"
          },
          {
            "Ingredient": "Coconut milk",
            "Quantity": "1 (14 oz)",
            "Unit": "can",
            "Id": "coco",
            "Group": "broth"
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "4",
            "Unit": "cloves",
            "Id": "garlic",
            "Group": "broth"
          },
          {
            "Ingredient": "Ginger",
            "Quantity": "1",
            "Unit": "thumb-tip",
            "Id": "ginger",
            "Group": "broth"
          },
          {
            "Ingredient": "Rice",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "rice",
            "Group": ""
          },
          {
            "Ingredient": "Carrots (matchsticked)",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "carrots",
            "Group": ""
          },
          {
            "Ingredient": "Peanuts",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "peanuts",
            "Group": ""
          },
          {
            "Ingredient": "Cucumber",
            "Quantity": "1/2",
            "Unit": "",
            "Id": "cucu",
            "Group": ""
          },
          {
            "Ingredient": "Bell pepper (sliced)",
            "Quantity": "1",
            "Unit": "",
            "Id": "bell",
            "Group": ""
          },
          {
            "Ingredient": "Green onions (sliced)",
            "Quantity": "2",
            "Unit": "",
            "Id": "gonion",
            "Group": ""
          },
          {
            "Ingredient": "Jalapeno",
            "Quantity": "1",
            "Unit": "",
            "Id": "jalap",
            "Group": ""
          },
          {
            "Ingredient": "Lime",
            "Quantity": "1",
            "Unit": "",
            "Id": "lime",
            "Group": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "Make the [#: rice | rice]. Cook according to packaging.",
          "f": [
            {
              "val": "Make the"
            },
            {
              "val": "rice",
              "attr": "rice"
            },
            {
              "val": ". Cook according to packaging."
            }
          ]
        },
        {
          "o": "Prepare garnishes: matchstick the [#:carrots | carrots], thinly slice the [#: cucu | cucumber], slice the [#: jalap | jalapeno] into rings and chop the [#: peanuts | peanuts].",
          "f": [
            {
              "val": "Prepare garnishes: matchstick the"
            },
            {
              "val": "carrots",
              "attr": "arrots"
            },
            {
              "val": ", thinly slice the"
            },
            {
              "val": "cucumber",
              "attr": "cucu"
            },
            {
              "val": ", slice the"
            },
            {
              "val": "jalapeno",
              "attr": "jalap"
            },
            {
              "val": "into rings and chop the"
            },
            {
              "val": "peanuts",
              "attr": "peanuts"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "Broth pt. 1: heat saucepan with oil. Add [#: garlic | garlic] and [#: ginger | ginger] when hot, for 30 seconds.",
          "f": [
            {
              "val": "Broth pt. 1: heat saucepan with oil. Add"
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": "and"
            },
            {
              "val": "ginger",
              "attr": "ginger"
            },
            {
              "val": "when hot, for 30 seconds."
            }
          ]
        },
        {
          "o": "Broth pt. 2: Add [#: rcp | thai curry paste], [#: soysauce | soy sauce], [#: pb | peanut butter], [#: vegbroth | vegetable broth], [#: coco | coconut milk] and [#: honey | honey].",
          "f": [
            {
              "val": "Broth pt. 2: Add"
            },
            {
              "val": "thai curry paste",
              "attr": "rcp"
            },
            {
              "val": ","
            },
            {
              "val": "soy sauce",
              "attr": "soysauce"
            },
            {
              "val": ","
            },
            {
              "val": "peanut butter",
              "attr": "pb"
            },
            {
              "val": ","
            },
            {
              "val": "vegetable broth",
              "attr": "vegbroth"
            },
            {
              "val": ","
            },
            {
              "val": "coconut milk",
              "attr": "coco"
            },
            {
              "val": "and"
            },
            {
              "val": "honey",
              "attr": "honey"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "[&:00:10:00] Broth pt. 3: Bring to boil, reduce heat, simmer for 10 minutes.",
          "f": [
            {
              "val": "Broth pt. 3: Bring to boil, reduce heat, simmer for 10 minutes."
            }
          ],
          "timer": "00:10:00"
        },
        {
          "o": "Put rice in bowls, add broth, add diced vegetables as garnish. Enjoy!",
          "f": [
            {
              "val": "Put rice in bowls, add broth, add diced vegetables as garnish. Enjoy!"
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "big-quote"
        },
        "value": [
          "Is it supposed to be so soupy?"
        ]
      }
    },
    "tofu-pineapple-rice": {
      "meta": {
        "properties": {
          "day_made": "[2019-10-10]",
          "ease_of_making": "3/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Pineapple Salsa + Coconut Rice",
          "original_recipe": "https://ohsheglows.com/2012/07/09/grilled-tofu-with-pineapple-salsa-and-coconut-rice/",
          "rating": "3/5",
          "serves": "2-3",
          "belongs_to": "main",
          "slug": "tofu-pineapple-rice",
          "time": "00:50:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Olive oil",
            "Quantity": "",
            "Unit": "",
            "Id": "olive_oil",
            "Group": "tofu"
          },
          {
            "Ingredient": "Bell pepper",
            "Quantity": "1",
            "Unit": "",
            "Id": "bell_pepper",
            "Group": "pineapple salsa"
          },
          {
            "Ingredient": "Tofu (firm)",
            "Quantity": "1",
            "Unit": "package",
            "Id": "tofu",
            "Group": "tofu"
          },
          {
            "Ingredient": "Salt",
            "Quantity": "",
            "Unit": "pinch",
            "Id": "salt",
            "Group": "tofu"
          },
          {
            "Ingredient": "Shredded Coconut",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "shredded_coconut",
            "Group": "coconut rice"
          },
          {
            "Ingredient": "Brown rice",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "brown_rice",
            "Group": "coconut rice"
          },
          {
            "Ingredient": "Coconut milk",
            "Quantity": "1",
            "Unit": "can (400ml)",
            "Id": "coconut_milk",
            "Group": "coconut rice"
          },
          {
            "Ingredient": "Brown Sugar",
            "Quantity": "2",
            "Unit": "tsp",
            "Id": "brown_sugar",
            "Group": "coconut rice"
          },
          {
            "Ingredient": "Coconut oil",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "coconut_oil",
            "Group": "coconut rice"
          },
          {
            "Ingredient": "Pineapple (diced)",
            "Quantity": "1+1/2",
            "Unit": "cups",
            "Id": "pineapple",
            "Group": "pineapple salsa"
          },
          {
            "Ingredient": "Red onion (diced)",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "red_onion",
            "Group": "pineapple salsa"
          },
          {
            "Ingredient": "Jalapenos (seeded, diced)",
            "Quantity": "1",
            "Unit": "pepper",
            "Id": "jalapenos",
            "Group": "pineapple salsa"
          },
          {
            "Ingredient": "Garlic (minced)",
            "Quantity": "1",
            "Unit": "clove",
            "Id": "garlic",
            "Group": "pineapple salsa"
          },
          {
            "Ingredient": "Fresh lime juice",
            "Quantity": "3",
            "Unit": "tbsp",
            "Id": "lime_juice",
            "Group": "pineapple salsa"
          },
          {
            "Ingredient": "Red pepper flakes",
            "Quantity": "1",
            "Unit": "dash",
            "Id": "red_pepper_flakes",
            "Group": "pineapple salsa"
          }
        ]
      },
      "instructions": [
        {
          "o": "[&:00:20:00] Press the [#: tofu | tofu] for about 20 minutes (put something heavy on it.)",
          "f": [
            {
              "val": "Press the"
            },
            {
              "val": "tofu",
              "attr": "tofu"
            },
            {
              "val": "for about 20 minutes (put something heavy on it.)"
            }
          ],
          "timer": "00:20:00"
        },
        {
          "o": "[&:00:08:00] Preheat your oven for the coconut rice. 300F. Toast it for 8-12 minutes until golden brown.",
          "f": [
            {
              "val": "Preheat your oven for the coconut rice. 300F. Toast it for 8-12 minutes until golden brown."
            }
          ],
          "timer": "00:08:00"
        },
        {
          "o": "Go prep the salsa. Mix in bowl: diced [#: pineapple | pineapple], diced [#: red_onion | red onion], diced [#: jalapenos | jalapenos], [#: garlic | garlic], [#: bell_peppoer | peppers], [#: lime_juice | lime juice], [#: red_pepper_flakes | red pepper flakes].",
          "f": [
            {
              "val": "Go prep the salsa. Mix in bowl: diced"
            },
            {
              "val": "pineapple",
              "attr": "pineapple"
            },
            {
              "val": ", diced"
            },
            {
              "val": "red onion",
              "attr": "red_onion"
            },
            {
              "val": ", diced"
            },
            {
              "val": "jalapenos",
              "attr": "jalapenos"
            },
            {
              "val": ","
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": ","
            },
            {
              "val": "peppers",
              "attr": "bell_peppoer"
            },
            {
              "val": ","
            },
            {
              "val": "lime juice",
              "attr": "lime_juice"
            },
            {
              "val": ","
            },
            {
              "val": "red pepper flakes",
              "attr": "red_pepper_flakes"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "[&:00:25:00] Make the rice, but with the [#: coconut_milk | coconut milk] (instead of water!). Mix the can with the rice, bring it to a boil and then cover with a lid for 20-25 minutes until it's tender.",
          "f": [
            {
              "val": "Make the rice, but with the"
            },
            {
              "val": "coconut milk",
              "attr": "coconut_milk"
            },
            {
              "val": "(instead of water!). Mix the can with the rice, bring it to a boil and then cover with a lid for 20-25 minutes until it's tender."
            }
          ],
          "timer": "00:25:00"
        },
        {
          "o": "When rice is done, stir in some [#: brown_sugar | brown sugar] and, optionally, [#: coconut_oil | coconut oil].",
          "f": [
            {
              "val": "When rice is done, stir in some"
            },
            {
              "val": "brown sugar",
              "attr": "brown_sugar"
            },
            {
              "val": "and, optionally,"
            },
            {
              "val": "coconut oil",
              "attr": "coconut_oil"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "Grill the tofu - use a BBQ or pan and heat the tofu for about 5 minutes on each side.",
          "f": [
            {
              "val": "Grill the tofu - use a BBQ or pan and heat the tofu for about 5 minutes on each side."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "blurb"
        },
        "value": [
          "This recipe has a lot going on at once. If you are good at multitasking it might go quickly. I wouldn't know. Anyway. We'd recommend pressing the tofu first and then starting the coconut rice, both of which take 20-25 minutes. Also, when you grill the tofu, don't cut it too thick. If the tofu is bland, you could use some BBQ sauce."
        ]
      }
    },
    "pear-brie-salad": {
      "meta": {
        "properties": {
          "belongs_to": "salad",
          "day_made": "[2019-09-19]",
          "ease_of_making": "5/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "is_vegan": "false",
          "is_vegetarian": "true",
          "name": "Pear + Brie Salad",
          "original_recipe": "https://www.theorganickitchen.org/pears-and-brie-salad-with-honey-champagne-vinaigrette/",
          "rating": "5/5",
          "serves": "2",
          "slug": "pear-brie-salad",
          "time": "00:30:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Broccoli",
            "Quantity": "2",
            "Unit": "cups",
            "Id": "broc",
            "Group": "salad"
          },
          {
            "Ingredient": "Potatoes (chopped)",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "potatoes",
            "Group": "salad"
          },
          {
            "Ingredient": "Dill",
            "Quantity": "1",
            "Unit": "sprig",
            "Id": "dill",
            "Group": "salad"
          },
          {
            "Ingredient": "Pears (sliced)",
            "Quantity": "2",
            "Unit": "",
            "Id": "pears",
            "Group": "salad"
          },
          {
            "Ingredient": "Brie cheese",
            "Quantity": "4-6",
            "Unit": "slices",
            "Id": "cheese",
            "Group": "salad"
          },
          {
            "Ingredient": "Cranberries",
            "Quantity": "1/3",
            "Unit": "cups",
            "Id": "cran",
            "Group": "salad"
          },
          {
            "Ingredient": "Avocado",
            "Quantity": "1/2",
            "Unit": "",
            "Id": "avocado",
            "Group": "salad"
          },
          {
            "Ingredient": "Pecans (chopped)",
            "Quantity": "1/3",
            "Unit": "cups",
            "Id": "pecans",
            "Group": "salad"
          },
          {
            "Ingredient": "Olive oil",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": "oil-olive",
            "Group": "dressing"
          },
          {
            "Ingredient": "Apple cider vinegar",
            "Quantity": "2",
            "Unit": "tsp",
            "Id": "vinegar-apple",
            "Group": "dressing"
          },
          {
            "Ingredient": "Rice wine vinegar",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "vinegar-rice-wine",
            "Group": "dressing"
          },
          {
            "Ingredient": "Shallots (minced)",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "shallots",
            "Group": "dressing"
          },
          {
            "Ingredient": "Maple Syrup",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "maple-syrup",
            "Group": "dressing"
          },
          {
            "Ingredient": "Pepper",
            "Quantity": "1",
            "Unit": "pinch",
            "Id": "pepper",
            "Group": "dressing"
          }
        ]
      },
      "instructions": [
        {
          "o": "Preheat oven to 425.",
          "f": [
            {
              "val": "Preheat oven to 425."
            }
          ]
        },
        {
          "o": "Add chopped [#: potatoes | potatoes] and [#: broc | broccoli] florets to bowl with [#: oil-olive | olive oil] and salt and pepper and [#: dill | dill]. Stir to coat.",
          "f": [
            {
              "val": "Add chopped"
            },
            {
              "val": "potatoes",
              "attr": "potatoes"
            },
            {
              "val": "and"
            },
            {
              "val": "broccoli",
              "attr": "broc"
            },
            {
              "val": "florets to bowl with"
            },
            {
              "val": "olive oil",
              "attr": "oil-olive"
            },
            {
              "val": "and salt and pepper and"
            },
            {
              "val": "dill",
              "attr": "dill"
            },
            {
              "val": ". Stir to coat."
            }
          ]
        },
        {
          "o": "[&:00:12:00] Put contents of bowl on a baking sheet on parchment paper. Bake for 10-12 minutes.",
          "f": [
            {
              "val": "Put contents of bowl on a baking sheet on parchment paper. Bake for 10-12 minutes."
            }
          ],
          "timer": "00:12:00"
        },
        {
          "o": "Prepare the dressing for the salad. Add the following to a container and whisk: [#: oil-olive | Olive oil], [#: vinegar-rice-wine | Rice wine vinegar], [#: shallots | shallots], [#: maple-syrup | maple syrup], [#: pepper | ground pepper].",
          "f": [
            {
              "val": "Prepare the dressing for the salad. Add the following to a container and whisk:"
            },
            {
              "val": "Olive oil",
              "attr": "oil-olive"
            },
            {
              "val": ","
            },
            {
              "val": "Rice wine vinegar",
              "attr": "vinegar-rice-wine"
            },
            {
              "val": ","
            },
            {
              "val": "shallots",
              "attr": "shallots"
            },
            {
              "val": ","
            },
            {
              "val": "maple syrup",
              "attr": "maple-syrup"
            },
            {
              "val": ","
            },
            {
              "val": "ground pepper",
              "attr": "pepper"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "Prepare the salad: Lightly apply the dressing to the greens. Arrange pear slices and brie on a plate. Drizzle with dressing. Add greens, cranberries, pecans, and extra slices of pear. Add a bit more dressing.",
          "f": [
            {
              "val": "Prepare the salad: Lightly apply the dressing to the greens. Arrange pear slices and brie on a plate. Drizzle with dressing. Add greens, cranberries, pecans, and extra slices of pear. Add a bit more dressing."
            }
          ]
        },
        {
          "o": "Add the [#: potatoes | potatoes] and broccoli as a side or mixed with the salad.",
          "f": [
            {
              "val": "Add the"
            },
            {
              "val": "potatoes",
              "attr": "potatoes"
            },
            {
              "val": "and broccoli as a side or mixed with the salad."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "whisper"
        },
        "value": [
          "A voice echoes out from the darkness. \"You can put cheese on salad\". It sounds weird, but you didn't know this before. You can feel yourself becoming more cultured already."
        ]
      }
    },
    "salad-raw-beet": {
      "meta": {
        "properties": {
          "belongs_to": "salad",
          "day_made": "[2019-09-24]",
          "ease_of_making": "4/5",
          "imgs": "1.JPG,2.JPG,3.JPG,5.gif",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Raw Beet Salad w/ Quinoa",
          "original_recipe": "https://cookieandkate.com/raw-beet-salad-with-carrot-quinoa-spinach",
          "rating": "4/5",
          "serves": "2",
          "slug": "salad-raw-beet",
          "time": "00:50:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Quinoa",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": "quin",
            "Group": "salad"
          },
          {
            "Ingredient": "Edamame",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "eda",
            "Group": "salad"
          },
          {
            "Ingredient": "Nuts (almonds, pecans, whatever)",
            "Quantity": "1/3",
            "Unit": "cups",
            "Id": "nuts",
            "Group": "salad"
          },
          {
            "Ingredient": "A Beet (peeled)",
            "Quantity": "1",
            "Unit": "",
            "Id": "beet",
            "Group": "salad"
          },
          {
            "Ingredient": "A Large carrot",
            "Quantity": "1",
            "Unit": "",
            "Id": "carrot",
            "Group": "salad"
          },
          {
            "Ingredient": "Baby Spinach or Arugula",
            "Quantity": "2",
            "Unit": "cups",
            "Id": "greens",
            "Group": "salad"
          },
          {
            "Ingredient": "Avocado (cubed)",
            "Quantity": "1",
            "Unit": "",
            "Id": "avo",
            "Group": "salad"
          },
          {
            "Ingredient": "Apple Cider Vinegar",
            "Quantity": "3",
            "Unit": "tbsp",
            "Id": "vin",
            "Group": "dressing"
          },
          {
            "Ingredient": "Lime Juice",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "lime",
            "Group": "dressing"
          },
          {
            "Ingredient": "Olive Oil",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "oil",
            "Group": "dressing"
          },
          {
            "Ingredient": "Maple Syrup",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "syr",
            "Group": "dressing"
          },
          {
            "Ingredient": "Dijon Mustard",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "dij",
            "Group": "dressing"
          },
          {
            "Ingredient": "Salt, Pepper",
            "Quantity": "1",
            "Unit": "dash",
            "Id": "salt",
            "Group": "dressing"
          }
        ]
      },
      "instructions": [
        {
          "o": "[&:00:15:00] Cook the [#: quin | quinoa]: combine the quinoa with 1 cup of water. Bring to a boil, reduce heat and simmer for 15 minutes.",
          "f": [
            {
              "val": "Cook the"
            },
            {
              "val": "quinoa",
              "attr": "quin"
            },
            {
              "val": ": combine the quinoa with 1 cup of water. Bring to a boil, reduce heat and simmer for 15 minutes."
            }
          ],
          "timer": "00:15:00"
        },
        {
          "o": "[&:00:05:00] Cook the [#: eda | edamame]: bring a pot of water to boil, add the frozen edamame for 5 minutes. Drain and set aside.",
          "f": [
            {
              "val": "Cook the"
            },
            {
              "val": "edamame",
              "attr": "eda"
            },
            {
              "val": ": bring a pot of water to boil, add the frozen edamame for 5 minutes. Drain and set aside."
            }
          ],
          "timer": "00:05:00"
        },
        {
          "o": "[&:00:05:00] Toast the [#: nuts | nuts] in a pan over medium heat until they are fragrant. About 5 minutes.",
          "f": [
            {
              "val": "Toast the"
            },
            {
              "val": "nuts",
              "attr": "nuts"
            },
            {
              "val": "in a pan over medium heat until they are fragrant. About 5 minutes."
            }
          ],
          "timer": "00:05:00"
        },
        {
          "o": "Prepare the [#: beets | beets] and [#: carrot | carrots]: either chop finely or use a spiralizer to prepare the vegetables.",
          "f": [
            {
              "val": "Prepare the"
            },
            {
              "val": "beets",
              "attr": "beets"
            },
            {
              "val": "and"
            },
            {
              "val": "carrots",
              "attr": "carrot"
            },
            {
              "val": ": either chop finely or use a spiralizer to prepare the vegetables."
            }
          ]
        },
        {
          "o": "Prepare the vinaigrette: whisk together [#: vin | apple cider vinegar], [#: lime | lime juice], [#: oil | olive oil], [#: syr |  maple syrup ], [#: dij | dijon mustard], and [#: salt | salt and pepper].",
          "f": [
            {
              "val": "Prepare the vinaigrette: whisk together"
            },
            {
              "val": "apple cider vinegar",
              "attr": "vin"
            },
            {
              "val": ","
            },
            {
              "val": "lime juice",
              "attr": "lime"
            },
            {
              "val": ","
            },
            {
              "val": "olive oil",
              "attr": "oil"
            },
            {
              "val": ","
            },
            {
              "val": "maple syrup",
              "attr": "syr"
            },
            {
              "val": ","
            },
            {
              "val": "dijon mustard",
              "attr": "dij"
            },
            {
              "val": ", and"
            },
            {
              "val": "salt and pepper",
              "attr": "salt"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "Apply the dressing, not too much - if you have a lot of salad, portion it out and store undressed leftovers and save the dressing for leftovers.",
          "f": [
            {
              "val": "Apply the dressing, not too much - if you have a lot of salad, portion it out and store undressed leftovers and save the dressing for leftovers."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "whisper"
        },
        "value": [
          "You don't need a spiralizer for this, but it's helpful."
        ]
      }
    },
    "black-bean-salad": {
      "meta": {
        "properties": {
          "belongs_to": "salad",
          "day_made": "[2019-10-03]",
          "ease_of_making": "5/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Black Bean Salad",
          "original_recipe": "https://cookieandkate.com/black-bean-salad-recipe/",
          "rating": "5/5",
          "serves": "4",
          "slug": "black-bean-salad",
          "time": "00:20:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Black beans",
            "Quantity": "3",
            "Unit": "Cans (15oz/each)",
            "Id": "beans"
          },
          {
            "Ingredient": "Canned Corn",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "corn"
          },
          {
            "Ingredient": "Bell Pepper (any colour)",
            "Quantity": "1",
            "Unit": "",
            "Id": "pepper"
          },
          {
            "Ingredient": "Cherry Tomatoes",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "tomatoes"
          },
          {
            "Ingredient": "Red Onion (diced)",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "onion"
          },
          {
            "Ingredient": "Jalapeno (seeds optional)",
            "Quantity": "1",
            "Unit": "",
            "Id": "jalap"
          },
          {
            "Ingredient": "Lime Zest",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "lime-zest"
          },
          {
            "Ingredient": "Lime juice",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "lime-juice"
          },
          {
            "Ingredient": "Olive oil",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "oil"
          },
          {
            "Ingredient": "White vinegar",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "vin-wh"
          },
          {
            "Ingredient": "Chili powder",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "chil"
          },
          {
            "Ingredient": "Cumin",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "cumin"
          },
          {
            "Ingredient": "Salt",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "salt"
          },
          {
            "Ingredient": "Sliced Avocado (optional)",
            "Quantity": "1",
            "Unit": "",
            "Id": "avo"
          }
        ]
      },
      "instructions": [
        {
          "o": "In a large serving bowl combine all the ingredients.",
          "f": [
            {
              "val": "In a large serving bowl combine all the ingredients."
            }
          ]
        },
        {
          "o": "Cover and chill. Leftovers should last 3 to 4 days.",
          "f": [
            {
              "val": "Cover and chill. Leftovers should last 3 to 4 days."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "blurb"
        },
        "value": [
          "This has a lot of ingredients but very few steps. You'll basically end up just combing a bunch of stuff in a bowl  and then adding a dressing. We'd recommend not adding the dressing to the entire bowl if you plan on having leftovers, but adding the dressing every time you have the dish."
        ]
      }
    },
    "marinated-tofu": {
      "meta": {
        "properties": {
          "belongs_to": "side",
          "day_made": "[2019-09-02]",
          "ease_of_making": "5/5",
          "imgs": "false",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Easy Marinated Tofu",
          "original_recipe": "https://simpleveganblog.com/easy-marinated-tofu/",
          "rating": "4/5",
          "serves": "2",
          "slug": "marinated-tofu",
          "time": "00:25:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Tofu",
            "Quantity": "1",
            "Unit": "brick",
            "Id": "tofu",
            "Group": ""
          },
          {
            "Ingredient": "Water",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "water",
            "Group": ""
          },
          {
            "Ingredient": "Soy Sauce",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "sauce-soy",
            "Group": ""
          },
          {
            "Ingredient": "Maple syrup",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "maple-syrup",
            "Group": ""
          },
          {
            "Ingredient": "Apple cider vinegar",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "vinegar-apple-cider",
            "Group": ""
          },
          {
            "Ingredient": "Garlic powder",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "powder-garlic",
            "Group": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "[&:00:20:00] Press the [#: tofu | tofu] for a while (around 20 minutes). Then dice/cube it.",
          "f": [
            {
              "val": "Press the"
            },
            {
              "val": "tofu",
              "attr": "tofu"
            },
            {
              "val": "for a while (around 20 minutes). Then dice/cube it."
            }
          ],
          "timer": "00:20:00"
        },
        {
          "o": "Mix the marinade ingredients in a bowl.",
          "f": [
            {
              "val": "Mix the marinade ingredients in a bowl."
            }
          ]
        },
        {
          "o": "[&:00:15:00] Put the tofu in the bowl and cover. Put it in the fridge for 15 min.",
          "f": [
            {
              "val": "Put the tofu in the bowl and cover. Put it in the fridge for 15 min."
            }
          ],
          "timer": "00:15:00"
        },
        {
          "o": "Take the tofu out and pan fry until golden brown.",
          "f": [
            {
              "val": "Take the tofu out and pan fry until golden brown."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "whisper"
        },
        "value": [
          "Well, they are using plants to press the tofu. Big hulking things, sitting on top of 'em. Not trees, mind you. Frankly, I'm not surprised. It's about time they threw that weight around."
        ]
      }
    },
    "miso-asparagus": {
      "meta": {
        "properties": {
          "belongs_to": "side",
          "day_made": "[2019-10-01]",
          "ease_of_making": "4/5",
          "imgs": "1.JPG,2.JPG,3.gif",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Miso Asparagus",
          "original_recipe": "https://www.bonappetit.com/recipe/ginger-miso-grilled-asparagus",
          "rating": "2.5/5",
          "serves": "2",
          "slug": "miso-asparagus",
          "time": "00:30:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Mirin",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "mirin"
          },
          {
            "Ingredient": "Miso",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "miso"
          },
          {
            "Ingredient": "Rice Wine Vinegar",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "rwv"
          },
          {
            "Ingredient": "Ginger - peeled and grated",
            "Quantity": "2",
            "Unit": "tsp",
            "Id": "ginger"
          },
          {
            "Ingredient": "Asparagus",
            "Quantity": "2",
            "Unit": "bunches",
            "Id": "asp"
          },
          {
            "Ingredient": "Lime wedges",
            "Quantity": "4",
            "Unit": "",
            "Id": "lime"
          },
          {
            "Ingredient": "Scallions (Green onions)",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "scall"
          },
          {
            "Ingredient": "Sesame Seeds",
            "Quantity": "",
            "Unit": "sprinkle",
            "Id": "seeds"
          },
          {
            "Ingredient": "",
            "Quantity": "",
            "Unit": "",
            "Id": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "Prepare a grill to heat.",
          "f": [
            {
              "val": "Prepare a grill to heat."
            }
          ]
        },
        {
          "o": "Whisk [#: mirin |  mirin ], [#: miso | miso], [#: rwv | vinegar], [#: ginger | ginger], in a small bowl.",
          "f": [
            {
              "val": "Whisk"
            },
            {
              "val": "mirin",
              "attr": "mirin"
            },
            {
              "val": ","
            },
            {
              "val": "miso",
              "attr": "miso"
            },
            {
              "val": ","
            },
            {
              "val": "vinegar",
              "attr": "rwv"
            },
            {
              "val": ","
            },
            {
              "val": "ginger",
              "attr": "ginger"
            },
            {
              "val": ", in a small bowl."
            }
          ]
        },
        {
          "o": "Place [#: asp | asparagus] in a container and pour miso mixture over. Toss to coat.",
          "f": [
            {
              "val": "Place"
            },
            {
              "val": "asparagus",
              "attr": "asp"
            },
            {
              "val": "in a container and pour miso mixture over. Toss to coat."
            }
          ]
        },
        {
          "o": "Let things stew a few minutes. Cut the [#: scall | scallions].",
          "f": [
            {
              "val": "Let things stew a few minutes. Cut the"
            },
            {
              "val": "scallions",
              "attr": "scall"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "[&:00:04:00] Grill asparagus (or put it in a pan if you don't have a grill), turning occasionally until charred on all sides. About 4 minutes.",
          "f": [
            {
              "val": "Grill asparagus (or put it in a pan if you don't have a grill), turning occasionally until charred on all sides. About 4 minutes."
            }
          ],
          "timer": "00:04:00"
        },
        {
          "o": "Transfer to plate, squeeze [#: lime | lime juice] and top with scallions and sesame seeds.",
          "f": [
            {
              "val": "Transfer to plate, squeeze"
            },
            {
              "val": "lime juice",
              "attr": "lime"
            },
            {
              "val": "and top with scallions and sesame seeds."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "whisper"
        },
        "value": [
          "This could probably be a good side but we don't think it turned out super well. We don't have a BBQ right now so we used a pan. This made the asparagus a bit limp. We also probably over-doused it in the miso sauce... if you were using a grill it would have more places to drip off."
        ]
      }
    },
    "granola-bars": {
      "meta": {
        "properties": {
          "original_recipe": "https://minimalistbaker.com/healthy-5-ingredient-granola-bars/",
          "slug": "granola-bars",
          "name": "5 Ingredient Granola Bars",
          "day_made": "[2019-09-01]",
          "time": "00:25:00",
          "serves": "10 bars",
          "is_vegan": "true",
          "is_vegetarian": "false",
          "ease_of_making": "5/5",
          "rating": "5/5",
          "imgs": "1.JPG,2.JPG,1.gif",
          "belongs_to": "snack"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Dates (Deglet noor or medjool)",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "dates",
            "Group": ""
          },
          {
            "Ingredient": "Maple Syrup (or: agava nectar, honey)",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "maple-syrup",
            "Group": ""
          },
          {
            "Ingredient": "Natural Peanut Butter",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "peanut-butter",
            "Group": ""
          },
          {
            "Ingredient": "Roasted, unsalted almonds",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "almonds",
            "Group": ""
          },
          {
            "Ingredient": "Rolled Oats",
            "Quantity": "1+1/2",
            "Unit": "cups",
            "Id": "oats-rolled",
            "Group": ""
          },
          {
            "Ingredient": "Parchment Paper",
            "Quantity": "",
            "Unit": "",
            "Id": "parchment-paper",
            "Group": ""
          },
          {
            "Ingredient": "8x8 Baking Pan",
            "Quantity": "",
            "Unit": "",
            "Id": "",
            "Group": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "Chop [#: almonds | almonds] roughly. Put them in a bowl.",
          "f": [
            {
              "val": "Chop"
            },
            {
              "val": "almonds",
              "attr": "almonds"
            },
            {
              "val": "roughly. Put them in a bowl."
            }
          ]
        },
        {
          "o": "Put [#: oats-rolled | oats] in the bowl.",
          "f": [
            {
              "val": "Put"
            },
            {
              "val": "oats",
              "attr": "oats-rolled"
            },
            {
              "val": "in the bowl."
            }
          ]
        },
        {
          "o": "Blend [#: dates | dates] until dough-y. Put them in the bowl",
          "f": [
            {
              "val": "Blend"
            },
            {
              "val": "dates",
              "attr": "dates"
            },
            {
              "val": "until dough-y. Put them in the bowl"
            }
          ]
        },
        {
          "o": "Put [#: maple-syrup | maple syrup] and [#: peanut-butter | peanut-butter] into a saucepan and heat on low. Stir to combine.",
          "f": [
            {
              "val": "Put"
            },
            {
              "val": "maple syrup",
              "attr": "maple-syrup"
            },
            {
              "val": "and"
            },
            {
              "val": "peanut-butter",
              "attr": "peanut-butter"
            },
            {
              "val": "into a saucepan and heat on low. Stir to combine."
            }
          ]
        },
        {
          "o": "Pour mix into the bowl and stir to combine.",
          "f": [
            {
              "val": "Pour mix into the bowl and stir to combine."
            }
          ]
        },
        {
          "o": "Transfer to a baking dish (8 x 8) lined with parchment paper.",
          "f": [
            {
              "val": "Transfer to a baking dish (8 x 8) lined with parchment paper."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "big-quote"
        },
        "value": [
          "I've made a tornado of dates."
        ]
      }
    },
    "candied-ginger": {
      "meta": {
        "properties": {
          "belongs_to": "sweet",
          "day_made": "[2019-09-02]",
          "ease_of_making": "2/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Candied Ginger",
          "original_recipe": "https://www.davidlebovitz.com/candied-ginger/",
          "rating": "4/5",
          "serves": "one jar! (roughly)",
          "slug": "candied-ginger",
          "time": "04:00:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Ginger",
            "Quantity": "1",
            "Unit": "lbs",
            "Id": "ginger",
            "Group": ""
          },
          {
            "Ingredient": "White Sugar",
            "Quantity": "4",
            "Unit": "cups",
            "Id": "sugar-white",
            "Group": ""
          },
          {
            "Ingredient": "Water",
            "Quantity": "4",
            "Unit": "cups",
            "Id": "water",
            "Group": ""
          },
          {
            "Ingredient": "Salt",
            "Quantity": "1",
            "Unit": "pinch",
            "Id": "salt",
            "Group": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "Peel the [#: ginger | ginger].",
          "f": [
            {
              "val": "Peel the"
            },
            {
              "val": "ginger",
              "attr": "ginger"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "Slice the ginger thinly.",
          "f": [
            {
              "val": "Slice the ginger thinly."
            }
          ]
        },
        {
          "o": "Put ginger into a pot, cover with water. Bring water to a boil.",
          "f": [
            {
              "val": "Put ginger into a pot, cover with water. Bring water to a boil."
            }
          ]
        },
        {
          "o": "[&:00:10:00] Reduce heat and simmer for 10 minutes.",
          "f": [
            {
              "val": "Reduce heat and simmer for 10 minutes."
            }
          ],
          "timer": "00:10:00"
        },
        {
          "o": "Repeat the previous step.",
          "f": [
            {
              "val": "Repeat the previous step."
            }
          ]
        },
        {
          "o": "Mix the [#: sugar-white | sugar], [#: water | water], [#: salt | salt] and ginger slices in the pot. Cook until the temperature reaches 225F (106C). A candy thermometer is very helpful, but otherwise, you can estimate cooking for 40 to 60 min.",
          "f": [
            {
              "val": "Mix the"
            },
            {
              "val": "sugar",
              "attr": "sugar-white"
            },
            {
              "val": ","
            },
            {
              "val": "water",
              "attr": "water"
            },
            {
              "val": ","
            },
            {
              "val": "salt",
              "attr": "salt"
            },
            {
              "val": "and ginger slices in the pot. Cook until the temperature reaches 225F (106C). A candy thermometer is very helpful, but otherwise, you can estimate cooking for 40 to 60 min."
            }
          ]
        },
        {
          "o": "[&:01:00:00] Remove from heat. Let stand for one hour.",
          "f": [
            {
              "val": "Remove from heat. Let stand for one hour."
            }
          ],
          "timer": "01:00:00"
        },
        {
          "o": "Drain the ginger through a colander, catch the syrup.",
          "f": [
            {
              "val": "Drain the ginger through a colander, catch the syrup."
            }
          ]
        },
        {
          "o": "Toss drained ginger in sugar.",
          "f": [
            {
              "val": "Toss drained ginger in sugar."
            }
          ]
        },
        {
          "o": "Shake off excess sugar, and spread the ginger slices on a baking sheet or cooling rack until they are somewhat dry.",
          "f": [
            {
              "val": "Shake off excess sugar, and spread the ginger slices on a baking sheet or cooling rack until they are somewhat dry."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "dialogue"
        },
        "value": [
          "I hope I don't ruin your pan.",
          "That's ok. It's Chemistry."
        ]
      }
    },
    "pumpkin-chiffon-pie": {
      "meta": {
        "properties": {
          "belongs_to": "sweet",
          "day_made": "[2019-10-14]",
          "ease_of_making": "3/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "is_vegan": "false",
          "is_vegetarian": "true",
          "name": "Pumpkin Chiffon Pie",
          "original_recipe": "-",
          "rating": "4/5",
          "serves": "1 pie",
          "slug": "pumpkin-chiffon-pie",
          "time": "01:00:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Whipping cream",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "wc",
            "Group": "Creamy filling"
          },
          {
            "Ingredient": "Icing sugar",
            "Quantity": "3/4",
            "Unit": "cups",
            "Id": "is",
            "Group": "Creamy filling"
          },
          {
            "Ingredient": "Vanilla",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "van",
            "Group": "Creamy filling"
          },
          {
            "Ingredient": "Cinnamon",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "cin",
            "Group": "Creamy filling"
          },
          {
            "Ingredient": "Plain Gelatin",
            "Quantity": "1~",
            "Unit": "tbsp",
            "Id": "gelatin",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Cold Water",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "water",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Eggs",
            "Quantity": "3",
            "Unit": "",
            "Id": "eggs",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "White sugar",
            "Quantity": "1/3",
            "Unit": "cups",
            "Id": "ws",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Cinnamon",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "cin2",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Ginger",
            "Quantity": "1/4",
            "Unit": "tsp",
            "Id": "ginger",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Salt",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "salt",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Allspice",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "allspice",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Canned pumpkin",
            "Quantity": "1+1/4",
            "Unit": "cups",
            "Id": "pumpkin",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Milk",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": "milk",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Icing sugar",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "icsug",
            "Group": "Pumpkin filling"
          },
          {
            "Ingredient": "Pre-made crust shell",
            "Quantity": "",
            "Unit": "",
            "Id": "",
            "Group": "Crust"
          }
        ]
      },
      "instructions": [
        {
          "o": "Prepare the pie shell based on its package instructions. They should outline how long to bake the shell without a filling but if not - bake for 8-10 minutes at 425c.",
          "f": [
            {
              "val": "Prepare the pie shell based on its package instructions. They should outline how long to bake the shell without a filling but if not - bake for 8-10 minutes at 425c."
            }
          ]
        },
        {
          "o": "Start with the pumpkin filling. Add the [#: gelatin | gelatin] to a bowl of cold water.",
          "f": [
            {
              "val": "Start with the pumpkin filling. Add the"
            },
            {
              "val": "gelatin",
              "attr": "gelatin"
            },
            {
              "val": "to a bowl of cold water."
            }
          ]
        },
        {
          "o": "Split the egg yolks and whites between 2 large bowls. Beat the yolks.",
          "f": [
            {
              "val": "Split the egg yolks and whites between 2 large bowls. Beat the yolks."
            }
          ]
        },
        {
          "o": "Mix together the [#: ws | white sugar], [#: salt | salt] and spices, then mix that into the bowl with beaten yolks.",
          "f": [
            {
              "val": "Mix together the"
            },
            {
              "val": "white sugar",
              "attr": "ws"
            },
            {
              "val": ","
            },
            {
              "val": "salt",
              "attr": "salt"
            },
            {
              "val": "and spices, then mix that into the bowl with beaten yolks."
            }
          ]
        },
        {
          "o": "Add in the [#: pumpkin | canned pumpkin] and [#: milk | milk], then mix some more.",
          "f": [
            {
              "val": "Add in the"
            },
            {
              "val": "canned pumpkin",
              "attr": "pumpkin"
            },
            {
              "val": "and"
            },
            {
              "val": "milk",
              "attr": "milk"
            },
            {
              "val": ", then mix some more."
            }
          ]
        },
        {
          "o": "Add the mixture to a big pot and cook over moderate heat, stirring frequently until it boils.",
          "f": [
            {
              "val": "Add the mixture to a big pot and cook over moderate heat, stirring frequently until it boils."
            }
          ]
        },
        {
          "o": "Let it boil for about a minute then remove from heat.",
          "f": [
            {
              "val": "Let it boil for about a minute then remove from heat."
            }
          ]
        },
        {
          "o": "Stir in the bowl of gelatin until its dissolved, then let the filling cool until it thickens a bit.",
          "f": [
            {
              "val": "Stir in the bowl of gelatin until its dissolved, then let the filling cool until it thickens a bit."
            }
          ]
        },
        {
          "o": "With the bowl of egg whites, use a beater and slowly sift in the [#: icsug | icing sugar]. It should start to thicken and ideally look a bit like whipped cream.",
          "f": [
            {
              "val": "With the bowl of egg whites, use a beater and slowly sift in the"
            },
            {
              "val": "icing sugar",
              "attr": "icsug"
            },
            {
              "val": ". It should start to thicken and ideally look a bit like whipped cream."
            }
          ]
        },
        {
          "o": "Add in the pumpkin mix, folding it into the egg white sugar mix.",
          "f": [
            {
              "val": "Add in the pumpkin mix, folding it into the egg white sugar mix."
            }
          ]
        },
        {
          "o": "Next, prepare the cream filling by pouring the [#: wc | whipping cream] into a fresh bowl.",
          "f": [
            {
              "val": "Next, prepare the cream filling by pouring the"
            },
            {
              "val": "whipping cream",
              "attr": "wc"
            },
            {
              "val": "into a fresh bowl."
            }
          ]
        },
        {
          "o": "Whip the cream til it thickens then sift in the icing sugar, and add [#: van | vanilla] and [#: cin2 | cinnamon]. Keep this in the fridge until it’s needed.",
          "f": [
            {
              "val": "Whip the cream til it thickens then sift in the icing sugar, and add"
            },
            {
              "val": "vanilla",
              "attr": "van"
            },
            {
              "val": "and"
            },
            {
              "val": "cinnamon",
              "attr": "cin2"
            },
            {
              "val": ". Keep this in the fridge until it’s needed."
            }
          ]
        },
        {
          "o": "Fill the pie! Layer the 2 fillings starting with half of the pumpkin, then half of the cream, then the rest of the pumpkin.",
          "f": [
            {
              "val": "Fill the pie! Layer the 2 fillings starting with half of the pumpkin, then half of the cream, then the rest of the pumpkin."
            }
          ]
        },
        {
          "o": "Put in the fridge for at least 2 hours.",
          "f": [
            {
              "val": "Put in the fridge for at least 2 hours."
            }
          ]
        },
        {
          "o": "When you’re ready to eat, top it with the rest of the cream.",
          "f": [
            {
              "val": "When you’re ready to eat, top it with the rest of the cream."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "dialogue"
        },
        "value": [
          "Come look at this. Look at this beautiful thing!",
          "We have like, 10 photos of people holding the pie."
        ]
      }
    },
    "mediterranean-baked-sweet-potatoes": {
      "meta": {
        "properties": {
          "original_recipe": "https://minimalistbaker.com/mediterranean-baked-sweet-potatoes/",
          "slug": "mediterranean-baked-sweet-potatoes",
          "day_made": "[2019-11-11]",
          "name": "Mediterranean Baked Sweet Potatoes",
          "serves": "2",
          "time": "01:00:00",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "ease_of_making": "5/5",
          "rating": "5/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "belongs_to": "main"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Sweet Potato",
            "Quantity": "2",
            "Unit": "",
            "Id": "sw",
            "Group": "Main"
          },
          {
            "Ingredient": "Chickpeas",
            "Quantity": "15",
            "Unit": "oz",
            "Id": "chick",
            "Group": "Main"
          },
          {
            "Ingredient": "Olive Oil",
            "Quantity": "1/2",
            "Unit": "tbsp",
            "Id": "oil",
            "Group": "Main"
          },
          {
            "Ingredient": "Cumin",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "cumin",
            "Group": "Main"
          },
          {
            "Ingredient": "Coriander",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "cor",
            "Group": "Main"
          },
          {
            "Ingredient": "Cinnamon",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "cin",
            "Group": "Main"
          },
          {
            "Ingredient": "Paprika",
            "Quantity": "l",
            "Unit": "tsp",
            "Id": "pap",
            "Group": "Main"
          },
          {
            "Ingredient": "Hummus",
            "Quantity": "1/4",
            "Unit": "cup",
            "Id": "hum",
            "Group": "Garlic Herb Sauce"
          },
          {
            "Ingredient": "Dried Dill",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "dill",
            "Group": "Garlic Herb Sauce"
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "3",
            "Unit": "cloves",
            "Id": "garlic",
            "Group": "Garlic Herb Sauce"
          },
          {
            "Ingredient": "Lemon",
            "Quantity": "1/2",
            "Unit": "lemon",
            "Id": "lem",
            "Group": "Garlic Herb Sauce"
          },
          {
            "Ingredient": "Water",
            "Quantity": "",
            "Unit": "splash",
            "Id": "water",
            "Group": "Garlic Herb Sauce"
          },
          {
            "Ingredient": "Salt",
            "Quantity": "",
            "Unit": "pinch",
            "Id": "salt",
            "Group": "Garlic Herb Sauce"
          },
          {
            "Ingredient": "Cherry Tomatoes",
            "Quantity": "1/4",
            "Unit": "cup",
            "Id": "tomat",
            "Group": "Toppings"
          },
          {
            "Ingredient": "Chopped Cilantro",
            "Quantity": "1/4",
            "Unit": "cup",
            "Id": "cil",
            "Group": "Toppings"
          },
          {
            "Ingredient": "Lemon Juice",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "lemju",
            "Group": "Toppings"
          },
          {
            "Ingredient": "Chili Garlic Sauce",
            "Quantity": "",
            "Unit": "pinch",
            "Id": "chilsauce",
            "Group": "Toppings"
          }
        ]
      },
      "instructions": [
        {
          "o": "Preheat oven to 400 degrees. Line a large baking sheet with foil.",
          "f": [
            {
              "val": "Preheat oven to 400 degrees. Line a large baking sheet with foil."
            }
          ]
        },
        {
          "o": "Rinse potatoes and cut in half. Coat sweet potatoes with olive oil and put them face down on the foil.",
          "f": [
            {
              "val": "Rinse potatoes and cut in half. Coat sweet potatoes with olive oil and put them face down on the foil."
            }
          ]
        },
        {
          "o": "Drain [#: chick | chickpeas]. Toss in [#: oil | olive oil]. Add spices. 1/2 tsp of: cumin, coriander, cinnamon, smoked paprika.",
          "f": [
            {
              "val": "Drain"
            },
            {
              "val": "chickpeas",
              "attr": "chick"
            },
            {
              "val": ". Toss in"
            },
            {
              "val": "olive oil",
              "attr": "oil"
            },
            {
              "val": ". Add spices. 1/2 tsp of: cumin, coriander, cinnamon, smoked paprika."
            }
          ]
        },
        {
          "o": "[&:00:45:00] Put potato and chickpeas in the oven.",
          "f": [
            {
              "val": "Put potato and chickpeas in the oven."
            }
          ],
          "timer": "00:45:00"
        },
        {
          "o": "Create the sauce while things are in the oven. Mix: [#: hum | hummus], [#: lem | lemon juice], [#: garlic | garlic], [#: dill | dill] water and salt.",
          "f": [
            {
              "val": "Create the sauce while things are in the oven. Mix:"
            },
            {
              "val": "hummus",
              "attr": "hum"
            },
            {
              "val": ","
            },
            {
              "val": "lemon juice",
              "attr": "lem"
            },
            {
              "val": ","
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": ","
            },
            {
              "val": "dill",
              "attr": "dill"
            },
            {
              "val": "water and salt."
            }
          ]
        },
        {
          "o": "Chop [#: tomat | tomatoes] and [#: cil | cilantro] and put in a bowl with [#: lemju | lemon juice]. Let it sit and marinade.",
          "f": [
            {
              "val": "Chop"
            },
            {
              "val": "tomatoes",
              "attr": "tomat"
            },
            {
              "val": "and"
            },
            {
              "val": "cilantro",
              "attr": "cil"
            },
            {
              "val": "and put in a bowl with"
            },
            {
              "val": "lemon juice",
              "attr": "lemju"
            },
            {
              "val": ". Let it sit and marinade."
            }
          ]
        },
        {
          "o": "Serve up: take out potatoes, and mash them open a bit. Top with roasted chickpeas, sauce, and cilantro and tomatoes. Serve quickly!",
          "f": [
            {
              "val": "Serve up: take out potatoes, and mash them open a bit. Top with roasted chickpeas, sauce, and cilantro and tomatoes. Serve quickly!"
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "haiku"
        },
        "value": [
          "Searching through aisles",
          "For dried dill and wondering",
          "What dried dill looks like."
        ]
      }
    },
    "chickpea-cauliflower-curry": {
      "meta": {
        "properties": {
          "original_recipe": "https://minimalistbaker.com/1-pot-yellow-chickpea-cauliflower-curry/",
          "slug": "chickpea-cauliflower-curry",
          "day_made": "[2019-11-12]",
          "name": "Chickpea Cauliflower Curry",
          "serves": "2",
          "time": "00:45:00",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "ease_of_making": "5/5",
          "rating": "4/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "belongs_to": "main"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Coconut oil",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "coco",
            "Group": "Curry"
          },
          {
            "Ingredient": "Shallot",
            "Quantity": "1/3",
            "Unit": "cups",
            "Id": "shal",
            "Group": "Curry"
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "4",
            "Unit": "cloves",
            "Id": "gar",
            "Group": "Curry"
          },
          {
            "Ingredient": "Ginger",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "gin",
            "Group": "Curry"
          },
          {
            "Ingredient": "Jalapeno pepper",
            "Quantity": "1",
            "Unit": "",
            "Id": "ja",
            "Group": "Curry"
          },
          {
            "Ingredient": "Curry paste",
            "Quantity": "4",
            "Unit": "tbsp",
            "Id": "cur",
            "Group": "Curry"
          },
          {
            "Ingredient": "Coconut milk",
            "Quantity": "2",
            "Unit": "cups",
            "Id": "comilk",
            "Group": "Curry"
          },
          {
            "Ingredient": "Turmeric",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "tur",
            "Group": "Curry"
          },
          {
            "Ingredient": "Maple Syrup",
            "Quantity": "1",
            "Unit": "tbsp",
            "Id": "mapsyr",
            "Group": "Curry"
          },
          {
            "Ingredient": "Soy Sauce",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "soysauce",
            "Group": "Curry"
          },
          {
            "Ingredient": "Cauliflower",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "caul",
            "Group": "Curry"
          },
          {
            "Ingredient": "Chickpeas",
            "Quantity": "1+1/4",
            "Unit": "cups",
            "Id": "chick",
            "Group": "Curry"
          },
          {
            "Ingredient": "Quinoa/Rice",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "quin",
            "Group": "Base"
          },
          {
            "Ingredient": "Avocado",
            "Quantity": "1",
            "Unit": "",
            "Id": "",
            "Group": "Toppings"
          },
          {
            "Ingredient": "Red onion",
            "Quantity": "1/2",
            "Unit": "onion",
            "Id": "",
            "Group": "Toppings"
          }
        ]
      },
      "instructions": [
        {
          "o": "[&:00:03:00] Heat a large pot. Add [#: coco | Coconut oil]. Add [#: shal | shallot] [#: gar | garlic] and [#: gin | ginger] [#: ja | jalapeno pepper]. Sauté for 2-3 minutes.",
          "f": [
            {
              "val": "Heat a large pot. Add"
            },
            {
              "val": "Coconut oil",
              "attr": "coco"
            },
            {
              "val": ". Add"
            },
            {
              "val": "shallot",
              "attr": "shal"
            },
            {
              "val": "garlic",
              "attr": "gar"
            },
            {
              "val": "and"
            },
            {
              "val": "ginger",
              "attr": "gin"
            },
            {
              "val": "jalapeno pepper",
              "attr": "ja"
            },
            {
              "val": ". Sauté for 2-3 minutes."
            }
          ],
          "timer": "00:03:00"
        },
        {
          "o": "[&:00:02:00] Add [#: cur | curry paste]. Cook for 2 minutes.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "curry paste",
              "attr": "cur"
            },
            {
              "val": ". Cook for 2 minutes."
            }
          ],
          "timer": "00:02:00"
        },
        {
          "o": "Add [#: comilk | coconut milk] [#: tur | turmeric] [#: mapsyr | maple syrup] [#: soysauce | Soy Sauce]  and stir. Bring to simmer over medium heat.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "coconut milk",
              "attr": "comilk"
            },
            {
              "val": "turmeric",
              "attr": "tur"
            },
            {
              "val": "maple syrup",
              "attr": "mapsyr"
            },
            {
              "val": "Soy Sauce",
              "attr": "soysauce"
            },
            {
              "val": "and stir. Bring to simmer over medium heat."
            }
          ]
        },
        {
          "o": "Once simmering, add [#: caul | cauliflower] and [#: chick | chickpeas].",
          "f": [
            {
              "val": "Once simmering, add"
            },
            {
              "val": "cauliflower",
              "attr": "caul"
            },
            {
              "val": "and"
            },
            {
              "val": "chickpeas",
              "attr": "chick"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "[&:00:10:00] Cover and cook for 10-15 minutes. Keep at a simmer.",
          "f": [
            {
              "val": "Cover and cook for 10-15 minutes. Keep at a simmer."
            }
          ],
          "timer": "00:10:00"
        },
        {
          "o": "Make quinoa or rice according to package instructions.",
          "f": [
            {
              "val": "Make quinoa or rice according to package instructions."
            }
          ]
        },
        {
          "o": "Serve curry over quinoa. Top with slice avocado and red onion.",
          "f": [
            {
              "val": "Serve curry over quinoa. Top with slice avocado and red onion."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "whisper"
        },
        "value": [
          "We danced to Junior Boys while we cooked this one."
        ]
      }
    },
    "overnight-oats": {
      "meta": {
        "properties": {
          "original_recipe": "https://ohsheglows.com/2015/07/22/vegan-overnight-oats/",
          "slug": "overnight-oats",
          "day_made": "[2019-11-12]",
          "name": "Overnight Oats",
          "serves": "2",
          "time": "00:10:00",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "ease_of_making": "5/5",
          "rating": "5/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "belongs_to": "breakfast"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Ripe / Spotty Bananas",
            "Quantity": "2",
            "Unit": "",
            "Id": "ban",
            "Group": ""
          },
          {
            "Ingredient": "Chia Seeds",
            "Quantity": "4",
            "Unit": "tbsp",
            "Id": "chia",
            "Group": ""
          },
          {
            "Ingredient": "Cinnamon",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "cin",
            "Group": ""
          },
          {
            "Ingredient": "Almond Milk",
            "Quantity": "1+1/2",
            "Unit": "cups",
            "Id": "almilk",
            "Group": ""
          },
          {
            "Ingredient": "Oats",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "oats",
            "Group": ""
          },
          {
            "Ingredient": "Vanilla Extract",
            "Quantity": "1/2",
            "Unit": "tsp",
            "Id": "van",
            "Group": ""
          },
          {
            "Ingredient": "Fresh fruit",
            "Quantity": "Optional",
            "Unit": "",
            "Id": "",
            "Group": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "In a bowl, mash [#: ban | bananas] until smooth. Stir in [#: chia | chia seeds] and [#: cin | cinnamon] to combine.",
          "f": [
            {
              "val": "In a bowl, mash"
            },
            {
              "val": "bananas",
              "attr": "ban"
            },
            {
              "val": "until smooth. Stir in"
            },
            {
              "val": "chia seeds",
              "attr": "chia"
            },
            {
              "val": "and"
            },
            {
              "val": "cinnamon",
              "attr": "cin"
            },
            {
              "val": "to combine."
            }
          ]
        },
        {
          "o": "Stir in [#: oats | oats], [#: almilk | almond milk] and [#: van | vanilla extract] (optional).",
          "f": [
            {
              "val": "Stir in"
            },
            {
              "val": "oats",
              "attr": "oats"
            },
            {
              "val": ","
            },
            {
              "val": "almond milk",
              "attr": "almilk"
            },
            {
              "val": "and"
            },
            {
              "val": "vanilla extract",
              "attr": "van"
            },
            {
              "val": "(optional)."
            }
          ]
        },
        {
          "o": "Cover and refrigerate overnight.",
          "f": [
            {
              "val": "Cover and refrigerate overnight."
            }
          ]
        },
        {
          "o": "In the morning, stir the oats. Distribute into bowls and add fresh fruit.",
          "f": [
            {
              "val": "In the morning, stir the oats. Distribute into bowls and add fresh fruit."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "blurb"
        },
        "value": [
          "This is a good one. It's easy to make and quick. You can easily double the recipes to make enough for multiple days. Make sure to get some fresh fruit to put on top for when you prepare it."
        ]
      }
    },
    "orange-orzo-salad": {
      "meta": {
        "properties": {
          "original_recipe": "https://ohsheglows.com/2015/07/22/vegan-overnight-oats/",
          "slug": "orange-orzo-salad",
          "day_made": "[2019-11-13]",
          "name": "Orange Orzo Salad",
          "serves": "2",
          "time": "00:30:00",
          "is_vegan": "false",
          "is_vegetarian": "true",
          "ease_of_making": "4/5",
          "rating": "5/5",
          "imgs": "1.JPG,2.JPG,3.JPG",
          "belongs_to": "salad"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Orzo Pasta",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "orzo",
            "Group": "Salad"
          },
          {
            "Ingredient": "Almonds",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": "al",
            "Group": "Salad"
          },
          {
            "Ingredient": "Chopped Parsley",
            "Quantity": "1",
            "Unit": "cups",
            "Id": "par",
            "Group": "Salad"
          },
          {
            "Ingredient": "Pitted Kalamata Olives",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": "oli",
            "Group": "Salad"
          },
          {
            "Ingredient": "Chopped Green onion",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": "go",
            "Group": "Salad"
          },
          {
            "Ingredient": "Raisins",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": "rai",
            "Group": "Salad"
          },
          {
            "Ingredient": "Feta (optional)",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": "feta",
            "Group": "Salad"
          },
          {
            "Ingredient": "Orange Zest",
            "Quantity": "1",
            "Unit": "tsp",
            "Id": "zest",
            "Group": "Dressing"
          },
          {
            "Ingredient": "Fresh Orange Juice",
            "Quantity": "1-2",
            "Unit": "oranges",
            "Id": "orange",
            "Group": "Dressing"
          },
          {
            "Ingredient": "Olive oil",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "oil",
            "Group": "Dressing"
          },
          {
            "Ingredient": "White wine vinegar",
            "Quantity": "2",
            "Unit": "tbsp",
            "Id": "vin",
            "Group": "Dressing"
          },
          {
            "Ingredient": "Minced Garlic",
            "Quantity": "1",
            "Unit": "clove",
            "Id": "gar",
            "Group": "Dressing"
          },
          {
            "Ingredient": "Salt",
            "Quantity": "1/4",
            "Unit": "tsp",
            "Id": "sel",
            "Group": "Dressing"
          }
        ]
      },
      "instructions": [
        {
          "o": "Bring a large pot of water to poil. Cook the [#: orzo | orzo] according to package instructions. When draining, reserve 1/2 cup of pasta water. Run the orzo under cold water after draining.",
          "f": [
            {
              "val": "Bring a large pot of water to poil. Cook the"
            },
            {
              "val": "orzo",
              "attr": "orzo"
            },
            {
              "val": "according to package instructions. When draining, reserve 1/2 cup of pasta water. Run the orzo under cold water after draining."
            }
          ]
        },
        {
          "o": "Toast the [#: al | almonds] for about 5 minutes until fragrant. Transfer to a cutting board and chop them.",
          "f": [
            {
              "val": "Toast the"
            },
            {
              "val": "almonds",
              "attr": "al"
            },
            {
              "val": "for about 5 minutes until fragrant. Transfer to a cutting board and chop them."
            }
          ]
        },
        {
          "o": "In a large bowl combine the [#: orzo | orzo], [#: al | almonds], [#: par | parsley] [#: ol | olives] [#: go | green onions] [#: rai | raisins] and [#: feta | feta] if you are using it.",
          "f": [
            {
              "val": "In a large bowl combine the"
            },
            {
              "val": "orzo",
              "attr": "orzo"
            },
            {
              "val": ","
            },
            {
              "val": "almonds",
              "attr": "al"
            },
            {
              "val": ","
            },
            {
              "val": "parsley",
              "attr": "par"
            },
            {
              "val": "olives",
              "attr": "ol"
            },
            {
              "val": "green onions",
              "attr": "go"
            },
            {
              "val": "raisins",
              "attr": "rai"
            },
            {
              "val": "and"
            },
            {
              "val": "feta",
              "attr": "feta"
            },
            {
              "val": "if you are using it."
            }
          ]
        },
        {
          "o": "In a bowl prepare the dressing: combine [#: zest | orange zest] [#: orange | orange juice] [#: oil | olive oil] [#: vin | vinegar] [#: gar | garlic] and [#: sel | salt]. Add 1/4 cup of the pasta cooking water and whisk until blended.",
          "f": [
            {
              "val": "In a bowl prepare the dressing: combine"
            },
            {
              "val": "orange zest",
              "attr": "zest"
            },
            {
              "val": "orange juice",
              "attr": "orange"
            },
            {
              "val": "olive oil",
              "attr": "oil"
            },
            {
              "val": "vinegar",
              "attr": "vin"
            },
            {
              "val": "garlic",
              "attr": "gar"
            },
            {
              "val": "and"
            },
            {
              "val": "salt",
              "attr": "sel"
            },
            {
              "val": ". Add 1/4 cup of the pasta cooking water and whisk until blended."
            }
          ]
        },
        {
          "o": "[&:00:10:00] Pour the dressing on the salad and toss to combine. Leave for 10 minutes. Season with salt if necessary.",
          "f": [
            {
              "val": "Pour the dressing on the salad and toss to combine. Leave for 10 minutes. Season with salt if necessary."
            }
          ],
          "timer": "00:10:00"
        }
      ],
      "content": {
        "props": {
          "type": "blurb"
        },
        "value": [
          "Try to make sure you cut the parsley small enough so that you don't end up getting big leafs of it taking over the salad. Same with the green onions. Feel free to mix up the measurements for the almonds, raisins and feta to your taste."
        ]
      }
    },
    "ratatouille": {
      "meta": {
        "properties": {
          "original_recipe": "https://cookieandkate.com/best-ratatouille-recipe/#tasty-recipes-34476",
          "slug": "ratatouille",
          "day_made": "[2019-11-14]",
          "name": "Ratatouille",
          "serves": "4",
          "time": "01:20:00",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "ease_of_making": "4/5",
          "rating": "4/5",
          "imgs": "1.JPG,2.gif,3.JPG",
          "belongs_to": "main"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id",
          "Group"
        ],
        "data": [
          {
            "Ingredient": "Large tomatoes",
            "Quantity": "4",
            "Unit": "",
            "Id": "tomat",
            "Group": ""
          },
          {
            "Ingredient": "Eggplant (cubed)",
            "Quantity": "1",
            "Unit": "",
            "Id": "egg",
            "Group": ""
          },
          {
            "Ingredient": "Bell pepper (diced)",
            "Quantity": "1",
            "Unit": "",
            "Id": "pep",
            "Group": ""
          },
          {
            "Ingredient": "Zucchini (cubed)",
            "Quantity": "1",
            "Unit": "",
            "Id": "zuk",
            "Group": ""
          },
          {
            "Ingredient": "Yellow Squash (cubed)",
            "Quantity": "1",
            "Unit": "",
            "Id": "ysqu",
            "Group": ""
          },
          {
            "Ingredient": "Olive oil",
            "Quantity": "6",
            "Unit": "",
            "Id": "oil",
            "Group": ""
          },
          {
            "Ingredient": "Salt",
            "Quantity": "1/4",
            "Unit": "tsp",
            "Id": "salt",
            "Group": ""
          },
          {
            "Ingredient": "Yellow onion (chopped)",
            "Quantity": "1",
            "Unit": "",
            "Id": "onion",
            "Group": ""
          },
          {
            "Ingredient": "Garlic (minced)",
            "Quantity": "4",
            "Unit": "",
            "Id": "gar",
            "Group": ""
          },
          {
            "Ingredient": "Basil  (chopped)",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "bas",
            "Group": ""
          },
          {
            "Ingredient": "Red pepper flakes",
            "Quantity": "1/4",
            "Unit": "tsp",
            "Id": "flakes",
            "Group": ""
          },
          {
            "Ingredient": "Dried oregano",
            "Quantity": "1/4",
            "Unit": "tsp",
            "Id": "oreg",
            "Group": ""
          },
          {
            "Ingredient": "Ground pepper",
            "Quantity": "",
            "Unit": "",
            "Id": "",
            "Group": ""
          },
          {
            "Ingredient": "Cheese grater/blender",
            "Quantity": "",
            "Unit": "",
            "Id": "",
            "Group": ""
          }
        ]
      },
      "instructions": [
        {
          "o": "Preheat oven to 425F. Line two large baking sheets with parchment paper.",
          "f": [
            {
              "val": "Preheat oven to 425F. Line two large baking sheets with parchment paper."
            }
          ]
        },
        {
          "o": "Prepare tomatoes by coring them and grate them on a cheeze grater with large holes or blend them to a frothy pulp.",
          "f": [
            {
              "val": "Prepare tomatoes by coring them and grate them on a cheeze grater with large holes or blend them to a frothy pulp."
            }
          ]
        },
        {
          "o": "Put [#: egg | cubed eggplant] on baking sheet in a single layer and coat with olive oil. Sprink with salt. Set aside.",
          "f": [
            {
              "val": "Put"
            },
            {
              "val": "cubed eggplant",
              "attr": "egg"
            },
            {
              "val": "on baking sheet in a single layer and coat with olive oil. Sprink with salt. Set aside."
            }
          ]
        },
        {
          "o": "Put [#: zuk | zuchini] and [#: ysqu | yellow squash] on baking sheet. Add 1 tbsp of olive oil. Add 1/4 tsp of salt.",
          "f": [
            {
              "val": "Put"
            },
            {
              "val": "zuchini",
              "attr": "zuk"
            },
            {
              "val": "and"
            },
            {
              "val": "yellow squash",
              "attr": "ysqu"
            },
            {
              "val": "on baking sheet. Add 1 tbsp of olive oil. Add 1/4 tsp of salt."
            }
          ]
        },
        {
          "o": "[&:00:15:00] Put eggplant in middle rack and vegetable on top rack in the oven. Set timer for 15 minutes.",
          "f": [
            {
              "val": "Put eggplant in middle rack and vegetable on top rack in the oven. Set timer for 15 minutes."
            }
          ],
          "timer": "00:15:00"
        },
        {
          "o": "[&:00:10:00]  Warm 2 tbsp of olive oil in a dutch oven over medium heat. Add [#: onion | yellow onion] and [#: salt | salt]. Cook, stirring occasionally, until onion is tender. About 8 to 10 minutes.",
          "f": [
            {
              "val": "Warm 2 tbsp of olive oil in a dutch oven over medium heat. Add"
            },
            {
              "val": "yellow onion",
              "attr": "onion"
            },
            {
              "val": "and"
            },
            {
              "val": "salt",
              "attr": "salt"
            },
            {
              "val": ". Cook, stirring occasionally, until onion is tender. About 8 to 10 minutes."
            }
          ],
          "timer": "00:10:00"
        },
        {
          "o": "Add [#: gar | garlic] to dutch oven, about 30 seconds until fragrant. Add [#: tomat | tomatoes ] and use a wooden spoon or spatula to stir. Reduce to gentle simmer.",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "garlic",
              "attr": "gar"
            },
            {
              "val": "to dutch oven, about 30 seconds until fragrant. Add"
            },
            {
              "val": "tomatoes",
              "attr": "tomat"
            },
            {
              "val": "and use a wooden spoon or spatula to stir. Reduce to gentle simmer."
            }
          ]
        },
        {
          "o": "[&:00:10:00] When eggplant and friends are done in the oven, take them out, stir around, and put back in, this time switching the racks they are on. Bake for another 10 minutes then remove the eggplant and put it in the dutch oven mix.",
          "f": [
            {
              "val": "When eggplant and friends are done in the oven, take them out, stir around, and put back in, this time switching the racks they are on. Bake for another 10 minutes then remove the eggplant and put it in the dutch oven mix."
            }
          ],
          "timer": "00:10:00"
        },
        {
          "o": "[&:00:05:00] Let the squash keep on baking in the oven. Then take it out and put it in the dutch oven for another five minutes.",
          "f": [
            {
              "val": "Let the squash keep on baking in the oven. Then take it out and put it in the dutch oven for another five minutes."
            }
          ],
          "timer": "00:05:00"
        },
        {
          "o": "Remove the dutch oven from the heat. Stir in a teaspoon olive oil, [#: bas | chopped basil] and [#: flakes | Red pepper flakes]. Crumble [#: oreg | dried oregano] into the pot. Season with salt and pepper (if you feel like it).",
          "f": [
            {
              "val": "Remove the dutch oven from the heat. Stir in a teaspoon olive oil,"
            },
            {
              "val": "chopped basil",
              "attr": "bas"
            },
            {
              "val": "and"
            },
            {
              "val": "Red pepper flakes",
              "attr": "flakes"
            },
            {
              "val": ". Crumble"
            },
            {
              "val": "dried oregano",
              "attr": "oreg"
            },
            {
              "val": "into the pot. Season with salt and pepper (if you feel like it)."
            }
          ]
        },
        {
          "o": "Serve it up! Put it in bowls, drizzle with olive oil. Let it cool. It should last a few days. Maybe add some bread as a side.",
          "f": [
            {
              "val": "Serve it up! Put it in bowls, drizzle with olive oil. Let it cool. It should last a few days. Maybe add some bread as a side."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "blurb"
        },
        "value": [
          "We doubled this recipe and made it for six of us. It was a good meal, but involved a fair bit of prep. A friend brought tortelinni and we used that as a base and it mixed nicely. A side note: Yellow squash is basically yellow zucchini (which we couldn't find). You can just use one or the other in the recipe if you can only find one of the two."
        ]
      }
    },
    "avo-kimchi-egg-toast": {
      "meta": {
        "properties": {
          "belongs_to": "breakfast",
          "day_made": "[2019-11-15]",
          "ease_of_making": "5/5",
          "imgs": "1.jpg,2.jpg",
          "is_vegan": "false",
          "is_vegetarian": "true",
          "name": "Kimchi Avocado Egg on Toast",
          "original_recipe": "#",
          "rating": "3.5/5",
          "serves": "1",
          "slug": "avo-kimchi-egg-toast",
          "time": "00:15:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Kimchi",
            "Quantity": "1/4",
            "Unit": "cups",
            "Id": "kim"
          },
          {
            "Ingredient": "Shallot",
            "Quantity": "1",
            "Unit": "shallot",
            "Id": "shal"
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "1",
            "Unit": "clove",
            "Id": "garlic"
          },
          {
            "Ingredient": "Bread (sourdough)",
            "Quantity": "1",
            "Unit": "slice",
            "Id": "bread"
          },
          {
            "Ingredient": "Avocado",
            "Quantity": "1/2",
            "Unit": "",
            "Id": "avo"
          },
          {
            "Ingredient": "Egg (poached)",
            "Quantity": "1",
            "Unit": "",
            "Id": "egg"
          },
          {
            "Ingredient": "Paprika",
            "Quantity": "1/4",
            "Unit": "tsp",
            "Id": "pap"
          },
          {
            "Ingredient": "Salt",
            "Quantity": "1",
            "Unit": "pinch",
            "Id": "salt"
          }
        ]
      },
      "instructions": [
        {
          "o": "Dice [#: shal | shallot], mince [#: garlic | garlic] and chop [#: kim | kimchi].",
          "f": [
            {
              "val": "Dice"
            },
            {
              "val": "shallot",
              "attr": "shal"
            },
            {
              "val": ", mince"
            },
            {
              "val": "garlic",
              "attr": "garlic"
            },
            {
              "val": "and chop"
            },
            {
              "val": "kimchi",
              "attr": "kim"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "Bring a pot of water to boil to poach your egg.",
          "f": [
            {
              "val": "Bring a pot of water to boil to poach your egg."
            }
          ]
        },
        {
          "o": "[&:00:02:00] Melt butter in pan on medium until hot enough to sizzle a bit of shallot. Put [#: shal | shallot] in for 2 minutes.",
          "f": [
            {
              "val": "Melt butter in pan on medium until hot enough to sizzle a bit of shallot. Put"
            },
            {
              "val": "shallot",
              "attr": "shal"
            },
            {
              "val": "in for 2 minutes."
            }
          ],
          "timer": "00:02:00"
        },
        {
          "o": "[&:00:01:00] Add prepared garlic and sauté for another minute.",
          "f": [
            {
              "val": "Add prepared garlic and sauté for another minute."
            }
          ],
          "timer": "00:01:00"
        },
        {
          "o": "[&:00:05:00] Add kimchi and sauté for about five minutes while you poach the egg.",
          "f": [
            {
              "val": "Add kimchi and sauté for about five minutes while you poach the egg."
            }
          ],
          "timer": "00:05:00"
        },
        {
          "o": "[&:00:04:00] Crack egg into boiling water and leave for 4 minutes. Keep an eye that it doesn't overflow.",
          "f": [
            {
              "val": "Crack egg into boiling water and leave for 4 minutes. Keep an eye that it doesn't overflow."
            }
          ],
          "timer": "00:04:00"
        },
        {
          "o": "Toast the bread.",
          "f": [
            {
              "val": "Toast the bread."
            }
          ]
        },
        {
          "o": "Pull it all together: mush [#: avo | avocado] on top of bread. Add a sprinkle of salt. Add garlic, shallot, kimchi mix on top of avocado. Add poached egg on top. Sprinkle with [#: pap | paprika].",
          "f": [
            {
              "val": "Pull it all together: mush"
            },
            {
              "val": "avocado",
              "attr": "avo"
            },
            {
              "val": "on top of bread. Add a sprinkle of salt. Add garlic, shallot, kimchi mix on top of avocado. Add poached egg on top. Sprinkle with"
            },
            {
              "val": "paprika",
              "attr": "pap"
            },
            {
              "val": "."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "dialogue"
        },
        "value": [
          "Have a bite of this.",
          "No, I'm full.",
          "(eyes watering) - Please."
        ]
      }
    },
    "tofu-kimchi-stew": {
      "meta": {
        "properties": {
          "belongs_to": "main",
          "day_made": "[2019-11-15]",
          "ease_of_making": "5/5",
          "imgs": "1.jpg,2.jpg,3.jpg",
          "is_vegan": "true",
          "is_vegetarian": "true",
          "name": "Tofu Kimchi Stew",
          "original_recipe": "https://www.bonappetit.com/recipe/tofu-and-kimchi-stew",
          "rating": "3.5/5",
          "serves": "2",
          "slug": "tofu-kimchi-stew",
          "tags": "easy, quick, korean, stew, spicey",
          "time": "00:25:00"
        },
        "logbook": []
      },
      "ingredients": {
        "keys": [
          "Ingredient",
          "Quantity",
          "Unit",
          "Id"
        ],
        "data": [
          {
            "Ingredient": "Olive oil",
            "Quantity": "",
            "Unit": "",
            "Id": ""
          },
          {
            "Ingredient": "Green onions",
            "Quantity": "6",
            "Unit": "",
            "Id": "go"
          },
          {
            "Ingredient": "Garlic",
            "Quantity": "4",
            "Unit": "cloves",
            "Id": "gar"
          },
          {
            "Ingredient": "Ginger",
            "Quantity": "1",
            "Unit": "1-inch piece",
            "Id": "ging"
          },
          {
            "Ingredient": "Vegetable broth",
            "Quantity": "4",
            "Unit": "cups",
            "Id": "vegbro"
          },
          {
            "Ingredient": "Gochujang",
            "Quantity": "3",
            "Unit": "tbsp",
            "Id": "gochu"
          },
          {
            "Ingredient": "Soy sauce",
            "Quantity": "3",
            "Unit": "tbsp",
            "Id": "soy"
          },
          {
            "Ingredient": "Daikon (or Radish)",
            "Quantity": "1",
            "Unit": "",
            "Id": "sliced"
          },
          {
            "Ingredient": "Kimchi",
            "Quantity": "1/2",
            "Unit": "cups",
            "Id": ""
          },
          {
            "Ingredient": "Silken Tofu",
            "Quantity": "1/2",
            "Unit": "block",
            "Id": "silk"
          }
        ]
      },
      "instructions": [
        {
          "o": "Heat oil in large saucepan on high.",
          "f": [
            {
              "val": "Heat oil in large saucepan on high."
            }
          ]
        },
        {
          "o": "[&:00:03:00] Cook white and pale-green parts of green onions. Save the green ends. Add in the [#: gar | garlic] and [#: ging | ginger]. Stir often, about 3 minutes",
          "f": [
            {
              "val": "Cook white and pale-green parts of green onions. Save the green ends. Add in the"
            },
            {
              "val": "garlic",
              "attr": "gar"
            },
            {
              "val": "and"
            },
            {
              "val": "ginger",
              "attr": "ging"
            },
            {
              "val": ". Stir often, about 3 minutes"
            }
          ],
          "timer": "00:03:00"
        },
        {
          "o": "Add [#: vegbro | broth]. Whisk in [#: go | gochujang] and [#: soy | soy sauce].",
          "f": [
            {
              "val": "Add"
            },
            {
              "val": "broth",
              "attr": "vegbro"
            },
            {
              "val": ". Whisk in"
            },
            {
              "val": "gochujang",
              "attr": "go"
            },
            {
              "val": "and"
            },
            {
              "val": "soy sauce",
              "attr": "soy"
            },
            {
              "val": "."
            }
          ]
        },
        {
          "o": "[&:00:15:00] Add daikon (or radish if you don't have daikon). Simmer for 15-20 minutes.",
          "f": [
            {
              "val": "Add daikon (or radish if you don't have daikon). Simmer for 15-20 minutes."
            }
          ],
          "timer": "00:15:00"
        },
        {
          "o": "Add kimchi and tofu. Simmer until tofu is heated through.",
          "f": [
            {
              "val": "Add kimchi and tofu. Simmer until tofu is heated through."
            }
          ]
        },
        {
          "o": "Divide among bowls, add thinly sliced green onion on top.",
          "f": [
            {
              "val": "Divide among bowls, add thinly sliced green onion on top."
            }
          ]
        }
      ],
      "content": {
        "props": {
          "type": "blurb"
        },
        "value": [
          "This is quick and easy to make. We couldn't find Daikon so we used radish, which seemed to work just fine. We only used 2 tbsp of gochujang and it was plenty spicey for us."
        ]
      }
    }
  }
}