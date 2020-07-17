$(document).ready(function(){
  
  let position = $("#profile-top").offset().top;
  $("#portfolio-check-profile").click(function(){
    // スクロールの速度
    $("html, body").animate({ scrollTop: position }, 200);
      return false;
  });
});

$(document).ready(function(){
let position = $("#skill-top").offset().top;
  $("#portfolio-check-skill").click(function(){
    // スクロールの速度
    $("html, body").animate({ scrollTop: position }, 200);
      return false;
  });
});

$(document).ready(function(){
  let position = $("#portfolio-top").offset().top;
    $("#portfolio-check-portfolio").click(function(){
      // スクロールの速度
      $("html, body").animate({ scrollTop: position }, 200);
        return false;
    });
  });

$(document).ready(function(){
  let position = $("#contact-top").offset().top;
    $("#portfolio-check-contact").click(function(){
      // スクロールの速度
      $("html, body").animate({ scrollTop: position }, 200);
        return false;
    });
  });