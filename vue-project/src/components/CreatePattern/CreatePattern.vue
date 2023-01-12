<script>

export default {
    name: 'Createpattern',
    data() {
        return {
            ajouter: false,
            pattern: {
                titre: "",
                elements: [],
            },
            elements: [],
            titreNull : false,
        }
    },
    methods: {
        ajouterPattern() {
            this.ajouter = true;
        },
        annuler() {
            this.ajouter = false;
            this.pattern.titre = "";
            this.pattern.elements = [];
            this.elements =  [],
            this.titreNull = false
        },
        addElement() {
            this.elements.push({ value: '' });
        },
        sauvegarder() {
            if (this.pattern.titre != "") {
                this.elements.forEach(element => {
                    if (element.value != "") {
                        this.pattern.elements.push(element.value);
                    }
                });
                localStorage.setItem(this.pattern.titre, JSON.stringify(this.pattern));
                this.ajouter = false;
                window.location.reload();
            }else{
                this.titreNull = true;
            }     
        },
    }
}
</script>

<template>
    <div>
        <button @click="ajouterPattern">Ajouter un pattern</button>
        <div v-if="ajouter">
            <div v-if="!this.titreNull" class="center input-titre">
                <label for="title">Titre :</label><br>
                <input type="text" id="title" v-model="pattern.titre"
                placeholder="BlaBla" size="50">
            </div>
            <div v-if="this.titreNull" class="center input-titre">
                <label for="title">Titre :</label><br>
                <input type="text" style="border-color:red;" id="title" v-model="pattern.titre"
                placeholder="BlaBla" size="50"><br>
                <p>ce champ est obligatoire</p>
            </div>

            
            <div style="width: 80%, margin-left:20%;" class="border-B-2-S" v-for="(element, index) in elements">
                <p>Pattern {{ index+ 1}} :</p>
                <div>
                    <label for="content">Contenu :</label><br>
                    <textarea type="text" v-model="element.value" id="content"
                        placeholder="veuillez ajouter un élement à votre pattern" style="width: 50%;"></textarea>
                </div>
            </div>
            <button @click="addElement">Ajouter un élément</button>
            <button @click="annuler">Annuler</button>
            <button @click="sauvegarder">Enregistrer</button>
        </div>
    </div>
</template>

<style scoped>
.input-titre{
    margin-top: 20px;
}
</style>