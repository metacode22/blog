export function calculateMyAge() {
  const BIRTH_YEAR = 1995;
  const BIRTH_MONTH = 6;
  const BIRTH_DAY = 22;

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const age = (() => {
    let age = year - BIRTH_YEAR;
    if (month < BIRTH_MONTH || (month === BIRTH_MONTH && day < BIRTH_DAY)) {
      age--;
    }

    return age;
  })();

  return age;
}
