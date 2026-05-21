# license

Requests the license from ONLYOFFICE Docs with information about the server and user quota.

## Request example

```json
{
  "c": "license"
}
```

## Request parameters

| Parameter | Type   | Presence | Description       |
| --------- | ------ | -------- | ----------------- |
| c         | string | required | The command type. |

## Response example

```json
{
  "error": 0,
  "license": {
    "end_date": "2021-07-07T23:59:59.000Z",
    "trial": false,
    "customization": false,
    "connections": 0,
    "connections_view": 0,
    "users_count": 10,
    "users_view_count": 10,
    "users_expire": 30
  },
  "server": {
    "resultType": 3,
    "packageType": 1,
    "buildDate": "2021-05-21T00:00:00.000Z",
    "buildVersion": "6.3.0",
    "buildNumber": 111
  },
  "quota": {
    "users": [
      {
        "userid": "uid-0",
        "expire": "2021-07-07T23:59:59.000Z"
      },
      {
        "userid": "uid-1",
        "expire": "2021-07-09T23:59:59.000Z"
      }
    ],
    "users_view": [
      {
        "userid": "uid-0",
        "expire": "2021-07-07T23:59:59.000Z"
      },
      {
        "userid": "uid-1",
        "expire": "2021-07-09T23:59:59.000Z"
      }
    ]
  }
}
```

## Response parameters

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter                | Type             | Presence | Description                                                                                                                                                                                                                                                          |
|--------------------------|------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| error                    | integer          | required | The error code.                                                                                                                                                                                                                                               |
| license                  | object           | optional | The document license information.                                                                                                                                                                                                                            |
| license.end_date         | string           | required | The license expiration date.                                                                                                                                                                                                                                 |
| license.trial            | boolean          | required | Whether the license is trial.                                                                                                                                                                                                                              |
| license.customization    | boolean          | required | Whether the [customization](../../usage-api/config/editor/customization/customization-standard-branding.md#customer) parameters marked with a note about editing in ONLYOFFICE Docs Developer are available for editing only in ONLYOFFICE Docs Developer. |
| license.connections      | integer          | optional | The number of connections for the connection license.                                                                                                                                                                                                        |
| license.connections_view | integer          | optional | The number of connections for the live viewer.                                                                                                                                                                                                               |
| license.users_count      | integer          | optional | The number of users for the user license.                                                                                                                                                                                                                    |
| license.users_view_count | integer          | optional | The number of users for the live viewer.                                                                                                                                                                                                                     |
| license.users_expire     | integer          | optional | The number of days after which the user license expires.                                                                                                                                                                                                     |
| server                   | object           | required | The server characteristics.                                                                                                                                                                                                                                  |
| server.resultType        | integer          | required | The license status: `1` - an error occurred, `2` - the license expired, `3` - the license is still available, `6` - the trial license expired.                                                                                                              |
| server.packageType       | integer          | required | The product version: `0` - an open source product, `1` - ONLYOFFICE Docs Enterprise, `2` - ONLYOFFICE Docs Developer.                                                                                                                                       |
| server.buildDate         | string           | required | The build date.                                                                                                                                                                                                                                              |
| server.buildVersion      | string           | optional | The build version.                                                                                                                                                                                                                                           |
| server.buildNumber       | integer          | required | The build number.                                                                                                                                                                                                                                            |
| quota                    | object           | required | The user quota value.                                                                                                                                                                                                                                        |
| quota.users              | object[] | required | The user quota for the user license.                                                                                                                                                                                                                         |
| quota.users.userid       | string           | required | The ID of the user who opened the editor.                                                                                                                                                                                                                    |
| quota.users.expire       | string           | required | The date of license expiration for this user.                                                                                                                                                                                                                |
| quota.users_view         | object[] | required | The user quota for the live viewer.                                                                                                                                                                                                                          |
| quota.users_view.userid  | string           | required | The ID of the user who opened the document for viewing.                                                                                                                                                                                                      |
| quota.users_view.expire  | string           | required | The date of viewing expiration for this user.                                                                                                                                                                                                                |

```mdx-code-block
</APITable>
```
