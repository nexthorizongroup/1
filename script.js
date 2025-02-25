  let btn = document.getElementById("btn");
  let btntext = document.getElementById("btntext");
  let btnicon = document.getElementById("btnicon");

  btn.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        btnicon.src = "imgs/light.jpg";
        btntext.innerHTML = "Light Mode";
    } else {
        btnicon.src = "imgs/moon.jpg";
        btntext.innerHTML = "Dark Mode";
    }
  };