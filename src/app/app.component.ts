import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : 'app.component.html'
})
export class AppComponent {
    title = 'app';

    status : boolean = false;
    num : number = 120;

    onClick(ent){
        console.log(ent);
        this.status = true;

    }

    ngOnChanges(){
        console.log('change called');
    }

}
