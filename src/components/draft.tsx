"use client";

import { Post } from "@/lib/posts/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';


export default function Draft(){

    const [post, setPost] = useState("");

    return(
        <div className="bg-black">
            <Input className="my-2 bg-zinc-400 border-t border-sky-600" type="post" placeholder="speak your mind" value={post} onChange={(event) => {
                setPost(event.target.value)
            }}/>
            <Button className=" bg-sky-700 font-roboto font-bold" onClick={() => {Post({post})}}>Post</Button>
        </div>
    )
}
