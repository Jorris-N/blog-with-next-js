import Head from 'next/head'
import Link from 'next/link';
import Image from '../components/image';
import { getAllPosts } from '../lib/posts'
import styles from '../styles/Home.module.css'

export default function Home() {
  const posts = getAllPosts();
  return (
  <div className={styles.container}>
    <Head>
      <title>Subaru Guru</title>
    </Head>
    <div>
      <h1>Learn More About Subaru</h1>
    </div>
      <div>
        {posts.map(
           p => <BlockPostPreview key={p.id} data = {p}/>
           )}
      </div>
  </div>
  )
}
const BlockPostPreview = (props) =>{
  const { data } = props
  return  <div style={{maxWidth: "360px", marginBottom: "50px"}}>
    &nbsp; &nbsp;
    <div>
         
           {/* <Image src={data.CoverImage} alt={data.title} layout="fill"/> */}
          <h2>
            <Link href={`/blog/${data.slug}`}>
              <a>{data.title}</a>
              </Link>
          </h2>
          <h5>Get to Know More about Subaru vehicles</h5>
          <p>{data.Excerpt}</p>
               <div style={{fontWeight: "bold"}}>{data.author}</div>
     </div>
  </div>

}
