import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private readonly snackBar: MatSnackBar,
  ) { }

  public success(message: string) {
    this.openSnackBar(message, '', 'success-snackbar');
  }

  public error(message: string,) {
    this.openSnackBar(message, '', 'error-snackbar');
  }

  private openSnackBar(
    message: string,
    action: string,
    className = '',
    duration = 3000
  ) {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: [className],
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
}
