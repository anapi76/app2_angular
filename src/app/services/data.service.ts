import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response} from '../models/response.interface';
import { ResponseEpisode } from '../models/responseEpisode.interface';
import { ResponsePlayer } from '../models/response.interfacePlayer';
import { ResponseStat } from '../models/response.interfaceStats';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  public getApiResponse(url:string):Observable<Response>{
    return this.http.get<Response>(url);
  }

  public getApiResponseEpisode(url:string):Observable<ResponseEpisode>{
    return this.http.get<ResponseEpisode>(url);
  }

  public getApiPlayers(url:string):Observable<ResponsePlayer>{
    return this.http.get<ResponsePlayer>(url);
  }

  public getApiPlayerStats(url:string):Observable<ResponseStat>{
    return this.http.get<ResponseStat>(url);
  }

}
