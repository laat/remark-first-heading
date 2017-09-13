var toString = require('mdast-util-to-string');

module.exports = function attacher(options = {}) {
  return function transformer(root) {
    let heading = {
      type: 'heading',
      depth: 1,
      children: [{ type: 'text', value: options.heading }],
    };

    let first = root.children[0];
    if (first && first.type === 'heading') {
      if (toString(first) !== options.heading) {
        root.children[0] = heading;
      }
    } else {
      root.children.unshift(heading);
    }
  };
};
