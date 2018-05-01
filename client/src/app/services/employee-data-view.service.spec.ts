import { TestBed, inject } from '@angular/core/testing';

import { EmployeeDataViewService } from './employee-data-view.service';

describe('EmployeeDataViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeDataViewService]
    });
  });

  it('should be created', inject([EmployeeDataViewService], (service: EmployeeDataViewService) => {
    expect(service).toBeTruthy();
  }));
});
