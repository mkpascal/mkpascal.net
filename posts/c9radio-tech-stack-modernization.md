---
title: Behind C9's Tech Stack Modernization
date: '2023-07-01'
---

#### **Time for Some Tech Stack Modernization!**

C9 Radio is a recognized French non-profit internet radio station that I personally maintain. This station was established back in 2005, and over time, it accumulated quite a bit of technical debt.

Given its non-profit, ad-free nature, the team turnover rate has consistently been high. Consequently, we faced the challenge of dealing with the stacks left behind by previous teams.

With that said, let's dive into the modernization process, starting with our infrastructure...

#### Infrastructure Revamp

Previously, the majority of our stack operated on bare-metal servers. Provisioning servers required manual installation of Debian on each one.

Clearly, this manual process *needed* to be retired.

We've since transitioned everything into containers & orchestration, which involved significant code rewrite in both of our main stacks. Many of our processes were entangled with legacy services that had to be dockerized and orchestrated.

#### Streaming Stack Evolution

Our streaming stack has a rich history. In terms of streaming delivery, we've shifted from a mix of SHOUTcast, Steamcast, and Icecast to predominantly using HLS for streaming across all our platforms: websites and mobile apps.

While we're keeping Icecast for third-party compatibility (TuneIn, Apple Radio), the move to HLS was *pivotal*.

On the backend side, we used to stream directly from our studio to the delivery servers. Early on, we've adopted Liquidsoap to improve stability and consistency.

Overall, this stack upgrade brought about some challenges:
- Ensuring seamless communication between both streaming stacks.
- Addressing audio latency.
- Decoupling the web stack from the streaming stack.

#### Web Stack Overhaul

Our previous web stack was antiquated, relying on PHP and jQuery. It was a homegrown CMS with no documentation. Maintenance became unsustainable, necessitating manual updates via SFTP for individual PHP files.

To rectify this, we transitioned to a modern Rails/React stack. We opted for a well-documented and stable web framework, rewriting a substantial amount of code.

This included:
- Always embracing common Rails concepts, including Turbo Hotwire - while React is used whenever it is necessary.
- Migrating from legacy HTTP streaming delivery to full HLS streaming.
- Decoupling and rewriting songs, shows, and various legacy APIs.

Much like our streaming stack, the new web stack was containerized from the outset. All stacks' repositories were stored on GitHub, including deployment/CI processes using GitHub Actions.

#### Mobile App Redesign & Visual Identity Refresh

Our mobile application underwent a complete redesign and redevelopment using Flutter. This approach enabled us to create a cross-platform mobile platform for iOS and Android.

We previously maintained separate code bases in Swift and Java, resulting in inconsistent apps across platforms in terms of design, functionality, and user experience.

We seized the opportunity to refresh our visual identity as well, giving our station a fresh look both inside and out.

> ##### *We shouldn't always associate technical debt with something bad.*

Tackling technical debt is often a necessary challenge, but it doesn't always have to be viewed negatively. The more you deal with it, the more adept you become, and it can even become an enjoyable endeavor.

In the end, it provides an excellent opportunity to reflect on your work, questioning everything from a technical perspective to practical editorial direction.

