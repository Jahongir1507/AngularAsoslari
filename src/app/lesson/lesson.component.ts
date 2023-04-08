import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '../lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
    @Input() lesson!: Lesson;
    constructor(){}

    ngOnInit(){

    }
}

