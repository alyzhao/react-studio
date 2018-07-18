import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked, {Renderer} from 'marked'
import hlgh from 'highlight.js'
import { md } from './test.js'
import 'highlight.js/styles/atelier-estuary-light.css'

const renderer = new Renderer()
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && hlgh.getLanguage(language));
  // Highlight only if the language is valid.
  const highlighted = validLang ? hlgh.highlight(language, code).value : code;
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
}

marked.setOptions({renderer})

class App extends Component {
  constructer () {

  }

  render() {
    let markdown = marked(md)
    console.log(markdown)

    return (
      <div className="App" style={{textAlign: 'left', width: '1000px', margin: '0 auto'}} dangerouslySetInnerHTML={{__html: markdown}}>
      </div>
    );
  }
}

export default App;
