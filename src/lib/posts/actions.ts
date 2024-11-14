"use server";

import { createClient } from '@/utils/supabase/server'

export async function getPosts() {
    const supabase = await createClient();
    const {data, error} = await supabase.from("posts").select("*,profiles!id (username)");
    return data;
}

export async function Post({post}: {post: string} ){
    const supabase = await createClient();

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (!user) { throw new Error('User not found'); }

    const { error } = await supabase.from('posts').insert({ title: post, author: user.id })

}

export async function deletePost({id}: {id: number}){
    const supabase = await createClient();
    const response = await supabase.from('posts').delete().eq('id', id)

}

export async function getUserPosts({user}: {user: string}) {
    const supabase = await createClient();

    const {data, error} = await supabase.from("posts").select("*").eq('author', user);
    return data;
}

export async function getUserId({username}: {username: string}){
    const supabase = await createClient();
    const { data, error } = await supabase.from('profiles').select('id').eq('username', username).single();
    if(error) throw new Error("User Id not found");
    
    return data.id;
}