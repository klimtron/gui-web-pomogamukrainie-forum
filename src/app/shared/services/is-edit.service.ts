import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
import { ConfirmCancelDialogComponent } from '../components';
import { DIALOG_CANCEL_OFFER_CONFIG } from '../consts';

@Injectable()
export class IsEditService {
  isEditRoute(routerUrl: string, activeUrl: string, offerId?: number | undefined): boolean {
    console.log(routerUrl === `${activeUrl}${offerId}`);
    return routerUrl === `${activeUrl}${offerId}`;
  }

  onCancelButtonClick(context: any) {
    const dialogRef: MatDialogRef<ConfirmCancelDialogComponent> = context.dialog.open(
      ConfirmCancelDialogComponent,
      DIALOG_CANCEL_OFFER_CONFIG
    );

    dialogRef.componentInstance.confirm.pipe(take(1)).subscribe((confirm: boolean) => {
      if (confirm) {
        context.router.navigate([context.targetUrl]);
      }
      dialogRef.close();
    });
  }
}
