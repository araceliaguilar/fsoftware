import { Observable } from "rxjs";
import { BaseModel } from "../../models/base.model";
import { FilterOptions } from "../utils/filter-options";
import { IBaseService } from "./interface/i-base.service";
import { JSONUtil } from "../utils/json-util";
import { HttpClient } from "@angular/common/http";

export class BaseService<T extends BaseModel> implements IBaseService<T> {
    HTTP_GET = 'get';

    protected apiUrl: string;
    protected httpClient: HttpClient;
    protected endPoint: string;

    constructor(httpClient: HttpClient, apiUrl: string, endPoint: string) {
        this.httpClient = httpClient;
        this.apiUrl = apiUrl;
        this.endPoint = endPoint.toLowerCase();
    }

    filter(filterOptions: FilterOptions): Observable<T[]> {
        let enableFilter: boolean = filterOptions != null && !JSONUtil.isEmpty(filterOptions);
        let queryFilter = '';
        if (enableFilter) {
            if (filterOptions.id !== 0 && filterOptions.id !== undefined) {
                queryFilter = `${filterOptions.id}`;
            }
        }
        let filter: string = enableFilter ? queryFilter : '';
        let query = `${this.apiUrl}${this.endPoint}/${filter}`;
        console.log(query);

        return this.httpClient.get<T[]>(query) as Observable<T[]>;
    }

}