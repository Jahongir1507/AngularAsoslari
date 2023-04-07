import { Component } from '@angular/core'
import { LessonsService } from './lessons.service';

@Component ({
    selector: "lessons",
    template: `
    <table>
        <tr>
            <td [colSpan] = "isSpan">salom</td>
        </tr>
    </table>
    <h2>{{ getTitle() }}</h2>
    <input type="text" [(ngModel)]="userName">
    <p>{{userName}}</p>
    <button [style.backgroundColor]="isActive ? 'blue' : 'yellow'" (click) = "onTestButtonCLicked()">Reset</button>
    <ul>
        <li  *ngFor = "let lesson of lessons; index as i">
            {{i + ". " +lesson}}
        </li>
    </ul>
    <app-lesson></app-lesson>

    <div [ngSwitch]="isSpan">
        <p *ngSwitchCase="1">isSpan=1</p>
        <button *ngSwitchCase="2">isSpan=2</button>
        <input type="text" *ngSwitchCase="3" value="isSpan=2">
    </div>

    <img *ngIf="isSpan < 4" esle noLogo src="{{logoUrl}}"/>

    <ng-template #noLogo>
        Content to render when condition is false.
    </ng-template>

    <img [src]="logoUrl"/>

    `
})
export class LessonsComponent{
    isSpan: number = 3;
    isActive: boolean = false;
    title: string = "Darslar ro'yxati";
    lessons: string[];
    userName: string = "";
    logoUrl: string = "assets/img/angularimg.png"
    showImage: boolean = false;

    constructor(lessonSvc: LessonsService){
        this.lessons = lessonSvc.getLessons();  
        
    }
    onTextInput(event: Event){
        this.userName = (event.target as HTMLInputElement).value
       // return (event.target as HTMLInputElement).value;
        console.log(event);
    }
    onTestButtonCLicked(){
        console.log("tugma bosildi");
        this.userName=''
    }
    getTitle(): string{
        return "Sarlavha:" + this.title;
 }
}