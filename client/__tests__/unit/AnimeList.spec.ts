import { shallowMount, Wrapper } from "@vue/test-utils";
import AnimeList from '../../src/components/AnimeList.vue';
import AnimeUsecase from '../../src/usecases/anime-usecase';

jest.mock('../../src/usecases/anime-usecase');

describe("AnimeList.vue", () => {
  let wrapper: Wrapper<any>;

  beforeEach(() => {
    (<jest.Mock>AnimeUsecase).mockClear();
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

      (global as any).Date = class extends OriginalDate {
        constructor(arg: string | undefined) {
          super();
          return arg ? new OriginalDate(arg) : mockNow;
        }
      }
      const expected = [2014, 2015, 2016, 2017, 2018];
      expect(wrapper.vm.createYears()).toEqual(expected);
    });
  });

  describe("displayAnimeList", () => {
    let spy: any;
    const resp = { data: [{ title: "aaa", link: null }, { title: "bbb", link: 'http://example.com' }] };

    beforeEach(async () => {
      spy = (<jest.Mock>AnimeUsecase).mock.instances[0].getList.mockImplementation(() => resp.data);

      wrapper.vm.selectedYear = '2015'
      wrapper.vm.cour = '4'

      await wrapper.vm.displayAnimeList();
    });

    it("getList method of AnimeUsecase is called", async () => {
      expect(spy).toHaveBeenLastCalledWith("2015", "4");
      expect(wrapper.vm.list).toEqual(resp.data);
    });

    it('show link if there is link url', async () => {
      const links = wrapper.findAll('a');
      expect(links.at(0).attributes().href).toBe('http://example.com');
      expect(links.length).toBe(1);
    });
  });
});
