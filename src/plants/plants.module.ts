import { Module } from '@nestjs/common';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Plant, PlantSchema } from './schema/plant';

@Module({
  imports: [
    MongooseModule.forFeature([
    {
      name: Plant.name,
      schema: PlantSchema
     }
    ])
  ],
controllers: [PlantsController],
  providers: [PlantsService]
})
export class PlantsModule {}
