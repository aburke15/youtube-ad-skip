function test() {
  console.log("test!");
}

function toggleNormal() {
  disableOtherMenuItem();
  const menuElement = getMenuItemElement("NORMAL");
  toggleSpeed(menuElement);
}

function toggleOnePointSevenFive() {
  disableOtherMenuItem();
  const menuElement = getMenuItemElement("1.75");
  toggleSpeed(menuElement);
}

function toggleDoubleSpeed() {
  disableOtherMenuItem();
  const menuElement = getMenuItemElement("2");
  toggleSpeed(menuElement);
}

function toggleSpeed(menuElement) {
  if (menuElement) {
    menuElement.setAttribute("aria-checked", "true");
  }
}

function disableOtherMenuItem() {
  const menuElements = document.getElementsByClassName("ytp-menuitem-label");

  console.log(menuElements);

  if (!menuElements || menuElements.length < 1) {
    return;
  }

  let toggledElement = null;
  for (let menuElement of menuElements) {
    if (!menuElement) return;

    toggledElement = menuElement.parentElement;
    const attrValue = toggledElement.getAttribute("aria-checked");

    if (attrValue === "true" || attrValue) {
      toggledElement.removeAttribute("aria-checked");
      return;
    }
  }
}

function getMenuItemElement(innerText) {
  const menuElements = document.getElementsByClassName("ytp-menuitem-label");

  let parentElement = null;
  if (menuElements && menuElements.length > 0) {
    for (let menuElement of menuElements) {
      if (menuElement && menuElement.textContent.toUpperCase() === innerText) {
        parentElement = menuElement.parentElement;
      }
    }
  }

  return parentElement;
}
