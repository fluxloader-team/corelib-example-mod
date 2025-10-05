fluxloaderAPI.events.on("cl:cell-change", (data) => {
	for (const cell of data) {
		if (cell.loc.x === 1368 && cell.loc.y === 1842 && cell.toParticleType) {
			fluxloaderAPI.sendGameMessage("cellChangedToParticle", cell.toParticleType);
		}
	}
});
