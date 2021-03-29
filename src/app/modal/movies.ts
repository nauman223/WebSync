
export class Movies {

    id?: number;
    name?: string;
    description?: string;
    imgPath?: string;
    duration?: number;
    genre?: any;
    language?: string;
    mpaaRating?: mpaaRatings;
    userRating?: string;
}

class mpaaRatings {
    type?: string;
    label?: string;
}