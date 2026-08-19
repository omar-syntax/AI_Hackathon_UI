export function streamText(text, onChunk, onDone, interval = 18) {
  let index = 0;

  const timer = setInterval(() => {
    if (index < text.length) {
      onChunk(text.slice(0, index + 1));
      index++;
    } else {
      clearInterval(timer);
      onDone();
    }
  }, interval);

  return () => clearInterval(timer);
}
