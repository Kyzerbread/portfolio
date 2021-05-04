import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api';
import Head from 'next/head'



export default function Index({ allPosts }) {
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Posts</title>
        </Head>
        <Container>
          <h1 className="text-7xl font-bold tracking-tight md:tracking-tighter leading-none mb-24 mt-8">
           📓 Posts
          </h1>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
