# Deights Library
![Travis (.com)](https://img.shields.io/travis/com/t0ri/dates?style=flat-square)
![Coveralls github](https://img.shields.io/coveralls/github/t0ri/dates?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/t0ri/dates?style=flat-square)

## Create a Deight
Create a new Deight similar to creating a Date.
```
const date = new Deight('2/19/1998')
date.date -> 1998-02-19T08:00:00.000Z
```

## Get Deight Values
### Year
```
const date = new Deight('2/19/1998')
date.year -> 1998
```
### Month

### Day

### Hour

### Minute

### Second
console.log(d.year())  // 2019 fullYear
console.log(d.month()) // July 6
console.log(d.day())   // 27
console.log(d.hours()) // 18
console.log(d.mins()) // 6
console.log(d.secs()) // 5