<template>
    <a-layout-header style="background: #fff; padding: 0">
        <a href="/" v-show="device === deviceType.Mobile">
            <span class="header-logo">
                <img src="../../../../assets/images/logo-ant.svg" alt="logo">
            </span>
        </a>
        <hamburger :is-active="sidebar.opened" @toggleClick="toggleSidebar"/>
    </a-layout-header>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import { Hamburger } from "../../../components";
    import {AppModule} from "@/store/modules/app";
    import {DeviceType} from "@/enums/type";

    @Component({
        name: 'Navbar',
        components: {Hamburger}
    })
    export default class extends Vue {
        private deviceType = DeviceType;
        get sidebar() {
            return AppModule.sidebar;
        }
        get device() {
            return AppModule.device;
        }
        private toggleSidebar() {
            AppModule.ToggleSidebar();
        }

    }
</script>

<style lang="scss" scoped>

</style>
