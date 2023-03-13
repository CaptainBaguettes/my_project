import { describe, it, expect, vi, beforeEach} from 'vitest'
import { mount } from '@vue/test-utils'
import getAllPattern from './GetAllPattern.vue'

let wrapper;

beforeEach(() =>{
  wrapper = mount(getAllPattern)
})


describe('Test de la methode getAllPattern', async () => {
  it('test initiale', () => {
    wrapper.vm.getAllPatterns();
  })
})

