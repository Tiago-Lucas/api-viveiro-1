import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import{ Document } from 'mongoose';

@Schema()
export class Plant extends Document {
    @Prop()
    name: string;

    @Prop()
    quantity: number;

    @Prop()
    price: number;

    @Prop()
    code: number;

    @Prop()
    category: string;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);