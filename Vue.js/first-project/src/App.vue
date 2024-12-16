<template>
    <h1 :class="etat ? 'rouge' : 'bleu'">
        Je suis un titre {{ etat ? "rouge" : "bleu" }}
    </h1>
    <button @click="etat = !etat">Changer de couleur</button>
    <button v-on:click="increment">Le compte est: {{ compte }}</button>
    <div @click="resetCompte" style="cursor: pointer">
        Retablir le compte a 0
    </div>
    <p>{{ text }}</p>
    <input v-model="text" :placeholder="placeholder" />
    <h2>Nom Prenom</h2>
    <input v-model="info.nom" placeholder="Entrez votre nom" />
    <input v-model="info.prenom" placeholder="Entrez votre prenom" />
    <button @click="console.log(info.nom, info.prenom)">
        Envoyer les informations
    </button>
</template>

<script setup>
import { reactive, ref } from "vue";

const compte = ref(0);
const etat = ref(true);
const text = ref("");
const placeholder = ref("Entrez du texte");

const info = reactive({
    npm: "",
    prenom: "",
});

function increment() {
    compte.value++;
}

const resetCompte = () => {
    compte.value = 0;
};
</script>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

.rouge {
    color: red;
}

.bleu {
    color: blue;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
