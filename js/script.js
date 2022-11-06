choiceElement()
trackSliderValueChange()

document.querySelector('.menu__drop-btn').onclick = function addClassHeader(){
    let menuDrop = document.querySelector('.menu__drop-btn')
    let menuBtn = document.querySelector('.menu')
    menuDrop.classList.toggle('active')
    menuBtn.classList.toggle('active')
}

document.querySelector('.select-menu').onclick = function addClassSrollMenu(){
    let inputBtn = document.querySelector('.select-menu__header')
    let list = document.querySelector('.select-menu__list')
    inputBtn.classList.toggle('active')
    list.classList.toggle('active')
}

function choiceElement(){
    let elementsList = document.querySelectorAll('.select-menu__list-elem');
    let titleList =  document.querySelector('.select-menu__header-title')
    elementsList.forEach((element) => {
        element.addEventListener('click', () => {
            titleList.innerHTML = element.innerHTML
        });
    });
}

function trackSliderValueChange() {
    let orderFormSliderValue = document.querySelector('.range-slider__header-value');
    let orderFormSlider = document.querySelector('.range-slider__input');
  
    orderFormSlider.addEventListener('input', () => {
      orderFormSliderValue.textContent = `${orderFormSlider.value} %`;
    });
}