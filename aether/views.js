(() => {
  const layout = window.AetherViewLayout || {};
  const content = window.AetherViewContent || {};

  window.AetherViews = {
    ...layout,
    ...content,
  };
})();
