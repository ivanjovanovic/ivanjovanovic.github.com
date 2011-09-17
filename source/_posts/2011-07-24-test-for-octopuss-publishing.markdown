---
layout: post
title: "Test for Octopuss Publishing"
date: 2011-07-24 18:47
comments: true
categories: 
---

First and obvious observation is that with CoffeeScript you need additional tool in your toolset which will continuously compile your work to JavaScript. I used Jasmine for writing tests and I based my setup on this gist which proposes using guard Ruby gem for tracking changes and compiling CoffeeScript files into JavaScript ones.

It looked a bit weird at start, but after couple of hours playing it started getting better. One thing I had always to do is to look in the actual compiled JavaScript to see how to do some things i.e. how to pass index to function that maps an array. But it was intuitive enough that I almost didn’t need official documentation. Here I have to tell that it might not be as intuitive to people without experience with writing Ruby and Python code or lack of understanding for rather mathematical

