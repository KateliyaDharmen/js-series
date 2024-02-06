// document.getElementById('lion').onclick = function() {
//     alert('hello lion');
// }

// document.getElementById('nature').addEventListener('click', () => {
//     alert('nature clicked');
// })

//type,timestamp, defaultPrevented
//target, toElement, srcElement, curruntTarget
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, keycode, shiftkey

// document.getElementById('images').addEventListener('click', (e)=>{
//     alert('image clicked');
// },false)

// document.getElementById('flower').addEventListener('click', (e)=>{
//     alert('flower clicked');
//     e.stopPropagation();
// },false)

// document.getElementById('google').addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked");

document.querySelector('#images').addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {

        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
}, false)
// removeIt.parentNode.removeChild(removeIt);


//Event Propogation: true -> capturing emage(up to down)(parent to child);  false-> bubbuling image(down to up)(child to parent)