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
```
const date = new Deight('2/19/1998')
date.month -> 'February'
```
### Day
```
const date = new Deight('2/19/1998')
date.month -> 'February'
```
### Hours
```
const date = new Deight('2/19/1998 13:15:30')
date.hours -> 13
```
### Minutes
```
const date = new Deight('2/19/1998 13:15:30')
date.minutes -> 15
```
### Seconds
```
const date = new Deight('2/19/1998 13:15:30')
date.seconds -> 30
```

## Format Mask
Deight objects can return their date and time formatted with many options.
```
const date = new Deight('2/19/1998 13:15:30')
date.format('') -> 
```
'Y' -> 2019
'y' -> 19
'M' -> July
'm' -> Jul
'D' -> 01
'd' -> 1
'H' -> 05
'h' -> 5
'I' -> 08
'i' -> 8
'S' -> 04
's' -> 4