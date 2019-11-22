var message = `
Hi there, my name is Adam. I'm a software developer with expertise in Ruby
    on Rails. I also have experience with front end Javascript frameworks 
    such as Ember and React. I'm passionate about open source software, and in my free time I like
    to contribute to <a class="link-text" href='https://github.com/bundler/bundler/commits?author=ajwann'>Bundler</a>
  and <a class="link-text" href='https://github.com/exercism/ruby/commits?author=ajwann'>Exercism.io</a>.
  I currently live and work in Columbus OH, where I am also active in the
  local Ruby on Rails scene. You can often find me at the 
  <a class="link-text" href='https://www.meetup.com/Mutually-Human-Hack-Night'>Mutually Human Hack Night</a>
  and the <a class="link-text" href='http://columbusrb.com/'>Columbus Ruby Brigade</a>.
`;

var about = document.getElementById("about")
var infoIconHTML = about.innerHTML;

about.addEventListener('click', function(e) {
  about.innerHTML = 
    '<div class="about-content"><div id="about-content-exit"><i class="fas fa-window-close"></i></div>' + message + '</div>';
  
  var aboutExit = document.getElementById("about-content-exit");
  aboutExit.addEventListener('click', function(e) {
  e.stopPropagation();
  about.innerHTML = infoIconHTML;
})
});