export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');  // Ensure it's 'postgres'

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL', ''),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ainafocus_db'),
        user: env('DATABASE_USERNAME', 'your_db_user'),
        password: env('DATABASE_PASSWORD', 'your_db_password'),
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
