"use client";

import { useEffect, useState } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import useUserStore from "@/zustandStore/userStore";


export default function SyncUser() {
    const [ready, setReady] = useState(false);
    const { user, isLoaded } = useUser();
    const { getToken } = useAuth();
    const setUser = useUserStore((state) => state.setUser);

    const setToken = useUserStore((state) => state.setToken);


    useEffect(() => {
        const sync = async () => {
            if (isLoaded && user) {
                const token = await getToken();

                setToken(token);
                setReady(true);
                setUser({
                    id: user?.id,
                    fullName: user?.fullName,
                    email: user?.primaryEmailAddress?.emailAddress,
                    image: user?.imageUrl,
                });
            } else {
                setUser(null);
                setToken(null);
            }
        };

        sync();
    }, [isLoaded, user]);

    return null;
}