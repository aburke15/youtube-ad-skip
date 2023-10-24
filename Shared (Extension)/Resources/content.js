let muted = false;
setInterval(() => {
  if (isSkippableAd()) {
    skipAd();
  } else if (isAdPlayerOverlay()) {
    mute();
  } else {
    unmute();
  }
}, 450);

function mute() {
  toggleMute("MUTE");
  muted = true;
}

function unmute() {
  if (!muted) return;
  toggleMute("UNMUTE");
  muted = false;
}

function toggleMute(action) {
  const muteBtn = getMuteBtnIfExists();

  if (muteBtn === null) return;

  let attrValue = muteBtn.getAttribute("data-title-no-tooltip");

  if (attrValue.toUpperCase() === action) {
    muteBtn.click();
  }
}

function skipAd() {
  const skipAdBtn = getSkipAdBtnIfExists();

  if (skipAdBtn !== null) {
    mute();
    skipAdBtn.click();
  }
}

function isSkippableAd() {
  const skipAdBtn = getSkipAdBtnIfExists();
  return skipAdBtn !== null;
}

function isAdPlayerOverlay() {
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
