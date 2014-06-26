$(document).ready(function() {
    $("#adrenalins-calendar").fullCalendar({
        firstDay: 1,
        weekMode: 'liquid',
        height: 700,
        allDaySlot: false,
        monthNames: ['January', 'February', 'March', 'Aprilis', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        buttonText: {
            today: 'Šodien',
            month: 'month',
            week: 'week',
            day: 'day'
        },
        eventClick: function(calEvent, jsEvent, view) {
            $(this).qtip();
        },
        events: [
            {
                title: 'Event1',
                start: '2014-04-01'
            },
            {
                title: 'Event2',
                start: '2014-04-05',
                end: '2014-04-15'
            },
            {
                title: 'event3',
                start: '2014-04-018 12:30:00',
                allDay: false // will make the time show
            },
            {
                title: 'event4',
                start: '2014-04-018 15:30:00',
                allDay: false // will make the time show
            }

        ]
    });
});
