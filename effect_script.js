//finding the children elements of body
const elements = document.body.children;
// console.log(elements)
// elements[0] is "main" named elements

const childElements = elements[0];

//finding "main" elements children
const mainElemets = childElements.children;

// finding length of "main" element
// console.log(mainElemets.length);

// const delay=mainElemets.length/5;
// console.log(delay);

const a = mainElemets[1];
// console.log(jokeContentSectionElements.children);
console.log(a);

const jokeContentSection = document.querySelector('.jokeContentSection');
window.addEventListener('load', () => {
   for (let i = 0; i < mainElemets.length; i++) {
      mainElemets[i].style.animation = `body-active ${
         1 + i / 3
      }s ease-in-out forwards`;
      //   a[i].style.animation = `body-active 1s ease-in-out forwards ${i/4}s`; //optional --last value is delay
      a.children[i].style.animation = `body-active ${
         1 + i / 2
      }s ease-in-out forwards`;
   }
});
