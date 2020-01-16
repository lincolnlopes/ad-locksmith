var ActiveDirectory = require("activedirectory");
var config = {
  url: "ldap://10.1.105.10",
  baseDN: "dc=engecred,dc=local",
  username: "lincoln.lopes",
  password: "password"
};
var ad = new ActiveDirectory(config);

ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log("ERROR: " + JSON.stringify(err));
    return;
  }

  if (auth) {
    console.log("Authenticated!");
  } else {
    console.log("Authentication failed!");
  }
});
