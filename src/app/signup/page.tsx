"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup } from "@/lib/auth/actions";

export default function Signup(){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    return(
        <header>
            <section>
                <div className="font-bold font-roboto grid h-screen grid-cols-2">
                    <div className=" flex items-center justify-center tracking-tighter text-9xl text-white bg-[url('/techxback.jpeg')] bg-center bg-cover">
                        TechX
                    </div>
                    <div className="justify-center pt-20 p-8 object-contain flex space-y-4 bg-black flex-col h-screen ">
                    <Dialog defaultOpen>
                        <DialogContent className="font-bold font-roboto sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>Create Account</DialogTitle>
                            <DialogDescription>
                                Create your profile here!
                            </DialogDescription>
                            <DialogDescription className="italic">
                                username must be atleast 3 characters long, password must be 8 characters long
                            </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username">Username</Label>
                                <Input type="username" placeholder="username" required value={username} className="col-span-3" onChange={(event) => {
                                    setUsername(event.target.value);}}/>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4 ">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" placeholder="email" value={email} required className="col-span-3" onChange={(event) => {
                                    setEmail(event.target.value)}}/>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4 ">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" placeholder="password" value={password} required className="col-span-3" onChange={(event) =>{
                                    setPassword(event.target.value);}}/>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4 ">
                                <Label htmlFor="confirm password">Confrim Password</Label>
                                <Input type="password" placeholder="confirm password" required value={confirmPassword} className="col-span-3" onChange={(event) => {
                                    setConfirmPassword(event.target.value);}}/>
                            </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={() => {signup({email,password,username})}}>Sign Up</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    </div>
                </div>
            </section>
        </header>
    )
}