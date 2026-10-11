const screen = document.querySelector(".calculator__screen");
const buttons = document.querySelectorAll(".calculator__button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const pushButton = button.textContent;

    if (button.id === "delete") {
      screen.textContent = "0";
      return;
    }

    if (button.id === "backSpace") {
      if (screen.textContent.length === 1 || screen.textContent === "Error") {
        screen.textContent = "0";
      } else {
        screen.textContent = screen.textContent.slice(0, -1);
      }
      return;
    }

    if (button.id === "equal") {
      try {
        screen.textContent = eval(screen.textContent);
      } catch (error) {
        screen.textContent = "ERROR";
      }
      return;
    }

    if (screen.textContent === "0" || screen.textContent === "ERROR") {
      screen.textContent = pushButton;
    } else {
      screen.textContent += pushButton;
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ) {
    if (screen.textContent === "0") {
      screen.textContent = key;
    } else {
      screen.textContent += key;
    }
  }
});
