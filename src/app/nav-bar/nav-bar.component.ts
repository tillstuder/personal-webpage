import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const revealer = (actionBtn, revealBlock, config) => {
      const actionBtnEl = actionBtn;
      const revealBlockEl = revealBlock;
      const { onRevealEnd, initialPosition } = config;
      const initialRadius = 25;

      let isMenuOpen = false;
      let reqId = null;
      let targetRadius = initialRadius;
      let elementRadius = targetRadius;

      const initRevealBlock = () => {
        revealBlock.style.clipPath = 'circle(var(--radius) at calc(100% - 33px) 33px)';
        revealBlockEl.style.setProperty('--radius', `${initialRadius}px`);
        revealBlockEl.setAttribute('data-active', true);
      };

      const getTargetRadius = inMenuOpen => {
        return inMenuOpen ? getMinimumRadius() : initialRadius;
      };

      const getMinimumRadius = () => {
        const { innerHeight, innerWidth } = window;

        return Math.sqrt(innerHeight ** 2 + innerWidth ** 2);
      }

      const animationStart = () => {
        elementRadius += (targetRadius - elementRadius) * 0.25;
        revealBlockEl.style.setProperty('--radius', `${elementRadius}px`);

        reqId = requestAnimationFrame(animationStart);

        // some bug with small black point
        const isStopAnimation = isMenuOpen ? elementRadius > targetRadius : Math.round(elementRadius) === Math.round(targetRadius);
        if (isStopAnimation) {
          onRevealEnd();
          animationStop();
        }
      };

      const animationStop = () => {
        cancelAnimationFrame(reqId);
        reqId = null;
      };

      const onReveal = () => {
        isMenuOpen = !isMenuOpen;
        actionBtnEl.setAttribute('data-open', isMenuOpen);
        targetRadius = getTargetRadius(isMenuOpen);
        animationStart();
      };

      initRevealBlock();
      actionBtnEl.addEventListener('click', onReveal);
    }

    document.addEventListener('DOMContentLoaded', () => {
      const actionBtn = document.querySelector('.nav-btn-js');
      const revealBlock = document.querySelector('.nav-js');
      const config = {
        onRevealEnd() {
          console.log('end');
        },
      };

      revealer(actionBtn, revealBlock, config);
    });

  }


}
