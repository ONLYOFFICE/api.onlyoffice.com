# IsError

检查JS中的错误。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.IsError` 方法。

## 语法

```cpp
HRESULT IsError([out, retval] VARIANT_BOOL* result);
```

## 参数

| 参数   | 类型          | 描述                 |
| ------ | ------------- | -------------------- |
| result | VARIANT_BOOL* | 指定是否发生错误     |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->IsError(&b);
oBuilder->Dispose();
```