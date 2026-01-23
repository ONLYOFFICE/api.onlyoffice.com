# GetGlobal

返回当前上下文的全局对象。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.GetGlobal` 方法。

## 语法

```cpp
HRESULT GetGlobal([out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

| 参数   | 类型                                                            | 描述         |
| ------ | --------------------------------------------------------------- | ------------ |
| result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 返回的全局对象 |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oBuilder->Dispose();
```