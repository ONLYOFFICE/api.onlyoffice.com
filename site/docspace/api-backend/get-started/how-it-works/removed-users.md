---
sidebar_position: -2
---

# Removed users

Users removed from the DocSpace portal are specified with the `LostUser` constant, which is a `UserInfo` object in the following format:

``` cs
public static readonly UserInfo LostUser = new()
{
    Id = new Guid("{4A515A15-D4D6-4b8e-828E-E0586F18F3A3}"),
    FirstName = "Unknown",
    LastName = "Unknown",
    ActivationStatus = EmployeeActivationStatus.NotActivated
};
```

This object is also used for all users not found in the DocSpace portal (guests, users with the pending activation status, etc.).

## Parameters

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter        | Type              | Value                                                | Description                                                                                 |
|------------------|-------------------|------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Id               | string            | `new Guid("{4A515A15-D4D6-4b8e-828E-E0586F18F3A3}")` | The user ID. The removed users always have the `{4A515A15-D4D6-4b8e-828E-E0586F18F3A3}` ID. |
| FirstName        | string            | `"Unknown"`                                          | The user first name.                                                                        |
| LastName         | string            | `"Unknown"`                                          | The user last name.                                                                         |
| ActivationStatus | string \| integer | `EmployeeActivationStatus.NotActivated`              | The user activation status (`"NotActivated"` or `0`).                                       |

```mdx-code-block
</APITable>
```

For example, when sending GET requests to the [`api/2.0/people/email`](../../../../docspace/api-backend/usage-api/get-profile-by-email.api.mdx) or [`api/2.0/people/{userid}`](../../../../docspace/api-backend/usage-api/get-profile-by-user-id.api.mdx) addresses, the `LostUser` ID is used to check if a user with the specified email or name exists. If the user ID is equal to the `LostUser` ID, this user is removed from the portal and a 404 status code is returned (`User not found`).
