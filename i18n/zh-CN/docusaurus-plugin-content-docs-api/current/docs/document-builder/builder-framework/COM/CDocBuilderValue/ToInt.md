# ToInt（转为整数）

将 `CDocBuilderValue` 对象转换为整数。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderValue.ToInt` 方法。

## 语法

```cpp
HRESULT ToInt([out, retval] long* result);
```

## 参数

| 参数   | 类型   | 描述                 |
| ------ | ------ | -------------------- |
| result | long* | 返回的整数值。       |

## 示例

### COM

```cpp
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
IONLYOFFICEDocBuilderValue* oGlobal = NULL;
long l;
oBuilder->Initialize();
oBuilder->GetContext(&oContext);
oContext->GetGlobal(&oGlobal);
oGlobal->ToInt(&l);
oBuilder->Dispose();
```