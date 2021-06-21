import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule } from '@nestjs/mongoose';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://admin:KGu88rDmUSfHMROh@cluster0.x9how.mongodb.net/Viveiro?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  }), 
  PlantsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
