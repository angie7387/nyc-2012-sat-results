function fetchData() {
  fetch('satresults.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<h2">School Name</h2>'
      data.forEach(function (item) {
        output += `
          <div>School Name: ${item.schoolname}</div>
          <div class="blue>CODE: ${item.location}</div>
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
