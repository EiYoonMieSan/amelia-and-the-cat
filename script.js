const scene = document.getElementById("scene");

const person = document.getElementById("person");

const cat = document.getElementById("cat");
const cat1Arm = document.getElementById("cat-1-arm");
const cat2Arm = document.getElementById("cat-2-arm");

const speechBubbleRight = document.getElementById("speech-bubble-right");
const speechBubbleLeft = document.getElementById("speech-bubble-left");


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

let position = -20;

let sceneStep = 0;
let animationRunning = false;


scene.addEventListener("click", () => {

	// Don't allow another click while animation is happening
    if (animationRunning) {
        return;
    }
    
    // =========================================
    // FIRST CLICK
    // Amelia walks in + cat appears
    // =========================================

    if (sceneStep === 0) {
    	animationRunning = true;
    	sceneStep = 1;
    	    
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
            
            // Wait 2.5 second, then reveal the cat
    	    	setTimeout(() => {
        		cat.style.display = "block";
        	
        	// Start cat appearance animation
        		const catAnimation = setInterval(() => {
  	   		    cat.src = catFrames[currentCatFrame];
			    currentCatFrame++;

			// cat finished appearing 
		   	 if (currentCatFrame >= catFrames.length) {
		        	clearInterval(catAnimation);
		        
		        	//animation is finally finished
		        	animationRunning = false;
		        	
		        	//now the next click is allowed
		        	sceneStep = 2;
    		    		}
			}, 400);
    		}, 2500);
    	}

    }, 120);
    	
    }
	// =========================================
    	// SECOND CLICK
        // speech bubble + cat paws
        // =========================================

 	else if (sceneStep === 2) {
 	
 	animationRunning = true;
 	sceneStep = 3;
 	
 	// -----------------------------------------
        // SHOW RIGHT BUBBLE 
        // -----------------------------------------
 	speechBubbleRight.style.display = "block";

        // Wait 2.5 second
        setTimeout(() => {

            // Hide right bubble
            speechBubbleRight.style.display = "none";
            
            // Wait 1 second before showing 1 arm
            setTimeout(() => {

            	  // Hide the original cat
                cat.style.display = "none";

                // Show cat with 1 arm
                cat1Arm.style.display = "block";

            
             	  // Wait 2.5 seconds before showing left bubble
                   setTimeout(() => {
            
            		// Show left bubble
            		   speechBubbleLeft.style.display = "block";

            		// Wait another 1.5 second
            		   setTimeout(() => {
            			// Hide left bubble
                		speechBubbleLeft.style.display = "none";

                		// Hide 1-arm cat
                        	cat1Arm.style.display = "none";

	                        // Show 2-arm cat
        	                cat2Arm.style.display = "block";

                		// Sequence finished
                		animationRunning = false;
                		sceneStep = 4;
 			}, 1500);

                }, 2500);

            }, 1500);

        }, 2500);
    }
});




