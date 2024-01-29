const form = document.querySelector("form");
//this usecase will give empty value
// const height = parseInt(document.querySelector("#heightcm").value);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#heightcm").value);
    const weight = parseInt(document.querySelector("#weightkg").value);
    const result = document.querySelector(".result");

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please Give A Valid Height";
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please Give A Valid Weight";
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        //show the result
        if(bmi < 18.6){
            result.innerHTML = `Your BMI Score is ${bmi} and You are Under Weight`;
        }else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `Your BMI Score is ${bmi} and You are Healthy`;
        }else{
            result.innerHTML = `Your BMI Score is ${bmi} and You are Over Weight`;

        }
    }
});