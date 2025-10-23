// ---------------------------------------- ELEMENTS ----------------------------------------

if (1) {
	corelib.elements.registerBasicRecipe({ inputTop: "Sand", inputBottom: "Petalium", outputTop: "Sandium", outputBottom: "Sandium" });
	corelib.elements.registerBasicRecipe({ inputTop: "WetSand", inputBottom: "Petalium", outputTop: "Sand", outputBottom: "Empty", bothWays: false });

	corelib.elements.registerPressRecipe({ input: "Gold", outputs: [["Sand", 1], ["Water", 0.5], ["Sandium", 1]] });
	corelib.elements.registerPressRecipe({ input: "Sandium", outputs: [["Gold", 1]] });
	corelib.elements.registerPressRecipe({ input: "Sand", outputs: [["Gold", 0.5], ["WetSand", 1]] });

	corelib.elements.registerConveyorBeltIgnores("Sand");
}

// ---------------------------------------- BLOCKS ----------------------------------------

if (1) {
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
		unlockedByDefault: true,
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
}

if (0) {
	corelib.blocks.register({
		sourceMod: "portals",
		id: "Portal",
		name: "Portal",
		description: "An interdimensional portal that links two locations together.",
		shape: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		angles: [0],
		singleBuild: true,
		// corelib will setup the configUI for you, see the game entrypoint for more info
		// Requires some knowledge of React UIs, corelib only sets up the basic listeners but not UI content
		hasConfigMenu: true,
	});
}

// ---------------------------------------- TECH ----------------------------------------

if (0) {
	corelib.tech.register({
		id: "testTech1",
		name: "Wedge",
		description: "A test tech which unlocks the test block, wedge.",
		cost: 1,
		unlocks: { structures: ["d.wedge"] },
	});
	corelib.tech.register({
		id: "testTech2",
		name: "Test Tech 2",
		description: "A second test technology.",
		cost: 1e11,
		unlocks: {},
		parent: "testTech1",
	});
	corelib.tech.register({
		id: "miscTestTech",
		name: "Other Tech Test",
		description: "A test tech for example and testing purposes.",
		unlocks: {},
		cost: 50,
		parent: "Logistics1",
	});
}

// ---------------------------------------- UPGRADES ----------------------------------------

if (0) {
	corelib.upgrades.registerTab({
		id: "portals",
		name: "Portals",
		requirement: {
			tech: "Portal",
		},
	});
	corelib.upgrades.registerCategory({
		tabID: "portals",
		id: "portals",
		name: "Portals",
	});
	corelib.upgrades.registerUpgrade({
		tabID: "portals",
		categoryID: "portals",
		id: "count",
		name: "Portal Count",
		description: "Increases the number of portal channels you can use.",
		maxLevel: 7,
		costs: [5000, 7000, 9000, 11000, 13000, 15000],
	});
}
