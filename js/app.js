$(document).ready(function () {

    //    $(".item-link").magnify();
    $('.gallery-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $(".nav-link").on('click', function (event) {
        event.preventDefault();
        const section = event.target.href



        // console.log(section);
    })
    const onscroll = function () {
        //console.log(this)
        let pos = this.scrollY;
        if (pos >= 466) {
            $('.navbar').addClass('fixed-top')


        } else {
            $('.navbar').removeClass('fixed-top')
        }

        const posSpec = parseInt($('#special').offset().top);
        const posContact = parseInt($('#contact').offset().top);
        //        console.log(posSpec, posContact)
        if (pos >= posSpec && pos <= posContact) {
            //            console.log(pos, posSpec, posContact)
            $('.header-link').css({
                "position": "fixed",
                "z-index": "999"
            })



        } else {
            $('.header-link').css({
                "position": "absolute"

            })


        }
        // console.log(pos)
    }
    $(window).on('scroll', onscroll);
    $(document.body).on('touchmove', onscroll);

    $('.nav-link,.header-link,.bottom-link').on('click', function (event) {
        event.preventDefault();
        //const link = event.target;
        const target = $(this).attr('href');
        const otop = document.querySelector(target).offsetTop;
        const jtop = $(target).offset().top;
        // console.log('otop', otop, 'jtop', jtop)


        $("html, body").stop().animate({
            scrollTop: jtop - 25 //120
        }, 3000)

    })



})
