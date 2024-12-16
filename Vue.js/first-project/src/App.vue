<template>
    <h1 v-bind:class="classTitre">Je suis un titre {{ classTitre }}</h1>
    <button @click="toggleColor">Changer de couleur</button>
    <button v-on:click="increment">Le compte est: {{ compte }}</button>
    <div @click="resetCompte" style="cursor: pointer">
        Retablir le compte a 0
    </div>
</template>

<script setup>
import { ref } from "vue";

const compte = ref(0);
const classTitre = ref("rouge");
let etat = true;

const toggleColor = () => {
    if (etat) {
        classTitre.value = "bleu";
    } else {
        classTitre.value = "rouge";
    }
    etat = !etat;
};

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
