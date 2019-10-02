import { shallowMount } from "@vue/test-utils";
import AnimeList from "../../src/components/AnimeList.vue";
import axios from "axios";

jest.mock("axios");

describe("AnimeList.vue", () => {
  const resp = { data: [{ title: "aaa" }, { title: "bbb" }] };
  axios.get.mockResolvedValue(resp);
  const wrapper = shallowMount(AnimeList, {
    stubs: ["v-client-table"]
  });

  it("renders component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe("mounted", () => {
    it("fetchAnimeList method is called", () => {
      const spy = jest.spyOn(wrapper.vm, "fetchAnimeList");
      wrapper.vm.displayAnimeList();
      expect(spy).toHaveBeenCalledWith("2014", "2");
    });
  });

  describe("createYears", () => {
    it("get years from 2014 to current year", () => {
      const OriginalDate = Date;
      const mockNow = new Date("2018/8/1 12:00:00");

      jest.spyOn(global, "Date").mockImplementation(arg => {
        if (arg) {
          return new OriginalDate(arg);
        }
        return mockNow;
      });
      const expected = [2014, 2015, 2016, 2017, 2018];
      expect(wrapper.vm.createYears()).toEqual(expected);
    });
  });

  describe("fetchAnimeList", () => {
    it("fetch data when success", () => {
      wrapper.vm.fetchAnimeList("2014", "2");
      expect(wrapper.vm.rows).toEqual(resp.data);
    });

    it("throw error when catch error", async () => {
      axios.get.mockRejectedValue("error message");
      await expect(wrapper.vm.fetchAnimeList("2014", "2")).rejects.toEqual(
        new Error("error message")
      );
    });
  });

  describe("displayAnimeList", () => {
    it("fetchAnimeList method is called", () => {
      wrapper.find({ ref: "year" }).setValue("2015");
      wrapper.find({ ref: "cour" }).setValue("4");
      const spy = jest.spyOn(wrapper.vm, "fetchAnimeList");
      wrapper.vm.displayAnimeList();
      expect(spy).toHaveBeenCalledWith("2015", "4");
    });
  });
});
