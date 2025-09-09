const ratingStateContainer = document.getElementById("rating-state-container");
const thankYouStateContainer = document.getElementById("thank-you-state-container");
const submitBtn = document.getElementById("submit");
const rates = document.querySelectorAll(".btn");
const rating = document.getElementById("rating");


submitBtn.addEventListener("click", function (){
  thankYouStateContainer.classList.remove("hidden");
  ratingStateContainer.classList.add("hidden");
});

rates.forEach(function (rateBtn) {
  rateBtn.addEventListener("click", function () {
      rating.textContent = rateBtn.textContent;
  })
})