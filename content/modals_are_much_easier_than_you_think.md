---
title: Modals are much easier than you think
date: 2025-02-04
description: Working with modals should not be such a pain! 
author: nullndr
tags:
  - webdev
  - html
---

# Modals are much easier than you think

A modal is an element that appears on top of the main content to capture user attention and interaction.

It is typically used for alerts, confirmations, forms, or additional information without navigating away from the current page.

When you search for how to create a simple modal you will typically find yourself writing some `<div>`s styled with CSS and handled by JavaScript. Indeed, this is how [w3schools](https://www.w3schools.com/w3css/w3css_modal.asp) teaches you.

Modals are such a basic feature in modern websites that there must be an easier way to handle them... Indeed, there is!

Ladies and gentlemens, let me present you the [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element, the HTML tag to easily create and control modals.

Let the modal be a full page modal, a confirmation modal or an alert modal, `<dialog>` is what you are looking for.

Take for example the following:

```html
<html>
  <body>
    <button id="open-button" type="button">
      Click me to open
    </button>
    <dialog id="my-modal">
      Hey there!
      <button id="close-button" type="button">
        Click me to close
      </button>
    </dialog>
  </body>
</html>
```

Note how simple it is, we define the buttons in order to handle the open/close state, and the dialog itself.

But what about the JavaScript to handle it? Surely it should be quite long, right? Well...

```javascript
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const dialog = document.getElementById("my-modal");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
```

That's it. We simply add an event listener to the `click` event on both buttons, and we open or close the dialog with absolute no pain.

But there are even more news! The `<button>` element is being updated to support... modals out of the box!

Two new properties are being integrated in the browsers: [`commandfor`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) and [`command`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command).

These new properties will allow to handle the open/close state of your `<dialog>` element with no JavaScript at all!

```html
<html>
  <body>
    <button commandfor="my-modal" command="show-modal" type="button">
      Click me to open
    </button>
    <dialog id="my-modal">
      Hey there!
      <button commandfor="my-modal" command="close" type="button">
        Click me to close
      </button>
    </dialog>
  </body>
</html>
```

No more JavaScript, just simple and old HTML.
