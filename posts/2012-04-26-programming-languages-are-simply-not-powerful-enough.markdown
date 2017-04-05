---
layout: post
title: Programming Languages Are Simply Not Powerful Enough
date: 2012-04-26 22:09
---

These days I'm reading [Thinking Forth](http://thinking-forth.sourceforge.net/).
A gem among programming classics now available for free under CC
license. It is remarkable in the way it explains the thinking principles
behind building elegant programs. The book is based on Forth programming
language, which has very small amount of primitives and even for someone
who never had experience with Forth before it is not blocker to grasping the
essence.

It is known since the early ages of programming, most elegant programs
are built as layers of "languages" or "dictionaries". These are represented by abstractions in
a program in order to facilitate expressing the ideas in a way
that is more related to the domain. Although this looks very native and
obvious, it is extremely hard to reach to the level where this becomes
natural in practice. Aforementioned __Thinking Forth__ dedicates parts to
explaining this principle.

Over my programming experience I have noticed one undeniable fact.
Application development starts becoming significantly harder in the
moment when level of abstraction in the application gets
insufficient. I called it __locking application down to the level of
abstraction__.

Motivation for this post comes from a quote:
<blockquote>
<b>In fact, you shouldn't write any serious application in Forth; as a language
it's simply not powerful enough. What you should do is write your own
language in Forth (lexicons) to model your understanding of the problem, in
which you can elegantly describe its solution</b>
</blockquote>

One simple example from everyday life: Imagine that you don't have in
your vocabulary notion of a __sum__. Therefore, if you would like to tell
someone to do a sum of some things you would always have to express the
process of summation in details instead of just telling __and then you sum these numbers__.
If you would like then to express more complex concepts that are based on
summation, you would not be able to because you will be locked down to
the level of abstraction which is broken. Your language will not be
powerful enough to express complex ideas.

As the quote says, which ever is your favorite programming language, it
is just not powerful enough to express complex concepts. It has a ways
to enable you to define primitives and means to combine them in order to
build higher levels of abstraction, but it is our job to express the
abstractions of the domain for the best economy of the expression.

For the further reading there are valuable resources going deeper in this topic
like [Structure and Interpretation of Computer
Programs](http://mitpress.mit.edu/sicp/full-text/book/book.html) which is
probably one of the best resources on principles of reasoning about
elegant program design.

One exceptionally good resource is the Guy Steel's keynote from OOPSLA'98 conference
about [Growing a Language](https://www.youtube.com/watch?v=_ahvzDzKdB0).
It clearly shows how language encapsulates power of expression or lack
of it and how it affects our ability to make beautiful and elegant
programs. As well it shows how ubiquitous the concept of growing a
languages is.

----------

This article got its second life on Hacker News. Quite interesting discussion with lots of great inputs developed and is worth reading it as addition to the article: [Article on HN](https://news.ycombinator.com/item?id=5302667 )
