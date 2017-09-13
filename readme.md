# remark-first-heading

Replace the first top-level heading in a markdown document

# Usage
```javascript
import remark from 'remark';
import firstHeading from 'remark-first-heading';

const r = remark().use(firstHeading, { heading: 'Correct Heading' });

const someMarkdown = '# wrong heading';
r.processSync(someMarkdown).toString();
//=> "# Correct Heading\n"
```

## License

MIT © [Sigurd Fosseng](http://laat.io)
