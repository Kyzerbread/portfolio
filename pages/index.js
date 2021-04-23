import Container from '../components/container'

import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

// fancy CSS
const msg = "%c Hello there 👋! Welcome to my site!";
const styles = [
  'font-size: 12px',
  'font-family: monospace',
  'background: white',
  'display: inline-block',
  'color: black',
  'padding: 8px 19px',
  // 'border: 1px dashed;'
].join(';')
console.log(msg, styles);

export default function Index({ allPosts }) {
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Jeremy Kaiser</title>
        </Head>
        <Container>
            <h1 className="text-7xl font-bold tracking-tight md:tracking-tighter leading-none mb-4 mt-8">
              Hello, <p>I'm <span className="text-indigo-500">Jeremy Kaiser</span></p>
            </h1>
            <p>Just a simple software developer</p>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
