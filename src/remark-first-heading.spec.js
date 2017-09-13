/* global describe, it */
import { expect } from 'chai';
import remark from 'remark';
import firstHeading from './remark-first-heading';

function clean(multiline) {
  return multiline
    .split('\n')
    .splice(1)
    .join('\n');
}
function test(expected, actual) {
  expect(process(expected)).to.eq(clean(actual));
}
function process(string) {
  const r = remark().use(firstHeading, { heading: 'heading' });
  return r.processSync(string).toString();
}

describe('Remark First Heading', () => {
  it('insert a heading', () =>
    test(
      '',
      `
# heading
`
    ));

  it('heading shuold stay the same', () =>
    test(
      `
# heading
`,
      `
# heading
`
    ));

  it('insert if first is not a heading', () =>
    test(
      `
a text
`,
      `
# heading

a text
`
    ));

  it('replace wrong heading', () =>
    test(
      `
# replace me

a text
`,
      `
# heading

a text
`
    ));
});
