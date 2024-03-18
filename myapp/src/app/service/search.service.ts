import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private route: ActivatedRoute,
    private userservice: UserService
  ) {}
  public searchdata: Array<object> = [];
  public search(): Observable<Observable<any>>{
    return this.route.queryParamMap.pipe(
      map((params) => { 
        const min = Number(params.get('minprice'));
        const max = Number(params.get('maxprice'));
        const category: string[] = params.get('products')?.split(',') ?? [];
        let mindex = category?.indexOf('mclothing');
        if (mindex > -1) {
          category[mindex] = "men's clothing";
        }
        mindex = category?.indexOf('fclothing');
        if (mindex > -1) {
          category[mindex] = "women's clothing";
        }
        return this.userservice.getProducts().pipe(
          map((data) =>
            data.filter(
              (obj: any) =>
                obj['price'] > min &&
                obj['price'] < max &&
                category?.includes(obj['category'])
            )
          )
        );
      })
    );
  }
}


//   public search(): object[] {
//     console.log('search');

//     this.route.queryParamMap.subscribe((params) => {
//       const min = Number(params.get('minprice'));
//       const max = Number(params.get('maxprice'));
//       const category: string[] = params.get('products')?.split(',') ?? [];
//       let mindex = category?.indexOf('mclothing');
//       if (mindex > -1) {
//         category[mindex] = "men's clothing";
//       }
//       mindex = category?.indexOf('fclothing');
//       if (mindex > -1) {
//         category[mindex] = "women's clothing";
//       }
//       // this.userservice.getProducts().subscribe(
//       //   (data) => {
//       //   this.searchdata = data.filter((obj: any) => {
//       //     console.log('subs');
//       //     return (
//       //       obj['price'] > min &&
//       //       obj['price'] < max &&
//       //       category?.includes(obj['category'])
//       //     );
//       //   });
//       // });
//       return this.userservice.getProducts().pipe(
//         map((data) => {
//           data.filter(
//             (obj: any) =>
//               obj['price'] > min &&
//               obj['price'] < max &&
//               category?.includes(obj['category'])
//           );
//         })
//       );
//     });
//     console.log('here at return main');

//     return this.searchdata;
//   }
// }
