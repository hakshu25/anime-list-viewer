import { shallowMount } from "@vue/test-utils";
import AnimeList from "../../src/components/AnimeList.vue";
import AnimeUsecase from '../../src/usecases/anime-usecase';
import axios from "axios";

jest.mock("axios");
jest.mock('../../src/usecases/anime-usecase');

describe("AnimeList.vue", () => {
  const resp = { data: [{ title: "aaa" }, { title: "bbb" }] };
  let wrapper;

  beforeEach(() => {
    axios.get.mockResolvedValue(resp);
    AnimeUsecase.mockClear();
    wrapper = shallowMount(AnimeList, {
      stubs: ["v-client-table"]
    });
  });

  it("renders component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe("mounted", () => {
    it("displayAnimeList method is called", () => {
      const spy = jest.spyOn(wrapper.vm, "displayAnimeList");
      wrapper.vm.displayAnimeList();
      expect(spy).toHaveBeenCalled();
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
    it("fetch data when success", async () => {
      await wrapper.vm.fetchAnimeList("2016", "3");
      expect(wrapper.vm.list).toEqual(resp.data);
    });

    it("throw error when catch error", async () => {
      axios.get.mockRejectedValue("error message");
      await expect(wrapper.vm.fetchAnimeList("2015", "1")).rejects.toEqual(
        new Error("error message")
      );
    });
  });

  describe("displayAnimeList", () => {
    it("getList method of AnimeService is called", () => {
      const spy = AnimeUsecase.mock.instances[0].getList.mockImplementation(() => resp.data);

      wrapper.vm.selectedYear = '2015'
      wrapper.vm.cour = '4'
      wrapper.vm.displayAnimeList();

      expect(spy).toHaveBeenLastCalledWith("2015", "4");
      expect(wrapper.vm.list).toEqual(resp.data);
    });
  });
});
