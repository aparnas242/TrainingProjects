import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeDisplayComponent } from "./components/employee-display/employee-display.component";
import { DemoEmployeeComponent } from "./components/demo-employee/demo-employee.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeDisplayComponent, DemoEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee';
}
