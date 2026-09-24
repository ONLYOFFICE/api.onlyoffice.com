# CustomizationConfigDto
How the editor interface is dressed: branding, the buttons that lead back into the portal, and the behaviour of review, mentions and form submission.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **about** | **Boolean** | Whether the About entry of the editor menu is shown. | [optional] [example: `true`] |
| **customer** | [**CustomerConfigDto**](customer-config-dto.md) | The branding of the organization running the portal. It is filled in on a server installation only and is empty in the cloud. | [optional] |
| **anonymous** | [**AnonymousConfigDto**](anonymous-config-dto.md) | How an anonymous participant is treated in this session. | [optional] |
| **feedback** | [**FeedbackConfig**](feedback-config.md) | The support link the editor offers behind its feedback button. | [optional] |
| **forcesave** | **Boolean** | Whether the editors write intermediate revisions while the document stays open. It is empty when the portal leaves the decision to the editors themselves. | [optional] [example: `false`] [nullable] |
| **goback** | [**GobackConfig**](goback-config.md) | Where the editor returns the user to when they leave the document. It is empty when there is nowhere to go back to, as in an embedded opening. | [optional] |
| **review** | [**ReviewConfig**](review-config.md) | How tracked changes are displayed when the document opens; it depends on whether this session may write. | [optional] |
| **logo** | [**LogoConfigDto**](logo-config-dto.md) | The logo the editor shows, in the variants the current layout and file type need. | [optional] |
| **mentionShare** | **Boolean** | Whether mentioning a user who cannot yet open the document offers to share it with them, instead of silently notifying nobody. | [optional] [example: `true`] |
| **submitForm** | [**SubmitForm**](submit-form.md) | The submit button of a form: whether it is shown and what it says. | [optional] |
| **startFillingForm** | [**StartFillingForm**](start-filling-form.md) | The button that starts filling out the form. It is empty when this opening offers no such button. | [optional] |
| **ai** | [**AIConfig**](ai-config.md) | The AI configuration settings. | [optional] |
