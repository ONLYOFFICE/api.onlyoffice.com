# Initialize (初始化)

将 ONLYOFFICE Document Builder 初始化为库，以便应用程序能够使用它。此方法仅设置主 Document Builder 资源（icu 文件等）的目录。如果不调用此方法，Document Builder 将从当前进程目录中查找资源。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.Initialize` 方法。

## 语法

```cs
static void Initialize(String^ sDirectory = 0);
```

## 参数

| 参数       | 类型     | 默认值 | 描述                                  |
| ---------- | -------- | ------ | ------------------------------------- |
| sDirectory | String^  | 0      | 主 Document Builder 资源的路径。      |

## 示例

### .Net

``` cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CDocBuilder.Destroy();
```