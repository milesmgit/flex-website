window.onload = function() {

  let body = document.getElementById('body');
  let wrapper = document.getElementById('wrapper');
  let slide = document.getElementById('slide');


  wrapper.appendChild(slide);
  displayIntro = () => {
    slide.id = "slide";
    setTimeout(function(){
    slide.innerHTML = `

    `
    body.style.height = "800px";
  }, 1000);
  }

  // function to hide the navigation and brand (this works in unison with css animations for id slideBack)
  slideBack = () => {
      if(slide.id === "slide"){
      slide.id = "slideBack";
        setTimeout(function(){
          slide.style.display = 'none';
        }, 2000);

        console.log('hello');
      }
      else if(slide.id === "slideBack"){
        slide.style.display = "block";
        setTimeout(function(){
        }, 2000);
        displayIntro();
      }
      else
      console.log('error');
  }


 let galleryFlag = 0;


  displayBio = () => {
    galleryFlag = 1;
    slideBack();
    setTimeout(() => {
      slide.id = "slide";
      slide.style.backgroundImage = 'linear-gradient(to bottom, rgba(109, 124, 199, .5), rgba(56, 71, 148, .5))';
      slide.style.display = "block";
      slide.innerHTML = `<div class="centerDiv"> <h1 id='bioH1'>Bio</h1></div>
                        <p class='bioP1'>Matthew Miles is from Louisville, Ky U.S.A and currently lives in the downtown area. The free time in his youth was spent playing sports; basketball,
                                  football, baseball, softball, soccer, and track being the most popular.  He also enjoyed bowling and playing chess. He played varsity basketball and soccer for his alma mater, Spalding University;
                                  however, after the start of the second season, he had an accident forcing him to give up playing competitive sports. Today he plays the guitar sometimes.  YouTube <a href="https://youtu.be/-BY_mH927M0" target="_blank">Practice Session</a></p>
                                  <p class="bioP1">He made the best of his new limitations and began hitting the books harder.  Eventually he earned his CompTIA A+ certification, and went on to study programming at a local
                                  programming school named Code Louisville.  He studied front end technologies such as JavaScript, CSS, and HTML.  He also studied back end technologies
                                  such as C#, ASP.NET, and SQL Database.  He completed three programming tracks and moved on to a software engineering immersive called Louisville
                                  Skills as taught by General Assembly and sponsored by a local software firm named Interapt.</p>
                                  <p class="bioP1">He studied front end technologies like JavaScript, CSS, HTML, and REACT, and backend technologies such as NodeJS, MongoDB, and Express.  In addition he learned to work effectively in teams and improved his soft skills considerably.
                                  He also learned about the version control software git, and became proficient in using it in combination with GitHub to store multiple versions of his project work.
                                  Matthew has thus far completed 8 personal projects and has caught the programming bug as of late.  He hopes to one day find a position where he can work remotely at least
                                  part of the work week.</p>
                                  <p class="bioP1">Matthew is a graduate of Spalding University in Louisville, KY and graduated with a 3.4/4.0 G.P.A.  He earned a Bachelor's of Science in Business Administration.</p>
                                  <p class="bioP1">Matthew currently works for Interapt as a software engineering apprentice, but due to the novel COVID-19 virus, most of the company was repurposed to help
                                  Humana transition the workforce to work from home.</p>
                                  <p class="bioP1">Matthew has been promoted twice in three months and now works in escalation, a specilized position in the IT department, where he constantly looks for issues that need to be brought to Major Incident specialists' attention so that Humana can mitigate losses in monetary
                                  terms and decreased member/agent satisfaction due to massive outages affecting many people or critical applications/software.
                        </p>
                        <div class="topPlacement">
                          <a class="top" href="#body"><button class="toTopButton">Top</button></a>
                        </div>
                        `
                        slide.style.height = "1600px";
    }, 2000);
  }

  displayCredentials = () => {
    setTimeout(function() {
      slide.innerHTML = `
        <div id="main-flex">
          <div class="flex-left">

            <div class="card">
              <a href="https://drive.google.com/file/d/11VVDheuZcUiMRx1WvsX_0ckG3Z7pm0YJ/view?usp=sharing" target="_blank">
                <div class="resources"><p>Resume</p><img src="img/google-drive.png"  alt="Matthew Miles: Resume" width="75" height="75" title="Click to view/download resume (Google Drive):  https://drive.google.com/file/d/1M9dmvrO5BQi0DyKjvHGpD6t-doLqf1wG/view?usp=sharing"></div>
              </a>
            </div>
            <div class="card">
              <a href="https://linkedin.com/in/matthew-miles-code-louisville" target="_blank">
                <div class="resources"><p>LinkedIn</p><img src="img/linked.jpeg"  alt="Matthew Miles: Linked-In Profile" width="75" height="75" title="Click to view my Linked-In Profile:  https://linkedin.com/in/matthew-miles-code-louisville"></div>
              </a>
            </div>
            <div class="card">
              <a href="https://github.com/milesmgit?tab=repositories" target="_blank">
                <div class="resources"><p>GitHub</p><img src="img/github.png"  alt="Matthew Miles: GitHub" width="75" height="75" title="Click to view GitHub Profile:  https://github.com/milesmgit?tab=repositories"></div>
              </a>
            </div>
          </div> <!-- end flex-left div -->
         <div class="flex-right">
          <div class='menu_items'>
            <button class='menu_item' id='credentials' onclick="displayCredentials()">
              <span>Credentials</span>
            </button>
            <button class='menu_item' id="contact-me" onclick="contactMe()">
              <span>Contact Me</span>
            </button>
            <button class='menu_item' id="gallery" onclick="displayGallery()">
              <span>Gallery</span>
            </button>
            <button class='menu_item' id="bio" onclick="displayBio()">
              <span>Bio</span>
            </button>
          </div>
          </div> <!-- end flex-right div -->
        </div>

        `
      body.style.height = "900px";
    }, 1000);


  }




  displayGallery = () => {
    galleryFlag = 1;
    slideBack();

    setTimeout(function() {
      slide.id = 'slide';
      slide.style.display ='block';
      slide.style.backgroundImage = 'linear-gradient(to bottom, rgba(109, 124, 199, .5), rgba(56, 71, 148, .5))';
      slide.style.height = '3200px';

      slide.innerHTML = `
        <div id="main-flex">
          <div class="horizontal-flex-div">
            <h4 class="project-gallery">Project Gallery</h4><h6 class="project-gallery">Tap image to visit the GitHub repository.  There you will find a link to the project demo if applicable.</h6>
              <div class="parentDiv">
              <div class="project scale"><p>Responsive JavaScript and CSS: Matthew Miles - Animated-Portfolio</p><a href="https://github.com/milesmgit/animated-portfolio" target="_blank"><img src="img/animated-portfolio.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Matthew Miles - Portfolio" width="300" height="200" title="Responsive JavaScript: Matthew Miles - Animated-Portfolio"></a></div>
                <div class="project scale"><p>Responsive JavaScript: Matthew Miles - Portfolio</p><a href="https://github.com/milesmgit/responsive-portfolio" target="_blank"><img src="img/responsive1.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Matthew Miles - Portfolio" width="300" height="200" title="Responsive JavaScript: Matthew Miles - Portfolio"></a></div>
                <div class="project scale"><p>React: Noobx-Cube - Quiz Game</p><a href="https://github.com/milesmgit/noobx-cube" target="_blank"><img src="img/noobx-thumb.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Noobx Cube Project" width="300" height="200" title="React: Noobx-Cube - Quiz Game"></a></div>
                <div class="project scale"><p>JavaScript: Tic-Tac-Toe Animated - Game</p><a href="https://github.com/milesmgit/tic-tac-toe-1-animated" target="_blank"><img src="img/tic-tac-toe.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Tic Tac Toe" width="300" height="200" title="JavaScript/HTML/CSS: Tic-Tac-Toe-Animated - Game"></a></div>
                <div class="project scale"><p>JavaScript: Meal Profiler - Meal Nutrition Calculator</p><a href="https://github.com/milesmgit/milesmgit.github.io" target="_blank"><img src="img/meal-profiler-javascript.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Meal Profiler JavaScript" width="300" height="200" title="JavaScript/HTML/CSS: Meal-Profiler - Nutrition Calculator"></a></div>
              </div>
              <div class="parentDiv">
                <div class="project scale"><p>JavaScript: 3D Tic-Tac-Toe - Game</p><a href="https://github.com/milesmgit/tic-tac-toe-refactored-3d" target="_blank"><img src="img/tic-tac-toe-2.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Tic Tac Toe 2" width="300" height="200" title="JavaScript/HTML/CSS: Tic-Tac-Toe-3d - Animated  Zoom out to the max for this, as I did not know how to scale down the cube when I made this. I will update later."></a></div>

                <div class="project scale"><p>C#/SQL/ASP.NET: Meal Profiler - Nutrition Calculator w/Database</p><a href="https://github.com/milesmgit/Profiler" target="_blank"><img src="img/detailedResults.PNG" onmouseover="rollover(this)" onmouseout="rollout()" alt="Meal Profiler C#" width="300" height="200" title="C#/Razor/SQL/Asp.Net: Meal-Profiler - Nutrition Calculator With Database"></a></div>
              </div>
              <div class="parentDiv">
                <div class="project scale"><p>HTML: Haiku - Static Website</p><a href="https://github.com/milesmgit/Code-Louisville-Capstone-Project" target="_blank"><img src="img/haiku.PNG" onmouseover="rollover(this)" onmouseout="rollout()" alt="Haiku HTML" width="300" height="200" title="JavaScript/HTML/CSS: Haiku - Static Website with Gimp Designed Homepage"></a></div>
                <div class="project scale"><p>HTML: New Roots - Static Website</p><a href="https://github.com/milesmgit/Code-Louisville-Capstone-Project-3" target="_blank"><img src="img/new-roots.PNG" onmouseover="rollover(this)" onmouseout="rollout()" alt="New Roots HTML" width="300" height="200" title="JavaScript/HTML/CSS: New Roots - Static Webpage"></a></div>
                <div class="project scale"><p>C#: Equipment Catalogue - Console App using JSON Persisted Data</p><a href="https://github.com/milesmgit/Equipment-Catalogue" target="_blank"><img src="img/equipment.png" onmouseover="rollover(this)" onmouseout="rollout()" alt="Equipment Catalogue C# Console" width="300" height="200" title="C#: Equipment-Catalogue - Console Software utilizing JSON to store data persistently."></a></div>
              </div>
          </div> <!-- end horizontal-flex-div -->
        </div>
        <div class="topPlacement">
          <a class="top" href="#body"><button class="toTopButton">Top</button></a>
        </div>
        `

      body.style.height = "3200px";
    }, 2000);
  }

  contactMe = () => {
    setTimeout(function() {
      slide.innerHTML = `
        <div id="contact-main-flex">
          <div class="contact-left-flex">
            <h4>Contact Me</h4>
            <h6><a href="mailto:milesm427@gmail.com">milesm427@gmail.com</a></h6>
            <h6>Cell: 502.822.8709</h6>
          </div> <!-- end flex-left div -->

          <div class="contact-right-flex">
            <div class='menu_items'>
              <button class='menu_item' id='credentials' onclick="displayCredentials()">
                <span>Credentials</span>
              </button>
              <button class='menu_item' id="contact-me" onclick="contactMe()">
                <span>Contact Me</span>
              </button>
              <button class='menu_item' id="gallery" onclick="displayGallery()">
                <span>Gallery</span>
              </button>
              <button class='menu_item' id="bio" onclick="displayBio()">
                <span>Bio</span>
              </button>
            </div> <!-- end menu_items div -->
          </div> <!-- end contact-right-flex div -->
        </div> <!-- end contact-main-flex div -->
        `
      body.style.height = "800px";
    }, 1000);


  }

  let shield = 'img/shield.png';
  let gradient = 'linear-gradient(to bottom, rgba(109, 124, 199, .5), rgba(109, 124, 199, .5))';

  displayMenu = () => {
      if(galleryFlag === 0){
        return;
      }
      else {
        galleryFlag = 0;
      }
      slideBack();
      setTimeout(() => {
        displayIntro();
        slide.innerHTML = `
        <div class='menu_items'>
          <button class='menu_item' id='credentials' onclick="displayCredentials()">
            <span>Credentials</span>
          </button>
          <button class='menu_item' id="contact-me" onclick="contactMe()">
            <span>Contact Me</span>
          </button>
          <button class='menu_item' id="gallery" onclick="displayGallery()">
            <span>Gallery</span>
          </button>
          <button class='menu_item' id="bio" onclick="displayBio()">
            <span>Bio</span>
          </button>
        </div>
        `
      slide.id = "slide";
      slide.style.display ='block';
      slide.style.backgroundImage = `
        ${gradient},
        url(${shield})`;
      slide.style.backgroundRepeat = "no-repeat";
      slide.style.backgroundSize = "100% 100%";
      slide.style.height = '520px';

    }, 2500 );

  }







  // displayIntro();


}
