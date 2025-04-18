import { BaseModel } from "../../../models/base.model";

export class PostModel extends BaseModel {
    static className: string = 'posts';
    constructor(
        public userId?: number,
        public title?: string,
        public body?: string,
        ) {
        super();
    }
}