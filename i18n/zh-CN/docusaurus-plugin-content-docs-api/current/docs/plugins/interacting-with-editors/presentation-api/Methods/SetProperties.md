# SetProperties

为文档设置属性。

## 语法

```javascript
expression.SetProperties(obj);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | 必需 | object |  | 文档属性。 |
| obj.copyoutenabled | 必需 | boolean |  | 如果设置为 **false**，则禁止从编辑器复制。 |
| obj.hideContentControlTrack | 必需 | boolean |  | 如果设置为 **true**，则禁止跟踪内容控件。 |
| obj.watermark_on_draw | 必需 | string |  | JSON 格式的[水印](../Enumeration/watermark_on_draw.md)字符串值。 |
| obj.disableAutostartMacros | 必需 | boolean |  | 设置一个标志，指定编辑器打开时自动启动宏。 |
| obj.fillForms | 必需 | string |  | 设置 JSON 格式的规则，用于按标签填写文档[表单](../Enumeration/fillForms.md)。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
var initSettings = {
    "copyoutenabled" : false,
    "hideContentControlTrack" : false,
    "watermark_on_draw" : JSON.stringify ( {
        "transparent" : 0.3,
        "type" : "rect",
        "width" : 100,
        "height" : 100,
        "rotate" : -45,
        "margins" : [ 10, 10, 10, 10 ],
        "fill" : [255, 0, 0],
        "stroke-width" : 1,
        "stroke" : [0, 0, 255],
        "align" : 1,

        "paragraphs" : [ {
            "align" : 2,
            "fill" : [255, 0, 0],
            "linespacing" : 1,

            "runs" : [
                        {
                            "text" : "Do not steal, %user_name%!",
                            "fill" : [0, 0, 0],
                            "font-family" : "Arial",
                            "font-size" : 40,
                            "bold" : true,
                            "italic" : false,
                            "strikeout" : false,
                            "underline" : false
                        },
                        {
                            "text" : "<%br%>"
                        }
                    ]
            }
        ]
    }),
    "disableAutostartMacros" : true,
    "fillForms" : JSON.stringify ( {
        "tags" : {
            "111" : {
                "text" : "Text in form with tag 111",
                "checkBox" : "true",
                "picture" : "https://upload.wikimedia.org/wikipedia/commons/9/91/ONLYOFFICE_logo.png",
                "comboBox" : "item1"
            },
            "222" : {
                "text" : "Text in form with tag 222",
                "checkBox" : "false",
                "comboBox" : "item2"
            },
            "333" : {
                "text" : "OnlyOffice"
            }
        }
    })
};
window.Asc.plugin.executeMethod ("SetProperties", [initSettings], function () {
    window.Asc.plugin.executeCommand ("close", "");
});
```
