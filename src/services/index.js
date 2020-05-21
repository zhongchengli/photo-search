
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;



const doFetch = (method, url) => {
  const req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      return this.responseText
    }
  };
  req.open(method, url, true, null, null);
  req.send(null);
}