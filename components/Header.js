import Link from "next/link";

export default ({ className }) => (
	<header className={className}>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/about">
			<a>About</a>
		</Link>
		<style jsx>{`
			header {
				background: black;
				color: white;
			}
			a {
				color: white;
				display: inline-block;
				padding: 0.5rem 1rem;
			}
		`}</style>
	</header>
);
