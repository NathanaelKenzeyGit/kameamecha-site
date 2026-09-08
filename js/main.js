// Chiffres clés — compteur GSAP, déclenché une fois à 60% de visibilité.
// Le HTML porte la valeur finale en dur : si GSAP ne charge pas, la page
// reste correcte (pas de "0" affiché). Ce script se contente de repartir
// de zéro puis d'animer vers la valeur portée par data-count-value.
(function () {
  if (typeof gsap === "undefined") return;

  var nodes = document.querySelectorAll("[data-count-value]");
  if (!nodes.length) return;

  var format = function (n) {
    return Math.round(n).toLocaleString("fr-FR");
  };

  var animate = function (el) {
    var target = parseFloat(el.getAttribute("data-count-value"), 10);
    var prefix = el.getAttribute("data-count-prefix") || "";
    var suffix = el.getAttribute("data-count-suffix") || "";
    var obj = { val: 0 };
    el.textContent = prefix + format(0) + suffix;
    gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: function () {
        el.textContent = prefix + format(obj.val) + suffix;
      },
      onComplete: function () {
        el.textContent = prefix + format(target) + suffix;
      },
    });
  };

  var seen = new WeakSet();
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  nodes.forEach(function (el) {
    observer.observe(el);
  });
})();
