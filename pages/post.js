import fetch from "isomorphic-unfetch";
import Error from "next/error";
import Layout from "../components/Layout";

const withoutTags = text => text && text.replace(/(<([^>]+)>)/gi, "");

const Post = ({ error, post }) => {
  if (error || !post) return <Error statusCode="404" />;

  const { name, summary, image } = post;
  return (
    <Layout>
      <h1>{name}</h1>
      <p>{withoutTags(summary)}</p>
      {image && image.medium ? <img src={image.medium} /> : ""}
    </Layout>
  );
};

Post.getInitialProps = async context => {
  try {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const payload = await res.json();
    console.log(payload);
    return { post: payload };
  } catch (error) {
    return { error };
  }
};

export default Post;
