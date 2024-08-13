import { Popover } from "./popover";

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const popover = new Popover();
  let isPopoverShown = false;

  btn.addEventListener('click', () => {
    if (!isPopoverShown) {
      popover.showPopover("Popover title", "And here's some amazing content. It's very engaging. Right?", btn);
      isPopoverShown = true;
    } else {
      popover.removePopover();
      isPopoverShown = false;
    }    
  });
})
