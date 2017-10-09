declare namespace AutoNumeric {
    interface Options {
        aSep?: string;
        dGroup?: string;
        aDec?: string;
        altDec?: string;
        aSign?: string;
        pSign?: "p" | "s";
        vMin?: string;
        vMax?: string;
        mDec?: string;
        mRound?: "S" | "A" | "s" | "a" | "B" | "U" | "D" | "C" | "F" | "CHF";
        aPad?: boolean;
        nBracket?: string;
        wEmpty?: "empty" | "zero" | "sign";
        lZero?: "allow" | "deny" | "keep";
        aForm?: boolean;
        anDefault?: string;
    }

    interface Serialized {
        name: string;
        value: string;
    }
}

interface JQuery {
    autoNumeric(options?: AutoNumeric.Options): JQuery;
    autoNumeric(method: "init", options?: AutoNumeric.Options): JQuery;
    autoNumeric(method: "destroy"): JQuery;
    autoNumeric(method: "update", options: AutoNumeric.Options): JQuery;
    autoNumeric(method: "set", value: string): JQuery;
    autoNumeric(method: "get"): string;
    autoNumeric(method: "getString"): string;
    autoNumeric(method: "getArray"): AutoNumeric.Serialized[];
    autoNumeric(method: "getSettings"): AutoNumeric.Options;
}
