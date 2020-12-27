import { Component } from '@angular/core';

import { faTimes, faVolumeDown, faVolumeMute, faVolumeUp, faFolder } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Icons
    // Controls
    faWindowClose: IconDefinition = faTimes;
    faWindowMaximize: IconDefinition = faWindowMaximize;
    faWindowMinimize: IconDefinition = faWindowMinimize;

    // Volume
    faVolumeMute: IconDefinition = faVolumeMute;
    faVolumeDown: IconDefinition = faVolumeDown;
    faVolumeUp: IconDefinition = faVolumeUp;

    // Files
    faFolder: IconDefinition = faFolder;
}
