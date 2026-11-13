import type { MenuCategory } from "@/types";
import { foodPhotos } from "@/content/photography";

// Source: himalayan_cuisine_menu_2026.pdf, pages 6–11 (75 numbered dishes).
// IDs are the printed dish numbers. Allergen symbols follow the printed menu;
// they are not a complete ingredients audit and can vary by protein choice.
export const menuCategories: MenuCategory[] = [
  {
    "id": "starters",
    "name": "Starters",
    "nameNl": "Voorgerechten",
    "items": [
      {
        "id": "01",
        "name": "Pappadums",
        "description": "Traditional crisp lentil wafers, light and delicately seasoned.",
        "descriptionNl": "Traditionele krokante linzenwafels, licht en subtiel gekruid.",
        "price": 2.75,
        "nameNl": "Pappadums",
        "allergens": []
      },
      {
        "id": "02",
        "name": "Mixed Vegetable Pakora",
        "description": "Seasonal vegetables dipped in a fragrant chickpea-flour batter, fried until crisp and golden.",
        "descriptionNl": "Seizoensgroenten in een geurig kikkererwtenbeslag, krokant en goudbruin gefrituurd.",
        "price": 8.95,
        "nameNl": "Mixed Vegetable Pakora",
        "allergens": []
      },
      {
        "id": "03",
        "name": "Vegetable Samosa",
        "description": "Crisp pastry parcels filled with gently spiced potato and peas.",
        "descriptionNl": "Knapperig deeg gevuld met zacht gekruide aardappel en erwten.",
        "price": 7.95,
        "nameNl": "Vegetable Samosa",
        "allergens": [
          "gluten"
        ]
      },
      {
        "id": "04",
        "name": "Vegetable Spring Roll",
        "nameNl": "Vegetable Spring Roll",
        "price": 7.95,
        "description": "Crisp, golden rolls filled with lightly spiced mixed vegetables.",
        "descriptionNl": "Krokante, goudbruine loempia’s gevuld met licht gekruide groenten.",
        "allergens": [
          "gluten"
        ],
        "isVegetarian": true
      },
      {
        "id": "05",
        "name": "Onion Bhaji",
        "description": "Crisp onion fritters in seasoned chickpea-flour batter.",
        "descriptionNl": "Krokante uienbeignets in gekruid kikkererwtenbeslag.",
        "price": 7.5,
        "nameNl": "Onion Bhaji",
        "allergens": [],
        "image": foodPhotos.onionBhaji.src
      },
      {
        "id": "06",
        "name": "Chicken Pakora",
        "description": "Tender chicken fillet in seasoned batter, fried until crisp and golden.",
        "descriptionNl": "Malse kipfilet in gekruid beslag, krokant en goudbruin gefrituurd.",
        "price": 8.5,
        "nameNl": "Chicken Pakora",
        "allergens": []
      },
      {
        "id": "07",
        "name": "Chicken Lollipop",
        "description": "Frenched chicken winglets, delicately seasoned and fried to a crisp, golden finish - an ever-popular favourite.",
        "descriptionNl": "Kipvleugeltjes op de “lollipop”-manier gesneden, subtiel gekruid en krokant goudbruin gefrituurd - een geliefde klassieker.",
        "price": 10.95,
        "nameNl": "Chicken Lollipop",
        "allergens": [
          "gluten"
        ]
      },
      {
        "id": "08",
        "name": "Prawn Pakora",
        "description": "King prawns in a light, aromatic batter, fried until crisp.",
        "descriptionNl": "Koningsgarnalen in een licht, aromatisch beslag, krokant gefrituurd.",
        "price": 10.95,
        "nameNl": "Prawn Pakora",
        "allergens": [
          "crustaceans"
        ]
      },
      {
        "id": "09",
        "name": "Himalayan Sheekh Kabab",
        "description": "Succulent minced lamb, hand-shaped onto skewers with ginger, garlic and select spices, grilled in the tandoor.",
        "descriptionNl": "Sappig lamsgehakt aan spies, gekruid met gember, knoflook en geselecteerde specerijen, gegrild in de tandoor.",
        "price": 10.5,
        "nameNl": "Himalayan Sheekh Kabab",
        "allergens": []
      },
      {
        "id": "10",
        "name": "Chicken Shashlik",
        "description": "Grilled chicken skewered with peppers and onion, marinated in Himalayan spices and served with chutney.",
        "descriptionNl": "Gegrilde kip aan spies met paprika en ui, gemarineerd in Himalayakruiden en geserveerd met chutney.",
        "price": 11.95,
        "nameNl": "Chicken Shashlik",
        "allergens": []
      }
    ]
  },
  {
    "id": "soups-salads",
    "name": "Soups & Salads",
    "nameNl": "Soepen & salades",
    "items": [
      {
        "id": "11",
        "name": "Himalayan Lentil Soup",
        "description": "Red lentils simmered with fresh ginger, garlic, cumin, coriander and Himalayan spices - light, warming and comforting.",
        "descriptionNl": "Rode linzen zacht gestoofd met verse gember, knoflook, komijn, koriander en Himalayakruiden. Licht, verwarmend en troostrijk.",
        "price": 8.95,
        "nameNl": "Himalayan Lentil Soup",
        "allergens": []
      },
      {
        "id": "12",
        "name": "Himalayan Soup - Chef’s Special",
        "description": "A medium-spiced blend of lentils and beans, simmered with aromatic herbs and spices.",
        "descriptionNl": "Een medium pittige mix van linzen en bonen, gestoofd met aromatische kruiden en specerijen.",
        "price": 9.95,
        "nameNl": "Himalayan Soup - Chef’s Special",
        "allergens": []
      },
      {
        "id": "13",
        "name": "Chicken Soup - Our Special",
        "description": "A comforting blend of lentils and tender chicken, simmered with aromatic herbs and Himalayan spices.",
        "descriptionNl": "Een troostrijke mix van linzen en malse kip, gestoofd met aromatische kruiden en Himalayakruiden.",
        "price": 10.5,
        "nameNl": "Chicken Soup - Our Special",
        "allergens": []
      },
      {
        "id": "14",
        "name": "Tandoori Chicken Salad",
        "description": "Fresh lettuce, spring onion, coriander, peppers, red onion, carrot, edamame and corn, topped with grilled tandoori chicken and house dressing.",
        "descriptionNl": "Verse sla, lente-ui, koriander, paprika, rode ui, wortel, edamame en maïs, getopt met gegrilde tandoorikip en huisdressing.",
        "price": 14.95,
        "nameNl": "Tandoori Chicken Salad",
        "allergens": [
          "soybeans",
          "milk"
        ]
      },
      {
        "id": "15",
        "name": "Himalayan Garden Salad",
        "description": "A colourful vegetarian salad of lettuce, lemon, spring onion, coriander, peppers, red onion, carrot, edamame and corn.",
        "descriptionNl": "Een kleurrijke vegetarische salade met sla, citroen, lente-ui, koriander, paprika, rode ui, wortel, edamame en maïs.",
        "price": 12.95,
        "nameNl": "Himalayan Garden Salad",
        "allergens": [
          "soybeans"
        ],
        "isVegetarian": true
      }
    ]
  },
  {
    "id": "nepalese-specialities",
    "name": "Nepalese Specialities",
    "nameNl": "Nepalese specialiteiten",
    "items": [
      {
        "id": "16",
        "name": "Himalayan Daal Bhaat Set",
        "description": "A typical Nepali everyday dish served with lentils, seasonal vegetable curry, raita, and homemade pickle as the basics. DAAL BHAT POWER 24 HOURS.",
        "descriptionNl": "Een typisch Nepalees alledaags gerecht geserveerd met linzen, seizoensgroentencurry, raita en zelfgemaakte augurk als basis.",
        "price": 22.95,
        "variants": [
          {
            "label": "Veg",
            "labelNl": "Vegetarisch",
            "price": 22.95
          },
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 25.95
          },
          {
            "label": "Lamb",
            "labelNl": "Lamsvlees",
            "price": 27.95
          }
        ],
        "nameNl": "Himalayan Daal Bhaat Set",
        "allergens": [
          "milk"
        ],
        "image": foodPhotos.daalBhaat.src
      },
      {
        "id": "17",
        "name": "Himalayan Fried Rice",
        "description": "Nepali-style basmati rice, wok-fried with vegetables and aromatic spices.",
        "descriptionNl": "Nepalese gebakken basmatirijst met groenten en aromatische kruiden.",
        "price": 18.95,
        "variants": [
          {
            "label": "Veg",
            "labelNl": "Vegetarisch",
            "price": 18.95
          },
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 19.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 22.95
          }
        ],
        "nameNl": "Himalayan Fried Rice",
        "allergens": [
          "soybeans"
        ],
        "image": foodPhotos.friedRice.src
      },
      {
        "id": "18",
        "name": "Lamb Sekuwa",
        "description": "Tender lamb marinated with cumin, coriander, ginger and garlic, grilled for a smoky finish; served with basmati rice and vegetable curry.",
        "descriptionNl": "Mals lamsvlees gemarineerd met komijn, koriander, gember en knoflook, rokerig gegrild; geserveerd met basmatirijst en groentecurry.",
        "price": 24.95,
        "nameNl": "Lamb Sekuwa",
        "allergens": []
      }
    ]
  },
  {
    "id": "momo-noodles",
    "name": "Himalayan Momo & Noodles Specials",
    "nameNl": "Momo & noedelspecialiteiten",
    "items": [
      {
        "id": "19",
        "name": "Vegan Steamed Momo",
        "description": "Handmade Nepali dumplings with a savoury vegetable filling, served with house sesame-tomato achar.",
        "descriptionNl": "Handgemaakte Nepalese dumplings met een hartige groentevulling, geserveerd met huisgemaakte sesam-tomatenachar.",
        "price": 16.95,
        "nameNl": "Vegan Steamed Momo",
        "allergens": [
          "gluten",
          "sesame"
        ],
        "isVegan": true
      },
      {
        "id": "20",
        "name": "Chicken Steamed Momo",
        "description": "Handmade dumplings filled with mildly spiced chicken, onion, ginger and garlic, served with sesame-tomato achar.",
        "descriptionNl": "Handgemaakte dumplings gevuld met licht gekruide kip, ui, gember en knoflook, geserveerd met sesam-tomatenachar.",
        "price": 18.95,
        "nameNl": "Chicken Steamed Momo",
        "allergens": [
          "gluten",
          "sesame"
        ]
      },
      {
        "id": "21",
        "name": "Vegan Kothey Momo (Pan-Fried)",
        "description": "Steamed dumplings pan-seared to a crisp golden base, served with homemade achar.",
        "descriptionNl": "Gestoomde dumplings in de pan gebakken voor een krokante gouden bodem, geserveerd met huisgemaakte achar.",
        "price": 17.75,
        "nameNl": "Vegan Kothey Momo (Pan-Fried)",
        "allergens": [
          "gluten",
          "sesame"
        ],
        "isVegan": true
      },
      {
        "id": "22",
        "name": "Chicken Kothey Momo (Pan-Fried)",
        "description": "Chicken momo pan-seared until golden underneath, while remaining soft and juicy above.",
        "descriptionNl": "Kipmomo in de pan gebakken met een goudbruine bodem, zacht en sappig van boven.",
        "price": 18.75,
        "nameNl": "Chicken Kothey Momo (Pan-Fried)",
        "allergens": [
          "gluten"
        ]
      },
      {
        "id": "23",
        "name": "Vegan Chilli Momo",
        "description": "Momo wok-tossed with peppers, onion, garlic, chilli and a tangy house sauce.",
        "descriptionNl": "Momo uit de wok met paprika, ui, knoflook, chili en een pittig-frisse huissaus.",
        "price": 18.95,
        "nameNl": "Vegan Chilli Momo",
        "allergens": [
          "gluten",
          "soybeans"
        ],
        "isVegan": true
      },
      {
        "id": "24",
        "name": "Chicken Chilli Momo",
        "description": "Chicken momo wok-tossed with peppers, onion, garlic, chilli and house sauce.",
        "descriptionNl": "Kipmomo uit de wok met paprika, ui, knoflook, chili en huissaus.",
        "price": 19.95,
        "nameNl": "Chicken Chilli Momo",
        "allergens": [
          "gluten",
          "soybeans"
        ]
      },
      {
        "id": "25",
        "name": "Jhol Momo - Chicken or Vegan",
        "description": "Steamed momo served in a warm, aromatic sesame-based Nepali jhol broth with fresh herbs.",
        "descriptionNl": "Gestoomde momo in een warme, aromatische Nepalese sesam-jhol met verse kruiden.",
        "price": 18.95,
        "nameNl": "Jhol Momo - Chicken or Vegan",
        "allergens": [
          "gluten",
          "sesame"
        ]
      },
      {
        "id": "26",
        "name": "Thukpa",
        "description": "Traditional Himalayan noodle soup with vegetables, aromatic spices and your choice of protein.",
        "descriptionNl": "Traditionele Himalaya-noedelsoep met groenten, aromatische kruiden en een keuze uit verschillende varianten.",
        "price": 18.95,
        "variants": [
          {
            "label": "Veg",
            "labelNl": "Vegetarisch",
            "price": 18.95
          },
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 19.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 21.95
          },
          {
            "label": "Mixed",
            "labelNl": "Gemengd",
            "price": 23.95
          }
        ],
        "nameNl": "Thukpa",
        "allergens": [
          "gluten",
          "crustaceans"
        ]
      },
      {
        "id": "27",
        "name": "Chow Mein",
        "description": "Nepali-style wok-fried noodles with fresh vegetables, herbs and house seasoning.",
        "descriptionNl": "Nepalese woknoedels met verse groenten, kruiden en huisgemaakte smaakmakers.",
        "price": 18.95,
        "variants": [
          {
            "label": "Veg",
            "labelNl": "Vegetarisch",
            "price": 18.95
          },
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 19.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 21.95
          },
          {
            "label": "Mixed",
            "labelNl": "Gemengd",
            "price": 22.95
          }
        ],
        "nameNl": "Chow Mein",
        "allergens": [
          "gluten",
          "crustaceans",
          "soybeans"
        ]
      }
    ]
  },
  {
    "id": "curry-classics",
    "name": "Curry Classics",
    "nameNl": "Curryklassiekers",
    "items": [
      {
        "id": "28",
        "name": "Tikka Masala",
        "description": "Marinated, grilled chicken in a creamy tomato sauce enriched with garam masala and aromatic spices.",
        "descriptionNl": "Gemarineerde, gegrilde kip in een romige tomatensaus met garam masala en aromatische specerijen.",
        "price": 21.95,
        "variants": [
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 21.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 24.95
          }
        ],
        "nameNl": "Tikka Masala",
        "allergens": [
          "crustaceans",
          "milk"
        ]
      },
      {
        "id": "29",
        "name": "Jalfrezi",
        "description": "A lively, fairly hot stir-fried curry with onion, tomato, peppers, green chilli, ginger, garlic and coriander.",
        "descriptionNl": "Een levendige, vrij pittige curry met ui, tomaat, paprika, groene chili, gember, knoflook en koriander.",
        "price": 21.95,
        "variants": [
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 21.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 24.95
          }
        ],
        "nameNl": "Jalfrezi",
        "allergens": [
          "crustaceans"
        ]
      },
      {
        "id": "30",
        "name": "Korma",
        "description": "A mild and creamy curry with coconut, cashew, almond, raisins and aromatic spices.",
        "descriptionNl": "Een milde, romige curry met kokos, cashew, amandel, rozijnen en aromatische kruiden.",
        "price": 22.95,
        "variants": [
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 22.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 25.95
          }
        ],
        "nameNl": "Korma",
        "allergens": [
          "crustaceans",
          "milk",
          "nuts"
        ]
      },
      {
        "id": "31",
        "name": "Rogan Josh",
        "description": "A rich, aromatic curry with cloves, cinnamon, cardamom, fennel, ginger, garlic and yoghurt.",
        "descriptionNl": "Een rijke, aromatische curry met kruidnagel, kaneel, kardemom, venkel, gember, knoflook en yoghurt.",
        "price": 21.95,
        "variants": [
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 21.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 24.95
          }
        ],
        "nameNl": "Rogan Josh",
        "allergens": [
          "crustaceans",
          "milk"
        ]
      },
      {
        "id": "32",
        "name": "Vindaloo",
        "description": "A bold, fiery Goan-style curry with chilli, garlic, warming spices and a bright, tangy finish.",
        "descriptionNl": "Een krachtige, hete curry op Goa-wijze met chili, knoflook, verwarmende specerijen en een frisse, lichtzure afdronk.",
        "price": 21.95,
        "variants": [
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 21.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 24.95
          }
        ],
        "nameNl": "Vindaloo",
        "allergens": [
          "crustaceans"
        ]
      },
      {
        "id": "33",
        "name": "Madras",
        "description": "A fairly hot South Indian-style curry with chilli, paprika and a subtle tang of tamarind.",
        "descriptionNl": "Een vrij pittige zuid-Indiase curry met chili, paprika en een subtiele toets van tamarinde.",
        "price": 21.95,
        "variants": [
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 21.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 24.95
          }
        ],
        "nameNl": "Madras",
        "allergens": [
          "crustaceans"
        ]
      }
    ]
  },
  {
    "id": "chefs-signature-curries",
    "name": "Chef’s Signature Curries",
    "nameNl": "Signature curry’s",
    "items": [
      {
        "id": "34",
        "name": "Gorkha Curry",
        "description": "A Nepali-style curry, slow-cooked in a thick aromatic sauce with fenugreek, turmeric, cumin and coriander.",
        "descriptionNl": "Nepalese curry, langzaam gegaard in een dikke aromatische saus met fenegriek, kurkuma, komijn en koriander.",
        "price": 21.95,
        "variants": [
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 21.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 24.95
          }
        ],
        "nameNl": "Gorkha Curry",
        "allergens": [
          "crustaceans"
        ],
        "image": foodPhotos.gorkhaChickenCurry.src
      },
      {
        "id": "35",
        "name": "Butter Chicken",
        "description": "Tandoori chicken in a silky tomato-butter sauce, finished with cream and gentle spices.",
        "descriptionNl": "Tandoorikip in een zijdezachte tomaten-botersaus, afgewerkt met room en milde specerijen.",
        "price": 25.95,
        "nameNl": "Butter Chicken",
        "allergens": [],
        "image": foodPhotos.butterChicken.src
      },
      {
        "id": "36",
        "name": "Sarabi - Hot & Sweet",
        "description": "A creamy coconut curry with cashew, green chilli and a distinctive sweet-spiced finish.",
        "descriptionNl": "Romige kokoscurry met cashew, groene chili en een karakteristieke zoet-kruidige afdronk.",
        "price": 23.95,
        "variants": [
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 23.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 25.95
          }
        ],
        "nameNl": "Sarabi - Hot & Sweet",
        "allergens": [
          "nuts"
        ]
      },
      {
        "id": "37",
        "name": "Saag Tarkari",
        "description": "Fresh spinach cooked with tomato, fenugreek, ginger, garlic and Himalayan herbs.",
        "descriptionNl": "Verse spinazie bereid met tomaat, fenegriek, gember, knoflook en Himalayakruiden.",
        "price": 22.95,
        "variants": [
          {
            "label": "Chicken",
            "labelNl": "Kip",
            "price": 22.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 24.95
          }
        ],
        "nameNl": "Saag Tarkari",
        "allergens": []
      },
      {
        "id": "38",
        "name": "Chicken Chilli",
        "description": "Tender chicken stir-fried with peppers, onion, green chilli and bold Nepali seasoning.",
        "descriptionNl": "Malse kip geroerbakt met paprika, ui, groene chili en krachtige Nepalese kruiden.",
        "price": 22.95,
        "nameNl": "Chicken Chilli",
        "allergens": [
          "soybeans"
        ]
      },
      {
        "id": "39",
        "name": "Paneer Chilli",
        "nameNl": "Paneer Chilli",
        "price": 22.95,
        "description": "Homemade paneer stir-fried with peppers, onion, green chilli and bold Nepali seasoning.",
        "descriptionNl": "Huisgemaakte paneer geroerbakt met paprika, ui, groene chili en krachtige Nepalese kruiden.",
        "allergens": [
          "soybeans",
          "milk"
        ],
        "isVegetarian": true,
        "image": foodPhotos.paneerChilli.src
      },
      {
        "id": "40",
        "name": "Salmon Curry - Signature Dish",
        "description": "Pan-seared salmon fillet in a rich, aromatic coconut curry sauce with red onion and fresh chilli, finished with fragrant herbs and a wedge of lime.",
        "descriptionNl": "Gebakken zalmfilet in een rijke, aromatische kokoscurrysaus met rode ui en verse chili, afgewerkt met geurige kruiden en een schijfje limoen.",
        "price": 25.95,
        "nameNl": "Salmon Curry - Signature Dish",
        "allergens": [
          "fish"
        ]
      }
    ]
  },
  {
    "id": "biryani-rice",
    "name": "Biryani & Rice",
    "nameNl": "Biryani & rijst",
    "items": [
      {
        "id": "41",
        "name": "Nepali Biryani",
        "description": "Fragrant basmati rice layered with aromatic spices and marinated vegetables or meat, served with cooling raita.",
        "descriptionNl": "Geurige basmatirijst met aromatische kruiden en gemarineerde groenten of vlees, geserveerd met verkoelende raita.",
        "price": 21.95,
        "variants": [
          {
            "label": "Veg/Chicken",
            "labelNl": "Vegetarisch/kip",
            "price": 21.95
          },
          {
            "label": "Lamb/Prawn",
            "labelNl": "Lamsvlees/garnalen",
            "price": 24.95
          },
          {
            "label": "Mixed",
            "labelNl": "Gemengd",
            "price": 27.95
          }
        ],
        "nameNl": "Nepali Biryani",
        "allergens": [
          "crustaceans",
          "milk",
          "nuts"
        ]
      },
      {
        "id": "42",
        "name": "Basmati Rice",
        "description": "Steamed long-grain basmati rice.",
        "descriptionNl": "Gestoomde langkorrelige basmatirijst.",
        "price": 5.0,
        "nameNl": "Basmati Rice",
        "allergens": []
      },
      {
        "id": "43",
        "name": "Jeera Rice",
        "description": "Basmati rice gently sautéed with cumin seeds and butter.",
        "descriptionNl": "Basmatirijst zacht gebakken met komijnzaad en boter.",
        "price": 6.45,
        "nameNl": "Jeera Rice",
        "allergens": [
          "milk"
        ]
      }
    ]
  },
  {
    "id": "tandoori",
    "name": "Tandoori - From the Clay Oven",
    "nameNl": "Uit de tandoor",
    "items": [
      {
        "id": "44",
        "name": "Tandoori Chicken",
        "description": "Chicken on the bone, marinated in yoghurt and Himalayan spices and grilled in the tandoor.",
        "descriptionNl": "Kip aan het bot, gemarineerd in yoghurt en Himalayakruiden en gegrild in de tandoor.",
        "price": 22.95,
        "nameNl": "Tandoori Chicken",
        "allergens": [
          "milk"
        ]
      },
      {
        "id": "45",
        "name": "Chicken Tikka Tandoori",
        "description": "Marinated chicken fillet grilled in the tandoor.",
        "descriptionNl": "Gemarineerde kipfilet uit de tandoor.",
        "price": 24.95,
        "nameNl": "Chicken Tikka Tandoori",
        "allergens": [
          "milk"
        ]
      },
      {
        "id": "46",
        "name": "Lamb Tikka Tandoori",
        "description": "Tender marinated lamb grilled in the tandoor.",
        "descriptionNl": "Mals gemarineerd lamsvlees uit de tandoor.",
        "price": 27.95,
        "nameNl": "Lamb Tikka Tandoori",
        "allergens": [
          "milk"
        ]
      },
      {
        "id": "47",
        "name": "Paneer Tikka Tandoori",
        "description": "Paneer marinated with aromatic spices and grilled in the tandoor.",
        "descriptionNl": "Paneer gemarineerd met aromatische kruiden en gegrild in de tandoor.",
        "price": 25.95,
        "nameNl": "Paneer Tikka Tandoori",
        "allergens": [
          "milk"
        ],
        "isVegetarian": true
      },
      {
        "id": "48",
        "name": "Mixed Grill Tandoori",
        "description": "A generous selection of tandoori-grilled chicken and seafood, served sizzling straight from the clay oven.",
        "descriptionNl": "Een royale selectie tandoori-gegrilde kip en zeevruchten, sissend geserveerd uit de tandoor.",
        "price": 29.95,
        "nameNl": "Mixed Grill Tandoori",
        "allergens": [
          "crustaceans",
          "milk"
        ]
      }
    ],
    "note": "All the tandoori dishes are served with basmati rice and vegetable curry.",
    "noteNl": "Alle tandoori gerechten worden geserveerd met basmatirijst en groentecurry."
  },
  {
    "id": "vegetarian-vegan-mains",
    "name": "Vegetarian & Vegan Mains",
    "nameNl": "Vegetarisch & vegan",
    "items": [
      {
        "id": "49",
        "name": "Vegetable Korma",
        "description": "Mixed vegetables in a mild, creamy sauce with coconut, nuts and raisins.",
        "descriptionNl": "Gemengde groenten in een milde romige saus met kokos, noten en rozijnen.",
        "price": 20.95,
        "nameNl": "Vegetable Korma",
        "allergens": [
          "nuts"
        ],
        "isVegetarian": true
      },
      {
        "id": "50",
        "name": "Daal Makhani",
        "description": "Black lentils and kidney beans slowly simmered in a buttery spiced tomato sauce, finished with cream.",
        "descriptionNl": "Zwarte linzen en kidneybonen langzaam gestoofd in een gekruide tomaten-botersaus, afgewerkt met room.",
        "price": 19.95,
        "nameNl": "Daal Makhani",
        "allergens": [
          "milk"
        ],
        "isVegetarian": true
      },
      {
        "id": "51",
        "name": "Paneer Jalfrezi",
        "description": "Paneer stir-fried with ginger, garlic, onion, peppers, tomato, chilli and lemon in a vibrant curry sauce.",
        "descriptionNl": "Paneer met gember, knoflook, ui, paprika, tomaat, chili en citroen in een levendige currysaus.",
        "price": 20.95,
        "nameNl": "Paneer Jalfrezi",
        "allergens": [
          "milk"
        ],
        "isVegetarian": true
      },
      {
        "id": "52",
        "name": "Mixed Vegetable Curry",
        "description": "Seasonal vegetables cooked in a rich, aromatic curry gravy.",
        "descriptionNl": "Seizoensgroenten bereid in een rijke, aromatische currysaus.",
        "price": 19.95,
        "nameNl": "Mixed Vegetable Curry",
        "allergens": [],
        "isVegetarian": true
      },
      {
        "id": "53",
        "name": "Saag Paneer",
        "description": "Paneer cooked with fresh spinach, herbs and gentle spices.",
        "descriptionNl": "Paneer bereid met verse spinazie, kruiden en milde specerijen.",
        "price": 21.45,
        "nameNl": "Saag Paneer",
        "allergens": [
          "milk"
        ],
        "isVegetarian": true,
        "image": foodPhotos.saagPaneer.src
      },
      {
        "id": "54",
        "name": "Shahi Paneer",
        "description": "Paneer in a luxurious, creamy tomato-butter sauce with aromatic spices.",
        "descriptionNl": "Paneer in een luxe romige tomaten-botersaus met aromatische kruiden.",
        "price": 22.95,
        "nameNl": "Shahi Paneer",
        "allergens": [
          "milk"
        ],
        "isVegetarian": true
      },
      {
        "id": "55",
        "name": "Aloo Mattar",
        "description": "Potatoes and green peas cooked in a thick Himalayan-style curry sauce.",
        "descriptionNl": "Aardappelen en groene erwten in een dikke curry op Himalaya-wijze.",
        "price": 18.95,
        "nameNl": "Aloo Mattar",
        "allergens": [],
        "isVegetarian": true
      },
      {
        "id": "56",
        "name": "Bhindi Bhaji",
        "description": "Fresh okra cooked with onion, tomato and medium-hot spices.",
        "descriptionNl": "Verse okra bereid met ui, tomaat en medium pittige kruiden.",
        "price": 19.95,
        "nameNl": "Bhindi Bhaji",
        "allergens": [],
        "isVegetarian": true,
        "image": foodPhotos.bhindiBhaji.src
      },
      {
        "id": "57",
        "name": "Aloo Gobi",
        "description": "Potato and cauliflower cooked with tomato, onion, turmeric, cumin and coriander.",
        "descriptionNl": "Aardappel en bloemkool bereid met tomaat, ui, kurkuma, komijn en koriander.",
        "price": 19.95,
        "nameNl": "Aloo Gobi",
        "allergens": [],
        "isVegetarian": true
      },
      {
        "id": "58",
        "name": "Chana Masala",
        "description": "Chickpeas in a medium-spiced tomato-onion curry with ginger, garlic and lemon.",
        "descriptionNl": "Kikkererwten in een medium pittige tomaat-ui-curry met gember, knoflook en citroen.",
        "price": 19.95,
        "nameNl": "Chana Masala",
        "allergens": [],
        "isVegetarian": true,
        "image": foodPhotos.chanaMasala.src
      },
      {
        "id": "59",
        "name": "Soya Chunks & Mushroom",
        "description": "Soya pieces and fresh mushrooms cooked in a comforting Nepali-style spiced curry.",
        "descriptionNl": "Sojastukjes en verse champignons in een verwarmende Nepalese kruidencurry.",
        "price": 19.95,
        "nameNl": "Soya Chunks & Mushroom",
        "allergens": [
          "soybeans"
        ],
        "isVegetarian": true
      },
      {
        "id": "60",
        "name": "Aloo, Tama & Tofu",
        "description": "A Nepali favourite of potato, bamboo shoots and tofu in a tangy, aromatic curry.",
        "descriptionNl": "Een Nepalese favoriet van aardappel, bamboescheuten en tofu in een frisse, aromatische curry.",
        "price": 19.95,
        "nameNl": "Aloo, Tama & Tofu",
        "allergens": [
          "soybeans"
        ],
        "isVegetarian": true,
        "image": foodPhotos.alooTamaTofu.src
      }
    ]
  },
  {
    "id": "tandoori-breads",
    "name": "Tandoori Breads",
    "nameNl": "Tandoori brood",
    "items": [
      {
        "id": "61",
        "name": "Plain Naan",
        "description": "Soft, freshly baked naan from the tandoor.",
        "descriptionNl": "Zachte, versgebakken naan uit de tandoor.",
        "price": 3.75,
        "nameNl": "Plain Naan",
        "allergens": [
          "gluten"
        ]
      },
      {
        "id": "62",
        "name": "Butter Naan",
        "description": "Fresh tandoori naan brushed with melted butter.",
        "descriptionNl": "Verse naan uit de tandoor, bestreken met gesmolten boter.",
        "price": 3.95,
        "nameNl": "Butter Naan",
        "allergens": [
          "gluten",
          "milk"
        ]
      },
      {
        "id": "63",
        "name": "Garlic Naan",
        "description": "Freshly baked naan finished with fragrant garlic.",
        "descriptionNl": "Versgebakken naan, afgewerkt met geurige knoflook.",
        "price": 4.25,
        "nameNl": "Garlic Naan",
        "allergens": [
          "gluten",
          "milk"
        ]
      },
      {
        "id": "64",
        "name": "Cheese Naan",
        "description": "Soft naan filled with melted cheese.",
        "descriptionNl": "Zachte naan gevuld met gesmolten kaas.",
        "price": 4.75,
        "nameNl": "Cheese Naan",
        "allergens": [
          "gluten",
          "milk"
        ]
      },
      {
        "id": "65",
        "name": "Cheese & Garlic Naan",
        "description": "Soft cheese-filled naan with aromatic garlic.",
        "descriptionNl": "Zachte, met kaas gevulde naan en geurige knoflook.",
        "price": 4.95,
        "nameNl": "Cheese & Garlic Naan",
        "allergens": [
          "gluten",
          "milk"
        ]
      },
      {
        "id": "66",
        "name": "Peshwari Naan",
        "description": "Sweet naan filled with coconut, cashew and raisins.",
        "descriptionNl": "Zoete naan gevuld met kokos, cashew en rozijnen.",
        "price": 4.95,
        "nameNl": "Peshwari Naan",
        "allergens": [
          "gluten",
          "milk",
          "nuts"
        ]
      }
    ]
  },
  {
    "id": "sides-accompaniments",
    "name": "Sides & Accompaniments",
    "nameNl": "Bijgerechten",
    "items": [
      {
        "id": "67",
        "name": "Raita",
        "description": "Cooling yoghurt with cucumber, tomato, coriander, mint and herbs.",
        "descriptionNl": "Verkoelende yoghurt met komkommer, tomaat, koriander, munt en kruiden.",
        "price": 4.5,
        "nameNl": "Raita",
        "allergens": [
          "milk"
        ]
      },
      {
        "id": "68",
        "name": "Mixed Pickle",
        "description": "Traditional mixed achar with a tangy, spiced finish.",
        "descriptionNl": "Traditionele gemengde achar met een pittig-frisse smaak.",
        "price": 4.0,
        "nameNl": "Mixed Pickle",
        "allergens": [
          "mustard"
        ]
      },
      {
        "id": "69",
        "name": "Nepali Green Salad",
        "nameNl": "Nepali Green Salad",
        "price": 5.5,
        "description": "A crisp, vibrant platter of fresh cucumbers, carrots, and white radish served with sliced onions, spicy green chilies, and fresh lime.",
        "descriptionNl": "Een knapperig, levendig bord met verse komkommer, wortel en witte rammenas, geserveerd met uienringen, pittige groene pepers en verse limoen.",
        "allergens": [],
        "isVegetarian": true
      }
    ]
  },
  {
    "id": "desserts",
    "name": "Desserts",
    "nameNl": "Nagerechten",
    "items": [
      {
        "id": "70",
        "name": "Kheer",
        "description": "Creamy rice pudding with milk, cardamom, coconut and nuts.",
        "descriptionNl": "Romige rijstepap met melk, kardemom, kokos en noten.",
        "price": 7.75,
        "nameNl": "Kheer",
        "allergens": [
          "milk",
          "nuts"
        ]
      },
      {
        "id": "71",
        "name": "Kulfi",
        "description": "A dense, creamy Indian frozen dessert scented with cardamom and saffron, finished with pistachio.",
        "descriptionNl": "Vol en romig Indiaas ijsdessert met kardemom en saffraan, afgewerkt met pistache.",
        "price": 7.75,
        "nameNl": "Kulfi",
        "allergens": [
          "milk",
          "nuts"
        ]
      },
      {
        "id": "72",
        "name": "Gulab Jamun",
        "description": "Soft milk-solid dumplings soaked in fragrant cardamom sugar syrup.",
        "descriptionNl": "Zachte melkdeegballetjes in geurige kardemom-suikersiroop.",
        "price": 6.95,
        "nameNl": "Gulab Jamun",
        "allergens": [
          "gluten",
          "milk"
        ]
      },
      {
        "id": "73",
        "name": "Mango Ice Cream",
        "description": "Smooth, creamy ice cream bursting with ripe mango flavour.",
        "descriptionNl": "Romig, zacht ijs met de volle smaak van rijpe mango.",
        "price": 8.95,
        "nameNl": "Mango Ice Cream",
        "allergens": [
          "milk"
        ]
      },
      {
        "id": "74",
        "name": "Vanilla Ice Cream",
        "description": "Classic creamy vanilla ice cream, simple and satisfying.",
        "descriptionNl": "Klassiek romig vanille-ijs, eenvoudig en heerlijk.",
        "price": 7.95,
        "nameNl": "Vanilla Ice Cream",
        "allergens": [
          "milk"
        ]
      },
      {
        "id": "75",
        "name": "Dame Blanche",
        "description": "A classic dessert of smooth vanilla ice cream, drizzled with warm chocolate sauce and finished with whipped cream and flaked almonds.",
        "descriptionNl": "Een klassiek dessert van zacht vanille-ijs, besprenkeld met warme chocoladesaus en afgewerkt met slagroom en geschaafde amandelen.",
        "price": 9.95,
        "nameNl": "Dame Blanche",
        "allergens": [
          "milk",
          "nuts"
        ]
      }
    ]
  }
];
