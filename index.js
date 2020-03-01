// Require the 'fs' package
const fs = require('fs');

// Read the "story.json" file using 'utf8' encoding
const storyFile = fs.readFileSync("story.json", 'utf8');
// Parse the string into an object
const story = JSON.parse(storyFile);

// Read the "index.html" file using 'utf8' encoding
const indexFile = fs.readFileSync("index.html", 'utf8');
// Add the contents of "index.html" as the 'source'
story.source = indexFile;

// Build a "format.js" file contents
// Convert the 'story' back into a string
let format = "window.storyFormat(" + JSON.stringify(story) + ");";
// Write the "format.js" file using
fs.writeFileSync("dist/format.js", format);
