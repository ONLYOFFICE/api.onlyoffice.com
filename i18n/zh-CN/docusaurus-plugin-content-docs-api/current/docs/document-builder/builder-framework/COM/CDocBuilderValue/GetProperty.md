# GetProperty（获取属性）

返回`CDocBuilderValue`对象的一个属性。

> 请注意，在`.docbuilder`文件中不使用`CDocBuilderValue.GetProperty`方法。

## 语法

```cpp
HRESULT GetProperty([in] BSTR name, [out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

| 参数   | 类型                                                            | 描述                                       |
| ------ | --------------------------------------------------------------- | ------------------------------------------ |
| name   | BSTR                                                            | `CDocBuilderValue`对象属性的名称。         |
| result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 返回的对象属性。                           |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
IONLYOFFICEDocBuilderValue* oApi = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->GetProperty(_bstr_t("Api"), &oApi);
oBuilder->Dispose();
```