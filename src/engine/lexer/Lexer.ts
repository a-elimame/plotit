import TokenDef from './TokenDef.ts';
import Token from './Token.ts';
import InputStream from './InputStream.ts';

const EOF = new Token('EOF', '');
const TOKENS_DEF: TokenDef[] = [
  new TokenDef('ID', '^[a-zA-Z_][a-zA-Z_0-9]*$', []),
  new TokenDef('NUM', '^(?:[0-9]+(?:[.][0-9]*)?|[.][0-9]+)(?:[eE][+-]?[0-9]+)?$', []),

  new TokenDef('LPAREN', '^\\($', []),
  new TokenDef('RPAREN', '^\\)$', []),

  new TokenDef('LBRACKET', '^\\[$', []),
  new TokenDef('RBRACKET', '^\\]$', []),

  new TokenDef('LBRACE', '^\\{$', []),
  new TokenDef('RBRACE', '^\\}$', []),

  new TokenDef('PLUS', '^\\+$', []),
  new TokenDef('MINUS', '^-$', []),
  new TokenDef('MULTIPLY', '^\\*$', []),
  new TokenDef('DIVIDE', '^/$', []),
  new TokenDef('POWER', '^\\^$', []),
  new TokenDef('MODULO', '^%$', []),
  new TokenDef('FACTORIAL', '^!$', []),

  new TokenDef('NOT_EQUALS', '^!=$', []),
  new TokenDef('LESS_EQUAL', '^<=$', []),
  new TokenDef('GREATER_EQUAL', '^>=$', []),
  new TokenDef('LESS_THAN', '^<$', []),
  new TokenDef('GREATER_THAN', '^>$', []),
  new TokenDef('EQUALS', '^=$', []),

  new TokenDef('COMMA', '^,$', []),
];



class Lexer {
  inputStreams: InputStream[];
  constructor() {
    this.inputStreams = [];
  }

  set addInputStream(inputStream: InputStream) {
    this.inputStreams.push(inputStream);
  }
  set removeInputStream(inputStream: InputStream) {
    this.inputStreams.filter(item => item != inputStream);
  }

  tokenize(inputStream: InputStream) {
    inputStream.tokenList = [];
    let currentPos: number = 0;
    for (let i = 0; i < inputStream.input.length; ++i) {
      let currentSelection: string = inputStream.input.slice(currentPos, i + 1);
      let nextSelection: string = i < inputStream.input.length - 1 ? inputStream.input.slice(currentPos, i + 2) : currentSelection;
      let currentSelectionMatchedTokens: TokenDef[] = TOKENS_DEF.filter(tokenDef => {
        const regExp = new RegExp(tokenDef.pattern, "y");
        return regExp.test(currentSelection);
      });


      let nextSelectionMatchedTokens: TokenDef[] = TOKENS_DEF.filter(tokenDef => {
        const regExp = new RegExp(tokenDef.pattern, "y");
        return regExp.test(nextSelection);
      });

      // console.log(currentSelectionMatchedTokens, nextSelectionMatchedTokens);


      console.log(currentSelection, nextSelection);
      if (nextSelectionMatchedTokens.length && currentSelection.length != nextSelection.length) continue;
      if (currentSelectionMatchedTokens.length) {
        let priorMatchedToken: TokenDef = currentSelectionMatchedTokens[0];
        for (let j = 1; j < currentSelectionMatchedTokens.length; ++j) {
          if (currentSelectionMatchedTokens[j].priorTo.includes(priorMatchedToken)
            && !priorMatchedToken.priorTo.includes(currentSelectionMatchedTokens[j])) {
            priorMatchedToken = currentSelectionMatchedTokens[i];
          }
        }
        inputStream.tokenList = [...inputStream.tokenList, new Token(priorMatchedToken.name, currentSelection)]
      }
      currentPos = i + 1;
    }
    inputStream.tokenList = [...inputStream.tokenList, EOF];
    console.log(inputStream.tokenList);
  }
}




export default Lexer;
