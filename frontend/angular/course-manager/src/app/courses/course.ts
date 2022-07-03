export class Course {
    id: number;
    name: string;
    imgUrl: string;
    price: number;
    code: string;
    duration: number;
    rating: number;

    constructor(id: number, name: string, imgUrl: string, price: number, code: string, duration: number, rating: number){
        this.id = id
        this.name = name
        this.imgUrl = imgUrl
        this.price = price
        this.code = code
        this.duration = duration
        this.rating = rating
    }
}