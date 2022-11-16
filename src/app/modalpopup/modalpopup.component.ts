import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../Service/master.service';
import * as alertify from 'alertifyjs'
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {

  constructor(private service: MasterService, public dialogref: MatDialogRef<ModalpopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  desdata: any;
  respdata: any;
  editdata: any;

  ngOnInit(): void {
    //this.loadDes();
    if(this.data.empcode!=null && this.data.empcode!=''){
      this.LoadEditData(this.data.empcode);
    }
  }

  /* loadDes() {
    this.service.GetDes().subscribe(result => {
      this.desdata = result;
    });
  } */

  LoadEditData(ruleGpId: any) {
    this.service.GetRuleGpById(ruleGpId).subscribe(item => {
      this.editdata = item;
      this.Reactiveform.setValue({ruleGpName:this.editdata.ruleGpName,cas_id:this.editdata.cas_id,
        description:this.editdata.description,book_ser_no:this.editdata.book_ser_no,persType:this.editdata.persType,
        isCommon:this.editdata.isCommon})
    });
  }

  Reactiveform = new FormGroup({
    ruleGpName: new FormControl("", Validators.required),
    cas_id: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    book_ser_no: new FormControl("", Validators.required),
    persType: new FormControl("OFFR"),
    isCommon: new FormControl(true)
  });
  SaveEmployee() {
    if (this.Reactiveform.valid) {
      this.service.Save(this.Reactiveform.value).subscribe(result => {
        this.respdata = result;
        if (this.respdata.result =! ' ') {
          alertify.success("saved successfully.")
          this.dialogref.close();
        }
      });

    } else {
      alertify.error("Please Enter valid data")
    }
  }

}
