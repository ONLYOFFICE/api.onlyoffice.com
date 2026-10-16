# SsoBindingTypeDto
The SAML bindings the SSO settings accept.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **saml20HttpPost** | **String** | The SAML 2.0 HTTP POST binding, which carries the request in a self-submitting form. It is what the built-in configuration uses and the one to pick when requests are signed, since it has no length limit. | [optional] [example: `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`] [nullable] |
| **saml20HttpRedirect** | **String** | The SAML 2.0 HTTP redirect binding, which carries the request in the query string and is therefore bound by the length a URL may have. | [optional] [example: `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect`] [nullable] |
