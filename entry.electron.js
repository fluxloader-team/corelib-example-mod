// ---------------------------------------- ELEMENTS ----------------------------------------

corelib.elements.registerBasicRecipe({ inputTop: "Sand", inputBottom: "Petalium", outputTop: "Sandium", outputBottom: "Sandium" });
corelib.elements.registerBasicRecipe({ inputTop: "WetSand", inputBottom: "Petalium", outputTop: "Sand", outputBottom: "Empty", bothWays: false });

corelib.elements.registerPressRecipe({
	input: "Gold",
	outputs: [
		["Sand", 1],
		["Water", 0.5],
		["Sandium", 1],
	],
});
corelib.elements.registerPressRecipe({ input: "Sandium", outputs: [["Gold", 1]] });
corelib.elements.registerPressRecipe({
	input: "Sand",
	outputs: [
		["Gold", 0.5],
		["WetSand", 1],
	],
});

corelib.elements.registerConveyorBeltIgnores("Sand");

// ---------------------------------------- BLOCKS ----------------------------------------

corelib.blocks.register({
	sourceMod: "corelibexamplemod",
	id: "wedge",
	name: "Wedge Block",
	description: "A simple yet versatile wedge block",
	imagePath: "assets/wedgeRight",
	shape: [
		[10, 0, 0, 0],
		[3, 10, 0, 0],
		[3, 3, 0, 0],
		[3, 0, 0, 0],
	],
	angles: [0],
	singleBuild: true,
});

corelib.blocks.registerVariant({
	parentId: "wedge",
	suffix: "Left",
	imagePath: "assets/wedgeLeft",
	shape: [
		[0, 0, 0, 9],
		[0, 0, 9, 3],
		[0, 0, 3, 3],
		[0, 0, 0, 3],
	],
	angles: [-180, 180],
});

corelib.blocks.registerVariant({
	parentId: "wedge",
	suffix: "Up",
	imagePath: "assets/wedgeUp",
	shape: [
		[3, 3, 3, 3],
		[0, 3, 3, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	angles: [90],
});

corelib.blocks.registerVariant({
	parentId: "wedge",
	suffix: "Down",
	imagePath: "assets/wedgeDown",
	shape: [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 9, 10, 0],
		[9, 3, 3, 10],
	],
	angles: [-90],
});

corelib.blocks.register({
	sourceMod: "corelibexamplemod",
	id: "spawner",
	name: "Spawner",
	description: "A random particle spawner.",
	imagePath: "assets/spawner",
	shape: [
		[3, 3, 3, 3],
		[3, 0, 0, 3],
		[3, 0, 0, 3],
		[3, 0, 0, 3],
	],
	angles: [0],
	singleBuild: true,
	hasConfigMenu: true,
	animationInterval: 500,
	unlockedByDefault: true,
	tickInterval: 100,
});

// ---------------------------------------- TECH ----------------------------------------

corelib.tech.register({
	id: "unlockWedge",
	name: "Wedge",
	description: "A tech which unlocks the test wedge block.",
	cost: 25,
	unlocks: { structures: ["d.wedge"] },
	parent: "Logistics1",
});

corelib.tech.register({
	id: "unlockSpawner",
	name: "Spawner",
	description: "A tech which unlocks the spawner and its upgrades.",
	cost: 25,
	unlocks: { structures: ["d.spawner"] },
	parent: "unlockWedge",
});

// ---------------------------------------- UPGRADES ----------------------------------------

corelib.upgrades.registerTab({
	id: "tabSpawner",
	name: "Spawners",
	requirement: { tech: "unlockSpawner" },
});

corelib.upgrades.registerCategory({
	tabID: "tabSpawner",
	id: "categorySpawnerOutput",
	name: "Output",
});

corelib.upgrades.registerUpgrade({
	tabID: "tabSpawner",
	categoryID: "categorySpawnerOutput",
	id: "spawnerOutputRate",
	name: "Output Rate",
	description: "Increase the rate of output of all spawners.",
	maxLevel: 6,
	costs: [100, 200, 300, 400, 500],
});

// ---------------------------------------- SCHEDULES ----------------------------------------

corelib.schedules.register("exampleRain", 16);
