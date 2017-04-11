import {User} from '../_models/index';

export class Story {
    _id:string;
    title:string;
    description:string;
    price:string;
    creator:User;
}