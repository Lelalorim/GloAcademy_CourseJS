const ourTeam = () => {
	const ourTeamBlock = document.getElementById('command');

	ourTeamBlock.addEventListener('mouseover', event => {
		if (event.target.matches('img')) {
			[event.target.dataset.img, event.target.src] = [event.target.src, event.target.dataset.img];
		}
	});
	ourTeamBlock.addEventListener('mouseout', event => {
		if (event.target.matches('img')) {
			[event.target.src, event.target.dataset.img] = [event.target.dataset.img, event.target.src];
		}
	});
};

export default ourTeam;