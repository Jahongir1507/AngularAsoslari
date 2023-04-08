import { Component } from '@angular/core'
import { Lesson } from './lesson';
import { LessonsService } from './lessons.service';

@Component ({
    selector: "lessons",
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li  *ngFor = "let lesson of lessons;" (click)="onSelect(lesson)">
            {{lesson.title}}
        </li>
    </ul>
    <app-lesson [lesson] = "selectedLesson"></app-lesson>
    `
})
export class LessonsComponent{
    title: string = "Darslar ro'yxati";
    lessons: Lesson[];
    logoUrl: string = "assets/img/angularimg.png"
    selectedLesson!: Lesson;

    constructor(lessonSvc: LessonsService){
        this.lessons = lessonSvc.getLessons();
    }
    
    getTitle(): string{
        return  this.title;
    }
    onSelect(lesson: Lesson): void{
        this.selectedLesson = lesson
    }
}