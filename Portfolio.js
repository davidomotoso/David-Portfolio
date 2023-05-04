// creating a navbar.
const navBar = () => {
  let nav = document.querySelector("nav");
  nav.innerHTML = `
      <!-- Personal logo -->
        <div>
          <a href="David.html"><img src=img/Avatar.png alt=David-Avatar class=avatar /></a>
        </div>
      <!-- Navigation -->
      <i title="Dark mode" class="bi bi-brightness-high-fill" onclick=local() ></i>
      <i class="bi bi-list"></i>
      <ul>
      <li>
        <i class="bi bi-x-lg"></i>
      </li>
        <li>
          <a href="David.html"> Home</a>
        </li>
        <li><a href="about.html">About </a></li>
        <li>
          <a href="David.html#portfolio"> Portfolio</a>
        </li>
        <li>
          <a href="Contact.html" class="no-decoration">
            <button type="submit">Get in touch</button>
          </a>
        </li>
      </ul>`;
};
navBar();

const footer = () => {
  let footer = document.querySelector("footer");
  footer.innerHTML = `
  <img src=img/Avatar.png alt=David-Avatar class=avatar />
  <ul>
    <li class="mail">
      <a 
      title=Mail 
      href="mailto:davidomotoso45@gmail.com" 
      rel="noopener">Mail</a>
    </li>
    <li class="twitter">
      <a
      title=Twitter
        target="_blank"
        href="https://twitter.com/Erudite_David"
        rel="noopener"
        >Twitter</a
      >
    </li>
    <li class="github">
      <a
      title=Github
        target="_blank"
        href="https://github.com/davidomotoso"
        rel="noopener"
        >Github</a
      >
    </li>
    <li class="instagram">
      <a
      title=Instagram
        target="_blank"
        href="https://www.instagram.com/daveomotoso_/"
        rel="noopener"
        >Instagram</a
      >
    </li>
  </ul>
  <p>2023 all rights reserved</p>
</div>`;
};
footer();

const body = document.body;
const displayNav = () => {
  let menu = document.querySelector(".bi-list");
  let cancel = document.querySelector(".bi-x-lg");
  let ul = document.querySelector("ul");
  let nav = ul.parentElement;
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 535) {
      menu.style.display = "block";
      ul.style.display = "none";
      menu.addEventListener("click", () => {
        ul.style.display = "block";
        cancel.style.display = "block";
        menu.style.display = "none";
        nav.appendChild(ul);
      });
      cancel.addEventListener("click", () => {
        menu.style.display = "block";
        cancel.style.display = "none";
        ul.style.display = "none";
      });
    } else {
      menu.style.display = "none";
      ul.style.display = "flex";
    }
  });
  if (window.innerWidth <= 535) {
    menu.style.display = "block";
    ul.style.display = "none";
    menu.addEventListener("click", () => {
      ul.style.display = "block";
      cancel.style.display = "block";
      menu.style.display = "none";
      nav.appendChild(ul);
    });
    cancel.addEventListener("click", () => {
      menu.style.display = "block";
      cancel.style.display = "none";
      ul.style.display = "none";
    });
  }
};
displayNav();
const anchor = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (body.classList == "light") {
      a[i].classList.add("dark");
      a[i].classList.remove("light");
    } else {
      a[i].classList.remove("dark");
      a[i].classList.add("light");
    }
  }
};
const buttons = (button) => {
  for (let i = 0; i < button.length; i++) {
    if (body.classList == "light") {
      button[i].classList.add("dark");
      button[i].classList.remove("light");
      button[i].style.borderColor = "#fafafa";
    } else {
      button[i].classList.remove("dark");
      button[i].classList.add("light");
      button[i].style.borderColor = "#1f1f1f";
    }
  }
};
const strongs = (strong) => {
  for (let i = 0; i < strong.length; i++) {
    if (body.classList == "light") {
      strong[i].classList.add("dark");
      strong[i].classList.remove("light");
    } else {
      strong[i].classList.remove("dark");
      strong[i].classList.add("light");
    }
  }
};
const inputs = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (body.classList == "light") {
      input[i].classList.add("dark");
      input[i].classList.remove("light");
    } else {
      input[i].classList.remove("dark");
      input[i].classList.add("light");
    }
  }
};
function changeCancel(cancel) {
  if (body.classList == "light") {
    cancel.style.borderColor = "#fafafa";
  } else {
    cancel.style.borderColor = "#1f1f1f";
  }
}
function textarea(text) {
  if (text !== null) {
    if (body.classList == "light") {
      text.classList.remove("light");
      text.classList.add("dark");
    } else {
      text.classList.remove("dark");
      text.classList.add("light");
    }
  } else {
    return;
  }
}
function myImg(img) {
  if (img !== null) {
    if (body.classList == "light") {
      img.addEventListener("mouseover", () => {
        img.style.backgroundColor = "#252525";
      });
    } else {
      img.addEventListener("mouseover", () => {
        img.style.backgroundColor = "#f0f0f0e0";
      });
    }

    img.addEventListener("mouseout", () => {
      img.style.backgroundColor = "transparent";
    });
  } else {
    return;
  }
}
function local() {
  let a = document.querySelectorAll("a");
  const button = document.querySelectorAll("button");
  const input = document.querySelectorAll("input");
  const strong = document.querySelectorAll("strong");
  const text = document.querySelector("textarea");
  let cancel = document.querySelector(".bi-x-lg");
  const selfImg = document.querySelector(".self-img>img");
  const bright = document.querySelector(".bi-brightness-high-fill");
  anchor(a);
  buttons(button);
  strongs(strong);
  inputs(input);
  changeCancel(cancel);
  textarea(text);
  myImg(selfImg);
  if (body.classList == "light") {
    body.classList.remove("light");
    body.classList.add("dark");
    bright.setAttribute("title", "Dark mode");
    return localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    bright.setAttribute("title", "Light mode");
    return localStorage.setItem("theme", "light");
  }
}

function finale() {
  let theme = localStorage.getItem("theme");
  let anchor = document.querySelectorAll("a");
  const button = document.querySelectorAll("button");
  const input = document.querySelectorAll("input");
  const strong = document.querySelectorAll("strong");
  const text = document.querySelector("textarea");
  let cancel = document.querySelector(".bi-x-lg");
  body.classList.add(theme);

  // anchor loop
  for (let i = 0; i < anchor.length; i++) {
    if (body.classList == "light") {
      anchor[i].classList.add("light");
      anchor[i].classList.remove("dark");
    } else {
      anchor[i].classList.remove("light");
      anchor[i].classList.add("dark");
    }
  }
  // button loop
  for (let i = 0; i < button.length; i++) {
    if (body.classList == "light") {
      button[i].classList.add("light");
      button[i].classList.remove("dark");
      button[i].style.borderColor = "#1f1f1f";
    } else {
      button[i].classList.remove("light");
      button[i].classList.add("dark");
      button[i].style.borderColor = "#fafafa";
    }
  }
  // input loop
  for (let i = 0; i < input.length; i++) {
    if (body.classList == "light") {
      input[i].classList.remove("dark");
      input[i].classList.add("light");
    } else {
      input[i].classList.add("dark");
      input[i].classList.remove("light");
    }
  }
  // strong loop
  for (let i = 0; i < strong.length; i++) {
    if (body.classList == "light") {
      strong[i].classList.remove("dark");
      strong[i].classList.add("light");
    } else {
      strong[i].classList.add("dark");
      strong[i].classList.remove("light");
    }
  }

  // textarea
  if (text !== null) {
    if (body.classList == "light") {
      text.classList.add("light");
      text.classList.remove("dark");
    } else {
      text.classList.add("dark");
      text.classList.remove("light");
    }
  } else {
    return;
  }
}
finale();
