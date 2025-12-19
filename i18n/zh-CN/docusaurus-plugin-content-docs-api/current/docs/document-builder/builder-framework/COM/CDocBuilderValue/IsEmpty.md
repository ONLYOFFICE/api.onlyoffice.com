# IsEmpty（为空）

如果 `CDocBuilderValue` 对象为空，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsEmpty` 方法。

## 语法

```cpp
HRESULT IsEmpty([out, retval] VARIANT_BOOL* result);
```

## 参数

| 参数   | 类型          | 描述                                       |
| ------ | ------------- | ------------------------------------------ |
| result | VARIANT_BOOL* | 指定 `CDocBuilderValue` 对象是否为空。 |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
VARIANT_BOOL b;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->IsEmpty(&b);
oBuilder->Dispose();
```