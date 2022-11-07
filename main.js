const API = "http://localhost:8000/infor";

let closeModalBtn = document.querySelector("#close-modal");
let statusImg = document.querySelector("#statusImgUrl");
let nikName = document.querySelector("#nikName");
let adress = document.querySelector("#location");
let mainPostImg = document.querySelector("#mainPostImg");
let saveInfo = document.getElementById("saveInfo");
let details = document.querySelector("#details");

let sectionRead = document.querySelector("#section-read");

let postCard = document.querySelector("#filter-post");
let mainModal = document.getElementsByClassName("main-modal")[0];
let closeModal = document.querySelector("#close-modal");

let closeModalEdit = document.querySelector("#close-modal2");
let statusImgEdit = document.querySelector("#statusImgUrlEdit");
let nikNameEdit = document.querySelector("#nikNameEdit");
let adressEdit = document.querySelector("locationEdit");
let mainPostImgEdit = document.getElementById("mainPostImgEdit");
let detailsEdit = document.getElementById("detailsEdit");
let saveInfoEdit = document.getElementById("saveInfoEdit");

let mainModal2 = document.getElementsByClassName("main-modal2")[0];

let search = document.getElementsByClassName("search-txt")[0];
searchValue = search.value;

let prevBtn = document.getElementById("paginateNext");
let nextBtn = document.getElementById("paginatePrev");
let currentPage = 1;

//todo ================================= CREATE START ==================================
function createInfo(obj) {
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(obj),
  }).then(() => readInfo());
}

saveInfo.addEventListener("click", () => {
  if (
    !statusImg.value.trim() ||
    !nikName.value.trim() ||
    !adress.value.trim() ||
    !mainPostImg.value.trim() ||
    !details.value.trim()
  ) {
    alert("Заполните поле");
    return;
  }
  let objInfo = {
    status: statusImg.value,
    name: nikName.value,
    adress: adress.value,
    mainImg: mainPostImg.value,
    details: details.value,
  };
  createInfo(objInfo);
  statusImg.value = "";
  nikName.value = "";
  adress.value = "";
  mainPostImg.value = "";
  details.value = "";
  mainModal.style.display = "none";
});
postCard.addEventListener("click", () => {
  mainModal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  mainModal.style.display = "none";
});
