# ToString（转换为字符串）

将 `CDocBuilderValue` 对象转换为字符串。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.ToString` 方法。

## 语法

```cpp
HRESULT ToString([out, retval] BSTR* result);
```

## 参数

| 参数   | 类型   | 描述             |
| ------ | ------ | ---------------- |
| result | BSTR*  | 返回的字符串值。 |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
BSTR str;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->ToString(&str);
oBuilder->Dispose();
```