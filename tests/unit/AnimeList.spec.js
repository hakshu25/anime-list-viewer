import { shallowMount } from "@vue/test-utils";
import AnimeList from "../../src/components/AnimeList.vue";

describe("AnimeList.vue", () => {
  const wrapper = shallowMount(AnimeList, {
    stubs: ["v-client-table"]
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

  describe("createYears", () => {});

  describe("fetchAnimeList", () => {});

  describe("displayAnimeList", () => {});
});
