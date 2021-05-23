# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Live Site URL: [Preview Live Here](https://arthurgc.github.io/loopstudios-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS and SASS custom properties
- Flexbox
- Mobile-first workflow
- Media Query

### What I learned

I noticed that linear gradient is not supported to add a transition hover, and their hover declaration is a little different.

```html
<picture class="section-2__images__img">
  <h3 class="section-2__images__title">DEEP EARTH</h3>
  <source
    media="(min-width: 992px)"
    srcset="images/desktop/image-deep-earth.jpg"
  />
  <img src="images/mobile/image-deep-earth.jpg" alt="the earth since outside" />
</picture>
```

```css
&__img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  z-index: 100;
}
&__img:hover::before {
  transition: all 1s ease-in-out;
  background: rgba(225, 0, 255, 0.2);
}
```

## Author

- Github - [ArthurGC](https://github.com/ArthurGC)
