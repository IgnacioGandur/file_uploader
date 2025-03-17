const tools = [
    {
        link: "https://nodejs.org/en",
        name: "Node JS",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="url(#deviconNodejs0)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"/><path fill="url(#deviconNodejs1)" d="M116.897 29.76L66.841.825A8 8 0 0 0 65.302.23L9.21 96.798a6.3 6.3 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 0 0-1.302-1.072"/><path fill="url(#deviconNodejs2)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"/><defs><linearGradient id="deviconNodejs0" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop stop-color="#3f873f"/><stop offset=".33" stop-color="#3f8b3d"/><stop offset=".637" stop-color="#3e9638"/><stop offset=".934" stop-color="#3da92e"/><stop offset="1" stop-color="#3dae2b"/></linearGradient><linearGradient id="deviconNodejs1" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset=".138" stop-color="#3f873f"/><stop offset=".402" stop-color="#52a044"/><stop offset=".713" stop-color="#64b749"/><stop offset=".908" stop-color="#6abf4b"/></linearGradient><linearGradient id="deviconNodejs2" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset=".092" stop-color="#6abf4b"/><stop offset=".287" stop-color="#64b749"/><stop offset=".598" stop-color="#52a044"/><stop offset=".862" stop-color="#3f873f"/></linearGradient></defs></svg>',
        description: "The Javascript runtime used to run this web app",
        color: "#3d983655",
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML#reference",
        name: "HTML",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"/><path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16z"/><path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z"/><path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z"/></svg>',
        description: "To structure the website",
        color: "#e44f2655",
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        name: "CSS",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#1572b6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/><path fill="#33a9dc" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/><path fill="#ebebeb" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/><path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/><path fill="#ebebeb" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/></svg>',
        description: "To style the website",
        color: "#1572b655",
    },
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        name: "Javascript",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#ffca28" d="M2 2v12h12V2zm6 6h1v4a1.003 1.003 0 0 1-1 1H7a1.003 1.003 0 0 1-1-1v-1h1v1h1zm3 0h2v1h-2v1h1a1.003 1.003 0 0 1 1 1v1a1.003 1.003 0 0 1-1 1h-2v-1h2v-1h-1a1.003 1.003 0 0 1-1-1V9a1.003 1.003 0 0 1 1-1"/></svg>',
        description: "The language used for the back and front end",
        color: "#ffca2855",
    },
    {
        link: "https://expressjs.com/",
        name: "Express",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#0f0f0f" d="M228 182.937a12.73 12.73 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.29 13.29 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.95 11.95 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.56 5.56 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.86 33.86 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.15 45.15 0 0 1-21.573 32.972a52.26 52.26 0 0 1-60.884-7.784a54.77 54.77 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A861 861 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"/></g></svg>',
        description: "The framework used to write the server app",
        color: "#f4f2ed55",
    },
    {
        link: "https://expressjs.com/en/resources/middleware/session.html",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#ac5811" d="m15.99 35.76l-4.26.98s-5.91 9.12-7.2 18.82c-.81 6.09-.84 14.04-.28 18c.57 3.96 2.61 12.39 5.82 18.33c3.09 5.72 6.1 7.97 9.39 9.96c1.41.85 2.67 3.76 4.87 5.17c2.06 1.32 4.78 1.58 4.78 1.58s7.52 11.81 23.79 13.86c19.09 2.4 28.43-6.22 28.43-6.22s7.64-.02 14.85-3.11c8.09-3.47 12.41-10.69 12.41-10.69s10.13-8.72 13.34-19.16c2.58-8.38 2.65-24.31.67-31.81s-5.81-13.85-8.85-17.92c-2.42-3.24-29.44-17.6-32.7-18.88c-3.25-1.27-33.52-3.25-34.65-2.4c-1.13.86-30.41 23.49-30.41 23.49"/><radialGradient id="notoCookie0" cx="64.164" cy="57.596" r="53.202" gradientUnits="userSpaceOnUse"><stop offset=".507" stop-color="#f29f58"/><stop offset=".715" stop-color="#f09d56"/><stop offset=".826" stop-color="#eb9550"/><stop offset=".914" stop-color="#e18745"/><stop offset=".99" stop-color="#d47436"/><stop offset="1" stop-color="#d27133"/></radialGradient><path fill="url(#notoCookie0)" d="M26.53 19.75c-7.05 5.74-10.7 8.74-14.36 15.92S9.69 52.38 10.35 55.9c.65 3.52 1.83 10.31 2.48 13.7c.65 3.4 2.38 11.46 7.17 16.45c6.71 6.99 12.79 9.4 12.79 9.4s4.93 7.64 16.84 12.01c15.66 5.74 22.71-2.61 28.71-4.83s13.18-2.35 19.32-6.66c6.13-4.31 12.92-9.53 17.36-20.49s3.52-15.79 3.65-18.53s-.26-15.92-5.35-24.01s-11.21-12.95-13.57-14.49C94.53 15.06 75.89 6.95 71.2 6.04c-4.7-.91-21.46.51-28.11 3.25S26.53 19.75 26.53 19.75"/><path fill="#ffc86e" d="M56.28 71.46c-1.11-.35-2.28-2-2.56-5.53c-.39-5.03 3.32-6.42 3.32-6.42s4.42-1.17 7.53-2.28c2.89-1.03 4.97-2.35 4.97-2.35s.28-5.39 2.07-6.98c1.8-1.59 4.97-1.45 8.5-1.04c3.52.41 9.19 2.76 8.36 4.9s-1.8 4.28-5.18 6.22c-3.38 1.93-5.8 3.73-7.53 5.25c-1.73 1.53-4.9 3.45-10.15 5.39s-7.73 3.34-9.33 2.84M26.55 26.47c-3.32-.68-8.01 6.51-8.88 8.89c-.88 2.38-1.78 8.18-1.88 10.83c-.13 3.29-.19 6.38 1.19 8.89c1.06 1.94 3.63 3.03 5.94 1.03s6.32-7.48 7.38-8.25s4.16-1.79 2.94-6.83c-.5-2.06-5.57-6.32-5.82-6.9c-.24-.57 1.01-7.27-.87-7.66m23.47-9.03c.13 1.93 1.71 5.02 3.42 6.69c2.56 2.49 14.3 10.91 17.34 10.43s6.35-5.94 7.32-7.46s2.9-3.66 3.66-4.63s2.76-3.18 1.11-5.39c-1.66-2.21-5.8-3.66-8.56-3.87s-7.05-2-10.71-1.86s-13.92 1.11-13.58 6.09m48.32 25.75c.23 2.1 3.18 2.56 5.53 4.08s3.94 3.11 5.32 2.69c1.38-.41 3.26-2.62 2.83-6.49c-.55-4.97-3.66-11.33-8.01-11.12c-2.63.13-2.27 4.7-2.27 4.7s-3.54 4.9-3.4 6.14"/><path fill="#cf701e" d="M41.47 30.23s-9.43-.06-9.26.88c.18.94 1 4.04 3.46 4.16s5.63.35 7.15-.12s5.74-3.87 5.74-5.39s-1.7-3.75-1.7-3.75zm13.47 17.29s-.11.07-.27.2c-.47.39-1.37 1.3-1.02 2.32c.47 1.35 3.22 3.87 5.92 3.87s4.16-2.52 4.63-4.16s.23-2.64.23-2.64zM33.91 55.2s-1.64.59-1.58 1.64s.47 2.99 2.58 5.04c2.13 2.07 5.22 2.64 8.03 1.88s4.86-2.87 4.63-5.68s-2.93-4.98-2.93-4.98zM21.78 70.73s-1.76.41-1.58 1.58s2.17 4.86 5.33 4.45s8.15-4.04 8.15-5.45s-2.52-3.28-2.52-3.28zm21.56 14.65s-.65 3.78 4.45 5.16c8.5 2.29 9.38-2.87 9.38-2.87zm33.39 1.75s-2.28 2.28.31 4.07s5.54 2.4 8.32 2.09s4.68-2.53 4.68-2.53zm21.28-25.32s-4.3 2.17-.97 5.92c2.53 2.86 8.32 2.28 10.69.67c1.55-1.05 2.01-2.91 1.43-3.85c-.59-.94-11.15-2.74-11.15-2.74M81.37 36.97s-.23 4.91 6.39 4.75c9.26-.23 8.09-5.98 8.09-5.98z"/><path fill="#593329" d="M85.65 30.82s-4.34 2.7-4.81 3.81s-1.47 4.63 3.57 4.4s10.08-.41 11.78-2.46s1.29-3.93.59-5.45s-4.64-7.27-7.77-7.2c-2.05.04-3.36 6.9-3.36 6.9"/><path fill="#925849" d="M88.99 23.9s-2.75-.35-5.16 3.93c-2.4 4.28-3.02 6.83-3.02 6.83s4.89.02 7.82-.33s4.92-2.17 4.92-2.17s-2.39-7.73-4.56-8.26"/><path fill="#593329" d="M55.71 43.89s-2.4-.16-2.58.77c-.18.94.35 3.33 1.17 4.38s3.28 3.4 5.74 2.93s3.92-2.88 4.33-3.71c.37-.78.77-1.62.07-2.67c-.71-1.06-8.73-1.7-8.73-1.7"/><path fill="#925849" d="M59.28 40.14c-2.04-.22-6.96 3.69-6.08 5.03c.98 1.47 1.15.54 3.85 1.89c2.23 1.11 3.2 2.14 4.6 1.96s3.07-2.49 2.78-3.43s-2.39-5.16-5.15-5.45"/><path fill="#593329" d="m36.19 24.31l-4.8 3.32s-.18 2.25.82 3.48s1.29 1.99 5.98 1.99s9.08-.64 9.9-3.98s-.62-5.48-1.5-6.71s-10.4 1.9-10.4 1.9"/><path fill="#925949" d="M36.25 19.1c-1.08.46-3.63 3.93-4.22 5.45s-.72 3.14-.64 3.16c.97.24 6.68.77 9.2.36s4.57-1.52 5.39-2.99c.65-1.17.6-2.72.6-2.72s-1.71-3.08-4.06-4.02c-2.34-.94-5.86.58-6.27.76"/><path fill="#593329" d="M32.23 55.42s-.4.61.36 1.78s2.25 2.57 4.48 3.22c2.23.64 3.81 1.52 5.27 1.35c1.47-.18 4.34-1.35 4.45-5.39c.12-4.04-.7-5.92-2.46-7.68s-3.03-1.46-3.03-1.46z"/><path fill="#925849" d="M32.74 51.68c-.62 1.04-1.08 4.42-.32 5.18s5.33.81 6.53.68c1.21-.13 5.16-1.99 5.22-3.4s-.7-3.28-.7-3.98s.88-2.34-1.52-2.93s-7.93 2.28-9.21 4.45"/><path fill="#593329" d="M24.82 66.86s-3.77.93-4.01 2.22c-.23 1.29.31 2.59 1.6 3.82s2.23 2.52 3.22 2.4c1-.12 3.63-2.46 4.45-3.22s1.99-2.11 1.88-3.22s-.59-2.23-1.64-3.11c-1.04-.88-5.5 1.11-5.5 1.11"/><path fill="#925849" d="M25.76 63.52c-1.76.04-3.11 2.17-3.69 2.93c-.59.76-1.58 2.58-1.17 2.87s2.11.47 2.93 1s2.05 1.35 2.99.59s1.76-2.87 2.23-3.57s1.29-1.58 1.29-1.58s-1.77-2.3-4.58-2.24"/><path fill="#593329" d="M47.27 77.64c-.35.41-5.33 4.45-5.33 4.45s.18 3.52 1.29 4.34s4.57 1.99 6.8 2.46s6.21 1 7.21.59s2.05-2.58 2.11-5.39s-.94-4.91-2.05-6.2s-2-1.77-2-1.77z"/><path fill="#925849" d="M53.89 82.91c.65-.73 1.41-6.8 1.41-6.8s-4.51-3.46-6.39-3.69s-4.1-.06-4.75.64c-.64.7-3.16 3.22-2.93 4.86s.7 4.16.7 4.16s10.61 2.36 11.96.83"/><path fill="#593329" d="M75.75 85.8s-.57 3.8 3.61 4.52c4.18.71 7.65 1.66 9.46 1.28s3.61-2.8 3.8-4.56s.29-4.3 0-4.99c-.76-1.83-4.28-6.84-5.99-7.37c-.96-.29-1.87-.13-1.87-.13z"/><path fill="#925849" d="M78.46 79.14c-1.87 2.07-2.83 5.06-2.73 6.64c.1 1.49 7.19.84 8.03.33s2.67-2.79 2.73-3.55s-.52-3.14-.62-4.61s-.14-3.47-.95-3.42s-3.8 1.67-6.46 4.61"/><path fill="#593329" d="M102.44 53.34s1.65.24 3.68 1.46c2.37 1.42 4.85 5.04 4.66 7.99s-2.76 4.28-5.89 4.33s-6.19-.12-6.76-1.74s4.31-12.04 4.31-12.04"/><path fill="#925849" d="M99.94 54.33c-.49.68-1.76 2.76-2.19 5.42s-.14 5.7.81 6.23c.95.52 6.18-3.99 6.46-4.47c.29-.48-1.67-7.75-2.29-8.08s-2.17.05-2.79.9"/></svg>',
        name: "Express Session",
        description: "Middleware to save user session's on the server",
        color: "#f29f5855",
    },
    {
        link: "https://express-validator.github.io/docs/",
        name: "Express Validator",
        icon: `
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375pt" height="375pt" viewBox="0 0 375 375" version="1.1">
                            <defs><script xmlns=""/>
                                <clipPath id="clip1">
                                    <path d="M 18.75 18.75 L 356.25 18.75 L 356.25 356.25 L 18.75 356.25 Z M 18.75 18.75 "/>
                                </clipPath>
                            </defs>
                            <g id="surface1">
                                <g clip-path="url(#clip1)" clip-rule="nonzero">
                                    <path style="stroke:none;fill-rule:nonzero;fill:rgb(154, 0, 255);fill-opacity:1;" d="M 356.25 187.5 C 356.25 198.582031 355.167969 209.554688 353.007812 220.421875 C 350.847656 231.289062 347.644531 241.839844 343.40625 252.078125 C 339.164062 262.316406 333.964844 272.039062 327.808594 281.253906 C 321.65625 290.464844 314.660156 298.988281 306.824219 306.824219 C 298.988281 314.660156 290.464844 321.65625 281.253906 327.808594 C 272.039062 333.964844 262.316406 339.164062 252.078125 343.40625 C 241.839844 347.644531 231.289062 350.847656 220.421875 353.007812 C 209.554688 355.167969 198.582031 356.25 187.5 356.25 C 176.417969 356.25 165.445312 355.167969 154.578125 353.007812 C 143.710938 350.847656 133.160156 347.644531 122.921875 343.40625 C 112.683594 339.164062 102.960938 333.964844 93.746094 327.808594 C 84.535156 321.65625 76.011719 314.660156 68.175781 306.824219 C 60.339844 298.988281 53.34375 290.464844 47.191406 281.253906 C 41.035156 272.039062 35.835938 262.316406 31.59375 252.078125 C 27.355469 241.839844 24.152344 231.289062 21.992188 220.421875 C 19.832031 209.554688 18.75 198.582031 18.75 187.5 C 18.75 176.417969 19.832031 165.445312 21.992188 154.578125 C 24.152344 143.710938 27.355469 133.160156 31.59375 122.921875 C 35.835938 112.683594 41.035156 102.960938 47.191406 93.746094 C 53.34375 84.535156 60.339844 76.011719 68.175781 68.175781 C 76.011719 60.339844 84.535156 53.34375 93.746094 47.191406 C 102.960938 41.035156 112.683594 35.835938 122.921875 31.59375 C 133.160156 27.355469 143.710938 24.152344 154.578125 21.992188 C 165.445312 19.832031 176.417969 18.75 187.5 18.75 C 198.582031 18.75 209.554688 19.832031 220.421875 21.992188 C 231.289062 24.152344 241.839844 27.355469 252.078125 31.59375 C 262.316406 35.835938 272.039062 41.035156 281.253906 47.191406 C 290.464844 53.34375 298.988281 60.339844 306.824219 68.175781 C 314.660156 76.011719 321.65625 84.535156 327.808594 93.746094 C 333.964844 102.960938 339.164062 112.683594 343.40625 122.921875 C 347.644531 133.160156 350.847656 143.710938 353.007812 154.578125 C 355.167969 165.445312 356.25 176.417969 356.25 187.5 Z M 356.25 187.5 "/>
                                </g>
                                <path style="stroke:none;fill-rule:nonzero;fill:#fff;fill-opacity:1;" d="M 145.648438 303.871094 L 53.625 211.851562 L 90.289062 175.179688 L 145.648438 230.53125 L 284.6875 91.480469 L 321.367188 128.144531 Z M 145.648438 303.871094 "/>
                            </g>
                        </svg>
                    `,
        description: "Middleware to validate user input in the back end",
        color: "#9a00ff55",
    },
    {
        link: "https://www.passportjs.org/",
        name: "Passport.js",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#d5ff00" d="M64 0C35.602 0 12.598 22.913 12.598 51.2H38.3c0-14.132 11.515-25.601 25.7-25.601Zm0 0"/><path fill="#35df79" d="M115.402 51.2C115.402 22.914 92.398 0 64 0v25.598c14.185 0 25.7 11.469 25.7 25.603zm0 0"/><path fill="#00b9f1" d="M64 102.402c28.398 0 51.402-22.914 51.402-51.201H89.7c0 14.129-11.515 25.598-25.7 25.598Zm0 0"/><path fill="#fff" d="M38.3 102.402V51.2H12.597V128H64v-25.598zm0 0"/></svg>',
        description: "Middleware to authenticate users",
        color: "#35df7955",
    },
    {
        link: "https://www.passportjs.org/packages/passport-local/",
        name: "Passport Local",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#e2a610" d="M85.86 62.7h-.01c-.12-2.45-2.72-4.74-7.21-6.09c-9.61-2.89-20.27-4.58-32.43-4.68c-12.15.1-22.81 1.79-32.43 4.68c-4.49 1.35-7.07 3.64-7.2 6.09h-.01v50.08c0 2.79 3.02 5.8 10.26 7.85c7.48 2.12 17.6 3.49 29.38 3.49s21.9-1.37 29.38-3.49c7.59-2.15 10.39-5.32 10.27-8.25z"/><linearGradient id="notoLockedWithKey0" x1="89.177" x2="78.997" y1="84.429" y2="84.429" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9e740b"/><stop offset=".306" stop-color="#9e740b" stop-opacity="0.963"/></linearGradient><path fill="url(#notoLockedWithKey0)" d="M85.85 62.7c-.12-2.45-2.72-4.74-7.21-6.09c-9.61-2.89 11.29 9.47-.86 9.37c0 0-.32 25.13 0 38.43c.21 8.82 8.12 8.72 8.08 7.96V62.7z"/><path fill="#e2a610" d="M6.57 63.43h79.29"/><path fill="#4e342e" d="m54.11 108.24l-4.49-10.58a7.66 7.66 0 0 0 4.33-6.9c0-4.24-3.44-7.67-7.67-7.67s-7.67 3.44-7.67 7.67c0 2.85 1.56 5.34 3.87 6.66l-4.18 10.89c-.53 1.38.49 2.85 1.96 2.85h11.92c1.5 0 2.52-1.54 1.93-2.92"/><path fill="#9e740b" d="M53.69 107.26H38.7l-.4 1.05c-.53 1.38.49 2.85 1.96 2.85h11.92c1.51 0 2.52-1.54 1.93-2.92zM43.16 95.4c.18-.52-.01-1.08-.45-1.4c-.6-.44-1.41-1.22-1.92-2.46c-1.86-4.48.35-6.47.35-6.47a7.62 7.62 0 0 0-2.54 5.69c0 2.85 1.56 5.34 3.87 6.66zm8.51-10.1s2.2 4.42-.32 7.25c-.86.96-1.59 1.47-2.13 1.72c-.53.25-.77.88-.52 1.41l.93 1.96a7.66 7.66 0 0 0 4.33-6.9c-.01-3.25-2.29-5.44-2.29-5.44"/><path fill="#fdd835" d="M76.96 55.95c-9.12-2.64-19.22-4.19-30.74-4.28c-11.52.09-21.63 1.64-30.74 4.28c-9.13 2.65-10.04 9.26 2.89 12.8c7.09 1.94 16.69 3.19 27.85 3.19s20.76-1.25 27.85-3.19c12.93-3.54 12.02-10.16 2.89-12.8"/><path fill="#84b0c1" stroke="#84b0c1" stroke-miterlimit="10" stroke-width="1.958" d="M74.37 62.21s-.37 1.72-5.22 1.72s-5.88-1.72-5.88-1.72V40.16C63.27 30.14 55.62 22 46.21 22s-17.06 8.15-17.06 18.16v22.06s-2.11 1.72-5.95 1.72s-5.14-1.72-5.14-1.72V40.16c0-16.14 12.63-29.26 28.15-29.26s28.15 13.13 28.15 29.26v22.05z"/><path fill="#b9e4ea" d="M33.52 21.56c-5.14 3.06-5.93 5.13-7.36 6.08c-1.06.7-2.47.14-1.55-2.29c.79-2.08 2.69-6.02 7.43-9.05c8.16-5.22 15.2-4.98 14.82-.99c-.32 3.53-7.85 2.99-13.34 6.25"/><path fill="#e2a610" d="M76.96 55.95c-1.31-.38-6.24 7.12-4.38 8.53c2.14 1.62 4.66 3.19 5.2 2.98c11.27-4.34 8.31-8.87-.82-11.51"/><radialGradient id="notoLockedWithKey1" cx="76.707" cy="49.066" r="37.716" gradientTransform="matrix(-.077 -.997 .4971 -.0384 58.224 127.429)" gradientUnits="userSpaceOnUse"><stop offset=".156" stop-color="#3d8192"/><stop offset=".277" stop-color="#3d8192"/></radialGradient><path fill="url(#notoLockedWithKey1)" d="M72.65 27.68c-4.17 2.78-7.78 7.91-7.48 19.35c.31 11.82 6.48 16.58 7.45 17.49c1.97-.63 3.03-1.94 3.03-1.94l-.4-22.53c.01-3-.12-7.82-2.6-12.37"/><path fill="#9e740b" d="M93.76 20.22c-13.11.38-22.04 12.32-21.92 25.44c.1 10.38 6.57 16.83 15.7 20.43l-.11 39.41c0 1.65.68 3.22 1.88 4.34l2.91 2.79l2.36 3.3c.68.23 3.61.16 4.18-.18l4.42-3.62c1.2-1.13 1.88-2.7 1.88-4.34v-2.89c0-1.8-.76-3.59-2.24-4.62c-.92-.64-1.49-1.52-1.49-2.5c0-1.16.79-2.18 2.02-2.82c1.02-.54 1.72-1.54 1.72-2.69v-.39c.04-1.54-.75-2.49-1.63-3.07c-1.37-.9-1.9-2.24-2.11-3.69c-.18-1.26.54-2.59 1.42-3.49c1.58-1.63 2.28-3.02 2.28-5.3l.01-7.58c9.56-3.44 16.4-12.59 16.4-23.34c-.01-14.12-11.49-25.65-27.68-25.19m9.6 19.66c0 3.72-3.01 6.73-6.73 6.73s-6.73-3.01-6.73-6.73s3.01-6.73 6.73-6.73s6.73 3.01 6.73 6.73"/><path fill="#ffca28" d="M92.94 20.22c-13.7 0-24.8 11.1-24.8 24.8c0 10.48 6.51 19.44 15.7 23.07l-.11 37.01c0 1.65.68 3.22 1.88 4.34l5.61 5.2c1.56-.43 3.36 1.3 3.36 1.3l4.9-4.21c1.2-1.13 1.88-2.7 1.88-4.34v-2.89c0-1.8-.76-3.59-2.24-4.62c-.92-.64-1.49-1.52-1.49-2.5c0-1.16.79-2.18 2.02-2.82c1.02-.54 1.72-1.54 1.72-2.69v-.39c.04-1.54-.75-2.49-1.63-3.07c-1.37-.9-1.9-2.24-2.11-3.69c-.18-1.26.54-2.59 1.42-3.49c1.58-1.63 2.28-3.02 2.28-5.3l.01-7.58c9.56-3.44 16.4-12.59 16.4-23.34c-.01-13.69-11.11-24.79-24.8-24.79m6.73 19.25c0 3.72-3.01 6.73-6.73 6.73s-6.73-3.01-6.73-6.73s3.01-6.73 6.73-6.73c3.71 0 6.73 3.01 6.73 6.73"/><path fill="#dba010" d="M91.22 114.64s.95-.18 3.36 1.3l-.36-44.07c-.07-1.5-2.86 2.11-2.87 4.02z"/><path fill="#fff59d" d="M74.22 39.47c1.08-9.13 8.5-12.71 11.45-13.65c.99-.31 3-.83 3.46.89c.41 1.52-.53 2.33-2.14 2.84c-3.93 1.27-9.27 4.05-10.2 10.79c-.18 1.29-.88 2.04-1.72 1.81c-.57-.16-1.05-1.05-.85-2.68"/></svg>',
        description: "User and password strategy to authenticate users",
        color: "#fdd83555",
    },
    {
        link: "https://www.npmjs.com/package/multer",
        name: "Multer",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#ff7043" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"/><path fill="#ffccbc" d="M20 24v-6h-4l7-8l7 8h-4v6zm-4 4v-2h14v2Z"/></svg>',
        description: "Middleware to handle file uploads",
        color: "#ff704355",
    },
    {
        link: "https://ejs.co/",
        name: "Ejs",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M189.35 120.484v58.865L64.59 236.453L189.35 295.6v57.685L0 263.456v-52.543zm128.845 53.29c0-15.04-13.83-24.491-24.833-16.971s-11.003 26.422 0 33.943s24.833-1.932 24.833-16.972m-45.12 46.211c-37.312-20.454-37.312-71.868 0-92.323c37.313-20.454 84.207 5.253 84.207 46.162s-46.894 66.616-84.206 46.161m199.838 119.927c0-15.04-13.83-24.491-24.833-16.971s-11.003 26.422 0 33.942s24.833-1.93 24.833-16.97m-45.12 46.211c-37.312-20.454-37.312-71.868 0-92.323S512 299.053 512 339.962s-46.894 66.616-84.206 46.161m-114.654 7.179l194.41-274.604h-66.43L243.47 393.302z"/></svg>',
        description: "The views engine used for this project",
        color: "#ffffff55",
    },
    {
        link: "https://www.npmjs.com/package/dotenv",
        name: "Dotenv",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill-rule="evenodd"><path d="M3.167 3.167h25.667v25.667H3.167z"/><path fill="#ecd53f" fill-rule="nonzero" d="M30 2v28H2V2zM14.757 20.539H9.98v6.44h4.898v-1.085h-3.597V24.14h3.232v-1.085H11.28v-1.428h3.475v-1.09zm2.503 0h-1.264v6.44h1.207v-4.2l2.597 4.2h1.305v-6.44h-1.21v4.3zm5.97 0h-1.41l2.303 6.44h1.388l2.306-6.44h-1.38l-1.577 4.766l-1.63-4.767zM8.3 24.96H6.34v1.96H8.3z"/></g></svg>',
        description: "To use environment variables",
        color: "#ecd53f55",
    },
    {
        link: "https://date-fns.org/",
        name: "Date-fns",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#690936" d="M1.065 6.534Q0 9.102 0 11.999q0 2.898 1.065 5.466a13.8 13.8 0 0 0 3.068 4.549h2.685Q2.642 17.88 2.642 11.999q0-5.88 4.176-10.014H4.133a13.8 13.8 0 0 0-3.068 4.549m21.869 10.931Q24 14.897 24 11.999q0-2.897-1.066-5.465a13.8 13.8 0 0 0-3.068-4.549h-2.685q4.176 4.134 4.176 10.014q0 5.881-4.176 10.015h2.685a13.8 13.8 0 0 0 3.068-4.549M11.63 3.299H9.854v10.21h1.776v-.033l7.218-7.218l-1.151-1.151l-6.067 6.067z"/></svg>',
        description: "My favorite library to format and manage dates",
        color: "#8b2d5955",
    },
    {
        link: "https://cloudinary.com/",
        name: "Cloudinary",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#fff" d="M14 51c-1.1 0-2.1-.2-3.1-.5C6.8 49.1 4 45.3 4 41c0-2.9 1.2-5.6 3.4-7.5c.6-.5 1.2-.9 1.9-1.3l.7-2.3c1.7-5.8 7-9.8 13-9.8c.6 0 1.2 0 1.9.2c.6.1 1.1.2 1.6.3l.3-.5c2.4-4.4 7-7.1 12-7.1c7.6 0 13.7 6.2 13.7 13.7c0 .4 0 .7-.1 1.1v.3c.6.2 1.2.5 1.7.8c3.7 2.1 5.9 6 5.9 10.3c0 5.5-3.8 10.3-9.2 11.5c-.9.2-1.8.3-2.6.3z"/><path fill="#75d6ff" d="M38.7 15c6.5 0 11.7 5.3 11.7 11.7v.9c-2.7.2-5.2 1.3-7.1 3c1.4-.8 3.1-1.3 4.9-1.3c.7 0 1.3.1 1.9.2c1.1.2 2.1.6 3 1.1c2.9 1.7 4.9 4.9 4.9 8.5c0 4.7-3.3 8.6-7.6 9.6c-.7.2-1.4.3-2.2.3H14c-.9 0-1.7-.1-2.5-.4C8.3 47.5 6 44.5 6 41c0-2.4 1.1-4.6 2.7-6c.8-.7 1.6-1.2 2.6-1.5c.8-.3 1.7-.5 2.6-.5c2.6 0 4.9 1.2 6.3 3.1h.1c-1.7-3.1-4.9-5.3-8.6-5.7c1.4-4.8 5.8-8.4 11.1-8.4c.6 0 1.1.1 1.6.1c1.1.2 2.1.4 3 .9c3.5 1.6 6.1 4.9 6.7 8.9v-.1c0-4.5-2.3-8.5-5.8-10.8c2.2-3.6 6-6 10.4-6m0-4c-5.4 0-10.4 2.8-13.3 7.3c-.1 0-.2 0-.3-.1c-.8-.1-1.5-.2-2.2-.2C16 18 9.9 22.6 8 29.3l-.5 1.6c-.5.3-1 .7-1.4 1.1C3.5 34.2 2 37.5 2 41c0 5.2 3.3 9.8 8.2 11.4c1.2.4 2.5.6 3.8.6h34.2c1 0 2.1-.1 3.1-.4c6.3-1.5 10.7-7 10.7-13.5c0-4.9-2.7-9.5-6.9-12l-.6-.3v-.1C54.4 18.1 47.4 11 38.7 11"/></svg>',
        description: "The storage service to upload and serve files from",
        color: "#75d6ff55",
    },
    {
        link: "https://www.npmjs.com/package/bcryptjs",
        name: "Bcryptjs",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#d1c4e9" d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h25.1c1.3-1.3 4.9-.9 4.9-2v-6c0-1.1-.9-2-2-2m-3.6 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-2.4c0-3.1-2.5-5.6-5.6-5.6"/><g fill="#ffa000"><path d="m43 46l-2 2h-2l-2-2V35.4h6V40l-1 1l1 1v1l-1 1l1 1z"/><path d="M47.5 28.5c-.3-.9-1-1.6-2-1.8c-1.3-.3-3.3-.7-5.5-.7s-4.2.4-5.5.6c-1 .2-1.7.9-2 1.8c-.2 1-.5 2.2-.5 3.6s.3 2.6.5 3.5c.3.9 1 1.6 2 1.8c1.3.3 3.2.6 5.5.6s4.2-.4 5.5-.6c1-.2 1.7-.9 2-1.8s.5-2.1.5-3.5s-.3-2.6-.5-3.5M42.9 31h-5.7c-.6 0-1.1-.5-1.1-1.1v-1.4c0-.3 1.8-.6 4-.6s4 .3 4 .6v1.4c-.1.6-.6 1.1-1.2 1.1"/></g><path fill="#d68600" d="M39 37.1h1V48h-1z"/></svg>',
        description: "To hash user passwords before storing them",
        color: "#d1c4e955",
    },
    {
        link: "https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma",
        name: "Prisma ORM",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="424" height="512" viewBox="0 0 424 512"><path fill="currentColor" d="m381.39 405.887l-229.671 67.928c-7.017 2.077-13.742-3.992-12.267-11.073L221.5 69.81c1.535-7.352 11.692-8.515 14.896-1.71l151.918 322.595c2.865 6.09-.404 13.267-6.925 15.193m39.384-16.028L244.876 16.326C233.28-5.365 205.84-4.578 195.12 13.576L4.348 322.567c-5.91 9.635-5.793 21.51.336 31.02l93.253 144.459c9.615 11.463 18.506 16.87 33.692 12.378l270.685-80.058c18.033-5.4 26.723-22.822 18.46-40.506"/></svg>',
        description: "Query builder for the app's database",
        color: "#ffffff55",
    },
    {
        link: "https://www.npmjs.com/package/@quixo3/prisma-session-store",
        name: "Prisma Session Store",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#00bfa5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"/><path fill="#a7ffeb" d="m30.209 26.275l-9.76 2.39a.42.42 0 0 1-.51-.224a.3.3 0 0 1-.012-.165l3.486-13.827a.35.35 0 0 1 .412-.21a.34.34 0 0 1 .221.15l6.457 11.352a.362.362 0 0 1-.218.51zm1.672-.564l-7.475-13.144a1.335 1.335 0 0 0-1.647-.453a1.2 1.2 0 0 0-.468.357l-8.106 10.873a.87.87 0 0 0 .014 1.092l3.964 5.083a1.41 1.41 0 0 0 1.432.435l11.503-2.816a1.22 1.22 0 0 0 .79-.567a.86.86 0 0 0-.007-.86"/></svg>',
        description: "To integrate Express Session with the Prisma ORM",
        color: "#00bfa555",
    },
    {
        link: "https://www.vercel.com",
        name: "Vercel",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23 21.648H1L12 2.352z"/></svg>',
        description: "The hosting service for this app.",
        color: "#ffffff55",
    },
    {
        link: "https://www.neon.tech",
        name: "Neon",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><defs><linearGradient id="logosNeonIcon0" x1="100%" x2="12.069%" y1="100%" y2="0%"><stop offset="0%" stop-color="#62f755"/><stop offset="100%" stop-color="#8ff986" stop-opacity="0"/></linearGradient><linearGradient id="logosNeonIcon1" x1="100%" x2="40.603%" y1="100%" y2="76.897%"><stop offset="0%" stop-opacity="0.9"/><stop offset="100%" stop-color="#1a1a1a" stop-opacity="0"/></linearGradient></defs><path fill="#00e0d9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861zm44.139-8.825a8.817 8.817 0 0 0-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825z"/><path fill="url(#logosNeonIcon0)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861zm44.139-8.825a8.817 8.817 0 0 0-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825z"/><path fill="url(#logosNeonIcon1)" fill-opacity="0.4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861zm44.139-8.825a8.817 8.817 0 0 0-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825z"/><path fill="#63f655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.41 4.41 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825"/></svg>',
        description: "Postgres platform to host the database for this project.",
        color: "#18e5c955",
    },
    {
        link: "#",
        name: "Responsive",
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"/></svg>',
        description: "Mobile, Tablet versions of this page are available too.",
        color: "#ffffff55",
    },
];

const aboutController = {
    aboutGet: (_, res) => {
        res.render("pages/about", {
            tools: tools,
        });
    },
};

export default aboutController;
