'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';

export function withAuth<P extends object>(
    WrappedComponent: React.ComponentType<P>
) {
    return function WithAuth(props: P) {
        const { user, loading } = useAuth();
        const router = useRouter();
        console.log('user ',user)

        useEffect(() => {
            if (!loading && !user) {
                router.push('/login');
            }
        }, [user, loading, router]);

        if (loading) {
            return <div>กำลังโหลด...</div>;
        }

        if (!user) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
}