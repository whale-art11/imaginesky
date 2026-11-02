
const viewer = document.querySelector("#photoViewer");
const fullPhoto = document.querySelector("#fullPhoto");

const fragments = document.querySelectorAll(".mosaic a");


fragments.forEach(function (fragment) {
  fragment.addEventListener("click", function (event) {

    event.preventDefault();

  
    const photoPath = fragment.getAttribute("href");

  
    fullPhoto.src = photoPath;

  
    viewer.showModal();
  });
});