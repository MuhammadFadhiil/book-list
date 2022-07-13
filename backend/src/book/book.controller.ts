import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private BookService: BookService) {}

  @Get(':keyword')
  async getListBook(@Param('keyword') keyword: string) {
    const result = await this.BookService.getListBook(keyword);
    return result;
  }

  @Get()
  async getFavoriteBooks() {
    return await this.BookService.getFavoriteBooks();
  }

  @Post('/favorite')
  async addToFavorite(@Body() body: any) {
    return await this.BookService.addToFavorite(body);
  }
}
