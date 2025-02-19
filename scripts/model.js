// ---------------------GETTING ALL DATA--------------//

function GetAllDataOnce() {
    db.collection("works")
      .get()
      .then((querySnapshot) => {
        var work = [];
        querySnapshot.forEach((doc) => {
          work.push(doc.data());
        });
        console.log(querySnapshot);
        console.log(work);
        AddAllItemsToTable(work);
      });
  }
  
  function GetAllDataRealtime() {
    db.collection("works").onSnapshot((querySnapshot) => {
      var work = [];
      querySnapshot.forEach((doc) => {
        work.push(doc.data());
      });
      AddAllItemsToTable(work);
    });
  }
  //-------------FILLING TABLE--------------//
  var tbody = document.getElementById("tbody1");
  
  function AddItemToTable(No,Name, Time, Place) {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
  
    td1.innerHTML = No;
    td2.innerHTML = Name;
    td3.innerHTML = Time;
    td4.innerHTML = Place;
    td5.innerHTML =
      '<button onclick="editData(this)">Edit</button>' +
      '<button type="button" onclick="deleteData(this)">Delete</button>';
  
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    tbody.appendChild(trow);
  }
  
  function AddAllItemsToTable(work) {
    tbody.innerHTML = "";
    student.forEach((element) => {
      AddItemToTable(
        element.No,
        element.Name,
        element.Time,
        element.Place
      );
    });
  }
  
  window.onload = GetAllDataOnce;
  
  function editData(button) {
    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;
  
    // Get the cells within the row
    let noCell = row.cells[1];
    let nameCell = row.cells[2];
    let timeCell = row.cells[3];
    let placecell = row.cells[4];
    
    // Prompt the user to enter updated values
    let Name = prompt(
      "Enter the updated work:",
      nameCell.innerHTML
    );
    let No = prompt("Enter the updated number :", noCell.innerHTML);
    let Time = prompt("Enter the updated time:", timeCell.innerHTML);
    let place = prompt(
      "Enter the updated laptop name:",
      placecell.innerHTML
    );
    
  
    // Update the cell contents with the new values
    nameCell.innerHTML = Name;
    noCell.innerHTML = No;
    timeCell.innerHTML = Time;
    placecell.innerHTML = Place;
    
  }
  function deleteData(button) {
    try {
      db.collection("works")
        .doc()
        .delete()
        .then(() => {
          console.log("Information deleted successfully");
          alert("Information deleted successfully");
        })
        .catch((error) => {
          console.error("Unable to delete information", error);
        });
    } catch (error) {
      console.log(error);
    }
  }