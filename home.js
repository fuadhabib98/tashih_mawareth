function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function simplifyFractionDenominator(numerator, denominator) {
  const commonDivisor = gcd(numerator, denominator);
  const simplifiedDenominator = denominator / commonDivisor;
  return simplifiedDenominator;
}

// قم بتجربة الدالة
const numerator = parseInt(prompt("أدخل العدد البسطي"));
const denominator = parseInt(prompt("أدخل العدد المقامي"));
const simplifiedDenominator = simplifyFractionDenominator(numerator, denominator);
alert(simplifiedDenominator*numerator)
