import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: "event-thumbnail",
  template: `
    <h3>{{event.name}}</h3>
    <button class="btn btn-primary" (click)="handleClick()">Click Me</button>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  someValue: any = "This is a value";

  handleClick() {
    console.log(this.event.name);
    this.eventClick.emit(this.event);
  }

  logFoo() {
    console.log("log Foo");
  }
}
