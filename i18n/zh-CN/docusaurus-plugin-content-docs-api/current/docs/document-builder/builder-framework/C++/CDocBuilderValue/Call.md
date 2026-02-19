import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Call（调用）

调用指定的文档构建器方法。有关各种文档类型可用的方法，请参阅[文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或 [表单 API](/docs/office-api/usage-api/form-api/form-api.md) 部分。

> 请注意，对于 `.docbuilder` 文件，不会显式使用 `CDocBuilderValue.Call` 方法。而是直接使用该方法本身。请参见下面的示例。

## 语法

```cpp
CDocBuilderValue Call(const wchar_t* | const char* sName, CDocBuilderValue p1, CDocBuilderValue p2, CDocBuilderValue p3, CDocBuilderValue p4, CDocBuilderValue p5, CDocBuilderValue p6);
```

## 参数

| **名称** | **数据类型**                                                 | **描述**                                  |
| -------- | ------------------------------------------------------------ | ----------------------------------------- |
| sName    | const wchar_t* \| const char*                                | 文档构建器方法的名称，采用 Unicode 或 UTF8 格式。 |
| p1-p6    | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md)  | 文档构建器方法作为参数接收的参数。        |

## 示例

<Tabs>
    <TabItem value="cpp" label="C++">
        ```cpp
        std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
        CDocBuilder::Initialize(sWorkDirectory.c_str());
        CDocBuilder oBuilder;
        CContext oContext = oBuilder.GetContext();
        CValue oGlobal = oContext.GetGlobal();
        CValue oApi = oGlobal["Api"];
        CValue oDocument = oApi.Call("GetDocument");
        CDocBuilder::Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        let doc = Api.GetDocument();
        ```
    </TabItem>
</Tabs>
