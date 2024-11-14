"use client";

import { login } from "@/lib/auth/actions"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return(
        <header>
            <section>
                <div className="font-bold font-roboto grid h-screen grid-cols-2">
                    <div className=" flex items-center justify-center tracking-tighter text-9xl text-white bg-[url('/techxback.jpeg')] bg-center bg-cover">
                        TechX
                    </div>
                    <div className="justify-center pt-20 p-8 object-contain flex space-y-4 bg-black flex-col h-screen ">
                        <Label className="text-white font-bold font-roboto"htmlFor="email">Email</Label>
                        <Input type="email" placeholder="email" value={email} onChange={(event) => {
                            setEmail(event.target.value)
                        }}/>
                        <Label className="text-white font-bold font-roboto" htmlFor="password">Password</Label>
                        <Input type="password" placeholder="password" value={password} onChange={(event) =>{
                            setPassword(event.target.value);
                        }}/>
                        <Button onClick={() => {login({email,password})}}>Log in</Button>
                        <Link href="/signup">
                          <Button className="text-white w-16 ml-64" variant="link">Create Account</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </header>
    )
}