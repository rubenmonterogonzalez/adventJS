const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year

function countHours(year, holidays) {
  console.log(holidays)
  let count = 0;
  holidays.forEach(feast => {
    if (feast != '12/31') {
      feast = new Date(`${feast}/${year}`).getDay();
    } else {
      feast = 0;
    }

    if (feast > 0 && feast < 6) {
      count = count + 2;
    } else {
      feast = 0;
    }
  })

  return count
}

