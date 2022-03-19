import React from "react";
import { DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import { IoLogoFirebase, IoLogoNodejs } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";

export const projects = [
  {
    id: "proj18",
    name: "Recette de Poche",
    thumbnail: "./assets/img/projects/thumbnails/thumb-recette.jpg",
    images: [
      "./assets/img/projects/recette/recette1.jpg",
      "./assets/img/projects/recette/recette2.jpg",
      "./assets/img/projects/recette/recette3.jpg",
      "./assets/img/projects/recette/recette4.jpg",
    ],
    description: [
      "Over the years I have gathered a bunch of recipes I like. I made the app so I could search through them quickly.",
      "I added a randomize feature for the days I don't know what to cook.",
      "The App was built with ReactJS on the frontend using useReduce + Context API",
      "NodeJs(Express) was used to make a REST API to serve the frontend. The API was secured with JWT, Helmet, XSS, CORS and Express-rate-limiter.",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "reactjs",
        skillIcon: <DiReact />,
      },
      {
        skillName: "nodejs",
        skillIcon: <IoLogoNodejs />,
      },
    ],
    livedemo: "https://romainnm.github.io/recettedepoche",
    github: "https://github.com/romainnm/recettedepoche",
    restapi: "https://recette-de-poche.herokuapp.com/api-docs/",
  },
  {
    id: "proj17",
    name: "Waldo Game (photo tagging app)",
    thumbnail: "./assets/img/projects/thumbnails/thumb-waldo.jpg",
    images: [
      "./assets/img/projects/waldo/waldo2.jpg",
      "./assets/img/projects/waldo/waldo1.jpg",
      "./assets/img/projects/waldo/waldo3.jpg",
      "./assets/img/projects/waldo/waldo4.jpg",
    ],
    description: [
      "The goal with this project was to build something similar to a photo tagging app using ReactJS on the front-end and learn to use Firebase/Firestore to run the back-end.",
      "To make things fun, I built a Waldo Game where the player clicks on an image to find a set of characters. Whenever the player clicks on the image and selects a character, he is immediately prompted with an alert that notifies him whether the character is found or not.",

      "I found this project interesting because it had me manipulate the window object, getting click coordinates and positioning elements with these coordinates. The clicks and selections logic happens on the front-end, whereas the backend holds information about the different characters to find.",

      "If you are not familiar with Waldo, it's a game where the player has to find different characters in a totally bizarre scenery! Try it out in the live preview and see if you can make it to the leaderboard!",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "reactjs",
        skillIcon: <DiReact />,
      },
      {
        skillName: "firebase",
        skillIcon: <IoLogoFirebase />,
      },
    ],
    livedemo: "https://romainnm.github.io/waldo-firebase/",
    github: "https://github.com/romainnm/waldo-firebase",
  },
  {
    id: "proj16",
    name: "Happy Pie - Shopping Cart",
    thumbnail: "./assets/img/projects/thumbnails/thumb-shop.jpg",
    images: [
      "./assets/img/projects/shop/shopcart1.jpg",
      "./assets/img/projects/shop/shopcart2.jpg",
      "./assets/img/projects/shop/shopcart3.jpg",
    ],
    description: [
      "This project was made to piece together my learning of ReactJS which was heavily focused on Functional Components and Hooks. It also uses React Router DOM to manage dynamically the navigation to the different pages.",
      "The main focus of this project wasn't so much to build a shop. But more so to focus on the shopping cart functionality which lets the user add, edit, delete products and have an immediate feedback of the products count and total price.",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "reactjs",
        skillIcon: <DiReact />,
      },
    ],
    livedemo: "https://romainnm.github.io/shopping-cart/",
    github: "https://github.com/romainnm/shopping-cart",
  },
  {
    id: "proj15",
    name: "Memory Game",
    thumbnail: "./assets/img/projects/thumbnails/thumb-memory.jpg",
    images: ["./assets/img/projects/memory/memory.jpg"],
    description: [
      'Memory Game was made to cement some of the new concepts I learned with ReactJS and especially how React Hooks work and how they can act similarly to the "lifecycle" of the Class Components.',
      "Game rules: There are 10 images in total. 1 point is scored every time a new fruit is clicked. If the fruit clicked was previously clicked, you lose and the current score resets. To make things more difficult, the game board is shuffled whenever an image is clicked! ",
      "Challenge your memory and get the highest score! You can try the game in the live preview.",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "reactjs",
        skillIcon: <DiReact />,
      },
    ],
    livedemo: "https://romainnm.github.io/memory-game/",
    github: "https://github.com/romainnm/memory-game/",
  },
  {
    id: "proj14",
    name: "Quick CV - CV App",
    thumbnail: "./assets/img/projects/thumbnails/thumb-cv.jpg",
    images: [
      "./assets/img/projects/cv/cv1.jpg",
      "./assets/img/projects/cv/cv2.jpg",
    ],
    description: [
      "Quick CV is an app that lets users input information and generate a basic CV.",
      "That was the first project I made with ReactJS. Its main focus was to help me get the basics of ReactJS by learning how Class Components and Props work.",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "reactjs",
        skillIcon: <DiReact />,
      },
    ],
    livedemo: "https://romainnm.github.io/cv-project",
    github: "https://github.com/romainnm/cv-project",
  },
  {
    id: "proj13",
    name: "Tic Tac Toe",
    thumbnail: "./assets/img/projects/thumbnails/thumb-tic.jpg",
    images: [
      "./assets/img/projects/tictactoe/tic1.jpg",
      "./assets/img/projects/tictactoe/tic2.jpg",
      "./assets/img/projects/tictactoe/tic3.jpg",
    ],
    description: [
      "This Tic Tac Toe game was made to explore the idea of privacy in JavaScript by using the Module pattern, Immediately Invoked Function Expression (IIFE) and Closures.",
      "Module patterns are a great way to create private methods and properties. This way, any state within a function can be hidden or revealed when returned as public methods. In this particular project, all the logic is hidden in module patterns.",
      "The game is available in the live preview. Take a break and grab someone nearby to  challenge them to a Tic Tac Toe!",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "javascript",
        skillIcon: <DiJavascript />,
      },
    ],
    livedemo: "https://romainnm.github.io/tictactoe/",
    github: "https://github.com/romainnm/tictactoe/",
  },
  {
    id: "proj12",
    name: "myBookShelf",
    thumbnail: "./assets/img/projects/thumbnails/thumb-book.jpg",
    images: ["./assets/img/projects/mybookshelf/mybookshelf.jpg"],
    description: [
      "myBookShelf is a library app that keeps track of books read.",
      "This is a basic JavaScript app that lets a user submit and render information. It is perfect to learn about DOM manipulation, object instantiation and localStorage to store data locally.",
    ],
    skills: [
      {
        skillName: "html-css",
        skillIcon: <DiHtml5 />,
      },
      {
        skillName: "javascript",
        skillIcon: <DiJavascript />,
      },
    ],
    livedemo: "https://romainnm.github.io/project-library/",
    github: "https://github.com/romainnm/project-library/",
  },
  {
    id: "proj11",
    name: "The NewHab challenge",
    thumbnail: "./assets/img/projects/thumbnails/thumb-newhab.jpg",
    images: [
      "./assets/img/projects/newhab/01newhabchallenge.jpg",
      "./assets/img/projects/newhab/01newhab-logo.jpg",
      "./assets/img/projects/newhab/01pochette1.jpg",
    ],
    description: [
      "TheNewHab Challenge website was initially made to be paired with a podcast project aimed at building new healthy habits. Two episodes were made, but we realized that the audio space wasn't for us.",
      "However, this project gave me the opportunity to explore Ruby On Rails and SASS. You can see below some of the mockups I worked on, such as the website layout, logo ,and podcast cover.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj10",
    name: "TravelStep",
    thumbnail: "./assets/img/projects/thumbnails/thumb-travelstep.jpg",
    images: [
      "./assets/img/projects/travelstep/02travelstep.jpg",
      "./assets/img/projects/travelstep/02homePage.jpg",
      "./assets/img/projects/travelstep/02itineraire.jpg",
    ],
    description: [
      "I love travel and building a website around it has always been in a corner of my head. While waiting for the perfect concept, I've been enjoying exploring ideas and prototyping.",
      "TravelStep was one of these ideas.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj09",
    name: "Portfolio Prototype",
    thumbnail: "./assets/img/projects/thumbnails/thumb-folio.jpg",
    images: [
      "./assets/img/projects/portfolioprototype/Prototype---Portfolio.jpg",
    ],
    description: [
      "This is an older portfolio of mine. It is showcasing parts of my design process.",
      "I like to start by breaking down the design elements into color palettes, fonts and spacing. It helps me with consistency throughout a project. Then I work on a mobile and web mockup to visualize the responsive behaviours.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj08",
    name: "Personal Logo",
    thumbnail: "./assets/img/projects/thumbnails/thumb-logo.jpg",
    images: ["./assets/img/projects/personallogo/03personallogo.jpg"],
    description: [
      "Spending time on Behance and Dribbble got me inspired and led me to work on a logo concept for myself.",
      "Few key concept here. I love minimalist design. I love the outdoors and green reminds me of it, and finally my last name is short enough that I can play around with it!",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj07",
    name: "DriftyFeet Logo",
    thumbnail: "./assets/img/projects/thumbnails/thumb-drifty.jpg",
    images: [
      "./assets/img/projects/driftyfeet/05drifty-proto1.jpg",
      "./assets/img/projects/driftyfeet/05proto2-2.jpg",
    ],
    description: [
      "I love traveling and ended up with lots of footage! To make use of them I started making short clips to share with friends and family. DriftyFeet was born because I wanted to add a logo to my videos!",
      "Below are some of the concepts I came up with.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj06",
    name: "Taiwan Bike Tour",
    thumbnail: "./assets/img/projects/thumbnails/thumb-taiwan.jpg",
    images: [
      "./assets/img/projects/taiwan/bike-taiwan-v2.jpg",
      "./assets/img/projects/taiwan/map.jpg",
    ],
    description: [
      "In 2015, I lived in Taiwan and loved it so much that I decided to bike the entire island!",
      "I was eventually invited to share my experience in a local event and made that flyer for the occasion.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj05",
    name: "Up'Generation new year card",
    thumbnail: "./assets/img/projects/thumbnails/thumb-upgcard.jpg",
    images: ["./assets/img/projects/upgeneration/07print.jpg"],
    description: [
      "At the time I was working at Up’Generation, it was customary to send a happy new year card to our partners.",
      "In this card, we wanted to emphasize gratefulness for partnerships and wish innovation and success to everyone.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj04",
    name: "TAM Place",
    thumbnail: "./assets/img/projects/thumbnails/thumb-tamplace.jpg",
    images: ["./assets/img/projects/tamplace/06tamplace_home.jpg"],
    description: [
      "TAM Place is a social network for businesses powered by Up'Generation.",
      "I got hired as a Web Designer to revitalize the app design, and customized interfaces for our clients.",
      "Here is one of the interface I worked on.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj03",
    name: "Lointains Espaces",
    thumbnail: "./assets/img/projects/thumbnails/thumb-le.jpg",
    images: [
      "./assets/img/projects/le/07lointain_espace.jpg",
      "./assets/img/projects/le/LE02.jpg",
      "./assets/img/projects/le/LE03.jpg",
    ],
    description: [
      "Lointains Espaces was a travel agency that needed a website to show their tour packages in Asia.",
      "I took part in this project as a web designer and partner with a developer to build the website.",
      "Sadly, the website and the agency no longer exists due the pandemic.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj01",
    name: "Espoir18",
    thumbnail: "./assets/img/projects/thumbnails/thumb-e18.jpg",
    images: [
      "./assets/img/projects/espoir/08espoir18-1.jpg",
      "./assets/img/projects/espoir/08espoir18-2.jpg",
    ],
    description: [
      "Espoir18 is local association based in the 18th disctrict of Paris.",
      "I worked there as an intern to help them make posters to promote cultural, sport and artistic events to the youth of the local community.",
    ],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
  {
    id: "proj02",
    name: "Tank Logo/T-Shirt",
    thumbnail: "./assets/img/projects/thumbnails/thumb-tank.jpg",
    images: [
      "./assets/img/projects/tank/09TANK.jpg",
      "./assets/img/projects/tank/resultat.jpg",
    ],
    description: ["This logo was made for a local collective in my hometown."],
    skills: [
      {
        skillName: "photoshop",
        skillIcon: <SiAdobephotoshop />,
      },
    ],
  },
];
