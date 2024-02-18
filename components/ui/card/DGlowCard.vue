<template>
    <div ref="card" class="card" :class="{'fill-height': fillHeight}">
        <div class="card__container">
            <slot />
        </div>
    </div>
</template>


<script setup lang="ts">
import {ref, computed, withDefaults} from 'vue'
import {useMouseInElement} from '@vueuse/core'
import type {DGlowCardProps} from '~/contracts/components/ui/card/DGlowCardProps'


// variables
withDefaults(defineProps<DGlowCardProps>(), {
    fillHeight: false
})

const card = ref<HTMLElement | null>(null)
const {elementX, elementY} = useMouseInElement(card)


// computed properties
const x = computed<string>(() => elementX.value + 'px')
const y = computed<string>(() => elementY.value + 'px')
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    background: rgb(var(--v-theme-secondary));
    border-radius: map-get($border-radius, 'lg');
    overflow: hidden;
    padding: 2px;
    inset: -2px;
    z-index: 1;

    &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background: radial-gradient(250px circle at v-bind(x) v-bind(y), rgb(var(--v-theme-primary)) 0, transparent 100%);
        will-change: background;
        content: '';
        z-index: -1;
        inset: -2px;
    }

    &__container {
        padding: 16px;
        background: rgba(var(--v-theme-surface), 0.82);
        border-radius: map-get($border-radius, 'mdp');
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }
}
</style>
