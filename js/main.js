if (document.querySelector(".map")) {
  const map = L.map("map").setView([50.4501, 30.5234], 12);
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
    {
      attribution: "&copy; OpenStreetMap, &copy; CARTO",
      subdomains: "abcd",
      maxZoom: 19,
    }
  ).addTo(map);

  const locations = [
    {
      name: "Поділ, вул. Нижній Вал, 15",
      coords: [50.4654, 30.5161],
      popup: `<div class="place__body place-body"><div class="place-body__address">Поділ, вул. Нижній Вал, 15</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
    {
      name: "Оболонь, Оболонська набережна, 19(корп.3)",
      coords: [50.488, 30.497],
      popup: `<div class="place__body place-body"><div class="place-body__address">Оболонь, Оболонська набережна, 19(корп.3)</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
    {
      name: "Печерськ, бул. Дружби Народів, 21",
      coords: [50.4116, 30.5452],
      popup: `<div class="place__body place-body"><div class="place-body__address">Печерськ, бул. Дружби Народів, 21</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
    {
      name: "Позняки, вул. О.Мишуги, 7а (2 поверх)",
      coords: [50.3976, 30.6306],
      popup: `<div class="place__body place-body"><div class="place-body__address">Позняки, вул. О.Мишуги, 7а (2 поверх)</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
    {
      name: "Теремки, вул. Ломоносова, 48",
      coords: [50.3756, 30.4836],
      popup: `<div class="place__body place-body"><div class="place-body__address">Теремки, вул. Ломоносова, 48</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
    {
      name: "Осокорки, Дніпровська набережна, 25 Б",
      coords: [50.3923, 30.6161],
      popup: `<div class="place__body place-body"><div class="place-body__address">Осокорки, Дніпровська набережна, 25 Б</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
    {
      name: "Русанівка, вул. Ентузіастів, 25",
      coords: [50.4388, 30.5903],
      popup: `<div class="place__body place-body"><div class="place-body__address">Русанівка, вул. Ентузіастів, 25</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
    {
      name: "Виноградар, вул. Вишгородська, 32/2",
      coords: [50.4915, 30.4286],
      popup: `<div class="place__body place-body"><div class="place-body__address">Виноградар, вул. Вишгородська, 32/2</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
    {
      name: "Троєщина, вул. Цвєтаєвої, 13",
      coords: [50.5163, 30.6199],
      popup: `<div class="place__body place-body"><div class="place-body__address">Троєщина, вул. Цвєтаєвої, 13</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
    {
      name: "Солом'янка, просп. Повітряних Сил, 44 13",
      coords: [50.4245, 30.4432],
      popup: `<div class="place__body place-body"><div class="place-body__address">Солом'янка, просп. Повітряних Сил, 44 13</div><div class="place-body__time">з 10:00 до 21:00</div><a class="place-body__link" href="tel:+380934200022">+38 093 420 00 22</a></div>`,
    },
  ];

  const defaultIcon = L.icon({
    iconUrl: "images/map-marker.svg",
    iconSize: [32, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, 0],
  });

  const activeIcon = L.icon({
    iconUrl: "images/map-marker-active.svg", // ЗАМЕНИ на свой активный маркер
    iconSize: [32, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, 0],
  });

  const markers = [];

  locations.forEach((loc, index) => {
    const icon = index === 0 ? activeIcon : defaultIcon;
    const marker = L.marker(loc.coords, { icon })
      .addTo(map)
      .bindPopup(loc.popup);

    marker.on("click", () => {
      markers.forEach((m) => m.setIcon(defaultIcon));
      marker.setIcon(activeIcon);

      document
        .querySelectorAll(".addresses-list__item")
        .forEach((el) => el.classList.remove("addresses-list__item--active"));
      document
        .querySelectorAll(".addresses-list__item")
        [index].classList.add("addresses-list__item--active");
    });

    markers.push(marker);
  });

  // Обработка клика по адресу
  document.querySelectorAll(".addresses-list__item").forEach((item, index) => {
    item.addEventListener("click", () => {
      // Удалить активный класс у всех
      document
        .querySelectorAll(".addresses-list__item")
        .forEach((el) => el.classList.remove("addresses-list__item--active"));
      item.classList.add("addresses-list__item--active");

      // Сброс всех иконок
      markers.forEach((m) => m.setIcon(defaultIcon));

      // Активировать выбранный
      markers[index].setIcon(activeIcon);
      const { coords } = locations[index];
      map.setView(coords, 12);
      markers[index].openPopup();
    });
  });

  // Активувати перший маркер та попап (Поділ)
  map.setView(locations[0].coords, 12);
  markers[0].openPopup();
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop >= 90) {
    document.body.classList.add("body--scrolled");
  } else {
    document.body.classList.remove("body--scrolled");
  }
});

// burger
const burgers = document.querySelectorAll(".burger");

burgers.forEach((burger) => {
  burger.addEventListener("click", () => {
    document.body.classList.toggle("body--active");
    document.body.classList.remove("body--scrolled");
  });
});

const links = document.querySelectorAll(".linksbar-list__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("body--active");
  });
});
// burger

const footer = document.querySelector("footer");

if (footer) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        document.body.classList.add("body--footer");
      } else {
        document.body.classList.remove("body--footer");
      }
    },
    {
      root: null,
      threshold: 0, // как только нижняя часть футера появилась
    }
  );

  observer.observe(footer);
}

const barberItems = document.querySelectorAll(".barbers-list__item");
const servicesBlocks = document.querySelectorAll(".servicess-body");

barberItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // 1. Сбросить активные состояния
    barberItems.forEach((el) =>
      el.classList.remove("barbers-list__item--active")
    );
    item.classList.add("barbers-list__item--active");

    // 2. Для каждого блока цен обновить активный services по индексу барбера
    servicesBlocks.forEach((body) => {
      const servicess = body.querySelectorAll(".servicess-body__services");
      servicess.forEach((el) =>
        el.classList.remove("servicess-body__services--active")
      );
      if (servicess[index]) {
        servicess[index].classList.add("servicess-body__services--active");
      }
    });
  });
});

document.querySelectorAll(".faq-list__item").forEach((item) => {
  item.addEventListener("click", () => {
    // Если элемент уже активен, убрать активный класс
    if (item.classList.contains("faq-list__item--active")) {
      item.classList.remove("faq-list__item--active");
    } else {
      // Убираем класс у всех элементов
      document
        .querySelectorAll(".faq-list__item")
        .forEach((el) => el.classList.remove("faq-list__item--active"));
      // Добавляем класс текущему элементу
      item.classList.add("faq-list__item--active");
    }
  });
});

function toggleHoverClass(parentSelector, activeClass) {
  const parents = document.querySelectorAll(parentSelector);

  if (!parents.length) return;

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  parents.forEach((parent) => {
    if (isTouchDevice) {
      // Мобильное поведение: toggle класс по клику
      parent.addEventListener("click", (e) => {
        e.stopPropagation();
        parent.classList.toggle(activeClass);
      });

      // Закрытие при клике вне
      document.addEventListener("click", (e) => {
        if (!parent.contains(e.target)) {
          parent.classList.remove(activeClass);
        }
      });
    } else {
      // Десктоп поведение: hover
      parent.addEventListener("mouseenter", () => {
        parent.classList.add(activeClass);
      });

      parent.addEventListener("mouseleave", () => {
        parent.classList.remove(activeClass);
      });
    }
  });
}

toggleHoverClass(".location", "location--active");
toggleHoverClass(".lang", "lang--active");

document.querySelectorAll(".tub[data-tubs]").forEach((tab, index, tabList) => {
  tab.addEventListener("click", () => {
    const group = tab.dataset.tubs;

    // Найдём все табы и элементы контента с тем же data-tubs
    const tabs = Array.from(
      document.querySelectorAll(`.tub[data-tubs="${group}"]`)
    );
    const contents = Array.from(
      document.querySelectorAll(`.tub-element[data-tubs="${group}"]`)
    );

    const tabIndex = tabs.indexOf(tab);

    // Сброс классов у всех табов этой группы
    tabs.forEach((t) => t.classList.remove("tub--active"));
    tab.classList.add("tub--active");

    // Сброс классов у всех элементов этой группы
    contents.forEach((el) => el.classList.remove("tub-element--active"));
    if (contents[tabIndex]) {
      contents[tabIndex].classList.add("tub-element--active");
    }
  });
});

new Swiper(".heading-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 750,
  effect: "fade", // 💡 ключевая строка
  fadeEffect: {
    crossFade: true, // Опционально: делает переход плавным между слайдами
  },
  navigation: {
    prevEl: ".heading-arrow--prev",
    nextEl: ".heading-arrow--next",
  },
  pagination: {
    el: ".heading-swiper__pagination",
    type: "bullets",
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000, // задержка между слайдами в миллисекундах
  //   disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
  // },
  // breakpoints: {
  //   301: {
  //     slidesPerView: 2.2,
  //     centeredSlides: true,
  //     initialSlide: 1,
  //     slidesPerGroup: 1,
  //     loopedSlides: 6,
  //   },
  //   501: {
  //     slidesPerView: 2.5,
  //     centeredSlides: true,
  //     initialSlide: 1,
  //     slidesPerGroup: 1,
  //     loopedSlides: 6,
  //   },
  // },
});

new Swiper(".cost-swiper", {
  slidesPerView: 4,
  loop: true,
  speed: 750,
  enabled: false,
  spaceBetween: 48,
  grid: {
    rows: 2,
    fill: "rows",
  },
  pagination: {
    el: ".cost-swiper__pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    301: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      enabled: true,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: "rows",
      },
    },
    551: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      enabled: true,
      spaceBetween: 48,
      grid: {
        rows: 2,
        fill: "rows",
      },
    },
    769: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      enabled: true,
      spaceBetween: 48,
      grid: {
        rows: 2,
        fill: "rows",
      },
    },
    1701: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      enabled: true,
      spaceBetween: 148,
      grid: {
        rows: 2,
        fill: "rows",
      },
    },
  },
});

new Swiper(".news-swiper", {
  slidesPerView: 3,
  loop: true,
  speed: 750,
  spaceBetween: 84,
  navigation: {
    prevEl: ".arrow--news-prev",
    nextEl: ".arrow--news-next",
  },
  breakpoints: {
    301: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 40,
    },
    769: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 24,
    },
    993: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 24,
    },
    1201: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 24,
    },
    1401: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 24,
    },
    1701: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 84,
    },
  },
});

new Swiper(".recalls-swiper", {
  slidesPerView: 4,
  loop: true,
  speed: 750,
  spaceBetween: 60,
  navigation: {
    prevEl: ".arrow--prev",
    nextEl: ".arrow--next",
  },
  breakpoints: {
    301: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 40,
    },
    769: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      spaceBetween: 40,
    },
    993: {
      slidesPerView: 5,
      loop: true,
      speed: 750,
      spaceBetween: 40,
    },
    1201: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 40,
    },
    1701: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      spaceBetween: 60,
    },
  },
});

new Swiper(".achievements-swiper", {
  slidesPerView: 4,
  loop: true,
  speed: 750,
  spaceBetween: 84,
  navigation: {
    prevEl: ".arrow--achievements-prev",
    nextEl: ".arrow--achievements-next",
  },
  breakpoints: {
    301: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 40,
    },
    993: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 24,
    },
    1201: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      spaceBetween: 24,
    },
    1701: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      spaceBetween: 84,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".popup");
  const popups = {
    contact: document.querySelector(".popup--contact"),
  };

  // Функция для показа попапа
  function showPopup(popupToShow) {
    popupToShow.classList.add("popup--active");
    popupToShow.style.display = "block";
    popupToShow.style.opacity = "0";

    // Анимация появления
    fadeIn(popupToShow, 250, function () {
      fadeOpacity(popupToShow, 1, 250);
    });

    document.body.classList.add("body--popup");
  }

  // Функция для скрытия попапа
  function hidePopup(popupToHide) {
    popupToHide.classList.remove("popup--active");

    // Анимация исчезновения
    fadeOut(popupToHide, 250, function () {
      fadeOpacity(popupToHide, 1, 250);
    });

    document.body.classList.remove("body--popup");
  }

  // Функция для анимации появления
  function fadeIn(element, duration, callback) {
    element.style.opacity = "0";
    element.style.display = "block";

    const start = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      element.style.opacity = progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (callback) {
        callback();
      }
    }

    requestAnimationFrame(animate);
  }

  // Функция для анимации исчезновения
  function fadeOut(element, duration, callback) {
    const start = performance.now();
    const startOpacity = parseFloat(getComputedStyle(element).opacity);

    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      element.style.opacity = startOpacity * (1 - progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = "none";
        if (callback) {
          callback();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  // Функция для анимации прозрачности
  function fadeOpacity(element, targetOpacity, duration) {
    const start = performance.now();
    const startOpacity = parseFloat(getComputedStyle(element).opacity);
    const difference = targetOpacity - startOpacity;

    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      element.style.opacity = startOpacity + difference * progress;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  // Обработчики кликов для показа попапов
  const openQuestionButtons = document.querySelectorAll(".open-contact");
  openQuestionButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      event.preventDefault();
      showPopup(popups.contact);
    });
  });

  // Обработчик кликов для скрытия попапов
  const closeButtons = document.querySelectorAll(".cls");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      event.preventDefault();
      hidePopup(popup);
    });
  });

  // Скрываем попап при клике вне его области
  document.addEventListener("click", function (event) {
    Object.keys(popups).forEach((key) => {
      const popupToCheck = popups[key];
      if (popupToCheck && popupToCheck.classList.contains("popup--active")) {
        const popupInner = popupToCheck.querySelector(".popup__inner");
        if (popupInner && !popupInner.contains(event.target)) {
          hidePopup(popupToCheck);
        }
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   var x, i, j, l, ll, selElmnt, a, b, c;
//   /* Look for any elements with the class "custom-select": */
//   x = document.getElementsByClassName("custom-select");
//   l = x.length;
//   for (i = 0; i < l; i++) {
//     selElmnt = x[i].getElementsByTagName("select")[0];
//     ll = selElmnt.length;
//     /* For each element, create a new DIV that will act as the selected item: */
//     a = document.createElement("DIV");
//     a.setAttribute("class", "select-selected");
//     a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//     x[i].appendChild(a);
//     /* For each element, create a new DIV that will contain the option list: */
//     b = document.createElement("DIV");
//     b.setAttribute("class", "select-items select-hide");
//     for (j = 1; j < ll; j++) {
//       /* For each option in the original select element,
//           create a new DIV that will act as an option item: */
//       c = document.createElement("DIV");
//       c.innerHTML = selElmnt.options[j].innerHTML;
//       c.addEventListener("click", function (e) {
//         /* When an item is clicked, update the original select box,
//               and the selected item: */
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//       });
//       b.appendChild(c);
//     }
//     x[i].appendChild(b);
//     a.addEventListener("click", function (e) {
//       /* When the select box is clicked, close any other select boxes,
//           and open/close the current select box: */
//       e.stopPropagation();
//       closeAllSelect(this);
//       this.nextSibling.classList.toggle("select-hide");
//       this.classList.toggle("select-arrow-active");
//     });
//   }

//   function closeAllSelect(elmnt) {
//     /* A function that will close all select boxes in the document,
//       except the current select box: */
//     var x,
//       y,
//       i,
//       xl,
//       yl,
//       arrNo = [];
//     x = document.getElementsByClassName("select-items");
//     y = document.getElementsByClassName("select-selected");
//     xl = x.length;
//     yl = y.length;
//     for (i = 0; i < yl; i++) {
//       if (elmnt == y[i]) {
//         arrNo.push(i);
//       } else {
//         y[i].classList.remove("select-arrow-active");
//       }
//     }
//     for (i = 0; i < xl; i++) {
//       if (arrNo.indexOf(i)) {
//         x[i].classList.add("select-hide");
//       }
//     }
//   }

//   /* If the user clicks anywhere outside the select box,
//   then close all select boxes: */
//   document.addEventListener("click", closeAllSelect);
// });

// Чек боксы и их родители

// document.querySelectorAll('.method-item__input').forEach(function (checkbox) {
//     checkbox.addEventListener('click', function () {
//         // Убираем checked у всех элементов
//         document.querySelectorAll('.method-item__input').forEach(function (otherCheckbox) {
//             otherCheckbox.checked = false;
//             otherCheckbox.closest('.method-item').classList.remove('method-item--active');
//         });

//         // Ставим checked только на выбранный элемент
//         this.checked = true;

//         // Добавляем активный класс родителю выбранного элемента
//         this.closest('.method-item').classList.add('method-item--active');
//     });
// });

//

// Получаем все элементы с классом tub
// if ( document.querySelector('.tub') ) {
//     const tabs = document.querySelectorAll('.tub');
//     const tubElement = document.querySelectorAll('.tub-element');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', function () {
//             tabs.forEach(t => t.classList.remove('tub--active'));

//             this.classList.add('tub--active');

//             tubElement.forEach(tub => tub.classList.remove('tub-element--active'));

//             const tubElementToActivate = document.querySelector(`.tub-element[id="${this.id}"]`);

//             if (tubElementToActivate) {
//                 tubElementToActivate.classList.add('tub-element--active');
//             }
//         });
//     });
// }
//

// $(function () {
// $(".burger").on("click", function (event) {
//   $("body").toggleClass("body--active");
// });

// $(".menu__link").on("click", function (event) {
//   $("body").toggleClass("body--active");
// });
// $('.header-top-lang').on('click', function (event) {
//     $('.header-top-lang-content').toggleClass('header-top-lang-content--active');
//     $(this).toggleClass('header-top-lang--active');
// });

// Делаем попап и скрываем по клику вне его

//

// Копировать значение с инпута
// if (document.querySelector('.transfer-body__wallet-copy')) {
//     document.querySelector('.transfer-body__wallet-copy').addEventListener('click', function () {
//         // Находим элемент <input> по его id
//         var inputElement = document.querySelector('.transfer-body__wallet-input');

//         // Вызываем метод select() для выбора текста внутри элемента <input>
//         inputElement.select();

//         // Выполняем команду копирования выбранного текста в буфер обмена
//         document.execCommand('copy');

//         // Снимаем фокус с элемента, чтобы выделение текста не оставалось
//         inputElement.blur();

//         // Подсветка кнопки для обратной связи
//         this.classList.add('copied');

//         // Через какое-то время убираем подсветку кнопки
//         setTimeout(function () {
//             document.querySelector('.transfer-body__wallet-copy').classList.remove('copied');
//         }, 500);
//     });
// }
// });

// Делаем высоту слайдов одинаковой
// function setMaxHeightForProjects() {
//     setTimeout(() => {
//         let heights = [];

//         // Получаем высоту каждого элемента и добавляем в массив
//         document.querySelectorAll('.projects-swiper__slide').forEach(function (slide) {
//             heights.push(slide.getBoundingClientRect().height);
//         });

//         let maxHeight = Math.max(...heights);

//         // Устанавливаем высоту каждого элемента в самую большую высоту
//         document.querySelectorAll('.projects-swiper__slide').forEach(function (slide) {
//             slide.style.minHeight = maxHeight + 'px';
//         });
//     }, 200)
// }

// $(function () {
//     // Получаем нужный элемент
//     if (document.querySelector('.projects')) {
//         var element = document.querySelector('.projects');

//         var newsVisible = function (target) {
//             // let headerBottom = document.querySelectorAll('.header-bottom')[0]
//             // var menuBtn = document.querySelectorAll('.menu-btn')[0]
//             // var footerTop = document.querySelectorAll('.footer-top')[0]
//             // Все позиции элемента
//             var targetPosition = {
//                     top: window.pageYOffset + target.getBoundingClientRect().top,
//                     left: window.pageXOffset + target.getBoundingClientRect().left,
//                     right: window.pageXOffset + target.getBoundingClientRect().right,
//                     bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//                 },
//                 // Получаем позиции окна
//                 windowPosition = {
//                     top: window.pageYOffset,
//                     left: window.pageXOffset,
//                     right: window.pageXOffset + document.documentElement.clientWidth,
//                     bottom: window.pageYOffset + document.documentElement.clientHeight
//                 };

//             if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//                 targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//                 targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//                 targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//                 // Если элемент полностью видно, то запускаем следующий код
//                 setTimeout(() => {
//                     setMaxHeightForProjects()
//                 }, 1000)
//             } else {};
//         };

//         // Запускаем функцию при прокрутке страницы
//         window.addEventListener('scroll', function () {
//             newsVisible(element);
//         });

//         // А также запустим функцию сразу. А то вдруг, элемент изначально видно
//         newsVisible(element);
//     }
// })
//

// Aos - the right initialisation
// jQuery(document).ready(function () {
//     (function () {
//         // your page initialization code here
//         // the DOM will be available here
//         AOS.init({
//             duration: 1000,
//             offset: 0, // offset (in px) from the original trigger point
//             anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
//         });
//     })();
// });
// //

// timer
// setInterval(() => {
//     let timeNow = new Date() // Время сейчас
//     let timeNowTimeStamp = timeNow.getTime() // сколько прошоло с 1970 до теперешнего момената
//     // console.log(timeNowTimeStamp)

//     let ourDate = new Date('2023-03-19T23:14:00') // Время нашего знакомства
//     let ourDateTimeStamp = ourDate.getTime() // сколько прошоло с 1970 до теперешнего момената
//     // console.log(ourDateTimeStamp)

//     let timeStampMilliseconds = ourDateTimeStamp - timeNowTimeStamp // Миллисекунды ( разница между временем теперь и временем нашей встречи )

//     let secondsOfTimeStamp = timeStampMilliseconds / 1000 // Секунды - разницы
//     let minutesOfTimeStamp = secondsOfTimeStamp / 60 // минуты - разницы
//     let hoursOfTimeStamp = minutesOfTimeStamp / 60 // часы - разницы
//     let daysOfTimeStamp = hoursOfTimeStamp / 24 // Дни - разницы

//     let secondsOfTimeStampFloor = Math.floor(timeStampMilliseconds / 1000) // Секунды - разницы
//     let minutesOfTimeStampFloor = Math.floor(secondsOfTimeStamp / 60) // минуты - разницы
//     let secondsRamnant = secondsOfTimeStampFloor - (minutesOfTimeStampFloor * 60) // Остаток секунд - то есть наши секунды в Html
//     let hoursOfTimeStampFloor = Math.floor(minutesOfTimeStamp / 60) // часы - разницы
//     let minutesRamnant = minutesOfTimeStampFloor - (hoursOfTimeStampFloor * 60) // Остаток минут - то есть наши минуты в Html
//     let daysOfTimeStampFloor = Math.floor(hoursOfTimeStamp / 24) // Дни - разницы
//     let hoursRamnant = hoursOfTimeStampFloor - (daysOfTimeStampFloor * 24) // Остаток часов - то есть наши часы в Html

//     let hours = document.querySelector('.header-bottom-body-row__item-text--hours')

//     let minutes = document.querySelector('.header-bottom-body-row__item-text--minutes')

//     let seconds = document.querySelector('.header-bottom-body-row__item-text--seconds')

//     // // //

//     seconds.innerHTML = secondsRamnant

//     if (hoursRamnant < 10) {
//         console.log(String(hoursRamnant)[0])
//         hours.innerHTML = '0' + String(hoursRamnant) + '<span>:</span>'
//     } else {
//         hours.innerHTML = String(hoursRamnant) + '<span>:</span>'
//     }

//     if (minutesRamnant < 10) {
//         minutes.innerHTML = '0' + String(minutesRamnant) + '<span>:</span>'
//     } else {
//         minutes.innerHTML = String(minutesRamnant) + '<span>:</span>'
//     }

//     if (secondsRamnant < 10) {
//         seconds.innerHTML = '0' + String(secondsRamnant)
//     } else {
//         seconds.innerHTML = String(secondsRamnant)
//     }
// }, 1000)
// //

// typed js

// $(".typed").typed({
//     strings: ["Графічним дизайнерам", "Початковим веб-дизайнерам", "Студентам/школярам", "Офісним працівникам"],
//     // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
//     stringsElement: null,
//     // typing speed
//     typeSpeed: 30,
//     // time before typing starts
//     startDelay: 1200,
//     // backspacing speed
//     backSpeed: 20,
//     // time before backspacing
//     backDelay: 500,
//     // loop
//     loop: true,
//     // false = infinite
//     loopCount: 5,
//     // show cursor
//     showCursor: false,
//     // character for cursor
//     cursorChar: "|",
//     // attribute to type (null == text)
//     attr: null,
//     // either html or text
//     contentType: 'html',
//     // call when done callback function
//     callback: function () {},
//     // starting callback function before each string
//     preStringTyped: function () {},
//     //callback for every typed string
//     onStringTyped: function () {},
//     // callback for reset
//     resetCallback: function () {}
// });
// //

// Phone mask

// window.addEventListener("DOMContentLoaded", function () {
//     [].forEach.call(document.querySelectorAll('.tel'), function (input) {
//         var keyCode;

//         function mask(event) {
//             event.keyCode && (keyCode = event.keyCode);
//             var pos = this.selectionStart;
//             if (pos < 3) event.preventDefault();
//             var matrix = "+7 (___) ___-____",
//                 i = 0,
//                 def = matrix.replace(/\D/g, ""),
//                 val = this.value.replace(/\D/g, ""),
//                 new_value = matrix.replace(/[_\d]/g, function (a) {
//                     return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//                 });
//             i = new_value.indexOf("_");
//             if (i != -1) {
//                 i < 5 && (i = 3);
//                 new_value = new_value.slice(0, i)
//             }
//             var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//                 function (a) {
//                     return "\\d{1," + a.length + "}"
//                 }).replace(/[+()]/g, "\\$&");
//             reg = new RegExp("^" + reg + "$");
//             if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//             if (event.type == "blur" && this.value.length < 5) this.value = ""
//         }

//         input.addEventListener("input", mask, false);
//         input.addEventListener("focus", mask, false);
//         input.addEventListener("blur", mask, false);
//         input.addEventListener("keydown", mask, false)

//     });

// });

// //

// Visibilyto of element on scroll or not
// $(function () {
//     // Получаем нужный элемент
//     var element = document.querySelector('footer');

//     var Visible = function (target) {
//         // let headerBottom = document.querySelectorAll('.header-bottom')[0]
//         // var menuBtn = document.querySelectorAll('.menu-btn')[0]
//         // var footerTop = document.querySelectorAll('.footer-top')[0]
//         // Все позиции элемента
//         var targetPosition = {
//                 top: window.pageYOffset + target.getBoundingClientRect().top,
//                 left: window.pageXOffset + target.getBoundingClientRect().left,
//                 right: window.pageXOffset + target.getBoundingClientRect().right,
//                 bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//             },
//             // Получаем позиции окна
//             windowPosition = {
//                 top: window.pageYOffset,
//                 left: window.pageXOffset,
//                 right: window.pageXOffset + document.documentElement.clientWidth,
//                 bottom: window.pageYOffset + document.documentElement.clientHeight
//             };

//         if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//             targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//             targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//             targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//             // Если элемент полностью видно, то запускаем следующий код
//             $('.connection__bottom-btn').addClass('connection__bottom-btn--none')
//             $('.connection').addClass('connection-margin')

//         } else {
//             $('.connection__bottom-btn').removeClass('connection__bottom-btn--none')
//             $('.connection').removeClass('connection-margin')
//         };
//     };

//     // Запускаем функцию при прокрутке страницы
//     window.addEventListener('scroll', function () {
//         Visible(element);
//     });

//     // А также запустим функцию сразу. А то вдруг, элемент изначально видно
//     Visible(element);
// })
// //
