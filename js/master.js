

//Check If There's Local Storage Color Option.
let mainColor = localStorage.getItem("color_option");

if(mainColor !== null){

    //Save Last Color To Local Storage.
    document.documentElement.style.setProperty("--main--color", mainColor);

    //Remove All Class Active From List
    document.querySelectorAll(".color-list li").forEach(element =>{
    element.classList.remove("active");
        // Add Class Active on Element in Local Storage;
        if(element.dataset.color === mainColor){
            element.classList.add('active')
        };

    });
    
};

// Random Backgruond Option.
let backgroundOption= true;

// Veriable To Control The Interval.
let backgroundInterval;

//Check If There's Local Storage Random Background Item.
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage is Not Empyt.
if(backgroundLocalItem !== null){

    
    // Remove All Class Active from Span.
    document.querySelectorAll(".randomBackground span").forEach(element =>{

        element.classList.remove("active");

    });
    if(backgroundLocalItem === 'true'){
        
        backgroundOption = true;
        
        document.querySelector(".randomBackground .yes").classList.add("active");

    }else{
        
        backgroundOption = false;
        
        document.querySelector(".randomBackground .no").classList.add("active");

    };
};

let settingBox = document.querySelector(".setting-box")
//Toggle Spin Class On Icon. 
document.querySelector(".toggle-setting i").onclick = function(){

    //Toggle Class fa-spin For Routation On Self.
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main Setting-box.
    settingBox.classList.toggle('open');
};

// Switch Colors.
const colorsList= document.querySelectorAll(".color-list li");
    // Loop On All List Items.
    colorsList.forEach( li => {
        // Click On Every List Items.
        li.addEventListener("click", (e) =>{
            // Set Color on Root.
            document.documentElement.style.setProperty("--main--color",e.target.dataset.color);
            
            // Set Color On Local Storage.
            localStorage.setItem("color_option", e.target.dataset.color );

            handelActive(e)

        });
    });
// Switch Random Background Option.
const randomBackElm= document.querySelectorAll(".randomBackground span");
    // Loop On All Spans.
    randomBackElm.forEach( span => {
        // Click On Every Spans.
        span.addEventListener("click", (e) =>{

            handelActive(e)

            if(e.target.dataset.dackground === "yes"){

                backgroundOption = true;
                
                randomBack()

                localStorage.setItem("background_option" , true)

            }else{
                backgroundOption = false;
                
                clearInterval(backgroundInterval)

                localStorage.setItem("background_option" , false)

            };

        });
    });




// Select Landing Page Element.
let landingPage = document.querySelector(".landing-page");
// Get Array Of Imgs.
let imgsArray = ['Azalia.jpg', 'Cassel.jpg', 'Catania.jpg'];



// Function To Randomiz Imgs.
function randomBack(){

    if(backgroundOption === true){

        // Change Background Image Every 5Second.
        backgroundInterval = setInterval(() => {

        // Get Random Number.
        let randomNumber = Math.floor(Math.random() * imgsArray.length);

        // Change Background Image Url.
        landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';

        },5000);
    };
};
randomBack()


let ourSkills = document.querySelector(".skills");

window.onscroll = function(){

    // Skills Offset Top 
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills offset Height
    let skillsOffsetHeight = ourSkills.offsetHeight;

    // Window Height;
    let windowHeight = this.innerHeight;

    // Window Scroll Top
    let windowScrollTop = this.pageYOffset;


    if(windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowHeight)){

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill =>{
            skill.style.width = skill.dataset.progress;
        });

    };

};


// Creat Pupop With The Image
let ourGallery = document.querySelectorAll('.gallery img');



ourGallery.forEach(img =>{

    img.addEventListener('click', (e)=>{

        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay
        overlay.className = "popup-overlay";

        // Add Overlay To Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement('div');

        // Add Class To The Popup Box
        popupBox.className = 'popup-box';

        if(img.alt !== null){

            //Create Heading
            let imgHeading = document.createElement("h3");

            // Create Text For Heading 
            let textImg = document.createTextNode(img.alt);

            // Appned The Text To The Heading
            imgHeading.appendChild(textImg);

            // Appned The Heading To The Pupop Box
            popupBox.appendChild(imgHeading);
        };

        //Create The Image
        let popupImage = document.createElement('img');

        // Set Image Source 
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage)

        // Appand The popup Box To Body
        document.body.appendChild(popupBox)

        // Create The Close Span
        let closeButton = document.createElement("span");

        //Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append  Text To The Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = "close-button";

        // Append Close Button To The Pupop Box
        popupBox.appendChild(closeButton);

    });

});

// Close Pupop
document.addEventListener('click', function(e){

    if(e.target.className == "close-button"){

        //Ramove The Current Pupop
        e.target.parentNode.remove();

        //Remove Overlay
        document.querySelector(".popup-overlay").remove()
    }
});

//Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

//Select All links
const allLinks = document.querySelectorAll(".links a");

// Function to Scroll The Bullets And The Links
function scrollToSomeWhare (elements){
    elements.forEach(ele => {

        ele.addEventListener('click',(e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: "smooth" 

            });
        });
    });
};

scrollToSomeWhare(allBullets);
scrollToSomeWhare(allLinks);


// Handel Active State
function handelActive(e){
    //Remove Class Active from list.
    e.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    });
    // Add Class Active To Click Target.
    e.target.classList.add("active")
};


let bulletsSpan = document.querySelectorAll(".bulletsOption span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletsLocalItem = localStorage.getItem('bullets_option');

if(bulletsLocalItem !== null){

    bulletsSpan.forEach(span => {

        span.classList.remove("active")

    });

    if(bulletsLocalItem === "block"){

        bulletsContainer.style.display = 'block';

        document.querySelector(".bulletsOption .yes").classList.add('active');
        
    }else{
        
        bulletsContainer.style.display = 'none';
        
        document.querySelector(".bulletsOption .no").classList.add('active');
    };
};

bulletsSpan.forEach(span => {

    span.addEventListener('click', (e)=>{
        
        if(span.dataset.display === "show"){

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option", "block");
            
        }else{
            
            bulletsContainer.style.display = 'none';
            
            localStorage.setItem("bullets_option", "none");
        };
        handelActive(e);
    });
});

//Reset Button
document.querySelector(".reset-option").onclick = function(){

    // Clear All Local Storage
    // localStorage.clear();

    // Clear Specified Local Storage 
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // Reload Window
    window.location.reload();
};



// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");

let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e){

    //Stop Propagation
    e.stopPropagation();

    // Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");

    // Toggle Class "open" On Links
    tLinks.classList.toggle("open");

};

// Click Anywhare Outside Menu And Toggle Button
document.addEventListener("click", (e)=> {

    if(e.target !== toggleBtn && e.target !== tLinks){
        
        // Check If Menu Is Open
        if(tLinks.classList.contains('open')){
            
            // Toggle Class "menu-active" On Button
            toggleBtn.classList.toggle("menu-active");

            // Toggle Class "open" On Links
            tLinks.classList.toggle("open");

        };
    };

});

// Stop Propagation from links
tLinks.onclick = function(e){
    e.stopPropagation();
}