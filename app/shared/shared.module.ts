import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    exports: [
        CommonModule,
        StarComponent,
        FormsModule
    ],
    declarations: [StarComponent],
    providers: [],
})
export class SharedModule { }
