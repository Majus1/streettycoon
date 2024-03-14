// Street Taycoon javascript goes here
console.log("Maj je bil tukaj");
// Street Taycoon javascript goes here


// ::::: two column based scrolling animation :::::

// ::: Variables / Section :::
const sectionOne = document.getElementById("section-01");
const sectionTwo = document.getElementById("section-02");
const sectionThree = document.getElementById("section-03");
const sectionFour = document.getElementById("section-04");
// ::: Variables / Section :::

// ::: Variables / Related images :::
const relatedImageOne = document.getElementById("TEST_IMG_01");
const relatedImageTwo = document.getElementById("TEST_IMG_02");
const relatedImageThree = document.getElementById("TEST_IMG_03");
const relatedImageFour = document.getElementById("TEST_IMG_04");
// ::: Variables / Related images :::


// ::: Inter section observer :::

// :: Observer options ::
const options = {
    threshold: .5,
    rootMargin: "150px"
};
// :: Observer options ::

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        console.log(entry.target);
        console.log("section four is visible");
        relatedImageOne.classList.toggle("d-none");
    });
}, options);

observer.observe(sectionOne);

// ::: Inter section observer :::


// ::::: two column based scrolling animation :::::