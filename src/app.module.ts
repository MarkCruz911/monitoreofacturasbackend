import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [TareasModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
      autoLoadEntities: process.env.DB_AUTOLOAD_ENTITIES === 'true',
      timezone: process.env.DB_TIMEZONE,
      extra: {
        ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
        connectTimeout: parseInt(process.env.DB_CONNECT_TIMEOUT, 10),
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
