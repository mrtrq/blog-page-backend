import Elysia from "elysia";
import postsRouter from "./routes/posts";

const app = new Elysia()

app.use(postsRouter)

export default app;