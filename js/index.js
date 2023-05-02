document.getElementById("defaultOpen").click();

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
    
}

function openRedirect(url) {
    window.location.href = url;
}

 function switchImage() {
        var img = document.getElementById("myImage");
        if (img.src.match("pic1.png")) {
          img.src = "js/pic2.png";
             img.classList.add("rotate-pic2");
          img.classList.remove("rotate-pic1");
        } else {
          img.src = "js/pic1.png";
             img.classList.add("rotate-pic1");
          img.classList.remove("rotate-pic2");
        }
        setTimeout("switchImage()", 400); // Switch images every 0.2 seconds
      }
      




const overlayBtn = document.getElementById("overlay-btn");
const overlay = document.getElementById("overlay");

overlayBtn.addEventListener("click", function() {
  overlay.style.display = "block";
});

overlay.addEventListener("click", function(event) {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});


const overlayBtn2 = document.getElementById("overlay-btn2");
const overlay2 = document.getElementById("overlay2");

overlayBtn2.addEventListener("click", function() {
  overlay2.style.display = "block";
});

overlay2.addEventListener("click", function(event) {
  if (event.target === overlay2) {
    overlay2.style.display = "none";
  }
});


const overlayBtn3 = document.getElementById("overlay-btn3");
const overlay3 = document.getElementById("overlay3");

overlayBtn3.addEventListener("click", function() {
  overlay3.style.display = "block";
});

overlay3.addEventListener("click", function(event) {
  if (event.target === overlay3) {
    overlay3.style.display = "none";
  }
});

const overlayBtn4 = document.getElementById("overlay-btn4");
const overlay4 = document.getElementById("overlay4");

overlayBtn4.addEventListener("click", function() {
  overlay4.style.display = "block";
});

overlay4.addEventListener("click", function(event) {
  if (event.target === overlay4) {
    overlay4.style.display = "none";
  }
});