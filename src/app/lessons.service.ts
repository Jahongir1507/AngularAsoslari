import { Lesson } from "./lesson";

export class LessonsService {

    getLessons(): Lesson[]{

       // return ["Angular asoslari","Web API","Entity Framework","MS SQL Server"];
        let lessons: Lesson[] = [
            new Lesson,{title:"Angular asoslari",price:50,duration:20,intakeDeadline:"2019-07-08T21:12:34"},
            new Lesson,{title:"Web Api",price:40,duration:30,intakeDeadline:"2014-07-12T23:34:45"},
            new Lesson,{title:"Entity Framework",price:30,duration:40,intakeDeadline:"2023-07-12T12:11:55"},
            new Lesson,{title:"MS SQL Server",price:40,duration:30,intakeDeadline:"2014-07-12T23:34:45"}
        ];

        return lessons;
    }
}