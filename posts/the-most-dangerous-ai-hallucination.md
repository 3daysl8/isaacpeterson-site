---
title: "The Most Dangerous AI Hallucination Looks Exactly Like a Fact"
date: 2026-07-11
standfirst: "The dangerous ones aren't fake citations. They're opinions filed under \"verified facts.\""
tag: "AI & me"
status: draft
image: assets/post-ai-hallucination.webp
substack_url: https://isaacpetersonau.substack.com/p/the-most-dangerous-ai-hallucination
---
I used Claude to analyse two affidavits for a legal case. It produced a report identifying inconsistencies in the respondents’ evidence, disputed facts, and the contribution of the witness affidavit to a favourable result.

On face value it was positive and that was where a seed of doubt crept in. It was too positive and that’s where a proceeded to craft a prompt that found hallucinations. The prompt is attached for download; it will work across all queries and outputs.

The dangerous hallucinations are opinions filed under “verified facts.”

Most people picture an AI hallucination as a fake court case with a made-up citation. The dangerous ones are harder to spot.

\> The dangerous ones look exactly like facts.

AI can take the title of an article and confidently invent a 1500-word opinion piece about content it never read. I watched it happen in a real one. Here’s what it looked like, why it happens, and the skill that caught it.

## Why AI invents facts that sound true
Start with the mechanism, because it explains everything.

**A language model doesn’t look up facts. It predicts words.** When you prompt it, it calculates the most statistically probable next sequence of text, not the true one. Fluency is the goal. Accuracy is a side effect.

That’s why the output is so dangerous when it’s wrong. The model will **weave plausible connections between things that were never connected**, because coherent language is its only directive.

In professional work, that shows up as:

-   Code that’s syntactically perfect and logically broken.
    
-   Market stats attributed to sources that were never real.
    

## The bias hiding in a legal brief
The setting was family law witness preparation, ahead of a court date. An AI built a consolidated summary from two sworn affidavits: the applicant’s witness, and the respondent’s denials.

It looked clean. It was not.

Sitting inside the **“verifiable facts”** section were claims that were nothing of the sort:

-   One party’s _interpretation_ of why someone helped them, presented as documented fact.
    
-   A guess about someone’s motive for moving cities, written as if proven.
    
-   Editorial commentary arguing certain payments “weren’t consistent with friendship.”
    
-   A phrase from the other side reframed as a “tacit admission”: a legal argument.
    

## Better prompts help, but they don’t finish the job
The first line of defence is prompting like you’re handing over an assignment, not asking a question.

-   **Ground it.** by giving the model source material and requiring answers only from that.
    
-   **Role-play.** Define hard boundaries: _“You are a compliance officer; responses must follow these rules.”_
    
-   **Constrain it.** Fewer words, fixed format, tight scope. **The narrower the instruction, the less room to invent.**
    

This reduces errors, but the deeper problem remains.

\> A well-grounded prompt still produced that biased legal summary, because the bias wasn’t a made-up fact. It was interpretation, and interpretation slips past a good prompt.

## The fix: point a second AI at the first
The catch wasn’t better proofreading. It was **appointing an auditor.**

A second AI was pointed back at the document with one job: **assume the report is biased and prove it.** It flagged every one of those items: the motives, the commentary, the second-hand claims narrated as verified evidence.

Then the document was rebuilt. Every line was reframed as **“the Witness states”** or **“the Respondent states.”** Contested claims got flagged inline. The advocacy was stripped out of the “facts.”

## The prompt is the whole trick
The auditor only worked because of _how_ it was told to look. Not “check this.” **Three specific attacks:**

1.  **False positives:** find interpretations, emotion, or one party’s viewpoint masquerading as cold fact.
    
2.  **Extract validation gaps:** find claims the source doesn’t fully support without the AI connecting dots that weren’t connected.
    
3.  **Re-classification:** move anything that’s one party’s _claim_ out of the “fact” section and into “contested.”
    

That’s the reusable move. **The auditor prompt isn’t a question. It’s an assignment to attack.** Run it against any AI output where being wrong actually costs you.

Because the lesson from that document holds everywhere: honesty about what’s second-hand doesn’t weaken your work. **Overclaiming does**, and your AI will overclaim for you unless something is built to catch it.

---

_I’ve put the exact auditor prompt into a one-page kit you can save and paste. Grab it here, free:_

[**Download: Quiet Tools 01 Ai Auditor**](/assets/posts/the-most-dangerous-ai-hallucination/quiet-tools-01-ai-auditor.pdf) (PDF)

_Thanks for reading. I build with AI and share what I learn as I go. Subscribe. It’s free. [Subscribe on Substack](https://isaacpetersonau.substack.com/subscribe)._
