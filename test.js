

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

site = window.location.hostname.split('.').slice(-2).join('.').split(".com")[0]

// Twitter
// if (site == "twitter") {
//     window.alert("Twitter");
// document.querySelector('[role="banner"]').firstElementChild.remove();
// document.querySelector('[role="banner"]').firstElementChild.style.cssText ="position:relative;overflow:hidden"

// document.querySelector('a[href="/explore"]').remove();

// addStyleString('div[data-testid="placementTracking"]{ display: none !important }');

// }



// Instagram




if (site == "instagram") {
    
 const myDisplay = new Promise((resolve, reject) => {
  resolve();
})
  .then(() => {
document.querySelector("nav").firstElementChild.firstElementChild.firstElementChild.style = "position: relative"

document.querySelector('a[href="/explore/"]').parentElement.remove();

document.querySelector('div[data-testid="new-post-button"]').remove();
  });
   

myDisplay();
    
    
    
//     window.alert("IG");
    

};


