import { Component } from '@angular/core';
import { LoggerService } from '@waf_service/logger';
import { ContextService } from "@waf_service/context";

/**
 * demo_test
 * @export
 * @class Demo_testComponent
 */
@Component({
  templateUrl: './demo-test.component.html',
  styleUrls: ['./demo-test.component.scss']
})
export class Demo_testComponent {
  
 /**
  * 构造函数
  * @param {LoggerService} logger
  * @param {ContextService} context
  * @memberof DemoModule
  */
  constructor(private logger: LoggerService, private context: ContextService) {
  }
}
