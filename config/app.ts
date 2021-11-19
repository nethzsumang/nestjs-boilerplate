import { registerAs } from '@nestjs/config';

/**
 * Throttler config values
 */
export default registerAs('app', () => ({
  key: process.env.APP_KEY
}));