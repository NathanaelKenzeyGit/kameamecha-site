// "Comment se déroule..." step indicator — cycles the active step every 3s
// so the sequence reads as a live process rather than a static list.
// Respects prefers-reduced-motion by leaving step 1 highlighted and static.
(function () {
  var tracks = document.querySelectorAll("[data-method-track]");
  if (!tracks.length) return;

  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  tracks.forEach(function (track) {
    var items = Array.prototype.slice.call(track.querySelectorAll("[data-step-item]"));
    if (items.length < 2 || reduceMotion) return;

    var current = 0;

    function setActive(index) {
      items.forEach(function (item, i) {
        var number = item.querySelector("[data-step-number]");
        if (i === index) {
          item.classList.remove("border-base-300");
          item.classList.add("border-primary");
          if (number) {
            number.classList.remove("text-km-gris-700");
            number.classList.add("text-secondary");
          }
        } else {
          item.classList.remove("border-primary");
          item.classList.add("border-base-300");
          if (number) {
            number.classList.remove("text-secondary");
            number.classList.add("text-km-gris-700");
          }
        }
      });
    }

    setInterval(function () {
      current = (current + 1) % items.length;
      setActive(current);
    }, 3000);
  });
})();
