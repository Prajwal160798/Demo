import { Component } from '@angular/core';
import { MentionModule } from 'angular-mentions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  
  config ={
    items: ["angular","script","prajwal"],
    triggerChar:"@",
    maxItems:10,
    mentionSelect: (item)=>{
      return "@"+item.name
    },
    labelKey:"name",
    disableSearch:false,
    returnTrigger:true
    }
}
