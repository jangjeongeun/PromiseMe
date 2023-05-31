//스크롤 위치 출략
// var scrollY = window.scrollY;
// console.log(scrollY);

// window.addEventListener("scroll", function(){
//   console.log("clientHeight: " + document.body.clientHeight);
//   console.log("scrollY: " + window.scrollY);
// });

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


// window.addEventListener('scroll', function() {
//   if (!isMenuOpen) { // 메뉴 슬라이드가 닫혀 있는 상태일 때에만 스크롤 동작 실행
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       header.style.top = '0';
//     } else {
//       header.style.top = '-90px';
//     }
//     prevScrollpos = currentScrollPos;
//     header.style.transition = 'top 0.4s';
//   }
// });

// window.addEventListener('scroll', function() {
//   if (menuSlide.style.display === 'none') {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       header.style.top = '0';
//     } else {
//       header.style.top = '-90px';
//     }
//     prevScrollpos = currentScrollPos;
//     header.style.transition = 'top 0.4s';
//   }
// });


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

  // 메뉴 슬라이드 토글
  if (isMenuOpen) {
    isMenuOpen = false;
    menuSlide.style.height = "0"; // 높이를 0으로 변경
    // btn.style.backgroundImage = "url('../images/hamburger.png')";
    setTimeout(function() {
      menuSlide.style.display = 'none'; // 변경 후 display를 none으로 설정
    }, 300); // setTimeout으로 지연 시간 설정 (transition 시간과 동일하게)
  } else {
    isMenuOpen = true;
    menuSlide.style.display = 'block'; // display를 block으로 설정
    // btn.style.backgroundImage = "url('../images/hamburger2.png')";
    setTimeout(function() {
      menuSlide.style.height = "200px"; // 높이를 200px로 변경
    }, 0); // setTimeout으로 지연 시간 설정 (0ms로 설정하여 즉시 실행)
  }
});

// // 버튼 클릭 이벤트 핸들러 추가
// btn.addEventListener('click', function() {
//   // 현재 이미지 URL 가져오기
//   var currentImageUrl = btn.style.backgroundImage;

//   // 새로운 이미지 URL 정의
//   var newImageUrl = "../images/hamburger2.png"; // 바꿀 이미지 URL을 여기에 설정해주세요

//   // 이미지 변경
//   if (currentImageUrl === "url('../images/hamburger.png')") {
//     // 현재 이미지가 기본 이미지일 경우 새로운 이미지로 변경
//     btn.style.backgroundImage = "url('../images/hamburger2.png')";
//   } else {
//     // 현재 이미지가 새로운 이미지일 경우 기본 이미지로 변경
//     btn.style.backgroundImage = "url('../images/hamburger.png')";
//   }
// });




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
//푸터 관찰 시작
let footer = document.getElementById("footer");
observer0.observe(footer);

// let observer00 = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       $("#scrolltotap").css("filter", "invert(80%)");
//     } else {
//       $("#scrolltotap").css("filter", "invert(0%)");
//     }
//   });
// }, { threshold: 0 });
// let section8 = document.getElementById("section8");
// observer00.observe(section8);








//스크롤 이벤트
// window.addEventListener('scroll', () => { 
//   //스크롤을 할 때마다 로그로 현재 스크롤의 위치
//   console.log(window.scrollX, window.scrollY);
// });

//스크롤 위치가 다르면 애니메이션이 늦게 발생되는 문제가 발생해서 옵서버 api사용

//백그라운드
let observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"; // 화면에 보이는 경우 투명도를 1로 설정
    } else {
      entry.target.style.opacity = "0"; // 화면에 보이지 않는 경우 투명도를 0으로 설정 (페이드 아웃)
    }
  });
}, { threshold: 0.5 }); // threshold 값은 필요에 따라 조정 가능

let element = document.getElementById("three1");
element.style.transition = "opacity 1.5s ease-in-out";

observer1.observe(element); // 관찰 대상 요소 등록

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




// //경고메세지
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       if (response) {
//         return response;
//       }

//       // 프로미스가 완료될 때까지 대기하도록 waitUntil() 사용
//       return fetch(event.request).then(function(networkResponse) {
//         // 요청이 완료된 후 캐시에 응답을 추가
//         caches.open('my-cache').then(function(cache) {
//           cache.put(event.request, networkResponse.clone());
//         });

//         return networkResponse;
//       });
//     })
//   );
// });


//텍스트 애니메이션
// function animateMarquee() {
//   const marquee = document.getElementById("wrap1");
//   const marqueeItems = Array.from(marquee.getElementsByTagName("li"));

//   const marqueeWidth = marquee.offsetWidth;

//   let offset = 0;
//   const speed = 2; // 이동 속도 (조정 가능)

//   function update() {
//     offset -= speed;
//     marquee.style.transform = `translateX(${offset}px)`;

//     if (offset < -marqueeItems[0].offsetWidth) {
//       offset += marqueeItems[0].offsetWidth;
//       marquee.appendChild(marqueeItems.shift());
//       marqueeItems.push(marqueeItems[0].cloneNode(true));
//     }

//     requestAnimationFrame(update);
//   }

//   update();
// }

// animateMarquee();

