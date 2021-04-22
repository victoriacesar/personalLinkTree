// PARTICLES BACKGROUND

particlesJS("particles-js", {
  "particles": {
  "number": {
    "value": 355,
    "density": {
      "enable": true,
      "value_area": 789.1476416322727
    }
  },
  "color": {
    "value": "#ef626c"
  },
  "shape": {
    "type": "circle",
    "stroke": {
      "width": 0,
      "color": "#000000"
    },
    "polygon": {
      "nb_sides": 5
    },
    "image": {
      "src": "img/github.svg",
      "width": 100,
      "height": 100
    }
  },
  "opacity": {
    "value": 0.48927153781200905,
    "random": false,
    "anim": {
      "enable": true,
      "speed": 0.2,
      "opacity_min": 0,
      "sync": false
    }
  },
  "size": {
    "value": 2,
    "random": true,
    "anim": {
      "enable": true,
      "speed": 2,
      "size_min": 0,
      "sync": false
    }
  },
  "line_linked": {
    "enable": false,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
  },
  "move": {
    "enable": true,
    "speed": 1.6,
    "direction": "none",
    "random": true,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 600,
      "rotateY": 1200
    }
  }
},
"interactivity": {
  "detect_on": "window",
  "events": {
    "onhover": {
      "enable": true,
      "mode": "bubble"
    },
    "onclick": {
      "enable": true,
      "mode": "push"
    },
    "resize": true
  },
  "modes": {
    "grab": {
      "distance": 400,
      "line_linked": {
        "opacity": 1
      }
    },
    "bubble": {
      "distance": 83.91608391608392,
      "size": 1,
      "duration": 3,
      "opacity": 1,
      "speed": 3
    },
    "repulse": {
      "distance": 200,
      "duration": 0.4
    },
    "push": {
      "particles_nb": 4
    },
    "remove": {
      "particles_nb": 2
    }
  }
},
"retina_detect": true
});

const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]')


const initialColors = {
  firstColor: window.getComputedStyle(html).getPropertyValue('--first-color'),
  secondColor: window.getComputedStyle(html).getPropertyValue('--second-color'),
  thirdColor: window.getComputedStyle(html).getPropertyValue('--third-color'),
  colorText: window.getComputedStyle(html).getPropertyValue('--color-text'),
  grayColor: window.getComputedStyle(html).getPropertyValue('--gray-color'),
  whiteColor: window.getComputedStyle(html).getPropertyValue('--white-color'),
}

const darkColors = {
  firstColor: '#212121',
  secondColor: '#ef626c',
  thirdColor: '#333333',
  colorText: '#B5B5B5',
  grayColor: 'rgba(10, 10, 10, 0.35)',
  whiteColor: '#333333'
}

function transformKey(key){
  return "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
}

function changeColors(colors){
  const keys = Object.keys(colors)
  keys.map(key => {
    html.style.setProperty(transformKey(key), colors[key])
  })
}

const checkboxColorMode = JSON.parse(localStorage.getItem('color-mode'))

if (checkboxColorMode) {
  checkbox.checked = checkboxColorMode
  changeColors(darkColors)
}

checkbox.addEventListener('change', ({target}) => {
  target.checked ? changeColors(darkColors) : changeColors(initialColors)

  localStorage.setItem('color-mode', target.checked)
})

const buttonEmail = document.querySelector('button[type=submit]')
const inputEmail = document.querySelector('input[type=email]')

buttonEmail.addEventListener('click', e => {
  inputEmail.value = ''
})