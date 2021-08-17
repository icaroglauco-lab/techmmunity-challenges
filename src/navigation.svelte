<script lang="ts">
  // Runtime imports
  import { Link, useLocation } from "svelte-navigator";

  export let uiChallengesRouteStruct;

  const location = useLocation();


</script>

<nav>
    {#each uiChallengesRouteStruct as route}
      <Link to={route.path} class={$location.pathname === route.path ? 'active-link': ''}>{route["link text"]}</Link>
    {/each}
  </nav>

<style lang="sass">
  $navlink-bg-color: #eee
  $navlink-text-color: #222

  :global(nav a)
    text-decoration: none
    padding: 2px
    background-color: #eee
    color: $navlink-text-color
    margin-right: 15px

  :global(nav a.active-link)
    background-color: darken( $navlink-bg-color, 20%)

</style>

