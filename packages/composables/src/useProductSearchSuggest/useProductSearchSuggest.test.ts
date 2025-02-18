import { describe, expect, it } from "vitest";
import { useSetup } from "../_test";
import { useProductSearchSuggest } from "./useProductSearchSuggest";

describe("useProductSearchSuggest", () => {
  it("search", async () => {
    const { vm, injections } = useSetup(() => useProductSearchSuggest());
    injections.apiClient.invoke.mockResolvedValue({ data: {} });
    await vm.search();
    expect(injections.apiClient.invoke).toHaveBeenCalledWith(
      expect.stringContaining("searchPage"),
      expect.objectContaining({
        body: {
          search: "",
        },
      }),
    );
  });
});
