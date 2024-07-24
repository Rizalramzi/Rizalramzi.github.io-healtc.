document.addEventListener('DOMContentLoaded', (event) => {
  const buttontoggle = document.querySelector('.buttontoggle');
  const navmobile = document.querySelector('.navmobile');

  buttontoggle.addEventListener('click', function(){
    navmobile.classList.toggle('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('h1[data-target]');
    const speed = 250;
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  });

  