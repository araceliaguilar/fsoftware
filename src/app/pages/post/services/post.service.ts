
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { PostModel } from "../model/post.model";
import { Observable } from "rxjs";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Injectable({
    providedIn: 'root'
  })
  
  export class PostService {  
    private apiUrl = environment.apiUrl+PostModel.className; 
  
    constructor(private http: HttpClient) {}
  
    getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.apiUrl)        
    }

    getPostsDetalle(id:number): Observable<Post> {
      const url = `${this.apiUrl}/${id}`; 
      return this.http.get<Post>(url);       
    }
  }