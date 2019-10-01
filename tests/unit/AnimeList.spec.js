import { shallowMount } from "@vue/test-utils";
import AnimeList from "../../src/components/AnimeList.vue";

describe("AnimeList.vue", () => {
  const wrapper = shallowMount(AnimeList, {
    stubs: ["v-client-table"],
  });

  it("renders component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  describe("mounted", () => {});

  describe("getCour", () => {
    it("月に対応したクールを取得すること", () => {
      expect(wrapper.vm.getCour(1)).toBe(4);
      expect(wrapper.vm.getCour(2)).toBe(4);
      expect(wrapper.vm.getCour(3)).toBe(4);
      expect(wrapper.vm.getCour(4)).toBe(1);
      expect(wrapper.vm.getCour(5)).toBe(1);
      expect(wrapper.vm.getCour(6)).toBe(1);
      expect(wrapper.vm.getCour(7)).toBe(2);
      expect(wrapper.vm.getCour(8)).toBe(2);
      expect(wrapper.vm.getCour(9)).toBe(2);
      expect(wrapper.vm.getCour(10)).toBe(3);
      expect(wrapper.vm.getCour(11)).toBe(3);
      expect(wrapper.vm.getCour(12)).toBe(3);
    });
  });

  describe("createYears", () => {
    it("2014年から今年度までの年度を取得できること", () => {
      const OriginalDate = Date;
      const mockNow = new Date("2018/8/1 12:00:00");

      jest.spyOn(global, 'Date').mockImplementation((arg) => {
        if (arg) {
          return new OriginalDate(arg);
        }
        return mockNow;
      });
      const expected = [2014, 2015, 2016, 2017, 2018];
      expect(wrapper.vm.createYears()).toEqual(expected);
    });
  });

  describe("fetchAnimeList", () => {});

  describe("displayAnimeList", () => {
    it('fetchAnimeListが呼ばれること', () => {
      wrapper.find({ ref: 'year' }).setValue('2015');
      wrapper.find({ ref: 'cour' }).setValue('4');
      const spy = jest.spyOn(wrapper.vm, 'fetchAnimeList');
      wrapper.vm.displayAnimeList();
      expect(spy).toHaveBeenCalledWith('2015','4');
    });
  });
});
