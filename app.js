"use strict";

let pets = [
  {
    name: "Fluffy",
    type: "Cat 🐈",
    photoUrl: "https://pet-ratings.surge.sh/fluffy.webp",
    comments: "So cute! 😻",
    numLikes: 2,
  },
  {
    name: "Dr. Slitherscale",
    type: "Snake 🐍",
    photoUrl: "https://pet-ratings.surge.sh/slitherscale.webp",
    comments: "Hissssss....",
    numLikes: 1,
  },
  {
    name: "Spike",
    type: "Porcupine 🦔",
    photoUrl: "https://pet-ratings.surge.sh/spike.webp",
    comments: "He loves to be petted!",
    numLikes: 0,
  },
];
function showPets() {
  console.log("showPets");

  sortByLikes(pets);

  let petArea = document.getElementById("pets");
  let html = "";
  //delete
  for (let i = 0; i < pets.length; i++) {
    let pet = pets[i];
    let title = `<h3>${pet.name} (${pet.type})</h3>`;
    let img = `<img src="${pet.photoUrl}">`;
    let comments = `<p>${pet.comments}</p>`;
    let deleteBtn = `<button id="delete-${i}">Delete</button>`;
    let likesBtn = `<button id="like-${i}">Like (${pet.numLikes})</button>`;
    html += `
      <div id="pet-${i}" class="pet">
        ${img}
        ${title}
        ${comments}
        ${deleteBtn}
        ${likesBtn}
      </div>`;
  }

  petArea.innerHTML = html;
}
function sortByLikes(pets) {
  console.log("sortByLikes", pets);

  pets.sort(function (a, b) {
    return b.numLikes - a.numLikes;
  });
}

function addPet(name, type, photoUrl, comments) {
  console.log("addPet", name, type, photoUrl, comments);

  pets.push({
    name: name,
    type: type,
    photoUrl: photoUrl,
    comments: comments,
    numLikes: 0,
  });
}

function handleSubmit(evt) {
  console.log("handleSubmit", evt);
  evt.preventDefault();

  let form = document.getElementById("pet-form");
  let name = form.name.value;
  let type = form.type.value;
  let photoUrl = form.photoUrl.value;
  let comments = form.comments.value;
  addPet(name, type, photoUrl, comments);
  showPets();
}

function likePet(id) {
  console.log("likePet", id);

  pets[id].numLikes += 1;
}

function handleButton(evt) {
  console.log("handleButton", evt);

  if (evt.target.id.startsWith("delete-")) {
    let petId = Number(evt.target.id.replace("delete-", ""));
    deletePet(petId);
  } else if (evt.target.id.startsWith("like-")) {
    let petId = Number(evt.target.id.replace("like-", ""));
    likePet(petId);
  }
  showPets();
}

function deletePet(id) {
  console.log("deletePet", id);

  pets.splice(id, 1);
}

showPets();

document.getElementById("pets").addEventListener("click", handleButton);

document.getElementById("pet-form").addEventListener("submit", handleSubmit);
