import { Component } from '@angular/core';

@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrl: './component-overview.component.css'
})
export class ComponentOverviewComponent {
  ok(){
    alert('ok');
  }
}
