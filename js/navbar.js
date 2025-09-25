fetch('/pages/navbar.html')
      .then (response=> response.text())
      .then(data=>{
        document.getElementById('nav-barplaceholder').innerHTML = data;
          )}
      .catch(error=>console.error('Error loading nav bar:', error));
