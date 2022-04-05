const person = {
    firstName: "ram",
    lastName : "hari",
    id       : 1,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  document.getElementById("name").innerHTML = person.fullName();