<template>
    <a-layout-sider v-model="collapsed"
                    :trigger="null"
                    collapsible
                    width="208"
                    class="sider-menu-custom">
        <sidebar-content />
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
    }
</script>

<style scoped>

</style>
