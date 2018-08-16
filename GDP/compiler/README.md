# KMarkdown Tokens

BRACKET_LEFT [
BRACKET_RIGHT ]
BRACE_LEFT {
BRACE_RIGHT }
PARENTHESES_LEFT (
PARENTHESES_RIGHT )
ANGULAR_BRACKET_LEFT <
ANGULAR_BRACKET_RIGHT >

DOUBLE_QUOTE "
SINGLE_QUOTE '
BACK_TICK `
TRIPLE_BACK_TICK ```

STAR *
UNDERSCORE _
DOUBLE_STAR **
DOUBLE_UNDERSCORE __
DOUBLE_TILDE ~~

PLUS +

BULLET SPACE+ STAR | UNDERSCORE | PLUS

SPACE ' ' 
NEW_LINE \n

HORZ_LINE ---\+

SHARP #
HEADING_SHARP #+

WORD [^\s]+

INDENT

# KMarkdown BNF

```
Body := Block*

Block := Paragraph | Heading | List | BlockQuote | ContentBlock | Table | Code | Image 

Paragraph := Sentence+ EmptySpace

EmptySpace := EMPTY_LINE+

Sentence := Phrases

Phrases := Phrase+

Phrase := PlainText | Link | OutLink | InlineCode | DecoratedText | Span | ContentBlock

DecoratedText := Decorator DecoratedText Decorator

Decorator := STAR | UNDERSCORE | DOUBLE_STAR | DOUBLE_UNDERSCORE | DOUBLE_TILDE

Span := DOUBLE_DOUBLE_QUOTE DecoratedText DOUBLE_DOUBLE_QUOTE DataObject

DataObject := BRACE_LEFT WORD Attribute BRACE_RIGHT

Attribute := Word EQUAL AnyQuote DecoratableText AnyQuote

AnyQuote := DOUBLE_QUOTE | SINGLE_QUOTE

PlainText := TextElement+

TextElement := WORD | SPACE

Link := BRACKET_LEFT DecoratableText BRACKET_RIGHT PARENTHESE_LEFT Text PARENTHESES_RIGHT 

Url := (WORD | SLASH | MINUS)+

OutLink := SHARP Link

Image := EXCLAMATION Link

InlineCode := BACK_TICK Text BACK_TICK

BoldText := BOLD MaybeHasItalic BOLD

MaybeHasItalic := WORD* ItalicText? WORD*

ItalicText := ITALIC MaybeHasBold ITALIC

MaybeHasBold := WORD* BoldText? WORD*

BOLD DOUBLE_STAR | DOUBLE_UNDERSCORE
ITALIC STAR | UNDERSCORE

Heading := HEADING_SHARP Sentence EmptySpace

List := ListItem+ EmptySpace

ListItem := BULLET Text NEW_LINE

BlockQuote := QuoteLine+

QuoteLine := ANGULAR_BRACKET_RIGHT Sentence NEW_LINE

ContentBlock := ContentBlockStart ContentBlockContent ContentBlockEnd

ContentBlockContent := Sentence | Paragraph+

ContentBlockStart := BRACKET_LEFT WORD Attribute+ BRACKET_RIGHT 

ContentBlockEnd := BRACKET_LEFT SLASH WORD BRACKET_RIGHT

Table := TableHead TableLine TableBody

TableHead := TableRow

TableRow := TableItem+ BAR

TableItem := BAR Sentence

TableLine := TableLineItem+ BAR

TableLineItem := BAR HORZ_LINE

TableBody := TableRow+


Code := TRIPLE_BACK_TICK CodeLine+ TRIPLE_BACK_TICK

CodeLine := INDENT | CodeElement+ NEW_LINE | EMPTY_LINE

CodeElement := BasicCodeElement | EmphasizedCodeElement

BasicCodeElement := KEYWORD | CLASS_NAME | WORD | STRING | NUMBER

EmphasizedCodeElement := BoldCodeElement | ItalicCodeElement | LinkCodeElement | OutLinkCodeElement

BoldCodeElement := BOLD MaybeHasItalicElement BOLD

MaybeHasItalicElement := CodeElement* ItalicCodeElement CodeElement*

ItalicCodeElement := ITALIC MaybeHasBoldElement ITALIC

MaybeHasBoldElement := CodeElement* BoldCodeElement CodeElement*

LinkCodeElement := BRACKET_LEFT BasicCodeElement+ BRACKET_RIGHT PARENTHESES_LEFT Text PARENTHESES_RIGHT

OutLinkCodeElement := SHARP BRACKET_LEFT BasicCodeElement+ BRACKET_RIGHT PARENTHESES_LEFT Text PARENTHESES_RIGHT






```

2 Modes? 

* HTML Mode
* Code Mode