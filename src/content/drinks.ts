import type { DrinkCategory } from "@/types";

// Source: himalayan_drink_menu_2026.pdf, pages 1–4; pages 5–8 are blank.
// This newer drinks menu supersedes the drinks pages in the combined cuisine PDF.
// Group flavour/serving choices once and retain the approved Dutch pot-tea translation.
export const drinkCategories: DrinkCategory[] = [
  {
    "id": "himalayan-cocktails",
    "name": "Himalayan Cocktails",
    "nameNl": "Himalayaanse cocktails",
    "items": [
      {
        "id": "drink-01",
        "name": "Everest Climber",
        "nameNl": "Everest Climber",
        "description": "Crafted with 8848 vodka, limoncello lemon cream, and fresh lemon, made with love and passion.",
        "descriptionNl": "Dit drankje is gemaakt met 8848 wodka, limoncello-citroencrème en verse citroen, bereid met liefde en passie.",
        "price": 13.95
      },
      {
        "id": "drink-02",
        "name": "Himalayan Passion Martini",
        "nameNl": "Himalayan Passion Martini",
        "description": "A tropical blend of smooth vodka, vibrant passion fruit, lime, and a touch of vanilla, delivering a perfectly balanced sweet and tangy finish.",
        "descriptionNl": "Een tropische mix van zachte wodka, levendige passievrucht, limoen en een vleugje vanille, met een perfect gebalanceerde zoetzure afdronk.",
        "price": 12.5
      },
      {
        "id": "drink-03",
        "name": "Moscow Mule",
        "nameNl": "Moscow Mule",
        "description": "A crisp and refreshing blend of vodka, fresh lime, and spicy ginger beer, served over ice.",
        "descriptionNl": "Een frisse en verkwikkende mix van wodka, verse limoen en pittig gemberbier, geserveerd met ijs.",
        "price": 11.95
      },
      {
        "id": "drink-04",
        "name": "Gorkha Warrior",
        "nameNl": "Gorkha Warrior",
        "description": "A must-have drink crafted with Khukri Rum, a Nepalese oak-vatted dark rum, infused with secret Himalayan herbs and prepared in a traditional style.",
        "descriptionNl": "Een must-have drankje gemaakt met Khukri Rum, een Nepalese donkere rum op eikenhouten vaten, doordrenkt met geheime Himalaya-kruiden en bereid in traditionele stijl.",
        "price": 12.95
      },
      {
        "id": "drink-05",
        "name": "Espresso Martini",
        "nameNl": "Espresso Martini",
        "price": 10.5
      },
      {
        "id": "drink-06",
        "name": "Margarita",
        "nameNl": "Margarita",
        "price": 12.5
      },
      {
        "id": "drink-07",
        "name": "Bacardi Mojito",
        "nameNl": "Bacardi Mojito",
        "price": 10.95
      }
    ]
  },
  {
    "id": "himalayan-mocktails",
    "name": "Himalayan Mocktails",
    "nameNl": "Himalayaanse mocktails",
    "items": [
      {
        "id": "drink-08",
        "name": "Sherpa Sunset",
        "nameNl": "Sherpa Sunset",
        "description": "A vibrant tropical refresher blending orange, passion fruit, and zesty lime, finished with a hint of vanilla and sparkling soda.",
        "descriptionNl": "Een levendige tropische verfrisser met sinaasappel, passievrucht en frisse limoen, afgewerkt met een vleugje vanille en bruisend sodawater.",
        "price": 9.95
      },
      {
        "id": "drink-09",
        "name": "Himalayan Mule",
        "nameNl": "Himalayan Mule",
        "description": "A crisp, refreshing blend of zesty lime, warm honey-ginger, and fresh mint, topped with sparkling ginger beer.",
        "descriptionNl": "Een frisse, verkwikkende mix van limoen, warme honing-gember en verse munt, afgemaakt met bruisend gemberbier.",
        "price": 10.5
      },
      {
        "id": "drink-10",
        "name": "Everest Breeze",
        "nameNl": "Everest Breeze",
        "description": "A crisp, refreshing mix of cool cucumber, green apple, lime, and mint, finished with sparkling soda.",
        "descriptionNl": "Een frisse, verkwikkende mix van komkommer, groene appel, limoen en munt, afgewerkt met bruisend sodawater.",
        "price": 9.5
      },
      {
        "id": "drink-11",
        "name": "Classic Mint Mojito",
        "nameNl": "Klassieke muntmojito",
        "description": "A refreshing blend of lime, fresh mint, and a touch of sweetness, topped with sparkling soda for a crisp, lively finish.",
        "descriptionNl": "Een verfrissende mix van limoen, verse munt en een vleugje zoetheid, afgemaakt met bruisend sodawater voor een frisse, levendige afdronk.",
        "price": 8.95
      }
    ]
  },
  {
    "id": "beers",
    "name": "Selected Beers",
    "nameNl": "Geselecteerde bieren",
    "items": [
      {
        "id": "drink-43",
        "name": "Nepalese or Indian Beer",
        "nameNl": "Nepalees of Indiaas bier",
        "price": 6.25,
        "variants": [
          {
            "label": "Small 5.0%",
            "labelNl": "Klein 5.0%",
            "price": 6.25
          },
          {
            "label": "Large 5.0%",
            "labelNl": "Groot 5.0%",
            "price": 9.75
          }
        ]
      },
      {
        "id": "drink-44",
        "name": "Heineken",
        "nameNl": "Heineken",
        "price": 3.95,
        "variants": [
          {
            "label": "Small draught 5.0%",
            "labelNl": "Klein van de tap 5.0%",
            "price": 3.95
          },
          {
            "label": "Large draught 5.0%",
            "labelNl": "Groot van de tap 5.0%",
            "price": 7.0
          },
          {
            "label": "0.0%",
            "labelNl": "0.0%",
            "price": 3.95
          }
        ]
      },
      {
        "id": "drink-45",
        "name": "White Beer 4.9%",
        "nameNl": "Witbier 4.9%",
        "price": 5.25
      },
      {
        "id": "drink-46",
        "name": "Leffe Blond 6.6%",
        "nameNl": "Leffe Blond 6.6%",
        "price": 6.25
      },
      {
        "id": "drink-47",
        "name": "Leffe Blond 0%",
        "nameNl": "Leffe Blond 0%",
        "price": 6.25
      },
      {
        "id": "drink-48",
        "name": "La Trappe Trappist Blond 6.5%",
        "nameNl": "La Trappe Trappist Blond 6.5%",
        "price": 7.45
      },
      {
        "id": "drink-49",
        "name": "Palm / Birra Moretti / Brand",
        "nameNl": "Palm / Birra Moretti / Brand",
        "price": 4.25
      },
      {
        "id": "drink-67",
        "name": "Oedipus Mannenliefde (draught) 6.0%",
        "nameNl": "Oedipus Mannenliefde (van de tap) 6.0%",
        "price": 7.45
      }
    ]
  },
  {
    "id": "himalayan-special-drinks",
    "name": "Himalayan Special Drinks",
    "nameNl": "Speciale Himalayaanse dranken",
    "items": [
      {
        "id": "drink-66",
        "name": "Lassi",
        "nameNl": "Lassi",
        "description": "A traditional, refreshing yoghurt drink, smooth and creamy, available in mango, mint, salted, sweet or plain flavours.",
        "descriptionNl": "Een traditionele, verfrissende yoghurtdrank, zacht en romig, verkrijgbaar met mango of munt, gezouten, gezoet of naturel.",
        "variants": [
          {
            "label": "Mango",
            "labelNl": "Mango",
            "price": 4.25
          },
          {
            "label": "Mint",
            "labelNl": "Munt",
            "price": 4.25
          },
          {
            "label": "Salt",
            "labelNl": "Gezouten",
            "price": 3.95
          },
          {
            "label": "Sweet",
            "labelNl": "Zoet",
            "price": 3.95
          },
          {
            "label": "Plain",
            "labelNl": "Naturel",
            "price": 3.75
          }
        ],
        "price": 3.75
      }
    ]
  },
  {
    "id": "cold-drinks",
    "name": "Cold Drinks",
    "nameNl": "Koude dranken",
    "items": [
      {
        "id": "drink-12",
        "name": "Soft Drinks",
        "nameNl": "Frisdranken",
        "price": 3.75,
        "variants": [
          {
            "label": "Cola",
            "labelNl": "Cola",
            "price": 3.75
          },
          {
            "label": "Cola Zero",
            "labelNl": "Cola Zero",
            "price": 3.75
          },
          {
            "label": "Fanta",
            "labelNl": "Fanta",
            "price": 3.75
          },
          {
            "label": "Sprite",
            "labelNl": "Sprite",
            "price": 3.75
          }
        ]
      },
      {
        "id": "drink-13",
        "name": "Premium Mixers",
        "nameNl": "Premiummixers",
        "price": 4.0,
        "variants": [
          {
            "label": "Tonic",
            "labelNl": "Tonic",
            "price": 4.0
          },
          {
            "label": "Bitter Lemon",
            "labelNl": "Bitter lemon",
            "price": 4.0
          },
          {
            "label": "Ginger Ale",
            "labelNl": "Ginger ale",
            "price": 4.0
          }
        ]
      },
      {
        "id": "drink-14",
        "name": "Green Iced Tea",
        "nameNl": "Groene ijsthee",
        "price": 4.25
      },
      {
        "id": "drink-15",
        "name": "Ginger Beer (Fever-Tree)",
        "nameNl": "Gemberbier (Fever-Tree)",
        "price": 6.5
      }
    ]
  },
  {
    "id": "water",
    "name": "Water",
    "nameNl": "Water",
    "items": [
      {
        "id": "drink-16",
        "name": "Still / Sparkling Water",
        "nameNl": "Water zonder / met koolzuur",
        "price": 3.95,
        "variants": [
          {
            "label": "Small",
            "labelNl": "Klein",
            "price": 3.95
          },
          {
            "label": "Large",
            "labelNl": "Groot",
            "price": 6.5
          }
        ]
      }
    ]
  },
  {
    "id": "warm-drinks",
    "name": "Warm Drinks",
    "nameNl": "Warme dranken",
    "items": [
      {
        "id": "drink-17",
        "name": "Masala Tea (Nepali Chiya)",
        "nameNl": "Masalathee (Nepali Chiya)",
        "price": 4.0
      },
      {
        "id": "drink-18",
        "name": "Winter Glow",
        "nameNl": "Winter Glow",
        "description": "A warm drink with cinnamon, star anise, and navel orange.",
        "descriptionNl": "Een warme drank met kaneel, steranijs en navelsinaasappel.",
        "price": 4.5
      },
      {
        "id": "drink-19",
        "name": "Arossence Pot Tea",
        "nameNl": "Arossence Pot Tea",
        "description": "Biological Nepalese pot tea from above 3,000 meters above sea level.",
        "descriptionNl": "Biologische Nepalese thee per pot, afkomstig van meer dan 3.000 meter boven zeeniveau.",
        "price": 7.0
      },
      {
        "id": "drink-20",
        "name": "Fresh Mint or Ginger Tea",
        "nameNl": "Verse munt- of gemberthee",
        "price": 4.0,
        "variants": [
          {
            "label": "Fresh Mint Tea",
            "labelNl": "Verse muntthee",
            "price": 4.0
          },
          {
            "label": "Fresh Ginger Tea",
            "labelNl": "Verse gemberthee",
            "price": 4.0
          }
        ]
      },
      {
        "id": "drink-69",
        "name": "Hot Lemon",
        "nameNl": "Warme citroen",
        "price": 4.0
      },
      {
        "id": "drink-21",
        "name": "Regular Tea",
        "nameNl": "Thee",
        "price": 3.5
      },
      {
        "id": "drink-22",
        "name": "Standard Coffee",
        "nameNl": "Koffie",
        "price": 4.0
      },
      {
        "id": "drink-23",
        "name": "Espresso",
        "nameNl": "Espresso",
        "price": 3.5
      },
      {
        "id": "drink-24",
        "name": "Double Espresso",
        "nameNl": "Dubbele espresso",
        "price": 5.5
      },
      {
        "id": "drink-25",
        "name": "Cappuccino / Latte Macchiato",
        "nameNl": "Cappuccino / Latte Macchiato",
        "price": 5.0
      }
    ]
  },
  {
    "id": "special-coffee",
    "name": "Special Coffee",
    "nameNl": "Speciale koffie",
    "items": [
      {
        "id": "drink-26",
        "name": "Nepalese Coffee",
        "nameNl": "Nepalese koffie",
        "price": 8.5,
        "description": "A classic blend of Khukuri Rum and hot brewed coffee, sweetened with brown sugar and topped with a smooth layer of cold cream.",
        "descriptionNl": "Een klassieke mix van Khukuri-rum en hete koffie, gezoet met bruine suiker en afgewerkt met een zachte laag slagroom."
      },
      {
        "id": "drink-70",
        "name": "Irish Coffee",
        "nameNl": "Ierse koffie",
        "price": 8.25
      },
      {
        "id": "drink-71",
        "name": "French Coffee",
        "nameNl": "Franse koffie",
        "price": 8.0
      }
    ]
  },
  {
    "id": "aperitifs",
    "name": "Aperitifs",
    "nameNl": "Aperitieven",
    "items": [
      {
        "id": "drink-30",
        "name": "Jenever",
        "nameNl": "Jenever",
        "price": 4.75
      },
      {
        "id": "drink-31",
        "name": "Port Red or White Sherry",
        "nameNl": "Port (rood of wit) of sherry",
        "price": 6.0
      },
      {
        "id": "drink-32",
        "name": "Martini Rosso or Blanco",
        "nameNl": "Martini Rosso of Blanco",
        "price": 5.25
      },
      {
        "id": "drink-33",
        "name": "Bacardi & Cola",
        "nameNl": "Bacardi & cola",
        "price": 6.45
      },
      {
        "id": "drink-34",
        "name": "Campari & Soda",
        "nameNl": "Campari & sodawater",
        "price": 7.45
      },
      {
        "id": "drink-35",
        "name": "Gin & Tonic",
        "nameNl": "Gin-tonic",
        "price": 8.0
      }
    ]
  },
  {
    "id": "liquor",
    "name": "Liquors",
    "nameNl": "Likeuren",
    "items": [
      {
        "id": "drink-27",
        "name": "Cointreau / Disaronno",
        "nameNl": "Cointreau / Disaronno",
        "price": 6.25,
        "variants": [
          {
            "label": "Cointreau",
            "labelNl": "Cointreau",
            "price": 6.25
          },
          {
            "label": "Disaronno",
            "labelNl": "Disaronno",
            "price": 6.25
          }
        ]
      },
      {
        "id": "drink-72",
        "name": "Grand Marnier",
        "nameNl": "Grand Marnier",
        "price": 6.25
      },
      {
        "id": "drink-28",
        "name": "Drambuie / Kahlua",
        "nameNl": "Drambuie / Kahlua",
        "price": 5.75,
        "variants": [
          {
            "label": "Drambuie",
            "labelNl": "Drambuie",
            "price": 5.75
          },
          {
            "label": "Kahlua",
            "labelNl": "Kahlua",
            "price": 5.75
          }
        ]
      },
      {
        "id": "drink-73",
        "name": "Southern Comfort",
        "nameNl": "Southern Comfort",
        "price": 5.75
      },
      {
        "id": "drink-29",
        "name": "Baileys / Tia Maria",
        "nameNl": "Baileys / Tia Maria",
        "price": 5.75,
        "variants": [
          {
            "label": "Baileys",
            "labelNl": "Baileys",
            "price": 5.75
          },
          {
            "label": "Tia Maria",
            "labelNl": "Tia Maria",
            "price": 5.75
          }
        ]
      },
      {
        "id": "drink-74",
        "name": "Jägermeister",
        "nameNl": "Jägermeister",
        "price": 5.75
      }
    ]
  },
  {
    "id": "distilled",
    "name": "Distilled",
    "nameNl": "Gedistilleerd",
    "items": [
      {
        "id": "drink-36",
        "name": "Khukuri Rum (Nepal)",
        "nameNl": "Khukuri Rum (Nepal)",
        "price": 8.0,
        "image": "/images/drinks/khukuri-rum.jpg"
      },
      {
        "id": "drink-37",
        "name": "Smirnoff / 8848 Vodka",
        "nameNl": "Smirnoff / 8848 Vodka",
        "price": 5.45
      },
      {
        "id": "drink-38",
        "name": "Chivas Regal / Black Label",
        "nameNl": "Chivas Regal / Black Label",
        "price": 7.0
      },
      {
        "id": "drink-39",
        "name": "Red Label / Ballantine's",
        "nameNl": "Red Label / Ballantine's",
        "price": 5.0
      },
      {
        "id": "drink-40",
        "name": "Jack Daniel's / Four Roses",
        "nameNl": "Jack Daniel's / Four Roses",
        "price": 6.75
      },
      {
        "id": "drink-41",
        "name": "Bacardi",
        "nameNl": "Bacardi",
        "price": 5.45,
        "image": "/images/drinks/bacardi.jpg"
      },
      {
        "id": "drink-42",
        "name": "Joseph Guy VS Cognac",
        "nameNl": "Joseph Guy VS Cognac",
        "price": 7.45
      }
    ]
  },
  {
    "id": "house-wines",
    "name": "House Wines",
    "nameNl": "Huiswijnen",
    "items": [
      {
        "id": "drink-50",
        "name": "House Red Wine (Le Pichet du Patron Rouge, France)",
        "nameNl": "Rode huiswijn (Le Pichet du Patron Rouge, Frankrijk)",
        "description": "Supple and fruit-forward, showing ripe red berries, soft spice and a smooth, rounded finish.",
        "descriptionNl": "Soepel en fruitig, met rijpe rode bessen, zachte kruidigheid en een ronde, toegankelijke afdronk.",
        "price": 5.5,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 5.5
          },
          {
            "label": "Carafe",
            "labelNl": "Karaf",
            "price": 15.5
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 28.5
          }
        ]
      },
      {
        "id": "drink-52",
        "name": "House White Wine (France)",
        "nameNl": "Witte huiswijn (Frankrijk)",
        "description": "Light and easy-drinking, with citrus, white flowers and subtle green-herbal freshness.",
        "descriptionNl": "Licht en toegankelijk, met citrus, witte bloemen en een subtiele fris-kruidige toets.",
        "price": 5.5,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 5.5
          },
          {
            "label": "Carafe",
            "labelNl": "Karaf",
            "price": 15.5
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 28.5
          }
        ]
      },
      {
        "id": "drink-51",
        "name": "House Rosé Wine (Le Pichet du Patron Rosé, France)",
        "nameNl": "Rosé huiswijn (Le Pichet du Patron Rosé, Frankrijk)",
        "description": "Bright and refreshing, with raspberries, red-berry fruit and a delicate touch of spice.",
        "descriptionNl": "Helder en verfrissend, met framboos, rood fruit en een verfijnde kruidige toets.",
        "price": 5.5,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 5.5
          },
          {
            "label": "Carafe",
            "labelNl": "Karaf",
            "price": 15.5
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 28.5
          }
        ]
      },
      {
        "id": "drink-53",
        "name": "Sweet White Wine (Spätlese Rheinhessen, Germany)",
        "nameNl": "Zoete witte wijn (Spätlese Rheinhessen, Duitsland)",
        "description": "This sweet white Spätlese is harvested late, resulting in a sweeter wine due to higher sugar content.",
        "descriptionNl": "Deze zoete witte Spätlese wordt laat geoogst, wat resulteert in een zoetere wijn door een hoger suikergehalte",
        "price": 5.5,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 5.5
          },
          {
            "label": "Carafe",
            "labelNl": "Karaf",
            "price": 15.5
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 28.5
          }
        ]
      },
      {
        "id": "drink-54",
        "name": "Lisetto Prosecco | Glera Veneto (Italy)",
        "nameNl": "Lisetto Prosecco | Glera Veneto (Italië)",
        "description": "In Veneto, the Glera grape produces one of the best Italian sparkling wines; this Spumante tastes beautifully fresh and pure with a pleasant mousse.",
        "descriptionNl": "In Veneto produceert de Glera-druif een van de beste Italiaanse mousserende wijnen; deze Spumante smaakt heerlijk fris en puur met een aangename mousse.",
        "price": 7.75,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 7.75
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 30.0
          }
        ]
      }
    ]
  },
  {
    "id": "selected-white-wines",
    "name": "Selected White Wines",
    "nameNl": "Geselecteerde witte wijnen",
    "items": [
      {
        "id": "drink-55",
        "name": "Sauvignon Blanc (Val C, Colombard-Côtes de Gascogne, France)",
        "nameNl": "Sauvignon Blanc (Val C, Colombard-Côtes de Gascogne, Frankrijk)",
        "description": "Crisp and vibrant, with lime, green apple and a clean mineral edge. Fresh, focused and highly food-friendly.",
        "descriptionNl": "Fris en levendig, met limoen, groene appel en een zuivere minerale toets. Strak, verfrissend en breed inzetbaar aan tafel.",
        "price": 5.75,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 5.75
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 25.5
          }
        ]
      },
      {
        "id": "drink-56",
        "name": "Susurro Organic Verdejo, BIO (Spain)",
        "nameNl": "Susurro Organic Verdejo, BIO (Spanje)",
        "description": "Dry and aromatic, combining citrus and peach with delicate floral notes and a bright, refreshing finish.",
        "descriptionNl": "Droog en aromatisch, met citrus, perzik en verfijnde bloemige tonen, gevolgd door een frisse, levendige afdronk.",
        "price": 6.25,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 6.25
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 28.5
          }
        ]
      },
      {
        "id": "drink-57",
        "name": "Chardonnay (Los Arboles, Mendoza, Argentina)",
        "nameNl": "Chardonnay (Los Arboles, Mendoza, Argentinië)",
        "description": "Balanced and inviting, with white blossom, citrus and soft orchard fruit in a smooth, rounded style.",
        "descriptionNl": "Evenwichtig en uitnodigend, met witte bloesem, citrus en zacht boomgaardfruit in een soepele, ronde stijl.",
        "price": 6.25,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 6.25
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 28.5
          }
        ]
      },
      {
        "id": "drink-58",
        "name": "Chablis J. Moreau & Fils (France)",
        "nameNl": "Chablis J. Moreau & Fils (Frankrijk)",
        "description": "Elegant and mineral-driven, with mandarin, ripe citrus, fresh almond and a long, saline finish.",
        "descriptionNl": "Elegant en mineraal, met mandarijn, rijpe citrus, verse amandel en een lange, licht zilte afdronk.",
        "price": 54.95,
        "serving": "Bottle"
      },
      {
        "id": "drink-59",
        "name": "Chateauneuf-du-Pape Blanc, BIO (France)",
        "nameNl": "Chateauneuf-du-Pape Blanc, BIO (Frankrijk)",
        "description": "Rich yet poised, offering ripe orchard fruit, subtle floral complexity and fresh acidity through a long, refined finish.",
        "descriptionNl": "Rijk maar verfijnd, met rijp boomgaardfruit, subtiele florale complexiteit en frisse zuren in een lange, elegante afdronk.",
        "price": 74.95,
        "serving": "Bottle"
      },
      {
        "id": "drink-60",
        "name": "Saint-Aubin (France)",
        "nameNl": "Saint-Aubin (Frankrijk)",
        "description": "A refined white, Burgundy with citrus, pear and white flowers, layered with mineral tension, subtle texture and exceptional length.",
        "descriptionNl": "Een verfijnde witte Bourgogne met citrus, peer en witte bloemen, aangevuld met minerale spanning, subtiele textuur en een bijzonder lange afdronk.",
        "price": 124.95,
        "serving": "Bottle"
      }
    ]
  },
  {
    "id": "renowned-red-wines",
    "name": "Renowned Red Wines",
    "nameNl": "Gerenommeerde rode wijnen",
    "items": [
      {
        "id": "drink-61",
        "name": "Val C | Carignan (France)",
        "nameNl": "Val C | Carignan (Frankrijk)",
        "description": "Deep ruby and juicy, with red and black berries, soft spice and a smooth, rounded palate.",
        "descriptionNl": "Diep robijnrood en sappig, met rood en zwart fruit, zachte kruidigheid en een ronde, soepele smaak.",
        "price": 5.75,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 5.75
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 25.5
          }
        ]
      },
      {
        "id": "drink-62",
        "name": "Susurro Organic Tempranillo, BIO (Spain)",
        "nameNl": "Susurro Organic Tempranillo, BIO (Spanje)",
        "description": "Ripe plum and strawberry meet gentle tannins and savoury spice in a balanced, medium-bodied style.",
        "descriptionNl": "Rijpe pruim en aardbei worden gecombineerd met zachte tannines en hartige kruidigheid in een evenwichtige, mediumvolle stijl.",
        "price": 6.25,
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 6.25
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 28.5
          }
        ]
      },
      {
        "id": "drink-68",
        "name": "Malbec (Los Árboles, Mendoza, Argentina)",
        "nameNl": "Malbec (Los Árboles, Mendoza, Argentinië)",
        "description": "Fresh and medium-bodied with expressive aromas of ripe plums, strawberries, and delicate floral hints. Silky tannins lead to a smooth, easy-drinking, and fruity finish.",
        "descriptionNl": "Fris en middelvol, met expressieve aroma’s van rijpe pruimen, aardbeien en subtiele florale toetsen. Zijdezachte tannines leiden naar een soepele, toegankelijke en fruitige afdronk.",
        "variants": [
          {
            "label": "Glass",
            "labelNl": "Glas",
            "price": 6.25
          },
          {
            "label": "Bottle",
            "labelNl": "Fles",
            "price": 28.5
          }
        ],
        "price": 6.25
      },
      {
        "id": "drink-63",
        "name": "Saint-Émilion Grand Cru Bordeaux (France)",
        "nameNl": "Saint-Émilion Grand Cru Bordeaux (Frankrijk)",
        "description": "Classic right-bank Bordeaux with dark berry depth, gentle spice and a velvety structure, finishing long and composed.",
        "descriptionNl": "Klassieke Bordeaux van de rechteroever met donker bessenfruit, zachte kruidigheid en een fluweelzachte structuur, met een lange en harmonieuze afdronk.",
        "price": 54.95,
        "serving": "Bottle"
      },
      {
        "id": "drink-64",
        "name": "Chateauneuf-du-Pape Rouge, BIO (France)",
        "nameNl": "Chateauneuf-du-Pape Rouge, BIO (Frankrijk)",
        "description": "Generous and full-bodied, with ripe forest fruit, Mediterranean spice and mineral depth, supported by a long, savoury finish.",
        "descriptionNl": "Royaal en vol van smaak, met rijp bosfruit, mediterrane kruiden en minerale diepte, gedragen door een lange, hartige afdronk.",
        "price": 74.95,
        "serving": "Bottle"
      },
      {
        "id": "drink-65",
        "name": "Malbec Bio (Luis Felipe Edwards LFE 900, Colchagua Valley, Chile)",
        "nameNl": "Malbec Bio (Luis Felipe Edwards LFE 900, Colchagua Valley, Chili)",
        "description": "Powerful and concentrated, with blackberry, dark cherry, violet, cocoa and warm spice, framed by firm tannins and exceptional length.",
        "descriptionNl": "Krachtig en geconcentreerd, met braam, donkere kers, viooltjes, cacao en warme kruiden, omlijst door stevige tannines en een uitzonderlijk lange afdronk.",
        "price": 84.95,
        "serving": "Bottle"
      }
    ]
  }
];
