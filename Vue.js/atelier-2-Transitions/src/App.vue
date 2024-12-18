<template>
    <nav class="navbar bg-primary text-primary-content">
        <RouterLink to="/" class="btn btn-ghost text-xl">Home</RouterLink>
        <RouterLink to="/about" class="btn btn-ghost text-xl ml-4"
            >About</RouterLink
        >
        <RouterLink to="/contact" class="btn btn-ghost text-xl ml-4"
            >Contact</RouterLink
        >
    </nav>
    <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
        <router-view />
    </transition>
</template>

<script>
import gsap from "gsap";

export default {
    data() {
        return {
            fromPath: null, // Stocke le chemin de la route précédente
        };
    },
    watch: {
        // Surveille les changements de route
        $route(to, from) {
            this.fromPath = from.path || null;
        },
    },
    methods: {
        beforeEnter(el) {
            // Définir la position initiale en fonction de la direction
            const direction = this.getDirection();
            gsap.set(el, { x: direction === "right" ? "100%" : "-100%" });
        },
        enter(el, done) {
            // Animer l'entrée de la nouvelle page
            gsap.to(el, {
                x: "0%",
                duration: 0.5,
                ease: "power2.out",
                onComplete: done,
            });
        },
        leave(el, done) {
            // Animer la sortie de la page actuelle
            const direction = this.getDirection();
            gsap.to(el, {
                x: direction === "right" ? "-100%" : "100%",
                duration: 0.5,
                ease: "power2.in",
                onComplete: done,
            });
        },
        getDirection() {
            // Détermine la direction de la transition
            const routes = this.$router.options.routes;
            const fromIndex = routes.findIndex(
                (route) => route.path === this.fromPath
            );
            const toIndex = routes.findIndex(
                (route) => route.path === this.$route.path
            );
            return toIndex > fromIndex ? "right" : "left";
        },
    },
    mounted() {
        // Initialisation du chemin précédent lors du chargement initial
        this.fromPath = this.$route.path;
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
