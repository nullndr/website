---
title: Algebraic Identities
date: 2026-09-01
description: Simple notes for algebraic identities
author: nullndr
tags:
  - math
  - notes
extra:
  math: true
---

Once we consider a [commutative ring](./basic-algebraic-structures.html#commutative-rings), several algebraic identities can be derived from the properties of its operations.

Algebraic identities are equations that are true for all values of their variables. Unlike ordinary equations, which are satisfied only by specific values of their variables, an identity expresses a relation that holds universally.

Algebraic identities are particularly useful for expanding and factoring expressions, simplifying computations, and recognizing common algebraic structures. Many familiar formulas, such as the difference of squares or the square of a binomial, are instances of these identities.

The following sections collect some of the most common algebraic identities and their factorizations.

## Product of binomials

The product of two binomials with a common term can be expanded by applying the distributive property:

$$
(x + a)(x + b) = x^2 + (a + b)x + ab
$$

## Square of binomial

The square of a binomial is obtained by multiplying the binomial by itself:

$$
(a + b)^2 = a^2 + 2ab + b^2\\
$$

$$
(a - b)^2 = a^2 - 2ab + b^2
$$

## Square of trinomial

The same idea extends to three terms. The square contains the squares of each term together with twice each pairwise product:

$$
(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc
$$

## Cube of a binomial

Cubing a binomial gives:

$$
(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
$$

$$
(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3
$$

## Cube of a trinomial

The cube of a trinomial gives:

$$
(a + b + c)^3 = a^3 + b^3 + c^3 + 3a^2b + 3a^2c + 3ab^2 + 3b^2c + 3ac^2 + 3bc^2 + 6abc
$$

## Sum and difference of squares

The difference of two squares can always be factored as:

$$
a^2 - b^2 = (a - b)(a + b)
$$

The sum of two squares can't be factored into linear factors over $\mathbb{R}$. However, we can extend the number system to $\mathbb{C}$, where the factorization becomes possible:

$$
a^2 + b^2 = (a - ib)(a + ib)
$$

This is possible because $i^2 = -1$.

## Sum and difference of cubes

Unlike the sum of two squares over the real numbers, both the sum and the difference of two cubes admit factorizations in $\mathbb{R}$:

$$
a^3 + b^3 = (a + b)(a^2 − ab + b^2)\\
$$

$$
a^3 - b^3 = (a - b)(a^2 + ab + b^2)
$$

## Difference of powers

We have seen that both $a^2 - b^2$ and $a^3 - b^3$ can be factored by $(a - b)(\cdots)$, we would like to ask now if there is a more general rule for this.

The answer is positive, for every positive integer $n$, the difference $a^n - b^n$ is always divisible by $a - b$:

$$
a^n - b^n = (a - b)(a^{n - 1} + a^{n - 2}b + a^{n - 3}b^2 + \cdots + ab^{n - 2} + b^{n - 1})
$$

The [difference of squares](#sum-and-difference-of-squares) and the [difference of cubes](#sum-and-difference-of-cubes) are thus the special case with $n = 2$ and $n = 3$.

## Sum of odd powers

We now know that $a^n - b^n$ has $a - b$ as a factor for every positive integer $n$. What happens instead with $a^n+b^n$?

We have already encountered two cases. The expression $a^2+b^2$ does not have $a+b$ as a factor, while

$$
a^3 + b^3 = (a + b)(a^2 - ab + b^2)
$$

This is not a coincidence. The expression $a^n + b^n$ is divisible by $a + b$ if and only if $n = 2k + 1$ for some non-negative integer $k$.

In this case,

$$
a^n + b^n = (a + b)(a^{n - 1} - a^{n - 2}b + a^{n - 3}b^2 - \cdots - ab^{n - 2} + b^{n - 1})
$$

<details>
<summary>Proof</summary>

This can be seen directly by setting $a=-b$. If $n$ is odd, then

$$
(-b)^n + b^n = -b^n + b^n=0
$$

so $a = -b$ is a root and therefore $a + b$ is a factor. If $n = 2k$ then

$$
(-b)^n + b^n = 2b^n
$$

which is not zero in general, so $a+b$ is not a factor.

</details>

## Binomial theorem

All previous formulas for the square and cube of a binomial are special cases of the binomial theorem:

$$
(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k}b^k 
$$

where

$$
\binom{n}{k} = \frac{n!}{k!(n-k)!}.
$$
