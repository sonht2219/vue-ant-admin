<template>
    <div>
        <div class="sidebar-desktop">
            <sidebar-desktop v-if="device !== deviceType.Mobile" :collapsed="collapsed" />
        </div>
        <div class="sidebar-mobile">
            <sidebar-mobile v-if="device === deviceType.Mobile" :visible="visible" @closeSidebar="closeSidebar"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {AppModule} from "@/store/modules/app";
    import SidebarContent from "./components/SidebarContent.vue";
    import SidebarDesktop from "./components/SidebarDesktop.vue";
    import SidebarMobile from "./components/SidebarMobile.vue";
    import {DeviceType} from "@/enums/type";

    @Component({
        name: 'Sidebar',
        components: {SidebarMobile, SidebarDesktop, SidebarContent}
    })
    export default class extends Vue {
        private deviceType = DeviceType;

        get device() {
            return AppModule.device;
        }
        get sidebar() {
            return AppModule.sidebar;
        }
        get collapsed() {
            return !this.sidebar.opened;
        }
        get visible() {
            return this.sidebar.opened;
        }
        private closeSidebar() {
            AppModule.CloseSidebar();
        }
    }
</script>

<style lang="less" scoped>

</style>
