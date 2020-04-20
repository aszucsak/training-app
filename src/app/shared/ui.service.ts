import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class UIService {

  constructor(private snackbar: MatSnackBar) { }

  showSnackbar(message: string, action: string, duration: number) {
    this.snackbar.open(message, action, {
      duration
    });
  }
}
