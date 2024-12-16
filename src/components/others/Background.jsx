export default function Background(props) {
	return <img draggable="false" src={`/webos/config/backgrounds/${props.backgroundImageSrc}`} className="object-cover w-full h-full" />;
}
