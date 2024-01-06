function footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const background = document.createElement('img');
  background.src = './assets/img/footer-img.png';
  background.classList.add('footer__background');
  footer.appendChild(background);

  const footerWrapper = document.createElement('div');
  footerWrapper.classList.add('wrapper');
  footerWrapper.classList.add('footer__wrapper');
  const footerInfo = document.createElement('div');
  footerInfo.classList.add('footer__info');

  const footerLogoCopywrite = document.createElement('div');
  footerLogoCopywrite.classList.add('footer__info__logo-copywrite');
  const footerlogo = document.createElement('img');
  footerlogo.classList.add('logo');
  footerlogo.src = './assets/logo.png';
  footerlogo.alt = 'Logo';
  footerLogoCopywrite.appendChild(footerlogo);

  const copywrite = document.createElement('p');
  copywrite.classList.add('footer__info__logo-copywrite__copyright');
  copywrite.textContent = 'Copyrights © 2020 Montichello';
  footerLogoCopywrite.appendChild(copywrite);

  const footerSocial = document.createElement('div');
  const social = document.createElement('ul');
  social.classList.add('social');
  const socialItem = document.createElement('li');
  socialItem.classList.add('social__item');
  const socialLink = document.createElement('a');
  socialLink.classList.add('social__link');
  socialLink.href = 'https://www.facebook.com/';
  socialLink.setAttribute('target', '_blank');
  const socIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  socIcon.classList.add('icon');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    '#icon-facebook'
  );

  socIcon.appendChild(use);
  socialLink.appendChild(socIcon);
  socialItem.appendChild(socialLink);
  social.appendChild(socialItem);

  const socialItem2 = document.createElement('li');
  socialItem2.classList.add('social__item');
  const socialLink2 = document.createElement('a');
  socialLink2.classList.add('social__link');
  socialLink2.href = 'https://www.twitter.com/';
  socialLink2.setAttribute('target', '_blank');
  const socIcon2 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  socIcon2.classList.add('icon');
  const use2 = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use2.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    '#icon-twitter'
  );

  socIcon2.appendChild(use2);
  socialLink2.appendChild(socIcon2);
  socialItem2.appendChild(socialLink2);
  social.appendChild(socialItem2);

  const socialItem3 = document.createElement('li');
  socialItem3.classList.add('social__item');
  const socialLink3 = document.createElement('a');
  socialLink3.classList.add('social__link');
  socialLink3.href = 'https://www.Instagram.com/';
  socialLink3.setAttribute('target', '_blank');
  const socIcon3 = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  socIcon3.classList.add('icon');
  const use3 = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use3.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    '#icon-instagram'
  );

  socIcon3.appendChild(use3);
  socialLink3.appendChild(socIcon3);
  socialItem3.appendChild(socialLink3);
  social.appendChild(socialItem3);

  footerSocial.appendChild(social);

  footerInfo.appendChild(footerLogoCopywrite);
  footerInfo.appendChild(footerSocial);
  footerWrapper.appendChild(footerInfo);
  footer.appendChild(footerWrapper);

  document.body.appendChild(footer);
}

export default footer;
