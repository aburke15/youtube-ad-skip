let muted = false;
setInterval(() => {
  if (isSkippableAd()) {
    skipAd();
  } else if (isAdPlayerOverlay()) {
    mute();
  } else {
    unmute();
  }
}, 350);

function mute() {
  toggleMute("MUTE");
  setIsMuted(true);
}

function unmute() {
  if (!isMuted()) return;
  toggleMute("UNMUTE");
  setIsMuted(false);
}

function isMuted() {
  return muted;
}

function setIsMuted(value) {
  muted = value;
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
  const skipAdModernElements = document.getElementsByClassName("ytp-ad-skip-button-modern");

  if (skipAdElements && skipAdElements.length > 0) {
    return skipAdElements[0];
  } else if (skipAdModernElements && skipAdModernElements.length > 0) {
    return skipAdModernElements[0];
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
