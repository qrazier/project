import { Injectable } from '@angular/core';

@Injectable()
export class User {
	
  username: string = "Josh";

  constructor() {
    console.log('Hello User Provider');
  }

}
