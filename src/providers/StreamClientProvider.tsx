"use client";
import { tokenProvider } from '@/Actions/streamActons';
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import {
    StreamVideo,
    StreamVideoClient,
} from '@stream-io/video-react-sdk';
import React, { useEffect } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;

export const StreamVideoProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
    const [videoClient, setVideoClient] = React.useState<StreamVideoClient | null>(null);
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!isLoaded || !user) return;
        if (!apiKey) {
            console.log("Stream API KEY is missing");
            return;
        }

        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            tokenProvider,
        });
        setVideoClient(client);
    }, [user, isLoaded]);

    if (!videoClient) return <Loader />;

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};
