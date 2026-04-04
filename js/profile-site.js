(function () {
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      var expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  var revealNodes = document.querySelectorAll(".reveal");
  var filterButtons = document.querySelectorAll("[data-filter]");
  var searchInput = document.querySelector("[data-blog-search]");
  var blogList = document.querySelector("[data-blog-list]");
  var resultsSummary = document.querySelector("[data-results-summary]");

  if (filterButtons.length && blogList) {
    var cards = Array.prototype.slice.call(blogList.querySelectorAll("[data-tags]"));
    var activeFilter = "all";

    function updateResults() {
      var query = searchInput ? searchInput.value.trim().toLowerCase() : "";
      var visibleCount = 0;

      cards.forEach(function (card) {
        var tags = (card.getAttribute("data-tags") || "").toLowerCase();
        var text = card.textContent.toLowerCase();
        var matchesFilter = activeFilter === "all" || tags.indexOf(activeFilter) !== -1;
        var matchesQuery = !query || text.indexOf(query) !== -1 || tags.indexOf(query) !== -1;
        var isVisible = matchesFilter && matchesQuery;

        card.hidden = !isVisible;

        if (isVisible) {
          visibleCount += 1;
        }
      });

      if (resultsSummary) {
        if (!visibleCount) {
          resultsSummary.textContent = "No posts match the current filter. Try a broader topic or remove the search term.";
        } else if (activeFilter === "all" && !query) {
          resultsSummary.textContent = "Showing all posts.";
        } else {
          resultsSummary.textContent = "Showing " + visibleCount + " post" + (visibleCount === 1 ? "" : "s") + " for the current view.";
        }
      }
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeFilter = button.getAttribute("data-filter");

        filterButtons.forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });

        updateResults();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", updateResults);
    }

    updateResults();
  }

  if (!("IntersectionObserver" in window) || revealNodes.length === 0) {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -24px 0px"
    }
  );

  revealNodes.forEach(function (node) {
    observer.observe(node);
  });
})();
