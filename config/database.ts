export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');  // Ensure it's 'postgres'

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL', ''),
        host: env('DATABASE_HOST', 'dpg-cvcmua3tq21c73a14ka0-a.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ainafocus_database'),
        user: env('DATABASE_USERNAME', 'superadmin'),
        password: env('DATABASE_PASSWORD', '3NtXnHi5TeGIrXbUsPd0HI2LxcvkeV3H'),
        ssl: env.bool('DATABASE_SSL', false) ? {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        } : false, // Ensure this is explicitly false when not needed
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
