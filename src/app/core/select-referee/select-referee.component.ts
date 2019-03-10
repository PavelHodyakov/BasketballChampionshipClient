import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {RefereeService} from "../../services/referee.service";

@Component({
  selector: 'app-select-referee',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectRefereeComponent),
      multi: true
    }
  ],
  templateUrl: './select-referee.component.html',
  styleUrls: ['./select-referee.component.scss']
})
export class SelectRefereeComponent implements OnInit,  ControlValueAccessor {
  @Input() name : string;
  @Input() placeholder = 'Введите значение';
  @Input() required = false;
  private _value: any;
  //teams =[];
  referee =[];
  constructor(private refereeService: RefereeService) { }

  ngOnInit() {
    console.log('window: ', window.location.pathname);
    if(window.location.pathname==='/match') {
     // this.getTeam();
      this.getReferee();
    }

  }
  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  //
  // getTeam() {
  //   this.teamService.getTeam()
  //     .subscribe((res: any) => this.handleTeam(res));
  // }
  //
  // handleTeam(res:any) {
  //   console.log(res)
  //   if (res){
  //     res.forEach(element => {
  //       let teamm={value:''};
  //
  //       teamm.value=element;
  //       this.teams.push(teamm);
  //     });
  //   }
  // }

  getReferee(){
    this.refereeService.getReferee()
      .subscribe((res: any) => this.handleReferee(res))
  }

  handleReferee(res:any) {
    console.log(res)
    if (res){
      res.forEach(el => {
        let referee={value:''};

        referee.value=el;
        this.referee.push(referee);
      });
    }
    console.log('referee ',this.referee);
  }
}
