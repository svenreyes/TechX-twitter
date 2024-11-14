import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home(){
  return(
  <div className=" font-bold font-roboto ">
    <div className=" h-screen flex items-center justify-center tracking-tighter text-9xl text-white bg-[url('/techxback.jpeg')] bg-center bg-cover">
    <Link href="/login">
      TechX
    </Link>
    </div>
  </div>
  )
}