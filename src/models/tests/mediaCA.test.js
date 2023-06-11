const Nota = require("../nota");

describe("MediaCA", () => {
    const ss = new Nota("DevOps", 9, 9, 0);
    const ms = new Nota("DevOps", 7, 7, 0);
    const mm = new Nota("DevOps", 5, 5, 0);
    const mi = new Nota("DevOps", 3, 3, 0);
    const ii = new Nota("DevOps", 0.1, 0.1, 0);
    const sr = new Nota("DevOps", 0, 0, 0);

    it("Return SS if value is between 9.0 and 10.0", () => {
        expect(ss.mediaCA()).toBe("SS");
    });

    it("Return MS if value is between 7.0 and 8.9", () => {
        expect(ms.mediaCA()).toBe("MS")
    });

    it("Return MM if value is between 5.0 and 6.9", () => {
        expect(mm.mediaCA()).toBe("MM")
    });

    it("Return MI if value is between 3.0 and 4.9", () => {
        expect(mi.mediaCA()).toBe("MI")
    });

    it("Return II if value is between 0.1 and 2.9", () => {
        expect(ii.mediaCA()).toBe("II")
    });

    it("Return SR if value is 0.0", () => {
        expect(sr.mediaCA()).toBe("SR")
    });
})