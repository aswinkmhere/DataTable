import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { RuleGp } from './Model/RuleGp';
import { MasterService } from './Service/master.service';
import * as alertify from 'alertifyjs'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app1';
  displayedColumns: string[] = ['ruleGpId', 'ruleGpName', 'description', 'cas_id', 'action'];;
  dataSource: any;
  empdata: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.GetAll();
    this.service.RequiredRefresh.subscribe(r => {
      this.GetAll();
    });
  }

  GetAll() {
    this.service.GetRuleGps().subscribe(result => {
      this.empdata = result;

      this.dataSource = new MatTableDataSource<RuleGp>(this.empdata)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
  getrow(row: any) {
    //console.log(row);
  }
  FunctionEdit(code: any) {
    this.OpenDialog('1000ms','600ms',code)
  }
  FunctionDelete(code: any) {
    alertify.confirm("Remove RuleGp","Do you want to remove?",()=>{
      this.service.Remove(code).subscribe(result => {
        this.GetAll();
        alertify.success("Removed successfully.")
      });

    },function(){

    })
    
  }

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(ModalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        empcode:code
      }
    })
  }


}
