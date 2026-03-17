export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 90) {
          percent = percent + Math.round(Math.random());
          setLoading(percent);
        } else {
          clearInterval(interval);
        }
      }, 500); // Made this a bit faster so it doesn't wait 2 seconds per percent
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      // Immediately jump to 100 if the model is fully loaded fast
      interval = setInterval(() => {
        if (percent < 100) {
          percent += Math.max(1, Math.floor((100 - percent) / 5)); // Accelerate to 100%
          if (percent > 100) percent = 100;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 10); // Very fast tick to finish the progress bar smoothly
    });
  }
  return { loaded, percent, clear };
};
