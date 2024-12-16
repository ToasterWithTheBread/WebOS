import axios from "axios";

export default async function getSettings() {
	let settings = {};

	await axios.get("/webos/config/settings.json").then((settings_temp) => (settings = settings_temp.data));

	return settings;
}
