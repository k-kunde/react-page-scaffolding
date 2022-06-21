module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'file-loader'],
        });
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        });
        return config;
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/examples',
    //         },
    //     ];
    // },
};
