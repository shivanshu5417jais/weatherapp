
 
// const milliseconds = 1588224600* 1000 // 1575909015000
 
// const dateObject = new Date(milliseconds)
 
// const humanDateFormat = dateObject.toLocaleString()
// console.log(humanDateFormat);



const weatherForm=document.querySelector('form')
const search=document.querySelector('input')

const messageOne=document.querySelector('#message-1')
//const messageTwo=document.querySelector('#message-2')
const temp1=document.querySelector('#temp')
const sunrise=document.querySelector('#sunrise')
const sunset=document.querySelector('#sunset')
const tim=document.querySelector('#time')

const address=document.querySelector('#address')
const state=document.querySelector('#state')
const country=document.querySelector('#country')
const cloud=document.querySelector('#clouds')
const des=document.querySelector('#desc')


 const c1 = document.getElementById('content');
 const err = document.getElementById('err');
 const err1=document.querySelector('#err')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    err.style.display = 'block';
    c1.style.display = 'none';
    err1.textContent='Loading...'
  //  messageTwo.textContent=''

    fetch('/weather?address='+location).then((response)=>{
  response.json().then((data)=>{
      if(data.error)
      {   err.style.display='block';
          err1.textContent=data.error;
          c1.style.display = 'none';
          
          
      }
      else{ 
        c1.style.display = 'block';
        

          // messageOne.textContent="LOCATION: " +data.location
         
        var lo=data.location.split(',');
        const countrys=lo[lo.length-1];
        const states=lo[lo.length-2];
        lo.pop();
        lo.pop();
        const addres=lo.join(" ,")
        address.textContent=addres
        state.textContent=states
        country.textContent=countrys
        // messageOne.textContent="LOCATION: " +addres






  //       messageTwo.textContent=data.forecast.temp
         temp1.textContent= "Temperature: " + data.forecast.temp +" degree C "
         const milliseconds = data.forecast.time* 1000 
         const dateObject = new Date(milliseconds)
         const humanDateFormat = dateObject.toLocaleString()
         tim.textContent= "Time: "+ humanDateFormat
         const millisecondss = data.forecast.sunrise* 1000 
         const dateObjects = new Date(millisecondss)
         const humanDateFormats = dateObjects.toLocaleString().split(',')

         sunrise.textContent= "Sunrise: " +humanDateFormats[humanDateFormats.length-1]
         const millisecondst = data.forecast.sunset* 1000 
         const dateObjectt = new Date(millisecondst)
         const humanDateFormatt = dateObjectt.toLocaleString().split(',')
         sunset.textContent=  "Sunset: "+humanDateFormatt[humanDateFormatt.length-1]
         cloud.textContent="Clouds: "+data.forecast.clouds + " %"
         des.textContent="Description: "+data.forecast.desc
         err.style.display='none';
          
      }
  })
})
    
})
