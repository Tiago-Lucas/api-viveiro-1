import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { Plant } from './schema/plant';

@Controller('plants')
export class PlantsController {
    constructor(
        private readonly plantsService: PlantsService
    ){}

    @Get()
    async getAllPlants(): Promise<Plant[]>{
        return this.plantsService.getAllPlants();
    }

    @Post()
    async createNewPlant(@Body() plant: Plant ): Promise<Plant>{
        return this.plantsService.createNewPlant(plant);
    }

    @Get(':id')
    async getPlantById(@Param('id') id: string): Promise<Plant>{
        return this.plantsService.getById(id);
    }

    @Put(':id')
    async updatePlant(@Param('id') id: string, @Body() updatedPlant: Plant): Promise<Plant>{
        return this.plantsService.updatePlant(id, updatedPlant);
    }

    @Delete(':id')
    async deletePlant(@Param('id') id: string): Promise<Plant>{
        return this.plantsService.deletePlant(id)
    }
}
