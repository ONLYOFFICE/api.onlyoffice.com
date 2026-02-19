# CreateObject（创建对象）

创建一个空对象，类似于 JavaScript 中的 `{}`。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderContext.CreateObject` 方法。

## 语法

```cpp
HRESULT CreateObject([out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

| 参数   | 类型                                                            | 描述                 |
| ------ | --------------------------------------------------------------- | -------------------- |
| result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 用于存储创建的空对象的指针 |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oContent = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateObject(&oContent);
oBuilder->Dispose();
```