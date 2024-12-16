<template>
	<h1>Initiation</h1>
	<h2>Gestion d'evenements</h2>
    <h2 :class="etat ? 'rouge' : 'bleu'">
        Je suis un titre {{ etat ? "rouge" : "bleu" }}
    </h2>
    <button @click="etat = !etat">Changer de couleur</button>
    <button v-on:click="increment">Le compte est: {{ compte }}</button>
    <div @click="resetCompte" style="cursor: pointer">
        Retablir le compte a 0
    </div>
	<h2>Liaisons de champs</h2>
    <p>{{ text }}</p>
    <input v-model="text" :placeholder="placeholder" />
    <h2>Nom Prenom</h2>
    <input v-model="info.nom" placeholder="Entrez votre nom" />
    <input v-model="info.prenom" placeholder="Entrez votre prenom" />
    <button @click="console.log(info.nom, info.prenom)">
        Envoyer les informations
    </button>
	<h2>Manipulation du DOM</h2>
	<button @click="affichage = !affichage">Changer l'affichage</button>
	<h3 v-if="affichage">Je suis present dans le DOM</h3>
	<h3 v-else>Je suis l'autre qui apparait a sa place</h3>
</template>

<script setup>
import { reactive, ref } from "vue";

const compte = ref(0);
const etat = ref(true);
const text = ref("");
const placeholder = ref("Entrez du texte");
const affichage = ref(true);

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
