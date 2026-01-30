document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================


// Dữ liệu câu hỏi 14
const question14Data_1 = {
  audioUrl: "audio/question14/audio_q1.mp3",  // Đường dẫn audio
  topic: "Topic: Protect the environment",                  
  options: [
    "Does not use commercial cleaning products",
    "Give away used items",
    "Buy environmentally friendly products",
    "Reuse containers for storing food",
    "Plant trees in the backyard",
    "Use solar panels for electricity"
  ],
  transcript: `Person A: I find the act of giving away old or secondhand items a bit hypocritical. Why do people give away their old things, only to go out and buy the same item but brand new? Not only does this fail to protect the environment, but it also causes double the harm. Personally, I have a way of protecting the environment by not releasing harmful chemicals into it. I do this by not purchasing chemical cleaning solutions. Instead, I make use of natural products like lemons to create my own floor-cleaning solutions.

Person B: I often don\'t have time to think about how to reuse my belongings or clothes, but I don\'t want to throw them away because that would be wasteful. So, I think a better way is to donate them to charity organizations or give them to others. Many people are in need of these things, and giving away my old items also makes me feel happier because I\'m helping others.

Person C: A good way to protect the environment is by not using plastic bags or by bringing reusable bags when going to the market, which helps reduce the disposal of plastic bags, a material that is difficult to decompose. However, I\'m a very busy person and rarely have time to prepare my own bags when going shopping, and I usually drive to buy groceries quickly instead of walking. I guess I can\'t protect the environment by not driving. But I have a principle of only buying eco-friendly products, so I think I’m still contributing in a small way to protecting the Earth.

Person D: I see that too many people are wasting food containers, as they often throw them away after use, such as glass jars or plastic bottles. I can reuse them to store food and neatly organize them in my refrigerator. Reusing these containers is a very easy way to protect the environment that anyone can do.`
};


// Dữ liệu câu hỏi 14
const question14Data_2 = {
  audioUrl: "audio/question14/audio_de2.mp3",  // Đường dẫn audio
  topic: "Topic: Protect the environment",                  
  options: [
    "Shopping online",
    "Not driving to work",
    "Using less electricity",
    "Using less water",
    "Buying imported goods",
    "Wasting more energy"
  ],
  transcript: `A: I usually shop online to reduce the need to drive to the supermarket, which produces harmful emissions for the environment. Additionally, I can avoid using plastic bags for groceries when shopping in person. By simply sitting at home and clicking a few buttons, I can buy everything I want without emitting harmful gases from a car.

B: I used to drive to work for a long period, but then I realized that the excessive use of personal cars contributes significantly to environmental pollution. Therefore, I chose to ride a bicycle to work, which benefits both the environment and my health.

C: I'm not that into environmental protection and usually just do what’s convenient for me. But my electric bill last month shocked me because it was so expensive, and I realized that I needed to save money. So from now on, I’ll have to manage my electricity use more efficiently.

D: I think a lot of people overemphasize protecting the environment by cutting down on personal vehicles, avoiding plastic bags, planting a lot of trees, and so on. But I personally believe we should focus on protecting the environment through small daily actions we often overlook. For example, turning off the water while brushing our teeth or washing our hands. If everyone saves a little water like that, it would add up to a huge amount saved globally.`
};

// Dữ liệu câu hỏi 14
const question14Data_3 = {
  audioUrl: "audio/question14/audio_de3.mp3",  // Đường dẫn audio
  topic: "Topic: Online shopping",                  
  options: [
    "The products are delivered",
    "It is cheaper",
    "It saves time",
    "There are more choices",
    "It increases efficiency",
    "It provides better customer service"
  ],
  transcript: `A: "I used to be the person who didn’t like shopping online, but ever since I experienced home delivery, I no longer shop in stores. When I shop online, the delivery person brings the package right to my door, even up to my floor, and knocks on my apartment door, so I don’t even need to step outside. I really enjoy this convenience."

B: "Shopping online has helped me save quite a bit of money. After a few months of online shopping, I was able to save enough to buy a new bicycle. But don't get me wrong, I haven't been eating any less or cutting back on the groceries I buy. It's just that online shopping allows me to compare prices and choose the store with the best deal."

C: "I’m a pretty busy person, and I often don’t have enough time because of my hectic work schedule. That’s why I always shop online to save time. This way, I don’t need to go to the store in person, and someone will deliver the items directly to me. Additionally, online shopping is very convenient because, with just a few clicks, I can buy everything I want without having to go from one store to another."

D: "I don't shop online because it's cheaper or because of the fast shipping. I shop online because, when browsing online stores, I have a wide range of choices. For the same item, there are many different types and brands for me to choose from and compare, which allows me to pick the one I like the most."`
};

// Dữ liệu câu hỏi 14
const question14Data_4 = {
  audioUrl: "audio/question14/audio_de4.mp3",  // Đường dẫn audio
  topic: "Topic: Listening to music",                  
  options: [
    "To relax",
    "After waking up",
    "While singing",
    "While studying",
    "to discuss ideas",
    "to complain"
  ],
  transcript: "A: \"I see a lot of people listen to music right when they wake up to help them feel alert. But if I listen to music as soon as I wake up, it gives me a headache all day and makes it hard for me to focus on anything. So, I just listen to music to relax when I’m feeling comfortable, not for any other reason.\"\n\nB: \"I usually listen to a pop or rock song as soon as I get out of bed in the morning because it helps me wake up instantly. If I don't listen to music at that moment, I don't know when I'll be able to get up and go to work.\"\n\nC: \"My brothers and friends often say that I have a beautiful voice, so I often sing when I meet them. I usually play music on the TV and hold the remote control, pretending it's a microphone so I can sing.\"\n\nD: \"I have a habit of listening to music while studying; it helps me stay motivated and alert while doing my assignments. If I don't play music, I could fall asleep at any moment, and I'll study in a discouraged mood.\""
};

// Dữ liệu câu hỏi 14
const question14Data_5 = {
  audioUrl: "audio/question14/audio_de5.mp3",  // Đường dẫn audio
  topic: "Topic: Outdoor activities",                  
  options: [
    "horse riding",
    "going for a run",
    "climbing",
    "mountain biking",
    "to discuss ideas",
    "to complain"
  ],
  transcript: "A: \"My hometown is in the countryside, and we have a very large and beautiful farm. I’ve been learning to ride horses since I was a child, and it’s still my hobby to this day. Whenever I want to relax or enjoy the scenery, I ride my horse along the farm and across the meadows.\"\n\nB: \"My husband and I often wake up early and go to a nearby forest for exercise. We usually go jogging in the early morning to stay healthy, and we really enjoy the fresh air and natural scenery in the forest.\"\n\nC: \"I used to love mountain biking, enjoying the thrill of riding down steep slopes. It was really an amazing and adventurous feeling. However, after an injury from a fall, I became haunted by the fear of crashing and now I'm scared of this sport. But I still love the mountains, so I’ve decided to just go hiking every weekend instead.\"\n\nD: \"My father often encourages me to ride horses because it’s a sport he enjoys. But I’m very afraid of this animal and never want to learn how to ride, even though there’s a riding school near my house. Instead, I prefer mountain biking with my friends to conquer high peaks.\""
};

// Dữ liệu câu hỏi 14
const question14Data_6 = {
  audioUrl: "audio/question14/audio_de6.mp3",  // Đường dẫn audio
  topic: "Topic: The place to run",                  
  options: [
    "in the fitness centre",
    "at the seaside",
    "in the street",
    "on the running track",
    "in the library",
    "at the supermarket"
  ],
  transcript: "A: \"My friends often invite me to go jogging on the street, but I find it too dangerous. There’s a lot of traffic, which can be dangerous for people jogging on the street. So, I bought a one-year gym membership and go there to exercise every day.\"\n\nB: \"I see many people wake up early to go jogging and exercise to stay healthy. As for me, I usually walk along the beach simply to relax because there’s a beautiful beach near my house. Every morning, I spend time walking on the white sand; it really helps a lot with my mental well-being.\"\n\nC: \"I usually wake up early in the morning to exercise, and I choose to jog on the street because of its convenience. I just need to step out of the house, and I can start exercising. However, I have to go jogging early to avoid cyclists. My friends go to the gym to exercise a lot, but I find something artificial about the whole thing.\"\n\nD: \"Near my house, there’s a stadium where many people go to exercise. I often run on the track there, and it makes me feel like I’m running more professionally. My personality is quite competitive, so I also time myself and race with my friends there.\""
};
// Dữ liệu câu hỏi 14
const question14Data_7 = {
  audioUrl: "audio/question14/audio_de7.mp3",  // Đường dẫn audio
  topic: "Topic: Do exercise",                  
  options: [
    "hate exercising",
    "help improve work performance",
    "find exercise tiring",
    "has fun when exercising with friends",
    "in the library",
    "at the supermarket"
  ],
  transcript: "A: \"My friends often advise me to exercise to maintain a good physique and health. However, I am very busy with a tight work schedule. Even if I weren’t busy, I still wouldn’t like to exercise. I feel uncomfortable as soon as I put on workout clothes. I don’t think exercise is something that suits me.\"\n\nB: \"I know that working out every day is good for my health and helps me get in shape. But what I've found is that exercising actually boosts my productivity a lot and really helps me focus better. So, I always try to squeeze in some exercise before heading to work—it definitely makes me more productive.\"\n\nC: \"We’ve all heard about the many benefits of exercising, and I know about them too. My friends often invite me to work out, but after I exercise, I end up feeling extremely exhausted and spend the rest of the day just lying around to recover.\"\n\nD: \"I often go to the gym to work out, but what really motivates me to workout is catching up with my friends there, not just for improving my health. Plus, it’s a great way to meet and make new friends. For me, exercising is just another chance to socialize.\""
};
// Dữ liệu câu hỏi 14
const question14Data_8 = {
  audioUrl: "audio/question14/audio_de8.mp3",  // Đường dẫn audio
  topic: "Topic: The internet",                  
  options: [
      "watch films",
      "communicate with friends",
      "complete assignments",
      "find transport information",
      "buy groceries online",
      "listen to the radio"
  ],
  transcript: "A: \"I am a big fan of newly released movies, but the cost of going to the cinema is too high. I'm just a student, so I can't afford to go to the cinema regularly to indulge in my hobby. Therefore, I think the internet is great because it allows me to watch movies for free at home. I save both the time of going to the cinema and a considerable amount of money.\"\n\nB: \"In today's digital age, the internet helps us access social media to stay constantly connected with friends. Especially since I have relatives mainly living abroad or in distant cities, the internet has been a great help for my family to stay in touch. We often video call each other to share daily stories.\"\n\nC: \"The internet is a great resource for research, finding materials, and useful information for studying. My friends and I often go to each other's houses to do homework together. Instead of spending hours trying to figure out how to do our homework, we quickly go online and find the answers.\"\n\nD: \"I see that people often use the internet to watch movies, read newspapers, quickly update the news, and so on. But I usually use the internet to find directions and public transport to my friends' and relatives' houses. I'm a forgetful person, and I often forget the way, even if I've been there a hundred times. So the internet helps me a lot in not getting lost and easily find nearby public transport.\""
};
// Dữ liệu câu hỏi 14
const question14Data_9 = {
  audioUrl: "audio/question14/audio_de9.mp3",  // Đường dẫn audio
  topic: "Topic: The Art",                  
  options: [
      "social activity",
      "with children",
      "as part of their job",
      "alone",
      "together",
      "stay at home"
  ],
  transcript: "A: \"I personally don't like and don't have a talent for fine arts, especially painting. But I see it as a great way to engage in social charity activities. I'm passionate about teaching children how to draw because I love kids. I'm also part of a volunteer organization that specializes in teaching art to poor children, which makes me very happy.\"\n\nB: \"I think drawing with my children is a great way to understand them better. No matter how busy my work is, I always make time to sit and draw with my kids. This helps us bond more and gives me the chance to talk with them more.\"\n\nC: \"I've loved literature, art, and drawing since I was a child. Now, I'm a writer and a comic book creator. In my stories, I occasionally include some illustrations to make the book more vivid and lively.\"\n\nD: \"I'm currently taking a drawing course and I really want to be serious about it. When practicing drawing, I prefer not to draw with friends, even though they often invite me to join them. I want to focus entirely on my work.\""
};
// Dữ liệu câu hỏi 14
const question14Data_10 = {
  audioUrl: "audio/question14/audio_de10.mp3",  // Đường dẫn audio
  topic: "Topic: Travel to work.",                  
  options: [
    "travel by bus",
    "travel by car",
    "walk alone",
    "walk with a friend",
    "take a taxi",       
    "ride a bicycle"     
  ],
  transcript: "A: \"I'm concerned about the Earth and the environment, so I always look for ways to use public transportation, like buses or trains, to reduce harmful emissions. I can't walk to work because it's too far from my home, but I always walk to the local market when I need to buy groceries.\"\n\nB: \"I had to take driving lessons to be able to drive to work. My mother works along the same route, so we often drive to work together. Occasionally, she takes over the driving, and I'm happy because driving together gives us more time to chat.\"\n\nC: \"I used to use my car a lot to get to work. But since I moved closer to the company, I always go there on foot. I have a friend who cycles for 20 minutes every day to work—can you imagine? She must be super fit!\"\n\nD: \"I often choose to walk to work to save on gas money and to keep in shape. I usually walk to the company with a close friend. Sometimes we feel really tired but still push ourselves to walk all the way. There are times when we see a bus stop and have to resist the urge to hop on the bus.\""
};

// Dữ liệu câu hỏi 14
const question14Data_11 = {
  audioUrl: "audio/question14/audio_de11.mp3",  // Đường dẫn audio
  topic: "Topic: Studying.",                  
  options: [
    "In various places",
    "In a quiet place",
    "With music",
    "Late at night",
    "With background noise",   
    "Early in the morning"     
  ],
  transcript: "A: \"I can study in different places, like coffee shops, libraries, or parks. For me, the location isn't that important because I have good concentration skills.\"\n\nB: \"I can't study in very noisy places because I can't focus on my homework. If I study in a café, I end up not getting anything done. So, I usually study in places such as my room in my house or in my office.\"\n\nC: \"I prefer listening to music while studying. I usually play motivational songs to help keep me alert, especially when studying in the morning. Music is like a cup of coffee, keeping me awake and motivated in my studies.\"\n\nD: \"I often can't focus on studying during the day; I feel tired and sleepy when I have to wake up early and study. So, I usually study at night when everyone in the house is asleep. The quiet atmosphere at night allows me to focus the best and be the most productive.\""
};
// Dữ liệu câu hỏi 14
const question14Data_12 = {
  audioUrl: "audio/question14/audio_de12.mp3",  // Đường dẫn audio
  topic: "Topic: Studying (phiên bản 2).",                  
  options: [
    "In the coffee shop",
    "In the park",
    "On public transport",
    "At home",
  "In a shared workspace",      
  "While traveling abroad"      
  ],
  transcript: "A: \"I don't like studying in very quiet places such as at home or in the library because I get sleepy easily and might even fall asleep while studying. There's a coffee shop near my house, and I often go there to study because the presence of other people makes me feel more motivated. I find that I achieve higher productivity and efficiency in my studies when I'm there.\"\n\nB: \"I notice that most people prefer doing their homework in the classroom, but for me, those chairs are way too hard and leave me sore all day. I prefer sitting under the trees in the park to study—it's cool, and the air is fresh. There's a famous coffee shop across from where I sit, and they serve really good coffee.\"\n\nC: \"The distance from my house to school is 20 km, and it usually takes me an hour to get there. So, when I'm on the train, I use the time to do homework and review the lessons for the day. Some people say that studying like this can be distracting, but I find it very effective for me.\"\n\nD: \"I don't like studying in very crowded places because I can't focus well. I usually sit on the sofa in the living room to study. My parents often travel for work, so my house is very quiet.\""
};

const question14Data = [
  question14Data_1, question14Data_2, question14Data_3, question14Data_4, question14Data_5, 
  question14Data_6, question14Data_7, question14Data_8, question14Data_9, question14Data_10, 
  question14Data_11, question14Data_12
];


// ===============================================================================================================
// ////////////// CÂU HỎI 2 (14 of 17) ///////////////
// ===============================================================================================================
// 1. Hàm render
let correctAnswer14 = []; // ✅ Đáp án đúng 4 phần tử đầu tiên (dùng cho chấm điểm)

// ✅ Hàm render
let shuffledOptions14 = [];
function renderQuestion14(data) {
  document.getElementById("audioPlayer2").src = data.audioUrl;
  document.getElementById("question14_topic").innerText = data.topic;


  // Cập nhật nội dung của question2_id để thể hiện câu hỏi hiện tại
  const questionText_id = `Question ${currentIndex + 1} of ${question14Data.length}`;
  document.getElementById('question2_id').textContent = questionText_id;
  // Lưu lại 4 đáp án đúng đầu tiên
  correctAnswer14 = data.options.slice(0, 4);

  // Tạo mảng xáo trộn để render
  shuffledOptions14 = [...data.options].sort(() => Math.random() - 0.5);

  const selectIds = ["person1", "person2", "person3", "person4"];
  selectIds.forEach((id, index) => {
    const select = document.getElementById(id);
    select.innerHTML = `<option value="">-- Select an answer --</option>`;

    shuffledOptions14.forEach((opt, idx) => {
      const val = String.fromCharCode(65 + idx);
      const optionEl = document.createElement("option");
      optionEl.value = val;
      optionEl.innerText = opt;
      select.appendChild(optionEl);
    });

    // Nếu người dùng đã chọn đáp án → chọn lại
    const prevAnswer = userAnswers_question14[index];
    if (prevAnswer) {
      const selectedIndex = shuffledOptions14.indexOf(prevAnswer);
      select.selectedIndex = selectedIndex + 1; // vì index 0 là "-- Select an answer --"
    }
  });

  const audio = document.getElementById("audioPlayer2");
  const playBtn = document.getElementById("playButton2");
  const playIcon = document.getElementById("playIcon2");
  setupPlayButton(audio, playBtn, playIcon);

  const transcriptBox = document.getElementById("transcriptBox14");
  const transcriptContent = document.getElementById("transcriptContent14");
  transcriptContent.innerText = data.transcript;

  const showTranscriptButton = document.getElementById("showTranscriptButton14");
  transcriptBox.style.display = "none";
  showTranscriptButton.innerText = "Show paragraph";

  showTranscriptButton.removeEventListener("click", toggleTranscript14);
  showTranscriptButton.addEventListener("click", toggleTranscript14);
}


// 2. Hàm ẩn hiện
function toggleTranscript14() {
  const transcriptBox = document.getElementById("transcriptBox14");
  const showTranscriptButton = document.getElementById("showTranscriptButton14");

  if (transcriptBox.style.display === "none") {
    transcriptBox.style.display = "block";
    showTranscriptButton.innerText = "Hide paragraph";
  } else {
    transcriptBox.style.display = "none";
    showTranscriptButton.innerText = "Show paragraph";
  }
}
// ===============================================================================================================
// Đáp án câu 14 (với 4 phần tử đầu tiên của options trong question14Data)
// ===============================================================================================================

// Lắng nghe sự kiện khi người dùng chọn đáp án cho câu hỏi 14 (selectbox)
document.querySelectorAll('select[id^="person"]').forEach((select, index) => {
  select.addEventListener('change', function() {
    storeUserAnswerQuestion14(index, this.value); // Lưu đáp án người dùng cho câu hỏi 14
  });
});

// Hàm lưu đáp án câu 14 vào mảng userAnswers_question14
let userAnswers_question14 = [];

// Hàm lưu đáp án người dùng cho câu hỏi 14 vào mảng
function storeUserAnswerQuestion14(index, answerLetter) {
  const optionIndex = answerLetter.charCodeAt(0) - 65;
  const selectedAnswer = shuffledOptions14[optionIndex]; // ✅ Dùng mảng đã xáo trộn
  userAnswers_question14[index] = selectedAnswer;
}






// Giả sử đã có `correctAnswer14` và `userAnswers_question14` được định nghĩa ở nơi khác trong mã của bạn
function showResults_question14() {
  const comparisonBody14 = document.getElementById('comparisonTableBody');
  const totalScoreEl = document.getElementById('totalScore');
  const scoreClassificationEl = document.getElementById('scoreClassification');
  comparisonBody14.innerHTML = '';  // Xóa nội dung bảng cũ

  let score = 0;
  let html14 = '';

  // Giả sử correctAnswer14 là một mảng với các đáp án đúng
  correctAnswer14.forEach((correctOption, index) => {
    const userAnswer = userAnswers_question14[index] || 'Not answered';
    const isCorrect = userAnswer === correctOption;

    // Đặt màu sắc cho đáp án người dùng và đáp án đúng
    const userAnswerColor = isCorrect ? 'text-success' : 'text-danger';  // Màu xanh nếu đúng, đỏ nếu sai
    const correctAnswerColor = 'text-success';  // Đáp án đúng luôn màu xanh

    if (isCorrect) {
      score += 2; // Mỗi câu đúng 2 điểm
    }

    html14 += `
      <tr>
        <td class="${userAnswerColor}">${userAnswer}</td>
        <td class="${correctAnswerColor}">${correctOption}</td>
      </tr>
    `;
  });

  comparisonBody14.innerHTML = html14;  // Hiển thị kết quả vào bảng
  totalScoreEl.innerText = `Score: ${score} / 8`;  // Hiển thị tổng điểm
  question14Score = score;

  // Phân loại điểm
  let classification = '';
  if (score >= 8) {
    classification = 'Excellent';
  } else if (score >= 6) {
    classification = 'Good';
  } else if (score >= 4) {
    classification = 'Satisfactory';
  }
  else {
    classification = 'Needs Improvement';
  }

  scoreClassificationEl.innerText = `Classification: ${classification}`;  // Hiển thị phân loại điểm

  // Hiển thị modal
  const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
  resultModal.show();
}


// Gắn sự kiện click cho nút "Check result"
document.getElementById('checkResultButton').addEventListener('click', showResults_question14);







// ===============================================================================================================
// ////////////// NÚT NHẤN NEXT VÀ BACK ///////////////
// ===============================================================================================================
let currentIndex = 0;
let userAnswers = [];  // Mảng lưu trữ các đáp án người dùng

function renderQuestionByIndex(currentIndex) {
  // Kiểm tra nếu currentIndex còn trong phạm vi của question14Data
  if (currentIndex <= question14Data.length - 1) {
    renderQuestion14(question14Data[currentIndex]);
  }
  
  // Thay đổi text của nextButton khi đến câu hỏi cuối cùng
  if (currentIndex === question14Data.length - 1) {
    document.getElementById('nextButton').textContent = "The end"; 
  }
}





// ===== XỬ LÝ NÚT NEXT =====
document.getElementById('nextButton').addEventListener('click', function (e) {
  userAnswers_question14 = [];
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

  if (currentIndex < question14Data.length - 1) {
    currentIndex++;
    renderQuestionByIndex(currentIndex);
  }
});

// ===== XỬ LÝ NÚT BACK =====
document.getElementById('backButton').addEventListener('click', function () {
  userAnswers_question14 = [];
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
    renderQuestion14(question14Data[0]);
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
