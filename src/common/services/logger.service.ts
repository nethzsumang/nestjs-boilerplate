import { ConsoleLogger, Injectable, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Logger service
 */
@Injectable()
export class LoggingService extends ConsoleLogger implements LoggerService {
  private logLevels = [];

  constructor(private readonly configService: ConfigService) {
    super();
    this.logLevels = configService.get<string>('log.levels').split(',');
  }

  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    if (this.logLevels.includes('log') === true) {
      return super.log.apply(this, arguments);
    }
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    if (this.logLevels.includes('error') === true) {
      return super.error.apply(this, arguments);
    }
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    if (this.logLevels.includes('warn') === true) {
      return super.warn.apply(this, arguments);
    }
  }

  /**
   * Write a 'debug' level log.
   */
  debug(message: any, ...optionalParams: any[]) {
    if (this.logLevels.includes('debug') === true) {
      return super.debug.apply(this, arguments);
    }
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose(message: any, ...optionalParams: any[]) {
    if (this.logLevels.includes('verbose') === true) {
      return super.verbose.apply(this, arguments);
    }
  }
}