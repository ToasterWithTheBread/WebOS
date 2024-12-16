export default function AppIcon(props) {
	return (
		<>
			<div
				className={`text-xs bg-${props.appColor} p-2 rounded-md transition ease-in-out duration-200 cursor-pointer`}
				onClick={props.onInteract}
			>
				<p className="text-white">{props.appName}</p>
			</div>
		</>
	);
}
