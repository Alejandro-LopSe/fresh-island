import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Form from "../islands/Form.tsx";
import {Post} from "../types.ts"
import PostModel from "../db/Contact.ts"

export const handler: Handlers<Post[]> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Post[]>) => {
    const posts = await PostModel.find();
    return ctx.render(posts);
  },
  POST: async (_req: Request, ctx: FreshContext<unknown, Post[]>) => {
    const form = await  _req.formData()
    const  n =  form.get("name")
    const  e =  form.get("email")
    const  a =  form.get("age")
    const post  = {
      Name: n,
      Email: e,
      Age: a
    }
    const x = await PostModel.create(post)
    console.log(x);
    
    return ctx.render();
  }
}
export default function Home(props: PageProps<Post[]>) {
  return (
    <div class="">
      <Form contacts={props.data} />
    </div>
  );
}
