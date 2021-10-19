site = window.location.hostname.split(".").slice(-2).join(".").split(".com")[0];

// Twitter
const myDisplay = new Promise((resolve, reject) => {
  resolve();
}).then(() => {
  document.querySelector('[role="banner"]').firstElementChild.remove();
  document.querySelector('[role="banner"]').firstElementChild.style.cssText = "position:relative;overflow:hidden";
});

// Instagram
if (site == "instagram") {
  const myDisplay = new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    document.querySelector("nav").firstElementChild.firstElementChild.firstElementChild.style = "position: relative";
    document.querySelector('a[href="/explore/"]').parentElement.remove();
    //document.querySelector('div[data-testid="new-post-button"]').remove();
  });
}
