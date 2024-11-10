let swiperCards = new Swiper('.card__content', {
    loop: true,
    spaceBetween: 32,
    grabCurser: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints:{
        600:{
            slidesPerView:2,
        },
        968:{
            slidesPerView:3,
        },
    },
  });

  var div = document.getElementById('main')
  var display = 0

  function hideShow(){
    if(display == 1){
      div.style.display = 'block'
      display = 0
    }else{
      div.style.display = 'block'
      display = 1
    }
  }

  function closeButton(){
    div.style.display = 'none'
  }

  let previewContainer = document.querySelector('.highlight')
  let previewBox = previewContainer.querySelectorAll('.preview')

  document.querySelectorAll('.card__content .card__artical').forEach(artical => {
    artical.onclick = () => {
      previewContainer.style.display = 'flex'
      let name = artical.getAttribute('data-name')
      previewBox.forEach(preview => {
        let target = preview.getAttribute('data-target')
        if(name == target){
          preview.classList.add('active')
        }
      })
    }
  })

  previewBox.forEach(close => {
    close.querySelector('.ri-close-line').onclick = () => {
      close.classList.remove('active')
      previewContainer.style.display = 'none'
    }
  })