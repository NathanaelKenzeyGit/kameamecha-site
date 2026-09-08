// Ressources techniques — client-side category filter (no backend yet).
(function () {
  var bar = document.querySelector("[data-filter-bar]");
  var grid = document.querySelector("[data-article-grid]");
  var emptyState = document.querySelector("[data-empty-state]");
  if (!bar || !grid) return;

  var buttons = Array.prototype.slice.call(bar.querySelectorAll("[data-filter]"));
  var articles = Array.prototype.slice.call(grid.querySelectorAll("[data-category]"));

  var ACTIVE = "border-base-content bg-base-content text-base-100 font-semibold";
  var INACTIVE = "border-base-300 text-km-gris-700 hover:border-base-content transition-colors font-medium";

  function applyFilter(filter) {
    var visibleCount = 0;
    articles.forEach(function (article) {
      var show = filter === "all" || article.getAttribute("data-category") === filter;
      article.hidden = !show;
      if (show) visibleCount++;
    });
    if (emptyState) emptyState.hidden = visibleCount > 0;

    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute("data-filter") === filter;
      btn.className =
        "px-4 py-2 text-sm rounded border " + (isActive ? ACTIVE : INACTIVE);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(btn.getAttribute("data-filter"));
    });
  });
})();
