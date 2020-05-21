import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/products.ts";

const port = 3000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server started on port ${port}: http://localhost:${port}`);

await app.listen({ hostname: "localhost", port });
