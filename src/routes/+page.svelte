<script context="module" lang="ts">
</script>
<style global>
    @import '../global.css';
</style>
<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  import CandidatePage from '../routes/Candidate.svelte';
  import { onMount } from 'svelte';
  import { message, openModal, showCandidatePage, name, email, phone } from '../store';
 
  let countdown = 15;
  let countdownInterval: number;

  const startChallenge = () => {
    showCandidatePage.set(true);

    countdownInterval = setInterval(() => {
      countdown -= 1;
      if (countdown === 0) {
        clearInterval(countdownInterval);
        message.set('Challenge failed to complete!');
        openModal.set(true);
      }
    }, 1000);
  };

  const submitChallenge = () => {
    clearInterval(countdownInterval);
    message.set('Challenge successfully completed!');
    openModal.set(true);
  };

  onMount(() => {
    return () => clearInterval(countdownInterval);
  });
</script>

<Router>
  <Route path="/candidate" component={CandidatePage} />
</Router>

<main>
  {#if $showCandidatePage}
    <div class="absolute top-0 right-0 m-4">
      <a href="/candidate">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Candidate Page
        </button>
      </a>
    </div>
  {/if}

  <h1>Challenge Page</h1>

  {#if $openModal}
    <div class="modal" class:modal-open={$openModal}>
      <div class="modal-box">
        <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
        <p class="py-4">{$message}</p>
        <div class="modal-action">
          <!-- 🔵 set false on click -->
          <button class="btn" on:click={()=>{openModal.set(false)}}>Fechar</button>
        </div>
      </div>
    </div>
  {/if}

  {#if $showCandidatePage}
    <p>Countdown: {Math.floor(countdown / 60)}:{countdown % 60 < 10 ? `0${countdown % 60}` : countdown % 60}</p>
    <button on:click={submitChallenge}>Enviar</button>
  {:else}
    <form>
      <label for="name">Nome:</label>
      <input type="text" id="name" name="name" bind:value={$name} />

      <label for="phone">Telefone:</label>
      <input type="tel" id="phone" name="phone" bind:value={$phone} />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" bind:value={$email} />

      <button on:click={startChallenge}>Iniciar Desafio</button>
    </form>
  {/if}
</main>
