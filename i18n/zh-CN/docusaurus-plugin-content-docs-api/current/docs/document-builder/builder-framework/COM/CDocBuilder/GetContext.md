# GetContext

返回当前的 JS [上下文](../CDocBuilderContext/CDocBuilderContext.md)。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.GetContext` 方法。

## 语法

```cpp
HRESULT GetContext([out, retval] I_DOCBUILDER_CONTEXT** result);
```

## 参数

| **名称** | **类型**                                                                | **描述**       |
| -------- | ----------------------------------------------------------------------- | -------------- |
| result   | [I_DOCBUILDER_CONTEXT**](../CDocBuilderContext/CDocBuilderContext.md) | 返回的 JS 上下文。 |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
oBuilder->GetContext(&oContext);
oBuilder->Dispose();
```