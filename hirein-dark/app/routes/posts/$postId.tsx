import { json } from '@remix-run/node';
import {useLoaderData, useParams} from '@remix-run/react';
import {loader as postsLoader} from './index'

export const loader = async() => {
    let {posts} = await postsLoader()
    return posts.filter((post:any) => post.id === 1)
}
function Post() {
    const posts = useLoaderData();
    
    if(posts.length >1){
        console.log("ERRRRORRRR!!!")
    }
    const post = posts[0];
   
    const params = useParams();
    return (
        <div>
            <h1>Post {params.postId}</h1>
            <h2>{post.title}</h2>
        </div>
    )
}
export default Post