const generateJokeBtn = document.querySelector('.generateJokeBtn');

generateJokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {
    const url = 'https://icanhazdadjoke.com/';
    const setHeader = {
        headers: {
           Accept: 'application/json',
        },
     };
   try {
      const response = await fetch(url,setHeader);
      const responseData = await response.json();
      const jokeLine = document.querySelector('.jokeLine');
      jokeLine.insertAdjacentHTML('afterbegin', responseData.joke);
   } catch (error) {
      console.log(`error is ${error}`);
   }
}
generateJoke();
