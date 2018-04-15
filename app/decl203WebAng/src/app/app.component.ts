import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { Ong } from './ong/ong';
import { Persoana } from './dateproprii/persoana';
import { ONGService } from './ong/ong.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { interval } from 'rxjs/observable/interval';
import { MessageService } from './message.service';
import { ExchangeDataService } from './exchange-data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
enum Completion230 {
  None = 0,
  ONG = 1 << 0,
  Persoana = 1 << 1,
  All = ~(~0 << 2)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SelectedPers: Persoana;
  SelectedOng: Ong;
  constructor(private ongService: ONGService, private messageService: MessageService, private ex: ExchangeDataService,
    private router: Router) {
    this.ex.OngConfirmed$.subscribe(it => {
      this.existOng = true;
      this.SelectedOng = it;
      this.selectNext();

    });
    this.ex.PersoanaConfirmed$.subscribe(it => {
      this.messageService.add("selected pers");
      this.IsCompletedPers = it.isValid;
      this.SelectedPers = it;
      this.selectNext();
    });
  }
  IsCompletedPers = false;
  existOng = false;
  selectNext(): void {
    if (!this.existOng) {
      this.messageService.add("goto ong");
      this.router.navigate(['/ong']);
      return;
    }
    if (!this.IsCompletedPers) {
      this.messageService.add("goto pers");
      this.router.navigate(['/pers']);
      return;
    }
    this.router.navigate(['/pdfgen']);

  }
}
