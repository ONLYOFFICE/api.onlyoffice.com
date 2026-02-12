# 许可证

向 ONLYOFFICE 文档请求许可证，并获取有关服务器和用户配额的信息。

## 请求示例

``` json
{
  "c": "license"
}
```

## 参数

| 名称 | 类型   | 是否必填 | 描述               |
| ---- | ------ | -------- | ------------------------- |
| c    | string | 必填 | 定义命令类型。 |

## 响应示例

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

## 响应参数

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 参数 | 类型    | 是否必填 | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|--------------------------|------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| error                    | integer          | 必填 | 定义错误码。                                                                                                                                                                                                                                               |
| license                  | object           | 非必填 | 定义文档的许可证信息。                                                                                                                                                                                                                            |
| license.end_date         | string           | 必填 | 定义许可证的过期日期。                                                                                                                                                                                                                                 |
| license.trial            | boolean          | 必填 | 定义许可证是否为试用版本。                                                                                                                                                                                                                              |
| license.customization    | boolean          | 必填 | 定义那些在 ONLYOFFICE 文档开发者版中标注为可编辑的[自定义](../../usage-api/config/editor/customization/customization-standard-branding.md#customer)参数是否仅在 ONLYOFFICE 文档开发者版中可编辑。  |
| license.connections      | integer          | 非必填 | 定义连接数许可证中的连接数。                                                                                                                                                                                                        |
| license.connections_view | integer          | 非必填 | 定义实时查看器的连接数。                                                                                                                                                                                                               |
| license.users_count      | integer          | 非必填 | 定义用户许可证中的用户数。                                                                                                                                                                                                                    |
| license.users_view_count | integer          | 非必填 | 定义实时查看器的用户数。                                                                                                                                                                                                                     |
| license.users_expire     | integer          | 非必填 | 定义用户许可证在多少天后过期。                                                                                                                                                                                                     |
| server                   | object           | 必填 | 定义服务器的相关信息。                                                                                                                                                                                                                                  |
| server.resultType        | integer          | 必填 | 定义许可证状态：<br /><br />**1** - 出现错误，<br /><br />**2** - 许可证已过期，<br /><br />**3** - 许可证仍有效，<br /><br />**6** - 试用许可证已过期。                                                           |
| server.packageType       | integer          | 必填 | 定义产品版本：<br /><br />**0** - 开源产品，<br /><br />**1** - ONLYOFFICE 文档企业版，<br /><br />**2** - ONLYOFFICE 文档开发者版。                                                                                                 |
| server.buildDate         | string           | 必填 | 定义构建日期。                                                                                                                                                                                                                                               |
| server.buildVersion      | string           | 非必填 | 定义构建版本。                                                                                                                                                                                                                                           |
| server.buildNumber       | integer          | 必填 | 定义构建编号。                                                                                                                                                                                                                                           |
| quota                    | object           | 必填 | 定义用户配额值。                                                                                                                                                                                                                                        |
| quota.users              | array of objects | 必填 | 定义用户许可证的用户配额，其中：<br /><br />**userid** - 打开编辑器的用户 ID，<br /><br />**expire** - 该用户的许可证过期日期。                                                                                   |
| quota.users_view         | array of objects | 必填 | 定义实时查看器的用户配额，其中：<br /><br />**userid** - 打开编辑器的用户 ID，<br /><br />**expire** - 该用户的查看权限过期日期。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

```mdx-code-block
</APITable>
```
