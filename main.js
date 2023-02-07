import "highlight.js/styles/ir-black.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

import "alpinejs";

hljs.highlightAll();

/* const toggler = document.getElementById('toggler');

toggler.addEventListener("click", () => alert("Toggler Clicked!")); */