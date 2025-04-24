const fs = require("fs-extra");
const yaml = require("js-yaml");
const path = require("path");

const ZONES = {
  com: {
    auth: "https://oauth.onlyoffice.com/oauth2/authorize",
    token: "https://oauth.onlyoffice.com/oauth2/token",
    userinfo: "https://oauth.onlyoffice.com/oauth2/userinfo",
  },
  io: {
    auth: "https://oauth.onlyoffice.io/oauth2/authorize",
    token: "https://oauth.onlyoffice.io/oauth2/token",
    userinfo: "https://oauth.onlyoffice.io/oauth2/userinfo",
  },
};

const zone = process.argv[2] === "io" ? "io" : "com";

const FILE_PATH = path.resolve(__dirname, "../openapi/docspace/docspace-backend.yaml");

(async () => {
  try {
    const fileContent = await fs.readFile(FILE_PATH, "utf8");
    const doc = yaml.load(fileContent);

    const schemes = doc.components?.securitySchemes;

    if (schemes?.OAuth2?.flows?.authorizationCode) {
      schemes.OAuth2.flows.authorizationCode.authorizationUrl = ZONES[zone].auth;
      schemes.OAuth2.flows.authorizationCode.tokenUrl = ZONES[zone].token;
    }

    if (schemes?.OpenId) {
      schemes.OpenId.openIdConnectUrl = ZONES[zone].userinfo;
    }

    const newYaml = yaml.dump(doc, { lineWidth: -1 });
    await fs.writeFile(FILE_PATH, newYaml, "utf8");

    console.log(`OpenAPI file updated for zone "${zone}"`);
  } catch (err) {
    console.error("Error updating OpenAPI file:", err);
    process.exit(1);
  }
})();