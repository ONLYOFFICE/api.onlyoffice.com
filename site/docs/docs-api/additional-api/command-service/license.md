# license

Requests the license from ONLYOFFICE Docs with information about the server and user quota.

## Request example

``` json
{
  "c": "license"
}
```

## Parameters

| Name | Type   | Presence | Description               |
|------|--------|----------|---------------------------|
| c    | string | required | Defines the command type. |

## Response example

``` json
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
| error                    | integer          | required | Defines an error code.                                                                                                                                                                                                                                               |
| license                  | object           | optional | Defines the document license information.                                                                                                                                                                                                                            |
| license.end_date         | string           | required | Defines the license expiration date.                                                                                                                                                                                                                                 |
| license.trial            | boolean          | required | Defines if the license is trial or not.                                                                                                                                                                                                                              |
| license.customization    | boolean          | required | Defines if the [customization](../../usage-api/config/editor/customization/customization-standard-branding.md#customer) parameters marked with a note about editing in ONLYOFFICE Docs Developer are available for editing only in ONLYOFFICE Docs Developer or not. |
| license.connections      | integer          | optional | Defines the number of connections for the connection license.                                                                                                                                                                                                        |
| license.connections_view | integer          | optional | Defines the number of connections for the live viewer.                                                                                                                                                                                                               |
| license.users_count      | integer          | optional | Defines the number of users for the user license.                                                                                                                                                                                                                    |
| license.users_view_count | integer          | optional | Defines the number of users for the live viewer.                                                                                                                                                                                                                     |
| license.users_expire     | integer          | optional | Defines the number of days after which the user license expires.                                                                                                                                                                                                     |
| server                   | object           | required | Defines the server characteristics.                                                                                                                                                                                                                                  |
| server.resultType        | integer          | required | Defines the license status:<br /><br />**1** - an error occurred,<br /><br />**2** - the license expired,<br /><br />**3** - the license is still available,<br /><br />**6** - the trial license expired.                                                           |
| server.packageType       | integer          | required | Defines the product version:<br /><br />**0** - an open source product,<br /><br />**1** - ONLYOFFICE Docs Enterprise,<br /><br />**2** - ONLYOFFICE Docs Developer.                                                                                                 |
| server.buildDate         | string           | required | Defines the build date.                                                                                                                                                                                                                                              |
| server.buildVersion      | string           | optional | Defines the build version.                                                                                                                                                                                                                                           |
| server.buildNumber       | integer          | required | Defines the build number.                                                                                                                                                                                                                                            |
| quota                    | object           | required | Defines the user quota value.                                                                                                                                                                                                                                        |
| quota.users              | array of objects | required | Defines the user quota for the user license where:<br /><br />**userid** - the id of the user who opened the editor,<br /><br />**expire** - date of license expiration for this user.                                                                                    |
| quota.users_view         | array of objects | required | Defines the user quota for the live viewer where:<br /><br />**userid** - the id of the user who opened the editor,<br /><br />**expire** - date of viewing expiration for this user.                                                                                     |

```mdx-code-block
</APITable>
```
