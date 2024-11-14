"use server";

import Draft from "@/components/draft";
import Post from "@/components/post";
import { getPosts } from "@/lib/posts/actions"
import Delete from "@/components/delete";
import { AppSidebar } from "@/components/app-sidebar"; 
import { SidebarProvider } from "@/components/ui/sidebar";
import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";


export default async function Home(){

    
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
        redirect('/login');
    }
    const posts = await getPosts()


    return(
        <SidebarProvider>
            <div className="flex h-screen w-full bg-black">
                {/* Sidebar */}
                <AppSidebar />
                <div className="flex-1 flex flex-col divide-sky-600 divide-y-2">
                    <div className="p-4 bg-black shadow text-white ">
                        <p className="font-roboto font-bold text-5xl">Home</p>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 p-10 pb-20 overflow-y-auto w-full">
                        {posts?.map((post) => (
                            <div key={post.id} className=" text-black mb-4 bg-zinc-600 p-3 rounded-xl shadow-md w-full">
                                <Post text={post.title} username={post.profiles.username} />
                                {post.author === user.id && <Delete id={post.id} />}
                            </div>
                        ))}
                        <div className="fixed bottom-0 left-64 right-0 bg-black border-sky-600 border-t p-4">
                            <Draft />
                        </div>
                    </div>
                </div>
            </div>
        </SidebarProvider>
  );
}