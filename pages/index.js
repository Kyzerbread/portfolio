import Container from "../components/container";
import Section from "../components/section";

import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

// fancy CSS
const msg = "%c Hello there 👋! Welcome to my site!";
const styles = [
  "font-size: 12px",
  "font-family: monospace",
  "background: white",
  "display: inline-block",
  "color: black",
  "padding: 8px 19px",
  // 'border: 1px dashed;'
].join(";");
console.log(msg, styles);

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function Index({ allPosts }) {
  const mostRecentPosts = allPosts.slice(0, 2);
  return (
    <>
      <Layout>
        <Head>
          <title>Jeremy Kaiser</title>
        </Head>
        <Section>
          <Container>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight md:tracking-tighter leading-none mb-4">
              Hello! 👋
              <p>
                I'm <span className="text-orange-300">Jeremy Kaiser</span>
              </p>
            </h1>
            <p className="text-xl text-white ">
              I design and develop applications because I think software is
              pretty f$*%!ng cool. 😎
            </p>
          </Container>
        </Section>
        <div className="spacer header-svg"></div>
        <Section backgroundColor="#f57c00">
          <Container>
            <p className="text-xl mb-4">📓 Recent Blog Posts:</p>
            <div className="flex flex-col ...">
              {mostRecentPosts.map((post, index) => {
                let date = new Date(post.date);
                return (
                  <div className="ml-2 mb-8 pl-4 post max-w-xl" key={index}>
                    <p className="text-lg font-bold">
                      <a href={`/posts/${post.slug}`}>{post.title}</a>
                    </p>
                    <p className="text-lg mb-2">{post.excerpt}</p>
                    <p className="text-xs ">
                      {date.toLocaleDateString("en-US", options)}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="text-xl mt-4 mb-4">
              Hungry for more? You can check out all my blogs{" "}
              <a href="/posts" className="text-pink-500 hover:text-pink-700">
                here
              </a>
              .
            </p>
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
