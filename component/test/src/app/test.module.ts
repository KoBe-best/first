import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LoggerService } from '@waf_service/logger';
import { constant } from './test.constant';
import { TestComponent } from './test.component';

export { TestModel } from './model/test.model';

/**
 * test控件模块
 * @export
 * @class TestModule
 */
@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TestComponent
  ],
  providers: [
  ]
})
export class TestModule {
  /**
  * 构造函数
  * @param {LoggerService} logger
  * @memberof TestModule
  */
  constructor(private logger: LoggerService) {
    this.logger.info(constant.identifier, 'Initialize test module.');
  }
 }
