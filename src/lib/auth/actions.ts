'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'


export async function login({email, password}: {email: string, password: string}) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/home')
}



export async function signup({email, password, username}: {email: string, password: string, username: string}) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });

  if (loginError) {
    console.error('Login error:', loginError.message);
    throw new Error('Failed to login after signup.');
  }

  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (!user) { throw new Error('User not found'); }

  const { error: profileError } = await supabase.from('profiles').insert({ id: user.id, username: username});

  if(profileError) throw new Error("Could add user to profiles")

  revalidatePath('/', 'layout')
  redirect('/home')
}

export async function getUsername({user}:{user: string }){
  const supabase = await createClient()
  const { data, error } = await supabase.from('profiles').select('username').eq('id', user).single();;
  if (!data) {
    throw Error("Couldn't find the username associated with the ID")
  }
  return data.username;
}

export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if(error) throw new Error("Couldnt sign out");
}
