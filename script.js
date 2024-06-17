// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
// gsap.registerPlugin(ScrollTrigger);

// gsap.set("#navbar", { opacity: 1 });

//     // Create a ScrollTrigger to change opacity of the navbar
//     gsap.to("#navdiv", {
//         scrollTrigger: {
//             trigger: "#main", // Trigger when the content starts scrolling
//             start: "top top", // Start animation when the top of the content reaches the top of the viewport
//             end: "bottom top", // End animation when the bottom of the content reaches the top of the viewport
//             scrub: true, // Smoothly animate the navbar as the user scrolls
//             markers: true // Add markers for debugging (you can remove this in production)
//         },
//         opacity: 0.5 // Change opacity to 0.5 when triggered
//     });
// tl.to("#main #page1 #navbar",{
//     scrollTrigger: {
//         trigger: "#navdiv", // Trigger when the #navdiv comes into view
//         start: "top top", // Start animation when the top of the #navdiv reaches the top of the viewport
//         end: "+=500", // End animation when the bottom of the #navdiv reaches the top of the viewport
//         scrub: true, // Smoothly animate the navbar as the user scrolls
//         markers: true // Add markers for debugging (you can remove this in production)
//     },
//     backgroundColor: "#333", // Change background color to black when triggered
//     padding: "10px 28px" // Adjust padding when triggered
// })
var t1 = gsap.timeline()
    
t1.to("#main #page1 #sec",{
    y:"100vh",
    scale:.6,
    duration:0,
})
t1.to("#main #page1 #sec",{
    y:"30vh",
    duration:1,
    delay:1
})
t1.to("#main #page1 #sec",{
    y:"0vh",
    duration:1,
    scale:1,
    rotation:360
})
t1.to('#main #page5 #part3 div',{
    x:"-110%",
    repeat:-1,
    duration:9,
})
t1.from('#main #page5 #part3 div',{
    x:"110%",
    repeat:-1,
    duration:5,
})