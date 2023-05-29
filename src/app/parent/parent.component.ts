import { Component,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent  implements OnInit{
  ngOnInit(): void {
   this.getDate()
  }
getDate2:any;
constructor(private service:ServiceService){

}

  getDate(){
    this.service.getStudent().subscribe((data)=>{
      this.getDate2=data;
      console.log(this.getDate2);
      
    })
}
}
