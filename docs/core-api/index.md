---
title: Core
sidebar_label: Overview
hide_title: false
slug: /core-api
---

Rivalis Core API implements multiple abstractions that will help you to develop your game flow and mechanics.

Rivalis will provide to you reusable structure of game logic that can be reused between multiple different games.

## Stages
**Stage** describes lifecycle of your game. One rivalis instance can hold one or multiple stages.

That meeans that you can develop multiple games or multiple different types of multiplayer flows using the same instance of Rivalis.

:::note
Read more about stages and how stages can be used in [Stages](/docs/core-api/stages) section 
:::
## Contexts
**Context** is the place where your game session and all your players (**Actors**) live.

On context creation, the context must be linked with already defined stage to inherit lifecycle and game logic.

:::note
Read more about contexts under [Contexts](/docs/core-api/contexts) section.
:::

## Actions
**Action** is part of Rivalis where game logic needs to be implemented. Actions can be reused between Stages.

:::note
Read more about actions under [Actions](/docs/core-api/actions) section.
:::