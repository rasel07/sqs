const hover_section1 = document.querySelector("#hover-section1");
const hover_section2 = document.querySelector("#hover-section2");
const hover_section3 = document.querySelector("#hover-section3");
const hover_section4 = document.querySelector("#hover-section4");
const hover_section5 = document.querySelector("#hover-section5");
const hover_section6 = document.querySelector("#hover-section6");

const arrow1 = document.querySelector("#hover-area1 > path");
const arrow2 = document.querySelector("#hover-area2 > path");
const arrow3 = document.querySelector("#hover-area3 > path");
const arrow4 = document.querySelector("#hover-area4 > path");
const arrow5 = document.querySelector("#hover-area5 > path");
const arrow6 = document.querySelector("#hover-area6 > path");

const hover_text1 = document.querySelector("#hover-text1")
const hover_text2 = document.querySelector("#hover-text2")
const hover_text3 = document.querySelector("#hover-text3")
const hover_text4 = document.querySelector("#hover-text4")
const hover_text5 = document.querySelector("#hover-text5")
const hover_text6 = document.querySelector("#hover-text6")

const outline_text1 = document.querySelector("#outline-text1");
const outline_text2 = document.querySelector("#outline-text2");
const outline_text3 = document.querySelector("#outline-text3");
const outline_text4 = document.querySelector("#outline-text4");
const outline_text5 = document.querySelector("#outline-text5");
const outline_text6 = document.querySelector("#outline-text6");

const hover1 = document.querySelector("#hover1");
const hover2 = document.querySelector("#hover2");
const hover3 = document.querySelector("#hover3");
const hover4 = document.querySelector("#hover4");
const hover5 = document.querySelector("#hover5");
const hover6 = document.querySelector("#hover6");


const allInitial_point = document.querySelector("#all-initial-point");
const allInitial_arrow = document.querySelector("#initial-all-arrow");
const allInitial_arrow_path = document.querySelector("#initial-all-arrow path");


const initial_center_text = document.querySelectorAll("#initial-image-center-text > path")
const center_text_hover_section = document.querySelectorAll("#center-hover-area")
const center_rectangle = document.querySelector("#center-hover-area > rect");

var isDisplay = true;

const allHoverSection = [hover_section1, hover_section2, hover_section3, hover_section4, hover_section5, hover_section6]
const allHoverText = [hover_text1, hover_text2, hover_text3, hover_text4, hover_text5, hover_text6]
const allArrow = [arrow1, arrow2, arrow3, arrow4, arrow5, arrow6];
const allOutlineText = [outline_text1, outline_text2, outline_text3, outline_text4, outline_text5, outline_text6]
const allHover = [hover1, hover2, hover3, hover4, hover5, hover6];

const sectionLinkArr = ["https://www.google.com/", "https://www.youtube.com/", "https://twitter.com/", "https://www.fiverr.com/", "https://www.freelancer.com/", "https://twitter.com/"]

allHover.map((hover) => {
    hover.style.fill = "transparent";
})

const initialHoverSectonHide = (e) => {
    e.style.display = "none"

}

const blinkingDisplay = () => {
    if (!isDisplay) {
        allInitial_point.style.display = "none"
    }
    else allInitial_point.style.display = "block"
}

const hoverSectionAnimation = (div, url, i) => {
    allHover[i].addEventListener("click", () => {
        window.open(url)
    })
    div.addEventListener("mouseover", () => {
        isDisplay = false;
        blinkingDisplay();
        clearInterval(BlinkInterval);
        div.style.cursor = "pointer"
        if (div == allHover[i]) {
            allHoverSection[i].style.display = "block"
            allOutlineText[i].style.display = "block"
            center_text_hover_section[0].style.display = "none"
            for (let j = 0; j < allHoverText.length; j++) {
                if (i == j) {
                    continue
                }
                else {
                    allHoverText[j].style.display = "none"
                    allArrow[j].style.display = "none"
                }
            }
        }
    })

    div.addEventListener("mouseout", () => {
        isDisplay = true;
        blinkingDisplay();
        BlinkInterval = setInterval(() => {
            isDisplay = !isDisplay
            blinkingDisplay()
        }, 2000)
        if (div == allHover[i]) {
            allHoverSection[i].style.display = "none"
            allOutlineText[i].style.display = "none"
            center_text_hover_section[0].style.display = "block"
            for (let j = 0; j < allHoverText.length; j++) {
                allHoverText[j].style.display = "block"
                allArrow[j].style.display = "block"
            }
        }
    })
}


const centerHoverAnimation = (e, rect) => {
    e[0].addEventListener("mouseover", () => {
        isDisplay = false;
        blinkingDisplay();
        clearInterval(BlinkInterval);
        allOutlineText.map((div) => {
            div.style.display = "block"
        })
        e[0].style.cursor = "pointer"
    })
    rect.addEventListener("mouseover", () => {
        isDisplay = false;
        blinkingDisplay();
        clearInterval(BlinkInterval);
        rect.style.cursor = "pointer"
        allOutlineText.map((div) => {
            div.style.display = "block"
        })
    })


    e[0].addEventListener("mouseout", () => {
        allOutlineText.map((div) => {
            div.style.display = "none"
        })
    })
    rect.addEventListener("mouseout", () => {
        isDisplay = true;
        blinkingDisplay();
        BlinkInterval = setInterval(() => {
            isDisplay = !isDisplay
            blinkingDisplay()
        }, 2000)
        allOutlineText.map((div) => {
            div.style.display = "none"
        })
    })
}
centerHoverAnimation(center_text_hover_section, center_rectangle);

var BlinkInterval = setInterval(() => {
    isDisplay = !isDisplay
    blinkingDisplay()
}, 2000)

for (let i = 0; i < allHoverSection.length; i++) {
    initialHoverSectonHide(allHoverSection[i])
    initialHoverSectonHide(allOutlineText[i])
}


for (let i = 0; i < allArrow.length; i++) {
    hoverSectionAnimation(allHover[i], sectionLinkArr[i], i)
    hoverSectionAnimation(allOutlineText[i], sectionLinkArr[i], i)
}

