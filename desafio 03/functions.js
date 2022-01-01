const tipSelected = document.querySelectorAll(".tips-selection li");
const buttonResult = document.querySelectorAll(".result button");
// console.log(buttonSelected)
let tipItens = "";
let tipArrey = [];
let resultTipPerson = 0;
let resultTip = 0;
let totalResult = 0;
let teste = 0

function tipValue(index) {
  let customTip = customInput.value;
  let billValue = Number(billInput.value);
  tipSelected.forEach((actived) => {
    tipItens += actived.innerHTML;
    tipArrey = tipItens.split("%");
    tipArrey.pop();
    tipArrey.push(customTip);
    resultTip = (tipArrey[index] / 100);
    teste = resultTip * billValue
  });
}

function activeTip(index) {
  tipSelected.forEach((actived) => {
    actived.classList.remove("button-selected");
  });
  tipSelected[index].classList.add("button-selected");
}

tipSelected.forEach((buttonActive, index) => {
  buttonActive.addEventListener("click", () => {
    activeTip(index);
    tipValue(index);
  });
});

function alterTotals() {
  let billValue = Number(billInput.value);
  let numberPeople = Number(personInput.value);
  resultTipPerson = teste / personInput.value;
  totalResult = resultTipPerson + (billValue / numberPeople);

  if (billValue != 0 && numberPeople != 0) {
    totalTip.innerHTML = resultTipPerson.toFixed(2);
    total.innerHTML = totalResult.toFixed(2);
  }
  resetButton()
}

const insertInfo = document.querySelectorAll(".empty");
const errorInputBill = document.querySelectorAll("#billInput");
function confirmInfoBill() {
  let billValue = Number(billInput.value);
  insertInfo.forEach((changeStatus) => {
    changeStatus.classList.remove("empty");
  });
  if (billValue === 0) {
    errorInputBill.forEach((showError) => {
      errorBill.style.visibility = "visible";
      showError.classList.add("error-input");
      showError.classList.remove("empty");
    });
  } else {
    errorInputBill.forEach((showError) => {
      errorBill.style.visibility = "hidden";
      showError.classList.remove("error-input");
    });
  }
}

const errorInputPerson = document.querySelectorAll("#personInput");
function confirmInfoPerson() {
  let numberPeople = Number(personInput.value);
  insertInfo.forEach((changeStatus) => {
    changeStatus.classList.remove("empty");
  });
  if (numberPeople === 0) {
    errorInputPerson.forEach((showError) => {
      errorPeople.style.visibility = "visible";
      showError.classList.add("error-input");
      showError.classList.remove("empty");
    });
  } else {
    errorInputPerson.forEach((showError) => {
      errorPeople.style.visibility = "hidden";
      showError.classList.remove("error-input");
      alterTotals();
    });
  }
}

const buttonReset = document.querySelectorAll(".empty-button")

function resetButton(){

  if(totalTip.innerHTML != 0 && total.innerHTML != 0){
    buttonReset.forEach((changeStatus) => {
      changeStatus.classList.add("result-button");
      changeStatus.classList.remove("empty-button")
      changeStatus.addEventListener('click', () => {
        location.reload()
      })
    })
  }
}
