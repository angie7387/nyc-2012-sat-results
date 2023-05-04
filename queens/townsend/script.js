function fetchData() {
  fetch('satresults.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<h2"> </h2>'
      data.forEach(function (item) {
        output += `
        <div class="text">
          <div><h2>${item.schoolname}</h2></div>
          <div class="parent-sub-categories">
          <div><h3>${item.reading}</h3>
          AVG SAT READING SCORE</div>
          <div><h3>${item.math}</h3>
          AVG SAT MATH SCORE</div>
          <div> <h3>${item.writing}</h3>
          AVG SAT WRITING SCORE</div>
          <div> <h3>${item.total}</h3>
          AVG SAT SCORE TOTAL (OUT OF 2400)</div>
          <div> <h3>${item.graduates}</h3>
          % OF GRADUATES</div>
          <div> <h3>${item.poverty}</h3>
          % POVERTY RATE</div>

          </div>
          </div>
          </div>
</div>


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
