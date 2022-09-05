import "./svg.css";
const Angular = ({ colorFill }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 250 250"
		xmlSpace="preserve"
	>
		<path fill="red" className={colorFill} d="M108 135.4h34l-17-40.9z" />
		<path
			className={colorFill}
			d="M125 30 31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1L125 30zm58.1 152.6h-21.7l-11.7-29.2h-49.4l-11.7 29.2H66.9L125 52.1l58.1 130.5z"
		/>
	</svg>
);

export default Angular;
