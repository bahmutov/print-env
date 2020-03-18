"use strict"

const getVars = prefix =>
  Object.keys(process.env).reduce(
    (result, key) =>
      key.startsWith(prefix)
        ? Object.assign(result, { [key]: process.env[key] })
        : result,
    {}
  );

module.exports = getVars
