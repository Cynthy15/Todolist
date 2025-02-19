
 
  const  AddData = ()=>{
    
    const Number = document.getElementById("number").value;
    const  Name = document.getElementById("name").value;
    const Time = document.getElementById("time").value;
    const  Place = document.getElementById("place").value;
        
    console.log({
        Number, Name, Time, Place
    })


    db.collection("works").doc().set({ 
        Number ,
        Name ,
        Time,
        Place
    })
      .then(()=>{
          alert("data inserted successfully"); 
          window.location.href="workingpage.html"
      })
      .catch((error)=>{
          alert("data not inserted successfully");
          console.log(error);
  
      })

      const register = document.getElementById("insert");
    
  }