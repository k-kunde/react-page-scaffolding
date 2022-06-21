import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.FusionAuth({
            id: 'fusionauth',
            name: 'FusionAuth',
            domain: process.env.FUSION_AUTH_DOMAIN,
            clientId: process.env.FUSION_AUTH_CLIENT_ID,
            clientSecret: process.env.FUSION_AUTH_CLIENT_SECRET,
        }),
    ],
});
