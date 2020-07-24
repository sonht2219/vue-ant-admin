<template>
    <a-layout id="layout-main">
        <sidebar />
        <a-layout>
            <navbar />
            <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <app-content />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import {AppContent, Sidebar, Navbar} from "./components";
    import {mixins} from "vue-class-component";
    import {ResizeMixin} from "@/shared/services/mixin";
    import {AppModule} from "@/store/modules/app";
    import {DeviceType} from "@/enums/type";

    @Component({
        name: 'Layout',
        components: {Navbar, AppContent, Sidebar},
    })
    export default class extends mixins(ResizeMixin) {
        private deviceType = DeviceType;

        get device() {
            return AppModule.device;
        }
    }
</script>

<style lang="scss" scoped>

</style>
