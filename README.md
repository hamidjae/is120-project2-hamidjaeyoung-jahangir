# IS120 Project 1: Personal Portfolio

[Live Link](https://hamidjae.github.io/is120-project4-hamidjaeyoung-jahangir/)

This project allowed me to combine the knowledge I gained from this class, as well as the CS260 Web Development class to develop a website in HTML, and then port it over into React.

I went above and beyond on this project by bundling everything together with Vite, and establishing a router between all the components inside of my website by using the ReactRouter. This means that the website is no longer loading the entirety of the different HTML pages, but rather only changing the `<main>` of the website. The header and the footer are constants that will only be loaded once, and then carried over as the user switches between tabs.

I will disclose my use of AI and state that I used it to debug out the display: flex property, which we did not cover in class. Porting over to React is quite new to me, and I resorted to it after I gave it a genuine attempt to figure it out on my own. This allowed me to properly represent my footer and header so that it fits the viewports.

If required, I can easily re-port it back into HTML.

I will justify myself with the necessary requirements:

## Your website should have at least 3 pages, each with a consistent `<header>` and `<footer>`.
This has been accomplished! There are three pages (home, projects, resume) that all have a consistent header and footer. As stated before, React is routing it so that whenever the user changes tabs, the header and footer stay constant while the main changes.

## Include working navigation links to navigate between pages.
This has also been accomplished via the ReactRouter as well, which uses NavLinks instead of `<a>`.

## Use semantic HTML elements for document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, etc.).
This has also been accomplished, with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` and `<footer>` being used. Header, nav and footer are constants, while sections and articles correspond to different cards.

## All elements should be styled with CSS. Do not leave any default HTML styling.
This has also been done. I also gave my CSS file a global reset.

## Use a single external stylesheet for all of the pages.
This has also been done. The stylesheet is app.css

## Include element, class, and ID selectors in your CSS.
This has also been done. I used several different types of selectors, and all three of these have been used.

## Include at least one image on your site.
This has also been done. The image is meanddad.jpg, which is stored in public. React requires files to be inside of the public folder, which is why my actual resume is also inside of it.

## Use at least one instance each of margin, padding, display, and position in your CSS. Be prepared to explain your choices.
Margin and padding were used to separate the cards away from each other so that everything looks neat and tidy. Display was used to transform some cards into inline-blocks for stylistic purposes, while I used both position: absolute and position: relative to make the sticker on the home page attach onto the image. This allows the sticker to exist independently of any other elements near it, using the relative property of the banner as reference.

## Include a :hover pseudo class and a ::before or ::after pseudo element
This has also been done! the Hover pseudoclass was used in the Projects area to suggest clickability, which also takes you to the appropriate website. I also used the ::after pseudo element to create a fake element right after it that is a stylized black bar, giving it some more aesthetics.

Initially, I wanted my Home page to be laid out in-line, so that the two card areas I used would be placed right after each other. However, I decided against it since I could not figure out some massive bugs along the way, and I would love to dedicate that time by learning on how to properly do it at a later date. I thought I figured this out in my Card homework, but I could not replicate it easily unfortunately. I searched online and found out that it required skills using Grid and Flexbox that I was not 100% sure on how to accomplish yet.

The idea to port this project over into React came about after I completed my Projects tab, where I decided that I wanted to apply the skills in my other class over to this class as well.

I found the two colors online by searching Reddit for color pairs that work well with each other, and so I decided to use them since I'm not too good on color theory to know what colors complement what. This does follow the 70-30 model we discussed in class, so I am quite happy about that.

I also used the knowledge I gained from my CS260 class to adjust the viewports for smaller screens, like phones so that it wouldn't look completely horrible. A future idea I have once I come to touch up on this project again would be to use display: none to hide some of the content, like the header and footer, until the user scrolls to that specific point.

# IS120 Project 2: Responsive Design

I decided to make Project 2 a continuation of Project 1 by transforming an otherwise static-looking HTML+CSS+React page into what I originally envisioned when I created Project 1. I discussed this with a classmate, but when I completed Project 1 I had hoped to had different layouts across the three pages, with Home having two columns and Projects having differing card sizes. After we had learned Flexbox and Grid in class, that ambition became possible for me, and I tried to implement my original webpage design into Project 1 for Project 2, while making everything responsive.

The biggest thing I learned with Project 2 is the importance of making comments, because I had to spend way more time actually figuring out what I had originally done in Project 1 in order to properly adapt it to my needs. I also gained a much more thorough understanding of Grid and Flexbox, because I ended up converting my Header and Footer into Grid elements. We had already done a similar case for Flexbox in Header and Footer, but I decided to use Grid this time to figure out how I can use both interchangably. The page evolved by adding more icons, stronger layouts using Flexbox and Grid, and better viewport accessibilities. I used Tailwind's breakpoints for my two @media decorators (1024px and 768px). I also used my own keyframe animations to animate a fade-in for the "That's Me!" card, and a right-to-left ease-in forwards transition for all the other cards. These stylistic choices were not only necessary for the assignment, but also breathed some life into my webpage. I ended up being pretty happy with what I made, and I intentionally did not use any animations from Animista because I felt that animations were my weakest skill in this class so far. I wanted to practice it more.

There were a lot of problems I ran into when I first started adapting Project 1 into Project 2. The most stressful one was figuring out a weird viewport bug with the "That's Me!" image, where it started overflowing instead of properly looking like all the other cards on that page. The problem was that I was hardcoding distances for the image to exist, which is why when it transitioned over to the @media viewport, it started a conflict. I resolved it by removing that hardcoded width, and it ended up fixed. Another problem I had was not a pure HTML or CSS issue, but rather a React issue. I had to look into Stack Overflow, but any images that I was referencing was not loading in properly until I told React to use the BASE_URL of the current webpage in order to find the image. From what I understood, the problem arose from GitHub Pages Jekyll interacting strangely with React.

There were three tools I used from the DevTools Demo excel: Haikei for the header and footer art and Feather Icons for the different icons, like "Sliders", "Alert", and "Scissors". My Projects tab was easily the weakest part about Project 1, so I wanted to spice it up with these icons and implemented an animation effect to make them stand out when hovered. These cards also fade in from bottom-to-up when tabbed into.

Overall, I'm pretty satisfied with my webpage. I will probably end up making an entirely new webpage for Project 3, as I feel like I've reached the limit (in my opinion) for my Portfolio website, outside of doing something insanely fancy. However, I feel like when I reach the final Project for this class, I will go back in the summer and implement some of those insanely fancy features.

