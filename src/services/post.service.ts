import PostRepository from "../repositories/post.repositories";
import { Post } from "../types/post";

class PostService {
  private repository: PostRepository;

  constructor () {
    this.repository = new PostRepository()
  }

  async createPost(post: Post) {
    return this.repository.create(post);
  }

  async getAllPosts() {
    return this.repository.findAll()
  }

  async getPostById(id: number) {
    return this.getPostById
  }

  async updatePost(id: number, post: Partial<Post>) {
    return this.repository.update(id, post)
  }

  async deletePost(id: number) {
    return this.repository.delete(id)
  }
}

export default PostService;