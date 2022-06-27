function savepet(){
    var cat = new Array(6);
    catName = document.getElementById("name").value;
    age = document.getElementById("age").value;
    breed = document.getElementById("breed").value;
    weight = document.getElementById("weight").value;
    date = document.getElementById("date").value;

    var radios = document.getElementsByName('dog-gender');
    for (var radio of radios)
    {
        if (radio.checked) {
            cat[1] = radio.value;
        }
    }

    cat[0] = catName;
    cat[2] = age;
    cat[3] = breed;
    cat[4] = weight;
    cat[5] = date;
    //processCats(cat);

    localStorage.setItem("cats", JSON.stringify(cat));
    processCats(loadcatsfromstorage());
}

function rendercats(property){
    var heading = document.createElement("p");
    heading.innerHTML = property;
    document.body.appendChild(heading);
}

function loadcatsfromstorage(){
    cats = JSON.parse(localStorage.getItem("cats"));
    return cats;
}

function processCats(cat){
    for(var i=0; i < cat.length; i++){
        rendercats(cat[i]);
    }

}

window.onload = () => {
    processCats(loadcatsfromstorage());
}

