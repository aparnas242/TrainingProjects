import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDemoComponent } from "./components/template-demo/template-demo.component";
import { DemoChildComponent } from "./components/demo-child/demo-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateDemoComponent, DemoChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo_project';
  initialCount = 20;
}
