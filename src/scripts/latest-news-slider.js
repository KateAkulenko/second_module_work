function latestNews () {
  const DOMlatestNewsSlider = document.getElementById("js-latest-news-slider");

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
      .then(response => response.json())
      .then(posts => {
          posts.forEach(post => {
              const latestNewsSlider = document.createElement('div');
              latestNewsSlider.classList.add("swiper-slide");
              latestNewsSlider.classList.add("latest-news-slider__slide");
              const postItem = document.createElement('div');
              postItem.classList.add("posts__item");
              postItem.innerHTML = `<img class="posts__img" src="${post.img || "./assets/img/grid-2.png"}"></img><h2 class="posts__title">${post.title}</h2><p class="posts__body">${post.body}</p>`;
              latestNewsSlider.appendChild(postItem);
              DOMlatestNewsSlider.appendChild(latestNewsSlider);
          });
          new Swiper(".latest-news-slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode: true,
            breakpoints: {
              758: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              999: {
                slidesPerView: 3,
                spaceBetween: 30
              },
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
};

export default latestNews;

