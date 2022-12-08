import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'
import mockFetch from './mocks/mockFetch';

describe('Test de la methode concatenation', async () => {
  it('test concatenation non vide', () => {
    const wrapper = mount(App)
    const name = "jacquy";
    let result ;
    try {
      result = wrapper.vm.concatenation(name);
    } catch (error) {
      
    }
    expect(result).toEqual("Hello jacquy");
    
  })
  it('test concatenation vide', async () => {
    const wrapper = mount(App)
    const name2 = "";
    
    try {
      wrapper.vm.concatenation(name2);
    } catch (error) {
      return error;
    }
    expect((error).toThrow("test"));
  })
})

describe('Test de la methode getElement', async () => {
  it('cas passant', () => {
    const wrapper = mount(App)
    MockFetch = jest.spyOn(wrapper, 'fetch').mockImplementation(mockFetch);
  })
  it('test concatenation vide', async () => {
    const wrapper = mount(App)
    const name2 = "";
    
    try {
      wrapper.vm.concatenation(name2);
    } catch (error) {
      return error;
    }
    expect((error).toThrow("test"));
  })
})
