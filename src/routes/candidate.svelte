<script context="module" lang="ts">
    import { DaisyUI } from 'daisyui/svelte';
    export const { createModal } = DaisyUI;
  </script>
  
  <script lang="ts">
    import { onDestroy } from 'svelte';
  
    onDestroy(() => {
      createModal.close();
    });
  </script>
  
  <main>
    <h1>Candidate Page</h1>
  
    <div class="absolute top-0 right-0 m-4">
      <a href="/">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Challenge Page
        </button>
      </a>
    </div>
  
    <p>Nome: {localStorage.getItem('name')}</p>
    <p>Telefone: {localStorage.getItem('phone')}</p>
    <p>Email: {localStorage.getItem('email')}</p>
  </main>
  