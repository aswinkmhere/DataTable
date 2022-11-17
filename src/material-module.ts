import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacyPaginatorModule as MatPaginatorModule } from "@angular/material/legacy-paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatLegacyTableModule as MatTableModule } from "@angular/material/legacy-table"
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input"
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog"
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select"
import { MatLegacyRadioModule as MatRadioModule } from "@angular/material/legacy-radio"
import { MatLegacyCheckboxModule as MatCheckboxModule } from "@angular/material/legacy-checkbox"

@NgModule({
    exports:[
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule

    ]
})
export class MaterialModule{

}