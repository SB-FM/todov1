import { AppPage } from './app.po';

describe('todo-list App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display todos header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todos');
  });
});
