import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl : 'app.component.html',
    providers :[appService]
})

export class AppComponent {

    title = 'app';
    value : string = '';
    constructor(private _appService : appService){}

    ngOnInit() : void {
        this.value = this._appService.getApp();
    }

}
