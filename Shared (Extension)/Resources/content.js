setInterval(() => {
  if (isSkippableAd()) {
    skipAd();
  } else if (isAdOverlay() && !isMuted()) {
    toggleMute();
  } else if (!isAdOverlay() && isMuted()) {
    toggleMute();
  }
}, 450);

function toggleMute() {
  const muteBtn = getMuteBtnIfExists();

  if (muteBtn !== null) {
    muteBtn.click();
  }
}

function skipAd() {
  const skipAdBtn = getSkipAdBtnIfExists();

  if (skipAdBtn !== null) {
    toggleMute();
    skipAdBtn.click();
  }
}

function isSkippableAd() {
  const skipAdBtn = getSkipAdBtnIfExists();
  return skipAdBtn !== null;
}

function isMuted() {
  const muteBtn = getMuteBtnIfExists();

  if (muteBtn !== null) {
    const attrValue = muteBtn.getAttribute("data-title-no-tooltip");
    if (attrValue && attrValue.toUpperCase() === "UNMUTE") {
      return true;
    }
  }

  return false;
}

function isAdOverlay() {
  const unskippableAd = document.getElementsByClassName("ytp-ad-player-overlay");

  if (unskippableAd && unskippableAd.length > 0) {
    return true;
  }

  return false;
}

function getSkipAdBtnIfExists() {
  const skipAdElements = document.getElementsByClassName("ytp-ad-skip-button");

  if (skipAdElements && skipAdElements.length > 0) {
    return skipAdElements[0];
  }

  return null;
}

function getMuteBtnIfExists() {
  const muteElements = document.getElementsByClassName("ytp-mute-button");

  if (muteElements && muteElements.length > 0) {
    return muteElements[0];
  }

  return null;
}
