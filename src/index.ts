import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

window.Webflow ||= [];
window.Webflow.push(() => {
  const calendarEl = document.querySelector<HTMLDivElement>('[data-element = "calendar"]');
  if (!calendarEl) return;

  console.log({ calendarEl });

  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek',
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
