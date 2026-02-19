# Initialize (初始化)

初始化 ONLYOFFICE 文档生成器作为一个库，以便应用程序能够使用它。此方法仅设置主文档生成器资源（icu 文件等）的目录。如果不调用此方法，文档生成器将从当前进程目录中查找资源。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.Initialize` 方法。

## 语法

```cpp
static void Initialize(const wchar_t* sDirectory = 0);
```

## 参数

| **名称**    | **数据类型**    | **默认值** | **描述**                  |
| ----------- | --------------- | ---------- | ------------------------- |
| sDirectory  | const wchar_t*  | 0          | 主文档生成器资源的路径。  |

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CDocBuilder::Dispose();
```