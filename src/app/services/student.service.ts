import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Student} from '../classes/student.class';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private restService: RestService) {
  }

  public addStudent(student: Student) {
    const params = {
      student: student
    };

    return this.restService.doCall('createStudent', params);
  }
}
