const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});


  console.log(zipObject(['age', 'name', 'school'], [18, 'cjf', 'ccc']))
