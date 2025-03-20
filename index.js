const navbar_sm = document.getElementById("navbar-small");
document.getElementById("menu-btn").onclick = function () {
	navbar_sm.classList.toggle("show");
};

document.getElementById("close-btn").onclick = function () {
	navbar_sm.classList.toggle("show");
};

const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		scrollBtn.style.display = "block";
	} else {
		scrollBtn.style.display = "none";
	}
});

// Scroll to top smoothly when button is clicked
scrollBtn.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});
