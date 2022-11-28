import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  patientname=""
  patientid=""
  address=""
  phone=""
  appoinmentdate=""
  image=""
  doctorname=""

  patientValues=()=>{
    let data={"patientname":this.patientname,"patientid":this.patientid,"address":this.address,"phone":this.phone,"appoinmentdate":this.appoinmentdate,"image":this.image,"doctorname":this.doctorname}
    console.log(data)
  }

}
