<template>
    <a-icon
            class="trigger"
            :type="isActive ? 'menu-fold' : 'menu-unfold'"
            @click="toggleClick"
    />
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        name: 'Hamburger'
    })
    export default class Hamburger extends Vue {
        @Prop({ default: false})
        private isActive!: boolean;

        private toggleClick() {
            this.$emit('toggleClick')
        }
    }
</script>

<style scoped>

</style>
