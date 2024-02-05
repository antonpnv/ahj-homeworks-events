(()=>{"use strict";class t{constructor(){this.element=document.querySelector(".goblin"),this.element&&!this.element.classList.contains("goblin-active")&&this.element.classList.add("goblin-active")}moveTo(t){this.element&&t instanceof Node&&t.appendChild(this.element)}removeGoblinClass(){this.element.classList.remove("goblin-active")}}class e{constructor(){this.element=document.createElement("div"),this.element.classList.add("cell")}}class s{constructor(){this.gameContainer=document.querySelector(".game-container"),this.hitCounter=document.querySelector(".hit"),this.lostCounter=document.querySelector(".lost"),this.restartButton=null,this.intervalId=null,this.gameOver=!1,this.score=0,this.prevCell=0,this.missCount=0,this.cells=[],this.goblin=new t,this.generateGameField(),this.moveGoblin(),this.handleGoblinClick()}generateGameField(){for(let t=0;t<16;t++){const t=new e;this.cells.push(t),this.gameContainer.appendChild(t.element)}}generateRandomPosition(){if(1===this.cells.length)return this.cells[0];let t;do{t=Math.floor(Math.random()*this.cells.length)}while(this.prevCell===t);return this.prevCell=t,this.cells[t].element}moveGoblin(){this.placeGoblin(),this.intervalId=setInterval((()=>{this.placeGoblin(),this.goblin.element.classList.add("goblin-active"),this.missCount>=5&&this.endGame()}),1e3)}placeGoblin(){const t=this.generateRandomPosition();this.goblin.moveTo(t)}handleGoblinClick(){this.gameContainer.addEventListener("click",(t=>{t.target.classList.contains("goblin-active")?(this.score++,this.hitCounter.textContent=`Попаданий: ${this.score}`,this.goblin.removeGoblinClass()):(this.missCount++,this.lostCounter.textContent=`Промахов: ${this.missCount}`)}))}endGame(){clearInterval(this.intervalId),this.hitCounter&&this.lostCounter&&(this.hitCounter.textContent=`Игра окончена! Ваш счёт: ${this.score}`,this.lostCounter.textContent=""),this.missCount=0,this.score=0,this.goblin.removeGoblinClass(),this.createRestartButton(),this.showRestartButton(),this.gameOver=!0}createRestartButton(){const t=document.querySelector(".score");this.restartButton||(this.restartButton=document.createElement("button"),this.restartButton.textContent="Начать заново",this.restartButton.classList.add("restart-button"),this.restartButton.addEventListener("click",(()=>{this.resetGame()})),t.appendChild(this.restartButton))}resetGame(){this.gameOver=!1,this.score=0,this.prevCell=0,this.missCount=0,this.hitCounter&&this.lostCounter&&(this.hitCounter.textContent="Попаданий: 0",this.lostCounter.textContent="Промахов: 0"),this.goblin.removeGoblinClass(),this.placeGoblin(),this.moveGoblin(),this.hideRestartButton()}showRestartButton(){this.restartButton.style.display="block"}hideRestartButton(){this.restartButton.style.display="none"}}document.addEventListener("DOMContentLoaded",(()=>{new s}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0UsTUFBTUUsRUFBaUI5QyxTQUFTQyxjQUFjLFVBRXpDSCxLQUFLbUIsZ0JBQ1JuQixLQUFLbUIsY0FBZ0JqQixTQUFTWSxjQUFjLFVBQzVDZCxLQUFLbUIsY0FBY3lCLFlBQWMsZ0JBQ2pDNUMsS0FBS21CLGNBQWNmLFVBQVVFLElBQUksa0JBQ2pDTixLQUFLbUIsY0FBY3NCLGlCQUFpQixTQUFTLEtBQzNDekMsS0FBS2lELFdBQVcsSUFHbEJELEVBQWV0QyxZQUFZVixLQUFLbUIsZUFFcEMsQ0FFQThCLFNBQUFBLEdBQ0VqRCxLQUFLcUIsVUFBVyxFQUNoQnJCLEtBQUtzQixNQUFRLEVBQ2J0QixLQUFLdUIsU0FBVyxFQUNoQnZCLEtBQUt3QixVQUFZLEVBRWJ4QixLQUFLaUIsWUFBY2pCLEtBQUtrQixjQUMxQmxCLEtBQUtpQixXQUFXMkIsWUFBYyxlQUM5QjVDLEtBQUtrQixZQUFZMEIsWUFBYyxlQUdqQzVDLEtBQUswQixPQUFPZixvQkFDWlgsS0FBS3NDLGNBQ0x0QyxLQUFLNEIsYUFFTDVCLEtBQUtrRCxtQkFDUCxDQUVBSCxpQkFBQUEsR0FDRS9DLEtBQUttQixjQUFjZ0MsTUFBTUMsUUFBVSxPQUNyQyxDQUVBRixpQkFBQUEsR0FDRWxELEtBQUttQixjQUFjZ0MsTUFBTUMsUUFBVSxNQUNyQyxFQ2hJRmxELFNBQVN1QyxpQkFBaUIsb0JBQW9CLEtBRTVDLElBQUkxQixDQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haGotaG9tZXdvcmtzLWV2ZW50cy8uL3NyYy9qcy9Hb2JsaW4uanMiLCJ3ZWJwYWNrOi8vYWhqLWhvbWV3b3Jrcy1ldmVudHMvLi9zcmMvanMvQ2VsbFJlbmRlcmVyLmpzIiwid2VicGFjazovL2Foai1ob21ld29ya3MtZXZlbnRzLy4vc3JjL2pzL0dhbWVMb2dpYy5qcyIsIndlYnBhY2s6Ly9haGotaG9tZXdvcmtzLWV2ZW50cy8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29ibGluIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYmxpbicpO1xuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2dvYmxpbi1hY3RpdmUnKSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dvYmxpbi1hY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBtb3ZlVG8oY2VsbCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgY2VsbCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVHb2JsaW5DbGFzcygpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ29ibGluLWFjdGl2ZScpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICB9XG59XG4iLCJpbXBvcnQgR29ibGluIGZyb20gJy4vR29ibGluJztcbmltcG9ydCBDZWxsUmVuZGVyZXIgZnJvbSAnLi9DZWxsUmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9naWMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKTtcbiAgICB0aGlzLmhpdENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGl0Jyk7XG4gICAgdGhpcy5sb3N0Q291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3N0Jyk7XG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uID0gbnVsbDtcbiAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnByZXZDZWxsID0gMDtcbiAgICB0aGlzLm1pc3NDb3VudCA9IDA7XG4gICAgdGhpcy5jZWxscyA9IFtdO1xuICAgIHRoaXMuZ29ibGluID0gbmV3IEdvYmxpbigpO1xuXG4gICAgdGhpcy5nZW5lcmF0ZUdhbWVGaWVsZCgpO1xuICAgIHRoaXMubW92ZUdvYmxpbigpO1xuICAgIHRoaXMuaGFuZGxlR29ibGluQ2xpY2soKTtcbiAgfVxuXG4gIGdlbmVyYXRlR2FtZUZpZWxkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgY29uc3QgY2VsbCA9IG5ldyBDZWxsUmVuZGVyZXIoKTtcbiAgICAgIHRoaXMuY2VsbHMucHVzaChjZWxsKTtcbiAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlUmFuZG9tUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuY2VsbHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5jZWxsc1swXTtcbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tQ2VsbDtcbiAgICBkbyB7XG4gICAgICByYW5kb21DZWxsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jZWxscy5sZW5ndGgpO1xuICAgIH0gd2hpbGUgKHRoaXMucHJldkNlbGwgPT09IHJhbmRvbUNlbGwpO1xuXG4gICAgdGhpcy5wcmV2Q2VsbCA9IHJhbmRvbUNlbGw7XG4gICAgcmV0dXJuIHRoaXMuY2VsbHNbcmFuZG9tQ2VsbF0uZWxlbWVudDtcbiAgfVxuXG4gIG1vdmVHb2JsaW4oKSB7XG4gICAgdGhpcy5wbGFjZUdvYmxpbigpO1xuXG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5wbGFjZUdvYmxpbigpO1xuICAgICAgdGhpcy5nb2JsaW4uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnb2JsaW4tYWN0aXZlJyk7XG5cbiAgICAgIGlmICh0aGlzLm1pc3NDb3VudCA+PSA1KSB7XG4gICAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcGxhY2VHb2JsaW4oKSB7XG4gICAgY29uc3QgcmFuZG9tQ2VsbCA9IHRoaXMuZ2VuZXJhdGVSYW5kb21Qb3NpdGlvbigpO1xuICAgIHRoaXMuZ29ibGluLm1vdmVUbyhyYW5kb21DZWxsKTtcbiAgfVxuXG4gIGhhbmRsZUdvYmxpbkNsaWNrKCkge1xuICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZ29ibGluQ2VsbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmIChnb2JsaW5DZWxsLmNsYXNzTGlzdC5jb250YWlucygnZ29ibGluLWFjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgdGhpcy5oaXRDb3VudGVyLnRleHRDb250ZW50ID0gYNCf0L7Qv9Cw0LTQsNC90LjQuTogJHt0aGlzLnNjb3JlfWA7XG4gICAgICAgIHRoaXMuZ29ibGluLnJlbW92ZUdvYmxpbkNsYXNzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pc3NDb3VudCsrO1xuICAgICAgICB0aGlzLmxvc3RDb3VudGVyLnRleHRDb250ZW50ID0gYNCf0YDQvtC80LDRhdC+0LI6ICR7dGhpcy5taXNzQ291bnR9YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGVuZEdhbWUoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIGlmICh0aGlzLmhpdENvdW50ZXIgJiYgdGhpcy5sb3N0Q291bnRlcikge1xuICAgICAgdGhpcy5oaXRDb3VudGVyLnRleHRDb250ZW50ID0gYNCY0LPRgNCwINC+0LrQvtC90YfQtdC90LAhINCS0LDRiCDRgdGH0ZHRgjogJHt0aGlzLnNjb3JlfWA7XG4gICAgICB0aGlzLmxvc3RDb3VudGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5taXNzQ291bnQgPSAwO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuZ29ibGluLnJlbW92ZUdvYmxpbkNsYXNzKCk7XG4gICAgdGhpcy5jcmVhdGVSZXN0YXJ0QnV0dG9uKCk7XG4gICAgdGhpcy5zaG93UmVzdGFydEJ1dHRvbigpO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgY3JlYXRlUmVzdGFydEJ1dHRvbigpIHtcbiAgICBjb25zdCBzY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZScpO1xuXG4gICAgaWYgKCF0aGlzLnJlc3RhcnRCdXR0b24pIHtcbiAgICAgIHRoaXMucmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ9Cd0LDRh9Cw0YLRjCDQt9Cw0L3QvtCy0L4nO1xuICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhcnQtYnV0dG9uJyk7XG4gICAgICB0aGlzLnJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG4gICAgICB9KTtcblxuICAgICAgc2NvcmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZXN0YXJ0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICByZXNldEdhbWUoKSB7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMucHJldkNlbGwgPSAwO1xuICAgIHRoaXMubWlzc0NvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLmhpdENvdW50ZXIgJiYgdGhpcy5sb3N0Q291bnRlcikge1xuICAgICAgdGhpcy5oaXRDb3VudGVyLnRleHRDb250ZW50ID0gJ9Cf0L7Qv9Cw0LTQsNC90LjQuTogMCc7XG4gICAgICB0aGlzLmxvc3RDb3VudGVyLnRleHRDb250ZW50ID0gJ9Cf0YDQvtC80LDRhdC+0LI6IDAnO1xuICAgIH1cblxuICAgIHRoaXMuZ29ibGluLnJlbW92ZUdvYmxpbkNsYXNzKCk7XG4gICAgdGhpcy5wbGFjZUdvYmxpbigpO1xuICAgIHRoaXMubW92ZUdvYmxpbigpO1xuXG4gICAgdGhpcy5oaWRlUmVzdGFydEJ1dHRvbigpO1xuICB9XG5cbiAgc2hvd1Jlc3RhcnRCdXR0b24oKSB7XG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgaGlkZVJlc3RhcnRCdXR0b24oKSB7XG4gICAgdGhpcy5yZXN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lTG9naWMgZnJvbSAnLi9HYW1lTG9naWMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gIG5ldyBHYW1lTG9naWMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkdvYmxpbiIsImNvbnN0cnVjdG9yIiwidGhpcyIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsIm1vdmVUbyIsImNlbGwiLCJOb2RlIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVHb2JsaW5DbGFzcyIsInJlbW92ZSIsIkNlbGxSZW5kZXJlciIsImNyZWF0ZUVsZW1lbnQiLCJHYW1lTG9naWMiLCJnYW1lQ29udGFpbmVyIiwiaGl0Q291bnRlciIsImxvc3RDb3VudGVyIiwicmVzdGFydEJ1dHRvbiIsImludGVydmFsSWQiLCJnYW1lT3ZlciIsInNjb3JlIiwicHJldkNlbGwiLCJtaXNzQ291bnQiLCJjZWxscyIsImdvYmxpbiIsImdlbmVyYXRlR2FtZUZpZWxkIiwibW92ZUdvYmxpbiIsImhhbmRsZUdvYmxpbkNsaWNrIiwiaSIsInB1c2giLCJnZW5lcmF0ZVJhbmRvbVBvc2l0aW9uIiwibGVuZ3RoIiwicmFuZG9tQ2VsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYWNlR29ibGluIiwic2V0SW50ZXJ2YWwiLCJlbmRHYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJjbGVhckludGVydmFsIiwiY3JlYXRlUmVzdGFydEJ1dHRvbiIsInNob3dSZXN0YXJ0QnV0dG9uIiwic2NvcmVDb250YWluZXIiLCJyZXNldEdhbWUiLCJoaWRlUmVzdGFydEJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=