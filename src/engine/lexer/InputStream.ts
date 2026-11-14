import Token from './Token.ts';

class InputStream {
  private _input: string;
  tokenize: (inputStream: InputStream) => void;
  private _tokenList: Token[];
  constructor(input = '', tokenize: (inputStream: InputStream) => void) {
    this._input = input;
    this.tokenize = tokenize;
    this._tokenList = []
  }

  get input(): string {
    return this._input;
  }
  set input(input: string) {
    this._input = input;
    this.tokenize(this);
  }
  get tokenList(): Token[] {
    return this._tokenList;
  }
  set tokenList(list: Token[]) {
    this._tokenList = list;
  }
}

export default InputStream;
