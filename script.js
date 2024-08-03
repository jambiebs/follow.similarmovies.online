// function setCookie(name, value, days, domain) {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=" + domain;
// }

// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// function deleteCookie(name, domain) {
//   document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + domain;
// }

// function checkNotificationAndUpdateButton() {
//   const actionButton = document.getElementById('actionButton');
//   if (getCookie("hm-notify") === "true") {
//     actionButton.textContent = "❮ Go Back";
//     actionButton.onclick = function() {
//       window.history.back();
//     };
//   } else {
//     actionButton.textContent = "Subscribe";
//     actionButton.onclick = function() {
//       Notification.requestPermission().then(permission => {
//         if (permission === "granted") {
//           setCookie("hm-notify", "true", 365, ".similarmovies.online");
//           actionButton.textContent = "❮ Go Back";
//           actionButton.onclick = function() {
//             window.history.back();
//           };
//         } else {
//           console.log('Notification permission denied');
//         }
//       }).catch((error) => {
//         console.error('Error requesting notification permission:', error);
//       });
//     };
//   }
// }

// document.addEventListener('DOMContentLoaded', checkNotificationAndUpdateButton);
// setInterval(checkNotificationAndUpdateButton, 1000);
function setCookie(name, value, days, domain) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=" + domain;
  console.log(`Cookie set: ${name}=${value}, Domain=${domain}`); // Debugging line
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function deleteCookie(name, domain) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + domain;
  console.log(`Cookie deleted: ${name}, Domain=${domain}`); // Debugging line
}

function updateButtonBasedOnCookie() {
  const actionButton = document.getElementById('actionButton');
  if (!actionButton) {
    console.error('Button element not found.');
    return;
  }
  const notifyCookie = getCookie("hm-notify");
  console.log(`Cookie value: ${notifyCookie}`); // Debugging line

  if (notifyCookie === "true") {
    actionButton.textContent = "❮ Go Back";
    actionButton.onclick = function() {
      window.history.back();
    };
  } else {
    actionButton.textContent = "Subscribe";
    actionButton.onclick = function() {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          setCookie("hm-notify", "true", 365, ".similarmovies.online");
          updateButtonBasedOnCookie(); // Update button text after permission is granted
        } else {
          console.log('Notification permission denied');
        }
      }).catch((error) => {
        console.error('Error requesting notification permission:', error);
      });
    };
  }
}

// Initial button update
document.addEventListener('DOMContentLoaded', function() {
  updateButtonBasedOnCookie();
  // Set up interval to check and update the button every 1000 ms
  setInterval(updateButtonBasedOnCookie, 1000);
});
