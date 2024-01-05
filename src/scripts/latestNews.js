document.addEventListener("DOMContentLoaded", function () {
  const mainDiv = document.getElementById("js-item");

  fetch('./../../src/assets/posts.json')
      .then(response => response.json())
      .then(posts => {
          posts.forEach(post => {
              const postElement = document.createElement('div');
              postElement.classList.add("swiper-slide");
              postElement.classList.add("swiperNews__slide");
              const postItem = document.createElement('div');
              postItem.classList.add("posts__item");
              postItem.innerHTML = `<img class="post__img" src="${post.img}"></img><h2 class="post__title">${post.title}</h2><p class="post__body">${post.body}</p>`;
              postElement.appendChild(postItem);
              mainDiv.appendChild(postElement);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
});

  const swiperNews = new Swiper(".swiperNews", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

