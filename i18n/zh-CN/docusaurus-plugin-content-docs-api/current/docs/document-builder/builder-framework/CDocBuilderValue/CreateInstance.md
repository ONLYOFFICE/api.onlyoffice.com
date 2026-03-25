# CreateInstance

创建 `CDocBuilderValue` 类的实例。

:::note
此方法仅适用于 **COM**。
:::

## 语法

```cpp
HRESULT CreateInstance([in, optional] VARIANT value);
```

## 参数

| 名称  | 类型    | 描述                         |
| ----- | ------- | ---------------------------- |
| value | VARIANT | 用于创建实例的值。           |

## 示例

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
CoCreateInstance(__uuidof(CONLYOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IONLYOFFICEDocBuilder), (void**)&oBuilder);
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
IONLYOFFICEDocBuilderValue* oDocument = NULL;
IONLYOFFICEDocBuilderValue* oParagraph = NULL;
I_DOCBUILDER_VALUE* p1 = NULL;
CoCreateInstance(__uuidof(CONLYOFFICEDocBuilderValue), NULL, CLSCTX_INPROC_SERVER, __uuidof(I_DOCBUILDER_VALUE), (void**)&p1);
p1->CreateInstance(1000);
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
oApi->Call(_bstr_t("CreateParagraph"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oParagraph);
oParagraph->Call(_bstr_t("SetSpacingAfter"), p1, ATL::CComVariant(VARIANT_FALSE), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), NULL);
oBuilder->Dispose();
```
