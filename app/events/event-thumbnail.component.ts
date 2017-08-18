import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
    selector:'event-thumbnail',
    template:`
        <div>
            <div class="well hoverwell thumbnail">
                <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <div>Date: {{event.time}}</div>
                <div>Date: \${{event.price}}</div>
                <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>

            </div>
        </div>
    `
})
export class EventThumbnailComponent {

    @Input() event:any

    @Output() eventClick = new EventEmitter()

    handleClickMe(){
        console.log("clicked")
        this.eventClick.emit("Event from child component")
    }
}