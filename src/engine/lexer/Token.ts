

class Token {
  private _type: string;
  private readonly _lexeme: string;
  constructor(type: string, lexeme: string) {
    this._type = type;
    this._lexeme = lexeme;
  }

  get type(): string {
    return this._type;
  }
  get lexeme(): string {
    return this._lexeme;
  }


}

export default Token;
