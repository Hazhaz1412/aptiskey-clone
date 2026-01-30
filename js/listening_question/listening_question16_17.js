document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================
// Dữ liệu câu hỏi 16 & 17
const question16Data = [
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "A break from studying",
    questions: [
      {
        id: "16.1",
        question: "Why hasn't he gone to college?",
        options: [
          "He wasn't ready to start higher education",
          "He couldn't afford the tuition fees.",
          "He didn't get good enough grades"
        ]
      },
      {
        id: "16.2",
        question: "Why did he decide to travel for 2 years?",
        options: [
          "To gain life experience.",
          "To avoid studying.",
          "To travelling."
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "A book about a life of a scientist",
    questions: [
      {
        id: "17.1", 
        question: "Why do many readers find the book interesting?",
        options: [
          "It uses simple language to describe complex ideas.",
          "It relies heavily on technical vocabulary.",
          "It avoids explaining abstract concepts."
        ]
      },
      {
        id: "17.2", 
        question: "Why is the book so popular?",
        options: [
          "It is similar to the previous book about the scientist.",
          "It is too long.",
          "It is too difficult to understand."
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "The sport",
    questions: [
      {
        id: "16.1",
        question: "What is this person's opinion on sports?",
        options: [
          "They have a harmful effect",
          "They bring people together",
          "They improve concentration"
        ]
      },
      {
        id: "16.2",
        question: "What is the importance of sports for students?",
        options: [
          "It helps balance student's lives.",
          "It distracts students from studying.",
          "It is only useful for professional athletes."
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "Television series",
    questions: [
      {
        id: "17.1", 
        question: "Why is this series so popular?",
        options: [
          "It has the consistent quality throughout.",
          "It was only available for a short time.",
          "It features unknown actors."
        ]
      },
      {
        id: "17.2", 
        question: "What is the current series industry affected by?",
        options: [
          "Viewer habits influence the way that series are made.",
          "Series are no longer produced for online platforms.",
          "Actors now write most of the scripts themselves."
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "Advertising and sponsoring",
    questions: [
      {
        id: "16.1",
        question: "What is the importance of advertising?",
        options: [
          "It can help reach new customers",
          "It increases the product price",
          "It can build brand recognition"
        ]
      },
      {
        id: "16.2",
        question: "Why shouldn't we sponsor sports tournaments?",
        options: [
          "They can generate negative publicity for the sport",
          "They are too expensive",
          "They can create unfair competition"
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "Famous writers",
    questions: [
      {
        id: "17.1", 
        question: "What do these two famous writers have in common?",
        options: [
          "They both make references to each other in their work",
          "They both wrote in the same genre",
          "They both were born in the same country"
        ]
      },
      {
        id: "17.2", 
        question: "What is special about their works?",
        options: [
          "The meaning of their work is not always easily identified",
          "Their works are all based on real events",
          "They use simple language and structure"
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  }
  ,{
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "A regional development plan",
    questions: [
      {
        id: "16.1",
        question: "Why do residents oppose this plan?",
        options: [
          "It doesn't do enough to promote alternatives to driving",
          "It increases the number of public parks in the area",
          "It provides free public transportation for all residents"
        ]
      },
      {
        id: "16.2",
        question: "What difficulties is the city council having with this plan?",
        options: [
          "The plan is not making efficient use of existing land",
          "The plan has already exceeded its budget by a large margin",
          "There is too much public support, making it hard to manage expectations"
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "Life after university",
    questions: [
      {
        id: "17.1", 
        question: "What should students do when choosing a career?",
        options: [
          "Be flexible and open minded",
          "Choose the same career as their friends",
          "Focus only on the salary offered"
        ]
      },
      {
        id: "17.2", 
        question: "What should students pay attention to when applying for jobs these days?",
        options: [
          "They are becoming more competitive",
          "Most jobs no longer require any qualifications",
          "Companies prefer handwritten applications"
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "Security cameras",
    questions: [
      {
        id: "16.1",
        question: "How should people feel about cameras in the workplace?",
        options: [
          "Employees probably worry unnecessarily",
          "People should feel uneasy",
          "Cameras should be banned",
        ]
      },
      {
        id: "16.2",
        question: "How should people feel about cameras in general?",
        options: [
          "People should feel reassured",
          "Cameras invade personal space",
          "People should feel paranoid",
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "A new novel of a famous writer",
    questions: [
      {
        id: "17.1", 
        question: "What is special about his new novel?",
        options: [
          "It is quite different compared to his previous works",
          "It is shorter and easier to read",
          "It has been written in a different genre",
        ]
      },
      {
        id: "17.2", 
        question: "What is the speaker's opinion of this writer?",
        options: [
          "He should listen to the critics before writing next novel",
          "He is a brilliant but slow writer",
          "He needs to change his writing style",
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "A musician's life",
    questions: [
      {
        id: "16.1",
        question: "What will this musician do in the near future?",
        options: [
          "He will probably retire from singing",
          "He plans to release a new album",
          "He wants to collaborate with younger artists"
        ]
      },
      {
        id: "16.2",
        question: "What does the speaker think about his career in general?",
        options: [
          "He could have been more successful",
          "He regrets choosing his profession",
          "He believes he reached the peak too early"
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "A new guide",
    questions: [
      {
        id: "17.1", 
        question: "What is the advantage of this new guide?",
        options: [
          "It creates a sense of adventure",
          "It includes detailed hotel reviews",
          "It focuses mainly on luxury travel"
        ]
      },
      {
        id: "17.2", 
        question: "What is the limitation of this new guide?",
        options: [
          "It is only suitable for a particular generation",
          "It doesn’t cover popular tourist attractions",
          "It is too expensive for most travelers"
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "A research into happiness",
    questions: [
      {
        id: "16.1",
        question: "How has this research into happiness been responded to?",
        options: [
          "It has not been accurately reported by the media",
          "It has been completely ignored by the public",
          "It has led to immediate changes in government policy"
        ]
      },
      {
        id: "16.2",
        question: "What is the speaker's opinion on this research in general?",
        options: [
          "The research is unlikely to find a conclusive answer",
          "The research has already changed public attitudes",
          "The researchers are biased in their approach"
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "Criticism of the new novel",
    questions: [
      {
        id: "17.1", 
        question: "What attracts readers to this novel?",
        options: [
          "The characters were interesting",
          "The book includes detailed historical facts",
          "The chapters are very short and easy to read"
        ]
      },
      {
        id: "17.2", 
        question: "What is the speaker's opinion about this novel?",
        options: [
          "It will establish the author's popularity",
          "It needs major editing before publication",
          "It’s unlikely to appeal to international readers"
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "Writer's block",
    questions: [
      {
        id: "16.1",
        question: "What helps writers focus more on writing?",
        options: [
          "Create dedicated periods",
          "Work in noisy environments",
          "Rely entirely on inspiration"
        ]
      },
      {
        id: "16.2",
        question: "What is a common mistake writers make when generating ideas?",
        options: [
          "Refusing to seek the advice of other people",
          "Writing ideas only in digital format",
          "Spending too much time researching grammar rules"
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "Professionalism at work",
    questions: [
      {
        id: "17.1", 
        question: "How is professionalism demonstrated at work?",
        options: [
          "Maintain the positive attitude",
          "Always agree with your manager",
          "Avoid giving feedback to colleagues"
        ]
      },
      {
        id: "17.2", 
        question: "What is the public's view of current professionalism?",
        options: [
          "Change its definition",
          "Increase working hours",
          "Reduce opportunities for remote work"
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "Making plans",
    questions: [
      {
        id: "16.1",
        question: "How does creating each small plan help you?",
        options: [
          "They help you make decisions",
          "They increase your workload",
          "They delay overall progress"
        ]
      },
      {
        id: "16.2",
        question: "How does creating a plan help you in general?",
        options: [
      "It requires you to set yourself certain limits",
      "It removes all risks from the process",
      "It guarantees immediate success"
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "A promotion campaign for a product",
    questions: [
      {
        id: "17.1", 
        question: "What do people think about this promotion campaign?",
        options: [
      "It is making exaggerated claims",
      "It is being ignored completely",
      "It is too simple to be effective"
        ]
      },
      {
        id: "17.2", 
        question: "What does the speaker think about this campaign?",
        options: [
      "It costs too much to make to be profitable",
      "It is reaching the wrong audience",
      "It lacks creativity"
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "Script production",
    questions: [
      {
        id: "16.1",
        question: "What is the speaker's opinion on this script?",
        options: [
          "The characters' background are not adequately explored",
          "The dialogue is too complex for viewers",
          "The setting feels too unrealistic"
        ]
      },
      {
        id: "16.2",
        question: "How do industries impact script production?",
        options: [
      "The new industry demands have a negative influence.",
      "They provide more creative freedom to writers",
      "They increase audience engagement significantly"
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "A new restaurant",
    questions: [
      {
        id: "17.1", 
        question: "How is this restaurant reviewed by customers?",
        options: [
      "The standard of service wasn’t good",
      "The food was too exotic for locals",
      "The location is difficult to find"
        ]
      },
      {
        id: "17.2", 
        question: "What should this restaurant do?",
        options: [
      "They need to make the customers feel valued and welcome",
      "They should increase their prices for profit",
      "They need to focus only on online orders"
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "Work from home",
    questions: [
      {
        id: "16.1",
        question: "How does she feel about working from home?",
        options: [
      "It wasn't as good as she expected",
      "It gave her more free time than expected",
      "It helped her become more productive"
        ]
      },
      {
        id: "16.2",
        question: "What is her opinion on working from home in general?",
        options: [
      "It depends on your situation and personality",
      "It's better than working in an office for everyone",
      "It should be avoided whenever possible"
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "Managing financial spending",
    questions: [
      {
        id: "17.1", 
        question: "What should you do to better control your short-term spending?",
        options: [
      "Monitor your spending for a weekly plan",
      "Avoid all unnecessary purchases entirely",
      "Use only cash instead of cards"
        ]
      },
      {
        id: "17.2", 
        question: "What should you do to better control your long-term spending?",
        options: [
      "Seek advice from someone who have experience",
      "Stop spending on entertainment altogether",
      "Track every single expense daily"
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "The importance of sleep",
    questions: [
      {
        id: "16.1",
        question: "What is the way to have a good sleep according to the speaker?",
        options: [
      "Blocking out noise and light is key",
      "Drinking coffee before bed helps relax the mind",
      "Sleeping fewer hours increases deep sleep quality"
        ]
      },
      {
        id: "16.2",
        question: "What is the speaker's view on insomnia in general?",
        options: [
      "People can't always recognize the symptoms of tiredness",
      "Most people with insomnia actually sleep too much",
      "Insomnia is caused only by physical health problems"
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "A book about a life of a scientist",
    questions: [
      {
        id: "17.1", 
        question: "Why is the book so popular?",
        options: [
      "It uses simple language to describe complex ideas",
      "It was endorsed by a famous celebrity",
      "It contains many colorful illustrations"
        ]
      },
      {
        id: "17.2", 
        question: "What do people criticize about the book?",
        options: [
      "It is similar to the previous book about the scientist",
      "It is too short to be meaningful",
      "It focuses too much on entertainment rather than facts"
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question16/no_audio.mp3",
    topic: "Nutritionist",
    questions: [
      {
        id: "16.1",
        question: "When did she become a Nutritionist?",
        options: [
      "When she did a biology degree.",
      "After working in a hospital.",
      "When she worked at a healthcare center."
        ]
      },
      {
        id: "16.2",
        question: "When did she become famous?",
        options: [
      "After solving people's problems in a helpline.",
      "After appearing on a famous TV show.",
      "After inventing a new type of food."
        ],
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  },
  {
    audioUrl: "audio/question17/no_audio.mp3",  // Phần tử thứ hai
    topic: "Cycling expedition",
    questions: [
      {
        id: "17.1", 
        question: "What is the speaker's advice?",
        options: [
      "Be well informed of the places you are going to visit.",
      "Always carry extra water and food supplies.",
      "Avoid cycling on rough terrain."
        ]
      },
      {
        id: "17.2", 
        question: "What is the speaker's advice in general?",
        options: [
      "Knowing the people and cultures in the different countries.",
      "Only visit places with good weather conditions.",
      "Cycle at your own pace without worrying about the destination."
        ]
      }
    ],
    transcript: "Bài văn này không có audio (học thuộc đáp án là được)." 
  }
];



// ===============================================================================================================
// ////////////// CÂU HỎI 16 ///////////////
// ===============================================================================================================



let userAnswers_question16 = {}; // Lưu đáp án người dùng
let correctAnswers_question16 = {};        // q.id → correct answer text
let shuffledOptionsMap_question16 = {};    // q.id → shuffled options array


function renderQuestion16(data) {
  // Gán audio và tiêu đề
  document.getElementById("audioPlayer16").src = data.audioUrl;
  document.getElementById("question16_topic").innerText = `Topic: ${data.topic}`;
  document.getElementById("transcriptContent16").innerText = data.transcript;


   const questionText_id = `Question ${currentIndex + 1} of ${question16Data.length}`;
    document.getElementById('question16_id').textContent = questionText_id;


  data.questions.forEach((q, index) => {
    const qIndex = index + 1;

    // Gán tiêu đề câu hỏi
    const labelEl = document.getElementById(`q16_opinion${qIndex}_label`);
    labelEl.innerText = `${q.id} ${q.question}`;

    // Lưu đáp án đúng (phần tử đầu tiên)
    correctAnswers_question16[q.id] = q.options[0];

    // Xáo trộn phương án
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptionsMap_question16[q.id] = shuffled;

    shuffled.forEach((text, optIndex) => {
      const letter = String.fromCharCode(65 + optIndex); // A, B, C
      const radio = document.getElementById(`opinion${qIndex}_${letter}`);
      const label = document.querySelector(`label[for=opinion${qIndex}_${letter}]`);

      if (radio && label) {
        label.innerText = text;
        radio.checked = false;

        // // Nếu đã chọn trước đó, hiển thị lại
        // if (userAnswers_question16[q.id] === letter) {
        //   radio.checked = true;
        // }

        // Lưu đáp án được chọn (A/B/C)
        radio.onchange = () => {
          userAnswers_question16[q.id] = letter;
        };
      }
    });
  });

  // 👉 Thêm đoạn này
  const audio = document.getElementById("audioPlayer16");
  const playBtn = document.getElementById("playButton16");
  const playIcon = document.getElementById("playIcon16");
  setupPlayButton(audio, playBtn, playIcon);

  // Ẩn/hiện transcript
  const btn = document.getElementById("showTranscriptButton16");
  const box = document.getElementById("transcriptBox16");
  btn.innerText = "Show Paragraph";
  box.style.display = "none";

  btn.onclick = () => {
    if (box.style.display === "none") {
      box.style.display = "block";
      btn.innerText = "Hide Paragraph";
    } else {
      box.style.display = "none";
      btn.innerText = "Show Paragraph";
    }
  };
}


function showResults_question16() {
  const tbody = document.getElementById("comparisonTableBody");
  const totalScoreEl = document.getElementById("totalScore");
  const scoreClassificationEl = document.getElementById("scoreClassification");
  tbody.innerHTML = ""; // Xóa các hàng cũ trong bảng kết quả

  let score = 0;

  // Kiểm tra xem currentIndex có hợp lệ không
  if (currentIndex < 0 || currentIndex >= question16Data.length) {
    console.error("Invalid currentIndex");
    return; // Nếu currentIndex không hợp lệ, dừng hàm
  }

  // Lấy phần tử tại currentIndex và duyệt qua các câu hỏi
  const currentData = question16Data[currentIndex];
  currentData.questions.forEach(q => {
    const qid = q.id;
    const correctText = correctAnswers_question16[qid];  // Đáp án đúng
    const shuffled = shuffledOptionsMap_question16[qid]; // Mảng đã xáo trộn các phương án
    const userLetter = userAnswers_question16[qid];       // Câu trả lời của người dùng (A/B/C)
    const userText = userLetter ? shuffled[userLetter.charCodeAt(0) - 65] : "Not answered"; // Đáp án người dùng chọn

    const isCorrect = userText === correctText; // Kiểm tra đáp án đúng
    if (isCorrect) score += 2; // Tính điểm

    // Tạo một dòng mới trong bảng kết quả
    const row = document.createElement("tr");
    const userClass = isCorrect ? "text-success fw-bold" : "text-danger fw-bold";

    row.innerHTML = `
      <td class="${userClass}">${userText}</td>
      <td class="text-success fw-bold">${correctText}</td>
    `;
    tbody.appendChild(row);
  });

  // Hiển thị điểm tổng
  totalScoreEl.innerText = `Score: ${score} / 4`;

  // Phân loại điểm
  if (score === 4) {
    scoreClassificationEl.innerText = "Excellent";
  } else if (score >= 2) {
    scoreClassificationEl.innerText = "Good";
  } else {
    scoreClassificationEl.innerText = "Needs Improvement";
  }

  // Hiển thị modal với kết quả
  const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
  resultModal.show();
}



// Xử lý sự kiện khi nhấn nút "Check result"
const checkResultButton = document.getElementById('checkResultButton');
checkResultButton.addEventListener('click', showResults_question16);


// ===============================================================================================================
// ////////////// NÚT NHẤN NEXT VÀ BACK ///////////////
// ===============================================================================================================
let currentIndex = 0;
function renderQuestionByIndex(currentIndex) {
  if (currentIndex <= question16Data.length - 1) {
    renderQuestion16(question16Data[currentIndex]);
  }
  if (currentIndex === question16Data.length - 1) {
    document.getElementById('nextButton').textContent = "The end"; 
  }
}


// ===== XỬ LÝ NÚT NEXT =====
document.getElementById('nextButton').addEventListener('click', function (e) {
  // 🔁 Reset tất cả audio và icon play
  document.querySelectorAll('audio').forEach(audio => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  document.querySelectorAll('i[id^="playIcon"]').forEach(icon => {
    icon.classList.remove("bi-pause-fill");
    icon.classList.add("bi-play-fill");
  });


  if (currentIndex < question16Data.length-1) {
    currentIndex++;
    renderQuestionByIndex(currentIndex);
  }
});

// ===== XỬ LÝ NÚT BACK =====
document.getElementById('backButton').addEventListener('click', function () {
  // 🔁 Reset tất cả audio và icon play
  document.querySelectorAll('audio').forEach(audio => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  document.querySelectorAll('i[id^="playIcon"]').forEach(icon => {
    icon.classList.remove("bi-pause-fill");
    icon.classList.add("bi-play-fill");
  });

  document.getElementById('nextButton').textContent = "Next";

  if (currentIndex > 0) {
    currentIndex--;
  }

  renderQuestionByIndex(currentIndex);
});


// 1. Hiển thị câu hỏi khi trang được load
window.onload = function() {
    renderQuestionByIndex(0);
};










// ===============================================================================================================
// ////////////// ĐẾM NGƯỢC THỜI GIAN --- COUNT DOWN ///////////////
// ===============================================================================================================
// Countdown Timer
let timeLeft = 40 * 60; // 35 minutes in seconds
const countdownElement = document.getElementById('countdownTimer');

function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();


// 3. Hàm load âm thanh
function setupPlayButton(audio, playBtn, playIcon) {
  if (playBtn.dataset.bound === "true") return;
  playBtn.dataset.bound = "true"; 

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => {
        playIcon.classList.remove("bi-play-fill");
        playIcon.classList.add("bi-pause-fill");
      }).catch(err => console.error("Không phát được:", err));
    } else {
      audio.pause();
      playIcon.classList.remove("bi-pause-fill");
      playIcon.classList.add("bi-play-fill");
    }
  });

  audio.addEventListener("ended", () => {
    playIcon.classList.remove("bi-pause-fill");
    playIcon.classList.add("bi-play-fill");
  });
}
// Kết thúc
});
