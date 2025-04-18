import { Observable } from "rxjs";
import { FilterOptions } from "../../utils/filter-options";

export interface IBaseService<T> {
    filter(filterOptions: FilterOptions): Observable<T[]>;
}