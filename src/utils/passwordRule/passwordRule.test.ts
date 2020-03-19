import {
  continueChar,
  checkSimbolChar,
  checkPasswordRule,
  compareUserid,
  checksameChar,
  checkValidPassword,
} from '../passwordRule';

describe('KT 보안성 검토 비밀번호 규칙을 준수해야 한다.', () => {
  it(`특수 문자 < >( ) " ' 사용할 수 없다.`, () => {
    const msg = `특수문자 < > ( ) "' 는 사용할 수 없습니다.`;
    expect(checkSimbolChar('<')).toBe(msg);
    expect(checkSimbolChar('>')).toBe(msg);
    expect(checkSimbolChar('(')).toBe(msg);
    expect(checkSimbolChar(')')).toBe(msg);
    expect(checkSimbolChar('"')).toBe(msg);
    expect(checkSimbolChar(`'`)).toBe(msg);
  });

  describe('영문/숫자/특수 문자 조합 규칙을 준수해야 한다.', () => {
    it('영문 또는 숫자 만으로 생성할 수 없다.', () => {
      const msg = '영문 / 숫자를 조합해야 합니다.';
      expect(checkPasswordRule('1234')).toBe(msg);
      expect(checkPasswordRule('aaaa')).toBe(msg);
    });

    it('영문, 숫자 조합은 10~16자로 되어야 한다.', () => {
      const msg = '영문 / 숫자 조합 비밀번호는 10~16자로 구성되어야 합니다.';
      expect(checkPasswordRule('1234a')).toBe(msg);
      expect(checkPasswordRule('123123333333333333124a')).toBe(msg);
    });

    it('영문, 숫자, 특수문자 조합은 8~16자로 되어야 한다.', () => {
      const msg = `영문 / 숫자 / 특수문자 조합 비밀번호는 8~16자로 구성되어야 합니다.`;
      expect(checkPasswordRule('1234a!')).toBe(msg);
      expect(checkPasswordRule('12312!3333333333333124a')).toBe(msg);
    });
  });

  it('ID와 유사한 형식의 비밀번호는 사용 할 수 없다.', () => {
    const msg1 =
      'ID와 유사한 형식의 비밀번호는 안전하지 않습니다. 다시 입력하여 주십시오.';
    const msg2 = '아이디와 4자리 이상 겹치면 안됩니다.';
    expect(compareUserid('eclipse', 'eclipse')).toBe(msg1);
    expect(compareUserid('eclipse@$@', 'clip')).toBe(msg2);
  });

  it('동일한 문자가 여러번 반복될 수 없다.', () => {
    const msg = `동일 문자를 연속으로 4번 입력할 수 없습니다.`;
    expect(checksameChar('aaaa')).toBe(msg);
  });

  describe('4자리가 연속된 문자열을 검출 할 수 있다.', () => {
    it('ABCD', () => {
      expect(continueChar('ABCD')).toBeTruthy();
    });
    it('1234', () => {
      expect(continueChar('1234')).toBeTruthy();
    });
    it('01234', () => {
      expect(continueChar('01234')).toBeTruthy();
    });
    it('012ABC', () => {
      expect(continueChar('012ABC')).toBeFalsy();
    });
    it('AAAA', () => {
      expect(continueChar('AAAA')).toBeFalsy();
    });
    it('123', () => {
      expect(continueChar('123')).toBeFalsy();
    });
  });

  it('적합한 패스워드 테스트', () => {
    expect(checkValidPassword('zensystems!1', 'eclipse')).toBeUndefined();
    expect(checkValidPassword('zensystems!1', 'zen')).toBeUndefined();
  });
});
