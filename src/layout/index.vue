<template>
	<el-container class="container max-w-full">
		<el-aside width="200px" class="h-full fixed left-0 top-0 shadow">
			<SidebarMenu />
		</el-aside>
		<el-main class="flex-1 ml-52 w-full">
			<RouterView />
		</el-main>
	</el-container>
</template>

<script setup lang="ts">
import SidebarMenu from '../components/layout/SidebarMenu.vue'
</script>
