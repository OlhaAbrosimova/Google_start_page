function changeLogo(event) {
	event.preventDefault();
	let iconElement = document.querySelector("#google-logo");
	iconElement.setAttribute(
		"src",
		`https://www.ilmakiage.com/skin/frontend/ilmakiage/default/images/logo_new.svg`
	);
}

let buttonClick = document.querySelector("#btn-click");
buttonClick.addEventListener("click", changeLogo);
