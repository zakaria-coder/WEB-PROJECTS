var object = {
    user1: { name: "elwardi", profil: "developer web and mobile " },
    user2: { name: "amghari", profil: " desktop vb " },
    user3: { name: "saidi", profil: "JS and PHP " },
    user4: { name: "oufkir", profil: " REACT NATIVE " },
    user5: { name: "david", profil: "JAVAEE " },
    user6: { name: "yahya", profil: "ANGULAR " }
};

var data = document.getElementById("main");


for (us in object) {
    //   for(user in object[us]){
        
    data.innerHTML += "<div class='content' >" +
        "<i id='del' class='fa fa-close' onclick='supp(this)'></i>" +
        "<h3>" + object[us].name + "</h3>" +
        object[us].profil
        + "</div>" + "</br>"

    //  }
};

function supp(obj) {
    obj.parentNode.remove();
}
