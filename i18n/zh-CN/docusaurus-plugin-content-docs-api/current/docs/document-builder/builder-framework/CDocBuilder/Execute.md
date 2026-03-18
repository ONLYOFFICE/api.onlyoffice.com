# Execute

执行用于创建文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的命令。有关各种文档类型可用命令的更多信息，请参阅 [文本文档 API](/docs/office-api/usage-api/text-document-api/text-document-api.md)、[电子表格 API](/docs/office-api/usage-api/spreadsheet-api/spreadsheet-api.md)、[演示文稿 API](/docs/office-api/usage-api/presentation-api/presentation-api.md) 或 [表单 API](/docs/office-api/usage-api/form-api/form-api.md) 部分。

:::note
此方法仅适用于 COM。
:::

## 语法

```cpp
HRESULT Execute([in] BSTR command, [out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

| 名称    | 类型                                                            | 描述                                                                     |
| ------- | --------------------------------------------------------------- | ------------------------------------------------------------------------ |
| command | BSTR                                                            | 用于创建文档文件的命令（当命令包含引号时必须使用转义字符）。             |
| result  | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 命令返回值。                                                             |

## 示例

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
IONLYOFFICEDocBuilderValue* oRun = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->CreateFile(_bstr_t("docx"), &b);
oBuilder->Execute(_bstr_t("var oDocument = Api.GetDocument();var oParagraph = oDocument.GetElement(0);oParagraph.AddText(\"Hello, world!\");"), &oRun);
oBuilder->SaveFile(_bstr_t("docx"), _bstr_t("result.docx"), &b);
oBuilder->CloseFile();
oBuilder->Dispose();
```
