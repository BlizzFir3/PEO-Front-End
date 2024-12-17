<template>
  <Formulaire @envoyerFormulaire="handleFormulaire" />
</template>

<script setup>
import Formulaire from "./components/Formulaire.vue";

// Fonction pour gérer l'événement et loguer les données
const handleFormulaire = (payload) => {
  console.log("Données du formulaire :", payload);
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
