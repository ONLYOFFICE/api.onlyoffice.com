# OData Import

连接 OData（开放数据协议）服务，用于将外部数据导入电子表格编辑器。该插件允许用户连接到 OData 数据源、浏览可用的实体集，并将数据直接插入电子表格单元格中。

**插件类型：** 可视化，非系统插件。

**支持编辑器：** 电子表格。

![OData Import](/assets/images/plugins/odata.png#gh-light-mode-only)![OData Import](/assets/images/plugins/odata.dark.png#gh-dark-mode-only)

## 安装

从 [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/odata) 下载此插件，并根据以下指南完成安装：[桌面端](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署](../../tutorials/installing/onlyoffice-docs-on-premises.md)或[云端](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用

1. 在**插件**选项卡找到该插件。
2. 输入 OData 服务的 URL，然后点击 **Fetch** 按钮。
3. 从 **Available Tables** 列表中选择要导入的表格。
4. 点击 **Insert Data** 按钮，将所选数据插入到当前电子表格中。

## 插件结构

GitHub 仓库：[odata](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/odata)。

1. *config.json*、*index.html* 和 *scripts/odata.js*

2. 图标

3. *translations* 文件夹包含俄语、德语、西班牙语和法语的翻译。

## 配置

``` json
{
	"name": "OData Import",
	"nameLocale": {
		"ru": "Импорт OData",
		"de": "OData Import",
		"fr": "Import OData",
		"es": "Importar OData"
	},

	"guid": "asc.{6B290456-D38E-4E00-9387-C3105CCF9BDC}",
	"version": "1.0.0",
	"minVersion": "8.2.0",

	"variations": [
		{
			"description": "Import data from OData feeds into your spreadsheet. Enter an OData service URL, select tables, and paste data directly into cells.",
			"descriptionLocale": {
				"ru": "Импортируйте данные из каналов OData в электронную таблицу. Введите URL-адрес службы OData, выберите таблицы и вставьте данные непосредственно в ячейки.",
				"de": "Importieren Sie Daten aus OData-Feeds in Ihre Tabelle. Geben Sie eine OData-Service-URL ein, wählen Sie Tabellen aus und fügen Sie Daten direkt in Zellen ein.",
				"fr": "Importez des données depuis des flux OData dans votre feuille de calcul. Entrez l'URL d'un service OData, sélectionnez des tables et collez les données directement dans les cellules.",
				"es": "Importe datos desde fuentes OData a su hoja de cálculo. Ingrese una URL de servicio OData, seleccione tablas y pegue los datos directamente en las celdas."
			},
			"url": "index.html",
			"icons": "resources/%theme-type%(light|dark)/icon.svg",
			"EditorsSupport": ["cell"],
			"type": "panel",

			"initDataType": "none",
			"buttons": [
				{
					"text": "Insert",
					"primary": true,
					"textLocale": {
						"ru": "Вставить",
						"fr": "Insérer",
						"es": "Insertar",
						"de": "Einfügen"
					},
					"isViewer": false
				},
				{
					"text": "Cancel",
					"primary": false,
					"textLocale": {
						"ru": "Отмена",
						"fr": "Annuler",
						"es": "Cancelar",
						"de": "Abbrechen"
					}
				}
			],
			"events": [],

			"store": {
				"background": {
					"light": "#FEF8F2",
					"dark": "#FEF8F2"
				},
				"screenshots": [
					"resources/store/screenshots/screen_1.png",
					"resources/store/screenshots/screen_2.png",
					"resources/store/screenshots/screen_3.png",
					"resources/store/screenshots/screen_4.png"
				],
				"icons": {
					"light": "resources/light",
					"dark": "resources/dark"
				},
				"categories": ["recommended"]
			}
		}
	],

	"onlyofficeScheme": true
}
```

## 方法和事件

- button
- init
- onTranslate
- [callCommand](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [Asc.scope](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) 对象

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
