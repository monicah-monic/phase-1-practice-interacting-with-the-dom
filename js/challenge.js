document.addEventListener("DOMContentLoaded", function () {
  let counter = document.getElementById("counter");
  let plusButton = document.getElementById("plus");
  let minusButton = document.getElementById("minus");
  let heartButton = document.getElementById("heart");
  let pauseButton = document.getElementById("pause");
  let likesList = document.querySelector(".likes");
  let commentForm = document.getElementById("comment-form");
  let commentList = document.getElementById("list");
  let count = 0;
  let isPaused = false;
  let interval = setInterval(incrementCounter, 1000);

  function incrementCounter() {
    if (!isPaused) {
      counter.textContent = ++count;
    }
  }

  plusButton.addEventListener("click", function () {
    counter.textContent = ++count;
  });

  minusButton.addEventListener("click", function () {
    counter.textContent = --count;
  });

  heartButton.addEventListener("click", function () {
    let existingLike = document.getElementById(`like-${count}`);
    if (existingLike) {
      let likeCount = existingLike.querySelector("span");
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else {
      let likeItem = document.createElement("li");
      likeItem.id = `like-${count}`;
      likeItem.innerHTML = `Number ${count} has been liked <span>1</span> times.`;
      likesList.appendChild(likeItem);
    }
  });

  pauseButton.addEventListener("click", function () {
    if (isPaused) {
      isPaused = false;
      interval = setInterval(incrementCounter, 1000);
      pauseButton.textContent = "Pause";
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
    } else {
      isPaused = true;
      clearInterval(interval);
      pauseButton.textContent = "Resume";
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
    }
  });

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let commentInput = document.getElementById("comment-input");
    let comment = document.createElement("p");
    comment.textContent = commentInput.value;
    commentList.appendChild(comment);
    commentInput.value = "";
  });
});
