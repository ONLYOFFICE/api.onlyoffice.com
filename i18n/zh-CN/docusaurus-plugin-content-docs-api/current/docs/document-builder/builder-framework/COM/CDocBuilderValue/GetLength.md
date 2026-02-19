# GetLength

如果 `CDocBuilderValue` 对象是数组/类型化数组，则返回其长度。否则，返回 0。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.GetLength` 方法。

## 语法

```cpp
HRESULT GetLength([out, retval] long* result);
```

## 参数

| 参数   | 类型   | 描述                 |
| ------ | ------ | -------------------- |
| result | long*  | 返回的对象长度。     |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
IONLYOFFICEDocBuilderValue* oDocument = NULL;
IONLYOFFICEDocBuilderValue* aCharts = NULL;
IONLYOFFICEDocBuilderValue* nLength = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oApi->Call(_bstr_t("GetDocument"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &oDocument);
oDocument->Call(_bstr_t("GetAllCharts"), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), ATL::CComVariant(), &aCharts);
aCharts->GetLength(&nLength);
oBuilder->Dispose();
```