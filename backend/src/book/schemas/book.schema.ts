import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema({})
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop()
  authors: string;

  @Prop()
  thumbnail: string;

  @Prop()
  createdAt: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
