# 设置属性

设置文档属性。

## 语法

```javascript
expression.SetProperties(obj);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | 必填 | object |  | 文档属性对象。 |
| obj.copyoutenabled | 必填 | boolean |  | 如果设置为 **false**，则禁止从编辑器中复制内容。 |
| obj.hideContentControlTrack | 必填 | boolean |  | 如果设置为 **true**，则禁用内容控件的更改跟踪功能。 |
| obj.watermark_on_draw | 必填 | string |  | 以 JSON 格式表示的[绘图水印](../Enumeration/watermark_on_draw.md)字符串值。 |
| obj.disableAutostartMacros | 必填 | boolean |  | 设置一个标志，指示是否在打开编辑器时自动启动宏。 |
| obj.fillForms | 必填 | string |  | 以 JSON 格式设置用于通过标签填写文档[表单](../Enumeration/fillForms.md)的规则。 |

## 返回值

此方法不返回任何值。

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
