var presidentialInput = document.getElementById("text-input");
var presidentialOutput = document.getElementById("presidential-container");
var presidentialInfo = "";
var currentPresident;
var presidentLink = "";

// 1. Create an array of objects that represents famous people (see structure below).
//     Object structure

//     {
//       title: "Samurai",
//       name: "Tomoe Gozen",
//       bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and 
//       her skills in battle dwarfed many of those held by even the strongest men in her 
//       unit.",
//       image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
//       lifespan: {
//         birth: 1747,
//         death: 1797
//       }
//     }
var presidentialArray = [
{
  title: "First-President",
  name: "George Washington",
  bio: "George Washington was born on February 22, 1732, in Westmoreland County, Virginia. Washington served as a general and commander-in-chief of the colonial armies during the American Revolution, and later became the first president of the United States, serving from 1789 to 1797.",
  image: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjM0MDA1MzkwODYw/george-washington-9524786-1-402.jpg",
  lifespan: {
    birth: 1732,
    death: 1799
  }
},
{
  title: "Second-President",
  name: "John Adams",
  bio: "John Adams was born on October 30, 1735, in Braintree (now Quincy), Massachusetts. His father, John Adams Sr., was a farmer, a Congregationalist deacon and a town councilman, and was a direct descendant of Henry Adams, a Puritan who emigrated from England to the Massachusetts Bay Colony in 1638.",
  image: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcxMjc3MzIxNzQx/john-adams-37967-1-402.jpg",
  lifespan: {
    birth: 1735,
    death: 1826
  }
},
{
  title: "Third-President",
  name: "Thomas Jefferson",
  bio: "Thomas Jefferson was born on April 13, 1743, in Shadwell, Virginia. He was a draftsman of the U.S. Declaration of Independence; the nation's first secretary of state (1789-94); second vice president (1797-1801); and, as the third president (1801-09), the statesman responsible for the Louisiana Purchase.",
  image: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU1MDEwMjQ4MjA3/thomas-jefferson-9353715-1-402.jpg",
  lifespan: {
    birth: 1743,
    death: 1826
  }
},
{
  title: "Fourth-President",
  name: "James Madison",
  bio: "Born on March 16, 1751, in Port Conway, Virginia, James Madison wrote the first drafts of the U.S. Constitution, co-wrote the Federalist Papers and sponsored the Bill of Rights. ... He died on June 28, 1836, at the Montpelier estate in Orange County, Virginia.",
  image: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwNjEwMzI1MDA2/james-madsion-9394965-1-402.jpg",
  lifespan: {
    birth: 1751,
    death: 1836
  }
},
{
  title: "Fifth-President",
  name: "James Monroe",
  bio: "Born on April 28, 1758, in Westmoreland County, Virginia, James Monroe fought under George Washington and studied law with Thomas Jefferson. He was elected the fifth president of the United States in 1817.",
  image: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcxNzI2OTY0MjM3/james-monroe-9412098-1-402.jpg",
  lifespan: {
    birth: 1758,
    death: 1831
  }
}
];


// 7. Each element's DOM structure should be as shown below.
//     Sample Person Element & Children

//     This is just a sample and is not what your final HTML will look like. You need to 
//    add all the appropriate id and class attribute needed to make it work as intended.

//     <!-- ///
//       HTML is a flexible specification. I just made up the person tag,
//       and that's perfectly legal. You can then style it with CSS however
//       you wish.
//     /// -->
//     <person>
//       <header>Name and title go here</header>
//       <section>Bio and image go here</section>
//       <footer>Lifespan info goes here</footer>
//     </person>
songs.map(function(song, index) {
    $("#songs").append(`<li>${song.name} by ${song.artist} from the album ${song.album} <button class="delete">DELETE</button></li>`);
});

$(".delete").click(function() {
    $(this).parent().remove();
});

presidentialArray.map(function(president) {
  $("#presidential-container").append(`<person class="col-sm-6 col-md-3 thumbnail president-${i}">` +
                                      `<header class="president-${i}">${president.name}, ${president.title}</header>` +
                                      `<section class="president-${i}">${president.bio}</section>` +
                                      `<section class="president-${i}" id="presidentialBioAddendum-${i}"></section>` +
                                      `<img class="president-${i}" src="${president.image}"/>` +      
                                      `<footer class="president-${i}">${president.lifespan.birth} to ${president.lifespan.death}</footer>` +
                                      `</person>`) 
);

})
function populateDemPresidents() {
  for (var i = 0; i < presidentialArray.length; i++) {
    currentPresident = presidentialArray[i];

// 4. Create a DOM element for each of the objects inside the container. Style your person 
// elements however you like.
  }
  presidentialOutput.innerHTML = presidentialInfo;
}

function presidentialEvent(event) {
  for ( q = 0; q < presidentialArray.length; q++) {
// 8. When you click on one of the person elements, a dotted border should appear around it.
    if (event.target.tagName === "PERSON" && event.target.className === "president-" + q) {
      event.target.classList.add("dotted-border");
    } else if (event.target.className === "president-" + q) {
      event.target.parentNode.classList.add("dotted-border");
    }
  }
// 9. When you click on one of the person elements, the text input should immediately gain 
// focus so that you can start typing.
    presidentialInput.focus();
    presidentLink = event.target.className;
    presidentialInput.addEventListener("keyup", bindingToBio);
}

// 10. When there is a highlighted person element, and you begin typing in the input box, 
// the person's biography should be immediately bound to what you are typing, letter by 
// letter.
function bindingToBio(event) {
  for (u = 0; u < presidentialArray.length; u++) {
    if (event.keyCode === 13) {
      if (presidentLink === "president-" + u) {
        var removeDots = document.getElementsByClassName(presidentLink);  
        for (var x = 0; x < removeDots.length; x++) {
          if (removeDots[x].tagName === "PERSON") {
            removeDots[x].classList.remove("dotted-border");
          }
        }
      }
      clearInput();
    } else if (presidentLink === "president-" + u) {
      var additionalBio = document.getElementById("presidentialBioAddendum-" + u);
      additionalBio.innerHTML = "<section>" + presidentialInput.value + "</section>";
    }  
  }
}

// 11. When you press the enter/return key when typing in the input field, then the content 
// of the input field should immediately be blank.
function clearInput() {
  presidentialInput.blur();
  presidentialInput.value = "";
}

populateDemPresidents();

presidentialOutput.addEventListener("click", presidentialEvent);