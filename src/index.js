const rs = require('../node_modules/text-readability')

window.textquality = function(fctName, text) {
  var full = isUpper(fctName)
  switch(fctName.toLowerCase()) {
    case "automatedreadabilityindex":
    case "automatedreadability":
    case "automatedindex":
    case "automated":
    case "auto":{
      return automatedReadabilityIndex(text, full)
    }

    case "colemanliauindex":
    case "colemanliau" :
    case "coleman":
    case "liau": {
      return colemanLiauIndex(text, full)
    }

    case "dalechallreadabilityscore":
    case "dalechallreadability":
    case "dalechallscore":
    case "dalechall": {
      return daleChallReadabilityScore(text, full)
    }

    case "fleschkincaidgrade":
    case "fleschkincaid":
    case "fleschgrade": {
      return fleschKincaidGrade(text, full)
    }

    case "fleschreadingease":
    case "fleschreading":
    case "fleschease": {
      return fleschReadingEase(text, full)
    }

    case "gunningfog":
    case "gunning":
    case "fog": {
      return gunningFog(text, full)
    }

    case "linsearwriteformula":
    case "linsearwrite":
    case "linsearformula":
    case "linsear": {
      return linsearWriteFormula(text, full)
    }

    case "readabilityconsensus":
    case "readability":
    case "consensus": {
      return textStandard(text, full)
    }

    case "sentences":
    case "sentence": {
      return `<b>Sentence Count: ${rs.sentenceCount(text)}</b>`
    }

    case "smogindex":
    case "smog": {
      return smogIndex(text, full)
    }

    case "syllables":
    case "syllable": {
      return `<b>Syllable Count: ${rs.syllableCount(text, lang='en-US')}</b>`
    }

    case "words":
    case "word": {
      return `<b>Word Count: ${rs.lexiconCount(text, removePunctuation=true)}</b>`
    }

    case "readingtime": {
      return readingtime(text, full)
    }
    case "speakingtime": {
      return speakingtime(text, full)
    }
  }
};


function fleschKincaidGrade(text, full) {
  var score = rs.fleschKincaidGrade(text)

  var result = `<b>Flesch-Kincaid Grade Level: ${score}</b>`

  if (full) {
    result += p(`This is a grade formula in that a score of 9.3 means that a ninth grader would be able to read the document.
<a href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch%E2%80%93Kincaid_grade_level" rel="nofollow">Wikipedia: Flesch–Kincaid grade level</a>`)
  }

  return result
}


function fleschReadingEase(text, full) {
  var score = rs.fleschReadingEase(text)

  var result = `<b>Flesch Reading Ease formula: ${score}</b>`

  if (full) {
    result += p(`While the maximum score is 121.22, there is no limit on how low the score can be. A negative score is valid. <table border="2" style="color: lightblue">
        <thead>
          <tr>
            <th>Score</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          <tr ${mark(score,90,101)}>
            <td>90-100</td>
            <td align="center">Very Easy</td>
          </tr>
          <tr ${mark(score,80,90)}>
            <td>80-89</td>
            <td align="center">Easy</td>
          </tr>
          <tr ${mark(score,70,80)}>
            <td>70-79</td>
            <td align="center">Fairly Easy</td>
          </tr>
          <tr ${mark(score,60,70)}>
            <td>60-69</td>
            <td align="center">Standard</td>
          </tr>
          <tr ${mark(score,50,60)}>
            <td>50-59</td>
            <td align="center">Fairly Difficult</td>
          </tr>
          <tr ${mark(score,30,50)}>
            <td>30-49</td>
            <td align="center">Difficult</td>
          </tr>
          <tr ${mark(score,0,30)}>
            <td>0-29</td>
            <td align="center">Very Confusing</td>
          </tr>
        </tbody>
      </table><a href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease" rel="nofollow">Wikipedia: Flesch reading ease</a>`)
  }

  return result
}

function gunningFog(text, full) {
  var score = rs.gunningFog(text)

  var result = `<b>The Fog Scale: ${score}</b>`

  if (full) {
    result += p(`This is a grade formula in that a score of 9.3 means that a ninth grader would be able to read the document. <table border="2" style="color: lightblue">
        <thead>
          <tr>
            <th>Fog Index</th>
            <th>Reading level by grade</th>
          </tr>
        </thead>
        <tbody>
          <tr ${mark(score,17,18)}>
            <td>17</td>
            <td align="center">College graduate</td>
          </tr>
          <tr ${mark(score,16,17)}>
            <td>16</td>
            <td align="center">College senior </td>
          </tr>
          <tr ${mark(score,15,16)}>
            <td>15</td>
            <td align="center">College junior</td>
          </tr>
          <tr ${mark(score,14,15)}>
            <td>14</td>
            <td align="center">College sophomore</td>
          </tr>
          <tr ${mark(score,13,14)}>
            <td>13</td>
            <td align="center">College freshman</td>
          </tr>
          <tr ${mark(score,12,13)}>
            <td>12</td>
            <td align="center">High school senior</td>
          </tr>
          <tr ${mark(score,11,12)}>
            <td>11</td>
            <td align="center">High school junior</td>
          </tr>
          <tr ${mark(score,10,11)}>
            <td>10</td>
            <td align="center">High school sophomor</td>
          </tr>
          <tr ${mark(score,9,10)}>
            <td>9</td>
            <td align="center">High school freshman</td>
          </tr>
          <tr ${mark(score,8,9)}>
            <td>8</td>
            <td align="center">Eighth grad</td>
          </tr>
          <tr ${mark(score,7,8)}>
            <td>7</td>
            <td align="center">Seventh grade</td>
          </tr>
          <tr ${mark(score,6,7)}>
            <td>6</td>
            <td align="center">Sixth grade</td>
          </tr>
        </tbody>
      </table><a href="https://en.wikipedia.org/wiki/Gunning_fog_index" rel="nofollow">Wikipedia: Gunning fog index</a>`)
  }

  return result
}


function smogIndex(text, full) {
  var score = rs.smogIndex(text)

  var result = `<b>SMOG Index: ${score}</b>`

  if (full) {
    result += p(`This is a grade formula in that a score of 9.3 means that a ninth grader would be able to read the document.
Texts of fewer than 30 sentences are statistically invalid, because the SMOG formula was normed on 30-sentence samples. textstat requires atleast 3 sentences for a result.
<a href="https://en.wikipedia.org/wiki/SMOG" rel="nofollow">Wikipedia: SMOG grade</a>`)
  }

  return result
}


function automatedReadabilityIndex(text, full) {
  var score = rs.automatedReadabilityIndex(text)

  var result = `<b>Automated Readability Index: ${score}</b>`

  if (full) {
    result += p(`Returns the ARI (Automated Readability Index) which outputs a number that approximates the grade level needed to comprehend the text.
For example if the ARI is 6.5, then the grade level to comprehend the text is 6th to 7th grade. <table border="2" style="color: lightblue">
        <thead>
          <tr>
            <th>Score</th>
            <th>Age</th>
            <th>Grade Level</th>
          </tr>
        </thead>
        <tbody>
          <tr ${mark(score,14,100)}>
            <td>14</td>
            <td>24+</td>
            <td align="center">Professor</td>
          </tr>
          <tr ${mark(score,13,14)}>
            <td>13</td>
            <td>18-24</td>
            <td align="center">College student</td>
          </tr>
          <tr ${mark(score,12,13)}>
            <td>12</td>
            <td>17-18</td>
            <td align="center">Twelfth grade</td>
          </tr>
          <tr ${mark(score,11,12)}>
            <td>11</td>
            <td>16-17</td>
            <td align="center">Eleventh Grade</td>
          </tr>
          <tr ${mark(score,10,11)}>
            <td>10</td>
            <td>15-16</td>
            <td align="center">Tenth Grade</td>
          </tr>
          <tr ${mark(score,9,10)}>
            <td>9</td>
            <td>14-15</td>
            <td align="center">Ninth Grade</td>
          </tr>
          <tr ${mark(score,8,9)}>
            <td>8</td>
            <td>13-14</td>
            <td align="center">Seventh Grade</td>
          </tr>
          <tr ${mark(score,7,8)}>
            <td>7</td>
            <td>12-13</td>
            <td align="center">Seventh Grade</td>
          </tr>
          <tr ${mark(score,6,7)}>
            <td>6</td>
            <td>11-12</td>
            <td align="center">Sixth Grade</td>
          </tr>
          <tr ${mark(score,5,6)}>
            <td>5</td>
            <td>10-11</td>
            <td align="center">Fifth Grade</td>
          </tr>
          <tr ${mark(score,4,5)}>
            <td>4</td>
            <td>9-10</td>
            <td align="center">Fourth Grade</td>
          </tr>
          <tr ${mark(score,3,4)}>
            <td>3</td>
            <td>7-9</td>
            <td align="center">Third Grade </td>
          </tr>
          <tr ${mark(score,2,3)}>
            <td>2</td>
            <td>6-7</td>
            <td align="center">First/Second Grade</td>
          </tr>
          <tr ${mark(score,1,2)}>
            <td>1</td>
            <td>5-6</td>
            <td align="center">Kindergarten</td>
          </tr>
        </tbody>
      </table><a href="https://en.wikipedia.org/wiki/Automated_readability_index" rel="nofollow">Wikipedia: Automated readability index</a>`)
  }

  return result
}


function colemanLiauIndex(text, full) {
  var score = rs.colemanLiauIndex(text)

  var result = `<b>Coleman-Liau Index: ${score}</b>`

  if (full) {
    result += p(`This is a grade formula in that a score of 9.3 means that a ninth grader would be able to read the document.
<a href="https://en.wikipedia.org/wiki/SMOG" rel="nofollow">Wikipedia: SMOG grade</a>`)
  }

  return result
}


function linsearWriteFormula(text, full) {
  var score = rs.linsearWriteFormula(text)

  var result = `<b>Linsear Write Formula: ${score}</b>`

  if (full) {
    result += p(`This is a grade formula in that a score of 9.3 means that a ninth grader would be able to read the document.
It is a readability metric for English text, purportedly developed for the United States Air Force to help them calculate the readability of their technical manuals. It is specifically designed to calculate the United States grade level of a text sample based on sentence length and the number of words used that have three or more syllables.
<a href="https://en.wikipedia.org/wiki/Linsear_Write" rel="nofollow">Wikipedia: Linsear Write</a>`)
  }

  return result
}


function daleChallReadabilityScore(text, full) {
  var score = rs.daleChallReadabilityScore(text)

  var result = `<b>Dale-Chall Readability Score: ${score}</b>`

  if (full) {
    result += p(`Different from other tests, since it uses a lookup table of the most commonly used 3000 English words. Thus it returns the grade level using the New Dale-Chall Formula. <table border="2" style="color: lightblue">
        <thead>
          <tr>
            <th>Score</th>
            <th>Understood by</th>
          </tr>
        </thead>
        <tbody>
          <tr ${mark(score,9,10)}>
            <td>9.0–9.9</td>
            <td align="center">average 13th to 15th-grade (college) student</td>
          </tr>
          <tr ${mark(score,8,9)}>
            <td>8.0–8.9</td>
            <td align="center">average 11th or 12th-grade student</td>
          </tr>
          <tr ${mark(score,7,8)}>
            <td>7.0–7.9</td>
            <td align="center">average 9th or 10th-grade student</td>
          </tr>
          <tr ${mark(score,6,7)}>
            <td>6.0–6.9</td>
            <td align="center">average 7th or 8th-grade student</td>
          </tr>
          <tr ${mark(score,5,6)}>
            <td>5.0–5.9</td>
            <td align="center">average 5th or 6th-grade student</td>
          </tr>
          <tr ${mark(score,0,5)}>
            <td>4.9 or lower</td>
            <td align="center">average 4th-grade student or lower</td>
          </tr>
        </tbody>
      </table><a href="https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula" rel="nofollow">Wikipedia: Dale–Chall readability formula</a>`)
  }

  return result
}

function textStandard(text, full) {
  var score = rs.textStandard(text)

  var result = `<b>Readability Consensus: ${score}</b>`

  if (full) {
    result += p(`Based upon "Dale-Chall Readability Score", "Linsear Write Formula", "Coleman-Liau Index", "Automated Readability Index", "SMOG Index", "Fog Scale", " Flesch-Kincaid Grade Level", "Flesch Reading Ease formula", returns the estimated school grade level required to understand the text.`)
  }

  return result
}

function speakingtime(text, full) {
  var score = rs.lexiconCount(text, removePunctuation=true)

  var result = `<b>Speaking Time:</b>
- Presentation: ${minutes(score / 125)} - ${minutes(score / 100)} minutes
- Audiobook:    ${minutes(score / 160)} - ${minutes(score / 150)} minutes`

  if (full) {
    result += p(`Audiobooks are recommended to be 150–160 words per minute, which is the range that people comfortably hear and vocalize words. Slide presentations tend to be closer to 100–125 words per minute for a comfortable pace.
<a href="https://en.wikipedia.org/wiki/Words_per_minute#Speech_and_listening" rel="nofollow">Wikipedia: Speech and listening</a>`)
  }

  return result
}


function readingtime(text, full) {
  var score = rs.lexiconCount(text, removePunctuation=true)

  var result = `<b>Reading Time:</b>
- Basic: ${minutes(score / 258)} - ${minutes(score / 198)} minutes
- Proofreading (paper/monitor): ${minutes(score / 200)} / ${minutes(score / 180)} minutes`

  if (full) {
    result += p(`The speed at which subjects read a text aloud tend varies between 228±30 words per minute for English. While proofreading materials, people are able to read English at 200 words per minute on paper, and 180 words per on a monitor.
<a href="https://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension" rel="nofollow">Wikipedia: Reading and comprehension</a>`)
  }

  return result
}



function p(text) {
  return `<p style="white-space: break-spaces; color: lightblue; font-style: italic">${text}</p>`
}

function mark(value, min, max) {
  if(min <= value && value < max) {
    return 'style="background-color: #146273"'
  }
  return ""
}

function isUpper(str) {
  return str[0].toUpperCase() == str [0]
}

function minutes(minutes) {
  return new Date(minutes * 60 * 1000).toISOString().substr(14, 5)
}
