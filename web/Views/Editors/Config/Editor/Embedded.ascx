<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <a class="up" href="<%= Url.Action("config/editor") %>"></a>
    <span class="hdr">Embedded</span>
</h1>

<div class="header-gray">Description</div>
<p class="dscr">
    The embedded section is for the <b>embedded</b> document type only (see the <a href="<%= Url.Action("config/") %>#type">config</a> section to find out how to define the <b>embedded</b> document type).
    It allows to change the settings which define the behavior of the buttons in the embedded mode.
</p>

<div class="header-gray">Example</div>
<p>
    The <b>example.com</b> is the name of the server where <b>document manager</b> and <b>document storage service</b> are installed.
    See the <a href="<%= Url.Action("howitworks") %>">How it works</a> section to find out more on Document Server service client-server interactions.
</p>
<div id="controlFields">
    <div id="embedded" class="control-panel">
        <div class="line input_line" style="margin-top: 0px;">
            <label for="editorConfig_embedded_embedUrl">Embed Url</label>
            <input type="text" id="editorConfig_embedded_embedUrl" name="editorConfig_embedded_embedUrl" value="https://example.com/embedded?doc=exampledocument1.docx">
        </div>
        <div class="line input_line">
            <label for="editorConfig_embedded_fullscreenUrl">Fullscreen Url</label>
            <input type="text" id="editorConfig_embedded_fullscreenUrl" name="editorConfig_embedded_fullscreenUrl" value="https://example.com/embedded?doc=exampledocument1.docx#fullscreen">
        </div>
        <div class="line input_line">
            <label for="editorConfig_embedded_saveUrl">Save Url</label>
            <input type="text" id="editorConfig_embedded_saveUrl" name="editorConfig_embedded_saveUrl" value="https://example.com/download?doc=exampledocument1.docx">
        </div>
        <div class="line input_line">
            <label for="editorConfig_embedded_shareUrl">Share Url</label>
            <input type="text" id="editorConfig_embedded_shareUrl" name="editorConfig_embedded_shareUrl" value="https://example.com/view?doc=exampledocument1.docx">
        </div>
        <div class="line input_line">
            <label for="editorConfig_embedded_toolbarDocked">Toolbar Docked</label>
            <select class="select" id="editorConfig_embedded_toolbarDocked" name="editorConfig_embedded_toolbarDocked">
                <option value="top" disabled>top</option>
                <option value="top" selected>top</option>
                <option value="bottom">bottom</option>
            </select>
        </div>
    </div>
</div>
<div id="configPreHolder" style="display: flex; margin-top: 18px;">
    <div>
        <div id="configHeader" class="configHeader">
            <div class="preContentType">
                <span style="font-family: monospace">Config.js</span>
            </div>
            <div>
                <div class="tooltip">
                    <div class="copyConfig">
                        <img alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg") %>" />
                        <span id="tooltiptext-hover" style="display: inline;" class="tooltiptext">When you copy, you get the HTML code for the whole example.</span>
                        <span id="tooltiptext-click" style="display: none;" class="tooltiptext">HTML copied.</span>
                    </div>
                </div>
            </div>
        </div>
        <pre id="configPre"></pre>
    </div>  
</div>
<div id="editorSpace">
    <div id="placeholder"></div>
</div>

<div class="header-gray">Parameters</div>
<table class="table">
    <colgroup>
        <col class="table-name" />
        <col />
        <col class="table-type" />
        <col class="table-example" />
    </colgroup>
    <thead>
        <tr class="tablerow">
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>Example</td>
        </tr>
    </thead>
    <tbody>
        <tr class="tablerow">
            <td id="embedUrl" class="copy-link">embedUrl</td>
            <td>Defines the absolute URL to the document serving as a source file for the document embedded into the web page.</td>
            <td>string</td>
            <td>"https://example.com/embedded?doc=exampledocument1.docx"</td>
        </tr>
        <tr class="tablerow">
            <td id="fullscreenUrl" class="copy-link">fullscreenUrl</td>
            <td>Defines the absolute URL to the document which will open in full screen mode.</td>
            <td>string</td>
            <td>"https://example.com/embedded?doc=exampledocument1.docx#fullscreen"</td>
        </tr>
        <tr class="tablerow">
            <td id="saveUrl" class="copy-link">saveUrl</td>
            <td>Defines the absolute URL that will allow the document to be saved onto the user personal computer.</td>
            <td>string</td>
            <td>"https://example.com/download?doc=exampledocument1.docx"</td>
        </tr>
        <tr class="tablerow">
            <td id="shareUrl" class="copy-link">shareUrl</td>
            <td>Defines the absolute URL that will allow other users to share this document.</td>
            <td>string</td>
            <td>"https://example.com/view?doc=exampledocument1.docx"</td>
        </tr>
        <tr class="tablerow">
            <td id="toolbarDocked" class="copy-link">toolbarDocked</td>
            <td>Defines the place for the embedded viewer toolbar, can be either <b>top</b> or <b>bottom</b>.</td>
            <td>string</td>
            <td>"top"</td>
        </tr>
        <tr class="tablerow">
            <td colspan="4">
                <img class="screenshot" src="<%= Url.Content("~/content/img/editor/embedded.png") %>" alt="" />
            </td>
        </tr>
    </tbody>
</table>
<div class="mobile-content"></div>

<script>
    $('.select').each(function () {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 120;

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);
                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                    updateConfig();
                });
                window.addEventListener('click', function (e) {
                    if (e.target != selectList[0] && e.target != selectHead[0] && e.target != selectItem[0]) {
                        selectHead.removeClass('on');
                        selectList.slideUp(duration);
                    }
                });
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
</script>
<script id="scriptApi" type="text/javascript" src="<%= ConfigurationManager.AppSettings["editor_url"] ?? "" %>/web-apps/apps/api/documents/api.js"></script>
<script type="text/javascript">

    // Editor window
    var config = <%= Config.Serialize(
    new Config {
        Document = new Config.DocumentConfig
            {
                FileType = "docx",
                Key = "apiwh" + Guid.NewGuid(),
                Permissions = new Config.DocumentConfig.PermissionsConfig(),
                Title = "Example Title",
                Url = ConfigurationManager.AppSettings["storage_demo_url"] + "demo." + "docx",
                Info = new Config.DocumentConfig.InfoConfig()
            },
        DocumentType = "word",
        EditorConfig = new Config.EditorConfigConfiguration
            {
                CallbackUrl = Url.Action("callback", "editors", null, Request.Url.Scheme),
                Customization = new Config.EditorConfigConfiguration.CustomizationConfig
                    {
                        Anonymous = new Config.EditorConfigConfiguration.CustomizationConfig.AnonymousConfig
                            {
                                Request = false
                            },
                        Feedback = new Config.EditorConfigConfiguration.CustomizationConfig.FeedbackConfig
                            {
                                Visible = true
                            },
                        IntegrationMode = "embed",
                }
            },
        Height = "550px",
        Width = "100%"
    }) %>;
    config.type = "embedded";
</script>

<script>
    var config_global = "";
    $(".copyConfig").click(function () {
        var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <script type="text/javascript" src="<%= ConfigurationManager.AppSettings["editor_url"] ?? "" %>/web-apps/apps/api/documents/api.js"><\/script>
</head>
<body>
    <div id="editorSpace">
        <div id="placeholder"></div>
    </div>
    <script>
new DocsAPI.DocEditor("placeholder", ${JSON.stringify(config_global, null, '\t')});
    <\/script>
</body>
`;

        navigator.clipboard.writeText(html).then(function () {
            document.getElementById("tooltiptext-hover").style = "display: none;";
            document.getElementById("tooltiptext-click").style = "display: inline; width: 95px!important;";
        }, function (err) {
            console.error('Could not copy content: ', err);
        });
    })
    $(".tooltip").mouseleave(function () {
        document.getElementById("tooltiptext-hover").style = "display: inline;";
        document.getElementById("tooltiptext-click").style = "display: none;";
    })
</script>

<script>
    $(document).ready(function () {
        resizeCodeInput();
        updateConfig();
    });

    $("#controlFields").find("input,select").change(function () {
        updateConfig();
    });

    function updateConfig() {
        var embedded = `{
            "embedUrl": ${getFieldValue("editorConfig_embedded_embedUrl")},
            "fullscreenUrl": ${getFieldValue("editorConfig_embedded_fullscreenUrl")},
            "saveUrl": ${getFieldValue("editorConfig_embedded_saveUrl")},
            "shareUrl": ${getFieldValue("editorConfig_embedded_shareUrl")},
            "toolbarDocked": ${getFieldValue("editorConfig_embedded_toolbarDocked")}
        }`;
        var config_string =
            `var docEditor = new DocsAPI.DocEditor("placeholder", {
    "editorConfig": {
        "embedded": ${embedded}
        ,
        ...
    },
    ...
});
`;

        var embedded_object = JSON.parse(embedded);
        config.editorConfig.embedded = embedded_object;
        if (window.docEditor) {
            window.docEditor.destroyEditor();
        }
        window.docEditor = new DocsAPI.DocEditor("placeholder", config);
        config_global = config;
        var pre = document.getElementById("configPre");
        pre.innerHTML = config_string;
        hljs.highlightBlock(pre);
    }

    function getFieldValue(id) {
        var element = document.getElementById(id);
        if (document.getElementById(id).parentElement.className == "select") {
            return `"${document.getElementById(id).parentElement.children[1].innerText}"`;
        } else if (element.type == "checkbox") {
            return element.checked;
        } else if (`${element.value}` == ``) {
            return `""`;
        } else if (isNaN(element.value)) {
            return `"${element.value}"`;
        } else {
            return Number(element.value);
        }
    }

    function resizeCodeInput() {
        var paddingTop = Number(getComputedStyle(document.getElementsByTagName("pre")[0]).paddingTop.split("px")[0]);
        var paddingBottom = Number(getComputedStyle(document.getElementsByTagName("pre")[0]).paddingBottom.split("px")[0]);
        var borderSize = Number(getComputedStyle(document.getElementsByTagName("pre")[0]).border.split("px")[0]);
        var controlFieldsHeight = Math.round(document.getElementById("controlFields").getBoundingClientRect().height * 100) / 100;
        var headerHeight = document.getElementById("configHeader").getBoundingClientRect().height;

        var offset = paddingTop + paddingBottom + (borderSize * 2);
        var height = controlFieldsHeight - offset - headerHeight;

        document.getElementById("configPre").style.height = `${height}px`;
    }
</script>