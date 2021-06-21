document.title = 'My first (dynamic) webpage';

const then = document.querySelector('h2');

const now = document.querySelectorAll('h2')[1];

console.log(document.querySelectorAll('h2'))

then.addEventListener('click', () => {
    alert('The Beatles (January 13, 1969)')
});

now.addEventListener('click', () => {
    alert('Carly Rae Jepsen (March 1, 2012)')
});