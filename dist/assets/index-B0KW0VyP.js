(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) o(d);
  new MutationObserver((d) => {
    for (const s of d)
      if (s.type === "childList")
        for (const p of s.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && o(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(d) {
    const s = {};
    return (
      d.integrity && (s.integrity = d.integrity),
      d.referrerPolicy && (s.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function o(d) {
    if (d.ep) return;
    d.ep = !0;
    const s = i(d);
    fetch(d.href, s);
  }
})();
const f = document.querySelector("#age-edit"),
  b = document.querySelector("#email-edit"),
  m = document.querySelector("#phone-edit"),
  x = document.querySelector("#address-edit"),
  l = document.querySelector("#age-value"),
  n = document.querySelector("#email-value"),
  r = document.querySelector("#phone-value"),
  a = document.querySelector("#address-value"),
  c = document.querySelector("#age-save"),
  u = document.querySelector("#email-save"),
  g = document.querySelector("#phone-save"),
  y = document.querySelector("#address-save");
let h = l.innerText;
f.addEventListener("click", () => {
  l.setAttribute("contenteditable", "true"), l.focus();
  const e = document.createRange();
  e.selectNodeContents(l), e.collapse(!1);
  const t = window.getSelection();
  t == null || t.removeAllRanges(),
    t == null || t.addRange(e),
    (f.style.display = "none"),
    (c.style.display = "block"),
    l.getAttribute("contenteditable") === "true" &&
      (l.addEventListener("focus", () => {
        (l.style.paddingRight = "54px"),
          (l.style.paddingLeft = "8px"),
          (l.style.wordBreak = "break-all"),
          (c.style.right = "8px");
      }),
      l.addEventListener("blur", () => {
        (l.style.paddingRight = "46px"),
          (l.style.paddingLeft = "0px"),
          (l.style.wordBreak = "break-all"),
          (c.style.right = "0px");
      }),
      (l.style.wordBreak = "break-all"));
});
c.addEventListener("click", () => {
  l.blur;
  let e = l.innerText;
  e !== h && ((h = e), localStorage.setItem("updatedAge", e)),
    l.setAttribute("contenteditable", "false"),
    (c.style.display = "none"),
    (f.style.display = "block"),
    l.innerText.length >= 26
      ? (l.style.wordBreak = "break-all")
      : (l.style.wordBreak = "normal"),
    l.getAttribute("contenteditable") === "false" &&
      (l.style.paddingRight = "0px");
});
let k = n.innerText;
b.addEventListener("click", () => {
  n.setAttribute("contenteditable", "true"), n.focus();
  const e = document.createRange();
  e.selectNodeContents(n), e.collapse(!1);
  const t = window.getSelection();
  t == null || t.removeAllRanges(),
    t == null || t.addRange(e),
    (b.style.display = "none"),
    (u.style.display = "block"),
    n.getAttribute("contenteditable") === "true" &&
      (n.addEventListener("focus", () => {
        (n.style.paddingRight = "54px"),
          (n.style.paddingLeft = "8px"),
          (n.style.wordBreak = "break-all"),
          (u.style.right = "8px");
      }),
      n.addEventListener("blur", () => {
        (n.style.paddingRight = "46px"),
          (n.style.paddingLeft = "0px"),
          (n.style.wordBreak = "break-all"),
          (u.style.right = "0px");
      }),
      (n.style.wordBreak = "break-all"));
});
u.addEventListener("click", () => {
  n.blur;
  let e = n.innerText;
  e !== k && ((k = e), localStorage.setItem("updatedEmail", e)),
    n.setAttribute("contenteditable", "false"),
    (u.style.display = "none"),
    (b.style.display = "block"),
    n.innerText.length >= 26
      ? (n.style.wordBreak = "break-all")
      : (n.style.wordBreak = "normal"),
    n.getAttribute("contenteditable") === "false" &&
      (n.style.paddingRight = "0px");
});
let v = r.innerText;
m.addEventListener("click", () => {
  r.setAttribute("contenteditable", "true"), r.focus();
  const e = document.createRange();
  e.selectNodeContents(r), e.collapse(!1);
  const t = window.getSelection();
  t == null || t.removeAllRanges(),
    t == null || t.addRange(e),
    (m.style.display = "none"),
    (g.style.display = "block"),
    r.getAttribute("contenteditable") === "true" &&
      (r.addEventListener("focus", () => {
        (r.style.paddingRight = "54px"),
          (r.style.paddingLeft = "8px"),
          (r.style.wordBreak = "break-all"),
          (g.style.right = "8px");
      }),
      r.addEventListener("blur", () => {
        (r.style.paddingRight = "46px"),
          (r.style.paddingLeft = "0px"),
          (r.style.wordBreak = "break-all"),
          (g.style.right = "0px");
      }),
      (r.style.wordBreak = "break-all"));
});
g.addEventListener("click", () => {
  r.blur;
  let e = r.innerText;
  e !== v && ((v = e), localStorage.setItem("updatedPhone", e)),
    r.setAttribute("contenteditable", "false"),
    (g.style.display = "none"),
    (m.style.display = "block"),
    r.innerText.length >= 26
      ? (r.style.wordBreak = "break-all")
      : (r.style.wordBreak = "normal"),
    r.getAttribute("contenteditable") === "false" &&
      (r.style.paddingRight = "0px");
});
let A = a.innerText;
x.addEventListener("click", () => {
  a.setAttribute("contenteditable", "true"), a.focus();
  const e = document.createRange();
  e.selectNodeContents(a), e.collapse(!1);
  const t = window.getSelection();
  t == null || t.removeAllRanges(),
    t == null || t.addRange(e),
    (x.style.display = "none"),
    (y.style.display = "block"),
    a.getAttribute("contenteditable") === "true" &&
      (a.addEventListener("focus", () => {
        (a.style.paddingRight = "54px"),
          (a.style.paddingLeft = "8px"),
          (y.style.right = "8px");
      }),
      a.addEventListener("blur", () => {
        (a.style.paddingRight = "46px"),
          (a.style.paddingLeft = "0px"),
          (y.style.right = "0px");
      }));
});
y.addEventListener("click", () => {
  a.blur;
  let e = a.innerText;
  e !== A && ((A = e), localStorage.setItem("updatedAddress", e)),
    a.setAttribute("contenteditable", "false"),
    (y.style.display = "none"),
    (x.style.display = "block"),
    a.getAttribute("contenteditable") === "false" &&
      (a.style.paddingRight = "0px");
});
window.addEventListener("load", () => {
  let e = localStorage.getItem("updatedAge");
  e && ((l.textContent = e), (h = e));
  let t = localStorage.getItem("updatedEmail");
  t && ((n.textContent = t), (k = t));
  let i = localStorage.getItem("updatedPhone");
  i && ((r.textContent = i), (v = i));
  let o = localStorage.getItem("updatedAddress");
  o && ((a.textContent = o), (A = o));
});
const L = document.querySelectorAll(".progress");
let w = 1;
L.forEach((e) => {
  w % 2 === 0
    ? (e.style.backgroundColor = "#37bc9b")
    : (e.style.backgroundColor = "#4a89dc"),
    w++;
});
