import "slick-carousel";

export class Plugins {

  init() {
    this.ServiceSlider();
    this.BannerSlider();
    this.TestimonialSlider();
    this.Pagination();
  }
  ServiceSlider() {
    $('.service-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: ".our-service-section .prev-arrow",
      nextArrow: ".our-service-section .next-arrow",
      responsive: [
        {
          breakpoint: 465,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });
  }
  BannerSlider() {
    $('.banner-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: ".banner-slider-section .prev-arrow",
      nextArrow: ".banner-slider-section .next-arrow",
      responsive: [
        {
          breakpoint: 465,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ],
      customPaging: function (slick, index) {
        return '<button>' + ('0' + (index + 1)).slice(-2) + '</button>';
      },
    });
  }
  TestimonialSlider() {
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: ".testimonial-section .prev-arrow",
      nextArrow: ".testimonial-section .next-arrow",
      responsive: [
        {
          breakpoint: 465,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    });
  }
  Pagination() {
    updatePagination(0, $('.banner-slider').slick('getSlick').slideCount);
    $('.banner-slider').on('afterChange', function (event, slick, currentSlide) {
      updatePagination(currentSlide, slick.slideCount);
    });
    function updatePagination(currentSlide, totalSlides) {
      var formattedCurrent = ('0' + (currentSlide + 1)).slice(-2);
      var formattedTotal = ('0' + totalSlides).slice(-2);
      $('.pagination-display').text(formattedCurrent + '/' + formattedTotal);
    }
    const $paginationWrapper = $('.banner-slider-section').find('.pagination-wrapper');
    const $slickDots = $('.banner-slider-section').find('.banner-slider .slick-dots');
    $paginationWrapper.append($slickDots);
  }
}
