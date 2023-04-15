var count =0;
function addUser(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var age=document.getElementById("age").value;
    console.log(name,age,email);
    if(name!="" && email!="" &&age!=""){
        document.getElementById("p1").innerText="Success:Employee Added";
        // var inner.innerHTML="<button>Delete</button>"
        var my=document.getElementById("list");
        my.innerHTML+=`<div id="s1" >${count}  Name: ${name}    Profession: ${email}  Age: ${age} <span><button id="d1">Delete</button></span></div>  `;
        
    }
    else{
        document.getElementById("p2").innerText="Erroe : Please make sure All the filled are filled before adding in employee";
    }
    count++;
    // var text=document.getElementById("d1")
    // // var pest=document.getElementById("s1")
    // text.setAttribute("onclick",`removeItem("${count}")`);
    // // test.setAttribute("onclick",`removeItem("my-id-${pest}")`);
   

}

// function removeItem(id) {
//     console.log("here");
//     console.log("ID", id);
//     let itemToBeRemoved = document.getElementById(id);
//     document.getElementById("list").remove(itemToBeRemoved);
//   }