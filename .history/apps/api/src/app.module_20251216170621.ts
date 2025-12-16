import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from './contact/dto/contact.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ContactModule],
})
export class AppModule {}
