# IsString

如果 `CDocBuilderValue` 对象是字符串，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsString` 方法。

## 语法

```cpp
HRESULT IsString([out, retval] VARIANT_BOOL* result);
```

## 参数

| 参数   | 类型          | 描述                                                |
| ------ | ------------- | --------------------------------------------------- |
| result | VARIANT_BOOL* | 指定 `CDocBuilderValue` 对象是否为字符串。          |

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
oGlobal->IsString(&b);
oBuilder->Dispose();
```