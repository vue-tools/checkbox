# vt-checkbox

基于 vue 2 封装出的 checkbox 组件，提供了基本的样式和事件。

[demo](https://vue-tools.github.io/vt-checkbox/#/readme)

## Install

```javascript
npm i vt-checkbox -S

import Checkbox from 'vt-checkbox'

// global install
Vue.component('Checkbox', Checkbox)

// scope install
export default {
    components: {
        Checkbox
    }
}
```

## Usage

```example
<template>
  <div class="ui-checkbox__wrapper">
    <Checkbox disabled v-model="selected">input checkbox</Checkbox>    
    <Checkbox v-model="checked">input checkbox</Checkbox>    
  </div>
</template>
<script>
  import Checkbox from 'vt-checkbox'
  
  export default {
    data() {
      return {
        selected: true,
        checked: false
      }
    },
    mounted() {
      setTimeout(_ => { 
        this.checked = true 
        this.selected = false
      }, 1000)
    }, 
    components: {
      Checkbox
    }  
  }
</script>
```

## Interface

```interface
props:
  v-model:
    type: Boolean
    default: false
    description: 是否选中， 支持双向绑定
  disabled:
    type: Boolean
    default: false
    description: 是否置灰按钮
slots:
  default:
    description: 复选框文本描述
```