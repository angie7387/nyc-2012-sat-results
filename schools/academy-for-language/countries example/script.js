function fetchData() {
  fetch('countries.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<h2">Countries</h2>'
      data.forEach(function (item) {
        output += `
          <div>Country: ${item.Country}</div>
          <div class="blue>CODE: ${item.ISO2}</div>
      `
      })
      document.getElementById('country').innerHTML = output
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('country').innerHTML = 'Error Loading Data'
    })
}

fetchData()
