# React-Native-Number-Abbreviator
React Native Library For truncating numbers with K, M, B, T labels in decimal form

Example:

let numbers = [
7, 100, 12000,
12003, 100000, 100345,
1000000, 1234567, 10000000,
10300001
]

<NumberAbbreviator minNumberToFormat={10000} numberDecimalsToShow={3} />

// outputs would be 

7, 100, 12k, 12.003k, 100k, 100.345k, 1M, 123.457M, 1B, 10.3M
