<template>
    <a-drawer :placement="placement"
              :closable="false"
              :visible="_visible"
              @close="onClose"
              :body-style="bodyStyle"
              :drawer-style="drawerStyle"
              width="208"
    >
        <sidebar-content />
    </a-drawer>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from "vue-property-decorator";
    import SidebarContent from "./SidebarContent.vue";

    @Component({
        name: 'SidebarMobile',
        components: { SidebarContent }
    })
    export default class extends Vue {
        private placement = 'left';
        private bodyStyle = {
            padding: 0
        };

        private drawerStyle = {
            background: "#001529"
        };

        @Prop({ required: true })
        private visible!: boolean;

        get _visible() {
            return this.visible;
        }

        private onClose() {
            this.$emit('closeSidebar');
        }

    }
</script>

<style scoped>

</style>
