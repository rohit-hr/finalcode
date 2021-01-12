import {​​​​​HttpClient}​​​​​ from '@angular/common/http';
import {​​​​​ Injectable }​​​​​ from '@angular/core';

@Injectable()

export class TrackApplicationService{​​​​​

    constructor(private getHttp:HttpClient){​​​​​
    }​​​​​

    public trackApplicationFromApi(id:any){​​​​​

        return this.getHttp.get("http://localhost:63882/api/TrackApplication/?id="+id);
    }​​​​​
}​​​​​


