# _Un_ acceptable Ads

This repository contains work that we did hacking on ad-blockers for our CS740 project.

We forked two Chrome extensions for this project:
 - [Perceptual Blocker](https://github.com/citp/ad-blocking), by a research group at Princeton [1]
 - [uBlock Origin](https://github.com/gorhill/uBlock), a popular ad-blocker for Google Chrome

We added the ability to set an “Ad Tolerance”, a configurable setting from 0-100% which determines what proportion of ads will be shown to the user on any given page. If the user has their tolerance set to 0%, the extension will block all ads like usual, and if the user has their tolerance set to 100% then the extension won’t function as an ad-blocker at all. Any setting between 0 and 100% will result in each ad element probabilistically being blocked.

[1] STOREY, G., REISMAN, D., MAYER, J., AND NARAYANAN, A. The future of ad blocking: An analytical framework and new techniques. http://randomwalker.info/publications/ad-blocking-framework-techniques.pdf