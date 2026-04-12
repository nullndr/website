---
title: Basic Algebraic Structures
date: 2026-03-12
description: How we operate on sets
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

A fundamental requirement we will often impose is **closure**: applying the operation to elements of $S$ must always produce an element still in $S$.

---

## Semigroups

A **semigroup** is a pair $(S, \cdot)$ where $S$ is a set and $\cdot$ is a binary operation such that the following properties hold:

1. **Closure**: for all $a, b \in S$,
  $$
  a \cdot b \in S
  $$
2. **Associativity**: for all $a, b, c \in S$,
  $$
  (a \cdot b) \cdot c = a \cdot (b \cdot c)
  $$

> Associativity is the key structural property here.

Two elements $a, b \in S$  are said to *commute* if $a \cdot b = b \cdot a$. A semigroup is called *abelian* (or *commutative semigroup*) if every $a, b \in S$ commute, such that:

$$
\forall a, b \in S, \quad a \cdot b = b \cdot a
$$

> The term abelian is more commonly used in the context of groups, but the notion of commutativity applies to any algebraic structure with a binary operation.

### Cancellation Laws

Given a semigroup $(S, \cdot)$ and an element $x \in S$, we say that:

- $x$ is **left cancellable** if, for all $a, b \in S$,
  $$
  x \cdot a = x \cdot b \implies a = b
  $$

- $x$ is **right cancellable** if, for all $a, b \in S$,
  $$
  a \cdot x = b \cdot x \implies a = b
  $$

A semigroup in which every element is left and right cancellable is called a *cancellative semigroup*.

> Not all semigroups satisfy cancellation. This is a strong additional property.

### Powers in a Semigroup

Let $a \in S$, we define $a^1 = a$ and for $n \in \mathbb{N}$ with $n > 1$ we define $a^{n+1} = a^n \cdot a$

Because of associativity, expressions like $a \cdot a \cdot a$ do not depend on how we place parentheses, so $a^n$ is well-defined.

> This is one of the first concrete consequences of associativity.

An element $x \in S$ is called *idempotent* if $x^2 = x$.

**Example:** In $(\mathbb{N}, +)$, the element $0$ is idempotent since $0 + 0 = 0$.

---

## Monoids

A semigroup $(M, \cdot)$ is called a **monoid** if there exists $e \in M$ (called the **identity**) such that

$$
\forall a \in M \quad e \cdot a = a \cdot e = a
$$

This element is **unique**, indeed let $e, e' \in M$ two identity elements, then

$$
e = e \cdot e' = e'
$$

Because of this, we can denote a monoid by the triple $(M, \cdot, e)$.

### Powers in a Monoid

The existence of the identity allows us to extend the definition of powers. For every $a \in M$, we define:
$$
a^0 = e
$$

Together with the recursive definition
$$
a^{n+1} = a^n \cdot a
$$
this gives a consistent definition of $a^n$ for all $n \in \mathbb{N}$.

The identity element is idempotent, indeed

$$
e^2 = e \cdot e = e
$$

### Invertible elements

Let $(M, \cdot, e)$ be a monoid, an element $a \in M$ is called **invertible** if there exists an element $b \in M$ such that

$$
a \cdot b = b \cdot a = e
$$

The element $b$ is called the **inverse** of a, and it is unique, indeed let $b, c \in M$ be two inverse of $a$, then

$$
b = b \cdot e = b \cdot (a \cdot c) = (b \cdot a) \cdot c = e \cdot c = c
$$

The uniqueness of the inverse of an element $a$ allow us to denote it by $a^{-1}$.

---

## Groups

A **group** is a monoid $(G, \cdot, e)$ where every element has an inverse.

Formally, a group $(G, \cdot, e)$ satisfies:

1. Associativity of the $\cdot$ operation
2. Identity element $e$
3. For every $a \in G$, there exists $a^{-1} \in G$ such that
  $$
  a \cdot a^{-1} = a^{-1} \cdot a = e
  $$

If the operation is also **commutative**, the group is called **abelian**, of course a group is abelian if the underlying semigroup is commutative.

We can now demonstrate that every group satisfies the cancellation law, indeed

$$
ab = ac \implies b = eb = (a^{-1}a)b = a^{-1}(ab) = a^{-1}(ac) = (a^{-1}a)c = ec = c
$$

and

$$
ba = ca \implies b = be = b(aa^{-1}) = (ba)a^{-1} = (ca)a^{-1} = c(aa^{-1}) = ce = c
$$

---

## Subgroups

Let $(G, \cdot, e)$ be a group, a **subgroup** is a subset $H \subseteq G  \ne \emptyset$ that is itself a group under the same operation, such that:

1. $\forall a, b \in H$, $a \cdot b \in H$
2. $\forall a \in H$, $a^{-1} \in H$

It is clear that $e \in H$ because $\forall a \in H$, $a \cdot a^{-1} = e \in H$.

A subgroup $H \le G$ is called **proper** if $H \neq G$.

We write $H \le G$ to denote that $H$ is a subgroup of $G$, and $H < G$ if $H$ is a proper subgroup.

It is easy to verify that a nonempty subset $H \subseteq G$ is a subgroup if and only if
$$
\forall a, b \in H,\ a^{-1} \cdot b \in H
$$

Indeed, if $H \le G$, then for $a, b \in H$, we have $a^{-1} \in H$ and thus $a^{-1} \cdot b \in H$.

Conversely, suppose $H \neq \emptyset$ and $a^{-1} \cdot b \in H$ for all $a, b \in H$. Then:
- Taking $a = b$, we get $e \in H$
- Taking $b = e$, we get $a^{-1} \in H$
- Then closure follows since $a \cdot b = (a^{-1})^{-1} \cdot b \in H$

### Intersection of subgroups

Let $(G, \cdot, e)$ be a group and let $\{H_i\}_{i \in I}$ be a family of subgroups of $G$, then
$$
H = \bigcap_{i \in I} H_i
$$

is also a subgroup of $G$.

Indeed, since $e \in H_i$ for all $i \in I$, we have $e \in H$. Moreover, if $x, y \in H$, then $x, y \in H_i$ for all $i \in I$, hence $x^{-1} \cdot y \in H_i$ for all $i \in I$, so $x^{-1} \cdot y \in H$.

### Unions of subgroups

Let $(G, \cdot, e)$ be a group, and let $H$ and $K$ be subgroups of $G$, then
$$
H \cup K \text{ is a subgroup of } G \iff H \subseteq K \text{ or } K \subseteq H
$$

This implies that a group cannot be written as the union of two proper subgroups.

Indeed, suppose by contradiction that there exist two proper subgroups $H, K < G$ such that
$$
G = H \cup K
$$

Then by the previous statement, either $H \subseteq K$ or $K \subseteq H$. Suppose $H \subseteq K$, then
$$
G = H \cup K = K
$$
which contradicts the fact that $ K $ is a proper subgroup of $G$.

---

## Rings

A **ring** is a triple $(R, +, \cdot)$ where $R$ is a set, $+$ is an binary operation $R$ and $\cdot$ is an associative binary operation on $R$ such that the following properties hold:

1. $(R, +, 0)$ is an abelian group
2. $(R, \cdot)$ is a semigroup
3. Distributive laws hold:
  $$
  a \cdot (b + c) = a \cdot b + a \cdot c
  $$
  $$
  (a + b) \cdot c = a \cdot c + b \cdot c
  $$

If there exists an element $1 \in R$ such that $1 \ne 0$ and $\forall a \in R$, $1 \cdot a = a \cdot 1 = a$ then $A$ is called a **unitary ring** and $1$ is called the **unity** of the ring.

This element is **unique**, like we said in the groups.

Given two elements $a, b \in R$ we say that they **commute** if $a \cdot b = b \cdot a$. A ring is called **commutative ring** if $\forall a, b \in R$, $a \cdot b = b \cdot a$.

### Units of a Ring

We now define the set of **units** of $R$, denoted by $U(R)$ that is the set of all elements in $R$ that are invertible with respect to the $\cdot$ operation:

$$
U(R) = \{\forall a \in R | \exists b \in R : a \cdot b = b \cdot a = 1 \}
$$

> The set $U(R)$ is a group under the $\cdot$ application

---

## Subrings

Let $(R, +, \cdot)$ be a ring, a **subring** is a subset $S \subseteq R \ne \emptyset$ that is itself a ring with the same operations, such that

1. S is a subgroup of $(R, +, 0)$
2. $\forall a, b \in S$, $a \cdot b \in S$

In the case $(R, +, \cdot)$ is a unitary ring, then the following is required as well

3. $1 \in S$

### Intersection of subrings

Let $(R, +, \cdot)$ be a ring and let $\{S_i\}_{i \in I}$ be a family of subrings of $R$, then
$$
S = \bigcap_{i \in I} S_i
$$

is also a subring of $R$.

Indeed, $S$ is a subgroup of $(R, +, 0)$. For $a, b \in S$ then $\forall i \in I$, $a, b \in S_i$, then $\forall i \in I$, $a \cdot b \in S_i$. Thus $a \cdot b \in S$. This demonstrates that $S$ is a subring of $R$. If $R$ is a unitary ring, then $\forall i \in I$, $1 \in S_i$ and then $1 \in S$.
