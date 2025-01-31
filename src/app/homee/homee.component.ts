import { Component } from '@angular/core';

@Component({
  selector: 'app-homee',
  templateUrl: './homee.component.html',
  styleUrls: ['./homee.component.css']
})
export class HomeeComponent {
    //Interpolation
    name="Seif";
    //Property Binding
    status=false;
    //Event Binding
    add(){
        console.log("BAAAAAAAAAAAAAAAAAAAAAA");
    }
    //Two way binding
    search="hello";
}
