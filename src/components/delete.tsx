"use client";
import { Button } from "@/components/ui/button";
import { deletePost } from "@/lib/posts/actions";
import { Trash2 } from "lucide-react";

export default function Delete({id}: {id: number}){
    return(
        <div className="justify-self-end">
            <Button variant="ghost" size="icon" onClick={() => {deletePost({id})}}> <Trash2/></Button>
        </div>
    )
}