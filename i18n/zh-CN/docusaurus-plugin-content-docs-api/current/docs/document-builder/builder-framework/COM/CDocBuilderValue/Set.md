# Set（设置）

通过索引设置数组的值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Set` 方法。

## 语法

```cpp
HRESULT Set([in] long index, [in] I_DOCBUILDER_VALUE** value);
```

## 参数

| 参数   | 类型                                                            | 描述               |
| ------ | --------------------------------------------------------------- | ------------------ |
| index  | long                                                            | 数组值的索引。     |
| value  | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 要设置的数组值。   |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
IONLYOFFICEDocBuilderValue* oDocument = NULL;
IONLYOFFICEDocBuilderValue* aParagraphs = NULL;
IONLYOFFICEDocBuilderValue* oParagraph = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
oDocument->Call(_bstr_t("GetAllParagraphs"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &aParagraphs);
oApi->Call(_bstr_t("CreateParagraph"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oParagraph);
aParagraphs->Set(1, oParagraph);
oBuilder->Dispose();
```