import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

window.Webflow ||= [];
window.Webflow.push(() => {
  const calendarEl = document.querySelector<HTMLDivElement>('[data-element = "calendar"]');
  if (!calendarEl) return;

  console.log({ calendarEl });

  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'timeGridDay',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth',
    },

    events: [
      {
        title: 'Birthday party',
        start: '2024-07-05',
        end: '2024-07-07',
        backgroundColor: '#FF5003',
        borderColor: '#FF5003',
      },
      {
        title: 'Family vacation',
        start: '2024-07-14',
        end: '2024-07-17',
        backgroundColor: '#FF5003',
        borderColor: '#FF5003',
      },
    ],
  });
  calendar.render();
});
