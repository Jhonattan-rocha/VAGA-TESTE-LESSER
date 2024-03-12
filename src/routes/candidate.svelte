<script lang="ts">
    import { onDestroy } from 'svelte';
    import { message, openModal, name, phone, email } from '../store';
    onDestroy(() => openModal.set(false));
</script>

  <main>
    <h1>Candidate Page</h1>

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
  
    <div class="absolute top-0 right-0 m-4">
      <a href="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Challenge Page
        </button>
      </a>
    </div>
  
    <p>Name: {$name}</p>
    <p>phone: {$phone}</p>
    <p>Email: {$email}</p>
  </main>
  