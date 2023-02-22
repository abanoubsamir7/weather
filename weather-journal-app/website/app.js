/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// let base = 'http://api.openweathermap.org/data/2.5/forecast?id=524901';

let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
let apiKey = '&appid=f9e9678f2d59cb300843da2be3da58ae';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(){  
    const zipe = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    weather(baseURL,zipe, apiKey)

    .then(function(data){
        console.log(data);
        postData('/add', {data:d, temp:data.list[0].main.temp, content:feeling})
        ui();
        })
};



const weather = async (baseURL, zip, key)=>{
const res = await fetch(baseURL+zip+key)
    try {

        const data = await res.json();
        return data;
        
}  catch(error) {
        console.log("error", error);
    }
}



const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

// TODO-Call Function

const ui = async () => {
const request = await fetch('/all');
try{
const allData = await request.json();
document.getElementById("data").innerHtml = `data: ${allData[0].date}`;
document.getElementById("temp").innerHtml = `Temperatuer: ${allData[0].temp}`;
document.getElementById("content").innerHtml = `I feel: ${allData[0].content}`;
} catch(error){
cosole.log('error',error)
}
}