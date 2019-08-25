import { Component,OnInit} from '@angular/core';
import { AngularCliConfig } from './angularCli-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'expert-ertan-angular-cli';
  allConfig:any[];
  search;
  code; alias; desc;
  ngOnInit(): void {
    this.allConfig = AngularCliConfig;
  }

  searchText(event){
    if (this.search=="") {
      this.allConfig = AngularCliConfig;
    }
    else{
      this.allConfig = this.allConfig.filter(x=>x.code.indexOf(this.search)>-1);
    }
  }
  addToText(){
    let objectArray = {"code":this.code,"alias":this.alias,"description":this.desc};
    this.allConfig.push(objectArray);
    this.clearText();
  }
  clearText(){
    this.code = "";
    this.alias = "";
    this.desc="";
  }


}
