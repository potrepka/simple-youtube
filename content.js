window.interval = setInterval(() => {
  document.querySelectorAll("#shorts-player").forEach((e) => {
    e.querySelectorAll("video").forEach((v) => {
      v.pause();
    });
  });
}, 0);
