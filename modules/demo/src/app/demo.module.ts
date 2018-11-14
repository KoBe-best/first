import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LoggerService } from '@waf_service/logger';
import { constant } from './demo.constant';
import { DemoRouterModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DefaultComponent } from './default/default.component';
import { DemoMenuService } from './service/demo-menu.service';
import { Demo_testComponent } from './demo_test/demo-test/demo-test.component';
import { Test_defaultComponent } from './demo_test/test_default/test-default/test-default.component';
import { Qunee_demoComponent } from './qunee/qunee_demo/qunee-demo/qunee-demo.component';

/**
 * demo模块
 * @export
 * @class DemoModule
 */
@NgModule({
  declarations: [
    DemoComponent,
    DefaultComponent,
    Demo_testComponent,
    Test_defaultComponent,
    Qunee_demoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRouterModule
  ],
  providers: [
    { provide: 'tpi.menu', useClass: DemoMenuService, multi: true }
  ]
})
export class DemoModule {

 /**
  * 构造函数
  * @param {LoggerService} logger
  * @memberof DemoModule
  */
  constructor(private logger: LoggerService) {
    this.logger.info(constant.identifier, 'Initialize demo module.');
  }
}
