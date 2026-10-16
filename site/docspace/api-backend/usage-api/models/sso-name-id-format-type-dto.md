# SsoNameIdFormatTypeDto
The SAML name ID formats the SSO settings accept.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **saml11Unspecified** | **String** | The SAML 1.1 unspecified name ID format. | [optional] [example: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`] [nullable] |
| **saml11EmailAddress** | **String** | The SAML 1.1 email address name ID format. | [optional] [example: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`] [nullable] |
| **saml20Entity** | **String** | The SAML 2.0 entity name ID format. | [optional] [example: `urn:oasis:names:tc:SAML:2.0:nameid-format:entity`] [nullable] |
| **saml20Transient** | **String** | The SAML 2.0 transient name ID format, whose identifier differs from one session to the next. It is what the built-in configuration uses. | [optional] [example: `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`] [nullable] |
| **saml20Persistent** | **String** | The SAML 2.0 persistent name ID format, whose identifier stays the same for one person across sessions. | [optional] [example: `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`] [nullable] |
| **saml20Encrypted** | **String** | The SAML 2.0 encrypted name ID format. | [optional] [example: `urn:oasis:names:tc:SAML:2.0:nameid-format:encrypted`] [nullable] |
| **saml20Unspecified** | **String** | The SAML 2.0 unspecified name ID format. | [optional] [example: `urn:oasis:names:tc:SAML:2.0:nameid-format:unspecified`] [nullable] |
| **saml11X509SubjectName** | **String** | The SAML 1.1 X.509 subject name name ID format. | [optional] [example: `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName`] [nullable] |
| **saml11WindowsDomainQualifiedName** | **String** | The SAML 1.1 Windows domain qualified name name ID format. | [optional] [example: `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName`] [nullable] |
| **saml20Kerberos** | **String** | The SAML 2.0 Kerberos name ID format. | [optional] [example: `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos`] [nullable] |
