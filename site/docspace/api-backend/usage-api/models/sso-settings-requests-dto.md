# SsoSettingsRequestsDto
The whole SAML Single Sign-On configuration of the portal, carried as a serialised JSON object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **serializeSettings** | **String** | The configuration object serialised to a JSON string, not a nested object. It is the complete configuration rather than a patch - fields left out are stored empty - so start from `GET api/2.0/settings/ssov2` or `GET api/2.0/settings/ssov2/default` and send back a changed copy. The identity provider entity ID and sign-in URL are required, the sign-in and sign-out URLs have to be absolute `http` or `https` addresses, and the attribute mapping has to name the first name, last name and email fields; the values each SAML field accepts are listed by `GET api/2.0/settings/ssov2/constants`. An empty string, or a string that carries no configuration object, is refused with 400. | [required] [example: `{"enableSso":true,"idpSettings":{"entityId":"https://idp.example.com"}}`] [nullable] |
