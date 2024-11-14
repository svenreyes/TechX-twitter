"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
import Link from "next/link"
import { signOut } from "@/lib/auth/actions";

export default function Settings() {
  return (
    <div className="h-screen bg-[url('/techxback.jpeg')] bg-center bg-cover">
        <Tabs defaultValue="account" className="py-60 place-self-center w-[400px] ">
        <TabsContent value="account">
            <Card className="bg-black text-white border-sky-600 border-t">
            <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                Sign out of accounnt
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                </div>
                <div className="space-y-1">
                </div>
            </CardContent>
            <CardFooter>
                <Link href="/signout">
                    <Button onClick={() => {signOut()}}>Sign Out</Button>
                </Link>
            </CardFooter>
            </Card>
        </TabsContent>
        </Tabs>
    </div>
  )
}
