fluxloaderAPI.events.on("cl:soil-dug", (data) => {
	for (const cell of data) {
		if (cell.toCellType == 0 && cell.fromCellType && cell.fromCellType !== 1 && corelib.exposed.named.soils[cell.fromCellType] === "HyperFluxite") {
			fluxloaderAPI.gameInstanceState.environment.postMessage([corelib.exposed.raw.i.dD.IncrementFluxite, cell.loc.x, cell.loc.y]);
			fluxloaderAPI.gameInstanceState.environment.postMessage([corelib.exposed.raw.i.dD.SpawnFluxiteParticles, cell.loc.x, cell.loc.y]);
		}
	}
});
