import { describe, it, expect, vi, beforeEach} from 'vitest'
import { mount } from '@vue/test-utils'
import getAllPattern from './GetAllPattern.vue'

let wrapper;

beforeEach(() =>{
    wrapper = mount(getAllPattern)
})


describe('Test de la methode ajouter pattern', async () => {
  it('test initiale', () => {
    wrapper.vm.ajouterPattern();
    expect(wrapper.vm.ajouter).toEqual(true);
  })
})

