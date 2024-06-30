let mm = gsap.matchMedia()

const uptodown = (pagename, imgname) => {
    gsap.from(`${pagename} ${imgname}`, {
        y: "-100%",
        opacity: 0,
        duration: 0.8,
        // delay: 0.5,
        scrollTrigger: {
            trigger: pagename,
            scroller: "body",
            // markers: true,
            start: "0 70%",
            end: "20% 20%",
            scrub: 2,
            stagger: true,
        }
    })
}

const downtoup = (pagename, imgname) => {
    gsap.from(`${pagename} ${imgname}`, {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        // delay: 0.5,
        scrollTrigger: {
            trigger: pagename,
            scroller: "body",
            // markers: true,
            start: "0 70%",
            end: "20% 20%",
            scrub: 2,
            stagger: true,
        }
    })
    gsap.from(`${pagename} h1,${pagename} h3,${pagename} h4`, {
        y: 120,
        opacity: 0,
        duration: 0.8,
        // delay: 0.5,
        scrollTrigger: {
            trigger: pagename,
            scroll: "body",
            start: "0% 50% ",
        }
    })
}


mm.add("(max-width:1024px)", () => {

})
mm.add("(min-width:1025px)", () => {
    //page 1 animation
    gsap.from(".page1 h1,.page1 h3, .page1 h4", {
        y: 120,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
    })
    gsap.from(".page1 .img1,.page1 .img2", {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        delay: 0.5
    })

    // page 2
    downtoup(".page2", ".img1")
    uptodown(".page2", ".img2")

    // page 3
    downtoup(".page3", ".img3")
    uptodown(".page3", ".img4")
    gsap.from(".page3 .img1", {
        y: "-100%",
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".page3",
            scroller: "body",
            // markers: true,
            start: "0 70%",
            end: "20% 20%",
            scrub: 2,
            stagger: true,
        }
    })
    gsap.from(".page3 .img2", {
        y: "-100%",
        x: "100%",
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".page3",
            scroller: "body",
            // markers: true,
            start: "0 70%",
            end: "20% 20%",
            scrub: 2,
            stagger: true,
        }
    })
    gsap.from(".page3 .img5", {
        y: "100%",
        x: "-100%",
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".page3",
            scroller: "body",
            // markers: true,
            start: "0 70%",
            end: "20% 20%",
            scrub: 2,
            stagger: true,
        }
    })

    // page 4
    gsap.to(".page4 .img1, .page4 .img2", {
        y: "-100%",
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".page4",
            scroller: "body",
            // markers: true,
            start: "50% 70%",
            end: "100% 20%",
            scrub: 2,
            stagger: true,
        }
    })
    gsap.to(".page4 .img3, .page4 .img4", {
        y: "100%",
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".page4",
            scroller: "body",
            // markers: true,
            start: "50% 70%",
            end: "100% 20%",
            scrub: 2,
            stagger: true,
        }
    })
    gsap.to(".page4 .img5", {
        x: "100%",
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".page4",
            scroller: "body",
            // markers: true,
            start: "50% 70%",
            end: "100% 20%",
            scrub: 2,
            stagger: true,
        }
    })
    gsap.from(".page4 h1, .page4 h3, .page4 h4", {
        y: 120,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".page4",
            scroll: "body",
            start: "0% 50% ",
        }
    })

    // page 5
    downtoup(".page5", ".img1")

    // page 6
    gsap.from(".page6 .img1", {
        x: "-100%",
        duration: 0.8,
        // delay:0.5,
        scrollTrigger: {
            trigger: ".page6",
            scroller: "body",
            start: "20% 80%",
            end: "20% 30%",
            scrub: 2,
        }
    })
    gsap.from(".page6 .img2", {
        x: "100%",
        duration: 0.8,
        // delay:0.5,
        scrollTrigger: {
            trigger: ".page6",
            scroller: "body",
            start: "0% 80%",
            end: "20% 30%",
            scrub: 2,
        }
    })
    gsap.from(".page6 h1, .page6 h3, .page6 h4", {
        y: 120,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".page6",
            scroll: "body",
            start: "0% 50% ",
        }
    })

    // page 7
    downtoup(".page7", ".img1")
    uptodown(".page7", ".img2")

})

