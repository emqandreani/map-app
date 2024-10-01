import { renderWithProviders } from "../../config/test-utils";
import Table from "../../pages/Users/components/Table";
import { IUsers } from "../../domain/IUsers";

const header = ["Id", "Nombre", "Apellido", "Edad"];

const defaultData: IUsers[] = [
  {
    id: 1,
    name: "Lionel",
    lastName: "Messi",
    age: 36,
  },
];

describe("<Table />", () => {
  test("Should render without crush", () => {
    const { getByTestId } = renderWithProviders(Table({ header, data: defaultData }));

    const table = getByTestId("table");

    expect(table).toMatchSnapshot();
  });
  test("Table should render the correct header names", () => {
    const { getAllByTestId } = renderWithProviders(Table({ header, data: defaultData }));

    const headerCell = getAllByTestId("header-cell");

    headerCell.forEach((cell, index) => {
      expect(cell.textContent).toBe(header[index]);
    });
  });
  test("Table should render data exactly as passed", () => {
    const { getByText } = renderWithProviders(Table({ header, data: defaultData }));

    defaultData.forEach((item) => {
      expect(getByText(item.id)).toBeTruthy();
      expect(getByText(item.name)).toBeTruthy();
      expect(getByText(item.lastName)).toBeTruthy();
      expect(getByText(item.age.toString())).toBeTruthy();
    });
  });
});
