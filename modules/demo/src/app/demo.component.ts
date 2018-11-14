import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
/**
 * 模块壳组件
 * @export
 * @class DefaultComponent
 */
@Component({
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit{ 
  ngOnInit(){
    $(".test").css({"color":"blue"});
  }
}
