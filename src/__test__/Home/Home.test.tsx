import { fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

import { renderWithProviders } from "../../config/test-utils";
import { useUserContext, DEFAULT_USER } from "../../context/Account";
import Home from "../../pages/Home";

jest.mock("react-router-dom", () => {
  const actual: object = jest.requireActual("react-router-dom");

  return {
    ...actual,
    useNavigate: jest.fn().mockImplementation(() => jest.fn()),
  };
});

jest.mock("../../context/Account", () => {
  const actual: object = jest.requireActual("../../context/Account");

  return {
    ...actual,
    useUserContext: jest
      .fn()
      .mockImplementation(() => DEFAULT_USER)
      .mockImplementationOnce(() => undefined),
  };
});

const useNavigateMocked = useNavigate as jest.Mock;

describe("<Home />", () => {
  test("Should render without crash if not authenticated", () => {
    const { getByTestId } = renderWithProviders(<Home />);

    const HomePage = getByTestId("home-page");
    const text = getByTestId("text");

    expect(HomePage).toMatchSnapshot();
    expect(text.textContent).toBe("Por favor inicia sesión para ver la información de usuario.");
  });
  test("Should render welcome text if authenticated and account exist", () => {
    const { getByTestId } = renderWithProviders(<Home />);

    const HomePage = getByTestId("home-page");
    const text = getByTestId("text");

    expect(HomePage).toMatchSnapshot();
    expect(text.textContent).toBe(`Hola ${DEFAULT_USER.name}!`);
  });
  test("Should handle onclick", () => {
    const { getByTestId } = renderWithProviders(<Home />);

    const button = getByTestId("button");

    fireEvent.click(button);

    expect(useNavigateMocked).toHaveBeenCalled();
    // expect(useNavigateMocked).toHaveBeenCalledWith("usuarios");
  });
});
