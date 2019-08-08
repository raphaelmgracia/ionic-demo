import { Component, OnInit, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { GyroscopePluginWeb } from 'gyroscope-plugin/src';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  public image: SafeResourceUrl;
  public data$: Observable<any>;

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
}
