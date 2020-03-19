export declare function continueChar(str: string, limit?: number): boolean;
export declare function checkSimbolChar(str: string): string | undefined;
export declare function checkPasswordRule(str: string): string | undefined;
export declare function compareUserid(pwd: string, id: string): string | undefined;
export declare function checksameChar(str: string, limit?: number): string | undefined;
export default function checkValidPassword(pwd: string, id?: string): string | undefined;
