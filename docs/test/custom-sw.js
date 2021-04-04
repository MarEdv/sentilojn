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

const updateSensor = ({ sensorId, snoozeUntil }) => {
    console.log('updateSensor: ', sensorId);
    const patchObject = {};
    if (typeof snoozeUntil !== 'undefined') {
        patchObject.snoozeUntil = snoozeUntil;
    }
    return fetch(`https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor/${sensorId}`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(patchObject)
        }
    )
        .then(response => response.json())
        .catch((error) => {
            console.error('ERROR', error);
        });
};

self.addEventListener('notificationclick', function (event) {
    if (!event.action) {
        // Was a normal notification click
        console.log('Notification Click.');
        return;
    }

    switch (event.action) {
        case 'snooze-1':
            console.log('Snoozed for 1h.', event.notification.data);
            updateSensor({ sensorId: event.notification.data.sensorId, snoozeUntil: new Date().getTime() + (1000 * 1 * 60 * 60) });
            break;
        case 'snooze-24':
            console.log('Snoozed for 24h.', event.notification.data);
            updateSensor({ sensorId: event.notification.data.sensorId, snoozeUntil: new Date().getTime() + (1000 * 24 * 60 * 60) });
            break;
        default:
            console.log(`Unknown action clicked: '${event.action}'`);
            break;
    }
});