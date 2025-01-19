      // Adjest height 



      function matchHeightById(sourceId, targetId) {
        const sourceDiv = document.getElementById(sourceId);
        const targetDiv = document.getElementById(targetId);
      
        if (sourceDiv && targetDiv) {
          const sourceHeight = sourceDiv.offsetHeight;  // Get the height of the source h2
          targetDiv.style.height = `${sourceHeight}px`;  // Set the height of the target h2
        }
      }
      
      // Initial match
      matchHeightById("source-h2", "target-h2");
      
      // Adjust dynamically on window resize
      window.addEventListener("resize", () => {
        matchHeightById("source-h2", "target-h2");
      });
      
      // Adjust dynamically if content of the source h2 changes
      const sourceDiv = document.getElementById("source-h2");
      
      if (sourceDiv) {
        const observer = new ResizeObserver(() => {
          matchHeightById("source-h2", "target-h2");
        });
        observer.observe(sourceDiv);
      }




function matchDivHeight() {
    const sourceDiv = document.getElementById('source-div');
    const targetDiv = document.getElementById('target-div');
  
    // Ensure both divs exist
    if (sourceDiv && targetDiv) {
      // Get the height of the source div
      const sourceHeight = sourceDiv.offsetHeight;
  
      // Set the height of the target div to match the source div
      targetDiv.style.height = `${sourceHeight}px`;
    }
  }
  
  // Match height on page load
  window.addEventListener('load', matchDivHeight);
  
  // Adjust height dynamically on window resize
  window.addEventListener('resize', matchDivHeight);



//   second 

  function syncDivHeights() {
    const sourceDiv = document.getElementById('source-info-div');
    const targetDiv = document.getElementById('target-info-div');
  
    // Ensure both divs exist
    if (sourceDiv && targetDiv) {
      // Get the height of the source div
      const sourceHeight = sourceDiv.offsetHeight;
  
      // Set the height of the target div to match the source div
      targetDiv.style.height = `${sourceHeight}px`;
    }
  }
  
  // Match height on page load
  window.addEventListener('load', syncDivHeights);
  
  // Adjust height dynamically on window resize
  window.addEventListener('resize', syncDivHeights);


  class TouchscreenDetector {
    constructor(targetClass) {
      this.targetElements = document.querySelectorAll(targetClass);
      this.detectTouchscreen();
    }

    detectTouchscreen() {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        this.targetElements.forEach(element => element.classList.add('active'));
      }
    }
  }

  // Instantiate with the .mob class
  new TouchscreenDetector('.mob');
  

  