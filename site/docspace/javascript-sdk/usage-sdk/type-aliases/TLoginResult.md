---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TLoginResult

Result of [SDKInstance.login](../classes/SDKInstance.md#login). The portal answers by resolving, never by rejecting.
Three shapes (client 4.0.0): a signed-in session resolves with `url: "/"`; an account that
needs a second factor resolves with `url` pointing at the portal's confirmation page
(`/confirm/TfaAuth…` or `/confirm/PhoneAuth…`) and no session — call `login` again with the
one-time `code`; a failed attempt resolves with the error the portal caught, carrying `message`
and, for an HTTP error, `status`. A missing `url` is the reliable sign of failure: a portal that
rejects the credentials with a plain message sends no `status`.

```ts
type TLoginResult = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `hash` | `string` | Echo of the password hash when a second factor is required. |
| `message` | `string` | Error message of a failed attempt. |
| `status` | `number` | HTTP status of a failed attempt (`401` for wrong credentials); absent on success and when the portal reported the failure as a plain message. |
| `url` | `string` | Where the portal would navigate next: `"/"` after a successful sign-in, or the second-factor page (`/confirm/…`) when a code is still required and no session exists. |
| `user` | `string` | Echo of the email when a second factor is required. |

</APITable>
