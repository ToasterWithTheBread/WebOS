export default function Taskbar({ apps }) {
	return (
		<div className="absolute w-screen bottom-0 z-40 flex justify-center items-center">
			<div className="bg-black/70 backdrop-blur-lg rounded-2xl h-20 mb-2 inline-flex items-center justify-center gap-4 px-5">
				{apps.map((app, index) => (
					<div key={index}>{app}</div>
				))}
			</div>
		</div>
	);
}
