function gallery () {
  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const galleryContent = document.getElementById('js-gallery-content');

  seeMoreBtn.addEventListener('click', function () {
    const block = document.createElement('div');
    block.classList.add('gallery__block');
    block.classList.add('gallery__row');
    const divBig = document.createElement('div');
    const myImage = document.createElement("img");
    myImage.src = '../../src/assets/img/grid-1.png'; 
    divBig.appendChild(myImage);
    block.appendChild(divBig);
    const divSmall = document.createElement('div');
    divSmall.classList.add('gallery__block');

    const divSmallInner1 = document.createElement('div');
    const myImage1 = document.createElement("img");
    myImage1.src = '../../src/assets/img/grid-2.png'; 
    divSmallInner1.appendChild(myImage1);
    divSmall.appendChild(divSmallInner1);

    const divSmallInner2 = document.createElement('div');
    const myImage2 = document.createElement("img");
    myImage2.src = '../../src/assets/img/grid-3.png'; 
    divSmallInner2.appendChild(myImage2);
    divSmall.appendChild(divSmallInner2);

    const divSmallInner3 = document.createElement('div');
    const myImage3 = document.createElement("img");
    myImage3.src = '../../src/assets/img/grid-4.png'; 
    divSmallInner3.appendChild(myImage3);
    divSmall.appendChild(divSmallInner3);

    const divSmallInner4 = document.createElement('div');
    const myImage4 = document.createElement("img");
    myImage4.src = '../../src/assets/img/grid-5.png'; 
    divSmallInner4.appendChild(myImage4);
    divSmall.appendChild(divSmallInner4);

    block.appendChild(divSmall);
    galleryContent.appendChild(block);
    block.scrollIntoView({ behavior: "smooth" });
  });
};

export default gallery;
