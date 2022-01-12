# Good Binary Strings - Intermediate Problem Solving

**Definitions**

- A *binary string* is a string consisting only of *0*'s and/or *1*'s. For example, *01011*, *1111*, and *00* are all binary strings.
- The *prefix* of a string is any substring of the string that includes the beginning of the string. For example, the prefixes of *11010* are *1*, *11*, *110*, *1101*, and *11010*.

A non-empty binary string is *good* if the following two conditions are true:

1. The number of *0*'s is equal to the number of *1*'s.
2. For every prefix of the binary string, the number of *1*'s isn’t less than the number of *0*'s.

For example, *11010* is not good because it doesn't have an equal number of *0*'s and *1*'s, but *110010* is good because it satisfies both of the above conditions.

A good string can contain multiple good substrings. Substrings are consecutive if the last character of the first substring occurs exactly one index before the first character of the second substring. If two *consecutive substrings* are good, then we can *swap* the substrings as long as the resulting string is still a good string.

**Task**

Use whatever language you like; even pseudocode is fine.

Given a good binary string, `binString`, perform zero or more swap operations on its consecutive good substrings such that the resulting string represents as large an integer (in base 10) as possible.

For example, if we look at the good binary string *1010111000*, we see two good binary substrings, *1010* and *111000* among others. If we swap these two substrings we get a larger value: *1110001010*. This is the largest possible good substring that can be formed.

Create a function `largestGood`. The function must return a string denoting the lexicographically largest possible good string that can be formed by performing zero or more swap operations on consecutive good substrings of `binString`.

Your function should check these constraints:

- Each character of `binString` is either 0 or 1.
- `binString` is a good string.

**Testing**

The function is run with multiple different inputs which should map to known good outputs:

- `11011000` → `11100100`
- `1100` → `1100`
- `1101001100` → `1101001100`
