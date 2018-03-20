const images = [
    'img/banner-1.png',
    'img/banner-1.png',
    'img/banner-1.png',
    'img/banner-1.png'
],

sliderPlace = document.querySelector('.slider-block');

createSlider(images, sliderPlace);

function createSlider(images, place) {
  const sliderWrapper = document.createElement('div'),
        slider = document.createElement('div'),
        content = document.createElement('ul'),
        controls = document.createElement('ul');
  
  images.forEach(function(image, index) {
    content.appendChild(createSlide(image));
    controls.appendChild(createControl(image, index));
  });
  
  function createControl(image, index) {
    const ctrlElem = document.createElement('li');
    
    ctrlElem.classList.add('slider__controls-item');
    ctrlElem.dataset.index = index;
    
    return ctrlElem;
  }
  
  function createSlide(image) {
    const slide = document.createElement('li');
    
    slide.classList.add('slider__image');
    slide.style.backgroundImage = `url(${image})`;
    
    return slide;
  }
  
  sliderWrapper.classList.add('slider__wrapper');
  slider.classList.add('slider');
  content.classList.add('slider__content');
  controls.classList.add('slider__controls');
  
  sliderWrapper.appendChild(slider);
  slider.appendChild(content);
  slider.appendChild(controls);
  
  place.innerHTML = '';
  place.appendChild(sliderWrapper);
  
  controls.addEventListener('click', function( e ) {
    const clickedElement = e.target,
          elIdx = clickedElement.dataset.index,
          activeControl = controls.querySelector('.slider__controls-item--active');
    
    if (activeControl) {
      activeControl.classList.remove('slider__controls-item--active');
    }
    
    clickedElement.classList.toggle('slider__controls-item--active');
    content.style.left = `-${elIdx*100}%`;
  });
}
