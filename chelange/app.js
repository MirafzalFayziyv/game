var health_stark = document.querySelector(".health-stark");
var power_stark = document.querySelector(".power-stark");
var health_thanos = document.querySelector(".health-thanos");
var power_thanos = document.querySelector(".power-thanos");
var send = document.querySelector(".send-btn");
var btn = document.querySelector(".btn-fight");
var res = document.querySelector(".javob");
var fon = document.querySelector(".fon");
var input_off = document.querySelector(`.input`);
var otvet = document.querySelector(".otvet");

send.addEventListener(`click`, function () {
  btn.classList.remove("active");
  send.classList.add("active");
  input_off.classList.add(`active`);

  var t_health = health_thanos.value;
  var t_power = power_thanos.value;

  var s_health = health_stark.value;
  var s_power = power_stark.value;

  function Ishkal(health, power) {
    this.health = health;
    this.power = power;
    this.damage = function (x) {
      return (this.health -= x);
    };
    this.attack = function () {
      return Math.floor(Math.random() * this.power) + this.power;
    };
  }

  var thanos = new Ishkal(t_health, t_power);
  var stark = new Ishkal(s_health, s_power);

  btn.addEventListener("click", function () {
    btn.classList.add(`active`);

    var SetTime = setInterval(function qwe() {
      thanos.damage(stark.attack());
      stark.damage(thanos.attack());
      res.innerHTML = `Stark : ${stark.health} </br> Tanos : ${thanos.health}`;
      console.log(stark.health);
      console.log(thanos.health);

      if (stark.health < 0) {
        clearInterval(SetTime);
        res.classList.add(`active`);
        otvet.innerHTML = `THANOS WINNER`;
      } else if (thanos.health < "0") {
        clearInterval(SetTime);
        res.classList.add(`active`);
        otvet.innerHTML = `STARK WINNER`;
      } else if (stark.health <= 0 && thanos.health <= 0) {
        otvet.innerHTML = `DRAW`;
        clearInterval(SetTime);
      }
    }, 1000);

    var orqa_fon = setInterval(function () {
      fon.classList.toggle(`qizil`);
      if (stark.health < 0) {
        clearInterval(orqa_fon);
        console.log(`thanos win`);
      } else if (thanos.health < 0) {
        clearInterval(orqa_fon);
        console.log(`stark win`);
      } else if (stark.health <= 0 && thanos.health <= 0) {
        fon.style.background = "aqua";
        clearInterval(orqa_fon);
      }
    }, 0.5);
  });
});
