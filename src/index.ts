import { Elysia } from 'elysia';
import postsRouter from './routes/posts';

const app = new Elysia()
  .use(postsRouter) 
  .listen(3000);

console.log(`Server is running on http://localhost:3000`);
