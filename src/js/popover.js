export class Popover {
  constructor() {}

  showPopover(title, message, element) {
    const popoverElement = document.createElement("div");
    popoverElement.classList.add("popover");

    const popoverTitle = document.createElement("div");
    popoverTitle.classList.add("popover-title");

    const popoverBody = document.createElement("div");
    popoverBody.classList.add("popover-body");

    popoverTitle.textContent = title;
    popoverBody.textContent = message;

    popoverElement.appendChild(popoverTitle);
    popoverElement.appendChild(popoverBody);
    document.body.appendChild(popoverElement);

    const { left, top } = element.getBoundingClientRect();

    popoverElement.style.left =
      left - popoverElement.offsetWidth / 2 + element.offsetWidth / 2 + "px";
    popoverElement.style.bottom =
      top + element.offsetHeight + popoverElement.offsetHeight + 10 + "px";
  }

  removePopover() {
    const popover = document.querySelector(".popover");
    popover.remove();
  }
}
