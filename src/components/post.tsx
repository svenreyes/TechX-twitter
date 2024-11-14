"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Post({text,username}: {text: string,username: string}){
    const router = useRouter()

    return(
        <div>
            <div>
                <Button className="font-roboto font-bold" variant="link" onClick={() => router.push(`/account/${username}`)}>{username}</Button>
            </div>
            <div className="p-6 bg-zinc-800	text-white rounded-l shadow-lg flex items-center w-full">
                {text}
            </div>
        </div>
    )
}