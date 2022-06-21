import { useSession } from 'next-auth/client';
import { useContext } from 'react';
import { AuthContext } from './auth-provider';

export const privateRoute = (WrappedComponent) => {
    return (props) => {
        const [session, loading] = useSession();
        const overlay = useContext(AuthContext);

        function renderRoute() {
            if (!session && loading) {
                return null;
            } else if (!session && !loading) {
                return overlay;
            } else {
                return <WrappedComponent {...props} />;
            }
        }

        return renderRoute();
    };
};
