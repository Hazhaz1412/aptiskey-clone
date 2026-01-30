document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================

// Đề mới tháng 9/2025
const question2Content_1 = [
    'Old movies were very different from today\'s movies.',
    'That\'s because the movies were only in black and white, and sometimes without sound.',
    'Not only did these technological limitations exist, the movies were also low budget.',
    'Due to the lack of money, actors also had few opportunities to earn money through acting.',
    'Now things have changed, actors and filmmakers can earn thousands of dollars from film production.'
];
// Đề mới tháng 9/2025
const question2Content_2 = [
    'It was held on Saturday morning, there was a 10 km race for adults.',
    'There were 60 participants, in which Ms. Kamus kept the fastest speed and won.',
    'After she received the prize, the following time was for children\'s activities.',
    'Activities including football, swimming, skipping rope, and the children played together very happily.',
    'After playing, the children were very hungry and ate with their parents.'
];
// Đề mới tháng 9/2025
const question2Content_3 = [
    'He is a famous singer who is loved by many fans.',
    'At the age of fifteen, he studied music at a special school.',
    'Before becoming famous, he had to practice very hard every day.',
    'With his unique style and clothes, he soon attracted attention.',
    'Thanks to his talent and personality, he became well-known to a large audience.',
];
// Đề mới tháng 9/2025
const question2Content_4 = [
    'It took place on Sunday morning in the park, there was a race for adults.',
    'Sixty people took part, and among them, Ms Kamus kept the fastest pace and won the race.',
    "After she got her prize, the next part was for children's activities.",
    'The activities were football, swimming, skipping, and more, and the kids had fun playing together.',
    'After the games, the kids were really hungry and ate with their parents.',
];
// Đề mới tháng 9/2025
const question2Content_5 = [
    'Before writing about a place, you need to do some research on it.',
    'It is important to learn about the people and the history there carefully.',
    'Even if you can not visit the place, your writing will still look similar to real experiences.',
    'You should also compare that place with your own country.',
    'Such comparisons will make your writing more interesting and meaningful.',
];
// Đề mới tháng 9/2025
const question2Content_6 = [
    'Movies today are very different from movies in the past',
    'In the old days, films were only in black and white, and sometimes even without sound.',
    'In addition to these technological limits, producers had very low budgets.',
    'Because of the lack of money, actors also earn little money from acting.',
    'Nowadays, everything has changed: actors and producers can earn a lot of money from producing films.',
];
// Đề mới tháng 9/2025 -- thêm ngày 12/9
const question2Content_7 = [
    'In the past, transportation was primarily accessible to the wealthy.',
    'Later, air travel became popular among business professionals.',
    'Eventually, buses and trains were introduced as affordable alternatives.',
    'These made traveling more accessible to everyone.',
    'Today, buses and trains are among the most common transportation options.'
];
// Đề mới tháng 9/2025 -- thêm ngày 12/9
const question2Content_8 = [
    'I arrived at the shop early in the morning, but it was crowded with people.',
    'A waiter assisted me in finding a table and handed me the menu.',
    'The menu was not as good as expected and quite pricey, so I decided to order a sandwich.',
    'The sandwich was both delicious and beautifully presented.',
    'I might return to try different types of drinks next time.'
];
// Đề mới tháng 9/2025 -- thêm ngày 12/9
const question2Content_9 = [
    'Over the past decade, artificial intelligence has revolutionized various industries.',
    'The early AI systems were limited to simple pattern recognition tasks.',
    'High computational costs previously hindered the development of AI.',
    'Nowadays, AI engineers build advanced models for complex tasks such as language translation.',
    'Modern AI tools help businesses to analyze data and make better decisions.'
];
// Đề mới tháng 9/2025 -- thêm ngày 12/9
const question2Content_10 = [
    'This month, the wellness day took place on Friday, focusing on work-life balance.',
    'More than 50 (con số bất kỳ) employees participated, with Mr.A (tên người) leading a workshop on stress relief.',
    'Activities included team yoga, time management seminars, and a group walk.',
    'After the workshops, awards were given for the most creative wellness ideas.',
    'Employees enjoyed healthy snacks and exchanged tips for managing stress.'
];


// Updated September 2025 -- added on September 12th
const question2Content_11 = [
    'Flexible work models are becoming more common in modern workplaces.',
    'Previously, employees were confined to rigid nine-to-five work hours.',
    'Technological restrictions once made remote work a challenge.',
    
    'Managers now utilize software to monitor project progress remotely.',
    'Today, businesses are exploring shorter workweeks to boost productivity.',
];

// Updated September 2025 -- added on September 12th
const question2Content_12 = [
    'The event was fully planned, financed, and supported by local authorities.',
    'As a result, entry was free, and around five thousand people attended.',
    'Many attendees arrived early and browsed local shops before the event began.',
    'Despite the busy day, workers finished ahead of schedule and watched the famous singer perform.',
    'The two-hour performance thrilled the audience, leaving everyone in high spirits.'
];

// Updated September 2025 -- added on September 21th
const question2Content_13 = [
    'Mae’s father worked as a nurse, and her mother was a teacher.',
    'Her parents motivated Mae to pursue higher education and focus on scientific studies.',
    'Mae worked diligently and achieved several remarkable milestones.',
    'She later joined a team, contributing her skills and knowledge.',
    'Eventually, she had the opportunity to undergo a training program in the United States.'
];
// Updated September 2025 -- added on September 21th
const question2Content_14 = [
    'The Internet of Things (IoT) links everyday devices to improve their capabilities.',
    'Early IoT devices faced limitations due to slow internet speeds and compatibility challenges.',
    'High development costs previously slowed the widespread adoption of IoT technology.',
    'Nowadays, engineers create smart devices for both residential and industrial applications.',
    'Modern IoT systems provide real-time data tracking and automation features.'
];

// Updated September 2025 -- added on September 21st
const question2Content_15 = [
    'I decided to try a new café located at the end of the street.',
    'The place was quite busy, with a lively atmosphere.',
    'Even so, a staff member quickly noticed me and brought over the menu.',
    'I was a bit surprised to see that there were only a few items to choose from.',
    'In the end, I went for the most expensive salad on the menu.'
];
// Updated September 2025 -- added on September 21st
const question2Content_16 = [
    'First, we prepared the materials for our group presentation.',
    'Then, we presented our topic for 10 minutes.',
    'Throughout the presentation, we used images to explain our ideas.',
    'After the presentation, other students asked questions.',
    'Finally, each group member took turns answering the questions.'
];

// Đề mới tháng 10 - Cập nhật 11/10/2025
const question2Content_17 = [
    "In the past, most workers followed fixed schedules from nine to five.",
    "Because technology was limited, working from home was almost impossible.",
    "Modern offices are now moving toward more flexible ways of working.",
    "Managers now use digital tools to follow project progress remotely.",
    "Many companies today are trying shorter workweeks to increase efficiency."
];

const question2Content_18 = [
    "Encouraged by her parents, she decided to study science at university.",
    "Her strong academic record earned her a place in a training program in the United States.",
    "Her passion for space led Mae to join a dedicated research team.",
    "As a member of the team, she traveled into space and carried out numerous experiments.",
    "Some of these experiments involved growing plants and observing animals aboard the spacecraft."
];

const question2Content_19 = [
    "In the past, slow internet speeds made streaming or uploading videos difficult.",
    "Early platforms offered only basic features like text posts and simple images.",
    "Over time, social media platforms have greatly evolved in both design and functionality.",
    "Today’s platforms use complex algorithms to personalize and shape each user’s feed.",
    "Many influencers now earn income primarily through brand sponsorships and online ads."
];

const question2Content_20 = [
    "Before the open day, please contact us by phone or email so we can record your personal details.",
    "Using this information, we’ll prepare an identification card for you to collect upon arrival.",
    "You’ll need to show this card to enter the introductory talk and morning lectures.",
    "Every visitor will have the chance to join a Q&A session with current students.",
    "After the presentations, you’ll be able to explore different departments across the campus."
];

const question2Content_21 = [
    "Over the past decade, artificial intelligence has reshaped industries around the world.",
    "Early AI systems were capable of handling only simple pattern recognition tasks.",
    "In the past, high computational costs slowed down the progress of AI development.",
    "Today, AI engineers design sophisticated models for applications such as language translation.",
    "Modern AI tools enable businesses to analyze vast amounts of data and make smarter decisions."
];
const question2Content_22 = [
    "In the past, many meals were high in sugar and unhealthy fats.",
    "Years ago, limited access to fresh produce made healthy eating more difficult.",
    "Modern diets now focus on fresh, whole foods instead of processed ones.",
    "Nutritionists today teach people how to plan balanced and nutritious meals.",
    "Nowadays, mobile apps help users track calories and discover healthy recipes."
];

const question2Content_23 = [
    "The wellness fair took place on Saturday afternoon, encouraging people to adopt healthier lifestyles.",
    "More than 60 (con số bất kỳ) participants joined the event, with Dr. A (tên người) leading an engaging fitness workshop.",
    "The fair also included activities like cooking demonstrations, mindfulness sessions, and a fun run.",
    "After the workshops, prizes were awarded to participants who created the most creative health posters.",
    "Families enjoyed tasting healthy snacks and discovering practical tips for better overall wellness."
];

const question2Content_24 = [
    "He is a famous singer.",
    "Before becoming famous, he studied music at school when he was 15.",
    "His unique way of dressing and performing made him stand out from others.",
    "This helped him receive many invitations for collaborations and performances.",
    "He eventually became famous among audiences around the world."
];

const question2Content_25 = [
    "He is a famous singer who is loved by many people.",
    "Before becoming famous, he studied music at school when he was 15 years old.",
    "He spent years practicing and improving his performance skills.",
    "His unique clothing style and stage presence made him stand out.",
    "Because of this, more and more people began to recognize and admire him."
];
const question2Content_26 = [
    "Before writing, it is important to research the place thoroughly.",
    "To prepare well, you should learn about the people and the history of the area.",
    "Sometimes you may not be able to visit the place, but you can still find similar information from other sources.",
    "Comparing that place with your own country can be very helpful.",
    "This comparison will help you gain a deeper understanding and write more effectively."
];
const question2Content_27 = [
    "The café was very crowded when the customer arrived.",
    "The staff helped them find a table and handed them a menu.",
    "The customer was surprised because the menu was different from what they had expected.",
    "They decided to order the most expensive item — a sandwich.",
    "The customer said the sandwich was delicious and that they would definitely come back again."
];
const question2Content_28 = [
    "It was my first time visiting a new local coffee shop.",
    "At first, I didn’t think it would be good, but I decided to give it a try.",
    "I looked at the menu and saw many different kinds of food and drinks.",
    "I chose one dish to try for myself.",
    "When I tasted it, I found it really delicious and knew I would come back again."
];

const question2Content_29 = [
    "The company offers flexible working hours to better support employees’ schedules.",
    "Her white desk stands out in the shared open office.",
    "She uses a planner to organize her tasks throughout the shorter workweek.",
    "At lunchtime, she enjoys a homemade sandwich prepared with fresh ingredients.",
    "In the evenings, they unwind by reading books on productivity and well-being."
];
const question2Content_30 = [
    "The cultural fair was held on Sunday, celebrating and showcasing local traditions.",
    "About 60 (con số bất kỳ) participants took part, with Ms.A (tên người) leading a traditional dance group.",
    "The event featured pottery workshops, folk music performances, and food tastings.",
    "Families enjoyed taking photos and sharing delicious local dishes together.",
    "At the end of the event, prizes were given to participants with the best costumes."
];
const question2Content_31 = [
    "In the past, many cities had fewer bus routes because of budget limitations.",
    "Older buses often didn’t have air conditioning or comfortable seating.",
    "City buses today are much more efficient than those from ten years ago.",
    "Drivers and staff now receive better training to provide improved passenger service.",
    "Modern buses often use electric power, helping to reduce pollution in urban areas."
];

const question2Content_32 = [
    "Modern tourism now provides far more choices than in the past.",
    "In earlier times, travelers mostly depended on guidebooks and paper maps.",
    "Back then, limited technology also meant that booking options were quite restricted.",
    "Today, online platforms allow people to plan thoroughly and book their trips with ease.",
    "Moreover, local guides now offer personalized tours that give visitors more authentic experiences."
];
const question2Content_33 = [
    "When I arrived, the place was very crowded, and the staff were extremely busy on the first day.",
    "Even though it was crowded, the staff still managed to find a table for me.",
    "They handed me the menu, and when I looked through it, I saw quite a variety of dishes.",
    "After checking them all, I decided to order the most expensive sandwich.",
    "It tasted really good with melted cheese on top, and I’ll definitely come back to this place again."
];
const question2Content_34 = [
    "In the past, many meals were high in sugar and unhealthy fats.",
    "Years ago, limited access to fresh produce made healthy eating much more challenging.",
    "Modern diets now emphasize fresh, whole foods instead of processed ones.",
    "Nutritionists today teach people how to create balanced and nutritious meal plans.",
    "Nowadays, mobile apps help users track calories and discover healthy recipes to support better lifestyles."
];

const question2Content_35 = [
    "The tech fair took place on Saturday morning, showcasing a variety of exciting new gadgets.",
    "More than 60 (con số bất kỳ) exhibitors participated, with Mr. A (tên người) presenting an impressive robot demonstration.",
    "The event featured engaging activities such as VR gaming, coding workshops, and thrilling drone races.",
    "After the demonstrations, awards were given to the creators of the most innovative products.",
    "Visitors enjoyed complimentary coffee and snacks while exploring the interactive exhibits."
];

const question2Content_36 = [
    "Your end-of-term project should focus on at least two of the given topics.",
    "It must include relevant pictures along with your own written text about the subject.",
    "You will then use these pictures and your written work to create a class presentation.",
    "During the presentation, you should summarize your main points, and it should last about five minutes.",
    "Afterward, your classmates will have the opportunity to ask questions, and you will respond to them."
];

const question2Content_37 = [
    "Today will begin at 10 a.m. with a short presentation.",
    "At the end of the presentation, you will meet the heads of departments and lecturers.",
    "These staff members will take you on a tour of the school’s buildings and sports facilities in small groups.",
    "During this tour, you will need to stay with these students until lunchtime.",
    "This meal will be provided on the second floor of the engineering building."
];

const question2Content_38 = [
    "In the past, traveling was something only wealthy people could afford.",
    "The development of trains and cars made travel more convenient and affordable for the general public.",
    "Later on, airplanes also helped make traveling easier and more accessible.",
    "Because flying is very fast, it supports travel for both holidays and business purposes.",
    "Today, improvements in transportation make it easier to travel to many parts of the world."
];




// Mảng chứa các bộ câu hỏi
const questionSets = [
    question2Content_1, question2Content_2, question2Content_3, question2Content_4,
    question2Content_5, question2Content_6, question2Content_7, question2Content_8,
    question2Content_9, question2Content_10, question2Content_11, question2Content_12,
    question2Content_13, question2Content_14, question2Content_15, question2Content_16, 
    question2Content_17, question2Content_18, question2Content_19, question2Content_20,
    question2Content_21, question2Content_22, question2Content_23, question2Content_24,
    question2Content_25, question2Content_26, question2Content_27, question2Content_28,
    question2Content_29, question2Content_30, question2Content_31, question2Content_32,
    question2Content_33, question2Content_34, question2Content_35, question2Content_36, 
    question2Content_37, question2Content_38
];


const questheader1 = {
    question2Content_1: "Films",                    // Bộ đề 16
    question2Content_2: "Weekend activities",       // Bộ đề 18
    question2Content_3: "The famous singer",        // Bộ đề 18
    question2Content_4: "Family sports day",        // Bộ đề 19
    question2Content_5: "Writing about a place",    // Bộ đề 17
    question2Content_6: "Movies then and now",      // Bộ đề 17
    question2Content_7: "The history of transportation",  // Bộ đề 19
    question2Content_8: "New coffee shop",          // Bộ đề 16
    question2Content_9: "Artificial intelligence",  // Bộ đề 20
    question2Content_10: "Company wellness day",     // Bộ đề 20
    question2Content_11: "Workplace evolution",      // Bộ đề 21  
    question2Content_12: "Music show at the park",   // Bộ đề 21  
    question2Content_13: "Mae - The Math Girl",     // Bộ đề 22
    question2Content_14: "IoT - Internet of Things ", // Bộ đề 22
    question2Content_15: "Eating at restaurant",    // Bộ đề 23
    question2Content_16: "A group presentation",    // Bộ đề 23
    question2Content_17: "Workplace evolution (phiên bản 2)", 
    question2Content_18: "The first american woman in space",  // Bộ đề 24
    question2Content_19: "Social Media",                    // Bộ đề 24
    question2Content_20: "University open day",              // Bộ đề 25
    question2Content_21: "AI - Artificial Intelligence",     // Bộ đề 25
    question2Content_22: "Healthy Eating", 
    question2Content_23: "Wellness Fair", 
    question2Content_24: "The famous singer (phiên bản 2)", 
    question2Content_25: "The famous singer (phiên bản 3)",     
    question2Content_26: "Writing about a place (phiên bản 2)",   
    question2Content_27: "Busy coffee shop",
    question2Content_28: "My visit to a new coffee shop",
    question2Content_29: "Work",
    question2Content_30: "Cultural festival",
    question2Content_31: "Public Transportations",
    question2Content_32: "Tourism",
    question2Content_33: "New coffee shop (phiên bản 2)",        
    question2Content_34: "Healthy eating", 
    question2Content_35: "Tech fair", 
    question2Content_36: "End of term project",
    question2Content_37: "College Welcoming Day",
    question2Content_38: "The history of transportation (phiên bản 2)",  // thêm ngày 12/1
};


function getQuestHeaders(obj) {
    return Object.values(obj);
}

// Gọi hàm
const questheader = getQuestHeaders(questheader1);


// ===============================================================================================================
// ////////////// CÂU HỎI 2 ///////////////
// ===============================================================================================================

// Mảng lưu các câu trả lời đúng
var correctAnswersQuestion2 = [];

// Hàm trộn ngẫu nhiên (Fisher-Yates shuffle) để random các câu hỏi
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;  // Trả lại mảng đã xáo trộn
}

// Hàm render các câu hỏi vào trong các cards cho Question 2
function renderQuestion2(questionlist) {
    // Gán giá trị mới cho correctAnswersQuestion2 từ mảng questionlist
    //correctAnswersQuestion2 = questionlist.map(item => item.text);
    correctAnswersQuestion2 = [];
    questionlist.forEach(item => {
    correctAnswersQuestion2.push(item);
});

    // Xáo trộn mảng câu hỏi
    let shuffledQuestionlist = shuffleQuestions([...questionlist]);

    // Xóa các card cũ
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''; // Clear previous cards

    // Tạo và thêm các thẻ card mới
    shuffledQuestionlist.forEach((text, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'mb-2', 'draggable-item');
        cardDiv.setAttribute('draggable', 'true');
        cardDiv.id = `item${index + 1}`;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerText = text;

        cardDiv.appendChild(cardBody);
        cardsContainer.appendChild(cardDiv);
    });

    // Kích hoạt kéo thả bằng SortableJS
    initSortable();
    document.getElementById('html_questheader').textContent = `Reading Question 2 & 3 ( ${currentSetIndex + 1} / ${questheader.length} )`;
    document.getElementById('question2_topic').textContent = `Topic: ${questheader[currentSetIndex]}`;

}

// Hàm khởi tạo SortableJS cho các phần tử kéo thả
function initSortable() {
    const cardsContainer = document.getElementById('cardsContainer');

    // Khởi tạo Sortable cho cardsContainer
    new Sortable(cardsContainer, {
        group: 'shared',
        animation: 150,
    });
}

//-----------------------------------------------------------------------
// Mảng lưu đáp án của người học
const userAnswersQuestion2 = [];

// Lắng nghe sự kiện khi nhấn nút "Check result"
document.getElementById('checkResultButton').addEventListener('click', function() {
    // Lấy kết quả từ các card đã sắp xếp
    userAnswersQuestion2.length = 0; // Reset mảng userAnswers

    const cardsContainer = document.getElementById('cardsContainer');
    const cards = cardsContainer.querySelectorAll('.draggable-item');

    // Lặp qua các thẻ card và lấy câu trả lời của người học
    cards.forEach((card) => {
        const selectedAnswer = card.textContent.trim() || "(không chọn)";
        userAnswersQuestion2.push(selectedAnswer);
    });

    // So sánh kết quả người học với đáp án đúng
    const answers = [];
    const correctAnswers = [];

    correctAnswersQuestion2.forEach((correctAnswer, index) => {
        const selectedAnswer = userAnswersQuestion2[index] || "(không chọn)";  // Nếu không có lựa chọn, sử dụng "(không chọn)"
        answers.push(selectedAnswer);
        correctAnswers.push(correctAnswer);
    });

    // Hiển thị kết quả so sánh trong bảng
    question2Score = displayComparisonResultsQuestion2(answers, correctAnswers);

    // Mở modal kết quả sau khi tính điểm
    var resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
});

// Hiển thị đáp án đúng và so sánh
function displayComparisonResultsQuestion2(userAnswers, correctAnswers) {
    const comparisonBody = document.getElementById('comparisonTableBody');
    const totalScoreElement = document.getElementById('totalScore');
    
    comparisonBody.innerHTML = ''; // Clear previous results
    let score = 0; // Variable to keep track of the score

    // Loop through the user's answers and compare with correct answers
    userAnswers.forEach((userAnswer, index) => {
        const tr = document.createElement('tr');

        // User's answer cell
        const userAnswerTd = document.createElement('td');
        userAnswerTd.innerHTML = `<span class="${userAnswer === correctAnswers[index] ? 'correct' : 'incorrect'}">${userAnswer}</span>`;
        tr.appendChild(userAnswerTd);

        // Correct answer cell
        const correctAnswerTd = document.createElement('td');
        correctAnswerTd.innerHTML = `<span class="correct">${correctAnswers[index]}</span>`;
        tr.appendChild(correctAnswerTd);

        // If the user's answer is correct, increment score
        if (userAnswer === correctAnswers[index]) {
            score++;
        }

        comparisonBody.appendChild(tr);
    });

    // Display the score in the result section
    totalScoreElement.innerHTML = `<strong>Your score: ${score} / ${correctAnswers.length}</strong>`;

    // Return the score
    return score;
}






// 1. Hiển thị câu hỏi khi trang được load
window.onload = function() {
    renderQuestion2(question2Content_1);
};



let currentSetIndex = 0; // Biến để theo dõi bộ câu hỏi hiện tại

// Hàm để chuyển sang bộ câu hỏi tiếp theo
document.getElementById('nextButton').addEventListener('click', function() {
    if (currentSetIndex < questionSets.length - 1) {
        // Chuyển sang bộ câu hỏi tiếp theo
        currentSetIndex++;
        renderQuestion2(questionSets[currentSetIndex]);
        
        // Cập nhật tiêu đề với tiền tố "Question 2 & 3 - "
       // document.getElementById('html_questheader').textContent = `Question ${currentSetIndex + 1} / ${questheader.length} - ${questheader[currentSetIndex]}`;
        
        // Nếu đã đến bộ câu hỏi cuối, thay đổi nút Next thành "Đã hết câu hỏi"
        if (currentSetIndex === questionSets.length - 1) {
            document.getElementById('nextButton').textContent = "Đã hết câu hỏi";
        }
    }
});

// Hàm xử lý sự kiện khi nhấn nút Back
document.getElementById('backButton').addEventListener('click', function() {
    if (currentSetIndex > 0) {
        // Quay lại bộ câu hỏi trước
        currentSetIndex--;
        renderQuestion2(questionSets[currentSetIndex]);
        
        // Cập nhật tiêu đề với tiền tố "Question 2 & 3 - "
        //document.getElementById('html_questheader').textContent = `Question 2 & 3 - ${questheader[currentSetIndex]}`;
       // document.getElementById('html_questheader').textContent = `Question ${currentSetIndex + 1} / ${questheader.length} - ${questheader[currentSetIndex]}`;

        
        // Nếu không phải bộ câu hỏi cuối, đổi nút Next về "Next"
        if (currentSetIndex !== questionSets.length - 1) {
            document.getElementById('nextButton').textContent = "Next";
        }
    }
});








// ===============================================================================================================
// ////////////// ĐẾM NGƯỢC THỜI GIAN --- COUNT DOWN ///////////////
// ===============================================================================================================
// Countdown Timer
let timeLeft = 35 * 60; // 35 minutes in seconds
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


// Kết thúc
});
