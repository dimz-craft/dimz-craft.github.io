

var allowedDomains = ['https://bstlar.com/eL/another-ui', 'bstlar.com', 'linkvertise.com'];
var currentDomain = window.location.hostname;

if (currentDomain.includes(allowedDomains)) {
  document.getElementById("downloadContent").style.display = "flex";
  document.getElementById("mainContent").style.display = "none";
} else {
  document.getElementById("downloadContent").style.display = "none";
  document.getElementById("mainContent").style.display = "flex";
}
