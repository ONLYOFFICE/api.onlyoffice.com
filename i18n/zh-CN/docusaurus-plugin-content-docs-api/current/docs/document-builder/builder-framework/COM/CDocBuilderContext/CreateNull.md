# CreateNull

创建一个空值，类似于 JS 中的 `null`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateNull` 方法。

## 语法

```cpp
HRESULT CreateNull([out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

| 参数   | 类型                                                            | 描述                 |
| ------ | --------------------------------------------------------------- | -------------------- |
| result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 用于存储创建的空值的指针 |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oContent = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateNull(&oContent);
oBuilder->Dispose();
```