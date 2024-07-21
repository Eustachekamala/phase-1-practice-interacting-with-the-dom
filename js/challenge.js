document.addEventListener("DOMContentLoaded", () => {
    let intervallId;
    let count = 0;

    const counter = document.querySelector("#counter");
    let ul = document.querySelector(".likes");

    document.querySelector("#heart").addEventListener("click", () => {
        let li = document.createElement("li");
        count++ 
        li.textContent =  `has been ${count} liked`
        ul.appendChild(li);
    })

    document.querySelector("#plus").addEventListener("click", () =>{
        count++;
        counter.textContent = count;
    })

    document.querySelector("#minus").addEventListener("click", () => {
        count--;
        counter.textContent = count;
    })
    document.querySelector("#pause").addEventListener("click", () => {
        if (intervallId) {
      clearInterval(intervallId);
      intervallId = null;
      document.querySelector("#pause").textContent = "resume";
      // Disable other buttons
      document.querySelectorAll("button:not(#pause)").forEach(button => {
        button.disabled = true;
      });
    } else {
      // Resume counting
      intervallId = setInterval(() => {
        count++;
        counter.textContent = count;
      }, 1000);
      document.querySelector("#pause").textContent = "pause";
      // Enable other buttons
      document.querySelectorAll("button:not(#pause)").forEach(button => {
        button.disabled = false;
      });
    }
})


function commnentSection(event){
  // Event listener for click on submit button
  document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission if within a form element

    let input = document.querySelector("#comment-input");
    let commentText = input.value.trim(); // Get trimmed input value
    if (commentText === "") return; // Exit if input is empty

    let comment = document.createElement("p");
    comment.textContent = commentText;

    let divComment = document.querySelector("#list");
    divComment.appendChild(comment);

    input.value = ""; // Clear input field after adding comment
  });
}
    intervallId = setInterval(() => {
        count++,
        counter.textContent = count;
    },1000)

    commnentSection()
})
