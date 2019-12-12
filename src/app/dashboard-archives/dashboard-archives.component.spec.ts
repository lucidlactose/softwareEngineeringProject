import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArchivesComponent } from './dashboard-archives.component';

describe('DashboardArchivesComponent', () => {
  let component: DashboardArchivesComponent;
  let fixture: ComponentFixture<DashboardArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
