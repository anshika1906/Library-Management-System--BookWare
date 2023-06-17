document.addEventListener("DOMContentLoaded", function() {
    const agreeCheckbox = document.getElementById("agree-checkbox");
    const submitButton = document.getElementById("submit-btn");
  
    agreeCheckbox.addEventListener("change", function() {
      submitButton.disabled = !agreeCheckbox.checked;
    });
  });
  