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

const vidCtrl = document.getElementById("vidControlBtn");
const video = document.getElementById("restaurantVideo");
const icon = vidCtrl.querySelector("i");
vidCtrl.onclick = () => {
	if (video.paused) {
		video.play();
		icon.classList.remove("fa-play"); 
		icon.classList.add("fa-pause"); 
	} else {
		video.pause();
		icon.classList.remove("fa-pause"); 
		icon.classList.add("fa-play");
	}
};

video.onended = () => {
	icon.classList.remove("fa-pause");
	icon.classList.add("fa-play"); 
};


document.addEventListener('DOMContentLoaded', () => {
	const text = "Every dish is a chapter of passion, tradition, and creativity that I hope brings joy to your table. As a chef, I believe that food is more than just sustenance—it's a way to connect, to tell stories, and to create memories. We take pride in preparing every dish with care and passion, honoring the flavors that come from our roots while also embracing creativity.";
	let index = 0;
	const typingText = document.getElementById('typing-text');

	const typeText = () => {
		if (index < text.length) {
			typingText.textContent += text.charAt(index);
			index++;
			setTimeout(typeText, 50);
		} else {
			setTimeout(() => {
				typingText.textContent = "";
				index = 0;
				typeText();
			}, 5000);
		}
	}

	typeText();
});
    

