# Initialize (初始化)

将 ONLYOFFICE 文档构建器初始化为一个库，以便应用程序能够使用它。此方法仅设置主文档构建器资源（icu 文件等）的目录。如果不调用此方法，文档构建器将从当前进程目录中查找资源。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.Initialize` 方法。

## 语法

```py
def Initialize(cls, str directory = None);
```

## 参数

| 参数      | 类型   | 默认值 | 描述                          |
| --------- | ------ | ------ | ----------------------------- |
| directory | str    | None   | 主文档构建器资源的路径。      |

## 示例

### Python

```py
import docbuilder

docbuilder.CDocBuilder.Initialize("../documentBuilder")
builder = docbuilder.CDocBuilder()
docbuilder.CDocBuilder.Dispose()
```