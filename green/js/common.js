$(function() {
    page.init();
});

var page = {
    init: function() {
        //공통
        page.common();
        
        //메인페이지
        page.index();
        
        //상세
        page.detail();
        
        //상세 지도
        page.map();
        
        //리뷰
        page.review();
        
        //검색
        page.search();
        
        //관리
        page.manage();
        
        //팝업
        page.popup.init();
    },
    common: function() {
        //헤더
        //페이지 뒤로
        $("#header .btn_back").on("click", function() {
            window.history.back();
            return false;
        });
        
        //사이드메뉴
        var sideMenu = $("#side_menu");
        var btnFooterMenu = $("#footer .btn_menu").on("click", function() {
            $(this).toggleClass("active");
            if($(this).hasClass("active")) {
                sideMenu.stop(true,true).animate({ left:0, opacity:1 }, 300);
                $("body").addClass("popup");
            }
            else {
                sideMenu.stop(true,true).animate({ left:"100%", opacity:0 }, 300);
                $("body").removeClass("popup");
            }
            return false;
        });
        sideMenu.find(".btn_back").on("click", function() {
            btnFooterMenu.removeClass("active");
            sideMenu.stop(true,true).animate({ left:"100%", opacity:0 }, 300);
            $("body").removeClass("popup");
            return false;
        });
    },
    index: function() {
        //배너 슬라이드
        if($("#banner_slide").length > 0) {
            $("#banner_slide").removeClass("load").slick({
                autoplay: true, //자동 슬라이드
                autoplaySpeed: 4000,
                speed: 500,
                dots: false,
                arrows: false
            });
        }
        
        //인기검색어
        if($("#rank_list").length > 0) {
            $("#rank_list").clone().addClass("liston").attr("id","rank_liston").appendTo($("#rank_list").parent());
            $("#rank_list").slick({
                vertical: true,
                verticalSwiping: true,
                autoplay: true, //자동 슬라이드
                autoplaySpeed: 4000,
                speed: 500,
                dots: false,
                arrows: false
            });
            
            $("#btn_rank_dropdown").on("click", function() {
                $(".rank_box").toggleClass("open");
                return false;
            });
        }
    },
    detail: function() {
        var reserveMenu = $("#reserve_menu");
        if(reserveMenu.length > 0) {
            reserveMenu.find(".btn_reserve").on("click", function() {
                page.popup.mask(true);
                reserveMenu.find(".reserve_detail").stop(true,true).slideDown(200);
                return false;
            });
            reserveMenu.find(".reserve_detail .btn_close").on("click", function() {
                page.popup.mask(false);
                reserveMenu.find(".reserve_detail").stop(true,true).slideUp(200);
                return false;
            });
        }
    },
    map: function() {
        if($("#map").length > 0) {
            var getLang = $("#map").data("lang").split(",");
            var mapOptions = {
                center: new naver.maps.LatLng(getLang[0],getLang[1]),
                zoom: 10    //확대
            };
            var map = new naver.maps.Map("map", mapOptions);
        }
    },
    review: function() {
        if($("#grade_point").length > 0) {
            var gradePoint = $("#grade_point .star");
            $("#grade_point").on("mousemove touchstart touchmove", function(e) {
                if($(e.target).hasClass("star")) {
                    gradePoint.removeClass("on");
                    var getIdx = $(e.target).addClass("on").index();
                    $("#grade_point .star:lt(" + getIdx + ")").addClass("on");
                }
            });
        }
    },
    search: function() {
        //지역 펼침
        $("#location_list .btn_location").on("click", function() {
            var getBox = $(this).parent();
            if(getBox.hasClass("active")) {
                getBox.removeClass("active").find(".sub_list").stop(true,true).slideUp(200);
            }
            else {
                $("#location_list .location_box.active").removeClass("active").find(".sub_list").stop(true,true).slideUp(200);
                getBox.addClass("active").find(".sub_list").stop(true,true).slideDown(200);
            }
            return false;
        });
        
        //지역 선택
        var btnLocationSub = $("#location_list .sub_list .btn_sub").on("click", function() {
            btnLocationSub.removeClass("active");
            $(this).addClass("active");
            return false;
        });
    },
    manage: function() {
        //블로그 관리 탭 선택
        var btnTabMenu = $("#manage_tab .tab_menu .btn_tab").on("click", function() {
            btnTabMenu.removeClass("active");
            var getIdx = $(this).addClass("active").index();
            $("#manage_tab .tab_panel").removeClass("active").eq(getIdx).addClass("active");
            return false;
        });
    },
    popup: {
        mask: function(type) {
            if(type === true) {
                if($("#popup_mask").length == 0) {
                    $("body").append("<div id='popup_mask'></div>");
                }
                $("#popup_mask").stop(true,true).fadeIn(200);
            }
            else {
                $("#popup_mask").stop(true,true).fadeOut(200);
            }
        },
        msg: function(title, text, callback) {
            $("#popup_alert").remove();
            $("body").append("<div id='popup_alert' class='popup_window'><div class='popup_area'><div class='popup_title'>" + title + "</div><a href='#' class='btn_close'><span class='icons ic_clear'></span></a><div class='popup_text'><p>" + text + "</p></div><div class='popup_bottom'><a href='#' class='btn_confirm'>확인</a></div></div></div>");
            $("#popup_alert").stop(true,true).fadeIn(200);
            $("#popup_alert .btn_confirm").on("click", function() {
                $("#popup_alert").stop(true,true).fadeOut(200);
                if(callback != undefined && callback != null) {
                    callback();
                }
                return false;
            });
        },
        init: function() {
            $("body").on("click",".popup_window .btn_close", function() {
                $(".popup_window:visible").stop(true,true).fadeOut(200);
                return false;
            });
            
            //마이페이지 사진변경 팝업
            $("#side_menu .btn_profile").on("click", function() {
                $("#popup_picture").stop(true,true).fadeIn(200);
                return false;
            });
            $("#popup_picture .btn_confirm").on("click", function() {
                $("#popup_picture").stop(true,true).fadeOut(200);
                //사진변경 확인
                return false;
            });
            
            //마이페이지 닉네임변경 팝업
            $("#side_menu .btn_modify").on("click", function() {
                $("#popup_nickname").stop(true,true).fadeIn(200);
                return false;
            });
            $("#popup_nickname .btn_confirm").on("click", function() {
                $("#popup_nickname").stop(true,true).fadeOut(200);
                //닉네임변경 확인
                return false;
            });
            
            //비밀번호 변경 알림 팝업
            //이메일로 찾기
            $("#btn_find_email").on("click", function() {
                page.popup.msg("비밀번호 변경","입력한 이메일로 임시 비밀번호를 <br>발송했습니다.", function() {
                    //확인시 실행할 내용
                });
                return false;
            });
            //휴대폰으로 찾기
            $("#btn_find_mobile").on("click", function() {
                page.popup.msg("비밀번호 변경","입력한 전화번호로 임시 비밀번호를 <br>발송했습니다.", function() {
                    //확인시 실행할 내용
                });
                return false;
            });
        }
    }
}