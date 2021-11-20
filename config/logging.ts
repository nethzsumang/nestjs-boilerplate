import { registerAs } from '@nestjs/config';

/**
 * Throttler config values
 */
export default registerAs('log', () => ({
  levels: process.env.LOG_LEVELS || 'error,warn'
}));