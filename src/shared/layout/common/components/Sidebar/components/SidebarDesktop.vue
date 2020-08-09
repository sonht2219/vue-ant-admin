<template>
    <a-layout-sider v-model="_collapsed"
                    :trigger="null"
                    collapsible
                    width="208"
                    class="sider-menu-custom">
        <sidebar-content :visible-title="visibleTitle" />
    </a-layout-sider>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import SidebarContent from "./SidebarContent.vue";

    @Component({
        name: 'SidebarDesktop',
        components: { SidebarContent }
    })
    export default class extends Vue {
        @Prop({ required: true })
        private collapsed!: boolean;

        get _collapsed(): boolean {
            return this.collapsed;
        }

        get visibleTitle(): boolean {
            return !this.collapsed;
        }
    }
</script>

<style scoped>

</style>
