var ActiveDirectory = require("activedirectory");

const config = {
  url: "ldap://10.1.105.10",
  baseDN: "dc=engecred,dc=local",
  username: "lincoln.lopes",
  password: "password"
};
const ad = new ActiveDirectory(config);

class LoginController {
  async login(req, res) {
    // const { email, password } = req.body;
    var ad = new ActiveDirectory(config);

    ad.authenticate("lincoln.lopes", "teste", function(err, auth) {
      if (err) {
        console.log("ERROR: " + JSON.stringify(err));
        return;
      }

      if (auth) {
        req.session.user = user;
        console.log("Authenticated!");
      } else {
        console.log("Authentication failed!");
      }
    });
  }

  /*
  destroy (req, res) {
    req.session.destroy(() => {
      res.clearCookie('root')
      return res.redirect('/')
    })
  }*/
}

module.exports = new LoginController();
