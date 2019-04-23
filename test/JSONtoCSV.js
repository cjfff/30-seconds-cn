const JSONtoCSV = (arr, columns, delimiter = ",") =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : delimiter}"${obj[key] || ""}"`,
        ""
      )
    )
  ].join("\n");

console.log(
  JSONtoCSV(
    [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
    ["a", "b"]
  )
);

console.log(
  JSONtoCSV(
    [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
    ["a", "b"],
    ";"
  )
);
