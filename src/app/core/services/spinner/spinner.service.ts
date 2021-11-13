import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { defer, NEVER } from 'rxjs';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { finalize, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private overlayRef: OverlayRef = undefined;

  constructor(private readonly overlay: Overlay) {}

  public spinner$ = defer(() => {
    this.show();
    return NEVER.pipe(
      finalize(() => {
        this.hide();
      })
    );
  }).pipe(share());

  private show(): void {
    Promise.resolve(null).then(() => {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
        hasBackdrop: true,
      });
      this.overlayRef.attach(new ComponentPortal(SpinnerComponent));
    });
  }

  private hide(): void {
    console.log('SpinnerOverlayService ~ hide spinner');
    this.overlayRef.detach();
    this.overlayRef = undefined;
  }
}
