console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// Navigation menu pages
let pages = [
  { url: '', title: 'Home' },
  { url: 'projects/', title: 'Projects' },
  { url: 'contact/', title: 'Contact' },
  { url: 'https://linkedin.com/in/mengkongaun', title: 'Profile' },
  { url: 'https://github.com/mengkong81', title: 'GitHub' }
];

// Create nav and prepend to the body
let nav = document.createElement('nav');
document.body.prepend(nav);

// Determine if we're on the home page
const ARE_WE_HOME = document.documentElement.classList.contains('home');

// Loop through the pages and create links
for (let p of pages) {
  let url = p.url;
  let title = p.title;

  // Adjust relative links if we're not on the homepage
  url = !ARE_WE_HOME && !url.startsWith('http') ? '../' + url : url;

  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;

  // Add 'current' class if it's the current page
  a.classList.toggle('current', a.host === location.host && a.pathname === location.pathname);

  // Open external links in a new tab
  if (a.host !== location.host) {
    a.target = '_blank';
  }

  nav.append(a);
}
