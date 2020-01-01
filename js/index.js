function myFunction() {
  var x = document.getElementById("comingsoon");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  console.log("myFunction")
}