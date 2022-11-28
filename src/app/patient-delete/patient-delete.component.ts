import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {


  patientid=""


  readValues=()=>{
    let data={"patientid":this.patientid}

    console.log(data)

  }

}
