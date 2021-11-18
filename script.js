var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      slidesPerColumn: 1,
   //slidesPerColumnFill: "row",
  // slidesPerGroup: 6,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    
    
  const wraper = document.querySelector('.swiper-wrapper');
  function addBook(book){
   const div  = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = book;
    wraper.appendChild(div)
  }
  
  addBook('book me');
  addBook('two book')