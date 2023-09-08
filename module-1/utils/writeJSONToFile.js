const {writeFile } = require("fs/promises");

const writeJSONFromFile = async (path, content) => {
  await writeFile(path, JSON.stringify(content, null, 2));
};

module.exports = writeJSONFromFile;
