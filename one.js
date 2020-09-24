
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/photos ', true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send()

var data = JSON.parse(this.response)

data.forEach((title) => {
  // 
  console.log(title.title)
})

var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
  data.forEach((title) => {
    console.log(title.title)
  })
} else {
  console.log('error')
}
var request = new XMLHttpRequest()

request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((title) => {
      console.log(title.title)
    })
  } else {
    console.log('error')
  }
}

request.send()

/// Remove element 

function removeElement(parentDiv,childDiv){
  if(childDiv == parentDiv){
    alert("parent div cannot be removed");
  }
  else if(document.getElementById(childDiv)){
    var child = document.getElementById(childDiv);
    var parent = document.getElementById(parentDiv);
    parent.removeChild(child);
  }
  else{
    alert("child div alerady removerd");
    return false;
  }
}
