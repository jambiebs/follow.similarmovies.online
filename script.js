function setCookie(name, value, days, domain) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=" + domain;
}

function deleteCookie(name, domain) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + domain;
}

function checkNotificationAndUpdateCookie() {
  if (Notification.permission === "granted") {
      setCookie("hm-notify", "true", 365, ".similarmovies.online");
  } else {
      deleteCookie("hm-notify", ".similarmovies.online");
  }
}
checkNotificationAndUpdateCookie();
setInterval(checkNotificationAndUpdateCookie, 1000);
