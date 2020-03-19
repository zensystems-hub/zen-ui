'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// tslint:disable:no-conditional-assignment
// 연속된 숫자 문자열 체크
function continueChar(str, limit) {
    if (limit === void 0) { limit = 4; }
    var compareResult = str.split('').map(function (_, i) {
        return i > 0 ? str.charCodeAt(i) - str.charCodeAt(i - 1) : 0;
    });
    var count = 0;
    var result = false;
    while (compareResult.length > 0) {
        if (compareResult.pop() === 1) {
            count++;
        }
        else {
            count = 0;
        }
        if (count >= limit - 1) {
            result = true;
            break;
        }
    }
    return result;
}
function checkSimbolChar(str) {
    var regexp = /[><)('"]/;
    if (regexp.test(str)) {
        return "\uD2B9\uC218\uBB38\uC790 < > ( ) \"' \uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    }
}
function checkPasswordRule(str) {
    var simbolRegexp = /[^a-zA-Z0-9\s]/;
    var strLength = str.length;
    if (!(/[a-zA-Z]/.test(str) && /[0-9]/.test(str))) {
        return '영문 / 숫자를 조합해야 합니다.';
    }
    if (simbolRegexp.test(str)) {
        if (!(strLength >= 8 && strLength <= 16)) {
            return "\uC601\uBB38 / \uC22B\uC790 / \uD2B9\uC218\uBB38\uC790 \uC870\uD569 \uBE44\uBC00\uBC88\uD638\uB294 8~16\uC790\uB85C \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.";
        }
    }
    else {
        if (!(strLength >= 10 && strLength <= 16)) {
            return "\uC601\uBB38 / \uC22B\uC790 \uC870\uD569 \uBE44\uBC00\uBC88\uD638\uB294 10~16\uC790\uB85C \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.";
        }
    }
}
function compareUserid(pwd, id) {
    if (pwd !== id) {
        if (id.length <= 2) {
            return;
        }
        for (var i = 0; i < id.length - 3; i++) {
            for (var j = 0; j < pwd.length - 3; j++) {
                if (id.substring(i, i + 4) === pwd.substring(j, j + 4)) {
                    return '아이디와 4자리 이상 겹치면 안됩니다.';
                }
            }
        }
    }
    else {
        return 'ID와 유사한 형식의 비밀번호는 안전하지 않습니다. 다시 입력하여 주십시오.';
    }
}
function checksameChar(str, limit) {
    if (limit === void 0) { limit = 4; }
    var regExp = RegExp("(\\w|\\W)\\1{" + (limit - 1) + ",}");
    if (regExp.test(str)) {
        return "\uB3D9\uC77C \uBB38\uC790\uB97C \uC5F0\uC18D\uC73C\uB85C " + limit + "\uBC88 \uC785\uB825\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    }
}
function checkValidPassword(pwd, id) {
    var message;
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

exports.checkPasswordRule = checkPasswordRule;
exports.checkSimbolChar = checkSimbolChar;
exports.checksameChar = checksameChar;
exports.compareUserid = compareUserid;
exports.continueChar = continueChar;
exports.default = checkValidPassword;
//# sourceMappingURL=index.js.map
