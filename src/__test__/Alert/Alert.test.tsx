import { fireEvent, waitFor } from "@testing-library/react";
import { CheckCircle, CircleXmark } from "@architecture-it/stylesystem";

import TemplateAlert, { getIcon } from "../../components/Alert";
import { renderWithProviders } from "../../config/test-utils";
import { IAlert } from "../../store/features/alert";

const defaultValues: IAlert = {
  message: "Colaborador creado con éxito!",
  type: "success",
  open: true,
};

describe("<Alert />", () => {
  it("Should render without crash", async () => {
    const { getAllByTestId } = renderWithProviders(<TemplateAlert />, {
      preloadedState: { alertReducer: defaultValues },
    });

    const alerts = getAllByTestId("alert");

    await waitFor(() => {
      expect(alerts[0]).toMatchSnapshot();
    });
  });

  it("Should render the correct message", () => {
    const { getAllByText } = renderWithProviders(<TemplateAlert />, {
      preloadedState: { alertReducer: defaultValues },
    });

    const messages = getAllByText(defaultValues.message);

    expect(messages[0].innerHTML).toBe(defaultValues.message);
  });

  it("Should close the alert when triggering the handleOnClose() function", () => {
    const { getAllByTitle, store } = renderWithProviders(<TemplateAlert />, {
      preloadedState: { alertReducer: defaultValues },
    });

    const closeButtons = getAllByTitle("Close");

    fireEvent.click(closeButtons[0]);

    const newState = store.getState();

    expect(newState.alertReducer.open).toBeFalsy();
  });

  describe("getIcon()", () => {
    it("Should return the correct icon if the type passed is success", () => {
      const type = "success";
      const response = getIcon(type);

      expect(response).toEqual(<CheckCircle />);
    });
    it("Should return the correct icon if the type passed is not success", () => {
      const type = "error";
      const response = getIcon(type);

      expect(response).toEqual(<CircleXmark />);
    });
  });
});
