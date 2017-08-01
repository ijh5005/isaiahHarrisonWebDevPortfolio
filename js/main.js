$(".navOptions").click((e) => {
  const dataValue = e.target.attributes.data.nodeValue;

  if(dataValue === "hello"){
    navigate(0, dataValue, "H")
  } else if (dataValue === "aboutMe") {
    navigate(-100, dataValue, "A");
  } else if (dataValue === "projects") {
    navigate(-200, dataValue, "P");
  } else if (dataValue === "technologies") {
    navigate(-300, dataValue, "T");
  } else if (dataValue === "employment") {
    navigate(-400, dataValue, "E");
  }
});

const navigate = (position, dataValue, text) => {
  $(".activeWindow").css("opacity", 0.2);
  setTimeout(function () {
    $(".activeWindow").css("opacity", 1);
  }, 1000);
  $(".pages").css("left", position+"%");
  $(".navOptions").removeClass("active");
  $(".navOptions[data="+dataValue+"]").addClass("active");
  $(".logo p").text(text);
}

$(".flipContainer").mouseover((e) => {
  const dataName = e.target.attributes.data.nodeValue;
  $(".flipTop[data=" + dataName + "]").css("transform", "rotateY(180deg)");
  $(".flipBottom[data=" + dataName + "]").css("transform", "rotateY(0deg)");
});

$(".flipContainer").mouseleave((e) => {
  const dataName = e.target.attributes.data.nodeValue;
  $(".flipTop[data=" + dataName + "]").css("transform", "rotateY(0deg)");
  $(".flipBottom[data=" + dataName + "]").css("transform", "rotateY(180deg)");
});

$(".flipContainerClick").click((e) => {
  const dataName = e.target.attributes.data.nodeValue;
  var href = $("a[data=" + dataName + "]").attr('href');
  window.location.href = href;
});
