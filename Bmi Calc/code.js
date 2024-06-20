const form = document.querySelector("form");
console.log("divyam");
form.addEventListener("submit",function(eve){
        eve.preventDefault();
        const height = parseInt(document.querySelector("#height").value);
        const weight = parseInt(document.querySelector("#weight").value);
        const result = document.querySelector("#results");
        console.log(weight);
        if(height === ' ' || height<0 || isNaN(height)){
            result.innerHTML = "Please provide valid height";
        }
        else if(weight === ' ' || weight<0 || isNaN(weight)){
            result.innerHTML = "Please provide valid weight";
        }else{
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            result.innerHTML = `<span>${bmi}</span>`;

        }
});