document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);

    document.addEventListener('click', (e) => {
     console.log('clicked');
    if (e.target.classList.contains('bar')) {
    const clickedDay = e.target.getAttribute('data-day');
    console.log('Clicked day:', clickedDay);
    const dayData = data.find(item => item.day === clickedDay);
    console.log(dayData);
    
    if (dayData) {
    const amount = parseFloat(dayData.amount);
    console.log(amount);
                    
    if (!isNaN(amount)) {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
    tooltip.style.display = 'none';
    });
    const dayTooltip = document.querySelector(`.tooltip[data-day="${clickedDay}"]`);
    console.log(`.tooltip[data-day="${clickedDay}"]`);
    console.log(dayTooltip, amount);
    if (dayTooltip) {
    dayTooltip.innerHTML = `$${amount}`;
    dayTooltip.style.display = 'block';
   }
  } 
 }
} 
});
});
})








// const wed = document.getElementById('wed');
// const thur = document.getElementById('thur');
// const spanWed = document.querySelector('.wed');
// const spanThur = document.querySelector('.thur');

// wed.addEventListener('click', () => {
//     if (spanWed.style.display === 'none') {
//         spanWed.classList.add('wed');
//         spanWed.style.display = 'block';
//     }  else {
//         spanWed.style.display = 'none';
//     }
// });

// thur.addEventListener('click', () => {
//     if (spanThur.style.display === 'none') {
//         spanThur.classList.add('thur');
//         spanThur.style.display = 'block';
//     }  else {
//         spanThur.style.display = 'none';
//     }
// });
