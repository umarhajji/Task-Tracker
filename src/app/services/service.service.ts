import { Injectable } from '@angular/core';
import {Task } from '../Task';
import {TASKS} from '../mock.tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}
