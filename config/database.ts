import { registerAs } from "@nestjs/config";

/**
 * Database config values
 */
export default registerAs('database', () => ({
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'test',
  synchronize: process.env.DB_SYNC === 'true'
}));