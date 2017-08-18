import {Component} from '@angular/core';


@Component({
    selector:'events-list',
    template:`
        <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
            <event-thumbnail [event]='event' (eventClick)="handleEventClicked($event)"></event-thumbnail>
        </div>
    `
})
export class EventsListComponent {

    empObj = {
        firstName:"Test"
    }
    event = {
        id: 1,
        name: 'Angular Connect',
        date:'9/23/2018',
        time : '10:00 am',
        price: 599.99
    }

    handleEventClicked(data){
        this.event.price = 700;
        console.log(data)
    }
}