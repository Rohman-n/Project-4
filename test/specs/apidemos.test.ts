import { APIDemosActions } from "../actions/apidemos.action";

const apiDemosAction = new APIDemosActions();

describe("Project 4", () => {
    it("Verify isi field name dan password di Text Entry Dialog", async () => {
        await apiDemosAction.navigateToTextEntry();

        const inputName = "rohman";
        const inputPassword = "yoman591";
        await apiDemosAction.fillForm(inputName, inputPassword);

        expect(await apiDemosAction.getNameFieldValue()).toEqual(inputName);
        expect(await apiDemosAction.isPasswordFieldFilled()).toBe(true);

        await apiDemosAction.clickOk();
    });
});