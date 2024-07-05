Description

Requests the license from ONLYOFFICE Docs with information about the server and user quota.

Request example

```
{
    "c": "license"
}
```

Parameters

| Name | Description               | Type   | Presence |
| ---- | ------------------------- | ------ | -------- |
| c    | Defines the command type. | string | required |

Response example

```
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
            },
            ...
        ],
        "users_view": [
            {
                "userid": "uid-0",
                "expire": "2021-07-07T23:59:59.000Z"
            },
            {
                "userid": "uid-1",
                "expire": "2021-07-09T23:59:59.000Z"
            },
            ...
        ]
    }
}
```

Parameters

| Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type    | Presence |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| error     | Defines an error code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | integer | required |
| license   | Defines the document license information:- **end\_date** - the license expiration date. **type**: string **presence**: required
- **trial** - defines if the license is trial or not. **type**: boolean **presence**: required
- **customization** - defines if the [customization](/editors/config/editor/customization) parameters marked with the \* sign are available for editing only in ONLYOFFICE Developer Edition or not. **type**: boolean **presence**: required
- **connections** - the number of connections for the connection license. **type**: integer **presence**: optional
- **connections\_view** - the number of connections for the live viewer. **type**: integer **presence**: optional
- **users\_count** - the number of users for the user license. **type**: integer **presence**: optional
- **users\_view\_count** - the number of users for the live viewer. **type**: integer **presence**: optional
- **users\_expire** - the number of days after which the user license expires. **type**: integer **presence**: optional | object  | required |
| server    | Defines the server characteristics:- **resultType** - the license status (**1** - an error occurred, **2** - the license expired, **3** - the license is still available, **6** - the trial license expired). **type**: integer **presence**: required
- **packageType** - the product version (**0** - an open source product, **1** - the Enterprise Edition, **2** - the Developer Edition). **type**: integer **presence**: required
- **buildDate** - the build date. **type**: string **presence**: required
- **buildVersion** - the build version. **type**: string **presence**: optional
- **buildNumber** - the build number. **type**: integer **presence**: required                                                                                                                                                                                                                                                                                                                                                                              | object  | required |
| quota     | Defines the user quota value:- **users** - the user quota for the user license where *userid* - the id of the user who opened the editor, *expire* - date of license expiration for this user. **type**: array of objects **presence**: required
- **users\_view** - the user quota for the live viewer where *userid* - the id of the user who opened the editor, *expire* - date of viewing expiration for this user. **type**: array of objects **presence**: required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | object  | required |