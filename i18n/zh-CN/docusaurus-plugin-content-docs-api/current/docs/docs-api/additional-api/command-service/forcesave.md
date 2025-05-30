﻿# forcesave

强制保存正在编辑的文档而不关闭它，此命令后可能会继续编辑文档，因此这将不是最终保存的文档版本。

## 请求示例

``` json
{
  "c": "forcesave",
  "key": "Khirz6zTPdfd7",
  "userdata": "sample userdata"
}
```

## 参数

| 参数 | 类型   | 是否必填 | 描述                                                                                                       |
| --------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------- |
| c         | string | 必填 | 定义命令类型。                                                                                         |
| key       | string | 必填 | 定义文档标识符，用于明确标识文档文件。                                 |
| userdata  | string | 非必填的 | 定义一些自定义标识符，当存在多个请求时，这些标识符将有助于区分特定请求 |

## 响应示例

``` json
{
  "error": 0,
  "key": "Khirz6zTPdfd7"
}
```

## 参数

| 参数 | 类型    | 是否必填 | 描述                                                                       |
| --------- | ------- | -------- | --------------------------------------------------------------------------------- |
| error     | integer | 必填 | 定义错误代码。                                                         |
| key       | string  | 必填 | 定义文档标识符,用于明确标识文档文件。 |
