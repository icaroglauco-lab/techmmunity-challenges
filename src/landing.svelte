<script lang="ts">
  import Navigation from './navigation.svelte';

  // Runtime imports
  import { Router, Route } from "svelte-navigator";
  // Components imports
  import FnsGerais from "./lib/fnsGerais.svelte";
  import Calculadora from './lib/calculadora.svelte';


  const uiChallengesRouteStruct = [
    {
      "link text": 'Calculadora UI',
      path: '/calculadora',
      component: Calculadora
    },
    {
      "link text": "Funções Gerais",
      path: '/fns',
      component: FnsGerais
    }
  ]


</script>

<Router>
  <Navigation uiChallengesRouteStruct={uiChallengesRouteStruct}/>

  <main>
    {#each uiChallengesRouteStruct as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </main>

</Router>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap')
  :global(body *)
    font-family: 'Roboto', sans-serif


  main
    padding: 2rem

</style>