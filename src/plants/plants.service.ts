import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plant } from './schema/plant';

@Injectable()
export class PlantsService {
    constructor(
        @InjectModel(Plant.name) private plantModel: Model<Plant>
    ){}

    async getAllPlants(): Promise<Plant[]>{
        return this.plantModel.find().exec()
    }

    async createNewPlant(plant: Plant): Promise<Plant>{
        const createdPlant = new this.plantModel(plant);
        
        return createdPlant.save();
    }

    async getById(id: string): Promise<Plant>{
        return this.plantModel.findById(id).exec();
    }

    async updatePlant(id: string, plant: Plant): Promise<Plant>{
        return this.plantModel.findByIdAndUpdate(id, plant).exec();
    }

    async deletePlant(id: string){
        const deletedPlant = this.plantModel.findByIdAndDelete({_id: id }).exec();

        return (await deletedPlant).remove(id);
    }

}
