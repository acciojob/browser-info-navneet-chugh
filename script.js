//your JS code here. If required.
function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  const browserName = navigator.appName;
  const browserVersion = navigator.appVersion;

  const message = "You are using " + browserName + " version " + browserVersion;
  const browserInfoElement = document.getElementById('browser-info');
  browserInfoElement.textContent = message;
}

getBrowserInfo();