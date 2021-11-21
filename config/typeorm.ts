// this is a config file for running typeorm migration
require('dotenv').config();

export = {
    type: 'mysql',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'test',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: process.env.DB_SYNC === 'true',
    migrations: ['migrations/*.{ts,js}'],
    cli: {
      migrationsDir: 'migrations'
    },
};