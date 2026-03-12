# OData Import

Connects the OData (Open Data Protocol) service for importing external data into the spreadsheet editor. The plugin allows users to connect to OData feeds, browse available entity sets, and insert data directly into spreadsheet cells.

**Plugin type:** visual, non-system.

**Supported editors:** spreadsheets.

![OData Import](/assets/images/plugins/odata.png#gh-light-mode-only)![OData Import](/assets/images/plugins/odata.dark.png#gh-dark-mode-only)

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/odata) and install it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md), [on-premises](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md), or [cloud](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) installation instructions.

## Usage

1. Find the plugin on the **Plugins** tab.
2. Enter the OData service URL and click the **Fetch** button.
3. Select the tables you want to import from the **Available Tables** list.
4. Click the **Insert Data** button to insert the selected data into the current spreadsheet.

## Plugin structure

Repository on GitHub: [odata](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/odata).

1. *config.json*, *index.html*, and *scripts/odata.js*

2. Icons

3. The *translations* folder contains translations into Russian, German, Spanish, and French.

## Config

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

## Methods and events

- [button](/docs/plugin-and-macros/customization/buttons.md)
- [init](/docs/plugin-and-macros/interacting-with-editors/overview/#how-it-works)
- [onTranslate](/docs/plugin-and-macros/structure/localization.md#applying-translations-to-plugin)
- [callCommand](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [Asc.scope](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues).
