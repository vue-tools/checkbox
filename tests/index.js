import Vue from 'vue'
import  Checkbox  from '../src'
import { expect } from 'chai'


describe('vt-checkbox', () => {
    it('checkbox default', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <Checkbox>input checkbox</Checkbox>    
                )
            },
            mounted(){
                console.log('x')
            },
            components: {
                Checkbox
            }
        }).$mount()
        console.log(vm.$el)
        let input = vm.$el.querySelector('.ui-checkbox__input')
        expect(vm.$el.classList.contains('ui-checkbox')).to.equal(true)
        expect(!!input).to.equal(true)
        expect(input.disabled).to.equal(false)
        expect(input.checked).to.equal(false)
        expect(vm.$el.querySelector('.ui-checkbox__label').innerHTML).to.equal('input checkbox')
    })
    it('checkbox disabled', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <Checkbox disabled>input checkbox</Checkbox>
                )
            },
            components: {
                Checkbox
            }
        }).$mount()
        expect(vm.$el.classList.contains('ui-checkbox')).to.equal(true)
        expect(vm.$el.querySelector('.ui-checkbox__input').disabled).to.equal(true)
    })
    it('checkbox checked', () => {
        let vm = new Vue({
            render(h) {
                return (
                    <Checkbox v-model="v"></Checkbox>
                )
            },
            data() {
                return {
                    v: true
                }
            },
            components: {
                Checkbox
            }
        }).$mount()

        let input = vm.$el.querySelector('.ui-checkbox__input')
        expect(vm.$el.classList.contains('ui-checkbox')).to.equal(true)
        expect(input.checked).to.equal(false)
    })
})
