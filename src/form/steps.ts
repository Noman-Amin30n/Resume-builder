// viewport selector
const viewportWidth = window.innerWidth;

// progress related selectors
const progress = document.querySelector(".progress") as HTMLDivElement;
const step2Heading = document.querySelector("#step-2") as HTMLDivElement;
const step3Heading = document.querySelector("#step-3") as HTMLDivElement;
const step4Heading = document.querySelector("#step-4") as HTMLDivElement;

// form related selectors
const formSectionContainer = document.querySelector(".form-section-container") as HTMLDivElement;

// personal section selectors
const personalSection = document.querySelector("#personal-section") as HTMLDivElement;
const next1 = document.querySelector("#next-1") as HTMLButtonElement;

// skills section selectors
const skillsSection = document.querySelector("#skills-section") as HTMLDivElement;
const previous1 = document.querySelector("#previous-1") as HTMLDivElement;
const next2 = document.querySelector("#next-2") as HTMLButtonElement;

// experience section selectors

const experienceSection = document.querySelector("#experience-section") as HTMLDivElement;
const previous2 = document.querySelector("#previous-2") as HTMLDivElement;
const next3 = document.querySelector("#next-3") as HTMLButtonElement;

// education section selectors

const educationSection = document.querySelector("#education-section") as HTMLDivElement;
const previous3 = document.querySelector("#previous-3") as HTMLDivElement;


next1.addEventListener("click", () => {

    personalSection.style.transform = "translateX(-100%)";
    personalSection.style.opacity = "0%";
    personalSection.style.visibility = "hidden";
    skillsSection.style.transform = "translateX(0%)";
    skillsSection.style.opacity = "100%";
    skillsSection.style.visibility = "visible";

    if (viewportWidth > 639) {
        progress.style.width = "50%";
    } else if (viewportWidth <= 639) {
        progress.style.height = "50%";
    }

    step2Heading.style.color = "white";

    if (viewportWidth >= 1280) {
        formSectionContainer.style.minHeight = "450px"
    } else if (viewportWidth >= 640 && viewportWidth < 1280) {
        formSectionContainer.style.minHeight = "803px"
    } else if (viewportWidth < 640 && viewportWidth > 384) {
        formSectionContainer.style.minHeight = "747px"
    } else if (viewportWidth < 384) {
        formSectionContainer.style.minHeight = "1065px"
    }
});

previous1.addEventListener("click", () => {

    personalSection.style.transform = "translateX(0%)";
    personalSection.style.opacity = "100%";
    personalSection.style.visibility = "visible";
    skillsSection.style.transform = "translateX(100%)";
    skillsSection.style.opacity = "0%";
    skillsSection.style.visibility = "hidden";

    if (viewportWidth > 639) {
        progress.style.width = "25%";
    } else if (viewportWidth <= 639) {
        progress.style.height = "25%";
    }
    step2Heading.style.color = "#434a54";
    if (viewportWidth >= 1280) {
        formSectionContainer.style.minHeight = "680px"
    } else if (viewportWidth >= 550 && viewportWidth < 1280) {
        formSectionContainer.style.minHeight = "680px"
    } else if (viewportWidth < 550) {
        formSectionContainer.style.minHeight = "1040px"
    }
});

next2.addEventListener("click", () => {
    
    skillsSection.style.transform = "translateX(-100%)";
    skillsSection.style.opacity = "0%";
    skillsSection.style.visibility = "hidden";
    experienceSection.style.transform = "translateX(0%)";
    experienceSection.style.opacity = "100%";
    experienceSection.style.visibility = "visible";
    step3Heading.style.color = "white";

    if (viewportWidth > 639) {
        progress.style.width = "75%";
    } else if (viewportWidth <= 639) {
        progress.style.height = "75%";
    }

    if (viewportWidth >= 1280) {
        formSectionContainer.style.minHeight = "740px"
    } else if (viewportWidth >= 640 && viewportWidth < 1280) {
        formSectionContainer.style.minHeight = "1713px"
    } else if (viewportWidth < 640) {
        formSectionContainer.style.minHeight = "1657px"
    }
});

previous2.addEventListener("click", () => {

    skillsSection.style.transform = "translateX(0%)";
    skillsSection.style.opacity = "100%";
    skillsSection.style.visibility = "visible";
    experienceSection.style.transform = "translateX(100%)";
    experienceSection.style.opacity = "0%";
    experienceSection.style.visibility = "hidden";
    step3Heading.style.color = "#434a54";

    if (viewportWidth > 639) {
        progress.style.width = "50%";
    } else if (viewportWidth <= 639) {
        progress.style.height = "50%";
    }

    if (viewportWidth >= 1280) {
        formSectionContainer.style.minHeight = "450px"
    } else if (viewportWidth >= 640 && viewportWidth < 1280) {
        formSectionContainer.style.minHeight = "803px"
    } else if (viewportWidth < 640 && viewportWidth > 384) {
        formSectionContainer.style.minHeight = "747px"
    } else if (viewportWidth < 384) {
        formSectionContainer.style.minHeight = "1065px"
    }
});

next3.addEventListener("click", () => {

    experienceSection.style.transform = "translateX(-100%)";
    experienceSection.style.opacity = "0%";
    experienceSection.style.visibility = "hidden";
    educationSection.style.transform = "translateX(0%)";
    educationSection.style.opacity = "100%";
    educationSection.style.visibility = "visible";
    step4Heading.style.color = "white";

    if (viewportWidth > 639) {
        progress.style.width = "100%";
    } else if (viewportWidth <= 639) {
        progress.style.height = "100%";
    }

    if (viewportWidth >= 1280) {
        formSectionContainer.style.minHeight = "740px"
    } else if (viewportWidth >= 640 && viewportWidth < 1280) {
        formSectionContainer.style.minHeight = "1713px"
    } else if (viewportWidth < 640) {
        formSectionContainer.style.minHeight = "1657px"
    }
});

previous3.addEventListener("click", () => {

    experienceSection.style.transform = "translateX(0%)";
    experienceSection.style.opacity = "100%";
    experienceSection.style.visibility = "visible";
    educationSection.style.transform = "translateX(100%)";
    educationSection.style.opacity = "0%";
    educationSection.style.visibility = "hidden";
    step4Heading.style.color = "#434a54";

    if (viewportWidth > 639) {
        progress.style.width = "75%";
    } else if (viewportWidth <= 639) {
        progress.style.height = "75%";
    }

    if (viewportWidth >= 1280) {
        formSectionContainer.style.minHeight = "740px"
    } else if (viewportWidth >= 640 && viewportWidth < 1280) {
        formSectionContainer.style.minHeight = "1713px"
    } else if (viewportWidth < 640) {
        formSectionContainer.style.minHeight = "1657px"
    }
});