self.addEventListener('push', event => {
    console.log('Event', event)
    const data = event.data.json();
    console.log('New notification', data)
    const actions = [
        {
            action: 'snooze-1',
            title: 'Snooze 1h'
        },
        {
            action: 'snooze-24',
            title: 'Snooze 24h'
        }
    ];
    const options = {
        body: data.body.message,
        tag: `sentilojn-${data.body.sensorId}`,
        data: { sensorId: data.body.sensorId },
        renotify: true,
        actions,
    }
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

const updateSensor = (sensorId, snoozeUntil) => {
    return fetch(`https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor/${sensorId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({ snoozeUntil })
      }
    )
      .then(response => response.json())
      .catch((error) => {
        console.error('ERROR', error);
      });
  };  

const handleNotificationClick = (event) => {
    switch (event.action) {
        case 'snooze-1':
            console.log('Snoozed for 1h.', event.notification.data);
            return updateSensor(event.notification.data.sensorId, new Date().getTime() + (1000 * 1 * 60 * 60));
        case 'snooze-24':
            console.log('Snoozed for 24h.', event.notification.data);
            return updateSensor(event.notification.data.sensorId, new Date().getTime() + (1000 * 24 * 60 * 60));
        default:
            console.log(`Unknown action clicked: '${event.action}'`);
            return Promise.reject(new Error(`Unknown action clicked: '${event.action}'`));
    }
};

self.addEventListener('notificationclick', function (event) {
    if (!event.action) {
        console.log('Notification Click.');

        const clickedNotification = event.notification;
        clickedNotification.close();
        
        return;
    }

    const clickedNotification = event.notification;
    clickedNotification.close();
  
    const promiseChain = handleNotificationClick(event);
    event.waitUntil(promiseChain);
});