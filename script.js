const min_range=document.getElementById("min-range");
const max_range=document.getElementById("max-range");
const min_value=document.getElementById("min-value");
const max_value=document.getElementById("max-value");

min_range.addEventListener("input",updateValue);
max_range.addEventListener("input",updateValue);

function updateValue(){
    let min=parseInt(min_range.value);
    console.log(min)
    let max=parseInt(max_range.value);
    console.log(max)

    if (min>max){
        max=min;
        max_range.value =min;
    }
    min_value.textContent = `$${min}`;
    max_value.textContent = `$${max}`;
};
