const resizableWindow = document.getElementById("main");

function updateSize() {
  const width = resizableWindow.clientWidth;
  const calculatedHeight = (width / 16) * 9;

  resizableWindow.style.height = `${calculatedHeight}px`;

  console.log(`Width: ${width}, Height: ${calculatedHeight}`);
  // You can perform additional actions based on the updated size
}

// Listen for the 'resize' event and call the updateSize function
window.addEventListener("resize", updateSize);

// Initial call to set the size when the page loads
updateSize();
