import { Injectable } from "@angular/core";
import { ITpiMenu, TpiMenuItem } from '@waf_service/tpi';

/**
 * demo菜单服务
 * @export
 * @class DemoMenuService
 * @implements {ITpiMenu}
 */
@Injectable()
export class DemoMenuService implements ITpiMenu {

  getMenuItems(): TpiMenuItem[] {

    // 待返回的菜单项数组
    let menuItems:TpiMenuItem[] = [];

    // 父菜单
    // TODO:菜单信息根据实际情况修改
    let menuItem = new TpiMenuItem();
    menuItem.id = 2139;
    menuItem.name = 'demo';
    menuItem.icon = 'fh-remind';
    menuItems.push(menuItem);

    // 默认子菜单
    // TODO:子菜单信息根据实际情况修改
    let defaultMenuItem = new TpiMenuItem();
    defaultMenuItem.id = 213900;
    defaultMenuItem.name = 'demo.default';
    defaultMenuItem.icon = '';
    defaultMenuItem.path = '/demo';
    defaultMenuItem.parentId = menuItem.id;
    menuItems.push(defaultMenuItem);

    // 主导航-二级菜单：demo_test
    let testMenuItem = new TpiMenuItem();
    testMenuItem.id = 213901;
    testMenuItem.name = 'demo.test';
    testMenuItem.icon = '';
    testMenuItem.parentId = menuItem.id;
    menuItems.push(testMenuItem);

    // 主导航-三级菜单：test_default
    let testdefaultMenuItem = new TpiMenuItem();
    testdefaultMenuItem.id = 21390100;
    testdefaultMenuItem.name = 'demo.test.default';
    testdefaultMenuItem.icon = '';
    testdefaultMenuItem.path =  '/demo/demo_test/test_default/test-default'
    testdefaultMenuItem.parentId = testMenuItem.id;
    menuItems.push(testdefaultMenuItem);

    // 主导航-二级菜单：qunee
    let quneeMenuItem = new TpiMenuItem();
    quneeMenuItem.id = 213902;
    quneeMenuItem.name = 'demo.qunee';
    quneeMenuItem.icon = '';
    quneeMenuItem.parentId = menuItem.id;
    menuItems.push(quneeMenuItem);

    // 主导航-三级菜单：qunee_demo
    let quneeDemoMenuItem = new TpiMenuItem();
    quneeDemoMenuItem.id = 21390200;
    quneeDemoMenuItem.name = 'demo.qunee.demo';
    quneeDemoMenuItem.icon = '';
    quneeDemoMenuItem.path =  '/demo/qunee/qunee_demo/qunee_demo'
    quneeDemoMenuItem.parentId = quneeMenuItem.id;
    menuItems.push(quneeDemoMenuItem);

    return menuItems;
  }
}
