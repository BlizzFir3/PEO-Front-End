<template>
    <button v-on:click="increment">Le compte est: {{ compte }}</button>
    <div @click="resetCompte" style="cursor: pointer">
        Retablir le compte a 0
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const compte = ref(0);

        function increment() {
            compte.value++;
        }

        const resetCompte = () => {
            compte.value = 0;
        };

        return {
            compte,
            increment,
            resetCompte,
        };
    },
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
