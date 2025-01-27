const alph = "abcdefghijklmnopqrstuvwxyz";
const numbs = "1234567890";
const specialChar = "@#$%&";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function useGenerateCaptha() {
  function generateCaptha(length: number): string {
    const capthaUtilString = alph + alph.toUpperCase() + numbs + specialChar;
    let captha = "";
    for (let index = 0; index < length; index++) {
      const randomNumber = getRandomInt(capthaUtilString.length);
      captha = captha + capthaUtilString.slice(randomNumber, randomNumber + 1);
    }
    return captha;
  }

  return { generateCaptha };
}
