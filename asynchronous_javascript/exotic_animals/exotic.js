let animals = [
  {
    'src': 'images/quetzal.jpeg',
    'figcaption': 'Quetzal are found in forests and woodlands, especially in humid highlands, with the five species from the genus Pharomachrus being exclusively Neotropical, while the single Euptilotis species is found in Mexico and very locally in southern United States'
  },
  {
    'src': 'images/blackbuck.jpeg',
    'figcaption': 'The blackbuck,  also known as the Indian antelope, is an antelope found in Pakistan, India and Nepal.The blackbuck is the sole extant member of the genus Antilope. The species was described and given its binomial name by Swedish zoologist Carl Linnaeus in 1758.'
  },
  {
    'src': 'images/golden_pheasant.jpeg',
    'figcaption': 'The golden pheasant or Chinese pheasant (Chrysolophus pictus) is a gamebird of the order Galliformes (gallinaceous birds) and the family Phasianidae (pheasants). It is native to forests in mountainous areas of western China.'
  },
  {
    'src': 'images/greater_bird_of_paradise.jpeg', 
    'figcaption': 'The greater bird-of-paradise (Paradisaea apoda) is a bird-of-paradise in the genus Paradisaea. The greater bird-of-paradise is the largest member in the genus Paradisaea, with males measuring up to 43 cm (17 in) (excluding the long twin tail wires). The female is smaller, at only 35 cm (14 in).'
  },
  {
    'src': 'images/rainbow_lorikeet.jpeg',
    'figcaption': 'The rainbow lorikeet (Trichoglossus moluccanus) is a species of parrot found in Australia. It is common along the eastern seaboard, from northern Queensland to South Australia and Tasmania. Its habitat is rainforest, coastal bush and woodland areas.'
  },
  {
    'src': 'images/vampire_squid.jpeg',
    'figcaption': 'The vampire squid is a small, deep-sea cephalopod found throughout the temperate and tropical oceans of the world. Unique retractile sensory filaments justify the vampire squid\'s placement in its own order: Vampyromorphida.'
  },
  {
    'src': 'images/genet.jpeg',
    'figcaption': 'A genet is a member of the genus Genetta, which consists of 14 to 17 species of small African carnivorans. Genet fossils from the Pliocene have been found in Morocco. The common genet is the only genet present in Europe and occurs in the Iberian Peninsula and France.'
  },
  {
    'src': 'images/lined_butterflyfish.jpeg',
    'figcaption': 'The lined butterflyfish is a butterflyfish (family Chaetodontidae), one of the largest species in the genus Chaetodon. They have a wide range from the Red Sea to South Africa and as far east as southern Japan and Hawaii.'
  },
]

// document.addEventListener('DOMContentLoaded', function() {
//   let animalPhotos = document.getElementById('animal-photos');

//   let templateHTML = document.getElementById('animals-template').innerHTML;
//   let template = Handlebars.compile(templateHTML);
//   let compiledHTML = template(({ animals: animals }));

//   animalPhotos.innerHTML = compiledHTML;

//   let animalFigures = document.querySelectorAll('figure');
//   let timeout;

//   [...animalFigures].forEach(figure => {
//     figure.addEventListener('mouseenter', function(e) {
//       e.preventDefault();

//       timeout = setTimeout(() => $(e.target.querySelector('figcaption')).fadeIn(400), 2000)
//     })

//     figure.addEventListener('mouseleave', function(e) {
//       e.preventDefault();

//       clearTimeout(timeout);
//       $(e.target.querySelector('figcaption')).fadeOut(400);
//     });
//   });
// });



let templateHTML = document.getElementById('animals-template').innerHTML;
let element = document.getElementById('animal-photos');
let template = Handlebars.compile(templateHTML);
let compiledHTML = template({ animals: animals });

element.innerHTML = compiledHTML;

let figures = document.querySelectorAll('figure');
let timeout;


function showFigcaption(e) {
  e.preventDefault();

  timeout = setTimeout(() => {
    $(e.target.querySelector('figcaption')).fadeIn(400);
  }, 2000);
}

function hideFigcaption(e) {
  e.preventDefault();

  clearTimeout(timeout);
  $(e.target.querySelector('figcaption')).fadeOut(400);
}

[...figures].forEach(figure => {
  figure.addEventListener('mouseenter', showFigcaption);
  figure.addEventListener('mouseleave', hideFigcaption);
})










