import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import Post from "@/components/post";
import { getUserPosts } from "@/lib/posts/actions"
import Delete from "@/components/delete";
import { AppSidebar } from "@/components/app-sidebar"; 
import { SidebarProvider } from "@/components/ui/sidebar";
import { getUsername } from '@/lib/auth/actions';

export default async function PrivatePage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  const posts = await getUserPosts({ user: data?.user.id });
  const username = await getUsername({ user: data.user.id })

  return (
    <SidebarProvider>
    <div className="flex h-screen w-full bg-black ">
        <AppSidebar />
        {/* Main Content */}
        <div className="flex-1 flex flex-col divide-sky-600 divide-y-2 ">
            <div className="p-4 bg-black shadow text-white ">
                <p className="font-roboto font-bold text-5xl">{username}</p>
                <p className="py-2 text-lg">your posts</p>
            </div>
            {/* Posts Section */}
            <div className="flex-1 p-10 pb-20 overflow-y-auto w-full">
                {posts?.map((post) => (
                    <div key={post.id} className="mb-4 bg-zinc-600 p-3 rounded-xl shadow-md w-full">
                        <Post text={post.title} username={username} />
                        <Delete id={post.id} />
                    </div>
                ))}
            </div>
        </div>
    </div>
    </SidebarProvider>
    )
}