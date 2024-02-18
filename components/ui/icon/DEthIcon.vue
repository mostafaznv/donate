<template>
    <svg xmlns="http://www.w3.org/2000/svg" class="text-surface-variant" fill="currentColor" viewBox="0 0 320 512" :width="width" :height="height">
        <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
    </svg>
</template>

<script lang="ts" setup>
import {withDefaults} from 'vue'
import type {DIconProps} from '~/contracts/components/ui/icon/DIconProps'


withDefaults(defineProps<DIconProps>(), {
    width: 42,
    height: 42
})
</script>
