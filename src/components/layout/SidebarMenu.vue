<template>
	<el-menu
		:router="true"
		:default-active="menuData.defaultActive"
		:collapse="menuData.isCollapse"
		@open="handleOpen"
		@close="handleClose"
	>
		<template v-for="(item, index) in menuData.menus" :key="index">
			<el-sub-menu :index="item.path" v-if="item.children">
				<template #title>
					<el-icon>
						<component :is="item.icon" />
					</el-icon>
					<span>{{ item.title }}</span>
				</template>
				<el-menu-item-group>
					<el-menu-item :index="itemChild.path" v-for="(itemChild, childIndex) in item.children" :key="childIndex">
						{{ itemChild.title }}
					</el-menu-item>
				</el-menu-item-group>
			</el-sub-menu>
			<el-menu-item :index="item.path" v-else>
				<template #title>
					<el-icon>
						<component :is="item.icon" />
					</el-icon>
					<span>{{ item.title }}</span>
				</template>
			</el-menu-item>
		</template>
	</el-menu>
</template>

<script setup lang="ts">
import { menuApi } from '@/api/menu'
import type { MenuConfigData } from '@/api/menu/menuClass'

const handleOpen = (key: string, keyPath: string[]) => {
	console.log('open...', key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log('close...', key, keyPath)
}

const menuData: MenuConfigData = await menuApi.listMenu.request({})

console.log('menu data = ', menuData)
</script>

<style scoped>
.el-menu {
	border: none;
	width: 100%;
}
</style>
