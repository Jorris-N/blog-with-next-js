import { getAllSlugs, getPostData } from "../../lib/posts";
import Link from "next/dist/client/link";
import Image from "../../components/image";
import Styles from '../../styles/blog.module.css'
export default function BlogPost(props) {
    const {postData} = props;
    return <div className={Styles.container}>
        {/* <Image src = {postData.CoverImage} alt = {postData.title} layout = "fill" /> */}
        <h1>{postData.title}</h1>
        <h6>{postData.author}</h6>
        <p>{postData.Content}</p>
        <div style={{marginTop: "50px"}}>
            <Link href={"/"}>
                <a style={{fontSize: "40px",}}>🔙</a>
                </Link>
            </div>
        </div>
    
}
export const getStaticPaths = () =>  {
    const paths = getAllSlugs();
    return{
        paths,
        fallback: false 
    }
};

export const getStaticProps = ({params}) => {
    const postData = getPostData(params.slug);
    return {
        props: {
            postData,
        },
    };
};