const html_generieren_numbers_1p_4x4 = function () {

      const numbers = [
        1,
        2,
        3,
        4,
        6,
        5,
        7,
        8,
        3,
        8,
        4,
        5,
        7,
        1,
        6,
        2,
        9,
        10,
        9,
        10,
        11,
        12,
        11,
        12,
        13,
        14,
        13,
        14,
        15,
        16,
        15,
        16,
        17,
        18,
        17,
        18
        ];

        numbers.sort(() => Math.random() -0.5);

        let numbers_1p_4x4 = document.createElement("section");
        let target_body = document.querySelector("body");
        numbers_1p_4x4.setAttribute("id", "game-numbers-solo-4x4");
        numbers_1p_4x4.innerHTML = `<nav id="game-nav">
        <div class="game-header-text">
          <span>memory</span>
        </div>
        <div class="game-menu-button">
          <button id="restart-button">Restart</button>
          <button id="menu">Menu</button>
          <button id="new-game">New Game</button>
        </div>
      </nav>
      
      <div class="game-flex">
      <div id="game-grid-number-solo-4x4">
       <div class="game-flex">${numbers[0]}</div>
       <div class="game-flex">${numbers[1]}</div>
       <div class="game-flex">${numbers[2]}</div>
       <div class="game-flex">${numbers[3]}</div>
       <div class="game-flex">${numbers[4]}</div>
       <div class="game-flex">${numbers[5]}</div>
       <div class="game-flex">${numbers[6]}</div>
       <div class="game-flex">${numbers[7]}</div>
       <div class="game-flex">${numbers[8]}</div>
       <div class="game-flex">${numbers[9]}</div>
       <div class="game-flex">${numbers[10]}</div>
       <div class="game-flex">${numbers[11]}</div>
       <div class="game-flex">${numbers[12]}</div>
       <div class="game-flex">${numbers[13]}</div>
       <div class="game-flex">${numbers[14]}</div>
       <div class="game-flex">${numbers[15]}</div>
       <div class="game-flex">${numbers[16]}</div>
       <div class="game-flex">${numbers[17]}</div>
       <div class="game-flex">${numbers[18]}</div>
       <div class="game-flex">${numbers[19]}</div>
       <div class="game-flex">${numbers[20]}</div>
       <div class="game-flex">${numbers[21]}</div>
       <div class="game-flex">${numbers[22]}</div>
       <div class="game-flex">${numbers[23]}</div>
       <div class="game-flex">${numbers[24]}</div>
       <div class="game-flex">${numbers[25]}</div>
       <div class="game-flex">${numbers[26]}</div>
       <div class="game-flex">${numbers[27]}</div>
       <div class="game-flex">${numbers[28]}</div>
       <div class="game-flex">${numbers[29]}</div>
       <div class="game-flex">${numbers[30]}</div>
       <div class="game-flex">${numbers[31]}</div>
       <div class="game-flex">${numbers[32]}</div>
       <div class="game-flex">${numbers[33]}</div>
       <div class="game-flex">${numbers[34]}</div>
       <div class="game-flex">${numbers[35]}</div>
      </div>
      </div>
      
      <div id="data">
        <div class="time">
          <span class="time-header">Time</span>
          
          <div><label class="time-counter" id="minutes" style="font-weight: bold;">0</label><span class='bigger'>:</span><label class="time-counter" id="seconds" style="font-weight: bold;">00</label></div>
        </div>
        <div class="moves">
          <span class="moves-header">Moves</span>
          <span class="moves-counter">0</span>
        </div>
      </div>`

        target_body.insertAdjacentElement("afterbegin", numbers_1p_4x4);
      
      }

      function pad(val) {
        valString = val + "";
        if(valString.length < 2) {
           return "0" + valString;
           } else {
           return valString;
           }
      }

      function pad2(val) {
        valString = val + "";
           return valString;
      }
      
      totalSeconds = 0;
      function setTime(minutesLabel, secondsLabel) {
          totalSeconds++;
          secondsLabel.innerHTML = pad(totalSeconds%60);
          minutesLabel.innerHTML = pad2(parseInt(totalSeconds/60));
          }
      
        // start timer
      function set_timer() {
          minutesLabel = document.getElementById("minutes");
          secondsLabel = document.getElementById("seconds");
          my_int = setInterval(function() { setTime(minutesLabel, secondsLabel)}, 1000);
      }

      // stop timer
      
        function stop_timer() {
          clearInterval(my_int);
        }

      // Finish-Menu
        const finish_menu = function () {
          let get_doc = document.querySelector("#game-numbers-solo-4x4");
          const get_moves = document.querySelector(".moves-counter").innerHTML;
          const get_time_1 = document.querySelector("#minutes").innerHTML;
          const get_time_2 = document.querySelector(".bigger").innerHTML;
          const get_time_3 = document.querySelector("#seconds").innerHTML;
          let finish_menu = document.createElement("div");
          finish_menu.setAttribute("id", "finish-outside");
          finish_menu.innerHTML = `<div id="finish-screen">
          <div>
          <h1 id="finish-header">You did it!</h1>
          <p id="finish-text">Game over! Here's how you got on...<p>
          </div>
  
          <div id="finish-stats">
          <div id="finish-time">
          <span>Time Elapsed</span>
          <span>${get_time_1 + get_time_2 + get_time_3}</span>
          </div>
  
          <div id="finish-moves">
          <span>Moves Taken</span>
          <span>${get_moves} Moves</span>
          </div>
  
          <div id="finish-buttons">
          <button id="finish-restart-button">Restart</button>
          <button id="finish-new-game-button">Setup New Game</button>
          </div>`
          setTimeout(e => {
            get_doc.insertAdjacentElement("afterbegin", finish_menu);
          }, 1000);
          
        }

      // finish functions 

          //restart button 
          const finish_restart = function() {
          let finish_restart = document.querySelector("#finish-restart-button");
          finish_restart.addEventListener("click", e => {
          location.reload();
          }); 
          }

          
          //Setup new Game button 
          const finish_setup_new_game = function () {
            let finish_setup_new_game = document.querySelector("#finish-new-game-button");
            finish_setup_new_game.addEventListener("click" , e => {
              location.href = "/";
            });
          }
      
      
      const click_memory = function () {
        let moves = 0;
        let card_target = document.querySelector("#game-grid-number-solo-4x4");
        card_target.addEventListener("click", e =>{
          if (e.target.classList.contains("game-flex")) {
          const click_card = e.target;
          click_card.classList.add("flipCard");
          click_card.classList.add("flip");
        } 
           const orange_cards = document.querySelectorAll(".flipCard");
           const flip_cards = document.querySelectorAll(".flip");
           let move_target = document.querySelector(".moves span:nth-of-type(2)");

            if (flip_cards.length === 2) {
              moves ++;
              move_target.innerHTML = `${moves}`;
              if (orange_cards.length === 36) {
                stop_timer();
                finish_menu();
                setTimeout(function () {
                  finish_restart();
                  finish_setup_new_game();
                }, 1000);
                
              }
              if (flip_cards[0].innerText === flip_cards[1].innerText) {
                  setTimeout(e => {
                    flip_cards.forEach(e => {
                      e.style.backgroundColor = "orange";
                      });
                  }, 200);
                  flip_cards.forEach(e => {
                    e.classList.remove("flip");
                    });
                  
              } else {
                setTimeout(function() {
                  flip_cards.forEach(e => {
                   e.classList.remove("flipCard");
                   e.classList.remove("flip");
                   });
                }, 1000);
                
              }

            } else if (flip_cards.length > 3) {
              
                flip_cards.forEach(e => {
                 e.classList.remove("flipCard");
                 e.classList.remove("flip");
                 }); 
            } 
            
  
          
        });
        

      }

      // memory logo click 
      const logo_click = function () {
        let logoClick = document.querySelector(".game-header-text");
        logoClick.addEventListener("click", e => {
          location.href = "/";
        });
      }
      

      // mobile / restart game after menu opens
      const restart_game = function () {
        let restart = document.querySelector("#menu-restart-button");
        restart.addEventListener("click", e => {
          location.reload();
        });
      }

      // mobile / go back to setup new game after menu opens
      const new_game = function () {
        let newGame = document.querySelector("#menu-new-game-button");
        newGame.addEventListener("click", e => {
          location.href = "/";
        });
      }

      // mobile / resume the game after menu opens

      const resume_game = function () {
        let resumeGame = document.querySelector("#menu-resume-game-button");
        let deleteMenu = document.querySelector("#menu-outside");
        resumeGame.addEventListener("click", e => {
        deleteMenu.remove();
        stop_timer();
        set_timer(); 
        });
      }

      // desktop / restart game on clicking button
      const restart_game_desktop = function () {
        let restart_game = document.querySelector("#restart-button");
        restart_game.addEventListener("click", e => {
          location.reload();
        });
      }

      // desktop / new game on clicking button
      const new_game_desktop = function () {
        let new_game = document.querySelector("#new-game");
        new_game.addEventListener("click", e => {
          location.href = "/";
        });
      }

      // click [menu] button
      const click_menu_button = function () {
        let menu_button = document.querySelector("#menu");
        let get_doc = document.querySelector("#game-numbers-solo-4x4");
        let menu_outside = document.createElement("div");
        menu_outside.setAttribute("id", "menu-outside");
        menu_outside.innerHTML = `<div id="pause-bg">
        <button id="menu-restart-button">Restart</button>
        <button id="menu-new-game-button">New Game</button>
        <button id="menu-resume-game-button">Resume Game</button>
        </div>`
       

        menu_button.addEventListener("click", e => {
          get_doc.insertAdjacentElement("afterbegin", menu_outside);
          stop_timer();
          restart_game();
          new_game();
          resume_game();
        });
      }




      

      // starts all function
      const start_numbers_1p_4x4 = function () {
        html_generieren_numbers_1p_4x4();
        click_memory();
        set_timer();
        click_menu_button();
        logo_click();
        restart_game_desktop();
        new_game_desktop();
      }

      start_numbers_1p_4x4();

 
 