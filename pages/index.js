import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

// const PostLink = ({ id, title }) => (
// 	<li>
// 		<Link as={`/p/${id}`} href={`/post?title=${title}`}>
// 			<a>{title}</a>
// 		</Link>
// 	</li>
// );

const Show = ({ id, name }) => (
	<li>
		<Link as={`/p/${id}`} href={`/post?id=${id}`}>
			<a>{name}</a>
		</Link>
	</li>
);

const Index = ({ shows }) => (
	<Layout>
		<h1>Batman TV Shows</h1>
		<ul>
			{shows.map(({ score, show }) => (
				<Show key={show.id} {...show} score={score} />
			))}
		</ul>
	</Layout>
);

Index.getInitialProps = async () => {
	const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
	const payload = await res.json();
	console.log(`Show data fetched. Count: ${payload.length}`);
	// console.log(...payload);

	return {
		shows: payload
	};
};

export default Index;
