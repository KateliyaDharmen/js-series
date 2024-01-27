const button = document.querySelectorAll(".button")
const textElement = document.querySelector(".text")
// const body = document.body

button.forEach( (button) => {
    // console.log(button)
    // console.log(button.id);

    button.addEventListener("click", (e) => {
        // console.log(e)
        // console.log(e.target.id)

        //using if statment
        if(e.target.id === "red"){
            document.body.style.backgroundColor = e.target.id //body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "green"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blue"){
            document.body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "yellow"){
            document.body.style.backgroundColor = e.target.id
        }

        // using switch
        // switch (e.target.id) {
        //     case "red":
        //         textElement.style.color = e.target.id
        //         break;
        //     case "green":
        //         textElement.style.color = e.target.id
        //         break;
        //     case "blue":
        //         textElement.style.color = e.target.id
        //         break;
        //     case "yellow":
        //         textElement.style.color = e.target.id
        //         break;
        
        //     default:
        //         break;
        // }
    })
})