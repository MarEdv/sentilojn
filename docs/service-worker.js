/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/sentilojn/precache-manifest.df323eb9d4366223c33ee7e11daff591.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/sentilojn/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
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