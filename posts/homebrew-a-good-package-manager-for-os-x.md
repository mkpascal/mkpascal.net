---
title: 'Homebrew: A good package manager for OS X'
date: '2011-12-26'
---

We all need a simple package manager for OS X like apt-get, especially if you are a developer and you need specific tools.

If you used MacPorts (or Finks) in the past, now would be a good time to delete it. I used to say &#8220;oh no I can&#8217;t use this \___ tool&#8221; because MacPorts would just take too much time to install.

Try something simple called Homebrew. How simple? Just type :

<pre class="wp-code-highlight prettyprint">ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"</pre>

And&#8230; 30 seconds later, you can use it. For example, let&#8217;s say you want to install icecast, you just type :

<pre class="wp-code-highlight prettyprint">homebrew install icecast</pre>

You don&#8217;t even need root rights to install something, he will install everything inside the /usr/local folder. Goodbye Sudo, we don&#8217;t need you here.

It&#8217;s simple and fast. Want to know more about it? Check out their [website][1].

[1]: https://brew.sh/
