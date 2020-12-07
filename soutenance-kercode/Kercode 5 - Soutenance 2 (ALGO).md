# KERCODE 5 - Soutenance 2 (Algo)

Kata on CODEWARS - 

[TOC]

------



## Kyu 8

### Get Planet Name By ID 

Check the id and return the correct planet name.

```js
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      case 8:
        name = 'Neptune'
        break
        default:
            return 'Error!'
    }
    
    return name;
  }
```



------



### Invert Values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

```js
function invert(array) {
   return array.map( x => x === 0 ? x : -x); 
}
```

> la méthode **map** permet de vérifier si un élément est strictement égal à 0. Renvoie 0 ou l'inverse du nombre.



------



### Can We Divide It ?

Task is to create function`isDivideBy` to check if an integer number is divisible by each out of two arguments. Return True or False.

```js
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
```

> Fonction permettant de vérifier si "**Number**" est divisble par **a** ET **b** . Renvoie TRUE ou False car TRUE et TRUE = TRUE.
>



------



### Correct the mistakes of the character recognition software

Task is correct the errors in the digitised text.

```js
const corrections = { //Objet
  '5': 'S',
  '0': 'O',
  '1': 'I',
};

const correct = string => ( //Fonction anonyme - parametre = String
  string.replace(/[501]/g, character => corrections[character])
);
```

> Fonction prenant en paramètre une chaine de caractère. La méthode **replace()** permet de chercher une correspondance (Ici via un regex) et les remplacer par les valeurs d'un objet. L'accès aux valeur de l'objet se fait grâce à une fonction, la correspondance est prise pour argument (**character**), il représente ici la clé de l'objet et retourne ainsi la valeur correspondante.



### Multiples of index

Return a new array consisting of elements which are multiple of their own index in input array.

```js
function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}
```

> Retourne les éléments remplissant la condition : élément divisible par son index. le return de la méthode **filter()** est un tableau.
>



------



### Generate range of integers

Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

```js
function generateRange(min, max, step){
  let arr = [];
    
  for (let i=min; i<=max; i += step) {
    arr.push(i);
  }
  return arr;
}
```

> La boucle démarre avec la valeur de min, à chaque **fin** d'exécution de la boucle, **i** est incrémenté de la valeur de **step**, et la boucle se termine quand **i** est **égale** à max (<= et pas <).





## Kyu 7



### Coloured Triangles

You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string.

**MY SOLUTION** (with help)

```js
function triangle(row) {
  let rules = {
    R: ['BG', 'GB', 'RR'],
    B: ['RG', 'GR', 'BB'],
    G: ['BR', 'RB', 'GG']
  }

  let arr = row.split('')

  while(arr.length != 1){
  arr = arr.map((element, index, basic_arr) => 
    {
      if(basic_arr[index + 1] != undefined){
        for (const key in rules) {
           if(rules[key].includes(element + basic_arr[index + 1])) return key
        }
      }
    }
  )
  arr.splice(-1)
  }
  
  return arr.join()
}
```

> L'objet **rules{}** contient les correspondances.
>
> L'argument passé dans la fonction **triangle()** est une string. J'utilise la méthode **split()** afin d'avoir un tableau contenant chaque caractère.
>
> La boucle **while** s'exécute tant que la longueur du tableau est supérieur à 1. Cette valeur va évoluer car arr est modifié et prend la valeur de retour de **arr.map()**.
>
> **.map(element, index, tableau)** : Si l'index suivant du tableau existe (!= *undefined*) une boucle **for...in** est exécuté.
>
> **for...in** permet de boucler sur les propriétés d'un objet, et d'exécuter des instructions pour chaque propriété.
>
> Si la propriété contient (*include*) l'une des chaines de caractères alors la valeur de retour est cette propriété.
>
> **arr.splice(-1)** permet de supprimer le dernier élément afin d'éviter que la dernière lettre de *arr* soit retourner, sinon la longueur de *arr* ne changerais pas = *boucle infini*.
>
> Enfin le tableau est **join()** afin de retourner une *chaine de caractère*.



**CODEWARS SOLUTION**

```js
const triangle = row => {
  let reduced = row.length > 1 ? '' : row;
    
  for (let i = 0; i < row.length - 1; i += 1) {
    reduced += row[i] == row[i+1] ? row[i] : 'RGB'.replace(row[i], '').replace(row[i+1], '');
      
  }
  return reduced.length > 1 ? triangle(reduced) : reduced;
}
```

> Variable **reduced** = Si row.length > contient soit une **chaine de caractère vide** <u>OU</u> la valeur de **row**.
>
> boucle for : **i < row.length - 1** pour ne pas inclure une itération sur le dernier élément car ne peut comparé l'index suivant (*undefined*).
>
> La variable **reduced** est incrémenter selon une condition : 
>
> - Si *i et i+1 sont identique*, la valeur courante **row[i]** est ajouter à **reduced**
> - Sinon c'est la string **'RGB'** qui est modifier par replace des valeurs trouvés dans RGB selon i et i+1 par des chaine de caractères vide (suppression)  renvoyant donc la lettre restante.
>
> La fonction renvoi alors soit la valeur de **reduced si length <= 1** <u>OU</u> retourne la string **reduced en argument** de la fonction d'origine (*récursivité*).



## Kuy 6

### Decipher This





## Functions



### .map()

L'objet **`Map`** représente un dictionnaire, autrement dit une carte de clés/valeurs.

**Array.prototype.map**

Cette méthode crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

```js
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);
```

**Paramètres**

*callback*

Fonction utilisée pour créer un élément dans le tableau retourné. 

3 arguments :

- `valeurCourante`La valeur de l'élément du tableau à traiter.
- `index`(Facultatif) L'index de l'élément qui est traité par la fonction.
- `tableau`(Facultatif) Le tableau sur lequel on a appelé la méthode `map`.

- `thisArg` Facultatif

  La valeur à utiliser pour `this` lors de l'exécution de `callback`. La valeur par défaut est l'objet global de l'environnement (`Window` pour un navigateur).

**Return**

Un nouveau tableau composé des ***return*** de la fonction *callback*.



------

### .replace()

La méthode **replace** une nouvelle chaîne de caractères dans laquelle tout ou partie des correspondances à un *modèle* sont remplacées.

**Paramètres**

- `regexp` (modèle) Un objet ou un littéral RegExp. La ou les correspondances sont remplacées par `nouvSouschn` ou par la valeur retournée par la `fonction` indiquée. Toutes les occurrences avec /g.

- `souschn` (modèle) Une String qui est à remplacer par `nouvSouschn`. Elle est traitée comme une chaîne de caractères et elle n'est *pas* interprétée comme une expression régulière. Seule la première occurrence sera remplacée.

- `nouvSouschn` (remplacement) La String qui remplace la chaîne de caractères indiquée par le paramètre `regexp` ou `souschn`. Un certain nombre de modèles de remplacement spéciaux sont supportés.

- `fonction` (remplacement) Une fonction à appeler pour créer la nouvelle sous-chaîne de caractères à utiliser pour remplacer la `regexp` ou la `souschn` donnée. Les arguments passés à cette fonction seront   appelée après que la recherche est été effectuée. Le **return** sera utilisé comme chaîne de remplacement. Le premier paramètre est la correspondance trouvé.

  

------

### .filter()

Cette méthode retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction `callback`.

**Paramètres**

Fonction de test (ou *prédicat*) à appliquer à chaque élément du tableau. Cette fonction est appelée avec les arguments suivants :

- `elementCourant`

  L'élément à traiter

- `index`

  Son indice.

- `array`

  Le tableau complet

Cette fonction renvoie `true` — ou une valeur équivalente — si l'élément doit être conservé pour le tableau résultat et `false` dans le cas contraire.

- `thisArg` (Facultatif) Objet à utiliser en tant que `this` quand la fonction `callback` est exécutée.

  

------

