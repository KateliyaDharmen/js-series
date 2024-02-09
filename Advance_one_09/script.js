const btn = document.querySelector('#btn');
const image = document.querySelector('#img');
const text = document.querySelector('#followers');


btn.addEventListener('click', () => {

    const requestUrl = "https://api.github.com/users/hiteshchoudhary"
    const xhr = new XMLHttpRequest();
    xhr.open('get', requestUrl);
    //console.log("here");
    xhr.onreadystatechange = function () {
        //console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            //console.log(typeof data);
            image.setAttribute('src', data.avatar_url);
            image.style.display = "block";
            text.innerHTML = `Followers: ${data.followers}`
        }
    }
    xhr.send();
})