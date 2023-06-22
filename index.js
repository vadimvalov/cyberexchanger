// скриптецкий на Кнопку, Бургер и Выборку двух значений в обменнике
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

const buttons = document.querySelectorAll("button[data-table]");
const button_extend = document.getElementById("extend_button");

const burgerBtn = document.getElementById("burger-btn");
const menu = document.getElementById("menu");

// модалка
const extendButton = document.getElementById("extend-country-list");
const countryList = document.getElementById("country-list");
const cityList = document.getElementById("city-list");
const mainTitle = document.getElementById("main-title");
const countryInput = document.getElementById("country-input");
const cityInput = document.getElementById("city-input");
const countries = Array.from(countryList.children);
const cities = Array.from(cityList.children);

const extendCityButton = document.getElementById("extend-city-list");
const mainCity = document.getElementById("main-city");

const table_scam = document.getElementById("table_scam");
const table_true = document.getElementById("table_true");
const table_hz = document.getElementById("table_hz");
const desc = document.getElementById("desc");
const trade_desc = document.getElementById("trade_desc");
const mobile_trade_table = document.getElementById("mobile_trade_table");
const desktop_trade_table = document.getElementById("desktop_trade_table");

const giveInput = document.getElementById("give-input");
const receiveInput = document.getElementById("receive-input");

const citySelector = document.getElementById("city-selector");
const closeButton = document.querySelector("#modal .close-button");

function checkInputValues() {
  const giveInputValue = giveInput.value;
  const receiveInputValue = receiveInput.value;

  if (giveInputValue && receiveInputValue) {
    table_scam.classList.add("hidden");
    table_true.classList.add("hidden");
    table_hz.classList.add("hidden");
    desc.classList.add("hidden");
    trade_desc.classList.remove("hidden");
    mobile_trade_table.classList.remove("hidden");
    mobile_trade_table.classList.add("lg:hidden", "block");
    desktop_trade_table.classList.add("md:block");
  }
}

function extend() {
  //banking.classList.toggle('hidden');
  //banking.classList.toggle('md:block');
  //balance.classList.toggle('hidden');
  //balance.classList.toggle('lg:block');
  let tableContainers = document
    .getElementsByClassName("left-tables")[0]
    .getElementsByClassName("table-container");
  for (let tc = 1; tc < tableContainers.length; tc++) {
    let classList = tableContainers[tc].classList;
    classList.toggle("hidden");
    for (let c = 0; c < classList.length; c++)
      if (classList[c].includes("block")) block = classList[c];
    classList.toggle(block);
  }
}

function showModal() {
    modal.classList.toggle('hidden');
    modalContent.classList.add('scale-in-center');
    modalContent.offsetWidth;
}

function updateTitle(element) {
  const firstSpan = element.querySelector("span:first-child");
  mainTitle.innerText = firstSpan.innerText;
  element.style.backgroundColor = "#1A5D89";
  const otherCountries = Array.from(countryList.children)
    .filter((country) => country !== element)
    .forEach((country) => {
      country.style.backgroundColor = "#2C2F3A";
    });
  // countryList.classList.add("hidden");
}

function updateCity(element) {
  const cityName = element.querySelector("span:first-child");
  mainCity.innerText = cityName.innerText;
  element.style.backgroundColor = "#1A5D89";
  const otherCities = Array.from(cityList.children)
    .filter((city) => city !== element)
    .forEach((city) => {
      city.style.backgroundColor = "#2C2F3A";
    });
  // cityList.classList.add("hidden");
}

function turnRowsIntoLinks() {
  let tables = [
    table_true,
    table_scam,
    table_hz,
    desktop_trade_table,
    mobile_trade_table,
  ].forEach((table) => {
    let rows;
    if (table.id === "mobile_trade_table") {
      rows = Array.from(table.getElementsByTagName("section"));
    } else {
      rows = Array.from(
        table.getElementsByTagName("tbody")[0].getElementsByTagName("tr")
      );
    }
    rows.forEach((row) => {
      row.addEventListener("click", () => {
        window.location.href = "exchange.html";
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
    citySelector.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modalContent.classList.toggle('scale-in-center');
    });

  menu.style.cssText = `transform: scaleY(0); transform-origin: top; transition: transform 0.26s ease;`;

    closeButton.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

  button_extend.addEventListener("click", extend);

  turnRowsIntoLinks();

  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("active");
    if (menu.style.cssText.includes("scaleY(0)")) {
      menu.style.cssText = menu.style.cssText.replace(
        "transform: scaleY(0);",
        "transform: scaleY(1);"
      );
    } else {
      menu.style.cssText = menu.style.cssText.replace(
        "transform: scaleY(1);",
        "transform: scaleY(0);"
      );
    }
  });

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.add("focused");
      const table = this.getAttribute("data-table").split("-")[1];
      if (table === "1") {
        giveInput.value = button.querySelectorAll("span")[1].innerHTML;
      } else {
        receiveInput.value = button.querySelectorAll("span")[1].innerHTML;
      }

      const btns = document.querySelectorAll(`button[data-table]`);

      btns.forEach(function (btn) {
        if (
          btn !== button &&
          btn.getAttribute("data-table").split("-")[1] === table
        ) {
          btn.classList.remove("focused");
        }
      });

      checkInputValues();
    });
  });

let countries = Array.from(countryList.children);
let cities = Array.from(cityList.children);

extendButton.addEventListener("click", function () {
  countryList.classList.toggle("hidden");
});

extendCityButton.addEventListener('click', function() {
  cityList.classList.toggle('hidden');
})

countryInput.addEventListener('keyup', function (event) {
  var inputValue = event.target.value.toLowerCase();
  if (inputValue === '') {
    countries.forEach((country) => {
      country.classList.remove('hidden');
    });
  } else {
    countries.forEach((country) => {
      const name = country.querySelector("span:first-child").innerText.toLowerCase();
      if (!name.includes(inputValue)) {
        country.classList.add('hidden');
      } else {
        country.classList.remove('hidden');
      }
    });
  }
});

cityInput.addEventListener('keyup', function (event) {
  var inputValue = event.target.value.toLowerCase();
  if (inputValue === '') {
    cities.forEach((city) => {
      city.classList.remove('hidden');
    });
  } else {
    cities.forEach((city) => {
      const name = city.querySelector("span:first-child").innerText.toLowerCase();
      if (!name.includes(inputValue)) {
        city.classList.add('hidden');
      } else {
        city.classList.remove('hidden');
      }
    });
  }
});
});
