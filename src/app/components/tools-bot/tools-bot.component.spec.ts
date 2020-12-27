import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsBotComponent } from './tools-bot.component';

describe('ToolsBotComponent', () => {
  let component: ToolsBotComponent;
  let fixture: ComponentFixture<ToolsBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
