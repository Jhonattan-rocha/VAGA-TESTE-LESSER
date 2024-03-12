<script context="module" lang="ts">
  import { DaisyUI } from 'daisyui/svelte';
  export const { createModal } = DaisyUI;
</script>
<style global>
    @import './global.css';
</style>
<script lang="ts">
  import { onMount } from 'svelte';

  let showCandidatePage = false;
  let countdown = 15;
  let countdownInterval: number;

  const startChallenge = () => {
    showCandidatePage = true;

    countdownInterval = setInterval(() => {
      countdown -= 1;
      if (countdown === 0) {
        clearInterval(countdownInterval);
        createModal('Desafio finalizado com falha!');
      }
    }, 1000);
  };

  const submitChallenge = () => {
    clearInterval(countdownInterval);
    createModal('Desafio finalizado com sucesso!');
  };

  onMount(() => {
    return () => clearInterval(countdownInterval);
  });
</script>

<main>
  {#if showCandidatePage}
    <div class="absolute top-0 right-0 m-4">
      <a href="/candidate">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Candidate Page
        </button>
      </a>
    </div>
  {/if}

  <h1>Challenge Page</h1>

  {#if showCandidatePage}
    <p>Countdown: {Math.floor(countdown / 60)}:{countdown % 60 < 10 ? `0${countdown % 60}` : countdown % 60}</p>
    <button on:click={submitChallenge}>Enviar</button>
  {:else}
    <form>
      <label for="name">Nome:</label>
      <input type="text" id="name" name="name" />

      <label for="phone">Telefone:</label>
      <input type="tel" id="phone" name="phone" />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />

      <button on:click={startChallenge}>Iniciar Desafio</button>
    </form>
  {/if}
</main>
