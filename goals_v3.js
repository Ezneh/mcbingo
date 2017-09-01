// This is part of a version currently in development and may be changed at any time.


var bingoList_v3 = [

// Very Easy (0)
[
	{name: "(32-64) Cobblestone"},
	{name: "(32-64) Dirt"},
	{name: "(32-64) Oak Wood Planks", frequency: 3},
	{name: "(32-64) Spruce Wood Planks", frequency: 3},
	{name: "(32-64) Birch Wood Planks", frequency: 3},
	{name: "(5-15) Oak Wood", frequency: 3},
	{name: "(5-15) Spruce Wood", frequency: 3},
	{name: "(5-15) Birch Wood", frequency: 3},
	{name: "(16-32) Redstone", antisynergy: "Redstone", frequency: 2},
	{name: "Lava Bucket"},
	{name: "(16-32) Andesite", frequency: 3},
	{name: "(16-32) Granite", frequency: 3},
	{name: "(16-32) Diorite", frequency: 3},
	{name: "Iron Block", antisynergy: "IronBlocks", frequency: 2},
	{name: "Gold Block", antisynergy: "GoldBlocks", frequency: 2},
	{name: "(5-25) Poppies & (5-25) Dandelions"},
	{name: "Level (5-7)", antisynergy: "Level", frequency: 4},
	{name: "(1-5) Note Blocks", antisynergy: "NoteBlocks", frequency: 2},
	{name: "(32-64) Leaves"},
	{name: "Build a (2-4)x(2-4)x(2-4) leaf cube", tooltiptext: "You can choose what shall be the width/length/height.", tooltipimg: "Goal Tooltip Images/LeafCube.jpg"},
	{name: "(2-4) colours of Wool", antisynergy: "WoolColour", frequency: 4},
	{name: "(8-16) Snowballs"},
	{name: "(2-4) Different Slabs", antisynergy: "Slabs", frequency: 2},
	{name: "(2-4) Different Stairs", antisynergy: "Stairs", frequency: 2},
	{name: "Diamond"},
	{name: "(5-15) Rotten Flesh", antisynergy: "RotFlesh", frequency: 2},
	{name: "(10-32) Stone", tooltiptext: "NOT Cobblestone", tooltipimg: "Goal Tooltip Images/Stone.jpg", antisynergy: "Stone", frequency: 2},
	{name: "(1-5) Bread", antisynergy: "Bread", frequency: 2},
	{name: "Hay Bale", antisynergy: "HayBale", frequency: 2},
	{name: "Flower Pot"},
	{name: "(2-10) Feathers"},
	{name: "Sleep in a bed", reactant: "Sleep"},
	{name: "(5-15) Charcoal"},
	{name: "Fishing Rod"},
	{name: "(5-15) Raw Fish"},
],

// Easy (1)
[
	{name: "(2-4) Different Fish"},
	{name: "Grow a Tree in the Nether"},
	{name: "(4-7) Colours of Terracotta", antisynergy: "TerracottaColour", frequency: 4},
	{name: "(1-5) Mushroom Stew"},
	{name: "Shoot a Button with an Arrow"},
	{name: "Book and Quill"},
	{name: "(16-64) Flint"},
	{name: "Cake"},
	{name: "Pumpkin Pie"},
	{name: "Fish a Treasure and a Junk item"},
	{name: "(16-64) Coarse Dirt"},
	{name: "(2-3) Clocks"},
	{name: "(2-4) Iron Blocks", antisynergy: "IronBlocks", frequency: 2},
	{name: "(1-2) Gold Blocks", antisynergy: "GoldBlocks", frequency: 2},
	{name: "Golden Apple"},
	{name: "(2-4) Bookshelves"},
	{name: "Never wear Chestplates"},
	{name: "Never use a Shield"},
	{name: "Jukebox"},
	{name: "Build a glass cube and fill the inner with lava"},
	{name: "(16-32) Moss Stone"},
	{name: "(5-15) Cacti"},
	{name: "(1-3) TNT"},
	{name: "Level (8-15)", antisynergy: "Level", frequency: 4},
	{name: "Create a Snow Golem"},
	{name: "(5-15) Note Blocks", antisynergy: "NoteBlocks", frequency: 2},
	{name: "(5-15) Ink Sacks", antisynergy: "InkSacks", frequency: 2},
	{name: "(6-10) Bread", antisynergy: "Bread", frequency: 2},
	{name: "(2-3) Hay Bales", antisynergy: "HayBale", frequency: 2},
	{name: "(5-8) colours of Wool", antisynergy: "WoolColour", frequency: 4},
	{name: "(5-10) Pistons"},
	{name: "Full Iron Armour"},
	{name: "Full Leather Armour"},
	{name: "Full Gold Armour"},
	{name: "Cauldron with Water"},
	{name: "Complete a Map"},
	{name: "(16-64) Soul Sand"},
	{name: "(5-10) Pumpkins"},
	{name: "(10-30) Vines"},
	{name: "(5-7) Different Slabs", antisynergy: "Slabs", frequency: 2},
	{name: "Every type of Sword"},
	{name: "Every type of Pickaxe"},
	{name: "(16-64) Brick Blocks"},
	{name: "(16-32) Nether Brick Blocks"},
	{name: "(16-64) Arrows"},
	{name: "Sleep in the Nether", reactant: "Sleep"},
	{name: "Fermented Spider Eye"},
	{name: "(5-7) Different Stairs", antisynergy: "Stairs", frequency: 2},
	{name: "(2-4) Ender Pearls"},
	{name: "16 Chicken Eggs"},
	{name: "Hang up 3 Different 4x4 Paintings"},
	{name: "(5-10) Bone Blocks"},
	{name: "2 Creepers in the same Boat", tooltiptext: "The 2 Creepers must be in the same boat at the same time", tooltipimg: "Goal Tooltip Images/2creepers1boat.jpg"},
	{name: "Trade with a Villager"},
	{name: "(2-3) Different Pattern / Colour Shields"},
	{name: "Dead Bush"},
	{name: "(5-15) Grass", tooltiptext: "The tall stuff, NOT the block", tooltipimg: "Goal Tooltip Images/TallGrass.jpg"},
	{name: "Cyan Dye", frequency: 10},
	{name: "Light Gray Dye and Light Blue Dye", frequency: 10},
	{name: "Magenta Dye", frequency: 10},
	{name: "Rose Red", frequency: 10},
	{name: "Orange Dye", frequency: 10},
	{name: "Dandelion Yellow", frequency: 10},
	{name: "Cactus Green", frequency: 10},
	{name: "Pink Dye", frequency: 10},
	{name: "Purple Dye", frequency: 10},
	{name: "Lime Dye", frequency: 10},
	{name: "Never Sleep", catalyst: "Sleep"},
	{name: "Grow a Huge Mushroom"},
	{name: "Water Bucket, Lava Bucket and Milk Bucket"},
	{name: "(3-6) Different Flowers", antisynergy: "Flowers", frequency: 3},
	{name: "(3-6) Colours of Concrete", antisynergy: "ConcreteColour", frequency: 4},
	{name: "(3-6) Colours of Glazed Terracotta", antisynergy: "GlazedColour", frequency: 4},
	{name: "(3-6) Colours of Beds", antisynergy: "BedColour", frequency: 4},
	{name: "Finish where you spawned using a Compass", tooltiptext: "Be stood close enough to spin your compass within a couple blocks at the end of the game", tooltipimg: "Goal Tooltip Images/Compass.jpg", antisynergy: "Finish"},
	{name: "Build a Redstone AND Gate"},
	{name: "(32-64) Stone", tooltiptext: "NOT Cobblestone, normal Stone", tooltipimg: "Goal Tooltip Images/Stone.jpg", antisynergy: "Stone", frequency: 2},
	{name: "Kill (4-8) Animals with only fire"},
	{name: "Kill a Creeper with only fire"},
	{name: "(32-64) Iron Nuggets"},
	{name: "(32-64) Gold Nuggets"},
	{name: "(16-32) Rotten Flesh", antisynergy: "RotFlesh", frequency: 2},
	{name: "(33-64) Redstone", antisynergy: "Redstone", frequency: 2},
],

// Medium (2) 
[
	{name: "Wither Skull"},
	{name: "(6-8) Different Edible Items"},
	{name: "(3-5) Different Gold Items"},
	{name: "Beetroot Soup"},
	{name: "Emerald"},
	{name: "Tame a Horse"},
	{name: "Place a Cactus in a Flower Pot"},
	{name: "Detonate a TNT-Minecart"},
	{name: "(10-30) Magma Blocks"},
	{name: "Skull Charge Banner"},
	{name: "Cookie"},
	{name: "Very Damaged Anvil"},
	{name: "(16-64) Melons (Slices)"},
	{name: "Sleep inside a village", reactant: "Sleep"},
	{name: "Kill a Skeleton with it's own Arrow"},
	{name: "Never wear any Armour", catalyst: "WearArmour"},
	{name: "Get a Skeleton's Bow", tooltiptext: "Kill Skeletons until you get a rare drop from one, it being their Bow", tooltipimg: "Goal Tooltip Images/Bow.jpg"},
	{name: "Diamond Block", antisynergy: "DiamondBlock", frequency: 2},
	{name: "(2-3) Lapis Lazuli Blocks"},
	{name: "Destroy a Monster Spawner"},
	{name: "(2-5) Different Saplings"},
	{name: "Tame an Ocelot"},
	{name: "Tame a Wolf"},
	{name: "9 Fire Charges"},
	{name: "(1-3) Magma Cream"},
	{name: "Grow a Full Jungle Tree"},
	{name: "Create an Iron Golem"},
	{name: "Eye of Ender"},
	{name: "Rabbit Stew"},
	{name: "Potion of Fire Resistance", frequency: 9},
	{name: "Potion of Healing", frequency: 9},
	{name: "Potion of Poison", frequency: 9},
	{name: "Potion of Harming", frequency: 9},
	{name: "Potion of Regeneration", frequency: 9},
	{name: "Potion of Slowness", frequency: 9},
	{name: "Potion of Strength", frequency: 9},
	{name: "Potion of Swiftness", frequency: 9},
	{name: "Potion of Weakness", frequency: 9},
	{name: "Finish by jumping from top to bottom of the world", tooltiptext: "Dig a hole to bedrock, build up to 256 Y (height limit), and then jump from top to bottom at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTopToBottom.jpg", antisynergy: "Finish"},
	{name: "Vegetarian", tooltiptext: "Never eat meat, including fish", tooltipimg: "Goal Tooltip Images/NoFish.jpg", antisynergy: "Food"},
	{name: "Carnivore", tooltiptext: "Only eat meat", tooltipimg: "Goal Tooltip Images/NoBread.jpg", antisynergy: "Food"},
	{name: "Kill yourself with your own arrow", reactant: "Death"},
	{name: "Get a '... while trying to escape ...' Death message", tooltiptext: "Example: 'PLAYER' drowned while trying to escape a Skeleton", reactant: "Death"},
	{name: "Set fire to a Villager's House"},
	{name: "Finish on top of the world", tooltiptext: "Build up to 256 Y (the height limit) and stand on the top at the end of the game", tooltipimg: "Goal Tooltip Images/FinishTop.jpg", antisynergy: "Finish"},
	{name: "Kill a mob with Gravel/Sand"},
	{name: "Put a Carpet on a Llama"},
	{name: "Activate a (4-6)x(4-6) Nether Portal (not counting corners)", tooltiptext: "Width/height of the obsidian frame, disregarding corners (or in other words, width/height of the - once activated - purple portal area).", tooltipimg: "Goal Tooltip Images/Portal.jpg"},
	{name: "(5-10) Obsidian"},
	{name: "(5-7) Iron Blocks", antisynergy: "IronBlocks", frequency: 2},
	{name: "(3-4) Gold Blocks", antisynergy: "GoldBlocks", frequency: 2},
	{name: "Daylight Sensor"},
	{name: "Enchanted Golden Sword"},
	{name: "(9-12) colours of Wool", antisynergy: "WoolColour", frequency: 4},
	{name: "(8-11) Colours of Terracotta", antisynergy: "TerracottaColour", frequency: 4},
	{name: "(7-10) Colours of Glazed Terracotta", antisynergy: "GlazedColour", frequency: 4},
	{name: "(7-10) Colours of Concrete", antisynergy: "ConcreteColour", frequency: 4},
	{name: "(7-10) Colours of Beds", antisynergy: "BedColour", frequency: 4},
	{name: "Power a Redstone Lamp"},
	{name: "(7-10) Different Flowers", antisynergy: "Flowers", frequency: 3},
	{name: "Put a Pigman in Water"},
	{name: "Place an Iron, Gold and Diamond block on top of each other"},
	{name: "Kill a hostile mob with an Anvil"},
	{name: "Never Die", catalyst: "Death"},
	{name: "Level (16-26)", antisynergy: "Level", frequency: 4},
	{name: "(2-3) Different Seeds", antisynergy: "Seeds", tooltiptext: "Includes Nether Wart and Cocoa Beans", tooltipimg: "Goal Tooltip Images/Seeds.jpg"},
	{name: "Dig a 1x1 hole to bedrock (from sea level)"},
	{name: "Wear 4 Different Armour types at the same time",  tooltiptext: "Example: GOLD shoes, LEATHER Trousers, IRON Chestplate and DIAMOND Helmet", tooltipimg: "Goal Tooltip Images/4Armour.jpg", reactant: "WearArmour"},
	{name: "Fill a Hopper with 320 items"},
	{name: "(16-32) Red Nether Brick Blocks"},
	{name: "(16-32) Spectral Arrows"},
	{name: "Activate a Nether Portal inside of a Village"},
	{name: "(33-64) Rotten Flesh", antisynergy: "RotFlesh", frequency: 2},
	{name: "(16-32) Ink Sacks", antisynergy: "InkSacks", frequency: 2},
],

// Hard (3)
[
	{name: "Grass Block", tooltiptext: "If you don't have Silk Touch I know a guy who might pick one up for you...",tooltipimg: "Goal Tooltip Images/GrassBlock.jpg"},
	{name: "Create an Enchantment requiring level 10+"},
	{name: "(10-32) Mycelium"},
	{name: "Milk a Mooshroom"},
	{name: "Shear a Mooshroom"},
	{name: "Sea Lantern"},
	{name: "Sponge", tooltiptext: "DRY Sponge, not a wet one", tooltipimg: "Goal Tooltip Images/Sponge.jpg"},
	{name: "Bounce on a Slime Block", tooltiptext: "Get a Slime Block, place it on the ground and give it a good old bouncin' on", tooltipimg: "Goal Tooltip Images/SlimeBlock.jpg"},
	{name: "Listen to a Music Disc"},
	{name: "(11-14) Different Flowers", antisynergy: "Flowers", frequency: 3},
	{name: "3 Diamond Blocks", antisynergy: "DiamondBlock", frequency: 2},
	{name: "Get a Zombie Pigman's Sword", tooltiptext: "Kill Pigmen until you get a rare drop from one, it being their Golden Sword", tooltipimg: "Goal Tooltip Images/GoldenSword.jpg"},
	{name: "Finish by launching Fireworks of (5-10) Different Colours", antisynergy: "Finish"},
	{name: "Nametag an Enderman"},
	{name: "Kill yourself with an Ender Pearl", tooltiptext: "Need to die to the small fall damage taken from using a pearl", tooltipimg: "Goal Tooltip Images/EnderPearl.jpg", reactant: "Death"},
	{name: "Finish on top of a Blaze spawner", tooltiptext: "Be stood on top of a Blaze spawner at the end of the game", tooltipimg: "Goal Tooltip Images/BlazeSpawner.jpg", antisynergy: "Finish"},
	{name: "(13-16) colours of Wool", antisynergy: "WoolColour", frequency: 4},
	{name: "(12-15) Colours of Terracotta", antisynergy: "TerracottaColour", frequency: 4},
	{name: "(11-14) Colours of Glazed Terracotta", antisynergy: "GlazedColour", frequency: 4},
	{name: "(11-14) Colours of Concrete", antisynergy: "ConcreteColour", frequency: 4},
	{name: "(11-14) Colours of Beds", antisynergy: "BedColour", frequency: 4},
	{name: "Poison a Parrot"},
	{name: "Tame a Parrot"},
	{name: "Kill an Iron Golem"},
	{name: "Place an Ice Block on top of a Magma Block"},
	{name: "Level (27-37)", antisynergy: "Level", frequency: 4},
	{name: "Build a (2-4)x(2-4)x(2-4) Ice cube", tooltiptext: "You can choose what shall be the width/length/height.", tooltipimg: "Goal Tooltip Images/IceCube.jpg"},
	{name: "(4-5) Different Seeds", antisynergy: "Seeds", tooltiptext: "Includes Nether Wart and Cocoa Beans", tooltipimg: "Goal Tooltip Images/Seeds.jpg"},
	{name: "Finish on top of a stairway to Heaven", tooltiptext: "Using Stairs, build up to 256 Y (the height limit) and stand on the top at the end of the game (If you need to jump over a block to go from bottom to top, it's not a finished stairway)", tooltipimg: "Goal Tooltip Images/FinishStairs.jpg", antisynergy: "Finish"},
	{name: "Blow up an End Crystal"},
	{name: "Never place Torches"},
],

// Very Hard (4)
[
	{name: "(4-6) Different Ores (Silk Touch)", tooltiptext: "Coal, Diamond, Emerald, Gold, Iron, Lapis Lazuli, Nether Quatz and Redstone ores are your choices", tooltipimg: "Goal Tooltip Images/Ores.jpg"},
	{name: "(7-9) Different Potions", tooltiptext: "Splash variants count! Even Lingering if you want to get crazy", tooltipimg: "Goal Tooltip Images/Potions.jpg"},
	{name: "Cure a Zombie Villager"},
	{name: "Every type of Chestplate", tooltiptext: "Leather, Gold, Iron, Diamond and yes, even Chainmail", tooltipimg: "Goal Tooltip Images/chainmail chest.jpg"},
	{name: "Nether Star"},
	{name: "Dragon Egg"},
	{name: "Any mob head OTHER than a Wither Skeleton's", tooltiptext: "Dragon, Skeleton, Zombie or a Creeper Head. Wither Skeleton skulls do NOT count", tooltipimg: "Goal Tooltip Images/NoWitherSkull.jpg"},
	{name: "(5-10) Popped Chorus Fruit"},
	{name: "Every colour of Dye"},
	{name: "Level (38-50)", antisynergy: "Level", frequency: 4},
	{name: "Fill a Double Chest with 3456 items"},
	{name: "(16-32) Tipped Arrows"},
	{name: "Place 1 of each Mineral block on top of each other", tooltiptext: "Coal, Iron, Gold, Diamond, Redstone, Lapis, Emerald and Quartz blocks", tooltipimg: "Goal Tooltip Images/MineralBlocks.jpg"},
	{name: "Save yourself with a Totem of Undying"},
	{name: "Sleep in a Woodland Mansion"},
]

];
