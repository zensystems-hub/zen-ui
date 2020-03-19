// tslint:disable:no-conditional-assignment
// 연속된 숫자 문자열 체크
export function continueChar(str: string, limit = 4): boolean {
  const compareResult: number[] = str.split('').map((_, i) => {
    return i > 0 ? str.charCodeAt(i) - str.charCodeAt(i - 1) : 0;
  });
  let count = 0;
  let result = false;
  while (compareResult.length > 0) {
    if (compareResult.pop() === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count >= limit - 1) {
      result = true;
      break;
    }
  }
  return result;
}

export function checkSimbolChar(str: string): string | undefined {
  const regexp = /[><)('"]/;
  if (regexp.test(str)) {
    return `특수문자 < > ( ) "' 는 사용할 수 없습니다.`;
  }
}

export function checkPasswordRule(str: string): string | undefined {
  const simbolRegexp = /[^a-zA-Z0-9\s]/;
  const strLength = str.length;
  if (!(/[a-zA-Z]/.test(str) && /[0-9]/.test(str))) {
    return '영문 / 숫자를 조합해야 합니다.';
  }
  if (simbolRegexp.test(str)) {
    if (!(strLength >= 8 && strLength <= 16)) {
      return `영문 / 숫자 / 특수문자 조합 비밀번호는 8~16자로 구성되어야 합니다.`;
    }
  } else {
    if (!(strLength >= 10 && strLength <= 16)) {
      return `영문 / 숫자 조합 비밀번호는 10~16자로 구성되어야 합니다.`;
    }
  }
}

export function compareUserid(pwd: string, id: string): string | undefined {
  if (pwd !== id) {
    if (id.length <= 2) {
      return;
    }
    for (let i = 0; i < id.length - 3; i++) {
      for (let j = 0; j < pwd.length - 3; j++) {
        if (id.substring(i, i + 4) === pwd.substring(j, j + 4)) {
          return '아이디와 4자리 이상 겹치면 안됩니다.';
        }
      }
    }
  } else {
    return 'ID와 유사한 형식의 비밀번호는 안전하지 않습니다. 다시 입력하여 주십시오.';
  }
}

export function checksameChar(str: string, limit = 4): string | undefined {
  const regExp = RegExp(`(\\w|\\W)\\1{${limit - 1},}`);
  if (regExp.test(str)) {
    return `동일 문자를 연속으로 ${limit}번 입력할 수 없습니다.`;
  }
}

export default function checkValidPassword(
  pwd: string,
  id?: string,
): string | undefined {
  let message: string | undefined;

  if ((message = checkSimbolChar(pwd))) {
    return message;
  }

  if ((message = checkPasswordRule(pwd))) {
    return message;
  }
  if (id) {
    // ID와 비밀번호 는 동일한 문자 사용 불가
    if ((message = compareUserid(pwd, id))) {
      return message;
    }
  }

  // 비밀번호에 동일문자 연속 4번 체크 (ex: aaaa, AAAA, 1111)
  if ((message = checksameChar(pwd))) {
    return message;
  }

  if (continueChar(pwd)) {
    return '4개 이상의 연속된 문자 또는 숫자는 입력할 수 없습니다';
  }
}
