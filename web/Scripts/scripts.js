/*
 *
 * (c) Copyright Ascensio System SIA 2024
 *
 * This program is freeware. You can redistribute it and/or modify it under the terms of the GNU 
 * General Public License (GPL) version 3 as published by the Free Software Foundation (https://www.gnu.org/copyleft/gpl.html). 
 * In accordance with Section 7(a) of the GNU GPL its Section 15 shall be amended to the effect that 
 * Ascensio System SIA expressly excludes the warranty of non-infringement of any third-party rights.
 *
 * THIS PROGRAM IS DISTRIBUTED WITHOUT ANY WARRANTY; WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR
 * FITNESS FOR A PARTICULAR PURPOSE. For more details, see GNU GPL at https://www.gnu.org/copyleft/gpl.html
 *
 * You can contact Ascensio System SIA by email at sales@onlyoffice.com
 *
 * The interactive user interfaces in modified source and object code versions of ONLYOFFICE must display 
 * Appropriate Legal Notices, as required under Section 5 of the GNU GPL version 3.
 *
 * Pursuant to Section 7 § 3(b) of the GNU GPL you must retain the original ONLYOFFICE logo which contains 
 * relevant author attributions when distributing the software. If the display of the logo in its graphic 
 * form is not reasonably feasible for technical reasons, you must include the words "Powered by ONLYOFFICE" 
 * in every copy of the program you distribute. 
 * Pursuant to Section 7 § 3(e) we decline to grant you any rights under trademark law for use of our trademarks.
 *
*/
$(window).on("load", function () {
    $(".footer-item-title").click(function () {
        if ($(window).width() <= 592) {
            $(this).toggleClass("active");
            $(this).next(".footer-item-list").slideToggle(300);
        }
    });

    $(window).resize(function () {
        $(".footer-item-title").removeClass("active");

        if ($(window).width() <= 592) {
            $(".footer-item-list").css("display", "none");
        } else {
            $(".footer-item-list").css("display", "block");
        }
    });

    if (window.innerWidth > 592) {
        if (localStorage.getItem("sidebar-navigation") === "false") {
            $("#sidebar-button").addClass("active");
            $(".layout-table-side").addClass("hide");
        } else {
            $("#sidebar-button").removeClass("active");
            $(".layout-table-side").removeClass("hide");
        }

        if (window.innerWidth <= 1024) {
            setTimeout(() => {
                $(".layout-table-side").addClass("transition");
            }, 50);
        }
    }
});

$(function() {
    function displayModalPanel (obj, width, height, top, position) {
        try {
            width = parseInt(width || 0);
            height = parseInt(height || 0);
            left = parseInt(-width / 2);
            top = parseInt(top || -height / 2);
            position = position || "fixed";
            $.blockUI({
                message: $(obj),
                css: {
                    left: '50%',
                    top: '50%',
                    opacity: '1',
                    border: 'none',
                    padding: '0px',
                    width: width > 0 ? width + 'px' : 'auto',
                    height: height > 0 ? height + 'px' : 'auto',
                    cursor: 'default',
                    textAlign: 'left',
                    position: position,
                    'margin-left': left + 'px',
                    'margin-top': top + 'px',
                    'background-color': 'Transparent'
                },

                overlayCSS: {
                    backgroundColor: '#eee',
                    cursor: 'default',
                    opacity: '0.6'
                },

                focusInput: true,
                baseZ: 1001,

                fadeIn: 0,
                fadeOut: 0,
                onBlock: function () {
                    var $blockUI = $(obj).parents('div.blockUI:first'), blockUI = $blockUI.removeClass('blockMsg').addClass('blockDialog').get(0), cssText = '';
                    if ($.browser.msie && $.browser.version < 9 && $blockUI.length !== 0) {
                        var prefix = ' ', cssText = prefix + blockUI.style.cssText, startPos = cssText.toLowerCase().indexOf(prefix + 'filter:'), endPos = cssText.indexOf(';', startPos);
                        if (startPos !== -1) {
                            if (endPos !== -1) {
                                blockUI.style.cssText = [cssText.substring(prefix.length, startPos), cssText.substring(endPos + 1)].join('');
                            } else {
                                blockUI.style.cssText = cssText.substring(prefix.length, startPos);
                            }
                        }
                    }
                }
            });
        } catch (e) {
        }
    }

    $(".button-popap-try").click(function () {
        $("#trySourceCodeDialog .popap-container>div").hide();
        var codeId = $(this).attr("data-code");
        $("#" + codeId).show();
        
        displayModalPanel("#trySourceCodeDialog", 825, 650, 0, "absolute");
    });
    
    $(".button-popap-open").click(function () {
        $("#containerDialog .popap-container>div").hide();
        var codeId = $(this).attr("data-body");
        $("#" + codeId).show();

        displayModalPanel("#containerDialog", 800, 650, 0);
    });

    $(".video-link").click(function () {
        var poapDialog = $(this).find(".popap-dialog");

        displayModalPanel(poapDialog, 680, 500, 0, "absolute");
    });

    $("body").on("click", ".button-close, .blockOverlay", $.unblockUI);

    $(document).keyup(function (event) {
        if (!$('.blockUI').is(':visible'))
            return;

        var code;
        if (!e) var e = event;
        if (e.keyCode) code = e.keyCode;
        else if (e.which) code = e.which;

        if (code == 27) {
            $.unblockUI();
        }
    });

    $(".search-box .btn").click(function () {
        $(this).parent().submit();
    });

    $(".search-box input").bind("change paste keyup", function () {
        $(this).val() ? $(this).parent().children(".search-clear").show() : $(this).parent().children(".search-clear").hide();
    });

    $(".search-box .search-clear").click(function () {
        $(this).parent().children("input").val("");
        $(this).hide();
    });

    $("#doc-builder-search-box input").bind("change paste keyup", function () {
        var searchBox = this;
        if (!!$(searchBox).val()) {
            $(".builder-search-results").empty();
            methodNames.forEach(function (methodItem) {
                var searchItem = methodItem.memberof + " " + methodItem.name + " " + methodItem.desc;
                if (searchItem.toLowerCase().includes($(searchBox).val().toLowerCase())) {
                    var elem = document.createElement("li");
                    elem.innerHTML = "<p>" + methodItem.memberof + "." + methodItem.name + " — </p>" + methodItem.desc.replace(".", "");
                    elem.setAttribute("data-section", methodItem.memberof);
                    elem.setAttribute("data-method", methodItem.name);
                    $(".builder-search-results").append(elem);
                }
            });
        }
        $(".builder-search-results").toggle($(".builder-search-results")[0].innerHTML != "");
    });

    $(document).bind("mouseup", function(e) {
        var builderSearch = $(e.target).closest(".builder-search-results");
        if (!builderSearch.length) {
            $(".builder-search-results").hide();
        } else if (builderSearch) {
            var methodItem = $(e.target.closest("li"));

            $(".builder-search-results").hide();
            $("#doc-builder-search-box input").val("");

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "");
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify( {module: documentType, section: methodItem.data("section").toLowerCase(), method: methodItem.data("method").toLowerCase()}));

            xhr.onload = function () {
                var script = xhr.responseText;
                script = "\n\n" + script.substring(script.indexOf(";") + 2, script.length);

                $("#builderScript").val(function () {
                    return this.value.substring(0, this.value.indexOf("builder.SaveFile") - 1) + script;
                });
            };
        }
    });

    $(".side-nav").treeview({
        collapsed: true,
        animated: "medium",
        unique: false,
        persist: "location"
    });

    $("pre").each(function (i, block) {
        hljs.highlightBlock(block);
    });


    $("#builderFileLink").on("click", function (e) {
        e.preventDefault();
        $("#builderFile").click();
    });

    $("#builderFile").on("change", function (e) {
        var input = e.target;

        var reader = new FileReader();
        reader.onload = function () {
            var text = reader.result;

            var scriptMaxLength = 10000;
            var createFunction = "builder.CreateFile";
            var saveFunction = "builder.SaveFile";
            var easy = $("#builderScript").data("easy");

            if (text.length == 0
                || text.length >= scriptMaxLength
                || text.indexOf(createFunction) == -1 && !easy
                || text.indexOf(saveFunction) == -1 && !easy) {
                $("#builderScript").val("Invalid script");
                return;
            }

            $("#builderScript").val(text);
        };
        reader.readAsText(input.files[0]);
    });

    new Clipboard(".copy-link", {
        text: function (obj) {
            var current = location.href;
            if (current.indexOf("#") > 0) {
                current = current.substring(0, Math.max(current.indexOf("#")));
            }

            var href = $(obj).attr("href");
            if (!href) {
                var id = $(obj).attr("id");
                if (!id) {
                    id = $(obj).closest("[id]").attr("id");
                }
                location.hash = id;

                href = current + "#" + id;
            } else if (href.indexOf("#") == 0) {
                location.hash = href;

                href = current + href;
            }
            return href;
        }
    }).on("success",
        function () {
            //alert("Link was copied to clipboard");
        });


    var clipboard = new Clipboard(".copy-code", {
        target: function () {
            return $("pre:visible")[0];
        }
    });
});

var valueOfRenderedBlocks = 0;

function getHeadParams(thead) {
    var paramsList = thead.find("td");
    if (!paramsList || !paramsList.length) return false

    var params = [];

    for (var param of paramsList) {
        params.push(param.innerText);
    }

    return params
}

function createContentItem(content, headParams, index, mobileBlock) {
    $(mobileBlock).append(`<div class="${" contentItem index" + valueOfRenderedBlocks + "-" + index}" ></div >`)

    for (var i = 0; i < content.length; i++) {
        if (!content[i].innerHTML) continue;
        $(`.contentItem.index${valueOfRenderedBlocks}-${index}`).append(`
        <div class="itemRow">
            <span class="param">${headParams[i]}: </span>
            <span class="value">${content[i].innerHTML}</span>
        </div>`)
    }

    valueOfRenderedBlocks++
}

function createMobileContent(tbody, headParams, mobileBlock) {
    var contentList = tbody.children("tr");

    if (!contentList || !contentList.length) return false

    contentList.map((i) => {
        createContentItem($(contentList[i]).children("td"), headParams, i, mobileBlock);
    })
}

function renderMobileContent(tables) {
    if (!tables.length) return

    for (var table of tables) {
        var mobileBlock = $(table).next(".mobile-content")
        if (!mobileBlock.length) return

        var headParams = getHeadParams($(table).children("thead"))
        if (!headParams) return;

        createMobileContent($(table).children("tbody"), headParams, mobileBlock)
    }
}

$(document).ready(function () {
    $(".spoiler_heading").on("click", function () {
        $(this).next(".spoiler_code").slideToggle("fast");
    });

    var $tables = $(".table");
    if ($tables.length) renderMobileContent($tables);

    var timeoutId;

    $(".nav-list").on("scroll", function() {
        $(".nav-list").addClass("scroll-active");
    
        clearTimeout(timeoutId);
    
        timeoutId = setTimeout(function() {
            $(".nav-list").removeClass("scroll-active");
        }, 100);
    });
});

function handleSelects() {
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
}
function getFieldValue(id) {
    var element = document.getElementById(id);
    if (document.getElementById(id).parentElement.className == "select") {
        return `"${document.getElementById(id).parentElement.children[1].innerText}"`;
    } else if (element.type == "checkbox") {
        return element.checked;
    } else if (element.id == `editorConfig_customization_zoom`) {
        return isNaN(Number(element.value)) ? 0 : Number(element.value);
    } else if (`${element.value}` == ``) {
        return `""`;
    } else if (isNaN(element.value)) {
        if (element.value.includes("[") || element.value.includes('""')) {
            return element.value;
        }
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

function createConfigHTML(editor_url, json) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <script type="text/javascript" src="${editor_url}/web-apps/apps/api/documents/api.js"><\/script>
</head>
<body>
    <div id="editorSpace">
        <div id="placeholder"></div>
    </div>
    <script>
new DocsAPI.DocEditor("placeholder", ${json});
    <\/script>
</body>
</html>`;
}
function copyConfigToClipboard(html) {
    navigator.clipboard.writeText(html).then(function () {
        document.getElementById("tooltiptext-hover").style = "display: none;";
        document.getElementById("tooltiptext-click").style = "display: inline; width: 95px!important;";
    }, function (err) {
        console.error('Could not copy content: ', err);
    });
}

function copyConfigMouseLeave() {
    document.getElementById("tooltiptext-hover").style = "display: inline;";
    document.getElementById("tooltiptext-click").style = "display: none;";
}

function deepCopyConfig(config) {
    const copy = JSON.parse(JSON.stringify(config));
    const result = {
        config: config,
        copy: copy
    };
    return result;
}
function createJsSdkHTML(jsSdk) {
    return document.getElementById(jsSdk+'Pre').textContent;
}
function copyJsSdkToClipboard(html, hoverId, clickId) {
    navigator.clipboard.writeText(html).then(function () {
        document.getElementById(hoverId).style = "display: none;";
        document.getElementById(clickId).style = "display: inline; width: 95px!important;";
    }, function (err) {
        console.error('Could not copy content: ', err);
    });
}

function copyJsSdkMouseLeave(hoverId, clickId) {
    document.getElementById(hoverId).style = "display: inline;";
    document.getElementById(clickId).style = "display: none;";
}

function deepCopyJsSdk(jsSdk) {
    const copy = JSON.parse(JSON.stringify(jsSdk));
    const result = {
        jsSdk: jsSdk,
        copy: copy
    };
    return result;
}