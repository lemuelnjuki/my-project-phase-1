//defining the method and headers..Api from rapidapi
const options = {
    method: 'GET',
    url: 'https://flixbus.p.rapidapi.com/v1/cities',
    headers: {
      'X-RapidAPI-Key': 'ce21454c39msh57903dab40efab4p1414a6jsn9b7602e0363c',
      'X-RapidAPI-Host': 'flixbus.p.rapidapi.com'
    }
  };
  

    fetch("https://flixbus.p.rapidapi.com/v1/cities")
    .then(response => response.json()).
    then((data) => { document.getElementById("transport").src = data.image
    
})

    



    
    

