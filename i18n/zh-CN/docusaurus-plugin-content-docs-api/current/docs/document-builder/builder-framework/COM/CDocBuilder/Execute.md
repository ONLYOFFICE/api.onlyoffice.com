import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Execute（执行）

执行用于创建文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的命令。有关各种文档类型可用的命令的更多信息，请参见[文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或[表单 API](/docs/office-api/usage-api/form-api/form-api.md)部分。

> 请注意，对于 `.docbuilder` 文件，不会显式使用 `CDocBuilder.Execute` 方法。而是直接使用命令本身。请参见下面的示例。

## 语法

```cpp
HRESULT Execute([in] BSTR command, [out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

|**名称**|**类型**|**描述**|
|----|----|----|
|command|BSTR|用于创建文档文件的命令（当命令包含引号时，必须使用转义字符）。|
|result|[I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md)|命令的返回值。|

## 示例

<Tabs>
    <TabItem value="com" label="COM">
        ```cpp
        CoInitialize(NULL);
        IONLYOFFICEDocBuilder* oBuilder = NULL;
        IONLYOFFICEDocBuilderValue* oRun = NULL;
        oBuilder->Initialize();
        oBuilder->Execute(L"oParagraph.AddText(\"Hello, world!\");", &oRun);
        oBuilder->Dispose();
        ```
    </TabItem>
    <TabItem value="builder" label=".docbuilder">
        ```ts
        paragraph.AddText("Hello, world!");
        ```
    </TabItem>
</Tabs>
