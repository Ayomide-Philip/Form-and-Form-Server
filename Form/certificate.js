function timeout() {
  setTimeout(() => {
    $(".container").slideDown(10000);
  }),
    100000;
}

$(".container").slideUp(() => {
  timeout();
});
