import { getAllSlugs, getPostData } from "../../lib/posts";
import Link from "next/dist/client/link";
import Image from "../../components/image";
import Styles from '../../styles/blog.module.css'
export default function BlogPost(props) {
    const {postData} = props;
    return <div className={Styles.container}>
        <div style={{maxWidth: "600px", marginTop: "20px"}}>
        {/* <Image src = {postData.CoverImage} alt = {postData.title} layout = "fill"/> */}
        <img
           src = {postData.CoverImage}
           alt = {postData.title}
           style={{width: "100%"}}/>
        </div>
        <h1>{postData.title}</h1>
        <h6>{postData.author}</h6>
        <p>{postData.Content}</p>
        <div style={{marginTop: "30px"}}>
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