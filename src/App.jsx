import * as React from "react";

import getApps from "./scripts/getApps";
import launchApp from "./scripts/launchApp"

import Taskbar from "./components/menus/Taskbar";
import AppIcon from "./components/apps/AppIcon";

export default function App() {
	const [apps, setApps] = React.useState([]);

	async function loadRequired() {
		await getApps().then((apps_list) => setApps(apps_list));
	}

	React.useEffect(() => {
		loadRequired();
	}, []);

	return (
		<>
			<div className="absolute h-screen w-screen top-0 left-0">
				<img src="/webos/config/backgrounds/background_default.jpg" />

				<Taskbar
					apps={apps.map((app, index) => (
						<AppIcon key={index} appName={app.name} appColor={app.icon_color} onInteract={() => launchApp(index)} />
					))}
				/>
			</div>
		</>
	);
}
