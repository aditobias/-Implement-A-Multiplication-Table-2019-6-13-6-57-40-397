# 1. should start number is smaller than end number

## Given

* startNum = 2 and endNum = 4 

## When

* checkIfStartNumIsSmallerThanEndNum(startNum,endNum)

## Then

* "true" if start num is smaller than end num

# 2. should start num and end num within range and result is not null

## Given

* startNum = 2, endNum = 3 and result = "true"

## When

* isInRangeAndResultIsNotNull(startNum,endNum,result)

## Then

* return true

# 3. should return false when start num and end num exceed range

## Given

* startNum = 2, endNum = 1001 and result = "true"

## When

* isInRangeAndResultIsNotNull(startNum,endNum,result)

## Then

* return false

# 4. should return null when start num is greater than end num

## Given

* startNum = 4 and endNum = 2 

## When

* isInRangeAndResultIsNotNull(startNum,endNum,result)

## Then

* return false

# 5. should present multiplication table of two numbers

## Given

* startNum = 2 and endNum = 4 

## When

* printFinalMultiplicationTable(startNum,endNum)

## Then

* return "2x2 = 4\n
          2x3 = 6 3x3 = 9\n
          2x4 = 8 3x4 = 12 4x4 = 16\n"

# 6. should present multiplication table of same two numbers

## Given

* startNum = 2 and endNum = 2 

## When

* printFinalMultiplicationTable(startNum,endNum)

## Then

* return "2x2 = 4\n"