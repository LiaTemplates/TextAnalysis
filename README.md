<!--
author:   André Dietrich

email:    LiaScript@web.de

version:  0.0.1

language: en

narrator: US English Female

script:   https://cdn.jsdelivr.net/gh/liatemplates/textanalysis@0.0.1/dist/index.js

@Textanalysis.full: @Textanalysis.check(`["words", "syllables", "sentences","fleschReadingEase", "fleschKincaid", "gunningFog", "smog", "automatedReadabilityIndex", "colemanLiau", "linsearWrite", "daleChall", "readabilityconsensus", "readingtime", "speakingtime"]`)

@Textanalysis.FULL: @Textanalysis.check(`["words", "syllables", "sentences","FleschReadingEase", "FleschKincaid", "GunningFog", "Smog", "AutomatedReadabilityIndex", "ColemanLiau", "LinsearWrite", "DaleChall", "Readabilityconsensus", "Readingtime", "Speakingtime"]`)

@Textanalysis.time: @Textanalysis.check(`["words", "syllables", "sentences", "readingtime", "speakingtime"]`)

@Textanalysis.TIME: @Textanalysis.check(`["words", "syllables", "sentences", "Readingtime", "Speakingtime"]`)

@Textanalysis.base: @Textanalysis.check(`["words", "syllables", "sentences", "readabilityconsensus"]`)

@Textanalysis.BASE: @Textanalysis.check(`["words", "syllables", "sentences", "Readabilityconsensus"]`)

@Textanalysis.check
<script>
var checks = @0
var text = `@input`

for(var i=0; i< checks.length; i++) {
  console.html(window.Textanalysis(checks[i], text))
}

""
</script>

@end

-->

# TextAnalysis - Template

              --{{0}}--
This document defines basic text analysis functions macros for static text
analysis to determine readability, complexity and grade level of a particular
text. It is mainly based on the JavaScript package
[text-readability](https://www.npmjs.com/package/text-readability) and the
provided macros are intended to be used in trainig writing, to give students
instant feedback for written texts. All macros/tests can be added to
[LiaScript](https://LiaScript.github.io) code-blocks to make them editable.

__Try it on LiaScript:__

https://liascript.github.io/course/?https://raw.githubusercontent.com/liaTemplates/TextAnalysis/main/README.md

__See the project on Github:__

https://github.com/liaTemplates/TextAnalysis

              --{{1}}--
There are three ways to use this template. The easiest way is to use the
`import` statement and the url of the raw text-file of the master branch or any
other branch or version. But you can also copy the required functionionality
directly into the header of your Markdown document, see therefor the [last
slide](#implementation). And of course, you could also clone this project and
change it, as you wish.

           {{1}}
1. Load the macros via

   `import: https://raw.githubusercontent.com/liaTemplates/TextAnalysis/main/README.md`

2. Copy the definitions into your Project

3. Clone this repository on GitHub

## `@Textanalysis.check`


                    --{{0}}--
There is one simple macro that runs all defined tests, it is
`@Textanalysis.check`. It has to be attached to your Markdown code-block. It
receives only one parameter, which is a list of strings, put into a verbatim
elements (single backticks \`). The order of strings also define the order of
tests to be executed. Furthermore, if the command-string starts with a lower
case, only a simple value/result gets returned, with upper case you will get
also more information about the specific value and how it has to be interpreted.


```` Markdown
``` text
Playing games has always been thought to be important to
the development of well-balanced and creative children;
however, what part, if any, they should play in the lives
of adults has never been researched that deeply. I believe
that playing games is every bit as important for adults
as for children. Not only is taking time out to play games
with our children and other adults valuable to building
interpersonal relationships but is also a wonderful way
to release built up tension.
```
@Textanalysis.check(`[words", "syllables", "sentences"]`)
````

---

``` text
Playing games has always been thought to be important to
the development of well-balanced and creative children;
however, what part, if any, they should play in the lives
of adults has never been researched that deeply. I believe
that playing games is every bit as important for adults
as for children. Not only is taking time out to play games
with our children and other adults valuable to building
interpersonal relationships but is also a wonderful way
to release built up tension.
```
@Textanalysis.check(`["words", "syllables", "sentences"]`)

### List of tests

Currently you can select all of the following tests. For more information see
the source-code in
[src/index.js](https://github.com/LiaTemplates/TextAnalysis/blob/main/src/index.js).

* `automatedReadabilityIndex`:

  Returns the ARI (Automated Readability Index) which outputs a number that
  approximates the grade level needed to comprehend the text.

  For example if the ARI is 6.5, then the grade level to comprehend the text is
  6th to 7th grade.

  | Score | Age   | Grade Level        |
  | ----- | ----- | ------------------ |
  | 1     | 5-6   | Kindergarten       |
  | 2     | 6-7   | First/Second Grade |
  | 3     | 7-9   | Third Grade        |
  | 4     | 9-10  | Fourth Grade       |
  | 5     | 10-11 | Fifth Grade        |
  | 6     | 11-12 | Sixth Grade        |
  | 7     | 12-13 | Seventh Grade      |
  | 8     | 13-14 | Eighth Grade       |
  | 9     | 14-15 | Ninth Grade        |
  | 10    | 15-16 | Tenth Grade        |
  | 11    | 16-17 | Eleventh Grade     |
  | 12    | 17-18 | Twelfth grade      |
  | 13    | 18-24 | College student    |
  | 14    | 24+   | Professor          |

  [Wikipedia: Automated readability index](https://en.wikipedia.org/wiki/Automated_readability_index)

* `colemanLiauIndex`:

  This is a grade formula in that a score of 9.3 means that a ninth grader would
  be able to read the document.

  [Wikipedia: Coleman–Liau index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)

* `daleChallReadabilityScore`:

  Different from other tests, since it uses a lookup table of the most commonly
  used 3000 English words. Thus it returns the grade level using the New
  Dale-Chall Formula.

  | Score        | Notes                                                                |
  | ------------ | -------------------------------------------------------------------- |
  | 4.9 or lower | easily understood by an average 4th-grade student or lower           |
  | 5.0–5.9      | easily understood by an average 5th or 6th-grade student             |
  | 6.0–6.9      | easily understood by an average 7th or 8th-grade student             |
  | 7.0–7.9      | easily understood by an average 9th or 10th-grade student            |
  | 8.0–8.9      | easily understood by an average 11th or 12th-grade student           |
  | 9.0–9.9      | easily understood by an average 13th to 15th-grade (college) student |

  [Wikipedia: Dale–Chall readability formula](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula)

* `fleschKincaidGrade`:

  This is a grade formula in that a score of 9.3 means that a ninth grader would
  be able to read the document.

  [Wikipedia: Flesch–Kincaid grade level](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch%E2%80%93Kincaid_grade_level)


* `fleschReadingEase`:

  While the maximum score is 121.22, there is no limit on how low the score can
  be. A negative score is valid.

  | Score  | Difficulty       |
  | ------ | ---------------- |
  | 90-100 | Very Easy        |
  | 80-89  | Easy             |
  | 70-79  | Fairly Easy      |
  | 60-69  | Standard         |
  | 50-59  | Fairly Difficult |
  | 30-49  | Difficult        |
  | 0-29   | Very Confusing   |

  [Wikipedia: Flesch reading ease](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease)

* `gunningFog`:

  This is a grade formula in that a score of 9.3 means that a ninth grader would
  be able to read the document.

  | Fog Index | Reading level by grade |
  | --------- | ---------------------- |
  | 17        | College graduate       |
  | 16        | College senior         |
  | 15        | College junior         |
  | 14        | College sophomore      |
  | 13        | College freshman       |
  | 12        | High school senior     |
  | 11        | High school junior     |
  | 10        | High school sophomore  |
  | 9         | High school freshman   |
  | 8         | Eighth grade           |
  | 7         | Seventh grade          |
  | 6         | Sixth grade            |


  [Wikipedia: Gunning fog index](https://en.wikipedia.org/wiki/Gunning_fog_index)

* `linsearWriteFormula`:

  This is a grade formula in that a score of 9.3 means that a ninth grader would
  be able to read the document.

  It is a readability metric for English text, purportedly developed for the
  United States Air Force to help them calculate the readability of their
  technical manuals. It is specifically designed to calculate the United States
  grade level of a text sample based on sentence length and the number of words
  used that have three or more syllables.

  [Wikipedia: Linsear Write](https://en.wikipedia.org/wiki/Linsear_Write)

* `readabilityConsensus`:

  Based upon "Dale-Chall Readability Score", "Linsear Write Formula",
  "Coleman-Liau Index", "Automated Readability Index", "SMOG Index", "Fog
  Scale", " Flesch-Kincaid Grade Level", "Flesch Reading Ease formula", returns
  the estimated school grade level required to understand the text.

* `sentences`: Returns the number of sentences present in the given text.

* `smogIndex`:

  This is a grade formula in that a score of 9.3 means that a ninth grader would
  be able to read the document.

  Texts of fewer than 30 sentences are statistically invalid, because the SMOG
  formula was normed on 30-sentence samples. textstat requires atleast 3
  sentences for a result.

  [Wikipedia: SMOG](https://en.wikipedia.org/wiki/SMOG)

* `syllables`: Returns the number of syllables present in the given text.

* `words`: Calculates the number of words present in the text.
  (Punctuation is not taken into account)

* `readingTime`:

  The speed at which subjects read a text aloud tend varies between 228±30 words
  per minute for English. While proofreading materials, people are able to read
  English at 200 words per minute on paper, and 180 words per on a monitor.

  [Wikipedia: Reading and comprehension](https://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension)

* `speakingtime`:

  Audiobooks are recommended to be 150–160 words per minute, which is the range
  that people comfortably hear and vocalize words. Slide presentations tend to
  be closer to 100–125 words per minute for a comfortable pace.

  [Wikipedia: Speech and listening](https://en.wikipedia.org/wiki/Words_per_minute#Speech_and_listening)

## `@Textanalysis.full`

    --{{0}}--
The following macro runs all tests and gives an returns only the short results.

``` text
Playing games has always been thought to be important to
the development of well-balanced and creative children;
however, what part, if any, they should play in the lives
of adults has never been researched that deeply. I believe
that playing games is every bit as important for adults
as for children. Not only is taking time out to play games
with our children and other adults valuable to building
interpersonal relationships but is also a wonderful way
to release built up tension.
```
@Textanalysis.full


## `@Textanalysis.FULL`

    --{{0}}--
Use this macro to run all tests an provide more information on how the details
have to interpreted.

``` text
Playing games has always been thought to be important to
the development of well-balanced and creative children;
however, what part, if any, they should play in the lives
of adults has never been researched that deeply. I believe
that playing games is every bit as important for adults
as for children. Not only is taking time out to play games
with our children and other adults valuable to building
interpersonal relationships but is also a wonderful way
to release built up tension.
```
@Textanalysis.FULL


## `@Textanalysis.time` & `@Textanalysis.TIME`

    --{{0}}--
The two time macros can be used to estimate the reading and speaking time for
different contexts.

``` text
Playing games has always been thought to be important to
the development of well-balanced and creative children;
however, what part, if any, they should play in the lives
of adults has never been researched that deeply. I believe
that playing games is every bit as important for adults
as for children. Not only is taking time out to play games
with our children and other adults valuable to building
interpersonal relationships but is also a wonderful way
to release built up tension.
```
@Textanalysis.time

``` text
Playing games has always been thought to be important to
the development of well-balanced and creative children;
however, what part, if any, they should play in the lives
of adults has never been researched that deeply. I believe
that playing games is every bit as important for adults
as for children. Not only is taking time out to play games
with our children and other adults valuable to building
interpersonal relationships but is also a wonderful way
to release built up tension.
```
@Textanalysis.TIME

> **Note:** This could be improved in the future by combining this with the
> calculated reading complexity for different use-cases:
> **(1 grade & slower reading time)**

## Examples


``` text Obama, Farewell Speech
On Tuesday, January 10, I’ll go home to Chicago to say my
grateful farewell to you, even if you can’t be there in
person.

I’m just beginning to write my remarks. But I’m thinking
about them as a chance to say thank you for this amazing
journey, to celebrate the ways you’ve changed this country
for the better these past eight years, and to offer some
thoughts on where we all go from here.

Since 2009, we’ve faced our fair share of challenges, and
come through them stronger. That’s because we have never
let go of a belief that has guided us ever since our
founding — our conviction that, together, we can change
this country for the better. So I hope you’ll join me one
last time.
```
@Textanalysis.base


``` text Trump, Presidential Bid announcement
Thank you. It’s true, and these are the best and the
finest. When Mexico sends its people, they’re not sending
their best. They’re not sending you. They’re not sending
you. They’re sending people that have lots of problems, and
they’re bringing those problems with us. They’re bringing
drugs. They’re bringing crime. They’re rapists. And some,
I assume, are good people.

But I speak to border guards and they tell us what we’re
getting. And it only makes common sense. It only makes
common sense. They’re sending us not the right people.
```
@Textanalysis.base

## Implementation

``` html
script:   ./dist/index.js

@Textanalysis.full: @Textanalysis.check(`["words", "syllables", "sentences","fleschReadingEase", "fleschKincaid", "gunningFog", "smog", "automatedReadabilityIndex", "colemanLiau", "linsearWrite", "daleChall", "readabilityconsensus", "readingtime", "speakingtime"]`)

@Textanalysis.FULL: @Textanalysis.check(`["words", "syllables", "sentences","FleschReadingEase", "FleschKincaid", "GunningFog", "Smog", "AutomatedReadabilityIndex", "ColemanLiau", "LinsearWrite", "DaleChall", "Readabilityconsensus", "Readingtime", "Speakingtime"]`)

@Textanalysis.time: @Textanalysis.check(`["words", "syllables", "sentences", "readingtime", "speakingtime"]`)

@Textanalysis.TIME: @Textanalysis.check(`["words", "syllables", "sentences", "Readingtime", "Speakingtime"]`)

@Textanalysis.base: @Textanalysis.check(`["words", "syllables", "sentences", "readabilityconsensus"]`)

@Textanalysis.BASE: @Textanalysis.check(`["words", "syllables", "sentences", "Readabilityconsensus"]`)

@Textanalysis.check
<script>
var checks = @0
var text = `@input`

for(var i=0; i< checks.length; i++) {
  console.html(window.Textanalysis(checks[i], text))
}

""
</script>

@end

```
