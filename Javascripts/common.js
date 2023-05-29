//스크롤 위치 출략
// var scrollY = window.scrollY;
// console.log(scrollY);

// window.addEventListener("scroll", function(){
//   console.log("clientHeight: " + document.body.clientHeight);
//   console.log("scrollY: " + window.scrollY);
// });

// 헤더 ㅅ크롤, 스무스 이동
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
  window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('header').style.top = '0';
    } else {
      document.getElementById('header').style.top = '-90px';
    }
    prevScrollpos = currentScrollPos;
    document.getElementById('header').style.transition = 'top 0.4s';
  });


//로고 눌렀을 때 스크롤 맨 위로
document.getElementById('logo').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//스크롤탑 버튼(로고와는 별개)

$(document).ready(function() {
  $("#scrolltotap").hide();

// 스크롤 시 효과 설정
$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
    $("#scrolltotap").fadeIn();
  }
  else {
    $("#scrolltotap").fadeOut();
  }
});

// 버튼 클릭 시 효과 설정
$("#scrolltotap").click(function() {  // 버튼 클릭 시
  $('html,body').animate( {  // 애니메이션 적용
    scrollTop : 0  // 스크롤탑이 '0'으로 올라갈 때
  }, 800);  // 800에 걸쳐서 이동
  return false;
});
});


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
      entry.target.style.top = "10vh";
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.top = "14vh";
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
      entry.target.style.top = "35vh";
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.top = "39vh";
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
      entry.target.style.top = "59vh";
    } else {
      entry.target.style.opacity = "0";
      entry.target.style.top = "63vh";
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




