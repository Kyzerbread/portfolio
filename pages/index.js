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
       
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
              Jeremy Kaiser
            </h2>
      
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
