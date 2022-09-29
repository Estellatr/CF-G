document.getElementById('startbutton').addEventListener("click", (event) => { 
  alert(
    "Welcome to Rescue the Frog! Follow the prompts to rescue our little froggie friend :)."
  );
  
  let output = document.getElementById("output");
  
  let invalidAnswer = true;
  
  let end = false;
  
  let answer = "";
  
  while (invalidAnswer) {
    let question = "You are walking by a small road, when you hear little ribbit-y cries for help. What do you do? Investigate, or keep walking?"
    answer = prompt(question);
    
    output.value =
      "Q: " + question;
    
    if (answer.toLowerCase() == "investigate") {
      output.value += "\n" + "A: " + answer;
      invalidAnswer = false;
    } else if (answer.toLowerCase() == "keep walking") {
      output.value +=
        "\n" + "A: " + answer;
      alert("You keep walking and have a normal, uneventful day."); 
      alert("The End" + "\n" + "Thank you for playing!");
      output.value += "You keep walking and have a normal, uneventful day.";
      output.value += "The End" + "\n" + "Thank you for playing!";
      invalidAnswer = false;
      end = true;
    } else {
      alert("You must enter a valid answer.");
    }
  }
  
  if (!end) {
    output.value += "\n" + "Q: You follow the ribbit-y cries and cross the quiet road. The cries get louder and after a few minutes of walking, you find yourself by an old, empty well.";
    output.value += "\n" + "Q: The little frog's cries echo from the bottom of the well - the frog is trapped!";
    alert("You follow the ribbit-y cries and cross the quiet road. The cries get louder and after a few minutes of walking, you find yourself by an old, empty well.");
    alert("The little frog's cries echo from the bottom of the well - the frog is trapped!");
  }
  
  invalidAnswer = true;
  
  while (invalidAnswer && !end) {
    let question = "You look around you and see: " + "\n" + "- an abandoned cottage" + "\n" + "- a long rope" + "\n" + "Do you use the rope to help the frog, or check the cottage for other tools? (Write rope or cottage)";
    answer = prompt(question);
    
    output.value +=
      "Q: " + question;
    
    if (answer.toLowerCase() == "rope") {
      output.value += "\n" + "A: " + answer;
      while (invalidAnswer && !end) {
        alert("You take the rope and lower it into the well. You feel the rope touching the bottom of the well." + "\n" + "You tie the end of the rope tightly around a nearby tree, and begin to climb down.");
        output.value += "You take the rope and lower it into the well. You feel the rope touching the bottom of the well. You tie the end of the rope tightly around a nearby tree, and begin to climb down.";
        alert("The well is deep, and your arms get tired quickly." + "\n" + "You can feel your arms give out just as you reach the bottom of the well - good thing you won't have to use them for a while!");
        output.value += "The well is deep, and your arms get tired quickly." + "\n" + "You can feel your arms give out just as you reach the bottom of the well - good thing you won't have to use them for a while!";
        question = "You look around and quickly find the crying frog, one of their legs are trapped under a rock!" + "\n" + "Do you lift the rock and free the frog? (Yes or No)";
        answer = prompt(question);
        
        output.value +=
          "Q: " + question;
        
        if (answer.toLowerCase() == "no") {
          output.value += "\n" + "A: " + answer;
          alert("You decide to leave the frog trapped under the rock. No longer enjoying your time in the well, you try to climb back up the rope.");
          alert("The rope breaks (your arms were too tired to climb, anyway). You are now trapped with the frog." + "\n" + "You spend the rest of your life at the bottom of the well, with a very angry, loud frog.");
          alert("The End." + "\n" + "Thank you for playing!");
          output.value += "You decide to leave the frog trapped under the rock. No longer enjoying your time in the well, you try to climb back up the rope.";
          output.value += "The rope breaks (your arms were too tired to climb, anyway). You are now trapped with the frog." + "\n" + "You spend the rest of your life at the bottom of the well, with a very angry, loud frog.";
          output.value += "The End." + "\n" + "Thank you for playing!";
          invalidAnswer = false;
  
        } else if (answer.toLowerCase() == "yes") {
          output.value += "\n" + "A: " + answer;
          alert("You lift the rock off of the frog's little leg." + "\n" + "The frog is so grateful that it jumps up and plants a little kiss on your cheek.");
          alert("The frogs tiny kiss leaves a tingling sensation on your skin, and you start to feel a little strange.");
          alert("You pass out for what feels like only a minute." + "\n" + "When you wake up, you notice that you are significantly smaller (and more green) than you were before!");
          alert("You have transformed into a frog!" + "\n" + "The frog you have saved introduces themselves as Froggie the Frog. You feel a close bond with Froggie.");
          output.value += "You lift the rock off of the frog's little leg." + "\n" + "The frog is so grateful that it jumps up and plants a little kiss on your cheek.";
          output.value += "The frogs tiny kiss leaves a tingling sensation on your skin, and you start to feel a little strange.";
          output.value += "You pass out for what feels like only a minute." + "\n" + "When you wake up, you notice that you are significantly smaller (and more green) than you were before!";
          output.value += "You have transformed into a frog!" + "\n" + "The frog you have saved introduces themselves as Froggie the Frog. You feel a close bond with Froggie.";
          invalidAnswer = false;
  
          while (invalidAnswer && !end) {
            let question = "You can decide to live out your days with Froggie in the bottom of the well, or escape together to the surface. Do you choose option 1 or 2?";
            answer = prompt(question);
            
            output.value +=
              "Q: " + question;
            
            if (answer.toLowerCase() == "1") {
              output.value += "\n" + "A: " + answer;
              alert("You spend the rest of your frog life with Froggie at the bottom of the well. You open a shop together for any other tavelling creatures, and are soon rich enough to build your own frog village at the bottom of the well." + "\n" + "You lived a happy life.");
              alert("The End." + "\n" + "Thank you for playing!");
              output.value += "You spend the rest of your frog life with Froggie at the bottom of the well. You open a shop together for any other tavelling creatures, and are soon rich enough to build your own frog village at the bottom of the well." + "\n" + "You lived a happy life.";
              output.value += "The End." + "\n" + "Thank you for playing!";
              invalidAnswer = false;
            } else if (answer.toLowerCase() == "2") {
              output.value += "\n" + "A:" + answer;
                alert("You and Froggie use the rope to slowly climb out of the well (your frog legs are a lot stronger than your old, human arms!). You soon reach the surface.");
                alert("Froggie takes you back to their old village, and you meet lots of other interesting frogs there.");
                alert("After some years in the village, you grow restless to see the outside world." + "\n" + "You pack your things and begin your next frog adventure");
                alert("The End." + "\n" + "Thank you for playing!");
                output.value += "You and Froggie use the rope to slowly climb out of the well (your frog legs are a lot stronger than your old, human arms!). You soon reach the surface.";
                output.value += "Froggie takes you back to their old village, and you meet lots of other interesting frogs there.";
                output.value += "After some years in the village, you grow restless to see the outside world." + "\n" + "You pack your things and begin your next frog adventure";
                output.value += "The End." + "\n" + "Thank you for playing!";
                invalidAnswer = false;
            } else {
              alert("You must enter a valid answer.");
            }
          }
          
        } else {
          alert("You must enter a valid answer.")
        }
      }
    } else if (answer.toLowerCase() == "cottage") {
      output.value +=
        "\n" + "A: " + answer;
        alert("You enter the dilapidated cottage. It shakes with every step you take.");
        alert("You see a large ladder in the center of the cottage - perfect for reaching the bottom of the well!");
        alert("Unfortunately, as you lift the ladder, the house groans and collapses in on you." + "\n" + "Who would have known the ladder was the only thing holding this little cottage together?!");
        alert("You take your last breath and dream sweet dreams of froggie heaven - dancing with little frogs forever.");
        alert("The End." + "\n" + "Thank you for playing!");
        output.value += "You enter the dilapidated cottage. It shakes with every step you take.";
        output.value += "You see a large ladder in the center of the cottage - perfect for reaching the bottom of the well!";
        output.value += "Unfortunately, as you lift the ladder, the house groans and collapses in on you." + "\n" + "Who would have known the ladder was the only thing holding this little cottage together?!";
        output.value += "You take your last breath and dream sweet dreams of froggie heaven - dancing with little frogs forever.";
        output.value += "The End." + "\n" + "Thank you for playing!";
        invalidAnswer = false;
  
    } else {
      alert("You must enter a valid answer.");
    }
  }
  

 
});  

