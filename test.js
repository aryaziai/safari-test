site = window.location.hostname.split(".").slice(-2).join(".").split(".com")[0];

// Twitter
if (site == "twitter") {
const myDisplay = new Promise((resolve, reject) => {
  resolve();
}).then(() => {
    document.querySelector('[role="banner"]').children[0].style.cssText = "display:none";
    document.querySelector('[role="banner"]').children[1].style.cssText = "position:relative;overflow:hidden";
  document.querySelector('a[href="/explore"]').parentElement.remove();
 });
};

// Instagram
if (site == "instagram") {
  const myDisplay = new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    document.querySelector("nav").firstElementChild.firstElementChild.firstElementChild.style = "position: relative";
    document.querySelector('a[href="/explore/"]').parentElement.style.cssText = "display:none";
    document.querySelector('div[data-testid="new-post-button"]').style.cssText = "display:none";
  });
};
