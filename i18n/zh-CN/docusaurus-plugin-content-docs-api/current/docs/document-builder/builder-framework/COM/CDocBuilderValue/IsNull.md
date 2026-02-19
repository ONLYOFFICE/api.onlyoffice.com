# IsNull（是否为空）

如果 `CDocBuilderValue` 对象为 null，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsNull` 方法。

## 语法

```cpp
HRESULT IsNull([out, retval] VARIANT_BOOL* result);
```

## 参数

| 参数   | 类型          | 描述                                      |
| ------ | ------------- | ----------------------------------------- |
| result | VARIANT_BOOL* | 指定 `CDocBuilderValue` 对象是否为 null。 |

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
oGlobal->IsNull(&b);
oBuilder->Dispose();
```