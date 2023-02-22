const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



let more = document.querySelector(".more")
let cross = document.querySelector(".cross")
let menue = document.querySelector(".menue-p")

more.addEventListener("click",function(event){
    menue.style.opacity=1;
    event.preventDefault();  
    more.style.opacity=0;
    cross.style.opacity=1;
    cross.style.zIndex="2";
})

cross.addEventListener("dblclick",function(event){
    menue.style.opacity=0;
    cross.style.opacity=0;
    event.preventDefault();  
})

const circle=document.querySelector(".circle")

// circle.style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`;
document.addEventListener("mousemove",function(dets){
    gsap.to(circle,{
        x:dets.clientX,
        y:dets.clientY,
        duration: .3,
        ease:Expo,
    })
})

var li=document.querySelector("ul li a")
li.addEventListener("mousemove",function(dets){
    li.forEach(function(dets){
        gsap.to(circle,{
            scale:3
        })

    })
    // gsap.to(".menue-p ul li a",{
    //     color:"#ffff"
    // })
})
li.addEventListener("mouseleave",function(dets){
    gsap.to(circle,{
        scale:1
    })
})

