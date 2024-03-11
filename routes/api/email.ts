import { FreshContext, Handlers } from "$fresh/server.ts";
import PostModel from "../../db/Contact.ts"
type  s = {
    email: string
}
export const handler: Handlers = {
  async POST(_req: Request,ctx: FreshContext) {
    if(!_req.body){
        console.log(0);
        
    }
    const url= _req.body

    const check =  await PostModel.findOne({Email: url.email })

    if(check){
        console.log(1);
        
      return new Response(JSON.stringify({val: true}), {
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({val: false}), {
        headers: { "Content-Type": "application/json" },
      });
  },
};