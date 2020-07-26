# React-Native-Number-Abbreviator
React Native Library For truncating numbers with K, M, B, T labels in decimal form with
0 Dependencies!

## Installation
```yarn add react-native-number-abbreviator```
or
```npm install react-native-number-abbreviator --save```

## Example:

let numbers = [
7, 100, 12000,
12003, 100000, 100345,
1000000, 1234567, 10000000,
10300001
]

(for iterating through several numbers, assume used within a Flatlist that passes 'item')

```<NumberAbbreviator passedInNumber={item.number} minNumberToFormat={10000} DecimalsToShow={3} />```

// outputs would be 

7, 100, 12k, 12.003k, 100k, 100.345k, 1M, 123.457M, 1B, 10.3M


Props:
      decimalsToShow // number of decimal places to show
      minNumberToFormat  // length number must be >== to format
      passedInNumber // number you are formatting

## Planned features / improvements

1. TypeScript Types
2. Work with negative numbers

## Contributing

1. Contributions are welcome!
2. Please see open issues / any project indicators to see what would be priority, or feel free to take on your own request or bug fix.
3. If you are interested in becoming a maintainer to this package, please email me, contact me through my website or reach out to me on linkedin.
