import { supabase } from "../config/supabase";
import { Post } from "../types/post";

class PostRepository {
  async create(post: Post): Promise<Post | null> {
    const {data, error} = await supabase
    .from('posts')
    .insert(post)
    .select()
    .single()

  if (error) {
    console.error('Create post error: ', error)
    return null;
    }
  return data
  }

  async findAll(): Promise<Post[]>{
    const {data, error} = await supabase
    .from('posts')
    .select('*')
    .order('created_at', {ascending: false})

    if (error) {
      console.error('Find all posts error', error)
      return []
    }
    return data
  }

  async findById(id: number): Promise<Post | null> {
    const {data, error} = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

    if (error) {
      console.error('Find post by ID error', error)
      return null
    }
    return data
  }

  async update(id: number, post: Partial<Post>): Promise<Post | null> {
    const {data, error} = await supabase
    .from('posts')
    .update(post)
    .eq('id', id)
    .select()
    .single()

    if (error) {
      console.error('Update post error', error)
      return null
    }
    return data
  }

  async delete(id: number): Promise<boolean> {
    const {error} = await supabase
    .from('posts')
    .delete()
    .eq('id', id)

    return !error
    }
  }

export default PostRepository