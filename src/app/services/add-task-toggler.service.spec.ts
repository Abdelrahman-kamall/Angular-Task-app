import { TestBed } from '@angular/core/testing';

import { AddTaskTogglerService } from './add-task-toggler.service';

describe('AddTaskTogglerService', () => {
  let service: AddTaskTogglerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTaskTogglerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
