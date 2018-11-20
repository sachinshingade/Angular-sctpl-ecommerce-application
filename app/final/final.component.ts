import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  key = '';
  courseName = '';
  courseDetails = [];
  courseCost;
  courseDisc;

  productList: AngularFireObject<any>;

  constructor(
    private route: ActivatedRoute,
    private product: ProductService,
    private firebase: AngularFireDatabase
    ) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('$key');
    // console.log(this.key);
   if ( this.key === '-LQI1yg8nKuOeqrTgb-2') {
      this.courseName = 'Android';
      this.courseCost = 14950;
      this.courseDisc = 10;
    } else if ( this.key === '-LQIARJZizksOHqZXaUp' ) {
      this.courseName = 'Angular';
      this.courseCost = 4950;
      this.courseDisc = 5;
    } else if ( this.key === '-LQIArIFMB7CzcakZL_W' ) {
      this.courseName = 'React JS';
      this.courseCost = 7750;
      this.courseDisc = 12;
    } else if ( this.key === '-LQIBAXLjeoHKOdcKf-W' ) {
      this.courseName = 'Node JS';
      this.courseCost = 8950;
      this.courseDisc = 20;
    } else if ( this.key === '-LQIBOASEV54QrOulKCy' ) {
      this.courseName = 'Machine Learning';
      this.courseCost = 15950;
      this.courseDisc = 5;
    } else if ( this.key === '-LQIBlwa0laTGSw5olch' ) {
      this.courseName = 'PHP';
      this.courseCost = 12650;
      this.courseDisc = 13;
    } else if ( this.key === '-LQICIPIvUaklqhxkccc' ) {
      this.courseName = 'Java (Core + Advanced)';
      this.courseCost = 20950;
      this.courseDisc = 15;
    } else if ( this.key === '-LQICU8iwMnDL2wnjsEC' ) {
      this.courseName = 'SQL';
      this.courseCost = 15650;
      this.courseDisc = 20;
    } else if ( this.key === '-LQIDJsiCe55pI94bhfN' ) {
      this.courseName = 'Python';
      this.courseCost = 9950;
      this.courseDisc = 10;
    } else {
        this.courseName = 'Not Found';
    }



 this.firebase.list('products/' + this.key).valueChanges().subscribe(
    data => {
      this.courseDetails = data as Array<any>;
  });

  }

}
