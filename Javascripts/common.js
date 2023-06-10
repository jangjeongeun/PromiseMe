// 헤더 스크롤, 스무스 이동
document.getElementById("Planning").addEventListener("click", function(event) {
  event.preventDefault();
  var section2 = document.getElementById("section2");
  section2.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("Design").addEventListener("click", function(event) {
  event.preventDefault();
  var section8 = document.getElementById("section8");
  section8.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("Service").addEventListener("click", function(event) {
  event.preventDefault();
  var section12 = document.getElementById("section12");
  section12.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("Video").addEventListener("click", function(event) {
  event.preventDefault();
  var section19 = document.getElementById("section19");
  section19.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("Contact").addEventListener("click", function(event) {
  event.preventDefault();
  var footer = document.getElementById("footer");
  footer.scrollIntoView({ behavior: "smooth" });
});


//헤더 스크롤 감지 반응
let prevScrollpos = window.pageYOffset;
const header = document.getElementById('header');
const menuSlide = document.getElementById('menusilde');
let isMenuOpen = false; // 메뉴 슬라이드가 열려있는지 여부를 나타내는 변수
menuSlide.style.display = 'none'; //원래 상태는 닫혀있음.

window.addEventListener('scroll', function() {
  if (!isMenuOpen && menuSlide.style.display !== 'block') {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = '0';
    } else {
      header.style.top = '-90px';
    }
    prevScrollpos = currentScrollPos;
    header.style.transition = 'top 0.4s';
  }
});

//로고 눌렀을 때 스크롤 맨 위로
document.getElementById('logo').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


//모바일 햄버거 버튼
var btn = document.querySelector('.btn');
menuSlide.style.transition = 'height 0.3s';

// 버튼 클릭 이벤트 핸들러 추가
btn.addEventListener('click', function() {
  // 메뉴 슬라이드 상태 확인
  var isMenuOpen = menuSlide.style.display === 'block';

  if (isMenuOpen) {
    isMenuOpen = false;
    menuSlide.style.height = "0";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "none";
    setTimeout(function() {
      menuSlide.style.display = 'none';
    }, 300);
  } else {
    isMenuOpen = true;
    menuSlide.style.display = 'block';
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";
    setTimeout(function() {
      menuSlide.style.height = "200px";
    }, 0);
  }
});


//스크롤탑 버튼(로고와는 별개)

$(document).ready(function() {
  $("#scrolltotap").hide();

  // 스크롤 시 효과 설정
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $("#scrolltotap").fadeIn();
    } else {
      $("#scrolltotap").fadeOut();
    }
  });

  // 버튼 클릭 시 효과 설정
  $("#scrolltotap").click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

// 옵서버 생성
let observer0 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 푸터가 화면에 들어왔을 때 실행될 코드
      $("#scrolltotap").css("filter", "invert(100%)");
    } else {
      // 푸터가 화면에서 벗어났을 때 실행될 코드
      $("#scrolltotap").css("filter", "invert(0%)");
    }
  });
}, { threshold: 0 });
//푸터 관찰
let footer = document.getElementById("footer");
observer0.observe(footer);



//스크롤 이벤트

//백그라운드
// let observer1 = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = "1"; // 화면에 보이는 경우 투명도를 1로 설정
//     } else {
//       entry.target.style.opacity = "0"; // 화면에 보이지 않는 경우 투명도를 0으로 설정 (페이드 아웃)
//     }
//   });
// }, { threshold: 0.5 }); // threshold 값은 필요에 따라 조정 가능

// let element = document.getElementById("three1");
// element.style.transition = "opacity 1.5s ease-in-out";
// observer1.observe(element); // 관찰 대상 요소 등록


// 백그라운드
let section2 = document.getElementById('section2');
let boxline1 = document.querySelector('.boxline1');
let boxline2 = document.querySelector('.boxline2');
let boxline3 = document.querySelector('.boxline3');
let element = document.getElementById("three1");
let observer1_1;

setTimeout(() => {
  observer1_1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.style.opacity = "1";

        setTimeout(() => {
          boxline1.style.width = '5.7vw';
          boxline1.style.opacity = '1';
        }, 500);
        
        setTimeout(() => {
          boxline2.style.width = '7.4vw';
          boxline2.style.opacity = '1';
        }, 500);
        
        setTimeout(() => {
          boxline3.style.width = '6vw';
          boxline3.style.opacity = '1';
        }, 500);
        
      } else {
        element.style.opacity = "0";
        boxline1.style.width = "0";
        // boxline1.style.opacity = '0';

        boxline2.style.width = "0";
        // boxline2.style.opacity = '0';

        boxline3.style.width = "0";
        // boxline3.style.opacity = '0';
      }
    });
  }, {threshold: 0.5});

  element.style.transition = "opacity 0.4s ease-in-out";
  boxline1.style.transition = "width 1.2s, opacity 2s ease-in-out";
  boxline2.style.transition = "width 1.2s, opacity 2s ease-in-out";
  boxline3.style.transition = "width 1.2s, opacity 2s ease-in-out";
  observer1_1.observe(section2);
}, 1500); // 3초 지연 실행











//유저인사이트
let observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      // entry.target.style.top = "10vh";
    } else {
      entry.target.style.opacity = "0";
      // entry.target.style.top = "14vh";
    }
  });
}, { threshold: 0.8 });

let element2 = document.getElementsByClassName("user1")[0];
observer2.observe(element2);
element2.style.transition = "all 1.5s ease-in-out";



let observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      // entry.target.style.top = "35vh";
    } else {
      entry.target.style.opacity = "0";
      // entry.target.style.top = "39vh";
    }
  });
}, { threshold: 0.8 });

let element3 = document.getElementsByClassName("user2")[0];
observer3.observe(element3);
element3.style.transition = "all 1.5s ease-in-out";



let observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      // entry.target.style.top = "59vh";
    } else {
      entry.target.style.opacity = "0";
      // entry.target.style.top = "63vh";
    }
  });
}, { threshold: 0.8 });

let element4 = document.getElementsByClassName("user3")[0];
observer4.observe(element4);
element4.style.transition = "all 1.5s ease-in-out";






//프로젝트 골
setTimeout(() => {
  // 옵저버 코드
  let observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      } else {
        entry.target.style.opacity = "0";
      }
    });
  }, { threshold: 0.8 });

  let element5 = document.getElementsByClassName("graph2")[0];
  element5.style.transition = "all 0.5s ease-in-out";
  observer5.observe(element5);
}, 1000); // 2초 후에 실행




let section7 = document.getElementById('section7');
let observer7;

setTimeout(() => {
  observer7 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          section7.style.opacity = '1';
        }, 0);
      } else {
        section7.style.opacity = '0';
      }
    });
  }, {threshold: 0.5});
  section7.style.transition = "opacity 0.9s";
  observer7.observe(section7);
}, 1000);





//디자인 키워드
let section8 = document.getElementById('section8');
let marqueeList1 = document.querySelector('.wrapleft1');
let marqueeList2 = document.querySelector('.MARQUEE2 .wrapleft2');
let marqueeList3 = document.querySelector('.MARQUEE3 .wrapleft3');
let listItemWidth1 = document.querySelector('.listItem').offsetWidth;
let listItemWidth2 = document.querySelector('.listItem2').offsetWidth;
let listItemWidth3 = document.querySelector('.listItem3').offsetWidth;
let listItem1 = marqueeList1.querySelector('.listItem');
let clonedItem1 = listItem1.cloneNode(true);
marqueeList1.appendChild(clonedItem1);
let listItem2 = marqueeList2.querySelector('.listItem2');
let clonedItem2 = listItem2.cloneNode(true);
marqueeList2.appendChild(clonedItem2);
let listItem3 = marqueeList3.querySelector('.listItem3');
let clonedItem3 = listItem3.cloneNode(true);
marqueeList3.appendChild(clonedItem3);

function animate1() {
  let currentPosition1 = 0;
  let items1 = marqueeList1.querySelectorAll('.listItem');

  function animateFrame1() {
    currentPosition1 -= 1.1;
    marqueeList1.style.transform = `translateX(${currentPosition1}px)`;

    if (currentPosition1 <= -listItemWidth1) {
      currentPosition1 += listItemWidth1;
      marqueeList1.appendChild(items1[0]);
      marqueeList1.style.transform = `translateX(${currentPosition1}px)`;
    }
    requestAnimationFrame(animateFrame1);
  }

  animateFrame1();
}

function animate2() {
  let currentPosition2 = 0;
  let items2 = marqueeList2.querySelectorAll('.listItem2');

  function animateFrame2() {
    currentPosition2 -= 0.9;
    marqueeList2.style.transform = `translateX(${currentPosition2}px)`;

    if (currentPosition2 <= -listItemWidth2) {
      currentPosition2 += listItemWidth2;
      marqueeList2.appendChild(items2[0]);
      marqueeList2.style.transform = `translateX(${currentPosition2}px)`;
    }
    requestAnimationFrame(animateFrame2);
  }

  animateFrame2();
}

function animate3() {
  let currentPosition3 = 0;
  let items3 = marqueeList3.querySelectorAll('.listItem3');

  function animateFrame3() {
    currentPosition3 -= 1;
    marqueeList3.style.transform = `translateX(${currentPosition3}px)`;

    if (currentPosition3 <= -listItemWidth3) {
      currentPosition3 += listItemWidth3;
      marqueeList3.appendChild(items3[0]);
      marqueeList3.style.transform = `translateX(${currentPosition3}px)`;
    }
    requestAnimationFrame(animateFrame3);
  }

  animateFrame3();
}

let observer8 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animate1();
      animate2();
      animate3();
    }
  });
});

observer8.observe(section8);

// let section8 = document.getElementById('section8');
// let marqueeList1 = document.querySelector('.wrapleft1');
// let marqueeList2 = document.querySelector('.MARQUEE2 .wrapleft2');
// let marqueeList3 = document.querySelector('.MARQUEE3 .wrapleft3');
// let listItemWidth1 = document.querySelector('.listItem').offsetWidth;
// let listItemWidth2 = document.querySelector('.listItem2').offsetWidth;
// let listItemWidth3 = document.querySelector('.listItem3').offsetWidth;
// let listItem1 = marqueeList1.querySelector('.listItem');
// let clonedItem1 = listItem1.cloneNode(true);
// marqueeList1.appendChild(clonedItem1);
// let listItem2 = marqueeList2.querySelector('.listItem2');
// let clonedItem2 = listItem2.cloneNode(true);
// marqueeList2.appendChild(clonedItem2);
// let listItem3 = marqueeList3.querySelector('.listItem3');
// let clonedItem3 = listItem3.cloneNode(true);
// marqueeList3.appendChild(clonedItem3);

// function startAnimation1() {
//   let currentPosition1 = 0;

//   function animate1() {
//     currentPosition1 -= 1;
//     marqueeList1.style.transform = `translateX(${currentPosition1}px)`;

//     if (currentPosition1 <= -listItemWidth1) {
//       currentPosition1 = 0;
//       marqueeList1.appendChild(listItem1);
//       setTimeout(startAnimation1, 10);
//     } else {
//       requestAnimationFrame(animate1);
//     }
//   }

//   animate1();
// }

// function startAnimation2() {
//   let currentPosition2 = 0;

//   function animate2() {
//     currentPosition2 -= 0.9;
//     marqueeList2.style.transform = `translateX(${currentPosition2}px)`;

//     if (currentPosition2 <= -listItemWidth2) {
//       currentPosition2 = 0;
//       marqueeList2.appendChild(listItem2);
//       setTimeout(startAnimation2, 10);
//     } else {
//       requestAnimationFrame(animate2);
//     }
//   }

//   animate2();
// }

// function startAnimation3() {
//   let currentPosition3 = 0;

//   function animate3() {
//     currentPosition3 -= 1;
//     marqueeList3.style.transform = `translateX(${currentPosition3}px)`;

//     if (currentPosition3 <= -listItemWidth3) {
//       currentPosition3 = 0;
//       marqueeList3.appendChild(listItem3);
//       setTimeout(startAnimation3, 10);
//     } else {
//       requestAnimationFrame(animate3);
//     }
//   }

//   animate3();
// }

// let observer8 = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       startAnimation1();
//       startAnimation2();
//       startAnimation3();
//     }
//   });
// });


// observer8.observe(section8);






//컬러
let observer10 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.target.style.transform = "scaleX(1)";
      entry.target.style.opacity = "1";
    } else {
      // entry.target.style.transform = "scaleX(0)";
      entry.target.style.opacity = "0";
    }
  });
}, { threshold: 0.5 });

let colorimg = document.getElementById("color");
colorimg.style.transition = "opacity 1.2s ease-in-out";
observer10.observe(colorimg);

// 아이콘
let section11_2 = document.getElementById('section11_2');
let line = document.querySelector('.line');
let iconcontent = document.querySelector('.iconcontent');
let observer11_2;

setTimeout(() => {
  observer11_2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          line.style.opacity = '1';
        }, 500);
        
        setTimeout(() => {
          iconcontent.style.opacity = '1';
        }, 1500);
        
      } else {
        line.style.opacity = "0";
        iconcontent.style.opacity = "0";
      }
    });
  }, {threshold: 0.5});
  line.style.transition = "opacity 1.2s";
  iconcontent.style.transition = "opacity 0.9s";
  observer11_2.observe(section11_2);
}, 0);






//로고
let section11 = document.getElementById('section11');
let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let logo2 = document.querySelector('.logo2');
let logo3 = document.querySelector('.logo3');
let observer11;

setTimeout(() => {
  observer11 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          arrow1.style.opacity = '1';
          arrow1.style.transform = "translateX(0%)";
        }, 1500);
        setTimeout(() => {
          logo2.style.opacity = '1';
          logo2.style.transform = "translateX(0%)";
        }, 2000);
        setTimeout(() => {
          arrow2.style.opacity = '1';
          arrow2.style.transform = "translateX(0%)";
        }, 2500);
        setTimeout(() => {
          logo3.style.opacity = '1';
          logo3.style.transform = "translateX(0%)";
        }, 3000);
        
      } else {
        arrow1.style.opacity = '0';
        arrow2.style.opacity = '0';
        logo2.style.opacity = '0';
        logo3.style.opacity = '0';

        arrow1.style.transform = "translateX(-300%)";
        arrow2.style.transform = "translateX(-300%)";
        logo2.style.transform = "translateX(-10%)";
        logo3.style.transform = "translateX(-10%)";
      }
    });
  }, {threshold: 0.5});
  arrow1.style.transition = "opacity 0.3s, transform 2s";
  arrow2.style.transition = "opacity 0.3s, transform 2s";
  logo2.style.transition = "opacity 1.2s, transform 2s";
  logo3.style.transition = "opacity 1.2s, transform 2s";
  observer11.observe(section11);
}, 0);






//홈
let observer13_1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"; // 화면에 보이는 경우 투명도를 1로 설정
      entry.target.style.transform = "translateX(0%)"; // 상대적인 위치로 설정
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateX(10%)"; // 상대적인 위치로 설정
    }
  });
}, { threshold: 0.5 });

let topleft = document.getElementsByClassName("topleft")[0];
topleft.style.transition = "transform 1.5s, opacity 1.5s ease-in-out";
observer13_1.observe(topleft);

// 

let observer13_2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"; // 화면에 보이는 경우 투명도를 1로 설정
      entry.target.style.transform = "translateX(0%)"; // 상대적인 위치로 설정
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateX(-10%)"; // 상대적인 위치로 설정
    }
  });
}, { threshold: 0.5 });

let middleright = document.getElementsByClassName("middleright")[0];
middleright.style.transition = "transform 1.5s, opacity 1.5s ease-in-out";
observer13_2.observe(middleright);

// 

let observer13_3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"; // 화면에 보이는 경우 투명도를 1로 설정
      entry.target.style.transform = "translateX(0%)"; // 상대적인 위치로 설정
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateX(10%)"; // 상대적인 위치로 설정
    }
  });
}, { threshold: 0.5 });

let bottomleft = document.getElementsByClassName("bottomleft")[0];
bottomleft.style.transition = "transform 1.5s, opacity 1.5s ease-in-out";
observer13_3.observe(bottomleft);






// 로드맵
let section14 = document.getElementById('section14');
let phone2 = document.querySelector('.phone2');
let Roadmap = document.querySelector('.Roadmap');
let map_text = document.querySelector('.map_text');
let observer14;

setTimeout(() => {
  observer14 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          phone2.style.opacity = '1';
          phone2.style.transform = "translateY(0%)";

          Roadmap.style.opacity ='1';
          Roadmap.style.transform = "translateY(0%)";
        }, 500);
        
        setTimeout(() => {
          map_text.style.opacity = "1";
          map_text.style.transform = "translateX(0%)";
        }, 1500);
        
      } else {

        phone2.style.opacity = '0';
        phone2.style.transform = "translateY(-10%)";

        Roadmap.style.opacity ='0';
        Roadmap.style.transform = "translateY(-10%)";

        map_text.style.opacity = "0";
        map_text.style.transform = "translateX(10%)";
        
      }
    });
  }, {threshold: 0.5});
  phone2.style.transition = "opacity 1.2s, transform 1.5s";
  Roadmap.style.transition = "opacity 0.9s, transform 1.5s";
  map_text.style.transition = "opacity 0.8s, transform 1.5s";
  observer14.observe(section14);
}, 1000);







//인포메이션
let section17 = document.getElementById('section17');
let screen1 = document.querySelector('#screen1');
let screen2 = document.querySelector('#screen2');
let observer17;

setTimeout(() => {
  observer17 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          screen1.style.opacity = '1';
          screen1.style.transform = "translateX(0%)";

          screen2.style.opacity ='1';
          screen2.style.transform = "translateX(0%)";
        }, 500);
        
      } else {
          screen1.style.opacity = '0';
          screen1.style.transform = "translateX(50%)";

          screen2.style.opacity ='0';
          screen2.style.transform = "translateX(-50%)";
      }
    });
  }, {threshold: 0.5});
  screen1.style.transition = "opacity 1.2s, transform 1.5s";
  screen2.style.transition = "opacity 0.9s, transform 1.5s";
  observer17.observe(section17);
}, 1000);