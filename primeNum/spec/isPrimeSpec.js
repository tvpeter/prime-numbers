 describe("Generate prime numbers", function() {

    it("should return 2, 3 for argument 3", function() {
      expect(isPrime(3)).toEqual([2, 3]);
    });

    it("should return 2, 3, 5 for argument 5", function() {
      expect(isPrime(5)).toEqual([2, 3, 5]);
    });

    it("should return an empty array for negative numbers", function() {
      expect(isPrime(-12)).toEqual([]);
    });

    it("should generate 8 prime numbers for argument 20", function() {
      expect(isPrime(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19 ]);
    });

    it("should return an empty array for argument 1", function() {
      expect(isPrime(1)).toEqual([]);
    });

    it("should return an empty for argument 0", function() {
      expect(isPrime(0)).toEqual([]);
    });

    it("should return 2 for argument 2", function() {
      expect(isPrime(2)).toEqual([2]);
    });

    it("should return 10 prime numbers for argument 30", function() {
      expect(isPrime(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
    });

    it("should return an empty array for argument -10", function() {
      expect(isPrime(-10)).toEqual([]);
    });

    it("should return 12 prime numbers for argument 40", function() {
      expect(isPrime(40)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ]);
    });

  });