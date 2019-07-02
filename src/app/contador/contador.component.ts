import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  title = "Contador";
  number = 0;

  ngOnInit() {

  }
  constructor() { }
  aumentaNumero() {
    this.number += 1;
  }
  diminuiNumero() {
    this.number -= 1;
  }
}
