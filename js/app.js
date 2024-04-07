// Street Taycoon javascript goes here
console.log("Maj je bil tukaj");
// Street Taycoon javascript goes here


// ::::: two column based scrolling animation :::::

// ::: Variables / Section :::
const sectionOne = document.getElementById("section-01");
const sectionTwo = document.getElementById("section-02");
const sectionThree = document.getElementById("section-03");
const sectionFour = document.getElementById("section-04");
const sectionFive = document.getElementById("section-05");
// ::: Variables / Section :::

// ::: Variables / Related images :::
const relatedImageOne = document.getElementById("TEST_IMG_01");
const relatedImageTwo = document.getElementById("TEST_IMG_02");
const relatedImageThree = document.getElementById("TEST_IMG_03");
const relatedImageFour = document.getElementById("TEST_IMG_04");
const relatedImageFive = document.getElementById("TEST_IMG_05");
// ::: Variables / Related images :::


// ::: Inter section observer for section 1 :::
// :: Observer options ::
const options = {
    // threshold: .5,
    threshold: 1,
    // threshold: .75,
    // threshold: .25,
    rootMargin: "250px"
};
// :: Observer options ::
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        console.log(entry.target);
        console.log("section ones is visible");
        relatedImageOne.classList.toggle("d-none");
    });
}, options);

observer.observe(sectionOne);
// ::: Inter section observer for section 1 :::

// ::: Inter section observer for section 2 :::
const observer02 = new IntersectionObserver(function(entries, observer02){
    entries.forEach(entry => {
        console.log(entry.target);
        console.log("section two is visible");
        relatedImageTwo.classList.toggle("d-none");
    });
}, options);

observer02.observe(sectionTwo);
// ::: Inter section observer for section 2 :::

// ::: Inter section observer for section 3 :::
const observer03 = new IntersectionObserver(function(entries, observer03){
    entries.forEach(entry => {
        console.log(entry.target);
        console.log("section three is visible");
        relatedImageThree.classList.toggle("d-none");
    });
}, options);

observer03.observe(sectionThree);
// ::: Inter section observer for section 3 :::

// ::: Inter section observer for section 4 :::
const observer04 = new IntersectionObserver(function(entries, observer04){
    entries.forEach(entry => {
        console.log(entry.target);
        console.log("section four is visible");
        relatedImageFour.classList.toggle("d-none");
    });
}, options);

observer04.observe(sectionFour);
// ::: Inter section observer for section 4 :::

// ::: Inter section observer for section 4 :::
const observer05 = new IntersectionObserver(function(entries, observer05){
    entries.forEach(entry => {
        console.log(entry.target);
        console.log("section five is visible");
        relatedImageFive.classList.toggle("d-none");
    });
}, options);

observer05.observe(sectionFive);
// ::: Inter section observer for section 4 :::


// ::::: two column based scrolling animation :::::