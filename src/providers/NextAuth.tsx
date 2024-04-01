'use client'
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';
const NextAuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
export default NextAuthProvider