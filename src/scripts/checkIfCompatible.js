export default async function checkIfCompatible() {
	const isDesktop = window.innerWidth > 768;

	const jsEnabled = typeof window === "object" && typeof document === "object";

	if (!isDesktop || !jsEnabled) {
		return false;
	} else {
		return true;
	}
}
