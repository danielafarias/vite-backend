import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CepModule } from './cep/cep.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CepModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
