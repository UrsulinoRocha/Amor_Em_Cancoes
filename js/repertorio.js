document.addEventListener('DOMContentLoaded', () => {
  const audios = document.querySelectorAll('.cardlow audio');

  audios.forEach(audio => {
    audio.addEventListener('play', () => {
      audios.forEach(other => {
        if (other !== audio) {
          other.pause();
          other.currentTime = 0;
        }
      });
    });
  });
});
