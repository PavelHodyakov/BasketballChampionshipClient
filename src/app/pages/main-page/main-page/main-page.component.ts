import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from '../../../classes/student.class';
import {NgForm} from '@angular/forms';
import {StudentService} from '../../../services/student.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  protected student: Student;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.student = new Student();
  }

  protected addStudent() {
    if (this.form.valid) {
      this.studentService.addStudent(this.student)
        .subscribe((res: any) => {
          console.log('call res', res);
        });
    }
  }

}
