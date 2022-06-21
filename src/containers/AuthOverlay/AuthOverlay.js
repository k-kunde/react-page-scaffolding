import { signIn } from 'next-auth/client';

const AuthOverlay = () => {
    function handleClick() {
        signIn('fusionauth');
    }
    return (
        <h1>
            <a onClick={handleClick}>Login</a>
        </h1>
    );
};

export default AuthOverlay;
