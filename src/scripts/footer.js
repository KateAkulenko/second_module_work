
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.createElement("footer");
  footer.classList.add('footer');

  // const background = document.createElement("img");
  // background.src = '../../src/assets/img/footer-img.png'; 
  // background.classList.add('footer__background');
  // footer.appendChild(background);
 
  const divWrapper = document.createElement('div');
  divWrapper.classList.add('wrapper');
  divWrapper.classList.add('wrapper__footer');
  const divFooterInfo = document.createElement('div');
  divFooterInfo.classList.add('divFooterInfo');

  const leftDiv = document.createElement("div");
  leftDiv.classList.add('divFooterInfo__left');
  const myImage = document.createElement("img");
  myImage.classList.add('logo');
  myImage.src = "./assets/logo.png";
  myImage.alt = "Logo";
  leftDiv.appendChild(myImage);

  const paragraph = document.createElement("p");
  paragraph.classList.add('divFooterInfo__left__copyright')
  paragraph.textContent = "Copyrights © 2020 Montichello";
  leftDiv.appendChild(paragraph);


  const rightDiv = document.createElement("div");
  rightDiv.classList.add('divFooterInfo__right');
  const socUl = document.createElement("ul");
  socUl.classList.add('social');
  const socLi = document.createElement("li");
  socLi.classList.add('social__item');
  const socialLink = document.createElement("a");
  socialLink.classList.add('social__link');
  socialLink.href = "https://www.facebook.com/";
  socialLink.setAttribute("target", "_blank");
  const socSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  socSvg.classList.add('icon');
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", '#icon-facebook');

  socSvg.appendChild(use);
  socialLink.appendChild(socSvg);
  socLi.appendChild(socialLink);
  socUl.appendChild(socLi);

  const socLi2 = document.createElement("li");
  socLi2.classList.add('social__item');
  const socialLink2 = document.createElement("a");
  socialLink2.classList.add('social__link');
  socialLink2.href = "https://www.twitter.com/";
  socialLink2.setAttribute("target", "_blank");
  const socSvg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  socSvg2.classList.add('icon');
  const use2 = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", '#icon-twitter');

  socSvg2.appendChild(use2);
  socialLink2.appendChild(socSvg2);
  socLi2.appendChild(socialLink2);
  socUl.appendChild(socLi2);

  const socLi3 = document.createElement("li");
  socLi3.classList.add('social__item');
  const socialLink3 = document.createElement("a");
  socialLink3.classList.add('social__link');
  socialLink3.href = "https://www.Instagram.com/";
  socialLink3.setAttribute("target", "_blank");
  const socSvg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  socSvg3.classList.add('icon');
  const use3 = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use3.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", '#icon-instagram');

  socSvg3.appendChild(use3);
  socialLink3.appendChild(socSvg3);
  socLi3.appendChild(socialLink3);
  socUl.appendChild(socLi3);

  rightDiv.appendChild(socUl);

  divFooterInfo.appendChild(leftDiv);
  divFooterInfo.appendChild(rightDiv);
  divWrapper.appendChild(divFooterInfo);
  footer.appendChild(divWrapper);

  document.body.appendChild(footer);
});