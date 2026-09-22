---
title: Errors
sidebar_label: Errors
sidebar_position: 5
description: Every error code the ONLYOFFICE Hosted Solution API returns, with the HTTP status it comes with.
---

A failed request returns a non-200 status code and a JSON body containing an `error` code, and
additional error information where it is available.

| Status | Error | Description |
| --- | --- | --- |
| 400 | `error` | A general error; the description is given in the `message` field of the response body. |
| 400 | `params` | An error has been made in the method parameters specified in the request. |
| 400 | `passPolicyError` | The password specified in the request does not meet the requirements. |
| 400 | `portalNameEmpty` | The required parameter `portalName`, which must be present in the request, is not specified. |
| 400 | `portalNameExist` | Portal with the portal name specified in the request has already been registered. |
| 400 | `portalNameIncorrect` | Invalid characters in the `portalName` parameter: only base Latin letters and digits are allowed. |
| 400 | `portalNameNotFound` | No portal with the portal name specified in the request has been registered. |
| 400 | `portalsCountTooMuch` | The limit for the number of portals has been reached. |
| 400 | `recaptchaInvalid` | Invalid reCAPTCHA value has been entered. |
| 400 | `tooMuchAttempts` | The limit for the number of request attempts has been reached. |
| 400 | `tooShortError` | The `portalName` specified in the request is too short: it cannot be less than 6 characters. |
| 403 | `authorization` | Authorization error: an unknown authorization scheme is used, or the authorization key is missing, or the authorization key time is out, or a wrong key is used. |
| 500 | `authorization` | Internal server error when decoding the authorization key. |
| 500 | `registerNewTenantError` | An error occurred while registering a new portal. |
| 500 | `error` | An internal server error occurred. |

[Validate portal name](./portal/validate-portal-name.md) delivers these codes differently: an
unavailable name comes back as a populated response body with status 400, rather than as a bare
error.
