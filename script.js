const person = document.getElementById("person");
const cat = document.getElementById("cat");

const nextButton = document.getElementById("next-button");
const talkButton = document.getElementById("talk-button");

const speechBubble = document.getElementById("speech-bubble");

const walkingFrames = [
    "images/Amelia_run_left_1.png",
    "images/Amelia_run_left_2.png",
    "images/Amelia_run_left_3.png",
    "images/Amelia_run_left_4.png",
    "images/Amelia_run_left_5.png",
    "images/Amelia_run_left_6.png"
];

const catFrames = [
    "images/cat_appear_1.png",
    "images/cat_appear_2.png",
    "images/cat_appear_3.png",
    "images/cat_appear_4.png",
    "images/cat_appear_5.png",
    "images/cat_appear_6.png",
    "images/cat_appear_7.png",
    
];

let currentWalkFrame = 0;
let currentCatFrame = 0;

let walking = false;
let position = -20;


nextButton.addEventListener("click", () => {
	
    talkButton.addEventListener("click", () => {

    speechBubble.style.display = "block";

});

    if (walking) return;

    walking = true;

    const walkAnimation = setInterval(() => {

        // Change walking frame
        person.src = walkingFrames[currentWalkFrame];
        
        currentWalkFrame++;

        if (currentWalkFrame >= walkingFrames.length) {
            currentWalkFrame = 0;
        }
        

        // Move person to the right
        position += 1;
        person.style.left = position + "%";

        // Stop when person reaches the middle
        if (position >= 45) {
            clearInterval(walkAnimation);
            
            // Amelia stops and looks at the wall
            person.src = "images/Amelia_idle_1.png";
            
            // Wait 1 second, then reveal the cat
    	    setTimeout(() => {
        	cat.style.display = "block";
        	
        	// Start cat animation
        	const catAnimation = setInterval(() => {
		    cat.src = catFrames[currentCatFrame];
		    currentCatFrame++;

		    if (currentCatFrame >= catFrames.length) {
		        clearInterval(catAnimation);
		        
		        talkButton.style.display = "inline-block";
    		    }
		}, 400);
    	}, 2500);
    
            
            walking = false;
        }

    }, 120);


});
