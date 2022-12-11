import { Module } from '@nestjs/common';
import { MorpheusModule } from 'morpheus4j';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MorpheusModule.forRoot({
      scheme: 'neo4j',
      host: 'localhost',
      port: 7687,
      username: 'neo4j',
      password: 'root',
      migrationsPath: './migrations',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
