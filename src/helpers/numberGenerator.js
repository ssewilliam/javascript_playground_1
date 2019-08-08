export const generateNumbers = (counter, range) => {
  let Numbers = [];
  if (!counter || !range ) return;
  while (counter <= range) {
    Numbers.push({
      pbId: counter,
      pbNumber: parseInt("079379205") + counter,
      pbCountryCode: "+256",
      pbAreaCode: "079",
      pbPrefix: "3",
      pbActive: 'false'
    });
    counter++;
  }
  return Numbers;
};
