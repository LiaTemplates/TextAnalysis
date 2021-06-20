<!--
author:   Your Name

email:    your@mail.org

version:  0.0.1

language: en

narrator: US English Female

script:   ./dist/index.js

@Textquality.check_all: @Textquality.check(`["words", "syllables", "sentences","fleschReadingEase", "fleschKincaid", "gunningFog", "smog", "automatedReadabilityIndex", "colemanLiau", "linsearWrite", "daleChall", "readabilityconsensus", "readingtime", "speakingtime"]`)

@Textquality.check_ALL: @Textquality.check(`["words", "syllables", "sentences","FleschReadingEase", "FleschKincaid", "GunningFog", "Smog", "AutomatedReadabilityIndex", "ColemanLiau", "LinsearWrite", "DaleChall", "Readabilityconsensus", "Readingtime", "Speakingtime"]`)

@Textquality.time: @Textquality.check(`["words", "syllables", "sentences", "readingtime", "speakingtime"]`)

@Textquality.TIME: @Textquality.check(`["words", "syllables", "sentences", "Readingtime", "Speakingtime"]`)

@Textquality.check
<script>
var checks = @0 // ["fog", "readability"]
var text = `@input`

for(var i=0; i< checks.length; i++) {
  console.html(window.textquality(checks[i], text))
}

""
</script>

@end

-->

# Course Main Title


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
@Textquality.check_all


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
@Textquality.check_ALL


## Speaking

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
@Textquality.TIME
