function get() {
    let name = document.getElementById("name").value;
    let lname = document.getElementById("pass").value;
    let add = name + lname;
    const selecteditems = []
    const chakoxes = document.querySelectorAll(`input[name = 'item']:checked`)

    chakoxes.forEach((chakoxes) => {
        selecteditems.push(chakoxes.value)
    })

    document.getElementById("namep").innerHTML = `Name :- ${add}`;
    document.getElementById("chaks").innerHTML = `Your Fevreate Frute :- ${selecteditems}`;

}