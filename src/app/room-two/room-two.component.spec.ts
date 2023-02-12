import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTwoComponent } from './room-two.component';

describe('RoomTwoComponent', () => {
  let component: RoomTwoComponent;
  let fixture: ComponentFixture<RoomTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
