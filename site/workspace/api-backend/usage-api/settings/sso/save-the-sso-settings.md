---
title: "Save the SSO settings"
sidebar_label: "Save the SSO settings"
sidebar_class_name: api-method post
description: "Saves the SSO settings for the current portal."
---

**POST** `/api/2.0/settings/ssov2`

Saves the SSO settings for the current portal.

## Request body

### serializeSettings

**type:** `string`

Serialized SSO settings

**Example**: `"string"`

## Request example

```json
{
  "serializeSettings": "string"
}
```

## Returns

SSO settings. A request that is not authenticated returns `401`.

### EnableSso

**type:** `boolean`

**Example**: `true`

### IdpSettings

**type:** `SsoIdpSettings`

### IdpCertificates

**type:** `SsoCertificate[]`

### IdpCertificateAdvanced

**type:** `SsoIdpCertificateAdvanced`

### SpLoginLabel

**type:** `string`

**Example**: `"SpLoginLabel"`

### SpCertificates

**type:** `SsoCertificate[]`

### SpCertificateAdvanced

**type:** `SsoSpCertificateAdvanced`

### FieldMapping

**type:** `SsoFieldMapping`

### HideAuthPage

**type:** `boolean`

**Example**: `true`

## Response example

```json
{
  "EnableSso": true,
  "IdpSettings": {
    "EntityId": "EntityId",
    "SsoUrl": "SsoUrl",
    "SsoBinding": "SsoBinding",
    "SloUrl": "SloUrl",
    "SloBinding": "SloBinding",
    "NameIdFormat": "NameIdFormat"
  },
  "IdpCertificates": [
    {
      "SelfSigned": true,
      "Crt": "Crt",
      "Key": "Key",
      "Action": "Action",
      "DomainName": "DomainName",
      "StartDate": "2019-07-26T00:00:00",
      "ExpiredDate": "2019-07-26T00:00:00"
    }
  ],
  "IdpCertificateAdvanced": {
    "VerifyAlgorithm": "VerifyAlgorithm",
    "VerifyAuthResponsesSign": true,
    "VerifyLogoutRequestsSign": true,
    "VerifyLogoutResponsesSign": true,
    "DecryptAlgorithm": "true",
    "DecryptAssertions": true
  },
  "SpLoginLabel": "SpLoginLabel",
  "SpCertificates": [
    {
      "SelfSigned": true,
      "Crt": "Crt",
      "Key": "Key",
      "Action": "Action",
      "DomainName": "DomainName",
      "StartDate": "2019-07-26T00:00:00",
      "ExpiredDate": "2019-07-26T00:00:00"
    }
  ],
  "SpCertificateAdvanced": {
    "SigningAlgorithm": "SigningAlgorithm",
    "SignAuthRequests": true,
    "SignLogoutRequests": true,
    "SignLogoutResponses": true,
    "EncryptAlgorithm": "true",
    "DecryptAlgorithm": "true",
    "EncryptAssertions": true
  },
  "FieldMapping": {
    "FirstName": "FirstName",
    "LastName": "LastName",
    "Email": "Email",
    "Title": "Title",
    "Location": "Location",
    "Phone": "Phone"
  },
  "HideAuthPage": true
}
```
