# Clear（清除）

清除 `CDocBuilderValue` 对象。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Clear` 方法。

## 语法

```cpp
HRESULT Clear();
```

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
IONLYOFFICEDocBuilderValue* oDocument = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
oDocument->Clear();
oBuilder->Dispose();
```