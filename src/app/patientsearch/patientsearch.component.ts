import { Component } from '@angular/core';

@Component({
  selector: 'app-patientsearch',
  templateUrl: './patientsearch.component.html',
  styleUrls: ['./patientsearch.component.css']
})
export class PatientsearchComponent {

  patientid=""

  readValues=()=>{
    let data={"patientid":this.patientid}

    console.log(data)

  }


}
