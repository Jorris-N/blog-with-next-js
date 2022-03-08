const posts = [
{
    id: 1,
    title: "Subaru Transmission",
    author: "Jorris Nyange",
    CoverImage: "/images/Transmission.png",
    Excerpt: "The Lineartronic® CVT has proven so well suited to the SUBARU BOXER engine and Subaru symmetrical full-time All-Wheel Drive, it has replaced most traditional ",
    Content: "But instead of gears, the CVT has two pulleys that can vary in width, and a steel belt that connects them.  By getting narrower or fatter, these pulleys change the relationship of engine speed to car speed.  And because these pulleys can vary their width infinitely, they are continuously variable.  When driving a car with a CVT, you never hear or feel the transmission shift -- it simply raises and lowers the engine speed as needed, calling up higher engine speeds (or RPM) for better acceleration and lower RPM for better fuel economy while cruising.",
    slug: "Subaru Transmission",
},
{
    id: 2,
    title: "Subaru Chassis",
    author: "Jorris Nyange",
    CoverImage: "/images/chassis.jpg",
    Excerpt: "A degree of flexibility has also been incorporated to allow the chassis and suspension movements in particular, to perform better.",
    Content: "Subaru is stronger and safer than ever before, the result of ever-improving production methods and endless technological advances. The starting point is in the construction of the vehicle itself and the quality of materials used. An ultra-rigid frame and body set the stage for improved vehicle performance in all respects, from driving dynamics to crash protection.",
    slug: "Subaru Chassis", 
},
{
    id: 3,
    title: "Subaru Boxer Engine",
    author: "Jorris Nyange",
    CoverImage: "/images/boxer_engine.jpg",
    Excerpt: "Subaru is the only automaker on the planet that uses the boxer engine in its entire lineup. They use it in the Forester, Outback, Crosstrek, Impreza, WRX/STI, Legacy and BRZ.",
    Content: "Naturally balanced, the Subaru BOXER engine produces less vibration than other engine designs, resulting in quieter operation and a more comfortable, enjoyable driver experience. The Subaru BOXER engine also helps your Subaru drive better because of its low, compact shape. This allows it to be placed lower in the chassis, giving every Subaru a low center of gravity. This results in balanced, predictable handling, which not only gives you more control behind the wheel, it also helps make driving more fun. Safer too.",
    slug: "Subaru Boxer Engine",
},

];
export function getAllPosts(){
    return posts;
}
export function getAllSlugs(){
    let slugs = [];
    getAllPosts().map(p => slugs.push(`/blog/${p.slug}`));
    return slugs;
};
export function getPostData(slug){
    let post = null;
    getAllPosts().map((p)=>{
        if (p.slug === slug){
            post = p;
            return;
        }
    });
    return post;
}