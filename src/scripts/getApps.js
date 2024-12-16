import axios from "axios";

export default async function getApps() {
	let app_array = [];

	while (true) {
		const request = await axios.get(`/webos/apps/${app_array.length + 1}/config.json`)

		if (request.data.name) {
			app_array.push(request.data);
		} else {
			break;
		}
	}

	return app_array;
}
