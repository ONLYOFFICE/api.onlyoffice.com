# ToBool

将 `CDocBuilderValue` 对象转换为布尔值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToBool` 方法。

## 语法

```cpp
HRESULT ToBool([out, retval] VARIANT_BOOL* result);
```

## 参数

| 参数   | 类型          | 描述                 |
| ------ | ------------- | -------------------- |
| result | VARIANT_BOOL* | 返回的布尔值。       |

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
oGlobal->ToBool(&b);
oBuilder->Dispose();
```