import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DefaultComponent } from './default/default.component';
import { Test_defaultComponent } from './demo_test/test_default/test-default/test-default.component';
import { Qunee_demoComponent } from './qunee/qunee_demo/qunee-demo/qunee-demo.component';

// 路由配置
export const routes: Routes = [
  {
    path: 'demo', component: DemoComponent,
    children: [
      { path: '', component: DefaultComponent },
      { path: 'demo_test/test_default/test-default', component: Test_defaultComponent },
      { path: 'qunee/qunee_demo/qunee_demo', component: Qunee_demoComponent }
    ]
  }
];

/**
 * demo路由模块
 * @export
 * @class DemoRouterModule
 */
@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRouterModule { }
