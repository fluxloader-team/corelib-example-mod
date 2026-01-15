fluxloaderAPI.events.on("cl:soil-dig", (data) => {
	for (const cell of data) {
		if (cell.toCellType == 0 && cell.cellFromName === "AlternateFluxite") {
			fluxloaderAPI.gameInstanceState.environment.postMessage([corelib.exposed.raw.i.dD.IncrementFluxite, cell.loc.x, cell.loc.y]);
			fluxloaderAPI.gameInstanceState.environment.postMessage([corelib.exposed.raw.i.dD.SpawnFluxiteParticles, cell.loc.x, cell.loc.y]);
		}
	}
});
