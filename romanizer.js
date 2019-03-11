const values = [
  {
    arabic: 1000,
    roman: 'M'
  },
  {
    arabic: 900,
    roman: 'CM'
  },
  {
    arabic: 500,
    roman: 'D'
  },
  {
    arabic: 400,
    roman: 'CD'
  },
  {
    arabic: 100,
    roman: 'C'
  },
  {
    arabic: 90,
    roman: 'XC'
  },
  {
    arabic: 50,
    roman: 'L'
  },
  {
    arabic: 40,
    roman: 'XL'
  },
  {
    arabic: 10,
    roman: 'X'
  },
  {
    arabic: 9,
    roman: 'IX'
  },
  {
    arabic: 5,
    roman: 'V'
  },
  {
    arabic: 4,
    roman: 'IV'
  },
  {
    arabic: 1,
    roman: 'I'
  },
];

const romanizer = (num) => {
  let remaining = num;
  let result = '';
  if (num < 1) {
    result = "Sorry no result for numbers < 1";
  } else {
  values.forEach(value => {
    while (remaining >= value.arabic) {
      result += value.roman;
      remaining -= value.arabic;
    }
  });
}
  return result;
};

module.exports = romanizer;
