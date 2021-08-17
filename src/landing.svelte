<script lang="ts">
  import {areAnagrams} from './lib/areAnagrams';
  import {secondsToMinutes} from './lib/secondsToMinutes';
  import {isPalindrome} from './lib/isPalindromo';
  import {ordenarCrescente, ordenarDecrescente} from './lib/crescentSort';
  import {getMoreUsedChar} from './lib/getMoreUsedChar'

  const arraySemiTests = [
    "Crie uma função que retorne a letra mais usada em uma string!",
    getMoreUsedChar("foo five ducks"),
    getMoreUsedChar("javascript python php"),
    getMoreUsedChar("a b c"),

    "Crie uma função que ordene números de um array! (crescente)",
    ordenarCrescente([60, 4, 25]),
    ordenarCrescente([100, 2, -1]),
    ordenarCrescente([1, 11, 2, 22, 3]),

    "Crie uma função que ordene números de um array! (decrescente)",
    ordenarDecrescente([60, 4, 25]),
    ordenarDecrescente([100, 2, -1]),
    ordenarDecrescente([1, 11, 2, 22, 3]),
    
    "Crie uma função que verifica se uma string é palíndroma!",
    isPalindrome("arara"),
    isPalindrome("douglas"),
    isPalindrome("reviver"),

    "// simpleTimeConverter prompt tests",
    secondsToMinutes(60),
    secondsToMinutes(110),
    secondsToMinutes(150),

    "// areAnagrams console prompt tests",
    areAnagrams("banana", "nabana"),
    areAnagrams("truck", "douglas"),
    areAnagrams("luz", "zul"),
  ]

  arraySemiTests.forEach(text => console.log(text));

</script>

<main>
  
</main> 