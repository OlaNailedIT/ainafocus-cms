module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'dpg-cvcmua3tq21c73a14ka0-a.render.com'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'ainafocus_database'),
            user: env('DATABASE_USERNAME', 'superadmin'),
            password: env('DATABASE_PASSWORD', '3NtXnHi5TeGIrXbUsPd0HI2LxcvkeV3H'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
