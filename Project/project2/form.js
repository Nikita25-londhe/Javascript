
const form=document.querySelector('form');
const res=document.querySelector('#result')
const conclusion=document.querySelector('#conclude');
form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    //The value are in string parse to convert into int 
    const weight=parseFloat(document.querySelector('#weight').value);
    const height=parseFloat(document.querySelector('#height').value);
    if(weight=='' ||weight<=0 ||isNaN(weight))
    {
        res.innerHTML=`${weight} is invalid input`
    }
    else if(height=='' ||height<=0 ||isNaN(height))
    {
        res.innerHTML=`${height} is invalid input`
    }
    else
    {
        const bmi=([weight/(height*height)]*10000).toFixed(2);
        res.innerHTML=`BMI index is ${bmi}`;
        if(bmi< 18.5)
        {
            conclusion.innerHTML="Underweight"
        }
        else if((18.5<=bmi) && (bmi<24.9))
        {
            conclusion.innerHTML="Normal weight"
        }
        else if(25.0<= bmi && bmi < 29.9)
        {
            conclusion.innerHTML="Overweight"
        }
        else 
        {
            conclusion.innerHTML="Obesity"
        }
    }
})
//document.querySelector('#result').innerHTML="Nikita"