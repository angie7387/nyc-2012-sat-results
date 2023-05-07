function fetchData() {
  fetch('satresults.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<h2"> </h2>'
      data.forEach(function (item) {
        output += `
          <div>SCHOOL NAME: ${item.schoolname}</div>
          <div>LOCATION: ${item.location}</div>
      `
      })
      document.getElementById('schoolname').innerHTML = output
    })
    
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('schoolname').innerHTML = 'Error Loading Data'
    })
}

fetchData()
