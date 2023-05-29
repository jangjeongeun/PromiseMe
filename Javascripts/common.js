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

var element = document.getElementById("three1");

function handleScroll() {
  var scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 800) {
    element.style.opacity = "1";
  } else {
    element.style.opacity = "0";
  }
  element.style.transition = "opacity 0.6s ease-in-out";
}
window.addEventListener("scroll", handleScroll);

var comment = document.getElementById("animation");

function handleScroll2() {
  var scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 800) {
    comment.style.opacity = "1";
  } else {
    comment.style.opacity = "0";
  }
  comment.style.transition = "opacity 3.0s ease-in-out";
}
window.addEventListener("scroll", handleScroll2);







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

