export class Image {
    smallThumbnail!: string;
    thumbnail!: string;
  }

export class Book {
    title!: string;
    authors!: string[];
    publisher!: string;
    publishedDate!: string;
    description!: string;
    pageCount!: string;
    averageRating!: string;
    imageLinks!: Image;
    language!: string;
    previewLink!: string;
    infoLink!: string;
  }

export interface IBooks {
  id: string;
  volumeInfo: Book;
  saleInfo: any;
  accessInfo: any;
}
