import { Component, OnInit } from '@angular/core';
import { EventService } from './services/event.service';

@Component({
  selector: "events-list",
  template: `
    <h1>Congrats!</h1>
    <event-thumbnail #thumbnail *ngFor="let event of events" [event]="event" (eventClick)="handleEventClick($event)"></event-thumbnail>
    <hr>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Foo Button</button>
  `
})
export class EventListComponent implements OnInit {

  events: any;
  constructor(private eventService: EventService) {

  }

ngOnInit(){
  this.events = this.eventService.getEvents();
}

  handleEventClick(data: any) {
    console.log(data)
  }
}
