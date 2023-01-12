import { describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils'
import CreatePattern from './CreatePattern.vue'


describe('Test de la methode ajouter pattern', async () => {
  it('test initiale', () => {
    const wrapper = mount(CreatePattern)
    wrapper.vm.ajouterPattern();
    expect(wrapper.vm.ajouter).toEqual(true);
  })
})

describe('Test de la méthode annuler', async () => {
  it('test initiale', () => {
    const wrapper = mount(CreatePattern)
    wrapper.setData({
      ajouter : true,
      pattern:{
        titre : "titre",
        elements : ["element1","element2"]
      },
      elements : ["elements1","elements2"],
      titreNull : true,
    })
    wrapper.vm.annuler()
    expect(wrapper.vm.ajouter).toEqual(false),
    expect(wrapper.vm.pattern).toEqual({titre:"",elements:[]}),
    expect(wrapper.vm.elements).toEqual([]),
    expect(wrapper.vm.titreNull).toEqual(false)
  })
})

describe('Test de la méthode sauvegarder', async () => {
  it('test pattern.titre est vide', () => {
    const wrapper = mount(CreatePattern)
    wrapper.setData({
      pattern : {
        titre : ""
      }
    })
    wrapper.vm.sauvegarder();
    expect(wrapper.vm.titreNull).toBe(true)
  }),
  it('test pattern.titre non vide', () => {
    const wrapper = mount(CreatePattern);
    wrapper.setData({
      ajouter : true,
      pattern:{
        titre : "titre",
      },
      elements : [{value : "elements1"}, {value : "elements2"},{value : ""},{value : ""}]
    })

    wrapper.vm.sauvegarder()

    expect(wrapper.vm.pattern).toEqual({titre : "titre", elements : ["elements1","elements2"]})


  })
})

