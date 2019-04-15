const initializeArrayWithRange = (end, start = 0, step = 1) => 
  Array.from({ length: Math.ceil((end - start + 1)/ step)}, (_, i) => i * step + start)



console.log(initializeArrayWithRange(20, 2, 2));

