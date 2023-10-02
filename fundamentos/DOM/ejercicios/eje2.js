const containerButons = document.querySelectorAll('button');

containerButons.forEach( (button) => {
    button.addEventListener('click', () => {alert([button.id , " como estas"])});
});