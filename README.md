# Matcher Cells

(Abstract from the submitted paper)

Pattern matching algorithms have been studied on numerous occasions, mainly focusing on performance because of the large amount of data used in a matching process. However, a strong focus on performance can entail particular issues like the lack of flexibility to match patterns. As a consequence, developers need to tweak matching algorithms in contortive ways or create new specialized ones altogether if their specific needs are not supported. Inspired by the self-replication behavior of cells, we explore the design and implementation of an algorithm to flexibly match patterns, named Matcher Cells. Through the composition of simple rules applied to cells, developers can adjust the matching semantics of this algorithm to different needs. We describe this algorithm using a pure functional language as a recipe for any Turing-complete programming language, and then offer an object-oriented architecture for languages like Java. To show the flexibility of our proposal, we use a concrete implementation in TypeScript to describe two case studies pattern matching a stream of tokens. Finally, we discuss pros and cons of the use of a biological-based algorithm to match patterns.


This project was developed in the [Pragamtics Lab](http://pragmaticslab.com), specifically implemented by Marcelo Lazo with [Paul Leger](http://pleger.cl). Both members belong the Universidad Católica del Norte (Chile).
  

## License

[MIT] (https://opensource.org/licenses/MIT) 
