import './styles/main.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'rellax'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import {TimelineMax, Expo} from 'gsap/all'
import $ from 'jquery'

gsap.registerPlugin(CSSPlugin)

var Rellax = require('rellax')
var rellax = new Rellax('.rellax');

var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.8, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.8
});

t1.to(".menu", 1, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -1
});

t1.set(".hamburger", {className: "+=hamburger active"})

t1.staggerFrom(".menu a", 0.2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.1);

t1.reverse();
$('.hamburger').on("click", function() {
     t1.reversed(!t1.reversed());
     
});
$('.menu a').on("click", function() {
     t1.reversed(!t1.reversed());
});

