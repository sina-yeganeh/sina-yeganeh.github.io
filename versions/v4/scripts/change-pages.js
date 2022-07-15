const text = document.querySelector(".text");
const command = document.querySelector(".command-input");

command.addEventListener("change", (e) => {
  switch (command.value) {
    case ":help":
      text.innerHTML = `
        <p>just use it like Vim!</p>
        <p>you can use this commands 
          <span class="command">:about</span>, 
          <span class="command">:projects</span>,
          <span class="command">:contactMe</span>,
          <span class="command">:home</span>
        </p>
      `
      break;
    default:
      console.error("Input is null");
  }
});
