const d1 = document.querySelectorAll("#div-1 path");
const d2 = document.querySelectorAll("#div-2 path");
const d3 = document.querySelectorAll("#div-3 path");
const d4 = document.querySelectorAll("#div-4 path");
const d5 = document.querySelectorAll("#div-5 path");
const d6 = document.querySelectorAll("#div-6 path");
const d7 = document.querySelectorAll("#div-7 path");
const d8 = document.querySelectorAll("#div-8 path");
const d9 = document.querySelectorAll("#div-9 path");
const d10 = document.querySelectorAll("#div-10 path");
const d11 = document.querySelectorAll("#div-11 path");
const d12 = document.querySelectorAll("#div-12 path");
const d13 = document.querySelectorAll("#div-13 path");
const d14 = document.querySelectorAll("#div-14 path");
const d15 = document.querySelectorAll("#div-15 path");
const d16 = document.querySelectorAll("#div-16 path");
const d17 = document.querySelectorAll("#div-17 path");
const d18 = document.querySelectorAll("#div-18 path");
const d19 = document.querySelectorAll("#div-19 path");
const d20 = document.querySelectorAll("#div-20 path");

const t1 = document.querySelectorAll("#text-1 path");
const t2 = document.querySelectorAll("#text-2 path");
const t3 = document.querySelectorAll("#text-3 path");
const t4 = document.querySelectorAll("#text-4 path");
const t5 = document.querySelectorAll("#text-5 path");
const t6 = document.querySelectorAll("#text-6 path");
const t7 = document.querySelectorAll("#text-7 path");
const t8 = document.querySelectorAll("#text-8 path");
const t9 = document.querySelectorAll("#text-9 path");
const t10 = document.querySelectorAll("#text-10 path");
const t11 = document.querySelectorAll("#text-11 path");
const t12 = document.querySelectorAll("#text-12 path");
const t13 = document.querySelectorAll("#text-13 path");
const t14 = document.querySelectorAll("#text-14 path");
const t15 = document.querySelectorAll("#text-15 path");
const t16 = document.querySelectorAll("#text-16 path");
const t17 = document.querySelectorAll("#text-17 path");
const t18 = document.querySelectorAll("#text-18 path");
const t19 = document.querySelectorAll("#text-19 path");
const t20 = document.querySelectorAll("#text-20 path");


const c1 = document.querySelectorAll("#circle-1 path");
const c2 = document.querySelectorAll("#circle-2 path");
const c3 = document.querySelectorAll("#circle-3 path");
const c4 = document.querySelectorAll("#circle-4 path");

const c1_text = document.querySelector("#circle1-hover-text");
const c2_text = document.querySelector("#circle2-hover-text");
const c3_text = document.querySelector("#circle3-hover-text");
const c4_text = document.querySelector("#circle4-hover-text");

const divArr = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20]
const textArr = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20]
const circleArr = [c1, c2, c3, c4]
const circleTextArr = [c1_text, c2_text, c3_text, c4_text]

// All div link contain here. You can change any time
const divLinkArr = ["/segmentation", "/profiling-1", "https://twitter.com/", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]
// All Circle link contain here. You can change any time
const circleLinkArr = ["/who2", "/what1", "/where", "/why"]

const circleHoverTextHide = (div) => {
    div.style.display = "none"
}

circleTextArr.map((element) => {
    circleHoverTextHide(element)
})

const hoverEffect = (e, url) => {
    e.forEach((div) => {
        div.addEventListener("click", () => {
            window.open(url)
        })
        div.addEventListener("mouseover", () => {
            for (let i = 0; i < divArr.length; i++) {
                if (divArr[i] == e) {
                    continue;
                }
                else {
                    divArr[i].forEach((div) => {
                        div.style.fillOpacity = "0.5"
                        div.style.cursor = "pointer"
                    })
                    textArr[i].forEach((div) => {
                        div.style.display = "none"
                    })
                }
            }
        })
    })

    e.forEach((div) => {
        div.addEventListener("mouseout", () => {
            for (let i = 0; i < divArr.length; i++) {
                if (divArr[i] == e) {
                    continue;
                }
                else {
                    divArr[i].forEach((div) => {
                        div.style.fillOpacity = ""
                    })
                    textArr[i].forEach((div) => {
                        div.style.display = "block"
                    })
                }
            }
        })
    })

}

const circleHoverEffect = (e, url) => {
    if (e == c1) { var arr = [0, 1, 2, 3, 4] }
    if (e == c2) { var arr = [5, 6, 7, 8, 9, 10, 11] }
    if (e == c3) { var arr = [12, 13, 14, 15] }
    if (e == c4) { var arr = [16, 17, 18, 19] }
    e.forEach((div) => {
        div.addEventListener("click", () => {
            window.open(url)
        })
        div.addEventListener("mouseover", () => {
            for (let i = 0; i < divArr.length; i++) {
                textArr[i].forEach((div) => {
                    div.style.display = "none"
                })
                if (i == arr[0] || i == arr[1] || i == arr[2] || i == arr[3] || i == arr[4] || i == arr[5] || i == arr[6]) {
                    continue
                }
                else {
                    divArr[i].forEach((div) => {
                        div.style.fillOpacity = "0.5"
                    })
                }
            }

            for (let i = 0; i < circleArr.length; i++) {
                if (circleArr[i] == e) {
                    circleTextArr[i].style.display = "block"
                    continue;
                }
                else {
                    for (let j = 0; j < circleArr[i].length; j++) {
                        if (j == 2) {
                            circleArr[i][j].style.fill = "white"
                        }
                        else {
                            circleArr[i][j].style.fill = "#353b48"
                            circleArr[i][j].style.cursor = "pointer"
                        }
                    }
                }
            }
        })
    })

    e.forEach((div) => {
        div.addEventListener("mouseout", () => {
            for (let i = 0; i < 20; i++) {
                if (i == arr[0] || i == arr[1] || i == arr[2] || i == arr[3]) {
                    continue
                }
                else {
                    divArr[i].forEach((div) => {
                        div.style.fillOpacity = ""
                    })
                    textArr[i].forEach((div) => {
                        div.style.display = "block"
                    })
                }

            }

            for (let i = 0; i < circleArr.length; i++) {
                if (circleArr[i] == e) {
                    circleTextArr[i].style.display = "none"
                    continue;
                }
                else {
                    for (let j = 0; j < circleArr[i].length; j++) {
                        if (j == 2) {
                            circleArr[i][j].style.fill = ""
                        }
                        else {
                            circleArr[i][j].style.fill = ""
                        }
                    }
                }
            }
        })
    })

}


for (let i = 0; i < divArr.length; i++) {
    hoverEffect(divArr[i], divLinkArr[i])
}

for (let i = 0; i < circleArr.length; i++) {
    circleHoverEffect(circleArr[i], circleLinkArr[i])
}
