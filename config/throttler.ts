import { registerAs } from '@nestjs/config';

/**
 * Throttler config values
 */
export default registerAs('throttler', () => ({
  ttl: process.env.THROTTLER_TTL || '60',
  limit: process.env.THROTTLER_LIMIT || '10',
}));