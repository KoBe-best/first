import { Component } from '@angular/core';
import { LoggerService } from '@waf_service/logger';
import { ContextService } from "@waf_service/context";

/**
 * test_default
 * @export
 * @class Test_defaultComponent
 */
@Component({
  templateUrl: './test-default.component.html',
  styleUrls: ['./test-default.component.scss']
})
export class Test_defaultComponent {
  
 /**
  * 构造函数
  * @param {LoggerService} logger
  * @param {ContextService} context
  * @memberof DemoModule
  */
  constructor(private logger: LoggerService, private context: ContextService) {
  }
}
