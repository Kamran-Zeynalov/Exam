// Task 1

var array = [2, 4, 6, 10];
var result = 0;
var total = 0;
array.forEach(function (value, index) {
  result += value;
  total++;
});

console.log("ededi orta: " + result / total);

////////////////////////////////////////

// Task 2

var ul = document.querySelector("#list");

add.addEventListener("click", function () {
  var value = added.value;

  ul.innerHTML += `<li id="afaf"><span class="ress">${value}</span> <span class="sil">sil</span> <span class="hazir">hazir</span></li>`;
  added.value = "";

  var hazirButtons = document.querySelectorAll('.hazir');
  hazirButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      this.previousElementSibling.previousElementSibling.style.textDecoration = "line-through";
    });
  });

  var silButtons = document.querySelectorAll('.sil');
  silButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      if (this.previousElementSibling.style.textDecoration === "line-through") {
        this.previousElementSibling.style.display = "none";
        this.style.display = "none";
      }
    });
  });
});

