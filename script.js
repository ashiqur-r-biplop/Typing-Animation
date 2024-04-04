function startTypingAnimation(
  text,
  containerId,
  speed = 100,
  delay = 1000,
  callback
) {
  let index = 0;
  const container = document.getElementById(containerId);
  container.textContent = "I am ";
  function render() {
    if (index < text.length) {
      container.textContent += text.charAt(index);

      index++;
      setTimeout(render, speed);
    } else {
      setTimeout(callback, delay);
    }
  }
  render();
}

// Usage
const textToType1 = "Ashiqur Rahman Biplop. ";
const textToType2 = "Front End web developer.";

function startAnimations() {
  startTypingAnimation(textToType1, "text-container1", 100, 2000, function () {
    document.getElementById("text-container1").textContent = "";
    startTypingAnimation(
      textToType2,
      "text-container2",
      100,
      2000,
      function () {
        document.getElementById("text-container2").textContent = "";
        startAnimations();
      }
    );
  });
}

startAnimations();
