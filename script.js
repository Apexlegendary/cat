"use strict"
let dogs=[]
function saveDog(){
    let dog = {}
    dog.name=document.getElementById("name").value
    dog.isMale=document.getElementById("male").checked
    dog.age=document.getElementById("age").value
    dog.breed=document.getElementById("breed").value
    dog.weight=document.getElementById("weight").value
    dogs.push(dog)
    renderDog(dog)
    localStorage.setItem("dog",JSON.stringify(dogs))
}
function renderDog (dog) {
    let box = document.createElement("div")
    document.body.appendChild(box)
    box.className = "box"
    let heading = document.createElement("h2")
    box.appendChild(heading)
    heading.innerText = dog.name
    let gender = document.createElement("p")
    box.appendChild(gender)
    gender.innerText = dog.isMale ? "male" : "female"
    let age = document.createElement("p")
    box.appendChild(age)
    age.innerText = dog.age+" years old"
    let breed = document.createElement("p")
    box.appendChild(breed)
    breed.innerText = dog.breed
    let weight = document.createElement("p")
    box.appendChild(weight)
    weight.innerText = dog.weight+" kilograms"
}