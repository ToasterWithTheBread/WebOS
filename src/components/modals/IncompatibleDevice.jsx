export default function IncompatibleDevice(props) {
	return (
		<div className="absolute top-0 left-0 z-50 h-screen w-screen bg-black text-white">
			<div className="h-screen flex items-center justify-center">
				<img draggable="false" src={`/webos/config/backgrounds/${props.backgroundImageSrc}`} className="object-cover w-full h-full" />
				<div className="absolute h-screen w-screen backdrop-blur-lg">
					<div className="h-screen flex flex-col items-center justify-center">
						<div>
							<p className="font-bold text-4xl">Oh no!</p>
						</div>
						<div className="text-center px-10 mt-2">
							<p>Your device is incompatible. This could be due to numerous reasons, such as using a mobile device or not having Javascript enabled. Please try again on a different device.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
