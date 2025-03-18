module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('STRAPI_ADMIN_BACKEND_URL', 'https://ainafocus-cms.onrender.com'),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET'),
        },
    },
});
