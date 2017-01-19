---
layout: post
title: Then I saw the tests, now I'm a believer.
tags: agile, BDD, code quality, engineering, TDD, testing
status: publish
type: post
published: true
---
These days I was working on a small feature that had to be added to an application here at <a title="Local.ch AG, Official Swiss Phonebook" href="http://local.ch/">local.ch</a>. The application was originally written by some other developers and it was first time that I looked at that code. Everything would be OK, and I would not write this post at all if at one moment I didn't feel strong need to rewrite the application completely. To be clear, it is not kind of need that draws motivation in "Not my code, I'm smarter than others." source of frustration. Point is that this code really needs refactoring in order to grow in future and remain maintainable while adding new features to it. But that is by itself not a problem, what code doesn't need refactoring, especially your own!  And if you have no constant need to refactor things that could mean you didn't learn anything since last time you saw that code.

The problem becomes obvious and bit more acute when you figure out that, despite the fact that we try to keep our micro applications pretty simple with least possible code and logic, you don't have all clues about how that piece of software works. Then you become aware  that amount of time needed to get into all the bits of included functionalities is way bigger than just  refactoring the code. Therefore, you lose peak of your motivation since you instantly visualize all the non-engineering time you need to invest in gathering information instead of just doing it. But of course, when just doing it, at the end it should have the same function as before, I guess. So without some proof that you didn't degrade functionality, just do it approach would be even worse than not doing it.

And where would you expect to find up to date documentation in such case? Browsing the Wiki ... not ;)

While letting you think a bit, I'd tell you that at <a href="http://local.ch">local.ch</a> we are passionate about agile practices and testing in particular. We always try to cover our code with reasonable amount of coverage and quality of tests. Since I joined, I accepted this as a fact and acted in that sense, but was not believer in testing in the religious way. Not until I imagined ideal world where I would go to test cases and could understand all functionalities implemented in the code that these tests cover. And in more ideal world, I would be able to drop the code, leave the tests and write new code which would be proved as correct in the moment all tests get green again. But not when tests are written in the way to reflect bad implementation choices in the code and not thoroughly though through. Then you have to throw the tests as well and you are back at the start point.

I could imagine that in mentioned idealized model of the world you could continuously improve quality of the code, reduce price of its maintenance, add new features and experiment with different ways of implementing the same thing while exploring new approaches to solving old problems. And all that while being sure that you didn't break function of software that might in a case pay your salary at the end of the month.

Yes, and "The Beatles" are now in iTunes. Lucky us, the whole world has changed.
