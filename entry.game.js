// ---------------------------------------- BLOCKS ----------------------------------------

// Returns some values that are put into "extra" in the main config function
// "width" and "height" are also used to define the size of the UI
function blockspawnerPreConfigUI({ state }) {
	let [val, set] = React.useState(state.store.options.spawnerConfig?.howCoolAreYou ?? 1);

	// Data returned here is passed into `blockIDConfigUI` under `extra`
	// And is also used to determine width and height of configUI
	return {
		width: "300px",
		// If height isn't specified, the UI will set it to auto
		// height: "100px",
		howCoolAreYou: { val, set },
	};
}

// Returns a react element that is shown in the UI
function blockspawnerConfigUI({ extra, closeConfig }) {
	return React.createElement(
		"div",
		{},
		React.createElement(
			"div",
			{ className: "flex items-center space-x-2" },
			React.createElement("label", { htmlFor: "coolness", className: "text-white text-sm" }, "How Cool Are You?"),
			React.createElement("input", {
				type: "number",
				id: "coolness",
				value: extra.howCoolAreYou.val,
				min: 1,
				max: 5,
				onChange: (e) => {
					const i = parseInt(e.target.value, 10);
					extra.howCoolAreYou.set(i);
				},
				className: "text-center text-black",
			}),
		),
		React.createElement(
			"button",
			{
				// Some basic class style the game uses
				className: "px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-200 text-sm",
				onClick: () => {
					// `closeConfig` will set `state.store.options.{id}Config` to whatever is passed here
					// it will also close the menu, and select the block for the player to place
					closeConfig({
						howCoolAreYou: extra.howCoolAreYou.val,
					});
				},
			},
			"Confirm",
		),
	);
}

// For a block with { id: X, ...hasConfigMenu: true } you need block{X}PreConfigUI and block{X}ConfigUI
globalThis.blockspawnerPreConfigUI = blockspawnerPreConfigUI;
globalThis.blockspawnerConfigUI = blockspawnerConfigUI;

// For a block with { id: X, ...tickInterval: Y } you can listen with corelib:block-{X}
fluxloaderAPI.events.on("corelib:block-spawner", (block) => {
	if (globalThis.allParticleIds === undefined) return;

	for (let x = 0; x < 2; x++) {
		const choice = Math.floor(Math.random() * globalThis.allParticleIds.length);
		const particleId = globalThis.allParticleIds[choice];
		corelib.simulation.spawnParticle({ x: block.x + 1 + x, y: block.y + 1, id: particleId });
	}
});

// ---------------------------------------- SCHEDULES ----------------------------------------

fluxloaderAPI.events.on("fl:scene-loaded", (scene) => {
	fluxloaderAPI.gameInstance.state.store.options.spawnerConfig ??= { howCoolAreYou: 1 };
	globalThis.allParticleIds = Object.keys(corelib.exposed.named.particles)
		.map((p) => Number.parseInt(p))
		.filter((p) => Number.isInteger(p) && p != 9);
});

fluxloaderAPI.events.on("corelib:schedule-exampleRain", () => {
	// if (fluxloaderAPI.gameInstance.store)
	for (let x = 540; x <= 600; x++) {
		if (Math.random() < 0.01) {
			const offset = Math.floor(Math.random() * 15);
			corelib.simulation.spawnParticle({ x, y: 540 + offset, id: "Water" });
		}
	}
});
