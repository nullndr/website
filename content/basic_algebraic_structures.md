---
title: Basic Algebraic Structures
date: 2026-03-12
description: Simple notes for basic algebraic structures 
author: nullndr
tags:
  - math
  - notes
extra:
  math: true
---

# Algebraic Structures

Once we have defined our [set](./set-theory.html) we want to define the operations, normally binary operations, on the elements of such set.
The operations we define must also satisfy a finite set of identities called *axioms*.

The combination of a nonempty set, the operations on the elements and the axioms for these operation is what we call **algebric structure**.

## Binary operations

A **binary operation** on a set $S$ is a function

$$
\cdot : S \times S \to S
$$

that takes two elements of $S$ and returns another element of $S$.

---

## Semigroups

A **semigroup** is a pair $(S, \cdot)$ where $S$ is a set and $\cdot$ is a binary *associative* operation:

$$
\forall a, b, c \in S \implies (a \cdot b) \cdot c = a \cdot (b \cdot c)
$$

> Associativity is the key structural property here.

For brevity, we will often omit the symbol $\cdot$ and write $ab$ instead of $a \cdot b$, whenever the meaning is clear from the context.

Two elements $a, b \in S$  are said to *commute* if $ab = ba$. A semigroup is called *abelian* (or *commutative semigroup*) if every $a, b \in S$ commute, such that:

$$
\forall a, b \in S, \quad ab = ba
$$

> The term abelian is more commonly used in the context of groups, but the notion of commutativity applies to any algebraic structure with a binary operation.

We can also use the addition notation $+$, with it the *associative* property can be defined as the following:

$$
\forall a, b, c \in S \implies (a + b) + c = a + (b + c)
$$

### Cancellation Laws

Given a semigroup $(S, \cdot)$ and an element $x \in S$, we say that:

- $x$ is **left cancellable** if, $\forall a, b \in S$,
  $$
  xa = xb \implies a = b
  $$

- $x$ is **right cancellable** if, $\forall a, b \in S$,
  $$
  ax = bx \implies a = b
  $$

A semigroup in which every element is left and right cancellable is called a *cancellative semigroup*.

> Not all semigroups satisfy the cancellation law. This is a strong additional property.

### Powers in a Semigroup

Let $a \in S$, we define the **positive powers** of an element $a$ in the following way:

$$
a^{n} =
\begin{cases}
a^1 = a \\
a^{n+1} = a^na
\end{cases}
$$

Because of associativity, expressions like $a \cdot a \cdot a$ do not depend on how we place parentheses, so $a^n$ is well-defined.

> This is one of the first concrete consequences of associativity.

An element $x \in S$ is called *idempotent* if $x^2 = x$.

**Example:** In $(\mathbb{N}, +)$, the element $0$ is idempotent since $0 + 0 = 0$.

With the addition notation $+$ the powers are called *multiplies*, defined as

$$
a^{n} =
\begin{cases}
a^1 = a \\
a^{n+1} = a^n + a
\end{cases}
$$

---

## Monoids

A semigroup $(M, \cdot)$ is called a **monoid** if there exists $e \in M$ (called the **identity element**) such that

$$
\forall a \in M \quad ea = ae = a
$$

This element is **unique**, indeed let $e, e' \in M$ two identity elements, then

$$
e = ee' = e'
$$

Because of this, we can denote a monoid by the triple $(M, \cdot, e)$.

### Powers in a Monoid

The existence of the identity allows us to extend the definition of powers. For every $a \in M$, we define:
$$
a^0 = e
$$

Together with the recursive definition
$$
a^{n+1} = a^na
$$
this gives a consistent definition of $a^n$ for all $n \in \mathbb{N}$.

The identity element is idempotent, indeed

$$
e^2 = ee = e
$$

### Invertible elements

Let $(M, \cdot, e)$ be a monoid, an element $a \in M$ is called **invertible** if there exists an element $b \in M$ such that

$$
ab = ba = e
$$

The element $b$ is called the **inverse** of a, and it is unique, indeed let $b, c \in M$ be two inverse of $a$, then

$$
b = be = b(ac) = (ba)c = ec = c
$$

The uniqueness of the inverse of an element $a$ allow us to denote it by $a^{-1}$.

> The name **inverse** is used withing the multiplication notation, if we use the addition notation, then the inverse element is called the **opposite**

---

## Groups

A **group** is a monoid $(G, \cdot, e)$ where every element has an inverse.

Formally, a group $(G, \cdot, e)$ satisfies:

1. Associativity of the $\cdot$ operation
2. There exists the identity element $e$
3. For every $a \in G$, there exists $a^{-1} \in G$ such that
  $$
  aa^{-1} = a^{-1}a = e
  $$

If the operation is also **commutative**, the group is called **abelian**, of course a group is abelian if the underlying semigroup is commutative.

We can now demonstrate that every group satisfies the cancellation law, indeed if $ab = ac$ then

$$
b = eb = (a^{-1}a)b = a^{-1}(ab) = a^{-1}(ac) = (a^{-1}a)c = ec = c
$$

similarly, if $ba = ca$ then

$$
b = be = b(aa^{-1}) = (ba)a^{-1} = (ca)a^{-1} = c(aa^{-1}) = ce = c
$$

---

## Rings

A **ring** is a triple $(R, +, \cdot)$ where $R$ is a set, $+$ is a binary operation and $\cdot$ is an associative binary operation such that the following properties hold:

1. $(R, +, 0)$ is an abelian group
2. $(R, \cdot)$ is a semigroup
3. Distributive laws hold:
  $$
  a(b + c) = ab + ac
  $$
  $$
  (a + b)c = ac + bc
  $$

Given two elements $a, b \in R$ we say that they **commute** if $ab = ba$. A ring is called **commutative ring** if $\forall a, b \in R$, $ab = ba$.

---

## Unitary rings

The $\cdot$ operation in our ring $(R, + \cdot)$ may not have an *identity element 1* such that $\forall a \in R$, $a \cdot e = e \cdot a = a$, if this element does exist, $e$ is called the **unity** of the ring.

Like for groups, this element is **unique** and with it, the subgroup $(R, \cdot)$ becomes a monoid $(R, \cdot, 1)$, we can then call the ring $(R, +, \cdot)$ a **unitary ring**.

---

## Commutative rings

Given a ring $(R, +, \cdot)$ we already know that the group under the $+$ operation is *abelian*, such that $\forall a, b \in R$, $a + b = b + a$.

We did not put such constraint for the $\cdot$ operation, if such property holds, thus $\forall a, b \in R$, $a \cdot b = b \cdot a$ we call the ring $(R, +, \cdot)$ a **commutative ring**.

---

## Integral domains

To define an integral domain we must first take a step back and define what a *zero divisor* is. A **zero divisor** is an element $a \ne 0 \in R$ such that there exists $x \ne 0 \in R$ with $ax = 0$.

The basic set of numbers we can think of is the integers $\mathbb{Z}$ which *does not* include zero divisor, indeed $\forall a, b \in \mathbb{Z}, ab = 0 \iff a = 0 \text{ or } b = 0$. 

We can see an example in $\mathbb{Z}/4\mathbb{Z}$ through a [Cayley table](https://en.wikipedia.org/wiki/Cayley_table):

<table>
  <tr><td>·</td><td>0</td><td>1</td><td>2</td><td>3</td></tr>
  <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
  <tr><td>1</td><td>0</td><td>1</td><td>2</td><td>3</td></tr>
  <tr><td>2</td><td>0</td><td>2</td><td>0</td><td>2</td></tr>
  <tr><td>3</td><td>0</td><td>3</td><td>2</td><td>1</td></tr>
</table>

We note that $2 \cdot 2 = 0$ so $2$ is a *zero divisor*, with it we can now finally define an integral domain.

An **integral domain** is a commutative ring $(R, +, \cdot)$ without zero divisors, like $\mathbb{Z}$.

---

## Division rings

A **division ring** is a unitary ring $(R, +, \cdot)$ such that every non-zero element in $R$ have an inverse under the $\cdot$ operation, meaning that $(R - \{0\}, \cdot, 1)$ is a group.

> The commutative property is not required, if it is present, then the structure becomes a [field](#fields).

---

## Fields

A **field** is a commutative unitary ring $(R, +, \cdot)$ such that every non-zero element in $R$ have an inverse under the $\cdot$ operation, meaning that $(R - \{0\}, \cdot, 1)$ is an abelian group.
