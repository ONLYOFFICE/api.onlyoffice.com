# ToDouble（转换为双精度浮点数）

将 `CDocBuilderValue` 对象转换为双精度浮点数。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToDouble` 方法。

## 语法

```cpp
HRESULT ToDouble([out, retval] double* result);
```

## 参数

| 参数   | 类型     | 描述                 |
| ------ | -------- | -------------------- |
| result | double* | 返回的双精度浮点数。 |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
double dbl;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->ToDouble(&dbl);
oBuilder->Dispose();
```