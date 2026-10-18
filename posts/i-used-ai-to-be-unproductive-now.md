---
title: "I Used AI to Be Unproductive. Now So Can You."
date: 2026-07-15
standfirst: "A party game built from five plain-English prompts in the AI my workplace already provides. Pointless, and the cheapest AI training you will ever get."
tag: "AI & me"
status: "draft"
image: "assets/post-ai-unproductive.webp"
substack_url: "https://isaacpetersonau.substack.com/p/i-used-ai-to-be-unproductive-now"
ai_label: ""
hub_id: ""
---

This build will not save you a single minute. It won’t streamline a workflow or automate a report.

But it’s fun, and it’s simple to make. It’s a party game, built from a handful of plain-English prompts, and what comes out the other side is a working interactive tool that runs in a browser, on your work computer or your mobile phone.

And building it taught me more about prompting than most of the productivity experiments I’ve run this year.

---

## The game

It’s called the **Aussie Celebrity Quiz**. One web page. No app, no login, no accounts.

**It’s live right now:** [aussie-celebrity-quiz.netlify.app](https://aussie-celebrity-quiz.netlify.app)

The rules take ten seconds to explain:

One person hosts. Everyone else shouts answers.

![The Aussie Celebrity Quiz on a phone](/assets/tool-aussie-celebrity-quiz.webp "The Aussie Celebrity Quiz")

* The screen reveals clues about a famous Aussie, **hardest first**.

* Guess on clue one, score 3 points. Wait until clue six, score 1.

* First to call it gets the points. Highest score wins.

Eighteen celebrities, from Bradman to Margot Robbie. A lobby for player names, a live scoreboard, a winner’s screen. It runs off a phone in the middle of the table.

---

## Built inside the corporate fence

Here’s the part that matters. **I didn’t build this with a developer setup.** I built it with Microsoft Copilot Cowork, the AI I use at work to update documents.

That’s what it gets asked for, most days. Update the policy doc. Pull the numbers into a summary. Redraft the report that came back marked up. Useful, beige, forgettable.

The same tool that updates your documents will build you a working game. **The limitation was not knowing that this could be done at work.**

## Why pointless builds are the best training

There’s a real argument under the fun, and it’s this: **low-stakes builds are the cheapest AI training you will ever get.**

Think about what a build like this actually does:

**Writing a spec.** You have to describe the game before the AI can build it.

* **Iterating.** The first version is never right. You review, you correct, you resend.

* **Quality judgement.** Clue three spoils the answer. A fact is wrong. You catch it.

* **Shipping.** Getting a real thing in front of real people, even if the stakes are a laugh.

What it also shows is how much workplace software has changed. You are no longer stuck with what the tool ships with. Think a little outside the box, describe what you’ve imagined, and the AI your workplace already provides will build it for you: a one-of-a-kind presentation, a game, whatever the job actually needs.

## The five prompts

Here’s the structure, prompt by prompt. Swap “Aussie celebrities” for anything: 90s music, football players, your industry’s in-jokes, your own family.

**Prompt 1: the founding prompt.** Describe the whole game in one message:

> Build me a party quiz game as a single HTML file. Players guess a famous Australian celebrity from six clues, revealed one at a time, hardest clue first. Guessing early earns more points: 3 for clue one, sliding down to 1 by clue six. Include a lobby where I add player names, a button to award points to whoever guessed it, a running scoreboard, and a final winner screen. It needs to look good on a phone.

**Prompt 2: the content engine.** The game is only as good as its clues:

> Generate 18 famous Australian celebrities across acting, music, sport and TV. For each, write six clues ordered hardest to easiest. Clue one should be obscure biography only a superfan knows. Clue six should be a giveaway. Never mention the name or their most famous role before clue five. Verify every fact.

**Prompt 3: the flow check.** Make the AI walk the game as a player:

> Walk through one full round as if you’re the host. Describe every screen, every button press, and every score change from lobby to winner. Flag anything confusing or broken.

**Prompt 4: the hostile playtest.** My favourite prompt in any build:

> Act as a harsh play tester. Find every clue that gives the answer away too early, every fact that’s wrong, and every screen that’s awkward on a phone. List the problems first, then fix all of them.

**Prompt 5: the polish.** Make it yours:

> Restyle the whole game: [your colours, your fonts, your vibe]. Don’t touch the game logic.

Five prompts. That’s the skeleton. Everything after you adjust to get it right.

## Make it yours, then set it free

Mine didn’t stay a Copilot draft. I brought it home, restyled it to match my site, and put it on the internet for free.

Hosting cost: **$9 a month.** A single HTML file drops straight onto Netlify and I use Claude to deploy it, and you get a link anyone can open. Mine now lives with the rest of my builds at [isaacpeterson.au](/made/).

That last step matters more than it looks. **A file on your laptop is a toy. A link you can send is a product.** Even when the product is a party game.

## Take home lesson

Nothing about this was productive. That was the assignment.

But what I just walked you through is the same process I used to build other tools, career plans, newsletters and websites. It’s what built my [NSW Reform Navigator](/made/nsw-reform-navigator/), the tool an agency would have quoted six figures for. The serious build and the silly build are **the same skill**.

So this weekend, or this lunch break, build something useless. Your grandmother’s trivia. A quiz for the group chat. Something that makes six people laugh at a barbecue. I’ve been thinking about a Pun Generator, purely to get a few laughs.

You’ll come out the other side better at the serious stuff. The fun is the training.

**If this made you want to build something dumb, two asks:** subscribe so the next build lands in your inbox, and send this to the designated quiz person in your life. They know who they are.
