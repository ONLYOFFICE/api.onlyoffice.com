(function(window, undefined){

    window.Asc.plugin.init = function()
    {
		// none
    };

    window.Asc.plugin.button = function(id)
    {
    };

    window.Asc.plugin.onExternalPluginMessage = function(data)
	{
		switch (data.type)
		{
			case "close":
			{
				this.executeCommand("close", "");
				break;
			}
			case "insertText":
			{
				Asc.scope.text = data.text; // export variable to plugin scope
				this.callCommand(function() {
					var oDocument = Api.GetDocument();
					var oParagraph = Api.CreateParagraph();
					oParagraph.AddText(Asc.scope.text);
					oDocument.InsertContent([oParagraph]);
				}, false);
				
				break;
			}
			case "executeCommand": {
				this.info.recalculate = true;
				this.executeCommand("command", data.text);
				break;
			}
		}
	};

    //todo: remove
    window.Asc.plugin.event_onDocumentContentReady = function () {
        parent.parent.postMessage("externallistenerReady");
    };

})(window, undefined);
