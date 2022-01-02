import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";

const pageRoutes: Routes = [{
    path: '',
    component: PageNotFoundComponent
}];

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(pageRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        PageNotFoundComponent
    ]
})
export class PageNotFoundModule {}