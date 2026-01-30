document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================

// Dữ liệu câu hỏi 15
const question15Data_1 = {
  audioUrl: "audio/question15/audio_q1.mp3", // Đường dẫn đến file audio
  topic: "Topic: Changes in the workplace",
  transcript: `W: I'm thinking about switching to another job.
M: Why? Your current job is very stable.
W: I think I should try my hand at different fields. The jobs I take should only last around 1-2 years. I don't like staying too long in one job or with one company; that would be really boring. Nowadays, many companies offer temporary jobs, which allows me to try out different fields.
M: Oh, but if you stay longer at one company, they might offer you more opportunities for career advancement. I always want to stay long-term with a company that suits me.
W: Nowadays, young people who have just graduated from university are very talented and have many qualifications. I'm afraid that if I stick with one job and don't change to accumulate knowledge in various fields, it will be hard to compete with these young, talented people.
M: We also need to consider job satisfaction. If we do well, we need to be encouraged and motivated. That helps employees feel that their efforts and contributions to the company are worthwhile.
W: You're absolutely right, I couldn't agree more. In this age of technological advancement, many jobs have been replaced by machines. More and more people are losing their jobs due to the development of technology and engineering. I think this is a concerning issue.
M: I don't think so. Technology is helping us do our work more quickly, easily, and conveniently than ever. If we know how to leverage technology in our jobs, productivity will increase significantly, which in turn helps develop the economy and society.`,
  questions: [
    "1. Continuity is important when planning a career",
    "2. Job security cannot be guaranteed",
    "3. Job satisfaction is important for motivator",
    "4. Technological improvement is good for the economy"
  ],
  correctAnswer: ["Man", "Woman", "Both", "Man"] // Đáp án đúng của từng câu hỏi
};


// Dữ liệu câu hỏi 15
const question15Data_2 = {
  audioUrl: "audio/question15/audio_de2.mp3", // Đường dẫn đến file audio
  topic: "Topic: Beauty",
  transcript: `W: Hi, what are you reading?
M: I'm reading an article about the concept of beauty.
W: Oh really, that sounds interesting. Beauty is something that can't be defined because everyone has a different perspective on it, right?
M: Actually, people have quite similar perspectives on beauty. We always prefer beautiful things and are drawn to them.
W: Beauty in the past and now is very different. The older generation might see traditional things as beautiful, while the younger generation considers unique and unconventional things as beautiful. So, not everyone has the same view on beauty.
M: Beauty can be found in many places we wouldn't expect, or even within something considered ugly, there's always some beauty present. So, nothing in the world is entirely ugly.
W: Exactly. That's why the definition of beauty is constantly changing. In a few decades, people might find things beautiful that we once considered ugly.
M: That's one perspective. Let's wait and see how it changes.`,
  questions: [
    "1. People share the very similar ideas about beauty",
    "2. Views of beauty change over time",
    "3.  Beauty can be found in unlikely places",
    "4. Traditional ideas of beauty are going to change"
  ],
  correctAnswer: ["Man", "Woman", "Both", "Woman"] // Đáp án đúng của từng câu hỏi
};

// Dữ liệu câu hỏi 15
const question15Data_3 = {
  audioUrl: "audio/question15/audio_de3.mp3", // Đường dẫn đến file audio
  topic: "Topic: Actors (câu này nhiều phiên bản nên cứ chọn MWBB - Mẹ Win bừa bộn)",
  transcript: `W: What do you think about casting actors before casting them?

M: I think it's absolutely necessary and the most important thing because it determines whether the actor is suitable for the role or not.

W: I understand that auditions are important. But if we only rely on a 15 to 20 minute audition, that short period of time cannot really show us the actor's full potential.

M: That's a good point. So I think it's better to let actors perform freestyle, not relying on the script, so that they can improvise, thereby clearly showing their acting skills.

W: But actors often respond best to a good script. And they also need a script provided by the director and directed to act according to the script. Actors can’t always act freely.

M: What do you think about stage actors moving to film acting?

W: I think they are two completely different fields. When I was studying acting in college, stage acting and film acting were two completely separate subjects. They require different skills and qualities from the actor. So, it’s not easy to move from stage acting to film acting and vice versa.

M: That’s right. These are two very different forms of acting and they require different skills from the actor. However, as actors, I think we all need encouragement and support from the audience.

W: I completely agree. Actors need praise and feedback to feel recognized for their efforts and contributions.`,
  questions: [
    "1. Auditions are the most important of casting",
    "2. Actors respond best to a strong script",
    "3. Theatre acting and movie acting require different skills",
    "4. Actors need to be praised"
  ],
  correctAnswer: ["Man", "Woman", "Both", "Both"] // Đáp án đúng của từng câu hỏi
};


// Dữ liệu câu hỏi 15
const question15Data_4 = {
  audioUrl: "audio/question15/audio_de4.mp3", // Đường dẫn đến file audio
  topic: "Topic: Information and technology",
  transcript: "M: Hi, what have you been studying lately?\n\nW: Oh, I'm still studying technology and information systems—it's a really hot topic these days.\n\nM: That's a fascinating field. I still can't imagine the future of humanity alongside technology. I think within the next hundred years, humans won't be able to keep up with the pace of information technology development.\n\nW: I believe that the younger generation and future generations will become increasingly smarter, and they'll discover even more amazing things about information technology to benefit society.\n\nM: But if technology advances too quickly and becomes too sophisticated, won't that cause a lot of people to lose their jobs? Many industries could be replaced by machines and robots. In the future, machines might even be smarter than humans.\n\nW: I think machines are just there to support humans in their work; they can't replace us or be smarter than us. If machines and robots are involved in the work process, they will make our jobs less strenuous and improve efficiency. This, in turn, will drive continuous economic and social development alongside technological advancements.\n\nM: What about the issue of personal data breaches? We should have more policies to protect personal information and prevent machines from leaking important personal data.\n\nW: I agree with you. A major issue with information technology is the potential for data breaches. If we can improve this, it would be fantastic."
,
  questions: [
    "1. The future generation will fail to cope with new information",
    "2. The information revolution will be good for the economy",
    "3. No computer is superior to the human brain",
    "4. More should be done to protect individual privacy"
  ],
  correctAnswer: ["Man", "Woman", "Woman", "Both"] // Đáp án đúng của từng câu hỏi
};

// Dữ liệu câu hỏi 15
const question15Data_5 = {
  audioUrl: "audio/question15/audio_de5.mp3", // Đường dẫn đến file audio
  topic: "Topic: The Internet (câu này nhiều phiên bản nên cứ chọn BWBB - Bố Win bừa bộn)",
  transcript: "W: These days, there's so much information on the internet that I feel overwhelmed.\n\nM: That's true. A lot of people feel the same way, especially with the mix of real and fake information. Sometimes we end up reading fake news.\n\nW: That's why using the internet requires both knowledge and skills. Without good information-searching skills, we can waste a lot of time. There’s so much content uploaded to the internet every day, and we have to be cautious because it might not be accurate. As a result, people are gradually changing how they perceive the information they encounter online. It’s not like in the past when we read newspapers and believed everything was true.\n\nM: Additionally, the internet has made people much more impatient than before. They want everything to yield quick results. People are losing the ability to wait for outcomes like they used to.\n\nW: Exactly, because the internet allows us to find millions of results in less than a second. We're getting used to that, which is leading to a decline in patience and tolerance."
,
  questions: [
    "1. There is too much information on the internet",
    "2. Using internet requires skills",
    "3. The internet is changing the way we think",
    "4. Internet has made people less patient"
  ],
  correctAnswer: ["Both", "Woman", "Both", "Both"] // Đáp án đúng của từng câu hỏi
};
// Dữ liệu câu hỏi 15
const question15Data_6 = {
  audioUrl: "audio/question15/audio_de6.mp3", // Đường dẫn đến file audio
  topic: "Topic: The arts",
  transcript: "W: What magazine are you reading?\n\nM: I'm reading about art.\n\nW: That sounds interesting. I think art is only for the wealthy. Poor people don’t have the opportunity or time to enjoy art.\n\nM: Actually, art isn’t limited to any one group. If we have an interest, we can access art because it’s all around us.\n\nW: I wish that when I was a child and in school, I had more exposure to the arts. I'm really glad that now, when my child goes to school, they can have more exposure to the arts.\n\nM: Yes, that's great news. I hope that the authorities and the government will invest more in the arts and make them accessible to everyone, especially by adding more art classes in schools so that students can be exposed to art early on.\n\nW: I agree. Children should be introduced to the arts early so they can develop their own sense of beauty sooner.\n\nM: I think with the development of technology, where we just scroll a bit and see art videos and images flooding social media, art is becoming more accessible than ever.\n\nW: Really? Let's wait and see how it unfolds.."
,
  questions: [
    "1. Art is only suitable for the privileged few",
    "2. The government should invest more in arts",
    "3. Children should be exposed to art early",
    "4. In the future, art will become more accessible"
  ],
  correctAnswer: ["Woman", "Man", "Both", "Man"] // Đáp án đúng của từng câu hỏi
};
// Dữ liệu câu hỏi 15
const question15Data_7 = {
  audioUrl: "audio/question15/audio_de7.mp3", // Đường dẫn đến file audio
  topic: "Topic: The music",
  transcript: "M: Did you hear about the concert last night? A lot of young people attended.\n\nW: Yes, I know about that concert; it was very popular. I don’t understand why so many young people are so eager to attend. They're blindly idolizing young singers, and these idols don’t really teach them anything good.\n\nM: I see it differently. The young singers today are very talented, and they do a lot of charitable work for society. I think young people look up to them and follow their example.\n\nW: Yes, they volunteer a lot, but they do it for the wrong reasons. They only want to boost their own fame.\n\nM: Oh, I think you don't like young singers because you don't enjoy their music, right?\n\nW: Exactly, I only like listening to classical music from previous generations. I think music preferences are very personal and each generation has its own unique taste in music. But music is always a universal language that conveys emotions everyone can understand.\n\nM: I didn’t study music like you, so I don’t really have any ideas about this.\n\nW: You don’t need to study music to understand it. Just think about why you cry during a sad movie scene when the music plays or why you feel energized when you hear a happy song. Isn’t that right?\n\nM: Yes, I think that’s why films always try to include at least one piece of music.",
  questions: [
    "1. Singers play a good role for young people",
    "2. Taste in music is a highly personal thing",
    "3. Music is a universal language",
    "4. Music can manipulate people's feelings"
  ],
  correctAnswer: ["Man", "Both", "Woman", "Both"] // Đáp án đúng của từng câu hỏi
};
// Dữ liệu câu hỏi 15
const question15Data_8 = {
  audioUrl: "audio/question15/audio_de8.mp3", // Đường dẫn đến file audio
  topic: "Topic: University and technology",
  transcript: "M: What course are you taking these days?\n\nW: I'm currently pursuing an online university degree. It's really suitable and convenient because I can study while working. Technology has truly made education much more accessible.\n\nM: That's amazing. I still remember the old days when you had to stand in long lines to borrow a book from the library, which took a lot of time. And by the time it was your turn, the book was often already gone. Now, when we want to read a book, we just type the title online and have it immediately.\n\nW: Exactly, study materials were really scarce back then, unlike now.\n\nM: That’s why I’m thinking, why not make all school classes online? It would save a lot of costs.\n\nW: I think attending school in person is still very necessary because meeting friends and socializing helps us gain more soft skills.\n\nM: Don’t forget that young people do have a reputation for being less social. They often prefer talking on social media rather than meeting in person.\n\nW: Additionally, I think the variety of courses available nowadays is also a good way to improve education.\n\nM: I don't think so. Offering too many diverse courses can make traditional and core subjects seem less important and neglected.\n\nW: We should also consider competition among universities. It’s essential for universities to continuously improve their programs and attract more funding, especially with the current trend of universities seeking financial autonomy.\n\nM: I don’t think we should turn education into a race like competing businesses. If universities need funding, they can report it to the government and educational organizations.",
  questions: [
    "1. Technology helps make education more accessible",
    "2. Social interaction is important",
    "3. The diverse curriculum is not an advantage",
    "4. University competition should be encouraged"
  ],
  correctAnswer: ["Both", "Woman", "Man", "Woman"] // Đáp án đúng của từng câu hỏi
};
// Dữ liệu câu hỏi 15
const question15Data_9 = {
  audioUrl: "audio/question15/audio_de9.mp3", // Đường dẫn đến file audio
  topic: "Topic: The politics",
  transcript: "M: Have you heard about the upcoming presidential election? A lot of young people have already voted, which shows that they're becoming more interested in politics.\n\nW: Yes, it's very different from our time. When I was 18, I never paid attention to politics.\n\nM: The technology era now gives us so many ways to engage with politics. Politicians often post their political activities on social media much more than they did in the past.\n\nW: Actually, politicians still carry out traditional political activities too. They still hand out flyers and participate in volunteer work.\n\nM: The development of information technology also overwhelms us with information. There’s so much news online that we don't know what to read. This makes keeping up with political news much more challenging than before.\n\nW: I think that as technology advances, it becomes easier for us to stay updated on the news. Technology allows us to use advanced filters to easily sort out the news we need to know.\n\nM: There are also more women involved in politics now than before. It seems society has become more open to women.\n\nW: Exactly. Women have the same education and learning abilities as men. They even lead in many areas of life. In the future, more and more women will be participating in political activities."
,  questions: [
    "1. Young people are becoming more interested in politics",
    "2. Social media has changed political activism",
    "3. People are better informed political issues",
    "4. More women are likely to participate in politics"
  ],
  correctAnswer: ["Both", "Man", "Woman", "Both"] // Đáp án đúng của từng câu hỏi
};
// Dữ liệu câu hỏi 15
const question15Data_10 = {
  audioUrl: "audio/question15/audio_de10.mp3", // Đường dẫn đến file audio
  topic: "Topic: Urban farming",
  transcript: "M: The government is discussing adding more farming space to big cities. What do you think about this?\n\nW: I think it’s a bad idea. Cities are already too crowded, and people don’t even have enough land for housing. How can we take land for farming and raising livestock?\n\nM: We could use spaces like balconies or parks for farming. These farming areas would make the city more beautiful and a better place to live. Plus, it would benefit the local economy since the city could become more self-sufficient in food production without relying on imports from other regions.\n\nW: I agree that farming areas would make the landscape greener and more attractive. But adding farming space won’t significantly boost the local economy. Farmers have been transporting food into cities for a long time, and we’ve never had issues with food supply or shortages.\n\nM: You make a good point. With limited farming space, it wouldn’t be enough to meet the food demands of city residents. We would still rely on food supplies from suburban areas.\n\nW: Exactly. A few small farming spaces won’t fulfill the food demand, but they would take up a lot of valuable land that could be used for housing."
,  questions: [
    "1. Living space is more important than farming space",
    "2. Urban farming sites can be visually appealing",
    "3. Urban farming can benefit local economics",
    "4. Urban farming cannot meet food needs"
  ],
  correctAnswer: ["Woman", "Both", "Man", "Both"] // Đáp án đúng của từng câu hỏi
};
// Dữ liệu câu hỏi 15
const question15Data_11 = {
  audioUrl: "audio/question15/audio_de11.mp3", // Đường dẫn đến file audio
  topic: "Topic: Local festivals",
  transcript: "Man: Have you heard about the new local center opening next week? I think it will be a great place for exhibitions. But you know, I believe exhibitions should be different. They need to show new ideas, not just the same old things.\n\nWoman: I agree that exhibitions should be interesting, but I'm not sure they need to be completely different. Sometimes, it's nice to celebrate our traditions, even if they are losing significance.\n\nMan: Yes, that's true. But if we keep doing the same things, we might forget why those traditions are important. The more we change things, the more people will remember them!\n\nWoman: I see your point. However, I worry that the local festivals will disappear soon. If people don't care about them, they might stop celebrating altogether.\n\nMan: That's a good point, but I think we can make the festivals more exciting to attract people. We should include activities that everyone can enjoy, not just the same old customs.\n\nWoman: I understand that. But let's not forget how important schools are in keeping our traditions alive. They teach children about our culture and values. If schools don't focus on traditions, who will?\n\nMan: That's true! Schools play a big role. But maybe parents should be the ones in charge of this. Keeping traditions is everyone's responsibility, not just schools or the education system."
,  questions: [
    "1. Exhibitions should be different and diverse",
    "2. Traditional customs are gradually losing their significance",
    "3. Local festivals will disappear soon in the near future",
    "4. Schools are important to shaping future generations"
  ],
  correctAnswer: ["Man", "Both", "Woman", "Woman"] // Đáp án đúng của từng câu hỏi
};
// Dữ liệu câu hỏi 15
const question15Data_12 = {
  audioUrl: "audio/question15/audio_de12.mp3", // Đường dẫn đến file audio
  topic: "Topic: Community design",
  transcript: "Man: You know, I believe building design can shape people’s behaviors and interactions from the start. When spaces are designed well, people feel comfortable and naturally start connecting.\n\nWoman: Of course, design matters, but there’s no shortcut to building real community connections. Creating community takes time and consistency, even in spaces that encourage interaction.\n\nMan: Really? But I also feel that work communities and social communities aren’t as different as we might think. Both require spaces that help people feel connected and valued, whether it’s at work or in social settings.\n\nWoman: I’m not sure I agree with that. Work communities and social communities serve very different purposes. In a social community, people gather out of personal interest and shared hobbies, but in work communities, people connect because of their job roles. That can affect how close they feel and how they interact with one another.\n\nMan: I see your point, but even in work communities, people still find ways to connect on a personal level. A good work environment encourages friendships that might go beyond work topics.\n\nWoman: That’s a good point. And with technology, people can now connect for both work and social reasons, even if they’re not physically together. But I still think it’s important to build spaces where people can gather in person.\n\nMan: Yes, I agree, but I think technology has really changed how communities form. It makes connecting so much easier, and people don’t always need to meet face-to-face to feel a sense of community.\n\nWoman: I see that, but I don’t think online connections can fully replace in-person gatherings. There’s a different energy when people come together in real spaces—something technology just can’t replicate.\n\nMan: I understand, but I feel that virtual spaces can be just as meaningful. Technology adds a new layer, making it possible for communities to thrive even across distances, and that’s valuable in its own way."
,  questions: [
    "1. Building design can influence people's behavior.",
    "2. Creating community can take time",
    "3. Work communities and social communities are the same.",
    "4. Technology has changed how community forms."
  ],
  correctAnswer: ["Both", "Woman", "Man", "Both"] // Đáp án đúng của từng câu hỏi
};


const question15Data = [
  question15Data_1, question15Data_2, question15Data_3, question15Data_4, 
  question15Data_5, question15Data_6, question15Data_7, question15Data_8, 
  question15Data_9, question15Data_10, question15Data_11, question15Data_12
];


// ===============================================================================================================
// ////////////// CÂU HỎI 15 ///////////////
// ===============================================================================================================
// Mảng lưu đáp án người dùng cho câu hỏi 15
let userAnswers_question15 = [];



// Hàm lưu đáp án người dùng cho câu hỏi 15
function storeUserAnswerQuestion15(index, answer) {
  const options = ["Man", "Woman", "Both"]; // Các lựa chọn thực tế
  const selectedAnswer = options[answer.charCodeAt(0) - 65];  // Chuyển từ 'A' -> "man", 'B' -> "woman", 'C' -> "both"
  userAnswers_question15[index] = selectedAnswer; // Lưu đáp án vào mảng
}

// Hàm render câu hỏi 15
function renderQuestion15(data) {
  document.getElementById("audioPlayer3").src = data.audioUrl;
  document.getElementById("question15_id").innerText = data.topic;

   const questionText_id = `Question ${currentIndex + 1} of ${question15Data.length}`;
    document.getElementById('question2_id').textContent = questionText_id;

  data.questions.forEach((question, index) => {
    const label = document.getElementById("opinion" + (index + 1) + "_label");  // Dùng index để tạo id cho label
    const select = document.getElementById("opinion" + (index + 1));  // Dùng index để tạo id cho select

    if (label) {
      label.innerText = question;  // Gán nội dung question từ mảng vào label
    }

    if (select) {
      select.innerHTML = `<option value="">-- Select an answer --</option>`; // reset lại các lựa chọn
      const options = ["Man", "Woman", "Both"];
      options.forEach((opt, i) => {
        const val = String.fromCharCode(65 + i); // 'A', 'B', 'C'
        const optionEl = document.createElement("option");
        optionEl.value = val;
        optionEl.innerText = opt;
        select.appendChild(optionEl);
      });

      // Xóa phần này để không hiển thị đáp án đã chọn trước đó
      // Nếu bạn không muốn lưu đáp án đã chọn trước đó, không cần đoạn này:
      // if (userAnswers_question15[index]) {
      //   const selectedIndex = options.indexOf(userAnswers_question15[index]);
      //   select.value = String.fromCharCode(65 + selectedIndex); // Chọn lại giá trị đã lưu
      // }
    }
  });

  const audio = document.getElementById("audioPlayer3");
  const playBtn = document.getElementById("playButton3");
  const playIcon = document.getElementById("playIcon3");
  setupPlayButton(audio, playBtn, playIcon);

  const transcriptBox = document.getElementById("transcriptBox15");
  const transcriptContent = document.getElementById("transcriptContent15");
  transcriptContent.innerText = data.transcript;

  const showTranscriptButton = document.getElementById("showTranscriptButton15");

  transcriptBox.style.display = "none";
  showTranscriptButton.innerText = "Show paragraph";

  showTranscriptButton.removeEventListener("click", toggleTranscript15);
  showTranscriptButton.addEventListener("click", toggleTranscript15);
}


// Hàm ẩn hiện transcript
function toggleTranscript15() {
  const transcriptBox = document.getElementById("transcriptBox15");
  const showTranscriptButton = document.getElementById("showTranscriptButton15");

  if (transcriptBox.style.display === "none") {
    transcriptBox.style.display = "block";
    showTranscriptButton.innerText = "Hide paragraph";
  } else {
    transcriptBox.style.display = "none";
    showTranscriptButton.innerText = "Show paragraph";
  }
}

// Lắng nghe sự kiện khi người dùng chọn đáp án cho câu hỏi 15 (selectbox)
document.querySelectorAll('select[id^="opinion"]').forEach((select, index) => {
  select.addEventListener('change', function() {
    storeUserAnswerQuestion15(index, this.value); // Lưu đáp án người dùng cho câu hỏi 15
  });
});


// Hàm hiển thị kết quả cho câu hỏi 15
function showResults_question15() {
  const comparisonBody15 = document.getElementById('comparisonTableBody'); // Đã sửa lại ID cho modal
  const totalScoreEl = document.getElementById('totalScore'); // Đã sửa lại ID cho modal
  comparisonBody15.innerHTML = ''; // Xóa nội dung cũ

  const correctAnswer15 = question15Data[currentIndex].correctAnswer;
  let score = 0;
  let html15 = '';

  correctAnswer15.forEach((correctAns, index) => {
    const userAns = userAnswers_question15[index] || 'Not answered';
    const isCorrect = userAns === correctAns;
    const textColor = isCorrect ? 'text-success' : 'text-danger';

    if (isCorrect) {
      score += 2;
    }

    html15 += `
      <tr>
        <td class="${textColor} fw-bold">${userAns}</td>
        <td class="text-success fw-bold">${correctAns}</td>
      </tr>
    `;
  });

  comparisonBody15.innerHTML = html15; // Đưa dữ liệu vào bảng so sánh
  totalScoreEl.innerText = `Score: ${score} / 8`; // Hiển thị tổng điểm

  // Mở modal khi nhấn nút "Check result"
  const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
  resultModal.show();
}

// Gắn sự kiện cho nút "Check result"
document.getElementById('checkResultButton').addEventListener('click', showResults_question15);




// ===============================================================================================================
// ////////////// NÚT NHẤN NEXT VÀ BACK ///////////////
// ===============================================================================================================
let currentIndex = 0;
function renderQuestionByIndex(currentIndex) {
  if (currentIndex <= question15Data.length - 1) {
    renderQuestion15(question15Data[currentIndex]);
  }
  if (currentIndex === question15Data.length - 1) {
    document.getElementById('nextButton').textContent = "The end"; 
  }
}




// ===== XỬ LÝ NÚT NEXT =====
document.getElementById('nextButton').addEventListener('click', function (e) {
  userAnswers_question15 = [];
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
  if (currentIndex < question15Data.length - 1) {
    currentIndex++;
    renderQuestionByIndex(currentIndex);
  }
});

// ===== XỬ LÝ NÚT BACK =====
document.getElementById('backButton').addEventListener('click', function () {
  userAnswers_question15 = [];
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
