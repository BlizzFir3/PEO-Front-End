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
    <h3 v-show="affichage">Je reste dans le DOM meme cacher</h3>
    <h3 v-if="test">{{ test.compte }}</h3>

    <h2>Rendu listes</h2>
    <form @submit.prevent="ajouterTache">
        <input v-model="tache" required placeholder="Nouvelle Tache" />
        <button>Ajouter une tache</button>
    </form>
    <ul>
        <li v-for="(todo, index) in todoList" :key="todo.id">
            id : {{ todo.id }} | {{ todo.texte }} |
            <button @click="removeByIndex(index)">X</button>
        </li>
    </ul>
</template>

<script setup>
import { reactive, ref } from "vue";

const compte = ref(0);
const etat = ref(true);
const text = ref("");
const placeholder = ref("Entrez du texte");
const affichage = ref(true);
const tache = ref();

var id = 0;
const todoList = ref([
    { id: id++, texte: "Faire le lit" },
    { id: id++, texte: "Faire le peti dej" },
    { id: id++, texte: "Aller au travail" },
]);

const ajouterTache = () => {
    todoList.value.push({ id: id++, texte: tache.value });
    tache.value = "";
};

const removeByIndex = (index) => {
    const res = [];

    for (var i = 0; i < todoList.value.length; i++) {
        if (i != index) {
            res.push(todoList.value[i]);
        }
    }

    todoList.value = res;
};

const test = reactive({});

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
