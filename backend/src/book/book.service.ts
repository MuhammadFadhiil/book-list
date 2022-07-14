import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as rp from 'request-promise';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private model: Model<BookDocument>,
  ) {}

  async getListBook(keyword: string) {
    const options = {
      method: 'GET',
      url: `https://www.googleapis.com/books/v1/volumes?q=${keyword}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const result = await rp(options);
      const response = JSON.parse(result);
      const data = response.items;
      const resArr = [];

      data.forEach((e) => {
        const image = e.volumeInfo.imageLinks
          ? e.volumeInfo.imageLinks
          : 'image not found';
        const authors = e.volumeInfo.authors;
        let parseAuthor = '';
        if (authors.length > 1) {
          authors.forEach((author) => {
            parseAuthor = parseAuthor + ' ' + author;
          });
        } else {
          parseAuthor = authors[0];
        }
        const obj = {
          title: e.volumeInfo.title,
          authors: parseAuthor,
          thumbnail: image.thumbnail
            ? image.thumbnail
            : 'https://pammana.wajokab.go.id/img/no-image.png',
        };
        resArr.push(obj);
      });

      return {
        success: true,
        data: resArr,
      };
    } catch (e) {
      Logger.error(e);
    }
  }

  async addToFavorite(body) {
    console.log(body);

    try {
      return await new this.model({
        title: body.title,
        authors: body.authors,
        thumbnail: body.thumbnail,
        createdAt: new Date(),
      }).save();
    } catch (e) {
      Logger.error(`Failed save data to DB, Error: ${e}`);
    }
  }

  async getFavoriteBooks() {
    const favBooks = await this.model.find();
    return {
      success: true,
      data: favBooks,
    };
  }
}
