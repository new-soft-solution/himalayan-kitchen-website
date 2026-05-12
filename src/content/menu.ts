import type { MenuCategory } from "@/types";

export const menuCategories: MenuCategory[] = [
  {
    name: "Appetisers Veg",
    items: [
      {
        name: "Pappadums",
        description:
          "A traditional Nepali and Indian snack made from lentil flour which is wonderfully airy, complete, and efficient.",
        descriptionNl:
          "Een traditioneel Nepalees en Indiaas tussendoortje van linzenmeel dat heerlijk luchtig, compleet en efficiënt is.",
        price: 2.5,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Mixed Veg Pakora",
        description:
          "Deep-fried mixed vegetables in a light, fragrant batter (chickpeas flour) and Jwaano (lovage seeds).",
        descriptionNl:
          "Gefrituurde gemengde groenten in een licht, geurig beslag (kikkererwtenmeel) en Jawano (lavaszaad).",
        price: 8.95,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
        image: "/images/food/pakora.jpg",
      },
      {
        name: "Samosa",
        description:
          "Handmade, succulent and authentically spiced with a potato and pea fillings, wrapped in a deliciously light pastry.",
        descriptionNl:
          "Handgemaakt, sappig en authentiek gekruid met een aardappel-erwtenvulling, verpakt in een heerlijk licht gebakje.",
        price: 7.75,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
        image: "/images/food/samosa.jpg",
      },
      {
        name: "Vegetable Spring Roll",
        description:
          "A beloved Indo-Chinese street food delight, featuring a crispy exterior wrapped around a juicy, spicy vegetable filling.",
        descriptionNl:
          "Een geliefd Indo-Chinees straatvoedselverrukking, met een knapperige buitenkant gewikkeld rond een sappige, pittige groentevulling.",
        price: 7.95,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Onion Bhaji",
        description:
          "Small onion fritters are fried in a light batter made with our unique homemade spice mix.",
        descriptionNl:
          "Kleine uienbeignets worden gebakken in een licht beslag, gemaakt met onze unieke huisgemaakte kruidenmix.",
        price: 7.5,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
    ],
  },
  {
    name: "Appetisers Non-Veg",
    items: [
      {
        name: "Chicken Lollypop",
        description:
          "A chicken winglet is spiced up and deep-fried to create a lollipop appearance.",
        descriptionNl:
          "Een kippenvleugeltje wordt gekruid en gefrituurd om het uiterlijk van een lolly te creëren.",
        price: 9.95,
        spiceLevel: 1,
      },
      {
        name: "Chicken Pakora",
        description:
          "Chicken fillet pieces coated in seasoned batter and fried until golden brown.",
        descriptionNl:
          "Stukjes kipfilet bedekt met gekruid beslag en goudbruin gebakken.",
        price: 8.5,
        spiceLevel: 1,
      },
      {
        name: "Prawn Pakora",
        description:
          "King Tiger Prawns in a light, crispy and aromatic batter.",
        descriptionNl:
          "King Tiger Garnalen in een licht, knapperig en aromatisch beslag.",
        price: 9.95,
        spiceLevel: 1,
      },
      {
        name: "Himalayan Sheekh Kabab",
        description:
          "Succulent barbecued minced Irish lamb kabab flavoured with garlic, ginger, and selected spices and barbecued in a tandoori oven.",
        descriptionNl:
          "Sappige, gegrilde Ierse lamskabab, op smaak gebracht met knoflook, gember en geselecteerde kruiden, geroosterd in een tandoori-oven.",
        price: 9.95,
        spiceLevel: 2,
        isPopular: true,
      },
    ],
  },
  {
    name: "Soups",
    items: [
      {
        name: "Nepalese Daal Soup",
        description:
          "Savour the warmth of Nepalese Daal Soup, a hearty blend of lentils and spices that embodies Himalayan comfort.",
        descriptionNl:
          "Proef de warmte van Nepalese Daalsoep, een stevige mix van linzen en kruiden die het comfort van de Himalaya belichaamt.",
        price: 8.5,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Himalayan Soup",
        description:
          "Medium-spiced soup made from a mixture of lentils and beans. Chef's specialty.",
        descriptionNl:
          "Medium gekruide soep gemaakt van een mengsel van linzen en bonen.",
        price: 9.5,
        spiceLevel: 2,
        isVegetarian: true,
        isVegan: true,
      },
    ],
  },
  {
    name: "Himalayan Specialties",
    items: [
      {
        name: "Himalayan Mo:Mo: (10pcs)",
        description:
          "One of the most popular homemade dumplings, mildly spiced with onions, ginger, garlic, and spices, and served with homemade sesame seed and cherry tomato sauce. Regarded as the 7x best dumpling in Amsterdam by Het Parool.",
        descriptionNl:
          "Een van de meest populaire zelfgemaakt dumplings is mild gekruid met uien, gember, knoflook en kruiden. Geserveerd met huisgemaakte saus (sesamzaad en kerstomaatjes). Het wordt door Het Parool beschouwd als de 7x beste dumplings in Amsterdam.",
        price: 15.95,
        variants: [
          { label: "Vegan Steamed", price: 15.95 },
          { label: "Chicken Steamed", price: 17.95 },
          { label: "Vegan Chilly", price: 17.95 },
          { label: "Chicken Chilly", price: 19.95 },
        ],
        spiceLevel: 1,
        isPopular: true,
        image: "/images/food/momo.jpg",
      },
      {
        name: "Himalayan Daal-Bhaat (Thali)",
        description:
          "A typical Nepali everyday dish served with lentils, seasonal vegetable curry, raita, and homemade pickle as the basics.",
        descriptionNl:
          "Een typisch Nepalees alledaags gerecht geserveerd met linzen, seizoensgroentencurry, raita en zelfgemaakte augurk als basis.",
        price: 22.95,
        variants: [
          { label: "Veg", price: 22.95 },
          { label: "Chicken", price: 23.95 },
          { label: "Lamb/Fish", price: 24.95 },
        ],
        spiceLevel: 1,
        isPopular: true,
        image: "/images/food/daal-bhaat.jpg",
      },
      {
        name: "Thukpa",
        description:
          "Savour the warmth of the Himalayas with our Thukpa, a nourishing noodle soup enriched with a flavorful broth, fresh vegetables, and aromatic spices. The perfect blend of comfort and tradition in every spoonful.",
        descriptionNl:
          "Geniet van de warmte van de Himalaya met onze Thukpa, een voedzame noedelsoep verrijkt met een smaakvolle bouillon, verse groenten en aromatische kruiden. Het is de perfecte mix van comfort en traditie in elke lepel.",
        price: 17.95,
        variants: [
          { label: "Veg", price: 17.95 },
          { label: "Chicken", price: 18.95 },
          { label: "Lamb or Prawn", price: 20.95 },
          { label: "Mixed", price: 21.95 },
        ],
        spiceLevel: 1,
      },
      {
        name: "Fried Rice",
        description:
          "A very popular dish in Nepal & India, prepared with Nepali stir-fried rice with vegetables and spices.",
        descriptionNl:
          "Een zeer populair gerecht in Nepal & India, bereid met Nepalese roergebakken rijst met groenten en kruiden.",
        price: 17.95,
        variants: [
          { label: "Veg", price: 17.95 },
          { label: "Chicken", price: 18.95 },
          { label: "Lamb or Prawn", price: 20.95 },
        ],
        spiceLevel: 1,
      },
      {
        name: "Chow Mein",
        description:
          "This must-try, vibrant, and flavorful stir-fried noodle dish captures the essence of Nepalese cuisine with perfectly cooked noodles, a medley of fresh vegetables, traditional spices like turmeric and cumin, all garnished with fresh coriander and a squeeze of lemon.",
        descriptionNl:
          "Dit levendige en smaakvolle geroerbakte noedelgerecht dat je moet proberen, vangt de essentie van de Nepalese keuken met perfect gekookte noedels, een mengeling van verse groenten, traditionele kruiden zoals kurkuma en komijn, allemaal gegarneerd met verse koriander en een scheutje citroen.",
        price: 17.95,
        variants: [
          { label: "Veg", price: 17.95 },
          { label: "Chicken", price: 18.95 },
          { label: "Lamb or Prawn", price: 20.95 },
        ],
        spiceLevel: 1,
        image: "/images/food/chow-mein.jpg",
      },
      {
        name: "Lamb Sekuwa (Dry)",
        description:
          "This must-have succulent Nepalese grilled dish features tender mutton pieces marinated in traditional spices such as cumin, coriander, garlic, and ginger, a sprinkle of lemon juice for a rich, smoky flavour experience, and accompanied by Basmati rice and vegetable curry.",
        descriptionNl:
          "Dit onmisbare, sappige Nepalese gegrilde gerecht bestaat uit malse stukken schapenvlees gemarineerd in traditionele kruiden zoals komijn, koriander, knoflook en gember, een scheutje citroensap voor een rijke, rokerige smaakervaring, en vergezeld van basmatirijst en groentecurry.",
        price: 22.95,
        spiceLevel: 2,
      },
    ],
  },
  {
    name: "All Time Favorites",
    note: "All curry dishes come with boiled Basmati rice. An option to upgrade to Pilau rice is available for an additional charge of €4.50.",
    noteNl:
      "Bij alle currygerechten wordt gekookte basmatirijst geserveerd. Een optie om te upgraden naar Pilau-rijst is beschikbaar tegen een meerprijs van €4,50.",
    items: [
      {
        name: "Tikka Masala",
        description:
          "A dish consists of marinated and charred meat simmered in a creamy, tomato-based sauce infused with Garam Masala, a blend of cinnamon, black pepper, coriander, cumin, and cardamom.",
        descriptionNl:
          "Een gerecht bestaat uit gemarineerd en verkoold vlees gestoofd in een romige saus op basis van tomaten doordrenkt met Garam Masala, een mengsel van kaneel, zwarte peper, koriander, komijn en kardemom.",
        price: 20.95,
        variants: [
          { label: "Chicken or Fish", price: 20.95 },
          { label: "Lamb or Prawn", price: 23.95 },
        ],
        spiceLevel: 1,
        isPopular: true,
      },
      {
        name: "Jhal Frezi",
        description:
          "Fairly hot and sour stir fry of tender meat with onions, tomatoes, green chillies, fresh ginger and garlic, pepper and coriander.",
        descriptionNl:
          "Redelijk heet en zuur roerbakgerecht van mals vlees met uien, tomaten, groene pepers, verse gember en knoflook, peper en koriander.",
        price: 20.95,
        variants: [
          { label: "Chicken or Fish", price: 20.95 },
          { label: "Lamb or Prawn", price: 23.95 },
        ],
        spiceLevel: 3,
      },
      {
        name: "Korma",
        description:
          "A delicately spiced and creamy blend of coconut, cashew nuts, raisins, ground almonds, and aromatic spices. It is very mild with a hint of sweetness.",
        descriptionNl:
          "Een delicaat romige mix van kokosnoot, cashewnoten, rozijnen, gemalen amandelen en aromatische kruiden. Het is zeer mild met een vleugje zoetheid.",
        price: 22.95,
        variants: [
          { label: "Chicken", price: 22.95 },
          { label: "Lamb or Prawn", price: 24.95 },
        ],
        spiceLevel: 1,
      },
      {
        name: "Rogan Josh",
        description:
          "A vibrant red curry infused with a blend of aromatic spices including cloves, cinnamon, cardamom, and fennel, enhanced by the tangy heat of garlic, ginger, and creamy yoghurt.",
        descriptionNl:
          "Een levendige rode curry doordrenkt met een mix van aromatische kruiden, waaronder kruidnagel, kaneel, kardemom en venkel, versterkt door de pittige hitte van knoflook, gember en romige yoghurt.",
        price: 21.95,
        variants: [
          { label: "Chicken", price: 21.95 },
          { label: "Lamb or Prawn", price: 23.95 },
        ],
        spiceLevel: 2,
      },
      {
        name: "Vindaloo",
        description:
          "A rich, hot and peppery curry, strongly spiced with lemon and many chillies.",
        descriptionNl:
          "Een rijke, hete en peperige curry, sterk gekruid met citroen en veel pepers.",
        price: 20.95,
        variants: [
          { label: "Chicken or Fish", price: 20.95 },
          { label: "Lamb or Prawn", price: 23.95 },
        ],
        spiceLevel: 4,
      },
      {
        name: "Madras",
        description:
          "Our Madras curry features a fairly hot, dark green sauce derived from green chilies, paprika, and mint, complemented by slight tangy notes from tamarind.",
        descriptionNl:
          "Onze Madras-curry bevat een redelijk hete, donkergroene saus afgeleid van groene pepers, paprika en munt, aangevuld met lichte pittige tonen van tamarinde.",
        price: 21.95,
        variants: [
          { label: "Chicken or Fish", price: 21.95 },
          { label: "Lamb or Prawn", price: 23.95 },
        ],
        spiceLevel: 3,
      },
    ],
  },
  {
    name: "Chef's Specialties",
    items: [
      {
        name: "Gorkha Curry",
        description:
          "A typical Nepalese curry is made with a harmonious blend of tender meat or vegetables, slow-cooked in a thick, aromatic sauce enriched with a carefully selected mix of Nepali herbs and spices, including fenugreek, turmeric, cumin, and coriander.",
        descriptionNl:
          "Een typisch Nepalese curry wordt gemaakt met een harmonieuze mix van mals vlees of groenten, langzaam gegaard in een dikke, aromatische saus verrijkt met een zorgvuldig geselecteerde mix van Nepalese kruiden en specerijen, waaronder fenegriek, kurkuma, komijn en koriander.",
        price: 21.95,
        variants: [
          { label: "Chicken or Fish", price: 21.95 },
          { label: "Lamb or Prawn", price: 23.95 },
        ],
        spiceLevel: 2,
        isPopular: true,
        image: "/images/food/gorkha-curry.jpg",
      },
      {
        name: "Butter Chicken",
        description:
          "A dish featuring an aromatic butter-based sauce with tomatoes, cream, and a blend of spices. It is typically mild but can be adjusted to be as spicy as you prefer.",
        descriptionNl:
          "Een gerecht met een aromatische saus op boterbasis met tomaten, room en een mix van kruiden. Het is meestal mild, maar kan worden aangepast om zo pittig te zijn als je wilt.",
        price: 23.95,
        spiceLevel: 1,
        isPopular: true,
        image: "/images/food/butter-chicken.jpg",
      },
      {
        name: "Sarabi (Hot & Sweet)",
        description:
          "A creamy dish delicately seasoned with spices, cooked in coconut sauce, enhanced with cashew nut powder, green chilli, and Tia Maria.",
        descriptionNl:
          "Een romig gerecht, subtiel gekruid met kruiden, gekookt in kokossaus, aangevuld met cashewnootpoeder, groene chili en Tia Maria.",
        price: 22.95,
        variants: [
          { label: "Chicken", price: 22.95 },
          { label: "Lamb or Prawn", price: 24.95 },
        ],
        spiceLevel: 2,
      },
      {
        name: "Saag Tarkari",
        description:
          "Fresh spinach sautéed with ripe tomatoes, fenugreek leaves, fresh ginger, and garlic, all infused with Himalayan herbs.",
        descriptionNl:
          "Verse spinazie gebakken met rijpe tomaten, fenegriekbladeren, verse gember en knoflook, allemaal doordrenkt met Himalaya-kruiden.",
        price: 21.95,
        variants: [
          { label: "Chicken", price: 21.95 },
          { label: "Lamb or Prawn", price: 24.95 },
        ],
        spiceLevel: 1,
        image: "/images/food/saag-tarkari.jpg",
      },
      {
        name: "Nepali Biryani",
        description:
          "Savour the essence of tradition with our Biryani, a fragrant blend of basmati rice, spices, and tender marinated meat or vegetables, slow-cooked to perfection. Each serving comes with a cooling raita, offering a harmonious culinary experience.",
        descriptionNl:
          "Proef de essentie van traditie met onze Biryani, een geurige mix van basmatirijst, kruiden en mals gemarineerd vlees of groenten, langzaam gekookt tot in de perfectie. Elke portie wordt geleverd met een verkoelende raita, wat een harmonieuze culinaire ervaring biedt.",
        price: 20.95,
        variants: [
          { label: "Veg or Chicken", price: 20.95 },
          { label: "Lamb or Prawn", price: 23.95 },
          { label: "Mixed", price: 26.95 },
        ],
        spiceLevel: 2,
        isPopular: true,
      },
      {
        name: "Chicken Chilly",
        description:
          "Experience the bold flavours of Nepal with our Chicken Chilly, featuring stir-fried tender chicken, crisp bell peppers, and fiery green chillies, all seasoned with authentic Nepali spices. A perfect blend of heat and taste, this dish is a delight for spice enthusiasts.",
        descriptionNl:
          "Ervaar de gedurfde smaken van Nepal met onze Chicken Chilly, met roergebakken malse kip, knapperige paprika en vurige groene pepers, allemaal gekruid met authentieke Nepalese kruiden. Een perfecte mix van warmte en smaak, dit gerecht is een genot voor kruidenliefhebbers.",
        price: 21.95,
        spiceLevel: 3,
        image: "/images/food/chicken-chilly.jpg",
      },
      {
        name: "Paneer Chilly",
        description:
          "Indulge in the rich flavours of Nepal with our Paneer Chilly, featuring stir-fried homemade cottage cheese, crisp bell peppers, and spicy green chillies, seasoned with authentic Nepali spices. A perfect fusion of heat and taste for spice lovers.",
        descriptionNl:
          "Geniet van de rijke smaken van Nepal met onze Paneer Chilly, met roergebakken zelfgemaakte kwark, knapperige paprika en pittige groene pepers, gekruid met authentieke Nepalese kruiden. Een perfecte mix van warmte en smaak voor kruidenliefhebbers.",
        price: 22.95,
        spiceLevel: 3,
        isVegetarian: true,
      },
    ],
  },
  {
    name: "Tandoori Dishes",
    note: "All our Tandoori chicken, lamb, and fish dishes are prepared using fillets and are served alongside Basmati rice and vegetable curry.",
    noteNl:
      "Al onze Tandoori kip-, lams- en visgerechten worden bereid met filets en geserveerd met basmatirijst en groentecurry.",
    items: [
      {
        name: "Chicken Tikka",
        description:
          "Chicken tikka prepared using fillets, served alongside Basmati rice and vegetable curry.",
        price: 23.95,
        spiceLevel: 2,
        image: "/images/food/tandoori-dish.jpg",
      },
      {
        name: "Lamb Tikka Tandoori",
        description:
          "Lamb tikka prepared using fillets, served alongside Basmati rice and vegetable curry.",
        price: 26.95,
        spiceLevel: 2,
      },
      {
        name: "Paneer Tikka Tandoori",
        description:
          "Paneer tikka prepared using fillets, served alongside Basmati rice and vegetable curry.",
        price: 23.95,
        spiceLevel: 2,
        isVegetarian: true,
      },
    ],
  },
  {
    name: "Tandoori Bread",
    note: "All the naan breads are freshly baked one by one in a tandoori clay oven.",
    noteNl:
      "Alle naanbroodjes worden één voor één vers gebakken in een tandoori-kleioven.",
    items: [
      {
        name: "Plain Naan",
        description: "Freshly baked plain naan bread from the tandoori clay oven.",
        price: 3.5,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Butter Naan",
        description: "Freshly baked butter naan bread from the tandoori clay oven.",
        price: 3.75,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Garlic Naan",
        description: "Freshly baked garlic naan bread from the tandoori clay oven.",
        price: 3.95,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Cheese Naan",
        description: "Freshly baked cheese naan bread from the tandoori clay oven.",
        price: 4.5,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Cheese & Garlic Naan",
        description:
          "Freshly baked cheese and garlic naan bread from the tandoori clay oven.",
        price: 4.75,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Peshwari Naan",
        description:
          "Soft and fluffy, it is filled with coconuts, cashew nuts, and raisins, offering a burst of sweetness and texture.",
        descriptionNl:
          "Zacht en donzig, gevuld met kokosnoten, cashewnoten en rozijnen, wat een vleugje zoetheid en textuur biedt.",
        price: 4.75,
        spiceLevel: 1,
        isVegetarian: true,
      },
    ],
  },
  {
    name: "Vegetarians",
    items: [
      {
        name: "Vegetable Korma",
        description:
          "Mixed vegetables cooked with mild herbs, cream, nuts, coconut, and raisins.",
        descriptionNl:
          "Gemengde groenten gekookt met milde kruiden, room, noten, kokos en rozijnen.",
        price: 19.95,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Daal Makhani",
        description:
          "Indulge in the creamy richness of Daal Makhani, a luxurious blend of black lentils and kidney beans simmered in a buttery, spiced tomato sauce, finished with cream.",
        descriptionNl:
          "Geniet van de romige rijkdom van Daal Makhani, een luxe mix van zwarte linzen en bruine bonen gestoofd in een boterachtige, gekruide tomatensaus, afgewerkt met room.",
        price: 19.95,
        spiceLevel: 1,
        isVegetarian: true,
        image: "/images/food/daal-makhani.jpg",
      },
      {
        name: "Paneer Jhal Frezi",
        description:
          "Homemade paneer cooked in chef's secret curry sauce with fresh ginger, garlic, onion, capsicum, tomatoes, chilli and lemon juice.",
        descriptionNl:
          "Huisgemaakte paneer gekookt in de geheime currysaus van de chef-kok met verse gember, knoflook, ui, paprika, tomaten, chili en citroensap.",
        price: 20.95,
        spiceLevel: 3,
        isVegetarian: true,
      },
      {
        name: "Mixed Vegetable Curry",
        description: "Mixed vegetables cooked with a thick gravy.",
        descriptionNl: "Gemengde groenten gekookt met een dikke saus.",
        price: 19.95,
        spiceLevel: 1,
        isVegetarian: true,
        image: "/images/food/vegetable-curry.jpg",
      },
      {
        name: "Saag Paneer",
        description:
          "Homemade cottage cheese cooked with fresh spinach and herbs.",
        descriptionNl:
          "Huisgemaakte Paneer bereid met verse spinazie en kruiden.",
        price: 20.95,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Shahi Paneer",
        description:
          "Homemade paneer served in a creamy tomato and butter sauce, offering a vegetarian alternative to Butter Chicken.",
        descriptionNl:
          "Zelfgemaakte paneer geserveerd in een romige tomaten- en botersaus, een vegetarisch alternatief voor Butter Chicken.",
        price: 21.95,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Aloo Mattar",
        description:
          "Potatoes and green peas cooked in a special thick Himalayan gravy.",
        descriptionNl:
          "Aardappelen en groene erwten gekookt in een speciale dikke Himalaya-saus.",
        price: 18.95,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Bhindi Bhaaji",
        description:
          "Fresh lady's finger in medium hot with onion and fresh tomato.",
        descriptionNl:
          "Verse okra in medium heet met ui en verse tomaat.",
        price: 19.5,
        spiceLevel: 2,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Aloo Gobi",
        description:
          "A vibrant vegetarian dish featuring potatoes and cauliflower in a spiced tomato and onion sauce, adorned with fresh cilantro.",
        descriptionNl:
          "Een levendig vegetarisch gerecht met aardappelen en bloemkool in een gekruide tomaten- en uiensaus, versierd met verse koriander.",
        price: 18.95,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Chana Masala",
        description:
          "Chickpeas in medium hot curry sauce with onion, fresh tomatoes and lemon juice.",
        descriptionNl:
          "Kikkererwten in medium hete currysaus met ui, verse tomaten en citroensap.",
        price: 19.95,
        spiceLevel: 3,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Soya Chunks & Mushroom",
        description:
          "Also known as a meal maker, and fresh mushroom curry is a delicious and favourite dish in Nepal, made with soya nuggets, spices, and loved by villagers.",
        descriptionNl:
          "Het staat ook bekend als maaltijdmaker, en verse champignoncurry is een heerlijk en favoriet gerecht in Nepal, gemaakt met sojanuggets en kruiden, en geliefd bij dorpelingen.",
        price: 19.95,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Aloo, Tama & Tofu",
        description:
          "One of the favourite curries of Nepal made of potatoes, bamboo shoots, and Tofu is especially for vegan people, an alternative to paneer.",
        descriptionNl:
          "Een van de favoriete curries van Nepal gemaakt van aardappelen, bamboescheuten en tofu is speciaal voor veganisten een alternatief voor paneer.",
        price: 19.95,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
    ],
  },
  {
    name: "Essential Side Dishes",
    items: [
      {
        name: "Himalayan Salad",
        description:
          "A special salad featuring seasonal vegetables and edamame, dressed in a homemade Himalayan dressing.",
        descriptionNl:
          "Een bijzondere salade met seizoensgroenten en edamame, afgewerkt met een huisgemaakte Himalayadressing.",
        price: 9.95,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Basmati Rice",
        description: "Steamed basmati rice.",
        price: 5.0,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Raita",
        description:
          "A blend of yoghurt mixed with cucumber, tomatoes, coriander, mint leaves, and herbs.",
        descriptionNl:
          "Een mix van yoghurt gemengd met komkommer, tomaten, koriander, muntblaadjes en kruiden.",
        price: 4.25,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Mixed Pickle",
        description: "Traditional homemade mixed pickle.",
        price: 4.0,
        spiceLevel: 2,
        isVegetarian: true,
        isVegan: true,
      },
    ],
  },
  {
    name: "Desserts",
    items: [
      {
        name: "Khir",
        description:
          "A creamy dessert that blends aromatic rice pudding with the rich flavours of milk, coconut, and nuts for an exquisite taste experience, perfect for concluding a meal on a delightful note.",
        descriptionNl:
          "Een romig dessert dat aromatische rijstpudding combineert met de rijke smaken van melk, kokosnoot en noten voor een voortreffelijke smaakervaring, perfect om een maaltijd op een heerlijke manier af te sluiten.",
        price: 6.95,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Kulfi",
        description:
          "This delightful treat is crafted by slow-cooking coconut milk until thickened, then infused with cardamom, saffron, and pistachios, offering a refreshingly dense and creamy Kulfi that serves as a perfect alternative to traditional ice cream, ideal for concluding any meal.",
        descriptionNl:
          "Deze heerlijke traktatie wordt gemaakt door kokosmelk langzaam te koken tot het dikker wordt en vervolgens doordrenkt met kardemom, saffraan en pistachenoten, waardoor een verfrissend dichte en romige Kulfi ontstaat die dient als een perfect alternatief voor traditioneel ijs, ideaal als afsluiting van elke maaltijd.",
        price: 7.25,
        spiceLevel: 1,
        isVegetarian: true,
        image: "/images/food/kulfi.jpg",
      },
      {
        name: "Gulab Jamun",
        description:
          "A classic Indian and Nepalese dessert, consists of soft, fried dough balls drenched in a fragrant sugar syrup, offering an indulgent and aromatic finish to any meal.",
        descriptionNl:
          "Een klassiek Indiaas en Nepalees dessert, bestaande uit zachte, gefrituurde deegballetjes gedrenkt in een geurige suikersiroop, die een heerlijke en aromatische afdronk biedt aan elke maaltijd.",
        price: 6.95,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Mango Ice Cream",
        description: "Mango flavoured ice cream.",
        price: 8.5,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Dame Blanche",
        description:
          "A classic dessert experience with smooth vanilla ice cream, drizzled with warm chocolate sauce, and garnished with whipped cream and flaked almonds for an elegant finish.",
        descriptionNl:
          "Het biedt een klassieke dessertervaring met zacht vanille-ijs, besprenkeld met warme chocoladesaus en gegarneerd met slagroom en geschaafde amandelen voor een elegante afdronk.",
        price: 9.95,
        spiceLevel: 1,
        isVegetarian: true,
      },
    ],
  },
];
