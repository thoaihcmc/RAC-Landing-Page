import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RAC-Landing-Page';
  myimage1:string ="assets/images/image1.jpg";
  myimage2:string ="assets/images/spin2.gif";
  myimage3:string ="assets/images/spin2.gif";
  isLoading =false;
  isLoading2 =false;

  toggleLoading = () => {
    this.isLoading = true;
    setTimeout(()=>{
      this.isLoading = false;
    }, 3000)
  }

  toggleLoading2 = () => {
    this.isLoading2 = true;
    setTimeout(()=>{
      this.isLoading2 = false;
    }, 3000)
  }
}
