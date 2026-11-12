

class TokenDef {

  name: string;
  pattern: string;
  priorTo: TokenDef[];


  constructor(name: string, pattern: string, priorTo: TokenDef[]) {
    this.name = name;
    this.pattern = pattern;
    this.priorTo = priorTo;
  }

}



export default TokenDef;
