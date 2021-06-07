
//     let clickme = document.getElementById("calculate")

//  bmi = () =>{
//     let weight = parseFloat(document.getElementById("weight").value)
//     let height = parseFloat(document.getElementById("height").value)

//     let bmiresults = Math.round(weight / Math.pow(height,2).toFixed(2))
//     let output = document.getElementById('bmi_index')
//     // output.textContent = bmiresults
    

//     if (height ==="" || isNaN(height)){
//         output.valuevalue = "Provide valid height value";
//     }
//     else if (weight ==="" || isNaN(weight)){
//         output.value = "Provide valid weight value";
//     }
//     else {
        
//         if (bmiresults < 18.6){
//             output.value = bmiresults
//         }
//         else if (bmiresults >= 18.6 && bmi < 24.9){
//             output.value = bmiresults
//         }
//         else 
//             output.value = bmiresults
//     }
   
// }
// clickme.addEventListener("click", bmi)

// bmi = () =>{
//         var weight = parseFloat(document.getElementById("weight").value)
//         var height = parseFloat(document.getElementById("height").value)

//         var bmi = weight/(height*height)
//         var uBmi = document.getElementById("bmi_index")
//         uBmi.textContent.bmi.toFixed(2)
// }   


    // let clickme = document.querySelector("calculate")

 let bmi = () =>{
    let weight = parseFloat(document.getElementById("weight").value)
    let height = parseFloat(document.getElementById("height").value)
    let output = document.getElementById("bmi_index")

    let bmiresults = Math.round(weight / Math.pow(height,2).toFixed(2))
    
    // output.textContent = bmiresults
    

    if (height ==="" || isNaN(height)){
        output.innerHTML = "Provide valid height value";
    }
    else if (weight ==="" || isNaN(weight)){
        output.innerHTML = "Provide valid weight value";
    }
    else {
        
        if (bmiresults < 18.6){
            output.innerHTML = "Your BMI is "+ bmiresults+ ", so you are underweight."
        }
        else if (bmiresults >= 18.6 && bmi < 24.9){
            output.innerHTML ="Your BMI is "+ bmiresults+ ", so you are normal weight."
        }
        else 
            output.innerHTML ="Your BMI is "+ bmiresults+ ", so you are overweight."
    }
   
}
document.getElementById("calculate").addEventListener("click", bmi)