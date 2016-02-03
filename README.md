# remark-first-heading

Replace the first top-level heading in a markdown document

# Usage
```javascript
import remark from 'remark'
import firstHeading from 'remark-first-heading'


let someMarkdown = `
# wrong heading
`
let r = remark.use(firstHeading, {heading: 'Correct Heading'})
r.stringify(r.run(r.parse(someMarkdown))).trim()
//=> "# Correct Heading"
```

## License

MIT © [Sigurd Fosseng](http://laat.io)
