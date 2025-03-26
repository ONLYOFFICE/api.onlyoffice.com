---
sidebar_position: -10
---

# 配置

您可以在配置文件中查找和更改所有必要的，该文件可以在以下路径中找到（或创建）：

对于 Linux - `/etc/onlyoffice/documentserver/local.json`.

对于 Windows - `%ProgramFiles%\ONLYOFFICE\DocumentServer\config\local.json`.

> 默认值在 `default.json` 配置文件中可用，该文件位于上述文件夹中（适用于 Linux 和 Windows）。请不要直接编辑 `default.json` 文件的内容。每次重新启动 Docker 容器或将 **ONLYOFFICE 文档**升级到新版本时都会恢复默认值，并且所有更改都将丢失。

重新启动服务以使配置更改生效：

对于 RPM/DEB 软件包：

``` sh
systemctl restart ds-*
```

对于 Docker:

``` sh
supervisorctl restart all
```

## 参数

### wopi.enable

定义是否启用 WOPI。

类型: boolean

示例: false

### wopi.host

定义 WOPI 主机（主机名或 IP 地址）。

类型: string

示例: ""

### wopi.htmlTemplate

定义 WOPI HTML 模板的路径。

类型: string

示例: "../../web-apps/apps/api/wopi"

### wopi.wopiZone

定义文档服务器用于将浏览器导航到 WOPI 应用程序的区域。

类型: string

示例: "external-http"

### wopi.favIconUrlWord

定义文档编辑器的图标路径。

类型: string

示例: "/web-apps/apps/documenteditor/main/resources/img/favicon.ico"

### wopi.favIconUrlCell

定义电子表格编辑器的图标路径。

类型: string

示例: "/web-apps/apps/spreadsheeteditor/main/resources/img/favicon.ico"

### wopi.favIconUrlSlide

定义演示文稿编辑器的图标路径。

类型: string

示例: "/web-apps/apps/presentationeditor/main/resources/img/favicon.ico"

### wopi.favIconUrlPdf

定义 pdf 编辑器的图标路径。

类型: string

示例: "/web-apps/apps/pdfeditor/main/resources/img/favicon.ico"

### wopi.fileInfoBlockList

定义 WOPI 文件信息参数列表，在将此数组发送到浏览器时会被阻止。但是，这些参数在服务器上可用。

类型: array of strings

示例: \["FileUrl"]

### wopi.pdfView

定义可以在 pdf 编辑器中查看的文件类型。

类型: array of strings

示例: \["djvu", "xps", "oxps"]

### wopi.pdfEdit

定义可以在 pdf 编辑器中编辑的文件类型。

类型: array of strings

示例: \["pdf"]

### wopi.forms

定义表单文件类型。

类型: array of strings

示例: \["pdf"]

### wopi.wordView

定义可以在文档编辑器中查看的文件类型。

类型: array of strings

示例: \["doc", "dotm", "dot", "fodt", "ott", "rtf", "mht", "mhtml", "html", "htm", "xml", "epub", "fb2", "sxw", "stw", "wps", "wpt", "docxf", "oform"]

### wopi.wordEdit

定义可以在文档编辑器中编辑的文件类型。

类型: array of strings

示例: \["docx", "dotx", "docm", "odt", "txt"]

### wopi.cellView

定义可以在电子表格编辑器中查看的文件类型。

类型: array of strings

示例: \["xls", "xlsb", "xltm", "xlt", "fods", "ots", "sxc", "xml", "et", "ett"]

### wopi.cellEdit

定义可以在电子表格编辑器中编辑的文件类型。

类型: array of strings

示例: \["xlsx", "xltx", "xlsm", "ods", "csv"]

### wopi.slideView

定义可以在演示文稿编辑器中查看的文件类型。

类型: array of strings

示例: \["ppt", "ppsx", "ppsm", "pps", "potm", "pot", "fodp", "otp", "sxi", "dps", "dpt"]

### wopi.slideEdit

定义可以在演示文稿编辑器中编辑的文件类型。

类型: array of strings

示例: \["pptx", "potx", "pptm", "odp"]

### wopi.publicKey

定义集成商用来检查私钥的公钥。

类型: string

示例: "BgIAAACkAABSU0ExAAgAAAEAAQBpTpiJQ2hD8plpGTfEEmcq4IKyr31HikXpuVSBraMfqyodn2PGXBJ3daNSmdPOc0Nz4HO9Auljn8YYXDPBdpiABptSKvEDPF23Q+Qytg0+vCRyondyBcW91w7KLzXce3fnk8ZfJ8QtbZPL9m11wJIWZueQF+l0HKYx4lty+nccbCanytFTADkGQ3SnmExGEF3rBz6I9+OcrDDK9NKPJgEmCiuyei/d4XbPgKls3EIG0h38X5mVF2VytfWm2Yu850B6z3N4MYhj4b4vsYT62zEC4pMRUeb8dIBy4Jsmr3avtmeO00MUH6DVyPC8nirixj2YIOPKk13CdVqGDSXA3cvl"

### wopi.modulus

定义用于检索公钥的 Base64 编码格式的 RSA 模数。

类型: string

示例: "5cvdwCUNhlp1wl2TyuMgmD3G4iqevPDI1aAfFEPTjme2r3avJpvgcoB0/OZREZPiAjHb+oSxL77hY4gxeHPPekDnvIvZpvW1cmUXlZlf/B3SBkLcbKmAz3bh3S96sisKJgEmj9L0yjCsnOP3iD4H610QRkyYp3RDBjkAU9HKpyZsHHf6clviMaYcdOkXkOdmFpLAdW32y5NtLcQnX8aT53d73DUvyg7XvcUFcneiciS8Pg22MuRDt108A/EqUpsGgJh2wTNcGMafY+kCvXPgc0NzztOZUqN1dxJcxmOfHSqrH6OtgVS56UWKR32vsoLgKmcSxDcZaZnyQ2hDiZhOaQ=="

### wopi.exponent

定义用于检索公钥的 Base64 编码格式的 RSA 指数。

类型: string

示例: "65537"

### wopi.privateKey

定义签署文档服务器请求的私钥。

类型: string

示例: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDly93AJQ2GWnXC\nXZPK4yCYPcbiKp688MjVoB8UQ9OOZ7avdq8mm+BygHT85lERk+ICMdv6hLEvvuFj\niDF4c896QOe8i9mm9bVyZReVmV/8HdIGQtxsqYDPduHdL3qyKwomASaP0vTKMKyc\n4/eIPgfrXRBGTJindEMGOQBT0cqnJmwcd/pyW+Ixphx06ReQ52YWksB1bfbLk20t\nxCdfxpPnd3vcNS/KDte9xQVyd6JyJLw+DbYy5EO3XTwD8SpSmwaAmHbBM1wYxp9j\n6QK9c+BzQ3PO05lSo3V3ElzGY58dKqsfo62BVLnpRYpHfa+yguAqZxLENxlpmfJD\naEOJmE5pAgMBAAECggEALiL+RKOr0Xu8BOgQ0j1DwA03LxVrhXe6etmJI+JySTcd\ngKENjWziZVrRIi2DvUm5qMMl7WhSwslKK1eexxZJY7xASqSxcEoIwgz17T07/jxm\nfIdUBiUKDZ1Kv8PWmIr3oKW+fkXWi/m1zlIe0qXRpTmsGNEsHQLEqi0rmaiXTXOR\n/2Ldwi6kZR3sWFx97YS4Mx/pueGJTXEai6AVEZzN5Gog6xD8HXR1Rvq+hhd+MocG\nfnU4HgilKRfoJlWd9FOscgSufKG0L3ViO4fSKU46l5aullDYUk5ECMWiwuKSqSE7\nqD45jI3mbOre7S4u3S3TWdD3lzwiXL49LdwKlEC4mQKBgQD0sLr0GH4Wr+QX2xJE\nuA/Cb8QW41l8iSCBTRZZR/sJOd+o3rbcVidlzO/EbZblXG4ZPDmRjgBCGKIP5EZi\n0DsL+Wv32WOo44LpxJGhqExbm0H1iZ1zZ97l0P8fvIhHE42gmaLToOIGDhPSXGvv\nzlqOHbGbq4jsERc1jp1bej5q6wKBgQDwaueIc4pRchH98QYidcyr8Vwg9KhbnfYX\ny3W4RPlZtBdF34iJaio+ASzugo/zy1RTcVrsCskYWXyKDUQz1yu0iCng+fDCUnTm\nXGmEoEGNhk4vTJOt7hBav1/Ja/dUipGf6mXUuanwJ0e+1/Et/B0ah5X1Um5AyNZI\nM+SyRz3u+wKBgQCjvtUNXoqaghCBCmB6TjZ1prexnWkYFugCv2SSUMIk1W7gIlJ6\ntsjcrj1R1Qii6qzfBFd+GWoA0V06h0e2/qRVCg//p6GytrW33IycgvS+ZPLJ7tLI\nFR2r66WfRlpoPiSL8eRt/P7kkG0hXCn7K7ub2TEu/Ka/W1yNwad6PR8iCwKBgQC8\nXcZSrtQsxAc8w99emJVoEo9wcsCGJ9ltA0iUu9XyZpvlbyJ3J+s48YrWxQ0sop7L\nUgE+96Rfo51kPMi3JVtk81p8ntf4KMrWwokaFMXHsPcJMCJ1IBVIRLE0C5eZcYhv\nlyN57I4tT1lzOZYJxYK4Cot/zrn7oF/j6mTBGfh4iQKBgQCiJMUxRz01/czH/XSX\ngo3dVbHQ4FEOufWnE3Eb93S8r0/eq1RM118rb0TqzuiadW2xYDU4nucWQlrlmq0d\nFY/m+Hy97pqyk6jmoU5I/D+ssBIoYHWLnH9/xfvDEk2JGSJSHtzu0D4EDC/rgQ49\nMbYsO5oUrF8tPlhj5vzbf3GKLA==\n-----END PRIVATE KEY-----\n"

### wopi.publicKeyOld

定义集成商用来检查私钥的旧公钥。

类型: string

示例: "BgIAAACkAABSU0ExAAgAAAEAAQBpTpiJQ2hD8plpGTfEEmcq4IKyr31HikXpuVSBraMfqyodn2PGXBJ3daNSmdPOc0Nz4HO9Auljn8YYXDPBdpiABptSKvEDPF23Q+Qytg0+vCRyondyBcW91w7KLzXce3fnk8ZfJ8QtbZPL9m11wJIWZueQF+l0HKYx4lty+nccbCanytFTADkGQ3SnmExGEF3rBz6I9+OcrDDK9NKPJgEmCiuyei/d4XbPgKls3EIG0h38X5mVF2VytfWm2Yu850B6z3N4MYhj4b4vsYT62zEC4pMRUeb8dIBy4Jsmr3avtmeO00MUH6DVyPC8nirixj2YIOPKk13CdVqGDSXA3cvl"

### wopi.modulusOld

定义用于检索公钥的 Base64 编码格式的旧 RSA 模数。

类型: string

示例: "5cvdwCUNhlp1wl2TyuMgmD3G4iqevPDI1aAfFEPTjme2r3avJpvgcoB0/OZREZPiAjHb+oSxL77hY4gxeHPPekDnvIvZpvW1cmUXlZlf/B3SBkLcbKmAz3bh3S96sisKJgEmj9L0yjCsnOP3iD4H610QRkyYp3RDBjkAU9HKpyZsHHf6clviMaYcdOkXkOdmFpLAdW32y5NtLcQnX8aT53d73DUvyg7XvcUFcneiciS8Pg22MuRDt108A/EqUpsGgJh2wTNcGMafY+kCvXPgc0NzztOZUqN1dxJcxmOfHSqrH6OtgVS56UWKR32vsoLgKmcSxDcZaZnyQ2hDiZhOaQ=="

### wopi.exponentOld

定义用于检索公钥的 Base64 编码格式的旧 RSA 指数。

类型: string

示例: "65537"

### wopi.privateKeyOld

定义签署文档服务器请求的旧私钥。

类型: string

示例: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDly93AJQ2GWnXC\nXZPK4yCYPcbiKp688MjVoB8UQ9OOZ7avdq8mm+BygHT85lERk+ICMdv6hLEvvuFj\niDF4c896QOe8i9mm9bVyZReVmV/8HdIGQtxsqYDPduHdL3qyKwomASaP0vTKMKyc\n4/eIPgfrXRBGTJindEMGOQBT0cqnJmwcd/pyW+Ixphx06ReQ52YWksB1bfbLk20t\nxCdfxpPnd3vcNS/KDte9xQVyd6JyJLw+DbYy5EO3XTwD8SpSmwaAmHbBM1wYxp9j\n6QK9c+BzQ3PO05lSo3V3ElzGY58dKqsfo62BVLnpRYpHfa+yguAqZxLENxlpmfJD\naEOJmE5pAgMBAAECggEALiL+RKOr0Xu8BOgQ0j1DwA03LxVrhXe6etmJI+JySTcd\ngKENjWziZVrRIi2DvUm5qMMl7WhSwslKK1eexxZJY7xASqSxcEoIwgz17T07/jxm\nfIdUBiUKDZ1Kv8PWmIr3oKW+fkXWi/m1zlIe0qXRpTmsGNEsHQLEqi0rmaiXTXOR\n/2Ldwi6kZR3sWFx97YS4Mx/pueGJTXEai6AVEZzN5Gog6xD8HXR1Rvq+hhd+MocG\nfnU4HgilKRfoJlWd9FOscgSufKG0L3ViO4fSKU46l5aullDYUk5ECMWiwuKSqSE7\nqD45jI3mbOre7S4u3S3TWdD3lzwiXL49LdwKlEC4mQKBgQD0sLr0GH4Wr+QX2xJE\nuA/Cb8QW41l8iSCBTRZZR/sJOd+o3rbcVidlzO/EbZblXG4ZPDmRjgBCGKIP5EZi\n0DsL+Wv32WOo44LpxJGhqExbm0H1iZ1zZ97l0P8fvIhHE42gmaLToOIGDhPSXGvv\nzlqOHbGbq4jsERc1jp1bej5q6wKBgQDwaueIc4pRchH98QYidcyr8Vwg9KhbnfYX\ny3W4RPlZtBdF34iJaio+ASzugo/zy1RTcVrsCskYWXyKDUQz1yu0iCng+fDCUnTm\nXGmEoEGNhk4vTJOt7hBav1/Ja/dUipGf6mXUuanwJ0e+1/Et/B0ah5X1Um5AyNZI\nM+SyRz3u+wKBgQCjvtUNXoqaghCBCmB6TjZ1prexnWkYFugCv2SSUMIk1W7gIlJ6\ntsjcrj1R1Qii6qzfBFd+GWoA0V06h0e2/qRVCg//p6GytrW33IycgvS+ZPLJ7tLI\nFR2r66WfRlpoPiSL8eRt/P7kkG0hXCn7K7ub2TEu/Ka/W1yNwad6PR8iCwKBgQC8\nXcZSrtQsxAc8w99emJVoEo9wcsCGJ9ltA0iUu9XyZpvlbyJ3J+s48YrWxQ0sop7L\nUgE+96Rfo51kPMi3JVtk81p8ntf4KMrWwokaFMXHsPcJMCJ1IBVIRLE0C5eZcYhv\nlyN57I4tT1lzOZYJxYK4Cot/zrn7oF/j6mTBGfh4iQKBgQCiJMUxRz01/czH/XSX\ngo3dVbHQ4FEOufWnE3Eb93S8r0/eq1RM118rb0TqzuiadW2xYDU4nucWQlrlmq0d\nFY/m+Hy97pqyk6jmoU5I/D+ssBIoYHWLnH9/xfvDEk2JGSJSHtzu0D4EDC/rgQ49\nMbYsO5oUrF8tPlhj5vzbf3GKLA==\n-----END PRIVATE KEY-----\n"

### wopi.refreshLockInterval

通过将文件自动过期定时器重置为 30 分钟，定义刷新文件锁定的间隔时间（以分钟为单位）。

类型: string

示例: "10m"

### wopi.dummy

定义压力测试的虚拟处理程序的属性。

类型: object

示例:

``` json
{
  "enable": false,
  "sampleFilePath": ""
}
```

### wopi.dummy.enable

定义是否启用虚拟处理程序。

类型: boolean

示例: false

### wopi.dummy.sampleFilePath

定义示例文件的虚拟路径。

类型: string

示例: ""

## 示例

``` json
{
  "wopi": {
    "enable": false,
    "host": "",
    "htmlTemplate": "../../web-apps/apps/api/wopi",
    "wopiZone": "external-http",
    "favIconUrlWord": "/web-apps/apps/documenteditor/main/resources/img/favicon.ico",
    "favIconUrlCell": "/web-apps/apps/spreadsheeteditor/main/resources/img/favicon.ico",
    "favIconUrlSlide": "/web-apps/apps/presentationeditor/main/resources/img/favicon.ico",
    "favIconUrlPdf": "/web-apps/apps/pdfeditor/main/resources/img/favicon.ico",
    "fileInfoBlockList": ["FileUrl"],
    "pdfView": ["djvu", "xps", "oxps"],
    "pdfEdit": ["pdf"],
    "forms": ["pdf"],
    "wordView": ["doc", "dotm", "dot", "fodt", "ott", "rtf", "mht", "mhtml", "html", "htm", "xml", "epub", "fb2", "sxw", "stw", "wps", "wpt", "docxf", "oform"],
    "wordEdit": ["docx", "dotx", "docm", "odt", "txt"],
    "cellView": ["xls", "xlsb", "xltm", "xlt", "fods", "ots", "sxc", "xml", "et", "ett"],
    "cellEdit": ["xlsx", "xltx", "xlsm", "ods", "csv"],
    "slideView": ["ppt", "ppsx", "ppsm", "pps", "potm", "pot", "fodp", "otp", "sxi", "dps", "dpt"],
    "slideEdit": ["pptx", "potx", "pptm", "odp"],
    "publicKey": "BgIAAACkAABSU0ExAAgAAAEAAQBpTpiJQ2hD8plpGTfEEmcq4IKyr31HikXpuVSBraMfqyodn2PGXBJ3daNSmdPOc0Nz4HO9Auljn8YYXDPBdpiABptSKvEDPF23Q+Qytg0+vCRyondyBcW91w7KLzXce3fnk8ZfJ8QtbZPL9m11wJIWZueQF+l0HKYx4lty+nccbCanytFTADkGQ3SnmExGEF3rBz6I9+OcrDDK9NKPJgEmCiuyei/d4XbPgKls3EIG0h38X5mVF2VytfWm2Yu850B6z3N4MYhj4b4vsYT62zEC4pMRUeb8dIBy4Jsmr3avtmeO00MUH6DVyPC8nirixj2YIOPKk13CdVqGDSXA3cvl",
    "modulus": "5cvdwCUNhlp1wl2TyuMgmD3G4iqevPDI1aAfFEPTjme2r3avJpvgcoB0/OZREZPiAjHb+oSxL77hY4gxeHPPekDnvIvZpvW1cmUXlZlf/B3SBkLcbKmAz3bh3S96sisKJgEmj9L0yjCsnOP3iD4H610QRkyYp3RDBjkAU9HKpyZsHHf6clviMaYcdOkXkOdmFpLAdW32y5NtLcQnX8aT53d73DUvyg7XvcUFcneiciS8Pg22MuRDt108A/EqUpsGgJh2wTNcGMafY+kCvXPgc0NzztOZUqN1dxJcxmOfHSqrH6OtgVS56UWKR32vsoLgKmcSxDcZaZnyQ2hDiZhOaQ==",
    "exponent": "65537",
    "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDly93AJQ2GWnXC\nXZPK4yCYPcbiKp688MjVoB8UQ9OOZ7avdq8mm+BygHT85lERk+ICMdv6hLEvvuFj\niDF4c896QOe8i9mm9bVyZReVmV/8HdIGQtxsqYDPduHdL3qyKwomASaP0vTKMKyc\n4/eIPgfrXRBGTJindEMGOQBT0cqnJmwcd/pyW+Ixphx06ReQ52YWksB1bfbLk20t\nxCdfxpPnd3vcNS/KDte9xQVyd6JyJLw+DbYy5EO3XTwD8SpSmwaAmHbBM1wYxp9j\n6QK9c+BzQ3PO05lSo3V3ElzGY58dKqsfo62BVLnpRYpHfa+yguAqZxLENxlpmfJD\naEOJmE5pAgMBAAECggEALiL+RKOr0Xu8BOgQ0j1DwA03LxVrhXe6etmJI+JySTcd\ngKENjWziZVrRIi2DvUm5qMMl7WhSwslKK1eexxZJY7xASqSxcEoIwgz17T07/jxm\nfIdUBiUKDZ1Kv8PWmIr3oKW+fkXWi/m1zlIe0qXRpTmsGNEsHQLEqi0rmaiXTXOR\n/2Ldwi6kZR3sWFx97YS4Mx/pueGJTXEai6AVEZzN5Gog6xD8HXR1Rvq+hhd+MocG\nfnU4HgilKRfoJlWd9FOscgSufKG0L3ViO4fSKU46l5aullDYUk5ECMWiwuKSqSE7\nqD45jI3mbOre7S4u3S3TWdD3lzwiXL49LdwKlEC4mQKBgQD0sLr0GH4Wr+QX2xJE\nuA/Cb8QW41l8iSCBTRZZR/sJOd+o3rbcVidlzO/EbZblXG4ZPDmRjgBCGKIP5EZi\n0DsL+Wv32WOo44LpxJGhqExbm0H1iZ1zZ97l0P8fvIhHE42gmaLToOIGDhPSXGvv\nzlqOHbGbq4jsERc1jp1bej5q6wKBgQDwaueIc4pRchH98QYidcyr8Vwg9KhbnfYX\ny3W4RPlZtBdF34iJaio+ASzugo/zy1RTcVrsCskYWXyKDUQz1yu0iCng+fDCUnTm\nXGmEoEGNhk4vTJOt7hBav1/Ja/dUipGf6mXUuanwJ0e+1/Et/B0ah5X1Um5AyNZI\nM+SyRz3u+wKBgQCjvtUNXoqaghCBCmB6TjZ1prexnWkYFugCv2SSUMIk1W7gIlJ6\ntsjcrj1R1Qii6qzfBFd+GWoA0V06h0e2/qRVCg//p6GytrW33IycgvS+ZPLJ7tLI\nFR2r66WfRlpoPiSL8eRt/P7kkG0hXCn7K7ub2TEu/Ka/W1yNwad6PR8iCwKBgQC8\nXcZSrtQsxAc8w99emJVoEo9wcsCGJ9ltA0iUu9XyZpvlbyJ3J+s48YrWxQ0sop7L\nUgE+96Rfo51kPMi3JVtk81p8ntf4KMrWwokaFMXHsPcJMCJ1IBVIRLE0C5eZcYhv\nlyN57I4tT1lzOZYJxYK4Cot/zrn7oF/j6mTBGfh4iQKBgQCiJMUxRz01/czH/XSX\ngo3dVbHQ4FEOufWnE3Eb93S8r0/eq1RM118rb0TqzuiadW2xYDU4nucWQlrlmq0d\nFY/m+Hy97pqyk6jmoU5I/D+ssBIoYHWLnH9/xfvDEk2JGSJSHtzu0D4EDC/rgQ49\nMbYsO5oUrF8tPlhj5vzbf3GKLA==\n-----END PRIVATE KEY-----\n",
    "publicKeyOld": "BgIAAACkAABSU0ExAAgAAAEAAQBpTpiJQ2hD8plpGTfEEmcq4IKyr31HikXpuVSBraMfqyodn2PGXBJ3daNSmdPOc0Nz4HO9Auljn8YYXDPBdpiABptSKvEDPF23Q+Qytg0+vCRyondyBcW91w7KLzXce3fnk8ZfJ8QtbZPL9m11wJIWZueQF+l0HKYx4lty+nccbCanytFTADkGQ3SnmExGEF3rBz6I9+OcrDDK9NKPJgEmCiuyei/d4XbPgKls3EIG0h38X5mVF2VytfWm2Yu850B6z3N4MYhj4b4vsYT62zEC4pMRUeb8dIBy4Jsmr3avtmeO00MUH6DVyPC8nirixj2YIOPKk13CdVqGDSXA3cvl",
    "modulusOld": "5cvdwCUNhlp1wl2TyuMgmD3G4iqevPDI1aAfFEPTjme2r3avJpvgcoB0/OZREZPiAjHb+oSxL77hY4gxeHPPekDnvIvZpvW1cmUXlZlf/B3SBkLcbKmAz3bh3S96sisKJgEmj9L0yjCsnOP3iD4H610QRkyYp3RDBjkAU9HKpyZsHHf6clviMaYcdOkXkOdmFpLAdW32y5NtLcQnX8aT53d73DUvyg7XvcUFcneiciS8Pg22MuRDt108A/EqUpsGgJh2wTNcGMafY+kCvXPgc0NzztOZUqN1dxJcxmOfHSqrH6OtgVS56UWKR32vsoLgKmcSxDcZaZnyQ2hDiZhOaQ==",
    "exponentOld": "65537",
    "privateKeyOld": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDly93AJQ2GWnXC\nXZPK4yCYPcbiKp688MjVoB8UQ9OOZ7avdq8mm+BygHT85lERk+ICMdv6hLEvvuFj\niDF4c896QOe8i9mm9bVyZReVmV/8HdIGQtxsqYDPduHdL3qyKwomASaP0vTKMKyc\n4/eIPgfrXRBGTJindEMGOQBT0cqnJmwcd/pyW+Ixphx06ReQ52YWksB1bfbLk20t\nxCdfxpPnd3vcNS/KDte9xQVyd6JyJLw+DbYy5EO3XTwD8SpSmwaAmHbBM1wYxp9j\n6QK9c+BzQ3PO05lSo3V3ElzGY58dKqsfo62BVLnpRYpHfa+yguAqZxLENxlpmfJD\naEOJmE5pAgMBAAECggEALiL+RKOr0Xu8BOgQ0j1DwA03LxVrhXe6etmJI+JySTcd\ngKENjWziZVrRIi2DvUm5qMMl7WhSwslKK1eexxZJY7xASqSxcEoIwgz17T07/jxm\nfIdUBiUKDZ1Kv8PWmIr3oKW+fkXWi/m1zlIe0qXRpTmsGNEsHQLEqi0rmaiXTXOR\n/2Ldwi6kZR3sWFx97YS4Mx/pueGJTXEai6AVEZzN5Gog6xD8HXR1Rvq+hhd+MocG\nfnU4HgilKRfoJlWd9FOscgSufKG0L3ViO4fSKU46l5aullDYUk5ECMWiwuKSqSE7\nqD45jI3mbOre7S4u3S3TWdD3lzwiXL49LdwKlEC4mQKBgQD0sLr0GH4Wr+QX2xJE\nuA/Cb8QW41l8iSCBTRZZR/sJOd+o3rbcVidlzO/EbZblXG4ZPDmRjgBCGKIP5EZi\n0DsL+Wv32WOo44LpxJGhqExbm0H1iZ1zZ97l0P8fvIhHE42gmaLToOIGDhPSXGvv\nzlqOHbGbq4jsERc1jp1bej5q6wKBgQDwaueIc4pRchH98QYidcyr8Vwg9KhbnfYX\ny3W4RPlZtBdF34iJaio+ASzugo/zy1RTcVrsCskYWXyKDUQz1yu0iCng+fDCUnTm\nXGmEoEGNhk4vTJOt7hBav1/Ja/dUipGf6mXUuanwJ0e+1/Et/B0ah5X1Um5AyNZI\nM+SyRz3u+wKBgQCjvtUNXoqaghCBCmB6TjZ1prexnWkYFugCv2SSUMIk1W7gIlJ6\ntsjcrj1R1Qii6qzfBFd+GWoA0V06h0e2/qRVCg//p6GytrW33IycgvS+ZPLJ7tLI\nFR2r66WfRlpoPiSL8eRt/P7kkG0hXCn7K7ub2TEu/Ka/W1yNwad6PR8iCwKBgQC8\nXcZSrtQsxAc8w99emJVoEo9wcsCGJ9ltA0iUu9XyZpvlbyJ3J+s48YrWxQ0sop7L\nUgE+96Rfo51kPMi3JVtk81p8ntf4KMrWwokaFMXHsPcJMCJ1IBVIRLE0C5eZcYhv\nlyN57I4tT1lzOZYJxYK4Cot/zrn7oF/j6mTBGfh4iQKBgQCiJMUxRz01/czH/XSX\ngo3dVbHQ4FEOufWnE3Eb93S8r0/eq1RM118rb0TqzuiadW2xYDU4nucWQlrlmq0d\nFY/m+Hy97pqyk6jmoU5I/D+ssBIoYHWLnH9/xfvDEk2JGSJSHtzu0D4EDC/rgQ49\nMbYsO5oUrF8tPlhj5vzbf3GKLA==\n-----END PRIVATE KEY-----\n",
    "refreshLockInterval": "10m",
    "dummy": {
      "enable": false,
      "sampleFilePath": ""
    }
  }
}
```
