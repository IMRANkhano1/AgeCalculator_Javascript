{
  let gd = document.querySelector("input");
  var show = document.querySelector("p");
  function sub() {
    let Birthdate = new Date(gd.value);
    let date = new Date();
    console.log(date);
    let age = date.getFullYear() - Birthdate.getFullYear();
    let dayDiff = date.getDate() - Birthdate.getDate();
    console.log(dayDiff);

    let monthDiff = date.getMonth() - Birthdate.getMonth();
    console.log(monthDiff);

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      show.innerHTML = "your age is :" + (age - 1);
    } else {
      show.innerHTML = "your age is :" + age;
    }
  }
}
