function get() {
    let name = document.getElementById("name").value;
    let lname = document.getElementById("pass").value;
    let add = name + " " + lname;
    const selecteditems = [];
    const chakoxes = document.querySelectorAll(`input[name = 'item']:checked`)

    chakoxes.forEach((chakoxes) => {
        selecteditems.push(chakoxes.value)
    })

    if (name == "" ) {
       alert("Plase enter First name")
        return
    } else if (lname == "") {
        alert("Plase enter Last name")
        return
    }else if (selecteditems == 0) {
        alert("Plase sealect one fruate")
        return
    }

    document.getElementById("namep").innerHTML = `Name :- ${add}`;
    document.getElementById("chaks").innerHTML = `Your Fevreate Frute :- ${selecteditems}`;

}