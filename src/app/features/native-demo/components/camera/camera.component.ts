import { Component, OnInit, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource, LocalNotificationScheduleResult } from '@capacitor/core';
import { GyroscopePluginWeb } from 'gyroscope-plugin/src';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
const { Geolocation } = Plugins;
const { Toast } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {
  notifs: LocalNotificationScheduleResult;
  pendingNotifs: LocalNotificationScheduleResult;

  public image: SafeResourceUrl;
  public data$: Observable<any>;
  public position: any;

  constructor(
    private sanitizer: DomSanitizer,
    private _ngZone: NgZone
  ) { }

  ngOnInit() {
    const p = new GyroscopePluginWeb();
    p.echo({value: 'hello world!'});

    p.start();
    this.data$ =  p.data.pipe(
      tap(() => this._ngZone.run(() => {}))
    );
    this.init();
  }

  async tackPicture() {
    console.log('tackPicture....');
    const { Camera } = Plugins;
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  async displayToast() {
    const toast = await Toast.show({
      text: 'Hello '
    }).catch(err => err);
    console.log('toast:', toast);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
      console.log(position, err);
      this.position = {
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      };
    });
  }

  async init() {
    await Plugins.LocalNotifications.requestPermissions();

    try {
      Plugins.LocalNotifications.registerActionTypes({
        types: [
          {
            id: 'OPEN_PRODUCT',
            actions: [
              {
                id: 'view',
                title: 'Product'
              }, {
                id: 'remove', title: 'Remove', destructive: true
              },
              {
                id: 'response',
                title: 'Response',
                input: true
              }
            ]
          }
        ]
      });

      Plugins.LocalNotifications.addListener('localNotificationReceived', (notification) => {
        console.log('Notification: ', notification);
      })

      Plugins.LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
        console.log('Notification action performed', notification);
      });

    } catch(e) {
      console.log(e);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationsPage');
  }

  async scheduleNow() {
    this.notifs = await Plugins.LocalNotifications.schedule({
      notifications: [{
        title: 'Get 10% off!',
        body: 'Swipe now to learn more',
        // Get random id to test cancel
        id: Math.floor(Math.random()*10),
        sound: 'beep.aiff',
        attachments: [
          { id: 'face', url: 'res://public/assets/ionitron.png' }
        ],
        actionTypeId: 'OPEN_PRODUCT',
        extra: {
          productId: 'PRODUCT-1'
        }
      }]
    });
  }

  async scheduleNowWithIcon() {
    this.notifs = await Plugins.LocalNotifications.schedule({
      notifications: [{
        title: 'Get 10% off!',
        body: 'Swipe now to learn more',
        // Android-only: set a custom statusbar icon 
        // smallIcon: "res://ic_stat_icon_sample",
        // Get random id to test cancel
        id: Math.floor(Math.random()*10),
        sound: 'beep.aiff',
        attachments: [
          { id: 'face', url: 'res://public/assets/ionitron.png' }
        ],
        actionTypeId: 'OPEN_PRODUCT',
        extra: {
          productId: 'PRODUCT-1'
        }
      }]
    });
  }

  async scheduleOnce() {
    var now = new Date();
    this.notifs = await Plugins.LocalNotifications.schedule({
      notifications: [{
        title: 'Get 20% off!',
        body: 'Swipe to learn more',
        // Get random id to test cancel
        id: Math.floor(Math.random()*10),
        sound: 'beep.aiff',
        attachments: [
          { id: 'face', url: 'res://public/assets/ionitron.png' }
        ],
        schedule: {
          at: new Date(now.getTime() + (10 * 1000))
        },
        actionTypeId: 'OPEN_PRODUCT',
        extra: {
          productId: 'PRODUCT-1'
        }
      }]
    });
  }

  async scheduleRepeatingOn() {
    var now = new Date();
    this.notifs = await Plugins.LocalNotifications.schedule({
      notifications: [{
        title: 'Get 20% off daily',
        body: 'Swipe to learn more',
        id: 2,
        schedule: {
          on: {
            minute: new Date().getUTCMinutes()+1
          }
        }
      }]
    });
  }

  async scheduleRepeatingEvery() {
    var now = new Date();
    this.notifs = await Plugins.LocalNotifications.schedule({
      notifications: [{
        title: 'Happy Holidays! Last minute.',
        body: 'Swipe to learn more',
        id: 3,
        schedule: {
          every: 'minute'
        }
      }]
    });
  }

  cancelNotification() {
    this.pendingNotifs && Plugins.LocalNotifications.cancel(this.pendingNotifs);
  }

  async getPending() {
    this.pendingNotifs = await Plugins.LocalNotifications.getPending();
    console.log('PENDING', this.pendingNotifs);
  }

  toJson(o: any) {
    return JSON.stringify(o, null, 2);
  }

}
