<template>
    <div class="contact">
        <TransitionGroup
            tag="ul"
            appear
            @before-enter="initIcons"
            @enter="enterIcons">
            <li v-for="(i, index) in icons" :key="i.name" :data-index="index" class="bg-neutral">
                <span class="material-icons">{{ i.name }}</span>
                <div>{{ i.text }}</div>
            </li>
        </TransitionGroup>
    </div>
</template>

<script setup>
import gsap from "gsap";
import { ref } from "vue";

const icons = ref([
    { name: "alternate_email", text: "par email" },
    { name: "local_phone", text: "par telephone" },
    { name: "local_post_office", text: "par poste" },
    { name: "local_fire_department", text: "par signaux de fumée" },
]);

const initIcons = (e) => {
    e.style.opacity = 0;
    e.style.transform = "translateY(100px)";
};

const enterIcons = (e) => {
    gsap.to(e, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        delay: 0.4 * e.dataset.index,
    });
};
</script>

<style>
.contact ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 400px;
    margin: 60px auto;
}

.contact li {
    list-style-type: none;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    line-height: 1.5em;
}
</style>
