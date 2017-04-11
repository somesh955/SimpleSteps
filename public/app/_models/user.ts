import {Story} from "../_models/index"
export class User {
    _id:string;
    username: string;
    password: string;
    name: string;
    age: number;
    stories: Story[];    
}