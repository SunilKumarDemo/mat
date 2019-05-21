import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'wf-popups-modals',
  templateUrl: './popups-modals.component.html',
  styleUrls: ['./popups-modals.component.css']
})
export class PopupsModalsComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet,public dialog: MatDialog) { }
  animal: string;
  name: string;
  openBottomSheet(): void {
    this.bottomSheet.open(PopupContent);
  }
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
  <mat-nav-list>
  <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Keep</span>
    <span mat-line>Add to a note</span>
  </a>

  <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Docs</span>
    <span mat-line>Embed in a document</span>
  </a>

  <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Plus</span>
    <span mat-line>Share with your friends</span>
  </a>

  <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Hangouts</span>
    <span mat-line>Show to your coworkers</span>
  </a>
</mat-nav-list>

`,
})
export class PopupContent {
  constructor(private bottomSheetRef: MatBottomSheetRef<PopupContent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template:`<h1 mat-dialog-title>Hi {{data.name}}</h1>
  <div mat-dialog-content>
    <p>What's your favorite animal?</p>
    <mat-form-field>
      <input matInput [(ngModel)]="data.animal">
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">No Thanks</button>
    <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
  </div>
  `
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}