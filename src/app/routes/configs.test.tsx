import { PAGINATION_ROUTE, INFO_ROUTE, CREATE_ROUTE, MEDIAS_ROUTE } from "./configs";

describe("Route Constants", () => {
  test('PAGINATION_ROUTE should be "pagination"', () => {
    expect(PAGINATION_ROUTE).toBe("pagination");
  });

  test('INFO_ROUTE should be "info"', () => {
    expect(INFO_ROUTE).toBe("info");
  });

  test('CREATE_ROUTE should be "create"', () => {
    expect(CREATE_ROUTE).toBe("create");
  });

  test('MEDIAS_ROUTE should be "medias"', () => {
    expect(MEDIAS_ROUTE).toBe("medias");
  });
});
