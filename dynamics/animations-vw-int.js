// Version 2.0 
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) =>{
    const banners = entry.target.querySelectorAll('.banner');
    if(entry.isIntersecting){
      banners.forEach((banner) => banner.classList.add('animate__slideInUp'));
      return;
    }  
    banners.forEach((banner) => banner.classList.remove('animate__slideInUp'));
  });
});

observer.observe(document.querySelector('.banner-container'));
