
import Post from "@/components/post";
import { getUserPosts, getUserId } from "@/lib/posts/actions"
import { AppSidebar } from "@/components/app-sidebar"; 
import { SidebarProvider } from "@/components/ui/sidebar";

type Params = Promise<{username: string}>

export default async function Account({ params }: { params: Params }) {
    const { username } = await params;
    const userId = await getUserId({ username });
    const posts = await getUserPosts({ user: userId });

    return(
        <SidebarProvider>
            <div className="flex h-screen w-full bg-black">
                {/* Sidebar */}
                <AppSidebar />
                <div className="flex-1 flex flex-col divide-sky-600 divide-y-2">
                    <div className="p-4 bg-black shadow text-white ">
                        <p className="font-roboto font-bold text-5xl">{username}</p>
                        <p className="py-2 text-lg">{username}'s posts</p>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 p-10 pb-20 overflow-y-auto ">
                        {posts?.map((post) => (
                            <div key={post.id} className="mb-4 bg-zinc-600 p-3 rounded-xl shadow-md w-full">
                                <Post text={post.title} username={username} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SidebarProvider>
    )
}