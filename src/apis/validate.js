export const iban = val => {
  return fetch('http://localhost:3050', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      iban: val
    })
  })
    .then(res => res.json())
    .then(res => {
      if (!res.valid) throw new Error('invalid');
    });
};
