# CreateUndefined

创建一个未定义值，类似于 JS 中的 `undefined`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateUndefined` 方法。

## 语法

```cpp
HRESULT CreateUndefined([out, retval] I_DOCBUILDER_VALUE** result);
```

## 参数

| 参数   | 类型                                                            | 描述               |
| ------ | --------------------------------------------------------------- | ------------------ |
| result | [I_DOCBUILDER_VALUE**](../CDocBuilderValue/CDocBuilderValue.md) | 返回的未定义值。   |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oContent = NULL;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->CreateUndefined(&oContent);
oBuilder->Dispose();
```