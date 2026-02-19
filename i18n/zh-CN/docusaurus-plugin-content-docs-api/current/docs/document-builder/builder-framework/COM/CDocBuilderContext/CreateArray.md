# CreateArray（创建数组）

创建一个数组值，类似于 JavaScript 中的 `new Array(length)`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateArray` 方法。

## 语法

```cpp
HRESULT CreateArray([in] long length, [out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

| 参数   | 类型                                                            | 描述         |
| ------ | --------------------------------------------------------------- | ------------ |
| length | long                                                            | 数组的长度。 |
| result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 返回的数组。 |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oContent = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateArray(1, &oContent);
oBuilder->Dispose();
```