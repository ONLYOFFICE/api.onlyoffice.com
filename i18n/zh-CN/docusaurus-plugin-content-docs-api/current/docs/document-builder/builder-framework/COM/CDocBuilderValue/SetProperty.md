# SetProperty（设置属性）

为 `CDocBuilderValue` 对象设置一个属性。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.SetProperty` 方法。

## 语法

```cpp
HRESULT SetProperty([in] BSTR name, [in] I_DOCBUILDER_VALUE** value);
```

## 参数

| 参数   | 类型                                                          | 描述                                                |
| ------ | ------------------------------------------------------------- | --------------------------------------------------- |
| name   | BSTR                                                          | `CDocBuilderValue` 对象属性的名称。                 |
| value  | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | `CDocBuilderValue` 对象属性的值。                   |

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
oDocument->SetProperty("color", {"zX":{"red":112,"green":173,"blue":71,"alpha":255},"type":"srgb","Zvf":null,"type":"uniColor"});
oBuilder->Dispose();
```