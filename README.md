# Portfolio, Programming Usable Interfaces Final Project

By Alana Mittleman

## Link to Site

[Github Pages Site](https://amittle.github.io/portfolio/)

## Write-up

### Part 1: Description

My website is a portfolio containing information about my goals, my history, and projects I have worked on and am currently working on. My website conveys that I allow my interests such as music and education to influence my work and apply new skills in meaningful ways. Users can learn about the process of two projects I am proud of and see that I am soon going to be working on a capstone project for the MHCI program. The website also conveys that my favorite color is green. It is interesting because it follows the trajectory of my interests converging, and engaging through some entertaining interactions such as a carousel. My website is intended for future professional connections. From looking at the website, I would like people to get a sense of how my passions flow into my work and the importance of projects I have worked on, and that these projects are still works in progress. I would like people to feel encouraged to speak to me more about my work and interests and connect with me on linkedin. 


### Part 2: Interactions

**Home Page**

- Navigation bar: The familiar structure of the top navigation bar allows users to get an overview of the website and navigate to each page by clicking page titles. When the user is on a product page none of the navbar items are highlighted as active. 

- Scroll Carousel:  When a user scrolls down on a homepage, they will see right and left arrows above a project overview indicating that they can switch between projects. When the carousel is scrolled forward using the right arrow, the new slide comes in from the bottom. When it is scrolled backwards, the new slide comes in from the top. Within the carousel, the text may overflow depending on screen size. If that is the case, the user can scroll the text within the carousel slide without accidentally switching slides. 

- Click on Carousel:  Clicking anywhere within a carousel takes the user to a product detail page for the corresponding project.

**About Page**

- Opening the About page: When the about page loads, the page has an animated scroll to a position where the user can see the portrait, name, and contact info all at once. 

- Linkedin: On the about page, there is contact information under my name. When the user clicks ‘find me on linkedin’ my linkedin profile page opens in a new tab so that they do not lose my portfolio page. 

- Name Coach: On the about page, as the user is reading the about me section there is a sound icon next to my first name. When the user clicks the icon, an audio clip plays with the correct pronunciation of my name. I have found that tools like namecoach and features like this make first meetings more comfortable for both parties, and I see the portfolio as a possible way to initiate a first meeting. 

**Resume Page**

- Linkedin: On the about page, there is contact information under my name. When the user clicks ‘find me on linkedin’ my linkedin profile page opens in a new tab so that they do not lose my portfolio page. 
- Get resume pdf: Clicking anywhere in the image of the resume or on the “launch pdf” button opens a downloadable pdf of my resume in a new page. 




### Part 3: External Tools

- JQuery
    - I chose to use jquery because it allows for easier DOM traversal than plain javascript and worked well with the bootstrap carousel.
    - I used it to access the home page carousel and update it when separate buttons are clicked. 
    - From the frontend, it doesn’t make much of a difference as opposed to just using javascript traversal, but it made it easier for me to create custom controls for the carousel that were not overlaid like the default controls are. 
- Bootstrap
    - I chose to use bootstrap to make my portfolio responsive since I did not have much experience with flex boxes. I also found that it offers useful components like the carousel and the navigation bar. 
    - I used Bootstrap to create a responsive layout for my website. I also pulled components to ensure all parts of the page were responsive. I used the bootstrap navigation bar and the bootstrap carousel.
    - The use of bootstrap makes my website responsive on mobile and desktop, and fluidly resizes elements on the page when the browser is made narrower or wider. The use of bootstrap components gives the user very familiar interaction patterns. 


### Part 4: Iteration

**Accessibility:** I got feedback on homework seven that I needed to more clearly include accessibility features. While I am still slightly unsure of how to do this in a prototype, I did make sure to include detailed alternative text and labels for any buttons that did not have text on them. I also included a pronunciation assist in the about me section so people can learn how to pronounce my name. I think this would help foster comfortable communication. 

**Home Page Carousel:** In my homework seven prototype, I got wrapped up in the figma animation capabilities and was not thinking about how I would eventually implement parts of my design. The main issue was the scrolling feature on my homepage, where images for each project would animate in and out on scroll resembling a jukebox. I could not find any examples resembling what I designed, but the closest thing in terms of functionality and impact was a vertical carousel. I tried several types of interactions to try to approximate the experience of my initial idea, but eventually settled on buttons to make sure a user would not scroll accidentally.

**Scale:** In figma, I have still not gotten the hang of what size frame I should use to design for desktop. In homework six my design was too small for desktop, and this time it was too big. When I got into implementation I had to do some experimentation with text size and responsive sizing. 

### Part 5: Challenges

I attempted to work with the library smoothstate.js to more closely resemble figma's smart animate features. I ended up having a lot of trouble with this and ended up prioritizing bootstrap. There was a steep learning curve for me with bootstrap, as in the past I had not tried to use the css grid or any flex containers. One of the most difficult parts of implementing responsive pages was making the text fit well on multiple screens. 


## Wave Screenshots

### Homepage

<img src="Assets/images/wave_screens/homepage/summary_home.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/homepage/detail1_home.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/homepage/detail2_home.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/homepage/structure_home.png" width="100" alt = "wave summary page"/>



### Resume

<img src="Assets/images/wave_screens/resume/summary_resume.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/resume/details_resume.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/resume/structure_resume.png" width="100" alt = "wave summary page"/>

### About

<img src="Assets/images/wave_screens/about/summary_about.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/about/detail1_about.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/about/detail2_about.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/about/structure_about.png" width="100" alt = "wave summary page"/>


### Project 1

<img src="Assets/images/wave_screens/proj1/summary_proj1.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/proj1/detail_proj1.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/proj1/structure_proj1.png" width="100" alt = "wave summary page"/>


### Project 2

<img src="Assets/images/wave_screens/proj2/summary_proj2.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/proj2/detail_proj2.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/proj2/structure_proj2.png" width="100" alt = "wave summary page"/>

### Project 3

<img src="Assets/images/wave_screens/proj3/summary_proj3.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/proj3/detail_proj3.png" width="100" alt = "wave summary page"/>
<img src="Assets/images/wave_screens/proj3/structure_proj3.png" width="100" alt = "wave summary page"/>