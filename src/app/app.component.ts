import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
 demo = [{
      "ServerDT": "2016-12-09T15:08:53.69",
      "ResultType": "DAILY",
      "TagID": "TOT_RO_WATER",
      "mySUM": 27049.385
    }]

  data_table = {
  "Table": [
    {
      "ServerDT": "2016-12-09T15:08:53.69",
      "ResultType": "DAILY",
      "TagID": "TOT_RO_WATER",
      "mySUM": 27049.385
    },
    {
      "ServerDT": "2016-12-09T15:08:53.69",
      "ResultType": "DAILY",
      "TagID": "TOT_SCHOTDI",
      "mySUM": 28238.385
    }
  ]
}

data_all = this.data_table["Table"]

users = [
    { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 }
  ];

test_users = {"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]}

test_v2 = {
  "Table": [
    {
      "ServerDT": "2016-12-09T15:08:53.69",
      "ResultType": "DAILY",
      "TagID": "TOT_RO_WATER",
      "mySUM": 27049.385
    },
    {
      "ServerDT": "2016-12-09T15:08:53.69",
      "ResultType": "DAILY",
      "TagID": "TOT_SCHOTDI",
      "mySUM": 28238.385
    }
  ]
}
  

}
