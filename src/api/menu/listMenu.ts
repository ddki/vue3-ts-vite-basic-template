/**
 * @desc 获取菜单信息
 */

import * as defs from './menuClass'
import { PontCore } from './../PontCore'

export class Params {}

export const init = new defs.MenuConfigData()

export function request(params: Params, options?: any) {
	return mockData()
	return PontCore.fetch(PontCore.getUrl('/api/menu/list', params, 'GET'), {
		method: 'GET',

		...options
	})
}

function mockData() {
	const menuData: defs.MenuConfigData = {
		isCollapse: false,
		defaultActive: '1',
		menus: [
			{
				title: '菜单1',
				path: '/menu1',
				icon: 'Avatar'
			},
			{
				title: '菜单2',
				path: '/menu2',
				icon: 'Coin'
			},
			{
				title: '菜单3',
				path: '/menu3',
				icon: 'Tools',
				children: [
					{
						title: '菜单3-1',
						path: '/menu3-1',
						icon: 'Operation'
					},
					{
						title: '菜单3-2',
						path: '/menu3-2',
						icon: 'DocumentRemove'
					},
					{
						title: '菜单3-3',
						path: '/menu3-3',
						icon: 'Document'
					}
				]
			},
			{
				title: '菜单4',
				path: '/menu4',
				icon: 'Document',
				children: [
					{
						title: '菜单4-1',
						path: '/menu4-1',
						icon: 'Document'
					}
				]
			}
		]
	}
	return menuData
}
