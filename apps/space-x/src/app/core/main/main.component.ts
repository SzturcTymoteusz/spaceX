import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuPanelOpenState } from '../../lib/services/menu-panel-open-state/menu-panel-open-state';

@Component({
  selector: 'space-x-core',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public menuPanelOpenState: MenuPanelOpenState, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const query = window.matchMedia('(max-width: 700px)');
    this.updateView(query);
    query.onchange = () => {
      this.updateView(query);
    };
  }

  private updateView(query: MediaQueryList) {
    if (query.matches) {
      this.menuPanelOpenState.close();
      this.cdr.detectChanges();
    } else {
      this.menuPanelOpenState.open();
      this.cdr.detectChanges();
    }
  }
}
