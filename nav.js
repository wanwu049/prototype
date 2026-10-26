(() => {
  function sameOriginReferrer() {
    try {
      if (!document.referrer) return false;
      const ref = new URL(document.referrer);
      return ref.origin === window.location.origin;
    } catch {
      return false;
    }
  }

  function bindBackButton(btn) {
    btn.addEventListener("click", (event) => {
      const fallback = btn.getAttribute("href") || "./discover.html";
      const canGoBack = window.history.length > 1 && sameOriginReferrer();
      if (canGoBack) {
        event.preventDefault();
        window.history.back();
      } else if (!fallback || fallback === "#") {
        event.preventDefault();
        window.location.href = "./discover.html";
      }
    });
  }

  document.querySelectorAll(".back-btn").forEach(bindBackButton);

  // Keep prototype interaction smooth: prevent "#" links from jumping to top.
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
})();

