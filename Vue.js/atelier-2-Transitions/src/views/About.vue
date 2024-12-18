<template>
	<div class="about">
		<Transition 
			appear
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
		>
			<h1 v-if="showTitle" class="font-mono text-xl font-semibold mb-4 p-2">A Propos</h1>
		</Transition>
		
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil, recusandae eligendi ratione exercitationem blanditiis laboriosam maxime, laborum labore porro inventore! Nemo quae et nihil est ab maiores saepe natus?</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis quidem maxime non doloremque officia eos veniam deserunt quis sit perferendis sequi fuga facilis sint quos quibusdam, dolor modi voluptate.</p>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus eum aliquam laborum ab praesentium rerum molestias quos voluptatibus harum sapiente dolore corporis, nemo magnam culpa eos voluptatum dignissimos odit porro.</p>
	</div>
</template>

<script setup>
import gsap from 'gsap';
import { ref } from 'vue';

const showTitle = ref(true);

const beforeEnter = e => {
	console.log('before enter', e);
	e.style.transform = 'translateY(-60px)';
	e.style.opacity = 0;
}

const enter = (e, done) => {
	console.log('enter');

	gsap.to(e, {
		duration: 1, 
		y: 0, 
		opacity: 1, 
		ease: 'bounce.out', 
		onComplete: done
	})
}

const afterEnter = e => {
	console.log('after enter');
}

</script>

<style>
.about {
	max-width: 600px;
	margin: 20px auto;
}
</style>