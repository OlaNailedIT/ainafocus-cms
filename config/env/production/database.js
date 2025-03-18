module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'ainafocus_database'),
            user: env('DATABASE_USERNAME', 'superadmin'),
            password: env('DATABASE_PASSWORD', 'Superuser7605'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
