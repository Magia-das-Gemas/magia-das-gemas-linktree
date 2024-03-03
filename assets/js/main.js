 document.addEventListener('DOMContentLoaded', function() {
  var btnAbout = document.getElementById('btn_about');
  var btnBack = document.getElementById('btn_back'); 
  var aboutSection = document.querySelector('.about');
  var titleSection = document.getElementById('title'); 

  btnAbout.addEventListener('click', function() {
      if (aboutSection.style.display === 'block') {
          aboutSection.style.display = 'none';
      } else {
          aboutSection.style.display = 'block';
          aboutSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
          smoothScrollTo(aboutSection, 550);
      }
  });

  btnBack.addEventListener('click', function() {
      titleSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); 
      aboutSection.style.display = 'none';
  });
});
 
 

function smoothScrollTo(target, duration) {
  var targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}