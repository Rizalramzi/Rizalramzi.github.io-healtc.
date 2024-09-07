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


  document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen a#konten
    const scrollToContentLink = document.querySelector('a[href="#konten"]');

    // Fungsi untuk melakukan smooth scroll
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Event listener untuk klik pada elemen a#konten
    scrollToContentLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah tindakan default link
        const targetId = this.getAttribute('href');
        smoothScroll(targetId);
    });
});
  

document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const comments = document.querySelectorAll('.comment');
  const totalComments = comments.length;

  document.getElementById('nextBtn').addEventListener('click', () => {
    comments[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % totalComments;
    comments[currentIndex].classList.remove('hidden');
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    comments[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex - 1 + totalComments) % totalComments;
    comments[currentIndex].classList.remove('hidden');
  });
});
