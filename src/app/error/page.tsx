import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function ErrorPage() {
    return (
        <header>
            <section>
                <div className="font-bold font-roboto grid h-screen grid-cols-2">
                    <div className="justify-center pt-20 p-8 object-contain flex space-y-4 bg-black flex-col h-screen ">
                        <div className="text-white font-roboto font-bold text-center"> Error, Please try again </div>
                        <Link href="/login">
                          <Button className=" font-roboto font-bold ml-60" variant="secondary">Back</Button>
                        </Link>
                    </div>
                    <div className=" flex items-center justify-center tracking-tighter text-9xl text-white bg-[url('/techxback.jpeg')] bg-center bg-cover">
                        TechX
                    </div>
                </div>
            </section>
        </header>
    )
}