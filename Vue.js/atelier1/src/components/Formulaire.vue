<template>
    <form
        @submit.prevent="submitForm"
        class="card bg-base-100 w-96 shadow-xl flex flex-col">
        <!-- Nom -->
        <input
            type="text"
            v-model="formData.nom"
            placeholder="Nom"
            class="input input-bordered w-full max-w-xs m-4"
            :class="{ 'border-red-500': errors.nom && submitted }" />
        <p v-if="errors.nom && submitted" class="text-red-500 text-sm m-1">
            {{ errors.nom }}
        </p>

        <!-- Prénom -->
        <input
            type="text"
            v-model="formData.prenom"
            placeholder="Prénom"
            class="input input-bordered w-full max-w-xs m-4"
            :class="{ 'border-red-500': errors.prenom && submitted }" />
        <p v-if="errors.prenom && submitted" class="text-red-500 text-sm m-1">
            {{ errors.prenom }}
        </p>

        <!-- Email -->
        <input
            type="email"
            v-model="formData.email"
            placeholder="Adresse e-mail"
            class="input input-bordered w-full max-w-xs m-4"
            :class="{ 'border-red-500': errors.email && submitted }" />
        <p v-if="errors.email && submitted" class="text-red-500 text-sm m-1">
            {{ errors.email }}
        </p>

        <!-- Mot de passe -->
        <input
            type="password"
            v-model="formData.password"
            placeholder="Mot de passe"
            class="input input-bordered w-full max-w-xs m-4"
            :class="{ 'border-red-500': errors.password && submitted }" />
        <p v-if="errors.password && submitted" class="text-red-500 text-sm m-1">
            {{ errors.password }}
        </p>

        <!-- Bouton Désactivé en cas d'erreurs -->
        <button
            type="submit"
            class="btn btn-outline btn-primary m-4 w-full max-w-xs"
            :disabled="hasErrors && submitted">
            S'inscrire
        </button>
		<img src="" alt="">
    </form>
</template>

<script setup>
import { reactive, ref, computed } from "vue";

// Émetteur d'événements
const emit = defineEmits(["envoyerFormulaire"]);

// État de soumission
const submitted = ref(false);

// Données du formulaire
const formData = reactive({
    nom: "",
    prenom: "",
    email: "",
    password: "",
});

// Gestion des erreurs
const errors = reactive({
    nom: "",
    prenom: "",
    email: "",
    password: "",
});

// Vérifier les erreurs dans les champs
const validateForm = () => {
    errors.nom = formData.nom.trim() ? "" : "Le nom est obligatoire.";
    errors.prenom = formData.prenom.trim() ? "" : "Le prénom est obligatoire.";
    errors.email = formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        ? ""
        : "L'adresse e-mail est invalide.";
    errors.password =
        formData.password.length >= 6
            ? ""
            : "Le mot de passe doit contenir au moins 6 caractères.";
};

// Indiquer si des erreurs existent (en permanence afficher)
const hasErrors = computed(() => {
    validateForm();
    return Object.values(errors).some((error) => error !== "");
});

// Soumission du formulaire
const submitForm = () => {
    submitted.value = true; // Activer l'affichage des erreurs
    validateForm();
    if (!hasErrors.value) {
        emit("envoyerFormulaire", { ...formData }); // Émet les données
        formData.nom = "";
        formData.prenom = "";
        formData.email = "";
        formData.password = "";
        submitted.value = false; // Désactiver l'affichage des erreurs
    }
};
</script>

<style scoped>
.border-red-500 {
    border-color: red;
}
</style>
