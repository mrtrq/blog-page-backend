import Elysia from "elysia";
import PostService from "../services/post.service";
import { Post } from "../types/post";


const postService = new PostService();

const postsRouter = new Elysia()
    .post('/posts', async ({body}) => {
        return postService.createPost(body as Post)
    })
    .get('/posts', async () => {
        return postService.getAllPosts()
    })
    .get('/posts/:id', async ({params: {id}}) => {
        return postService.getPostById(Number(id))
    })
    .put('/posts/:id', async ({params: {id}, body}) => {
        return postService.updatePost(Number(id),body as Partial<Post>)
    })
    .delete('/posts/:id', async ({params : {id}}) => {
        return postService.deletePost(Number(id))
    })

export default postsRouter
