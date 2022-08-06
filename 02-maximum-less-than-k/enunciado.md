# PROBLEM

Given an array **A** of `integers` and `integer` **K**, return the maximum **S** such
there exists `i < j` with `A[i] + A[j] = S` and `S < K`. If no such `i,j` exist
satisfying this equation, return `-1`.

## Example 1:
A = `[34,23,1,24,75,33,54,8]`
K = `60`
S (result) = `58`

Explanation: We can use **34** and **24** to sum **58** which is less than **60**(`K`) and there's
no pair sum of `59`. Therefore, the maximum sum is `58`.

## Example 2:
A = `[10,20,30]`
K = `15`
S (result) = -`1`

Explanation: In this case it's not possible to get a pair sum less than **15**.

## Constraints
1 <= A.length <= 100
1 <= A[i] <= 1000
1 <= K <= 20005
