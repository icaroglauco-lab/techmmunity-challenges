<script lang="ts">
import { onMount } from "svelte";


   let screen = '';

   // Numeros mapping
   const BNumeros = new Array(10).fill(null)
      .map((d, index) => index)
      .reverse()

   // Operations mapping
   const Opts = [
      {
         label: "<",
         operation: () => {
            const f = Array.from(screen);
            f.pop();
            screen = f.join('')
         }
      },
      {
         label: "+",
         operation: () => screen += '+'
      },
      {
         label: "-",
         operation: () => screen += '-'
      },
      {
         label: "x",
         operation: () => screen += '*'
      },
      {
         label: "/",
         operation: () => screen += '/'
      },
      {
         label: "=",
         operation: () => screen = (eval(screen)).toString()
      },
      
   ]

   // on input for input element
   const inputNumber = (number:number) => () => screen += number.toString()

   // key input layer
   let binddedWrapper = null;
   let optsForKeyInput = [...
      Opts.map(obj => 
         [obj.label, obj.operation]
      ),
      ...BNumeros.map( n => [n.toString(), inputNumber(n)])
   ];
   onMount(() => {
      window.addEventListener('keypress', (event) => {
         const d = optsForKeyInput.find(opt => opt[0] === event.key);
         if(d)
            d[1]();
      })
   })

</script>

<div class="out-wrapper">
   <div class="wrapper" bind:this={binddedWrapper}>
      <input type="text" bind:value={screen}>
      
      <div class="botoes">
         <div class="numeros">
            {#each BNumeros as Numero}
               <div class="numero botao" on:click={inputNumber(Numero)} data-n={Numero}><span>{Numero}</span></div>
            {/each}
         </div>
         <div class="operacoes">
            {#each Opts as opt}
               <div class="op botao" on:click={opt.operation}><span>{opt.label}</span></div>
            {/each}
         </div>
      </div>
   </div>
</div>

<style lang="sass">
   @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap')
   $botao-bg: #ddd

   .out-wrapper
      padding: 0.5rem
      display: inline-block
      background-color: #555e62

   .wrapper
      width: 14rem

      input
         width: 13.6rem
         text-align: end
         font-size: 14pt
         height: 2rem
         font-family: 'Merriweather', serif
      .botoes
         display: grid
         grid-template-columns: 12rem auto

         .numeros
            display: grid
            grid-template-columns: 33% 33% 33%
            grid-template-rows: 25% 25% 25% 25%
            .botao
               width: 100% 
               height: calc(100% - 2px)
            .botao[data-n="0"]
               width: 300%
         .operacoes
            align-items: end
            display: flex
            flex-direction: column  
      
   
      .botao
         width: 2rem
         height: 2rem
         justify-content: center
         align-content: center
         display: flex
         text-align: center
         line-height: 2rem
         flex-basis: 33%
         background-color: $botao-bg
         border: 1px solid darken($botao-bg, 30%)
         cursor: pointer
         align-items: center
         &:hover
            background-color: lighten($botao-bg, 5%)
</style>