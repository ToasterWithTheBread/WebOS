import * as React from "react";

import getApps from "./scripts/getApps";
import appLaunch from "./scripts/appLaunch";
import checkIfCompatible from "./scripts/checkIfCompatible";
import getSettings from "./scripts/getSettings";

import Taskbar from "./components/menus/Taskbar";
import AppIcon from "./components/apps/AppIcon";
import IncompatibleDevice from "./components/modals/IncompatibleDevice";
import Background from "./components/others/Background";

export default function App() {
	function delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const [isCompatibleDevice, setIsCompatibleDevice] = React.useState(true);
	const [apps, setApps] = React.useState([]);
	const [settings, setSettings] = React.useState([]);

	React.useEffect(() => {
		loadRequired();
	}, []);

	async function loadRequired() {
		console.log(`[${Date.now()}] Preloading apps`);

		await checkIfCompatible().then((result) => setIsCompatibleDevice(result));
		await getApps().then((result) => setApps(result));
		await getSettings().then((result) => setSettings(result));
	}

	async function launchAppProcedure(app_id) {
		console.log(`[${Date.now()}] Launching app with id: ${app_id}`);

		await appLaunch(app_id);
	}

	return (
		<>
			{!isCompatibleDevice && <IncompatibleDevice backgroundImageSrc={settings.background_image} />}

			<div className="absolute h-screen w-screen top-0 left-0">
				<Background backgroundImageSrc={settings.background_image} />

				<Taskbar
					apps={apps.map((app, index) => (
						<AppIcon key={index} appName={app.name} appColor={app.icon_color} onInteract={() => launchAppProcedure(index)} />
					))}
				/>
			</div>
		</>
	);
}
