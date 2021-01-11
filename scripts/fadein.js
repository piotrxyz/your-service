(() => {
	let elements;
	let windowHeight;

	const init = () => {
		elements = document.querySelectorAll(".hidden");
		windowHeight = window.innerHeight;
	};

	const checkPosition = () => {
		[...elements].forEach(element => {
			const positionFromTop = element.getBoundingClientRect().top;
			if (positionFromTop - windowHeight <= 0) {
				element.classList.add("fade_in");
				element.classList.remove("hidden");
			}
		});
	};
	window.addEventListener("resize", init);
	window.addEventListener("scroll", checkPosition);

	init();
	checkPosition();
})();