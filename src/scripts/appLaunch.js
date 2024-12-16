import axios from "axios";

export default async function appLaunch(app_id) {
    app_id = app_id + 1;

	let app_data = {};
	let app_content = "";

	await axios.get(`/webos/apps/${app_id}/config.json`).then((apps_data_temp) => (app_data = apps_data_temp.data));
	await axios.get(`/webos/apps/${app_id}/app/index.html`).then((app_content_temp) => (app_content = app_content_temp.data));

	try {
		document.getElementById(`app-${app_id}`).remove();
	} catch {
		//
	}

	const root = document.getElementById("root");
	const appDiv = document.createElement("div");

	appDiv.id = `app-${app_id}`;

	appDiv.innerHTML = app_content;

	appDiv.style.position = "absolute";

	appDiv.style.left = app_data.start_margin_left, 
    appDiv.style.top = app_data.start_margin_top, 

    appDiv.style.zIndex = "30";

	appDiv.style.backgroundColor = `rgba(${app_data.background_rgba[0]}, ${app_data.background_rgba[1]}, ${app_data.background_rgba[2]}, ${app_data.background_rgba[3]})`;
    
	appDiv.style.height = app_data.start_height;
	appDiv.style.width = app_data.start_width;

	appDiv.style.borderRadius = app_data.border_radius

	root.appendChild(appDiv);

	let offsetX, offsetY;

	appDiv.addEventListener("mousedown", function (e) {
		offsetX = e.clientX - appDiv.getBoundingClientRect().left;
		offsetY = e.clientY - appDiv.getBoundingClientRect().top;

		function onMouseMove(e) {
			appDiv.style.left = e.clientX - offsetX + "px";
			appDiv.style.top = e.clientY - offsetY + "px";
		}

		function onMouseUp() {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		}

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
	});

	appDiv.addEventListener("contextmenu", function (e) {
		e.preventDefault();
		appDiv.remove();
	});
}
