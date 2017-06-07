import { SampleappPage } from './app.po';

describe('sampleapp App', () => {
  let page: SampleappPage;

  beforeEach(() => {
    page = new SampleappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
