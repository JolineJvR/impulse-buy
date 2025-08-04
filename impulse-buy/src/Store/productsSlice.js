// Import from Redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// Import images
import batarang from "../Image/Hunting-Batarang.png";
import liftKing10Ton from "../Image/Lift-King-10-Ton.png";
import petticoat from "../Image/Bridal-Petticoat.png";
import grapplingHook from "../Image/Grappling-Hook.png";
import powerRack from "../Image/Power-Rack.png";
import antiSpy from "../Image/Anti-Spy.png";
import tacticalPen from "../Image/Tactical-Pen.png";
import silverCoin from "../Image/Collection-Coin.png";
import cassetteTape from "../Image/Cassette-Tape.png";
import camouflagedClothing from "../Image/Camouflaged-Clothing.png";
import saltLick from "../Image/Salt-Lick.png";
import stingExtractor from "../Image/Sting-Extractor.png";
import lipstickTaser from "../Image/Lipstick-Taser.png";
import cardboardBoxes from "../Image/Cardboard-Boxes.png";
import vacuum from "../Image/Vacuum.png";
import pixelGlasses from "../Image/Pixel-Glasses.png";
import excelMug from "../Image/Excel-Mug.png";
import bigEnterKey from "../Image/Gaint-Enter-Key.png";
import fisherman from "../Image/Fisherman.png";
import potatoDolls from "../Image/Potato-dolls.png";
import deathStarCalender from "../Image/Death-Star-Calender.png"
import oldManMask from "../Image/Old-Man-Mask.png";
import grandpaMask from "../Image/Grandpa-Mask.png";
import skullMug from "../Image/Skull-Mug.png";
import fishHeadMask from "../Image/Fish-Head-Mask.png";
import octopusHat from "../Image/Octopus-Hat.png";
import nivBible from "../Image/NIV-Bible.png";

// List of products, descriptions, prices,etc.
const productList = [
  { id: 1,
    name: "Double-Bladed Hunting Knife Batarang Tactical Knife - Bat Knife",
    description: 'Get the Batman-inspired dual blade pocket knife for its durable 440 stainless steel blade and secure liner lock system. Enjoy smooth assisted opening on this 11" overall knife with a 2.75" blade.',
    price: 198.00,
    category: "Gadgets & Tools",
    image: batarang},
  { id: 2,
    name: "LIFT KING Electric Chain Hoist 10 Ton 380 volt single speed 4M lift",
    description: `Lift King Electric Hoist: 10 Tom, 380V. Lifts 4m, controls at 3m. It stops itself before you break anything (thank goodness for limit switches!), breaks instantly like a scared cat, and the motor'e housing is tougher than old boots. Oh, and the hooks swivel, because who needs a horrid, tangled mess? It's basically a very serious piece of kit that tries its best to prevent you from doing anything silly.`,
    price: 99270.00,
    category: "Workshop Machinery",
    image: liftKing10Ton},
  { id: 3,
    name: "Fayebridal - Mermaid Petticoat - One Size",
    description: `This one-size mermaid petticoat features an elastic waist, fitting 70-90cm.`,
    price: 359.00,
    category: "Clothing",
    image: petticoat},
  { id: 4,
    name: "Outdoor Multifunctional Gravity & Grappling Hook",
    description: `Get your hands on the Batman-esque Stainless Steel gravity Hook! This compact, durable grappling tool automatically grabs items when lifted, converting from a 2 to 4-pronged hook. Ideal for outdoor adventured and wilderness survival. WARNING: Not for human weight ot climbing!`,
    price: 599.00,
    category: "Gadgets & Tools",
    image: grapplingHook},
  { id: 5,
    name: "Smart Multifunctional Fitness Equipment 3 in 1 Combo Power Rack",
    description: `This Smart Multifunctional Fitness Equipment offers 75+ exercises in one compact system. It features a power cage, functional trainer, Smith machine, various handles, and built-in storage for your gear.`,
    price: 94999.00,
    category: "Sport",
    image: powerRack},
  { id: 6,
    name: "K18 detector anti-monitoring anti-tracking wireless signal",
    description: `The K18 Detector is your 3-in-1 anti-spy tool. It detects RF signals (bugs,wireless cameras), magnetic GPS trackers, and hidden cameras lenses. This upgraded, portable device covers 1MHz-8GHz, ensuring your privacy in hotels, vehicles, and more.`,
    price: 739.00,
    category: "Gadgets & Tools",
    image: antiSpy},
  { id: 7,
    name: "Survival Gear Tactical Self-Defense Pen",
    description: `Get your Tactical Self-defense Pen! Made from T6 Aluminum Alloy, it's a multi-tool featuring a glass breaker, writing pen (black ink), and comes in a gift box. Ideal for survival and emergency car escape.`,
    price: 98,
    category: "Gadgets & Tools",
    image: tacticalPen},
  { id: 8,
    name: "2011 Mandela Rugby 1oz Silver Collectible Coin - Symbolizing Unity & Legacy",
    description: `Own a piece of history: the limited-edition 2011 1oz Nelson Mandela Rugby Silver Coin. Crafted from 99.9% pure silver, this coin honours Mandela's role in uniting South Africa through the spirit of rugby, notably the 1995 World Cup.`,
    price: 2500.00,
    category: "Hobby Toys",
    image: silverCoin},
  { id: 9,
    name: "Geeko E-120AQ Blank 2 Hour VHS Format Video Cassette x 1",
    description: `Geeko E-120AQ Blank VHS Video Cassette: Relive the nostalgia! This 2-hour (120 minute) VHS tape offers outstanding durability, sharp picture, and bright colours for recording your favourite shows or films. Perfect for daily use and insuring you never miss a moment, even with a busy schedule.`,
    price: 152.00,
    category: "Memory",
    image: cassetteTape},
  { id: 10,
    name: "Ghillie Suit With SA Velcro Patch P.L.A. Camouflaged Clothing",
    description: `This durable polyester camouflage suit is perfect for hunting, airsoft, wildlife observation, and more. It offers an adjustable fit, easy jacket access (poppers), and comes with trousers, jacket, hood, gun/binocular wrap,storage bag, and a Velcro SA flag patch for ultimate concealment and convenience.`,
    price: 598.00,
    category: "Gadgets & Tools",
    image: camouflagedClothing},
  { id: 11,
    name: "Himalayan Crystal Salt Lick 2-3kg",
    description: `Provide natural nourishment with a Himalayan Crystal Salt Lick. This 100% natural, unprocessed salt is rich in essential minerals like potassium, magnesium, and iron, helping to prevent deficiencies and support hydration. It comes with a rope for easy hanging, allowing animals to self-regulate their mineral intake.`,
    price: 175.00,
    category: "Pet Treats",
    image: saltLick},
  { id: 12,
    name: "Bee Sting Vacuum Extractor",
    description: `This white plastic Bee Sting Vacuum Extractor is a simple yet effective tool designed to help remove bee and wasp stings.`,
    price: 119.00,
    category: "First Aid",
    image: stingExtractor},
  { id: 13,
    name: "Lipstick Flashlight and Taser for females",
    description: `This rechargeable stun gun looks like harmless makeup, offering discreet self-defense. It boasts super high voltage output, a powerful LED flashlight, and a waterproof, durable aircraft-grade aluminum build.`,
    price: 219.00,
    category: "Hunting",
    image: lipstickTaser},
  { id: 14,
    name: "Cardboard Stock 4 Boxes (Pack of 25 Boxes) - Deal Paradise",
    description: `Get your pack of 25 Corrugated Cardboard Moving/Storage Boxes. Each single-wall box is 300 x 230 x 300mm (open), delivered flat-packed.`,
    price: 399.00,
    category: "Stationery",
    image: cardboardBoxes},
  { id: 15,
    name: "Numatic Henry Pet Care Vacuum (Dry)",
    description: `Meet Henry Pet Care, the legendary vacuum now supercharged for pet owners! He's ready to tackle stubborn pet hairs with his powerful EcoBrush and reduce lingering pet odours thanks to a charcoal-activated MicroFresh filter, leaving your home fresher than ever.`,
    price: 2995.00,
    category: "Home & Kitchen",
    image: vacuum},
  { id: 18,
    name: "Vizao Deal With It Thug Life Meme Pixelated Mosaic Party UV400 Sunglasses",
    description: `Embrace the mem! These pixelated Thug Life sunglasses are the ultimate gag gift for gamers, meme enthusiasts, or trolls. Featuring strong hinge support, comfortable nose pads, and UV400 protection, they're built to last while giving you the power to the meme.`,
    price: 200.00,
    category: "Sport",
    image: pixelGlasses},
  { id: 19,
    name: "Nifty Freak in the Sheets Mug",
    description: `The "Freak in the Sheets" mug is an awesome and funny gift for the workplace Excel expert. This AAA Grade, 11oz/325ml mug features a permanent, high-quality print and is a dishwasher safe.`,
    price: 159.00,
    category: "Stationary",
    image: excelMug},
  { id: 20,
    name: "Enter Pillow Big Enter Key Stress Relief Tools for Office Desktop",
    description: `The Big Enter Key is a plush, USB-connectable button that works just like your computer's "ENTER" key. It's also a soft pillow for naps and a durable stress reliever you can smash to let off steam without damaging your keyboard.`,
    price: 269.00,
    category: "Stationary",
    image: bigEnterKey},
  { id: 21,
    name: "Fisherman Penholder",
    description: `This charming Metal Fisherman Pen Holder is perfect for organizing pens, pencils, and rulers on any desk.`,
    price: 135.00,
    category: "Stationary",
    image: fisherman},
  { id: 22,
    name: "2 Pack Mini Funny Positive Potato Cheer Up Gift Toy Knitted Crochet Decor",
    description: `Brighten anyone's day with this Positive Cheer Up Pack, featuring two adorable knitted positive potato dolls! Each potato holds a card with encouraging words to bring a smile, whether at home or the office. Made from durable, high-quality woolen yarn, these dolls are built to last. Their innovative design offers a warm, relaxing sight after a long day. It's a truly thoughtful and meaningful gift for friends, coworkers, or loved ones for any occasion, adding a personal touch to any space.`,
    price: 185.00,
    category: "Stationary",
    image: potatoDolls},
  { id: 23,
    name: "Death Star Perpetual Calendar",
    description: `Keeping track of the date with galactic style! This unique wooden Death Star Perpetual Calender is intricately crafted to resemble the iconic Star Wars superweapon. It's not just a practical calender, but also a striking decorative piece that will impress any Star Wars fan. Perfect for your desk or shelf, blending functionality with fandom.`,
    price: 398,
    category: "Stationary",
    image: deathStarCalender},
  { id: 24,
    name: "Terrifying Old Man Mask",
    description: `This terrifying old man mask is a fearsome accessory for any horror costume. Made from elastic, stretchy rubber latex, it offers plenty of space and breathability, allowing you to see through the eyes and breathe through the nose.`,
    price: 759.00,
    category: "Toys",
    image: oldManMask},
  { id: 25,
    name: "Creepy Grandpa Latex Mask",
    description: `Unleash your inner scare this halloween with our Creepy Grandpa Latex Mask! This incredibly detailed mask features lifelike wrinkles, sunken eyes, and an unsettling grin that will send shivers down spines. Made from high-quality, durable latex, it offers a comfortable fit for hours of wear during parties, trick-or-treating, or haunted house adventures.`,
    price: 759.00,
    category: "Toys",
    image: grandpaMask},
  { id: 26,
    name: "Creative 3D Double Layer Stainless Steel Axe Knight Skull Coffee Mug",
    description: `Drink in dark style with this Skull Wine Mug! Crafted from fine hand-painted poly-resin and stainless steel, this unique mug is not just a practical vessel but also a striking decoration. The 450ml stainless steel inner liner helps keep your drinks cool, making it perfect for wine, beer, juice, or water at home, bars, or nightclubs. With its cool and delicate skeleton design, it's an excellent gift for pirate, skull, or Gothic lovers, adding a fearsome centerpiece to any party or ceremony.`,
    price: 256.00,
    category: "Home & Kitchen",
    image:skullMug },
  { id: 27,
    name: "Fish Head Costume Mask",
    description: `Get ready to gross out your friends with the CABS Green Fish Head Costume Mask ! This "EW"-induing accessory is perfect for Halloween parties, festivals, and trick-or-treating, ensuring you make a memorably disgusting splash.`,
    price: 699.00,
    category: "Toys",
    image: fishHeadMask},
  { id: 28,
    name: "Creative Octopus Beard Hat Funny Knitted Hat for Men",
    description: `Stay cozy and make a statement with this soft, warm, and windproof Octopus Beard Hat! Made from comfortable acrylic fiber, its unique octopus shape with pull-up tentacles protects you from cold and dust while adding a fun, creative touch. Perfect for outdoor activities like skiing, cycling, hiking, or just bringing a smile to any party.`,
    price: 229.00,
    category: "Toys",
    image: octopusHat},
  { id: 29,
    name: "NIV Hills & Valleys Flexcover Bible",
    description: `The NIV Flexcover Hills & Valleys design evokes the beauty and growth that comes from journeying with God through all the seasons of life. Rose gold metallic calligraphy accents are set against an exquisite original watercolour, inspired by verses in Psalm 23 and Psalm 121.`,
    price: 205.00,
    category: "Books",
    image: nivBible},
]

/*Redux slice function to take objects */

const productsSlice = createSlice({
  // Name of the slice
  name: "Products",
  // Initial state for this slice
  initialState: {
    cart: [], // Array that holds the current items
    qty: 0, // Total quantity of items
    total: 0, // Total monetary value of the items
    searchResults: productList, // All the products in the list above
    featuredItems: [], // An array to hold the subset of products
    purchaseHistory: [], // An array to store records of completed purchases
  },
  // Defines hoe the state changes in response to actions
  reducers: {
    addItem: (state, action) => {
      // Check if item being added already exists in the cart
      const itemInCart = state.cart.find(item => item.id === action.payload.cartItem.id);
      if (itemInCart) {
        // If it does exist, allow incrementation
        itemInCart.qty += action.payload.cartItem.qty;
      } else {
        // If it is new push to cart array
        state.cart.push(action.payload.cartItem);
      }
      // Update the overall total quantity of items
      state.qty += action.payload.cartItem.qty;
      // Update the overall total price of items
      state.total += action.payload.cartItem.price * action.payload.cartItem.qty;
    },
    removeItem: (state, action) => {
      // Find the index of the item in the cart based on IDs
      const { id, removeAll } = action.payload;
      const itemIndex = state.cart.findIndex((product) => product.id === id); // This is Line 87

      if (itemIndex !== -1) {
        if (removeAll || state.cart[itemIndex].qty <= 1) {
          // Decrement the total quantity
          state.qty -= state.cart[itemIndex].qty;
          // Decrement the total price
          state.total -= state.cart[itemIndex].price * state.cart[itemIndex].qty;
          // Remove the item from the cart
          state.cart.splice(itemIndex, 1);
        } else {
          // If false and quantity is greater than 1, just decrement by 1
          state.cart[itemIndex].qty -= 1;
          // Decrement the total quantity by 1
          state.qty -= 1;
          // Decrement the total price by the price of the unit of the item(s)
          state.total -= state.cart[itemIndex].price;
        }
      }
    },
    setSearchResults: (state, action) => {
      const query = action.payload.toLowerCase();
      // Filter the productList to include products
      state.searchResults = productList.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    },
    featuredItem: (state) => {
      // Create a shallow copy of the product list to avoid modifying the
      // original
      const shuffledProducts = [...productList];

      // Shuffle "algorithm"
      for (let i = shuffledProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at i and j.
        [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
      }
      // Do this only 4 times
      state.featuredItems = shuffledProducts.slice(0, 4);
    },
    addPurchase: (state, action) => {
      // Push the new purchase details to the purchase History
      state.purchaseHistory.push(action.payload);
      // Reset everything
      state.cart = [];
      state.qty = 0;
      state.total = 0;
    },
  }
});

export const { addItem, removeItem , setSearchResults, featuredItem, addPurchase  } = productsSlice.actions;

export default productsSlice.reducer;
