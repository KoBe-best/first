import { Component } from '@angular/core';
import { LoggerService } from '@waf_service/logger';
import { ContextService } from "@waf_service/context";
import { constant } from '../demo.constant';

/**
 * 默认组件
 * @export
 * @class DefaultComponent
 */
@Component({
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  
 /**
  * 构造函数
  * @param {LoggerService} logger
  * @param {ContextService} context
  * @memberof DemoModule
  */
  constructor(private logger: LoggerService, private context: ContextService) {
  }
}
