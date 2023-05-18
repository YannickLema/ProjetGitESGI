// Empécher le déclenchement des transitions au chargement de la page
document.getElementById('site-body').classList.remove('no-transition');

// Ajout d'un écouteur d'événement sur le menu-button
document.getElementById('menu-button').addEventListener('click', function(){
	document.getElementById('site-nav').classList.toggle('visible');
})

const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
 });

// // Redirection vers Facebook
// document.getElementById('facebookLink').addEventListener('click', function() {
//   window.location.href = 'https://www.facebook.com';
// });

// // Redirection vers Twitter
// document.getElementById('twitterLink').addEventListener('click', function() {
//   window.location.href = 'https://www.twitter.com';
// });

// // Redirection vers Instagram
// document.getElementById('instagramLink').addEventListener('click', function() {
//   window.location.href = 'https://www.instagram.com';
// });

// var promoVideo = document.getElementById('promoVideo');
// var playButton = document.getElementById('playButton');
// var videoOverlay = document.getElementById('videoOverlay');

// playButton.addEventListener('click', function() {
//   if (promoVideo.paused) {
//     promoVideo.play();
//     videoOverlay.style.display = 'none';
//   } else {
//     promoVideo.pause();
//     videoOverlay.style.display = 'flex';
//   }
// });
