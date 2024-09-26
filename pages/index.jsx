import Navbar from "../components/navbar/Navbar";
import Hero from "../components/main/Hero";
import { getPosts } from '@/lib/api'


export default function Home({initialPosts}) {
  return (
    <main className={`flex flex-col items-center min-h-screen w-full`}>
      <Navbar />
      <Hero initialPosts={initialPosts}/>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await getPosts()
    return {
      props: {
        initialPosts: posts
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        initialPosts: []
      }
    }
  }
}