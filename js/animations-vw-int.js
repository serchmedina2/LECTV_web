// Version 2.0 
/**
 *  A function that adds an Animate CSS' class to 
 *  a specific class of the elements inside of it
 *  in a container selected, when the container
 *  is visible on screen.
 *  It has 3 arguments parent, the parent container element
 *  elementClass, the class we want to animate and the
 *  animation name. This can work with personalized css
 *  animations too.
 * */
function scrollAnimation(parent, elementClass, animation) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) =>{
      const banners = entry.target.querySelectorAll(elementClass);
      if(entry.isIntersecting){
        banners.forEach((banner) => banner.classList.add(animation));
        return;
      }
      banners.forEach((banner) => banner.classList.remove(animation));
    });
  });
  const parentElements = document.querySelectorAll(parent);
  parentElements.forEach((parentE) => observer.observe(parentE));
}

scrollAnimation('.banner-container', '.banner', 'animate__backInUp');

scrollAnimation('.news-grid', '.new-container', 'animate__bounceIn')

