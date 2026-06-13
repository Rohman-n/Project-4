import { APIDemosPage } from "../pageobjects/apidemos.page";

export class APIDemosActions {
    async navigateToTextEntry() {
        await APIDemosPage.appBtn().waitForDisplayed();
        await APIDemosPage.appBtn().click();

        await APIDemosPage.alertDialogsBtn().waitForDisplayed();
        await APIDemosPage.alertDialogsBtn().click();

        await APIDemosPage.textEntryBtn().waitForDisplayed();
        await APIDemosPage.textEntryBtn().click();
    }

    async fillForm(nameText: string, passwordText: string) {
        await APIDemosPage.nameField().waitForDisplayed();
        await APIDemosPage.nameField().setValue(nameText);
        
        await APIDemosPage.passwordField().waitForDisplayed();
        await APIDemosPage.passwordField().setValue(passwordText);
    }

    async getNameFieldValue() {
        return await APIDemosPage.nameField().getAttribute('text');
    }

    async isPasswordFieldFilled() {
        return await APIDemosPage.passwordField().isDisplayed();
    }

    async clickOk() {
        await APIDemosPage.okBtn().waitForDisplayed();
        await APIDemosPage.okBtn().click();
    }
}