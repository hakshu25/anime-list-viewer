import { shallowMount } from "@vue/test-utils";
import AnimeList from "../../src/components/AnimeList.vue";
import AnimeUsecase from '../../src/usecases/anime-usecase';

jest.mock('../../src/usecases/anime-usecase');

describe("AnimeList.vue", () => {
  let wrapper;

  beforeEach(() => {
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

  describe("displayAnimeList", () => {
    it("getList method of AnimeUsecase is called", async () => {
      const resp = { data: [{ title: "aaa" }, { title: "bbb" }] };
      const spy = AnimeUsecase.mock.instances[0].getList.mockImplementation(() => resp.data);

      wrapper.vm.selectedYear = '2015'
      wrapper.vm.cour = '4'
      await wrapper.vm.displayAnimeList();

      expect(spy).toHaveBeenLastCalledWith("2015", "4");
      expect(wrapper.vm.list).toEqual(resp.data);
    });
  });
});
