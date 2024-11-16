import './main.css';
import './styles.css';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    effect: 'fade',
    speed: 1200,
    loop: true,
    centeredSlides: true,

    autoplay: true,

    fadeEffect: {
        crossFade: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

});

const modal = document.getElementById("myModal");
const modalBody = document.getElementById("modalBody");
const span = document.getElementsByClassName("close")[0];

if (span) {
    span.addEventListener('click', () => {
        modal.className = "hidden";
        document.body.classList.remove('overflow-y-hidden');
    })
}

document.querySelectorAll(".modal-trigger").forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        const targetId = this.getAttribute('data-modal-target');
        const content = document.getElementById(targetId).innerHTML;
        openModal(content);
    });
});

function openModal(content) {
    document.body.classList.add('overflow-y-hidden');
    modalBody.innerHTML = content;
    modal.className = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        document.body.classList.remove('overflow-y-hidden');
        modal.className = "hidden";
    }
}

// range

const ranges = document.querySelectorAll('.range-slider');
const revenu = document.querySelector('#revenu');

if (ranges) {
    ranges.forEach((range, id) => {
        const num = id + 1;
        range.addEventListener("input", () => updateSliderValue(num));
    })
}


function updateSliderValue(sliderNumber) {
    const slider = document.getElementById("slider" + +sliderNumber);
    const output = document.getElementById("rangeValue" + +sliderNumber);
    output.innerHTML = slider.value;

    const percent = (slider.value / slider.max) * 100;
    output.style.left = percent + "%";
    output.style.transform = 'translateX(-' + percent + '%)';
    updateRevenuValue()
}

const SHOOT_200 = 120;
const SHOOT_200_500 = 175;
const SHOOT_500 = 250;


function updateRevenuValue() {
    const values = getvalues()
    const sum = values[0] * SHOOT_200 + values[1] * SHOOT_200_500 + values[2] * SHOOT_500
    revenu.innerHTML = "$" + sum
}

function getvalues() {
    const values = []
    ranges.forEach(range => values.push(range.value))
    return values;
}
