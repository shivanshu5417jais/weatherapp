const request=require('request')

const forecast=(latitude, longitude, callback)=>{

    const url='https://api.openweathermap.org/data/2.5/onecall?lat=' +latitude+ '&lon=' +longitude + '&appid=8742166dfa5dc0f29f33aaad4311cf25&units=metric'
    request({url:url,json:true},(error,{body})=>{
       if(error){
             callback('Unable to connect to weather services!',undefined)
       } else if(body.message){
           callback('Unable to find location!',undefined)
       } else{

        //    callback(undefined,'It is currently '+ body.current.temp +'% degrees out. There is a '+ body.current.clouds + '% clouds in the Sky. Weather Summary: '+body.current.weather[0].description)
        callback(undefined,{temp:body.current.temp,clouds:body.current.clouds,desc:body.current.weather[0].description,time:body.current.dt,sunrise:body.current.sunrise,sunset:body.current.sunset})  
    }

         
    })

}

module.exports=forecast