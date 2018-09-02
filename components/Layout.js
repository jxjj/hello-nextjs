import Header from "./Header";

export default ({ children }) => (
	<div>
		<Header className="header" />
		<main className="main">{children}</main>

		<style jsx global>
			{`
				*,
				*:after,
				*:before {
					box-sizing: border-box;
				}
				html,
				body {
					margin: 0;
				}
				body {
					font-family: sans-serif;
					line-height: 1.4;
				}
			`}
		</style>
		<style jsx>
			{`
				div > :global(.header) {
					background: red;
				}
				.main {
					padding: 1rem;
				}
			`}
		</style>
	</div>
);
