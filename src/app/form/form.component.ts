import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Data } from '@angular/router';
import { fromEvent } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public show: boolean = false;
  public expandForm: boolean = false;

  modalForm: FormGroup;

  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.modalForm = new FormGroup(
      {
        background: new FormControl(),
        filename: new FormControl(),
        code: new FormControl(),
        minWidth: new FormControl(),
      },
      { updateOn: 'change' }
    );
    this.modalForm.valueChanges.pipe().subscribe(() => {
      this.newData();
    });
  }
  newData() {
    this.data.changeData(this.modalForm.value);
  }
}
