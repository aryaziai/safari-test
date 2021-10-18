window.alert("test");

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

site = window.location.hostname.split('.').slice(-2).join('.').split(".com")[0]

// Twitter
if (site == "twitter") {
document.querySelector('[role="banner"]').firstElementChild.remove();
document.querySelector('[role="banner"]').firstElementChild.style.cssText ="position:relative;overflow:hidden"

document.querySelector('a[href="/explore"]').remove();

addStyleString('div[data-testid="placementTracking"]{ display: none !important }');

}

// Instagram
if (site == "instagram") {
document.querySelector("nav").firstElementChild.firstElementChild.firstElementChild.style = "position: relative"

document.querySelector('a[href="/explore/"]').parentElement.remove();

document.querySelector('div[data-testid="new-post-button"]').remove();
};

// Call completion to finish
completion();
