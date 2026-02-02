// Sample questions data
const questions = [{
    question: "Please tell me about your family?",
    answer1: "I'm so happy when I talk about my family. There are four people in my family: my father, my mother, my sister, and me. My parents are farmers, and they are very kind and friendly. My sister is a teacher, and she is very beautiful. I'm a doctor. I hope my family will be with me forever.",
    answer2: "I’m so happy when I can talk about my family. There are five people in my family: my parents, two younger sisters, and me. My parents are farmers. They are so nice and humorous. My sisters are students who study at secondary school. And I’m a senior at National Economics University. I love my family very much and like to spend time with them.",
}, {
    question: "Please tell me about yourself?",
    answer1: "Hi, thank you for your question. I’m really happy to tell you a bit about myself. My name is Nguyen Van A. I’m a teacher. My hobby is listening to music, I really like listening to music because it helps me relax and feel better after a long working day.",
    answer2: "I would like to introduce myself. My full name is Nguyen Hong Ngoc. I’m a senior at National Economics University. My major is Accounting. I’m very friendly and nice. In my free time, I like hanging out with my friend. We go out to eat, go to the cinema, go shopping or go to the concert music and so on. In the future, I want to be an auditor because it helps to build a solid ground about accounting, finance and improve my soft skill."
}, {
    question: "Tell me about your hometown/ the place that you live?/ A famous place in your country?",
    answer1: "My hometown is Hanoi, the capital city of Vietnam. It is a very old city with many beautiful places. The weather in Hanoi is often cool in the winter and hot in the summer. People here are friendly and kind. There are many delicious foods like Pho and Bánh mì. I love my hometown very much.",
    answer2: "I live in Hung Yen province, which is located in the north part of Vietnam. It is about sixty kilometers from Ha Noi. I often come back to my hometown by motorbike. There are a lot of beautiful places such as Tam Dao, Dai Lai... It is a place with friendly and kind people. I think everyone should visit my hometown at least once."
}, {
    question: "Tell me the best way to travel about around your country?",
    answer1: "Well, this is a very good question. I think the best way to travel around my country is by motorbike, because it is a very cheap and flexible way to move from place to place. With a motorbike, you can stop anywhere to enjoy the view, take pictures, or try local food. Right now, I usually use a motorbike to go to work. It makes me feel comfortable every day.",
    answer2: "This is a good question. I think the best way to travel in my country is by motorbike. It is cheap and easy to go from one place to another. With a motorbike, you can stop anytime to see the view, take photos, or try local food. I also use a motorbike to go to work every day. It makes me feel comfortable."
}, {
    question: "Tell me about your friend / a member in your family",
    answer1: "I have many friends, but Marry is my best friend. We have known each other since childhood. Now we live in different cities, but we talk to each other every day via mobile phone. I like her because she is very kind and always helps me when I need support. I hope she will be with me forever and become my wife in the future.",
    answer2: "Well, I would like to talk about my mother who has played an essential role in my life. She’s forty-two years old. She is very nice and humorous. She really is a mother and a friend to me as she always gives me valuable advice when I face a difficult problem. I love my mom very much."
}, {
    question: "6.	What is the weather like today? /What is your favorite season?",
    answer1: " Today, it’s very hot, but I like the heat and I really enjoy summer. In this season, I can go to the beach with my friends and family. At the beach, I can watch the sunset and enjoy the fresh air. I usually exercise in the morning, and summer is a great season for walking or running. I wish there were only one season in a year — summer!",
    answer2: "Today the weather is very good. It is amazing because it’s cloudy. I can go hang out with my friend. We can take a beautiful photograph. I really love this weather, it makes me feel happy and relaxed."
}, {
    question: "Please tell me about one of your good memories",
    answer1: "I come from Hanoi, which is the capital of Vietnam. But now I’m working in another city, very far from there. Back in Hanoi, I had an old friend. Now she still lives there. We shared many memories when we were young. One day, we walked together and she talked to me about her feelings. But at that time, I was just a student, so I rejected her. Now she is married. I miss her every day but it’s too late, I hope she will be happy every day.",
    answer2: "I am from Hanoi, the capital of Vietnam. Now I am working in a city far from Hanoi. In Hanoi, I had an old friend. She still lives there. We shared many memories when we were young. One day, we walked together and she told me how she felt. But at that time, I was just a student, so I didn’t agree with her. Now she is married. I miss her a lot, but it is too late. I hope she is happy every day."
}, {
    question: "What do you like doing with your friends?",
    answer1: "I like to go to beach with my friend, I really like the beach and my friends are same, at there I can enjoy the fresh air, listen the sound of the waves, we usually go there at the weekend and watch sunset together then go to cinema to watch action film, it helps us relax and feel better after along working week.",
    answer2: "I like to listen to music with my friends. When we have free time, we enjoy our favorite songs together. Music helps us relax and forget about stress. Sometimes, we also talk about the songs we like."
}, {
    question: "What do you like doing in your free time?",
    answer1: "I like to go to beach in my free time, I really like the beach and my friends are same, at there I can enjoy the fresh air, listen the sound of the waves, we usually go there at the weekend and watch sunset together then go to cinema to watch action film, it helps us relax and feel better after along working week.",
    answer2: "I have always been a music lover, so whenever I have free time, I just put on my earphones and enjoy my favorite tunes. To me, music provides an escape from the busy life as it is both relaxing and therapeutic."
}, {
    question: "What did you do last night / on the weekend?",
    answer1: "I went to the beach with my friend last night, I really like the beach and my friends are same, at there I can enjoy the fresh air, listen the sound of the waves, we usually go there at the weekend and watch sunset together then go to cinema to watch action film, it helps us relax and feel better after along working week.",
    answer2: "Last weekend, I listened to music in my free time. I put on my earphones and enjoyed my favorite songs. Music helps me relax and forget about the busy day. It’s a good way for me to unwind after a long week."
}, {
    question: "Please tell me about your first school?",
    answer1: "To be honest, I don’t remember much about my first school. But as far as I can remember, its name was Nguyen Truong To, in Hanoi. Every day, my mother took me to school. That school brings back many memories — of my teachers, my friends, and the first steps of my learning journey.",
    answer2: "My first school was a small school in my hometown. It was near my house, so I walked there every day. The teachers were kind, and I had many friends. I liked learning there, especially playing games during break time. I was very happy in that school."
}, {
    question: "Describe the room you are in?",
    answer1: "I am in a big room with about forty people. We are taking an English exam. This room has about ten desks and ten computers. It also has four fans and one air conditioner. I’m very happy to be here because I have prepared for this exam for a long time. I hope I will get a high score today.",
    answer2: "I am in a quite big room which is about 40 square meters with white walls. This room is equipped with 50 desks, 4 fans and 2 conditioners. I and other candidates are taking our exam on the computers. There are 3 supervisors who will help in case something goes wrong. The atmosphere in this room is fairly stressful."
}, {
    question: "Describe your journey here today?",
    answer1: "I’m happy to tell you about my journey here today. I got up at around six o’clock and had breakfast. Then, I went to the Aptis testing center to take the Aptis General test. Because the testing center is near my home, I walked here by myself. And now, I’m talking to you about my journey today. I hope I will get a high score on this test.",
    answer2: "Today, I came here by motorbike with my friend. It’s very fast and I won’t be late for exam... But it only takes 15 minutes to arrive here. It is a nice day. I both feel happy and worried for exam today."
}, {
    question: "What are you wearing today?",
    answer1: "Well I’m not really the fashionable type. Today I’m wearing a read jacket and a white jeans, I like red jacket because I really like red color, I don’t know white but I feel very comfortable when I wearing red color, in that color it always make me relax and feel better every day.",
    answer2: "Today, I’m wearing a blue t-shirt and a pair of jeans. It’s a simple outfit because I’m just at home today. I also have on my comfortable sneakers. I like to wear something easy and casual on regular days."
}, {
    question: "When do you feel tired?",
    answer1: "Well, this is a very good question. It brings back many memories of my past. I don’t feel tired when I work hard, but I do feel tired when I think about one person — my old friend. Now we live in different city. When I was young, she liked me, but I rejected her. Now she is married, and I always miss her whenever someone reminds me of her. At those times, I feel like my heart is truly tired.",
    answer2: "I feel tired at the end of the day, especially after working or studying for a long time. When I have a lot of tasks to do, I get tired easily. I also feel tired when I don’t sleep well the night before. That’s when I need to rest or take a break."
}, {
    question: "Describe a typical Vietnamese meal?",
    answer1: "A typical Vietnamese meal includes rice, vegetables, meat or fish, and soup. Rice is the main dish and is eaten every day. The food is shared by everyone at the table. People use chopsticks and eat together as a family. It’s not just about eating, but also about spending time and talking with each other.",
    answer2: "A typical Vietnamese meal usually includes rice, a soup, and several dishes. The dishes are often made with vegetables, meat, or fish. For example, a common meal might be rice with grilled pork, pickled vegetables, and a bowl of clear soup. We also often eat with fish sauce, which adds flavor to the meal. It’s fresh, tasty, and balanced."
}, {
    question: "Describe your typical day?",
    answer1: "I usually wake up at 6 o’clock. I eat breakfast, then go to work. I usually have lunch with my friends in the office and continue working in the afternoon. In the evening, I really like listening to music or reading a book. I go to bed around 10 p.m. This habit helps me stay healthy and happy every day.",
    answer2: "My typical day starts early in the morning. I wake up, have breakfast, and then go to work or school. During the day, I focus on my tasks and take short breaks. In the evening, I relax by watching TV or reading a book. After dinner, I spend time with my family or friends before going to bed. It’s a simple but busy routine."
}, {
    question: "What do you like to do in your free time?",
    answer1: "In my free time, I really like listening to music. It helps me relax and feel better after a long day. I usually listen to music on my phone using Youtube. I like pop music the most, but sometimes I also enjoy piano music. Music is good because it makes me happy every day.",
    answer2: "I have always been a music lover, so whenever I have free time, I just put on my earphones and enjoy my favorite tunes. To me, music provides an escape from the busy life as it is both relaxing and therapeutic."
}, {
    question: "Describe your favorite Places",
    answer1: "My favorite places is the beach. I really like going to the beach to relax, enjoy the fresh air, and listen to the sound of the waves. I usually go with my friends, and watch the sunset together. Being at the beach always makes me happy.",
    answer2: "There are a lot of places I like but my favorite place is Nha Trang. I think it is the most beautiful city in Viet Nam with a beautiful beach. I love to be there for a long time as I can rest softly and I have a good time to play sea sports and eat seafood. Nha Trang is a great place to make new inspiration and relax."
}, {
    question: "Tell me about the last time you talked with your mother",
    answer1: "Well, I really like this question, The last time I talked with my mother was this morning. We had breakfast together and chatted about my future, she gave me some advice about my career plans. I always feel happy when I talk to her. I hope my mother will be with me forever.",
    answer2: "The last time I talked to my mother was yesterday. We chatted on the phone for about 20 minutes. She asked me how I was doing and if I had any plans for the weekend. We also talked about family and shared some news. It was a nice conversation, and it made me feel happy."
}, {
    question: "People like sport in your country",
    answer1: "Yes, people in my country really like sports. The most popular sport is football. Many people play football in the parks or watch it on TV. Every day, there are many people playing sports at the football field near my house. Some people also like swimming or running. I think sport helps us stay healthy and make friends.",
    answer2: "Yes, people in my country really love sports. Football is the most popular sport, and many people watch the matches or play it in their free time. Besides football, badminton and volleyball are also common. Sports bring people together, and they help everyone stay healthy and active."
}, {
    question: "Describe the room you are in?",
    answer1: "I am in a quite big room which is about 40 square meters with white walls. This room is equipped with 50 desks, 4 fans and 2 conditioners. I and other candidates are taking our exam on the computers. There are 3 supervisors who will help in case something goes wrong. The atmosphere in this room is fairly stressful.",
    answer2: "The room I am in is simple but comfortable. It has a large window that lets in a lot of natural light. There are a few chairs and tables, and the walls are painted light blue. It’s quiet and peaceful, perfect for working or reading. I feel relaxed here because it’s clean and neat."
}, {
    question: "What are you looking for in your new house?",
    answer1: "Today, I want to talk about my dream house. My house will have three floors. The first floor will have a living room and a kitchen. The living room, I put a sofa and a large television to my family will watch TV together in the evening. My bedroom which I paint blue because it’s my favorite color. I will raise vegetables and flowers in the garden. I hope it will be real in the future.",
    answer2: "In my new house, I want a big kitchen where I can cook with my family. I also want a cozy living room with a comfortable sofa to relax. My bedroom will be quiet and peaceful, with a big bed and some plants. I want a small garden outside to grow flowers and trees. I look forward to having a place like this."
}, {
    question: "Why are you learning English?",
    answer1: "As you know, nowadays English is a popular language in the world. Therefore, I need to improve my English because of two main reasons. Firstly, I want to get a better job in the future. When I have a English certificate, I can apply to the company with a high salary. Secondly, I want to travel around the world and have a foreign husband. With the reasons I have mentioned above, I believe that English is very important for me.",
    answer2: "I am learning English because it is useful. First, I want to find a good job that needs English. Second, I like to travel, and speaking English will help me talk to people in other countries. I also want to understand movies and books in English, so learning the language is important for me."
}, {
    question: "Describe Your job",
    answer1: "I am a teacher. I teach English at a school. My job is to help students learn new things, like vocabulary, grammar, and speaking skills. I also prepare lessons, give tests, and grade students' work. I enjoy my job because I like helping students improve and seeing them succeed.",
    answer2: "Now, I’m an auditor. I work at Deloitte. My main responsibility is to communicate with the customer to obtain the documentation, audit evidence. Then, I and members of my team discuss together to expose the conclusion about the financial statement whether disclose true and fairly. I love my job very much because it helps me to improve my value every day."
}, {
    question: "What is the food like in your country?",
    answer1: "There are many traditional and delicious foods in Vietnam but I think the most famous food is Pho. It has become the must-try dish on VN for any visitors. It’s tasty, cheap and available at all hours. The specialty of the food is the broth. It is made by stewing the bones of cows and pigs for a long time in a large pot. I love Pho very much so I can eat every day.",
    answer2: "In Vietnam, we have many kinds of food. Rice is a very important part of our meals. We often eat rice with vegetables, meat, and soup. One of the most popular dishes is Pho, a noodle soup with beef or chicken. It is very tasty, and you can find it anywhere. People in Vietnam also enjoy fresh fruits and drinks like iced tea."
}, {
    question: "When do you feel stressed?",
    answer1: "Communication with foreigners is the thing that I find most stressful. Because I do not have good use of English to speak fluently and Lack of vocabulary & confidence. I understand fully my job’s requirement of English Fluency; I remind myself of learning to spend more time looking for some interactive & visually engaging. Hopefully, in the next few months, I will no longer get stressed in that situation.",
    answer2: "I feel stressed when I have too much work to do or when I have to meet deadlines. I also get stressed when I can't find the right words to say in English. To reduce stress, I try to take a break and relax by listening to music or taking a walk."
}, {
    question: "Tell me why interested in travel?",
    answer1: "I love traveling because it helps me relax and feel happy. When I travel, I can visit beautiful places, see new things, and meet new people. I also enjoy trying delicious food from different places. Traveling helps me forget about work or stress. It makes me feel better and gives me energy. That’s why I enjoy traveling so much.",
    answer2: "When I feel tired, I am going to travel with my family or my friends because it helps me to relax and recharge my energy. I will go to the beautiful place and fresh air. I will eat the traditional and delicious food. I also take part in the activities at that place. In conclusion, I love traveling so much."
}, {
    question: "Favorite book in your country?",
    answer1: "My favorite book in my country is Mắt Biếc by Nguyễn Nhật Ánh. It's a beautiful story about childhood, love, and friendship. The main character is a boy who has a big love for a girl, and the book talks about his memories of growing up. Many people in my country love this book because it reminds them of their own childhood and dreams.",
    answer2: "In my country, the most popular books are fiction. Many people, from teenagers to adults, like reading novels. These books have many interesting stories. Besides novels, comics are also very popular, especially with children. Some adults also like to read self-help books to improve themselves. In general, people in my country love reading books to relax and learn new things."
},
];

// Function to populate the table with questions
function populateQuestions() {
    const tableBody = document.getElementById('questionTableBody');

    questions.forEach( (q, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${q.question}</td>
      <td><button class="btn btn-info" onclick="showAnswer(1, ${index})">Xem đáp án</button></td>
      <td><button class="btn btn-info" onclick="showAnswer(2, ${index})">Xem đáp án</button></td>
    `;
        tableBody.appendChild(row);
    }
    );
}

// Function to show the modal with the appropriate answer
function showAnswer(answerNumber, questionIndex) {
    const question = questions[questionIndex];

    if (answerNumber === 1) {
        // Populate and show Answer 1 modal
        document.getElementById('answer1ModalLabel').innerText = `Đáp án 1: ${question.question}`;
        document.getElementById('answer1Text').innerText = question.answer1;
        new bootstrap.Modal(document.getElementById('answer1Modal')).show();
    } else {
        // Populate and show Answer 2 modal
        document.getElementById('answer2ModalLabel').innerText = `Đáp án 2: ${question.question}`;
        document.getElementById('answer2Text').innerText = question.answer2;
        new bootstrap.Modal(document.getElementById('answer2Modal')).show();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Your existing code here
    populateQuestions();
    // Call the function once the DOM is loaded
});

// ===============================================================================================================
// ////////////// ĐẾM NGƯỢC THỜI GIAN --- COUNT DOWN ///////////////
// ===============================================================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Đảm bảo mã JavaScript chỉ chạy sau khi DOM tải xong
    let timeLeft = 12 * 60;
    // 35 minutes in seconds
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
});

// ===============================================================================================================
// ////////////// HIỂN THỊ THÔNG BÁO KHI NHẤN NÚT NEXT/BACK ///////////////
// ===============================================================================================================
// Chờ DOM được tải đầy đủ
document.addEventListener('DOMContentLoaded', () => {
    // Lấy các phần tử nút "Back" và "Next"
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    // Kiểm tra nếu nút tồn tại
    if (backButton && nextButton) {
        // Hàm hiển thị modal
        function showModal() {
            const modal = new bootstrap.Modal(document.getElementById('remindModal'));
            modal.show();
        }

        // Lắng nghe sự kiện nhấn nút "Back" và "Next"
        backButton.addEventListener('click', () => {
            showModal();
            // Hiển thị modal khi nhấn "Back"
        }
        );

        nextButton.addEventListener('click', () => {
            showModal();
            // Hiển thị modal khi nhấn "Next"
        }
        );
    }
}
);

