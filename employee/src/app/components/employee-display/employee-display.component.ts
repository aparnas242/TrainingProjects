import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-display',
  standalone: true,
  imports: [DatePipe],
  //template : `ASAP COMPANY EMPLOYEES`,
  templateUrl: './employee-display.component.html',
  styleUrl: './employee-display.component.css'
})
export class EmployeeDisplayComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Bella',
      gender: 'Female',
      email: 'bellan@gmail.com',
      phoneNumber: 9874444210,
      contactPreference: '-',
      dateOfBirth: new Date('02-24-2002'),  
      department: '.NET',
      isActive: true,
      photoPath: './Bella.jpg',
    },
    {
      id: 2,
      name: 'Rob',
      gender: 'Male',
      email: 'rob@gmail.com',
      phoneNumber: 9877773210,
      contactPreference: '-',
      dateOfBirth: new Date('04-20-2002'),  
      department: 'Network Security',
      isActive: true,
      photoPath: './Rob.jpg',
    },
    {
      id: 3,
      name: 'Carol',
      gender: 'Female',
      email: 'carol@gmail.com',
      phoneNumber: 9876666210,
      contactPreference: '-',
      dateOfBirth: new Date('08-19-2002'),  
      department: 'Testing',
      isActive: true,
      photoPath: './Carol.jpg',
    }
  ]
}
