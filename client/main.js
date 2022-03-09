const lang_info_nav_select = document.querySelector(
  ".lang .select-drop .select"
);
const lang_info_nav_ul = document.querySelector(".lang .select-drop ul");
const lang_info_nav_fa = document.querySelector(".lang .select-drop .fa");
let lang_nav = false;
let currency_nav = false;
const p_lang = document.querySelector(".lang .select-drop p");

lang_info_nav_select.addEventListener("click", nav_lang_dropdown);

function nav_lang_dropdown() {
  if (lang_nav) {
    currency_info_nav_ul.classList.add("remove");
    currency_info_nav_fa.className = "fa fa-chevron-down";
  }

  if (!lang_info_nav_ul.classList.contains("remove")) {
    lang_info_nav_ul.classList.add("remove");
    lang_info_nav_fa.className = "fa fa-chevron-down";
    lang_nav = false;
  } else {
    lang_nav = true;
    lang_info_nav_ul.classList.remove("remove");
    lang_info_nav_fa.className = "fa fa-chevron-up";
  }
}

///////////////////////////////////////
const currency_info_nav_select = document.querySelector(
  ".currency .select-drop .select"
);
const currency_info_nav_ul = document.querySelector(
  ".currency .select-drop ul"
);
const currency_info_nav_fa = document.querySelector(
  ".currency .select-drop .fa"
);

currency_info_nav_select.addEventListener("click", nav_currency_dropdown);

function nav_currency_dropdown() {
  if (lang_nav) {
    lang_info_nav_ul.classList.add("remove");
    lang_info_nav_fa.className = "fa fa-chevron-down";
  }

  if (!currency_info_nav_ul.classList.contains("remove")) {
    currency_info_nav_ul.classList.add("remove");
    currency_info_nav_fa.className = "fa fa-chevron-down";
    lang_nav = false;
  } else {
    currency_info_nav_ul.classList.remove("remove");
    currency_info_nav_fa.className = "fa fa-chevron-up";
    lang_nav = true;
  }
}

///////////////////////////
const categories = document.querySelector(".collection .categories");

Array.from(categories.children).forEach((category) => {
  category.style.bacgroundImage = `url("./sandal.jpg")`;
});

//////////////////////////////////////////
const lang_info_footer_select = document.querySelector(
  "footer .lang .select-drop .select"
);
const lang_info_footer_ul = document.querySelector(
  "footer .lang .select-drop ul"
);
const lang_info_footer_fa = document.querySelector(
  "footer .lang .select-drop .fa"
);
let lang_footer = false;
let currency_footer = false;
const p_footer_lang = document.querySelector("footer .lang .select-drop p");

lang_info_footer_select.addEventListener("click", footer_lang_dropdown);

function footer_lang_dropdown() {
  if (lang_footer) {
    currency_info_footer_ul.classList.add("remove");
    currency_info_footer_fa.className = "fa fa-chevron-down";
  }

  if (!lang_info_footer_ul.classList.contains("remove")) {
    lang_info_footer_ul.classList.add("remove");
    lang_info_footer_fa.className = "fa fa-chevron-down";
    lang_footer = false;
  } else {
    lang_footer = true;
    lang_info_footer_ul.classList.remove("remove");
    lang_info_footer_fa.className = "fa fa-chevron-up";
  }
}

///////////////////////////////////////
const currency_info_footer_select = document.querySelector(
  "footer .currency .select-drop .select"
);
const currency_info_footer_ul = document.querySelector(
  "footer .currency .select-drop ul"
);
const currency_info_footer_fa = document.querySelector(
  "footer .currency .select-drop .fa"
);

currency_info_footer_select.addEventListener("click", footer_currency_dropdown);

function footer_currency_dropdown() {
  if (lang_footer) {
    lang_info_footer_ul.classList.add("remove");
    lang_info_footer_fa.className = "fa fa-chevron-down";
  }

  if (!currency_info_footer_ul.classList.contains("remove")) {
    currency_info_footer_ul.classList.add("remove");
    currency_info_footer_fa.className = "fa fa-chevron-down";
    lang_footer = false;
  } else {
    currency_info_footer_ul.classList.remove("remove");
    currency_info_footer_fa.className = "fa fa-chevron-up";
    lang_nav = true;
  }
}

/////////////////////////
const info_1 = document.querySelector("footer .infomation");

info_1.children[2].addEventListener("click", informationMove);

function informationMove() {
  if (!info_1.classList.contains("height")) {
    info_1.classList.add("height");
    info_1.children[1].classList.remove("display");
    info_1.children[2].className = "fa fa-chevron-up";
  } else {
    info_1.classList.remove("height");
    info_1.children[1].classList.add("display");
    info_1.children[2].className = "fa fa-chevron-down";
  }
}

const info_2 = document.querySelector("footer .quick");

info_2.children[2].addEventListener("click", quickMove);

function quickMove() {
  if (!info_2.classList.contains("height")) {
    info_2.classList.add("height");
    info_2.children[1].classList.remove("display");
    info_2.children[2].className = "fa fa-chevron-up";
  } else {
    info_2.classList.remove("height");
    info_2.children[1].classList.add("display");
    info_2.children[2].className = "fa fa-chevron-down";
  }
}

const info_3 = document.querySelector("footer .store_our");

info_3.children[2].addEventListener("click", store_ourMove);

function store_ourMove() {
  if (!info_3.classList.contains("height")) {
    info_3.classList.add("height");
    info_3.children[1].classList.remove("display");
    info_3.children[2].className = "fa fa-chevron-up";
  } else {
    info_3.classList.remove("height");
    info_3.children[1].classList.add("display");
    info_3.children[2].className = "fa fa-chevron-down";
  }
}

const info_4 = document.querySelector("footer .subscribe");

info_4.children[2].addEventListener("click", subscribeMove);

function subscribeMove() {
  if (!info_4.classList.contains("height")) {
    info_4.classList.add("height");
    info_4.children[1].classList.remove("display");
    info_4.children[2].className = "fa fa-chevron-up";
  } else {
    info_4.classList.remove("height");
    info_4.children[1].classList.add("display");
    info_4.children[2].className = "fa fa-chevron-down";
  }
}

////////////////////////
var lastScrollTop = 0;
let navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    navbar.style.position = "inherit";
  }

  if (scrollTop > lastScrollTop) {
    navbar.style.position = "fixed";
    navbar.style.top = "-11vh";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("nav-solid");
  } else {
    navbar.classList.remove("nav-solid");
  }
});
