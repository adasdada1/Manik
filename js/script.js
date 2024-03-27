// portfolio
if (document.querySelectorAll(".photo").length !== 0) {
  let photoContainer = document.querySelector(".portfolio-grid");
  let photos = document.querySelectorAll(".photo");
  setPhotosGrid(photos);
  setEffect(photos, photoContainer);
}

function setPhotosGrid(photos) {
  for (let i = 0; i < photos.length; i++) {
    if (i % 2 === 0 && i % 3 == 0 && i !== 0) {
      if (!photos[i].classList.contains("photo-span21")) {
        photos[i].classList.add("photo-span22");
      }
    }
    if (i % 4 === 0 && i !== 0) {
      if (!photos[i].classList.contains("photo-span22")) {
        photos[i].classList.add("photo-span21");
      }
    }
  }
}

function setEffect(photos, photoContainer) {
  photoContainer.addEventListener("click", function (e) {
    let target = e.target;
    if (target.classList.contains("photo-img")) {
      let photoClone = target.cloneNode(true);

      if (target.classList.contains("photoFullSize")) {
        target.remove();
        for (let i = 0; i < photos.length; i++) {
          photos[i].children[0].classList.remove("pointNone");
        }
      } else {
        target.parentNode.append(photoClone);
        target.classList.toggle("photoFullSize");
        console.log(target.parentNode);
        setPoint();
      }

      // debugger

      document.querySelector(".filter").classList.toggle("filter-opacity");
      document.querySelector(".header").classList.toggle("pointNone");

      function setPoint() {
        for (let i = 0; i < photos.length; i++) {
          if (target !== photos[i].children[0]) {
            photos[i].children[0].classList.add("pointNone");
          }
        }
      }
    }
  });
}

//. backup

// function setEffect(photos, photoContainer) {
//   photoContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("photo-img")) {
//       e.target.classList.toggle("photoFullSize");
//       document.querySelector(".filter").classList.toggle("filter-opacity");
//       document.querySelector(".header").classList.toggle("pointNone");

//       for (let i = 0; i < photos.length; i++) {
//         if (e.target !== photos[i].children[0]) {
//           photos[i].children[0].classList.toggle("pointNone");
//         }
//       }
//     }
//   });
// }

//. EFFECTS
// main
if (document.querySelector(".general__title")) {
  setTimeout(() => {
    document.querySelector(".general__title").style.transform = "translateX(0)";
    setTimeout(() => {
      document.querySelector(".general__description").style.transform =
        "translateX(0)";
      setTimeout(() => {
        document.querySelector(".mainBtn").style.transform = "translateX(0)";
      }, 400);
    }, 500);
  }, 200);
}
