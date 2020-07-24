<template>
    <div>
        <div class="sider-menu-logo" id="logo">
            <a href="/">
                <img src="../../../../assets/images/logo-ant.svg" alt="logo">
                <h1>Ant Design Pro</h1>
            </a>
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" style="padding: 16px 0px; width: 100%;">
            <a-menu-item key="1">
                <a-icon type="user" />
                <span>Dashboard</span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="video-camera" />
                <span>nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="upload" />
                <span>nav 3</span>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'SideBarContent'
    })
    export default class extends Vue {

    }
</script>

<style scoped>

</style>
