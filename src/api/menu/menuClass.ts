export class MenuConfigData {
	isCollapse: boolean = false
	defaultActive: string = ''
	menus: Array<MenuData> = []
}

export class MenuData {
	title: string = ''
	path: string = ''
	disabled?: boolean
	icon?: string
	children?: Array<MenuData>
}
