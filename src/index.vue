<style src="./style.css"></style>
<template src="./template.html"></template>
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
                    this.$emit('input', value)
                }
            }
        }
    }
</script>