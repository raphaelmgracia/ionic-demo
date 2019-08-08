import { WebPlugin } from '@capacitor/core';
import { GyroscopePluginPlugin } from './definitions';
import { BehaviorSubject, Observable } from 'rxjs';
declare const AbsoluteOrientationSensor: any;
export class GyroscopePluginWeb extends WebPlugin implements GyroscopePluginPlugin {

  public data: Observable<any>;
  private _data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    super({
      name: 'GyroscopePlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async start() {
    // add Gyroscope Web API logic here
    const sensor = new AbsoluteOrientationSensor();
    sensor.start();
    sensor.onerror = (event: any) => {
      if (event.error.name === 'SecurityError') { 
        console.log('No permissions to use AbsoluteOrientationSensor.');
      }
    };
    sensor.onreading =  (_: any) => {
      const q = sensor.quaternion;
      this._data.next(q);
    };
    this.data = this._data.asObservable();
    return Promise.resolve();
  }
}

const GyroscopePlugin = new GyroscopePluginWeb();

export { GyroscopePlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(GyroscopePlugin);
