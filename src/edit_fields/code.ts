import { ageEdit, emailEdit, phoneEdit, addressEdit } from "./elements.js";
import { ageValue, emailValue, phoneValue, addressValue } from "./elements.js";
import { ageSave, emailSave, phoneSave, addressSave } from "./elements.js";

let oldAge = ageValue.innerText

ageEdit.addEventListener("click", () => {
    ageValue.setAttribute("contenteditable", "true");
    ageValue.focus();

    const range = document.createRange();
    range.selectNodeContents(ageValue);
    range.collapse(false);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    ageEdit.style.display = "none";
    ageSave.style.display = "block";
    if (ageValue.getAttribute("contenteditable") === "true") {
        ageValue.addEventListener("focus", () => {
            ageValue.style.paddingRight = "54px";
            ageValue.style.paddingLeft = "8px";
            ageValue.style.wordBreak = "break-all";
            ageSave.style.right = "8px";
        })
        ageValue.addEventListener("blur", () => {
            ageValue.style.paddingRight = "46px";
            ageValue.style.paddingLeft = "0px";
            ageValue.style.wordBreak = "break-all";
            ageSave.style.right = "0px";
        })
        ageValue.style.wordBreak = "break-all";
    }
})

ageSave.addEventListener("click", () => {
    ageValue.blur;
    let newAge = ageValue.innerText
    if (newAge !== oldAge) {
        oldAge = newAge;
        localStorage.setItem("updatedAge", newAge);
    }
    ageValue.setAttribute("contenteditable", "false");
    ageSave.style.display = "none";
    ageEdit.style.display = "block";
    if (ageValue.innerText.length >= 26) {
        ageValue.style.wordBreak = "break-all";
    } else {
        ageValue.style.wordBreak = "normal";
    }
    if (ageValue.getAttribute("contenteditable") === "false") {
        ageValue.style.paddingRight = "0px";
    }
})

// Email field updation logic...

let oldEmail = emailValue.innerText

emailEdit.addEventListener("click", () => {
    emailValue.setAttribute("contenteditable", "true");
    emailValue.focus();

    const range = document.createRange();
    range.selectNodeContents(emailValue);
    range.collapse(false);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    emailEdit.style.display = "none";
    emailSave.style.display = "block";
    if (emailValue.getAttribute("contenteditable") === "true") {
        emailValue.addEventListener("focus", () => {
            emailValue.style.paddingRight = "54px";
            emailValue.style.paddingLeft = "8px";
            emailValue.style.wordBreak = "break-all";
            emailSave.style.right = "8px";
        })
        emailValue.addEventListener("blur", () => {
            emailValue.style.paddingRight = "46px";
            emailValue.style.paddingLeft = "0px";
            emailValue.style.wordBreak = "break-all";
            emailSave.style.right = "0px";
        })
        emailValue.style.wordBreak = "break-all";
    }
});

emailSave.addEventListener("click", () => {
    emailValue.blur;
    let newEmail = emailValue.innerText
    if (newEmail !== oldEmail) {
        oldEmail = newEmail;
        localStorage.setItem("updatedEmail", newEmail);
    }
    emailValue.setAttribute("contenteditable", "false");
    emailSave.style.display = "none";
    emailEdit.style.display = "block";
    if (emailValue.innerText.length >= 26) {
        emailValue.style.wordBreak = "break-all";
    } else {
        emailValue.style.wordBreak = "normal";
    }
    if (emailValue.getAttribute("contenteditable") === "false") {
        emailValue.style.paddingRight = "0px";
    }
})

// Phone field updation logic...

let oldPhone = phoneValue.innerText

phoneEdit.addEventListener("click", () => {
    phoneValue.setAttribute("contenteditable", "true");
    phoneValue.focus();

    const range = document.createRange();
    range.selectNodeContents(phoneValue);
    range.collapse(false);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    phoneEdit.style.display = "none";
    phoneSave.style.display = "block";
    if (phoneValue.getAttribute("contenteditable") === "true") {
        phoneValue.addEventListener("focus", () => {
            phoneValue.style.paddingRight = "54px";
            phoneValue.style.paddingLeft = "8px";
            phoneValue.style.wordBreak = "break-all";
            phoneSave.style.right = "8px";
        })
        phoneValue.addEventListener("blur", () => {
            phoneValue.style.paddingRight = "46px";
            phoneValue.style.paddingLeft = "0px";
            phoneValue.style.wordBreak = "break-all";
            phoneSave.style.right = "0px";
        })
        phoneValue.style.wordBreak = "break-all";
    }
})

phoneSave.addEventListener("click", () => {
    phoneValue.blur;
    let newPhone = phoneValue.innerText
    if (newPhone !== oldPhone) {
        oldPhone = newPhone;
        localStorage.setItem("updatedPhone", newPhone);
    }
    phoneValue.setAttribute("contenteditable", "false");
    phoneSave.style.display = "none";
    phoneEdit.style.display = "block";
    if (phoneValue.innerText.length >= 26) {
        phoneValue.style.wordBreak = "break-all";
    } else {
        phoneValue.style.wordBreak = "normal";
    }
    if (phoneValue.getAttribute("contenteditable") === "false") {
        phoneValue.style.paddingRight = "0px";
    }
})

// Address field updation logic...

let oldAddress = addressValue.innerText

addressEdit.addEventListener("click", () => {
    addressValue.setAttribute("contenteditable", "true");
    addressValue.focus();

    const range = document.createRange();
    range.selectNodeContents(addressValue);
    range.collapse(false);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    addressEdit.style.display = "none";
    addressSave.style.display = "block";
    if (addressValue.getAttribute("contenteditable") === "true") {
        addressValue.addEventListener("focus", () => {
            addressValue.style.paddingRight = "54px";
            addressValue.style.paddingLeft = "8px";
            // addressValue.style.wordBreak = "break-all";
            addressSave.style.right = "8px";
        })
        addressValue.addEventListener("blur", () => {
            addressValue.style.paddingRight = "46px";
            addressValue.style.paddingLeft = "0px";
            // addressValue.style.wordBreak = "break-all";
            addressSave.style.right = "0px";
        })
        // addressValue.style.wordBreak = "break-all";
    }
})

addressSave.addEventListener("click", () => {
    addressValue.blur;
    let newAddress = addressValue.innerText
    if (newAddress !== oldAddress) {
     oldAddress = newAddress;
        localStorage.setItem("updatedAddress", newAddress);
    }
    addressValue.setAttribute("contenteditable", "false");
    addressSave.style.display = "none";
    addressEdit.style.display = "block";
    // if (addressValue.innerText.length >= 26) {
    //     addressValue.style.wordBreak = "break-all";
    // } else {
    //     addressValue.style.wordBreak = "normal";
    // }
    if (addressValue.getAttribute("contenteditable") === "false") {
        addressValue.style.paddingRight = "0px";
    }
})

window.addEventListener("load", () => {

    let storedAge = localStorage.getItem("updatedAge")
    if (storedAge) {
        ageValue.textContent = storedAge;
        oldAge = storedAge;
    }

    let storedEmail = localStorage.getItem("updatedEmail")
    if (storedEmail) {
        emailValue.textContent = storedEmail;
        oldEmail = storedEmail;
    }

    let storedPhone = localStorage.getItem("updatedPhone")
    if (storedPhone) {
        phoneValue.textContent = storedPhone;
        oldPhone = storedPhone;
    }

    let storedAddress = localStorage.getItem("updatedAddress")
    if (storedAddress) {
        addressValue.textContent = storedAddress;
        oldAddress = storedAddress;
    }
})
