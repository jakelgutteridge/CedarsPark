// Get references to the header and footer divs
const navDiv = document.getElementById('nav');

// Define the injected HTML content for nav
const navHTML = `
<nav class="vertical_nav">
<ul id="js-menu" class="menu">
  <li class="menu--item  menu--item__has_sub_menu">
    <label class="menu--link" title="Item 1">
      <i class="menu--icon></i>
      <span class="menu--label">Item 1</span>
    </label>
    <ul class="sub_menu">
      <li class="sub_menu--item">
        <a href="#" class="sub_menu--link sub_menu--link__active">Submenu</a>
      </li>
      <li class="sub_menu--item">
        <a href="#" class="sub_menu--link">Submenu</a>
      </li>
      <li class="sub_menu--item">
        <a href="#" class="sub_menu--link">Submenu</a>
      </li>
    </ul>
  </li>
  <li class="menu--item">
    <a href="#" class="menu--link" title="Item 2">
      <i class="menu--icon"></i>
      <span class="menu--label">Item 2</span>
    </a>
  </li>
  <li class="menu--item">
    <a href="#" class="menu--link" title="Item 3">
      <i class="menu--icon"></i>
      <span class="menu--label">Item 3</span>
    </a>
  </li>
  <li class="menu--item  menu--item__has_sub_menu">
    <label class="menu--link" title="Item 4">
      <i class="menu--icon"></i>
      <span class="menu--label">Item 4</span>
    </label>
    <ul class="sub_menu">
      <li class="sub_menu--item">
        <a href="#" class="sub_menu--link">Submenu</a>
      </li>
      <li class="sub_menu--item">
        <a href="#" class="sub_menu--link">Submenu</a>
      </li>
      <li class="sub_menu--item">
        <a href="#" class="sub_menu--link">Submenu</a>
      </li>
    </ul>
  </li>
  <li class="menu--item">
    <a href="#" class="menu--link" title="Item 5">
      <i class="menu--icon"></i>
      <span class="menu--label">Item 5</span>
    </a>
  </li>
</ul>
<button id="collapse_menu" class="collapse_menu">
  <i class="collapse_menu--icon"></i>
  <span class="collapse_menu--label">Recolher menu</span>
</button>
</nav>
`;



// Inject the HTML content into the nav div
navDiv.innerHTML = navHTML;
