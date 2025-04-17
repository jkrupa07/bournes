import "slick-carousel";

export class Plugins {

  init() {
    this.ServiceSlider();
    this.BannerSlider();
    this.TestimonialSlider();
    this.BannerPagination();
    this.CarouselPagination();
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
  BannerPagination() {
    $(document).ready(function () {
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
    });
  }

  CarouselPagination() {
    $(document).ready(function () {
      const $carousel = $('#modalCarouselControls');
      const $currentSlide = $('#modalCurrentSlide');
      const $totalSlides = $('#modalTotalSlides');
      const $slides = $carousel.find('.carousel-item');
    
      // Function to format the slide number with leading zero (01, 02, etc.)
      const formatNum = (n) => (n < 10 ? '0' : '') + n;
    
      // Set the total slides (e.g., "03" for 3 slides)
      $totalSlides.text(formatNum($slides.length));
    
      // Initialize the carousel
      $carousel.carousel();
    
      // Function to update the current slide number
      function updateCurrentSlide() {
        const activeIndex = $carousel.find('.carousel-item.active').index(); // Get the index of the active slide
        $currentSlide.text(formatNum(activeIndex + 1)); // Update the display for current slide number
      }
    
      // When the carousel slides, update the pagination
      $carousel.on('slid.bs.carousel', function () {
        updateCurrentSlide(); // Update the current slide number when the slide changes
      });
    
      // Ensure the pagination is correct when the modal is shown (this helps with the initial state)
      $('#memberModalToggle').on('shown.bs.modal', function () {
        updateCurrentSlide();
      });
    });
    
    
  
  }
}
