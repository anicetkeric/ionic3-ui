import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Input } from '@angular/core';
/**
 * Generated class for the Rating page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class Rating {

 _max: number = 5;
  _readOnly: boolean = false;
  _emptyStarIconName: string = 'star-outline';
  _halfStarIconName: string = 'star-half';
  _starIconName: string = 'star';
  _nullable: boolean = false;

  innerValue: any;
  starIndexes: Array<number>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }




   @Input()
  get max() {
    return this._max;
  }
  set max(val: any) {
    this._max = this.getNumberPropertyValue(val);
  }

  @Input()
  get readOnly() {
    return this._readOnly;
  }
  set readOnly(val: any) {
    this._readOnly = this.isTrueProperty(val);
  }

 ngOnInit() {
    // ngFor needs an array
    this.starIndexes = Array(this.max).fill(1).map((x, i) => i);
  }


  @Input()
  get emptyStarIconName() {
    return this._emptyStarIconName;
  }
  set emptyStarIconName(val: any) {
    this._emptyStarIconName = val;
  }

  @Input()
  get halfStarIconName() {
    return this._halfStarIconName;
  }
  set halfStarIconName(val: any) {
    this._halfStarIconName = val;
  }

  @Input()
  get starIconName() {
    return this._starIconName;
  }
  set starIconName(val: any) {
    this._starIconName = val;
  }

  @Input()
  get nullable() {
    return this._nullable;
  }
  set nullable(val: any) {
    this._nullable = this.isTrueProperty(val);
  }



  getStarIconName(starIndex: number) {
    if (this.value === undefined) {
      return this.emptyStarIconName;
    }

    if (this.value > starIndex) {

      if (this.value < starIndex + 1) {
        return this.halfStarIconName;

      } else {
        return this.starIconName;
      }

    } else {
      return this.emptyStarIconName;
    }
  }

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      //this.onChangeCallback(value);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }


  onKeyDown(event: any) {
    if (/(37|38|39|40)/.test(event.which)) {
      event.preventDefault();
      event.stopPropagation();

      let newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
      console.log(newValue);
      return this.rate(newValue);
    }
  }

  rate(value: number) {
    if (this.readOnly || value < 0 || value > this.max) {
      return;
    }

    if (value === this.value && this.nullable) {
      value = null;
    }
 console.log(this.value);
    this.value = value;
  }

  private isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
      val = val.toLowerCase().trim();
      return (val === 'true' || val === 'on');
    }
    return !!val;
  }

  private getNumberPropertyValue(val: any): number {
    if (typeof val === 'string') {
      return parseInt(val.trim());
    }
    return val;
  }

}
