---
title: Set Theory
date: 2024-12-28
description: Personal notes on Set Theory
author: nullndr
tags:
  - math
  - notes
extra:
  math: true
banner_image: media/set-theory.webp
---

# Set Theory

Set theory is the **fundamental block** on which the entire mathematics is built upon. It has been generalized only in 1870s from [Georg Cantor](https://en.wikipedia.org/wiki/Georg_Cantor).
        
Even if the set theory is a quite recently mathematical branch, it preceeds all other branches: arithmetic studies the set of natural number; algebra studies the set of rational and real numbers and geometry studies sets of points, like segments.

Set theory was born as a necessity to formulate a general theory in order to organize all mathematicals theories.

## What is a set?

A set is a **collection** of distinct elements, the order of these unique elements does not matter.

These elements are also called **members** of the set.

> The notation of a set is __primitive__: it can't be defined in terms of simpler concepts.

We can find sets in our every day life, for example the set of books a library has, the set of libraries in a city, the set of cities in a country etc. 

A set can have a finite number of elements, like the books inside a library, or an infinite number of elements. 

A set with a finite number of elements is called a *finite set*, while a set with an infinite number of elements is called an *infinite set*.

Two special sets are defined: the **empty set** and the **universe set**.

### Empty set

The empty set, denoted with $\{\}$ or with the $\varnothing$ symbol, is a special set that has no element.

### Universe set

The universal set, denoted by $U$, is a set that has as elements all unique elements of all related sets.

The universal set depends on the context — it contains all elements under consideration in a given discussion.

---

## Notations

Before going further inside the set theory, it is worth introducing the notations for them.

Sets are typically denoted by an italic capital letter, like $A$, $B$, $C$ etc. 

To list the elements of a given set the enumeration notation is used. This lists the elements of a set between curly braces. For example, to represent the set $A$ of all natural numbers less than 8 we write the following:

$$ A = \{ 1, 2, 3, 4, 5, 6, 7 \} $$
We can also use a different notation called set-builder notation, specifying that a set is a set of elements that satisfies some logical formula. More specifically, if $P(x)$ is a logical formula depending on the variable $x$, then $\{x\,|\,P(x)\}$ denotes the set of all $x$ for which $P(x)$ is true, with the example above we have:

$$
A = \{ x\,|\,x < 8 \}
$$
In this notation, the vertical bar $|$ is read as "such that", and the whole formula can be read as $A$ is the set of all $x$ such that $x$ are less than 8.

---

## Element membership

We denote that an element is a member of a given set with the $\in$ symbol: given the previous set $A$, we write that

$$ 1 \in A $$

This can be read as 1 is a member of set $A$, or 1 is inside set $A$.

The symbol $\notin$ is the opposite of the $\in$ symbol, it denotes an element that is not a member of a given set: given the previous set $A$, we write that

$$ 8 \notin A $$

> Indeed the $A$ set definition was "the set of all natural numbers less than 8"

This can be read as 8 is not a member of set $A$, or 8 is not inside the set $A$.

If two sets $A$ and $B$ contain the same elements we define them as **equal**, denoted by $A = B$:

$$
\begin{aligned}
A &= \{ 1, 2 \} \\\\
B &= \{ 2, 1 \} \\\\
A &= B
\end{aligned}
$$

---

## Cardinality

The cardinality of a given set $A$ is the number of elements inside the set itself, denoted with $\mid A \mid$.

$$
\begin{aligned}
A &= \{ \text{blue}, \text{red}, \text{green}, \text{yellow} \} \\\\
\mid A \mid &= 4
\end{aligned}
$$

The empty set $\varnothing$ has a cardinality of $0$.

$$
\begin{aligned}
\mid \varnothing \mid &= 0
\end{aligned}
$$

> The cardinality of a set may also be denoted by $card(A)$ or $n(A)$

---

## Subsets and super sets

Between two sets there may exist a relation called **set inclusion**: if all elements inside set $A$ are also elements of $B$, then $A$ is a subset of $B$, denoted with $A \subseteq B$.

$$
\begin{aligned}
A &= \{ 2, 3, 4 \} \\\\
B &= \{ 1, 2, 3, 4, 5 \} \\\\
A &\subseteq B
\end{aligned}
$$

When $A$ is a subset of $B$, we can define $B$ as a super set of $A$, denoted with $B \supseteq A$.

$$
\begin{aligned}
A &= \{ 2, 3, 4 \} \\\\
B &= \{ 1, 2, 3, 4, 5 \} \\\\
B &\supseteq A
\end{aligned}
$$

If the set inclusion relation does not exist between two sets, then we can define $A$ as not being a subset of $B$, formally $A \not\subseteq B$, same for $B$ not being a super set of $A$: $B \not\supseteq A$.

Given the above definition, a set is always a subset of itself, but there may be cases where we would like to reject this definition.

For these cases we can define the term __proper subset__: the set $A$ is a proper subset of $B$ only if $A$ is a subset of $B$ and $A$ is not equal to $B$. 

We denote the fact that a set $A$ is a proper subset of $B$ with the symbol $\subset$. 

$$
\begin{aligned}
A &= \{ 2, 3, 4 \} \\\\
B &= \{ 1, 2, 3, 4, 5 \} \\\\
A &\subset B
\end{aligned}
$$

Likewise we denote a set $B$ being a proper super set of $A$ with the symbol $\supset$.

$$
\begin{aligned}
A &= \{ 2, 3, 4 \} \\\\
B &= \{ 1, 2, 3, 4, 5 \} \\\\
B &\supset A
\end{aligned}
$$

Note that the empty set $\varnothing$ is a proper subset of any set except itself.

---

## Power set

Given a set $A$, there exists a set called *power set* that contains as elements all subsets of $A$, including the empty set $\emptyset$ and the set $A$ itself. The power set of a set $A$ is denoted as $\mathcal{P}(A)$:

$$
\begin{aligned}
A = \{1, 2, 3\} \\
\mathcal{P}(A) = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\}, A\}
\end{aligned}
$$

The cardinality of the power set, denoted as $|\mathcal{P}(A)|$ is always $2^{|A|}$.

---

## Partitions

A *partition* of a set $A$ is a set of non-empty subsets of $A$ such that every element $a$ of $A$ belongs to exactly one of these subset (the subsets are non-empty mutually disjoint sets).

---

# Operations

Just like algebra has his operations on numbers, sets have their own operations.

## Union

The union of two or more sets is a set that contains all elements in the given sets, with no duplicated element. 

It's denotated with the $\cup$ symbol.

$$
\begin{aligned}
A &= \{ 2, 4, 6 \} \\\\
B &= \{ 2, 3, 5 \} \\\\
A \cup B &= \{ 2, 3, 4, 5, 6 \}
\end{aligned}
$$

The union is both commutative and associative

$$
\begin{aligned}
A \cup B &= B \cup A \\\\
A \cup (B \cup C) &= (A \cup B) \cup C
\end{aligned}
$$

and has two neutral elements: the $\varnothing$ set and the set itself

$$
\begin{aligned}
A \cup \varnothing &= A \\\\
A \cup A &= A
\end{aligned}
$$

## Intersection

The intersection of two or more sets is a set that contains all elements that belongs in all given sets. 

It's denotated with the $\cap$ symbol.

$$
\begin{aligned}
A &= \{ 2, 4, 6 \} \\\\
B &= \{ 2, 3, 5 \} \\\\
A \cap B &= \{ 2 \}
\end{aligned}
$$

Like union, the intersection is both commutative and associative

$$
\begin{aligned}
A \cap B &= B \cap A \\\\
A \cap (B \cap C) &= (A \cap B) \cap C
\end{aligned}
$$

It has only one neutral element: the set itself

$$
A \cap A = A
$$

While the $\varnothing$ set is the absorbing element of the intersection, because the intersection of any set with the $\varnothing$ set results in the $\varnothing$ set

$$
A \cap \varnothing = \varnothing
$$

## Set Difference

The set difference of two sets $A$ and $B$ is a set that contains all elements of $A$ that are not inside $B$.

It's denotated with the $−$ symbol and is formally defined as $A − B = \{ x ∣ x \in A \text{\,and\,} x \notin B \}$

$$
\begin{aligned}
A &= \{ 2, 4, 6 \} \\\\
B &= \{ 2, 3, 5 \} \\\\
A - B &= \{ 4, 6 \}
\end{aligned}
$$

The set difference is not commutative, indeed

$$
\begin{aligned}
A - B &= \{ 4, 6 \} \\\\
B - A &= \{ 3, 5 \}
\end{aligned}
$$

The set difference has two absorbing elements:

$$
\begin{aligned}
A - A &= \varnothing \\\\
A - U &= \varnothing
\end{aligned}
$$

The $\varnothing$ set is both the neutral element and one of the absorbing element of the set difference

$$
A - \varnothing = A \\\\
\varnothing - A = \varnothing
$$

## Symmetric Difference

The symmetric difference of two or more sets, also called __disjunctive union__, is a set that contains all unique elements of a set that are not inside the other sets.

It's defined as the union of the set difference $A − B$ with the set difference $B − A$

$$
\begin{aligned}
A &= \{ 1, 2, 5, 6 \} \\\\
B &= \{ 2, 3, 4, 7 \} \\\\
(A − B) \cup (B − A) &= \{ 1, 3, 4, 5, 6, 7 \}
\end{aligned}
$$

> The $\vartriangle$ symbol is also used to represent symmetric difference

The symmetric difference is both commutative and associative

$$
\begin{aligned}
A &= \{ 1, 2, 5, 6 \} \\\\
B &= \{ 2, 3, 4, 7 \} \\\\
A \vartriangle B &= B \vartriangle A \\\\
(A \vartriangle B) \vartriangle C &= A \vartriangle (B \vartriangle C)
\end{aligned}
$$

The $\varnothing$ set is the neutral element of the symmetric difference

$$
A \vartriangle \varnothing = A
$$

While the absorbing element is the set itself

$$
A \vartriangle A = \varnothing
$$

## Cartesian Product

The cartesian product of two sets $A$ and $B$, denoted by $A \times B$, is a set of ordered pairs $(a,b)$ where $a$ is an element of $A$, and $b$ is an element of $B$.

Formally it is defined as $A \times B = \{ (a,b) ∣ a \in A, b \in B \}$.

$$
\begin{aligned}
A &= \{ 1, 2 \} \\\\
B &= \{ 3, 4 \} \\\\
A \times B &= \{ (1,3), (1,4), (2,3), (2,4) \}
\end{aligned}
$$

The cartesian product is not commutative, because $A \times B$ is not the same as $B \times A$

$$
\begin{aligned}
A &= \{ 1, 2 \} \\\\
B &= \{ 3, 4 \} \\\\
A \times B &= \{ (1,3), (1,4), (2,3), (2,4) \} \\\\
B \times A &= \{ (3,1), (3,2), (4,1), (4,2) \}
\end{aligned}
$$

> Remember that the order inside a pair matters

The cartesian product of a set by the set itself is denoted by $A \times A$ or $A^2$.

The absorbing element of the cartesian product is the $\varnothing$ set

$$
A \times \varnothing = \varnothing
$$

## Complement

The complement of a set $A$, denoted by $A^\complement$ is the set difference of the universal set $U$ with $A$.

It is formally defined as $A^\complement = \{ x ∣ x \in U \land x \not\in A \}$

$$
\begin{aligned}
U &= \{ 1, 2, 3, 4, 5, 6, 7, 8, 9 \} \\\\
A &= \{ 1, 3, 5, 7, 9 \} \\\\
A^\complement = U − A &= \{ 2, 4, 6, 8 \}
\end{aligned}
$$

The complement of the complement a set $A$, denoted by $(A^\complement)^\complement$ is the set $A$ itself.

The union of set $A$ with the complement of itself results in the universal set $U$: $A \cup A^\complement=U$.

The intersection of set $A$ with the complement of itself results in the $\varnothing$ set: $A \cap A^\complement = \varnothing$.

---

## De Morgan's laws

In propositional logic, **De Morgan's laws** (also known as *De Morgan's theorem*), are a pair of transformation rules that are both valid rules of inference. The rules allow the expression of conjunctions and disjunctions purely in term of each other via negation.

1. $\neg (A \land B) = (\neg A) \lor (\neg B)$
2. $\neg(A \lor B) = (\neg A) \land (\neg B)$

In set theory, this gets translated in two ways:

$$
\begin{aligned}
A - (B \cup C) = (A - B) \cap (A - C) \\
A - (B \cap C) = (A - B) \cup (A - C)
\end{aligned}
$$
And

$$
\begin{aligned}
(A \cup B)^\complement = (A^\complement) \cap (B^\complement) \\
(A \cap B)^\complement = (A^\complement) \cup (B^\complement)
\end{aligned}
$$
