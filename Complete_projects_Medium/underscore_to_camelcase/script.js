const textArea = document.querySelector('.text-area');
const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', () => {
  toCamelCase(textArea.value);
});

//Functions

function toCamelCase(text) {
  const textArray = text.toLowerCase().replace(/\n/g, ' ').split(' ');
  console.log(textArray);

  const noSpaceArray = [];
  const noUnderScoreArray = [];

  for (const c of textArray) {
    if (c !== ' ' && c !== '') {
      noSpaceArray.push(c);
    }
  }
  for (const c of noSpaceArray) {
    if (c.includes('_')) {
      const [a, b] = c.split('_');
      b.length > 0
        ? noUnderScoreArray.push(a + b.replace(b[0], b[0].toUpperCase()))
        : console.log('Underscore as last character is not allowed');
    } else {
      console.log('Every string must contain an underscore!');
    }
  }

  if (noUnderScoreArray.length > 0) {
    const list = document.querySelector('.ul-closed');
    let listItem = {};

    for (const [i, word] of noUnderScoreArray.entries()) {
      listItem = document.createElement('li');
      const node = document.createTextNode(
        `${word + '✅'.repeat(i + 1).padStart(25, '.')}`
      );
      listItem.appendChild(node);
      list.appendChild(listItem);
    }
    list.classList.add('ul-open');
  }
}
