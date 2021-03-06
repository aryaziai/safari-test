site = window.location.hostname.split(".").slice(-2).join(".").split(".com")[0];

if (site == "instagram") {
  const myDisplay = new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    document.querySelector('a[href="/explore/"]').parentElement.style.cssText = "display:none";
    document.querySelector("nav").firstElementChild.firstElementChild.firstElementChild.style = "position: relative";
    document.querySelector('div[data-testid="mobile-nav-logged-in"] > div:nth-child(2)').style.cssText = "display:none";
    document.querySelector('div[data-testid="mobile-nav-logged-in"] > div:nth-child(3)').style.cssText = "display:none";
  });
}

if (site == "twitter") {
  const myDisplay = new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    document.querySelector('header[role="banner"] > div:nth-child(1)').style.cssText = "display:none";
    document.querySelector('header[role="banner"] > div:nth-child(2)').style.cssText = "position:relative;overflow:hidden";
    document.querySelector('a[href="/explore"]').style.cssText = "display:none";
  });
}

if (site == "reddit") {
  const myDisplay = new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    document.querySelectorAll('[rel="nofollow noopener sponsored"]').forEach((r) => r.parentElement.remove());
  });
}

if (site == "buffstream.io") {
  const myDisplay = new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    document.querySelector("#nwmlay").style.cssText = "display:none";
  });
}
