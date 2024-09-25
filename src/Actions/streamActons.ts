"use server";
import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

  const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;
const apiSecret = process.env.STREAM_SECRET

export const tokenProvider =  (async()=>{
    const user = await currentUser();

    if (!user) throw new Error("User not logged  In");
    if (!apiKey) throw new Error("No Api Key");
    if (!apiSecret) throw new Error("No Api Secret");
    


    const client = new StreamClient(apiKey,apiSecret)

    const validity = 60 * 60;

    const token = client.generateUserToken({ user_id: user.id, validity_in_seconds: validity });
    return token
})