import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  lightOn = false;
  cameraReverse = false;
  constructor(private qrScanner: QRScanner,
    private nfc: NFC,
    public platform: Platform) {
  }

  ngOnInit() {
    console.log('ng oninit');
    this.platform.ready().then(() => {
      console.log('platform ready!!');
      if (this.platform.is('ios')) {
        console.log('============= IOS ========');
        this.nfc.beginSession((success) => {
          alert(success);
          this.nfc.addNdefListener(() => {
            console.log('successfully attached ndef listener');
          }, (err) => {
            console.log('error attaching ndef listener', err);
          }).subscribe((event) => {
            console.log('received ndef message. the tag contains: ', event.tag);
            console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
            alert(JSON.stringify(event.tag));
            alert(this.nfc.bytesToHexString(event.tag.id));
          });
        }, (failure) => {
          alert(failure);
        });
      } else {
        console.log('============= NOT IOS ========');
        this.nfc.addNdefListener(() => {
          console.log('successfully attached ndef listener');
        }, (err) => {
          console.log('error attaching ndef listener', err);
        }).subscribe((event) => {
          console.log('received ndef message. the tag contains: ', event.tag);
          console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
          alert(JSON.stringify(event.tag));
          alert(this.nfc.bytesToHexString(event.tag.id));
        });
      }
    });
  }

  StartScan() {
    // start scanning
    const scanSub = this.qrScanner.scan().subscribe((text: string) => {
      alert(text);

      this.qrScanner.hide(); // hide camera preview
      this.hideCamera();
      scanSub.unsubscribe(); // stop scanning
    });

    this.qrScanner.show();
    this.showCamera();
  }

  ToggleLight() {
    if (!this.lightOn) {
      this.qrScanner.enableLight();
    } else {
      this.qrScanner.disableLight();
    }

    this.lightOn = !this.lightOn;
  }

  ToggleCamera() {
    if (!this.cameraReverse) {
      this.qrScanner.useCamera(1);
    } else {
      this.qrScanner.useCamera(0);
    }

    this.cameraReverse = !this.cameraReverse;
  }

  showCamera() {
    (window.document.querySelector('.qr-header') as HTMLElement).classList.add('hide');
    (window.document.querySelector('.qr-content') as HTMLElement).classList.add('hide');
  }

  hideCamera() {
    (window.document.querySelector('.qr-header') as HTMLElement).classList.remove('hide');
    (window.document.querySelector('.qr-content') as HTMLElement).classList.remove('hide');
  }
}
