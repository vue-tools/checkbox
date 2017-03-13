<style src="./style.css"></style>
<template>
    <label class="ui-checkbox">
    <input class="ui-checkbox__input" type="checkbox"
           v-model="checkable"
           :disabled="disabled">
    <span class="ui-checkbox__inner" :disabled="disabled" :checked="checkable"></span>
    <span class="ui-checkbox__label" :disabled="disabled" :checked="checkable"><slot></slot></span>
</label>
</template>
<script>
    export default {
        props: {
            value: Boolean,
            disabled: Boolean
        },
        computed: {
            checkable: {
                get(){
                    return this.value
                },
                set(value){
                    /* istanbul ignore next */
                    this.$emit('input', value)
                }
            }
        }
    }
</script>