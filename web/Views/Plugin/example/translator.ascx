<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <a class="up" href="<%= Url.Action("example/") %>"></a>
    <span class="hdr">Translator</span>
</h1>

<div class="header-gray">Description</div>
<p class="dscr">Connects the <a href="https://cloud.google.com/translate?hl=ru" target="_blank">Google Translate API</a> for translating the selected text into other languages.</p>
<p><b>Plugin type:</b> visual, non-system.</p>
<p><b>Supported editors:</b> documents, spreadsheets, presentations.</p>
<p><b>Analogues:</b> <a href="https://github.com/ONLYOFFICE/plugin-apertium" target="_blank">Apertium</a>, <a href="https://github.com/ONLYOFFICE/plugin-deepl" target="_blank">DeepL</a>.</p>

<img alt="Translator" src="<%= Url.Content("~/content/img/plugins/gifs/translator.gif") %>" />


<div class="header-gray">Installation</div>
<p>Available by default in the cloud, on-premises and desktop versions of ONLYOFFICE editors.</p>
<p>You can remove it following the <a href="https://api.teamlab.info/plugin/installation/desktop">desktop</a>, <a href="https://api.teamlab.info/plugin/installation/onpremises" target="_blank">on-premises</a>, or <a href="https://api.teamlab.info/plugin/installation/cloud" target="_blank">cloud</a> installation instructions.
<p>The plugin guid: {7327FC95-16DA-41D9-9AF2-0E7F449F6800}.</p>


<div class="header-gray">Usage</div>

<ol>
    <li>Select the text you want to translate.</li>
    <li>Open the <b>Plugins</b> tab and press <b>Translator</b>.</li>
    <li>Select the necessary language. The translation will be displayed in the plugin window immediately.</li>
</ol>


<div class="header-gray">Plugin structure</div>

<p>Repository on GitHub: <a href="https://github.com/ONLYOFFICE/plugin-translator" target="_blank">https://github.com/ONLYOFFICE/plugin-translator</a>.</p>
<ol>
    <li><em>config.json</em>, <em>index.html</em> and <em>code.js</em></li>
    <li>Icons</li>
    <li>The <em>translations</em> folder contains translations into Russian, German, Spanish and French.</li>
    <li>Third-party service:
        <ul>
            <li><a href="https://cloud.google.com/translate?hl=ru" target="_blank">Google Translate API</a> enables translation between languages. License: <a href="https://github.com/matheuss/google-translate-api/blob/master/LICENSE" target="_blank">MIT License</a>.</li>
        </ul>
    </li>
</ol>


<div class="header-gray">Config</div>
<pre>
{
    "name": "Translator",
    "nameLocale": {
        "ru": "&#1055;&#1077;&#1088;&#1077;&#1074;&#1086;&#1076;&#1095;&#1080;&#1082;",
        "fr": "Traducteur",
        "es": "Traductor",
        "de": "&#220;bersetzer"
    },
    "guid": "asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}",

    "variations": [
        {
            "description": "Translator",
            "descriptionLocale": {
                "ru": "&#1055;&#1077;&#1088;&#1077;&#1074;&#1086;&#1076;&#1095;&#1080;&#1082;",
                "fr": "Traducteur",
                "es": "Traductor",
                "de": "&#220;bersetzer"
            },
            "url": "index.html",

            "icons": [ "resources/img/icon.png", "resources/img/icon@2x.png", "resources/img/icon.png", "resources/img/icon@2x.png" ],
            "isViewer": true,
            "EditorsSupport": [ "word", "cell", "slide" ],

            "isVisual": true,
            "isModal": false,
            "isInsideMode": true,

            "initDataType": "text",
            "initData": "",

            "isUpdateOleOnResize": false,

            "buttons": [],

            "initOnSelectionChanged": true
        }
    ]
}
</pre>


<div class="header-gray">Methods and events</div>

<p>The main plugin code is located <a href="https://github.com/ONLYOFFICE/plugin-translator/blob/master/scripts/translate.js" target="_blank">here</a>.</p>
<ul>
    <li><a href="<%= Url.Action("events") %>#button">button</a></li>
    <li><a href="<%= Url.Action("events") %>#init">init</a></li>
    <li><a href="<%= Url.Action("events") %>#onExternalMouseUp">onExternalMouseUp</a></li>
    <li><a href="<%= Url.Action("events") %>#onTranslate">onTranslate</a></li>
    <li><a href="<%= Url.Action("executecommand") %>">executeCommand</a></li>
</ul>


<div class="header-gray">Support</div>

<p>If you want to request a feature or report a bug regarding this plugin, use the issues section on <a href="https://github.com/ONLYOFFICE/sdkjs-plugins/issues" target="_blank">GitHub</a>.</p>
