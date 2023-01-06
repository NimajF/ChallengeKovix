// Consigna
// Escribí una función que reciba dos parámetros: un string S y un integer R.
// La función debe devolver un string donde los caracteres consecutivos de S no se
// repitan más que R veces.
// Tiene que devolver un string con el texto limpio y la cantidad de caracteres repetidos
// correcta.
// Ejemplos:
// Ej: "AAAAAFFFFOOOA", 2 => "AAFFOOA"
// Ej: "111223333344", 1 => "1234"
// Ej: "AABB", 1 => "AB"

function sinRepetidos(S, R) {
  let charCon = 1;
  let resultado = "";
  for (let i in S) {
    if (S.charAt(i) === S.charAt(i - 1)) {
      charCon++;
    } else {
      charCon = 1;
    }
    if (charCon <= R) {
      resultado += S.charAt(i);
    }
  }
  return resultado;
}

sinRepetidos("AAA122EEEOOOO", 1);
//  2 => "AA122EEOO"
// 1 => "A12EO"
