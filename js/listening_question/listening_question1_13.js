document.addEventListener('DOMContentLoaded', function() {

// ===============================================================================================================
// ////////////// DANH SÁCH CÂU HỎI ///////////////
// ===============================================================================================================

const listeningQuestions1 = [
  {
    heading: "Question 1 of 17", 
    audioUrl: "audio/question1_13/audio_q1.mp3", 
    question: "What is not original?",
    options: ["Furniture", "Home", "Bicycle"], 
    correctAnswer: "Furniture", 
    transcript: "Welcome! I’m so glad you are interested in this beautiful property. This house was built in the 1920s and has maintained much of its original charm. The hardwood floors you see here are completely original, and they’ve been carefully preserved over the years. The same goes for the architecture- those high ceilings and detailed mouldings are a testament to the craftsmanship of that era. However, the furniture you see isn’t original. It was replaced a few years ago to give the home a more modern, functional feel. But don’t worry, the updates blend well with the classic features, giving you the best of both words- historic charm with modern comfort." 
  },
  {
    heading: "Question 2 of 17", 
    audioUrl: "audio/question1_13/audio_q2.mp3", 
    question: "What did she advice for people who lack motivation at work?",
    options: ["Attend a time management workshop", "Request a transfer", "Take on additional responsibilities"], 
    correctAnswer: "Request a transfer", 
    transcript: "Many people feel unhappy at work, and often, they think a higher salary or less work will fix it. But that’s not always the solution. Sometimes, the problem is the work environment. A change of place can help improve how we feel at work. However, looking for a new job can be stressful and take time. One option is to ask for a transfer to another branch within the same company. This can offer the same benefits as getting a new job, without the challenges of starting over somewhere new." 
  },
        {
    heading: "Question 3 of 17", 
    audioUrl: "audio/question1_13/audio_q3.mp3", 
    question: "What time do they meet?",
    options: ["6.30pm", "8.00pm", "7.00pm"], 
    correctAnswer: "6.30pm", 
    transcript: "Hey, I was just checking in to confirm what time we’re meeting up tonight. I know we’ve been talking about hanging out, but I wanted to make sure. Are we still on for 6:30? That time works great for me, so I just wanted to double-check if it’s good for you too. Alright, looking forward to it. See you then!"  
  },
    {
    heading: "Question 4 of 17", 
    audioUrl: "audio/question1_13/audio_q4.mp3", 
    question: "Where does she go shopping?",
    options: ["at a new shopping mall", "at a department store", "at a local market"], 
    correctAnswer: "at a new shopping mall", 
    transcript: "Person A: 'Hey, do you know where Sarah likes to go shopping?' \nPerson B: 'Oh, yeah! She usually goes to that new shopping mall that just opened. It's got a lot of cool stores.' \nPerson A: 'Really? I haven't been there yet. What's it like?' \nPerson B: 'It's amazing! It's really modern, and there’s a big variety of shops. She loves it because she can find pretty much anything she needs, from clothes to electronics.' \nPerson A: 'That sounds great. I should check it out sometime.' \nPerson B: 'Definitely! The food court is great too. She always grabs a bite there after shopping.'"  
  },
{
  heading: "Question 5 of 17", 
  audioUrl: "audio/question1_13/audio_q5.mp3", 
  question: "What is her favorite thing to do in her spare time?",
  options: ["watching a movie at home", "going to the theatre", "playing sports"], 
  correctAnswer: "going to the theatre", 
  transcript: "Whenever she has some free time, she loves going to the theatre. There's something special about watching live performances that really captures her attention. Whether it’s a play, musical, or even a stand-up comedy show, she enjoys the atmosphere and the excitement of being in a theatre. It’s her favorite way to unwind and escape into a different world for a few hours."
},
{
  heading: "Question 6 of 17", 
  audioUrl: "audio/question1_13/audio_q6.mp3", 
  question: "Which sports is she good at?",
  options: ["Running", "Swimming", "Football"], 
  correctAnswer: "Football", 
  transcript: "She’s always enjoyed sports, and football is the one she’s really good at. She has great control over the ball and is quick on her feet, whether she’s playing with friends or in a competitive setting."
},
    {
    heading: "Question 7 of 17", 
    audioUrl: "audio/question1_13/audio_q7.mp3", 
    question: "The woman is discussing her new exercise routine. How much time does she spend cycling?",
    options: ["45 minutes", "35 minutes", "60 minutes"], 
    correctAnswer: "35 minutes", 
    transcript: "Lately, I’ve started a new routine that I’m really enjoying! I decided to involve more exercise into my life. So, I began by walking for about 15 minutes every day, just to get moving. After that, I hop on my bike and cycle for 35 minutes. It’s been refreshing! I love how it helps me clear my mind after a busy day. I’m thinking of sticking with this habit for the long run!" 
  },
    {
    heading: "Question 8 of 17", 
    audioUrl: "audio/question1_13/audio_q8.mp3", 
    question: "When do they meet each other? ",
    options: ["On Thursday morning", "On Wednesday morning", "On monday morning"], 
    correctAnswer: "On Thursday morning", 
    transcript: "Hi Professor Smith, this is John calling about our meeting for the assignment. I wanted to confirm our appointment time. I know we discussed a few options earlier. At first, I thought we agreed on Tuesday morning, but then I remembered that doesn’t work with your schedule. Then I considered Thursday afternoon, but I have another class then. So, I’m pretty sure we settled on Thursday morning at 10 AM in your office. That’s what I have written down. I’ll bring my draft and notes for the project. If I’ve got the day or time wrong, or if you need me to bring anything else, please let me know. Looking forward to discussing the assignment with you. Have a great day!" 
  },
    {
    heading: "Question 9 of 17", 
    audioUrl: "audio/question1_13/audio_q9.mp3", 
    question: "A woman is calling her son. What time will the mother meet the son?",
    options: ["Six o’clock", "Two o’clock", "Three o'clock"], 
    correctAnswer: "Three o'clock", 
    transcript: "Hi, sweetheart! I just wanted to tell you that we’ll meet at 3 o'clock when you finish school. After that, I can take you to your soccer club at 4 o'clock. If you need anything, just let me know, and I can pick it up for you. Then, we can head out to dinner at 5 o'clock. Looking forward to seeing you!" 
  },
    {
    heading: "Question 10 of 17", 
    audioUrl: "audio/question1_13/audio_q10.mp3", 
    question: "Jack is calling to invite a friend to his house. What color is Jack’s house??",
    options: ["Black", "Red", "Green"], 
    correctAnswer: "Red", 
    transcript: "Hey! It’s Jack. I just moved to a new house in this busy neighborhood, and it’s really cool! There are so many houses here in different colors—purple, blue, and white. My house is big and red! I’d love for you to come over and check it out. Let me know when you’re free!." 
  },
    {
    heading: "Question 11 of 17", 
    audioUrl: "audio/question1_13/audio_q11.mp3", 
    question: "A man is talking about his daily routine. What does he do after work?",
    options: ["Go home", "Go to the coffee shop", "Play football"], 
    correctAnswer: "Play football", 
    transcript: "Every day, I wake up at 7 A.M. and have a quick breakfast before going to work. I usually take the bus, and it takes about 30 minutes to get to the office. At work, I spend most of my time on the computer, answering emails and working on projects. I have lunch at noon and get back to work until 5 P.M. After work, I like to relax by playing football with my friends. It’s a great way to stay active and have fun!" 
  },
    {
    heading: "Question 12 of 17", 
    audioUrl: "audio/question1_13/audio_q12.mp3", 
    question: "A mom is talking to her son. What does the son like to study?",
    options: ["Art", "Math", "Science"], 
    correctAnswer: "Art", 
    transcript: "Hey sweetheart, I’m so proud of you! Your art project looks amazing, you’re really talented. I love how you used all those bright colors. You always do such a great job with your drawings. But remember, you also need to spend some time on your other subjects too, like math and science. I know you can do well in those if you try hard, just like you do with art. Let’s work on it together, okay?" 
  },
 {
  heading: "Question 13 of 17", 
  audioUrl: "audio/question1_13/audio_q13.mp3", 
  question: "How many weeks did they spend in India?",
  options: ["Three weeks", "Two weeks", "One week"], 
  correctAnswer: "Two weeks", 
  transcript: "They traveled to India for a short trip, and they spent two weeks there. During that time, they explored different cities, experienced the local culture, and visited some famous landmarks. It was a quick but memorable visit."
},
  {
  heading: "Question 1 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q1.mp3", 
  question: "Doctor’s office is calling about a change in the appointment. When is the new appointment?",
  options: ["Thursday 13th", "Friday 14th", "Wednesday 12th"],
  correctAnswer: "Thursday 13th",
  transcript: "Hello! This is the doctor’s office calling to change your appointment. I wanted to let you know that the new appointment is on Thursday the 13th. I understand you might have been expecting it to be on Friday the 14th, but we’re all off this day due to the national dentist holiday. Please let us know if that works for you!"
},
{
  heading: "Question 2 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q2.mp3", 
  question: "A man is ordering a drink. What does he want?",
  options: ["Water", "Iced tea", "Beer"],
  correctAnswer: "Iced tea",
  transcript: "Hi there! I’m really thirsty. Can I have a drink, please? I was thinking about getting a beer, but it's a bit too early for that. Water sounds good, but I’m in the mood for something cooler. I’ll go with an iced tea, please. That sounds perfect for this weather!"
},
{
  heading: "Question 3 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q3.mp3", 
  question: "An author is talking about her daily routine. When does she usually write?",
  options: ["In the afternoons", "In the mornings", "At night"],
  correctAnswer: "In the afternoons",
  transcript: "Every morning, I start my day by going for a run. It helps me clear my mind and gives me energy. After lunch, at around two o’clock, I sit down at my working table, ready to write. My husband is my best critic, so I try to produce something before he gets home in the afternoon."
},
{
  heading: "Question 4 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q4.mp3",  
  question: "How does he travel?",
  options: ["By car", "By plane", "By train"],
  correctAnswer: "By train",
  transcript: "He travels most of the time, enjoying the convenience and comfort of his journeys. Whether it's for work or leisure, he finds it the best way to get around, especially because of the scenic views. He travels by train."
},
{
  heading: "Question 5 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q5.mp3", 
  question: "A woman is talking about her usual Saturday routine. What does she usually do on Saturdays?",
  options: ["Goes shopping", "Sees her family", "Goes to a birthday party"],
  correctAnswer: "Sees her family",
  transcript: "Normally, on Saturdays, I spend the day with my family. We like to have brunch together and then do some fun activities, like playing board games or going for a walk. It’s a nice way to relax and catch up. But this week, I have something different planned. I’m going to see a friend for her birthday and go shopping together instead. I’m looking forward to it, but I know I’ll miss our usual family time!"
},
{
  heading: "Question 6 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q6.mp3", 
  question: "A man is talking about his family trip. What does the man’s wife enjoy?",
  options: ["Photography", "Shopping", "Hiking"],
  correctAnswer: "Photography",
  transcript: "On our family trip last summer, we had such a great time! My wife really enjoys photography. So, when we went walking together in the parks, she spent a lot of time taking pictures of the beautiful landscapes. Well, at least she is not crazy about shopping."
},
{
  heading: "Question 7 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q7.mp3", 
  question: "A woman is talking about her job. What encouraged her to become a scientist?",
  options: ["Her computer", "Her mother", "A large stone"],
  correctAnswer: "A large stone",
  transcript: "I’ve always loved science, but there was a moment that really encouraged me to become a scientist. I remember when I was a child, I found a large stone during a school trip. It sparked my curiosity about geology. My mother also inspired me to explore my interests in science. Of course, I use the computer a lot now for my research, but that stone was the beginning."
},
{
  heading: "Question 8 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q8.mp3", 
  question: "Listen to the speaker talking about their weekly schedule. When is the meeting scheduled?",
  options: ["Monday morning", "Friday afternoon", "Wednesday afternoon"],
  correctAnswer: "Wednesday afternoon",
  transcript: "This week is pretty busy, but the most important thing is the meeting on Wednesday afternoon. We usually have it on Monday, but this time we had to change the day. Wednesday works better because everyone is free. I have a lot to prepare before then, so I'll spend Tuesday getting everything ready. It's a big meeting, and we need to finalize some plans. I'm just glad it's not on Friday, or I'd be too tired!"
},
{
  heading: "Question 9 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q9.mp3", 
  question: "A man is reading the news about a housing development plan. How many new houses are going to be built?",
  options: ["1500", "2000", "2500"],
  correctAnswer: "2000",
  transcript: "I just heard the news that the local authority is planning to build 2000 new houses! I remember they were initially saying it would only be 1500. But then I heard someone mention 2500! That’s quite a jump. I wonder how this will affect the neighborhood. Will it bring in more families or just more traffic? It’ll be interesting to see how it all unfolds."
},
{
  heading: "Question 10 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q10.mp3", 
  question: "Listen to a writer talking about her job. What is her first job?",
  options: ["Writer", "Librarian", "Teacher"],
  correctAnswer: "Teacher",
  transcript: "When I was younger, I didn’t always dream of being a writer. My first job was actually as a teacher. I taught English to small children, and I loved helping them learn to read and write. It wasn’t easy, though. I spent a lot of time grading papers and preparing lessons. But that job taught me how to use words well, and now I write stories for everyone to enjoy."
},
{
  heading: "Question 11 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q11.mp3", 
  question: "Listen to Marry talking to Jane while waiting for James. What did they decide to do?",
  options: ["Cancel the meeting", "Having the meeting without him", "Wait for him longer"],
  correctAnswer: "Having the meeting without him",
  transcript: "Hi, Jane! It looks like James is running late again. I’m starting to wonder if we should wait for him. I don’t want to waste too much time. I feel like we could have the meeting without him. We have a lot to discuss, and we can always update him later. I think it’s better to move forward instead of just waiting. So let’s go ahead."
},
{
  heading: "Question 12 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q12.mp3", 
  question: "A woman is talking to her coworker. When does the meeting start?",
  options: ["10.15", "10.30", "9.45"],
  correctAnswer: "10.15",
  transcript: "Hey, just wanted to give you a quick heads-up. I won’t be able to join the meeting with the clients at 10:15 like we planned—I’ve got something that suddenly came up. I know it’s last minute, but could you go ahead and handle the presentation on your own? You’re familiar with everything, so I trust you’ve got this. Let me know how it goes afterward. Thanks, I really appreciate it!"
},
{
  heading: "Question 13 of 17", 
  audioUrl: "audio/question1_13/audio_de2_q13.mp3", 
  question: "Vincent is calling James. Why does Vincent call James?",
  options: ["Invite him to a party", "Suggest a drink", "Ask for help"],
  correctAnswer: "Suggest a drink",
  transcript: "Hi James, it’s Vincent. I just want to check in and see how you’re doing. It’s been a while since we last caught up! How about we grab a drink later? I know a great new place that has very nice tea. You should definitely try it next time you visit me. Text me back!"
},{
    heading: "Question 1 of 17",
    audioUrl: "audio/question1_13/audio_de3_q1.mp3",
    question: "What did the mother call her daughter to help her buy?",
    options: ["eggs", "bread", "milk"],
    correctAnswer: "eggs",
    transcript: "Hi Sally, it’s Mom. How are you? I just wanted to remind you about dinner tonight. We’re having your favorite, spaghetti! Don’t forget to pick up your brother from school at 4 o’clock. Oh, and can you stop by the store on your way home? We’re out of eggs, and I need some to finish baking the cake. Thanks, sweetie!"
  },
  {
    heading: "Question 2 of 17",
    audioUrl: "audio/question1_13/audio_de3_q2.mp3",
    question: "Samia is going to meet her friend. What time are they going to meet?",
    options: ["9:30", "11:00", "10:00"],
    correctAnswer: "10:00",
    transcript: "Hey! I was thinking about our meet-up. We plan to meet at 9:30, but I just realized I have a class that finishes at 9:00, so I might not make it in time. How about we meet at 10:00 instead? That should give me enough time to get there. Does that work for you?"
  },
  {
    heading: "Question 3 of 17",
    audioUrl: "audio/question1_13/audio_de3_q3.mp3",
    question: "Anna is calling her brother Max. What does Anna do later in the afternoon?",
    options: ["Pick up the kids", "Stay late at the office", "Hang out with friends"],
    correctAnswer: "Stay late at the office",
    transcript: "Hey Max, it’s Anna. I want to ask you for a favor this afternoon. I have to stay late at the office to finish some work. Could you please pick up my kids from school? After that, I know you’ll want to hang out with your friends, so feel free to take them along. I really appreciate your help!"
  },
  {
    heading: "Question 4 of 17",
    audioUrl: "audio/question1_13/audio_de3_q4.mp3",
    question: "A woman is talking about her favorite film on the radio. What film did she recommend?",
    options: ["Action film", "Romantic film", "Comedy film"],
    correctAnswer: "Action film",
    transcript: "Today, I want to recommend an action film that really impressed me. The lead actor, who is usually known for his romantic roles, delivered an outstanding performance. Of course, if you’re in the mood for something lighter, there are plenty of comedies to enjoy as well. But if you’re looking for excitement, this action film is definitely worth a watch!"
  },
{
  heading: "Question 5 of 17",
  audioUrl: "audio/question1_13/audio_de3_q5.mp3",
  question: "Where does Malik want to go?",
  options: ["The town hall", "The library", "The park"],
  correctAnswer: "The town hall",
  transcript: "Malik has been hearing a lot about an important event, and the town hall is where he wants to go because he believes it will give him a chance to learn more, engage with the community, and share his own ideas."
},
{
  heading: "Question 6 of 17",
  audioUrl: "audio/question1_13/audio_de3_q6.mp3",
  question: "Greg is talking about a working day in his life. How does he go to work?",
  options: ["By bus", "By car", "By bike"],
  correctAnswer: "By bus",
  transcript: "Hi, everyone! I’m Greg, and I want to tell you about a typical working day in my life. I usually wake up early, around 7 A.M. After a quick breakfast, I get ready for work. I like to wear smart clothes because I work in an office. I go by bus every day, which takes about 30 minutes. I enjoy looking out the window and listening to music on my way. When I arrive at the office, I start my day by checking emails and planning my tasks. I have meetings with my team, and we work together on projects."
},
{
  heading: "Question 7 of 17",
  audioUrl: "audio/question1_13/audio_de3_q7.mp3",
  question: "Listen to a nutrition expert. What time is the best for children to eat fruit?",
  options: ["In the morning", "In the afternoon", "In the evening"],
  correctAnswer: "In the morning",
  transcript: "Hello, everyone! I’m here to talk about nutrition and how important it is for our health. Eating fruits is very beneficial, especially for children. Fruits have vitamins and minerals that help kids grow strong and stay healthy. The best time for children to eat fruit is in the morning. This gives them energy for the day ahead. You can add fruit to breakfast, like in a smoothie or with yogurt. It’s a delicious and healthy way to start the day! So, let’s encourage our kids to eat more fruit in the morning! Thank you!"
},
{
  heading: "Question 8 of 17",
  audioUrl: "audio/question1_13/audio_de3_q8.mp3",
  question: "Listen to a woman explaining her morning routine to her friend. Why do women get up early?",
  options: ["To go to work", "To take care of their kids", "To have some quiet time"],
  correctAnswer: "To have some quiet time",
  transcript: "I usually wake up early each day before anyone else. Some people get up early to go to work or to take care of their kids, but for me, it’s all about enjoying that calm before the busyness begins. I enjoy this quiet time because it helps me start my day peacefully. It’s nice to have a few moments to myself, sipping coffee and planning my day ahead."
},
{
  heading: "Question 9 of 17",
  audioUrl: "audio/question1_13/audio_de3_q9.mp3",
  question: "A man is talking to his friend. Why does he need to learn to drive?",
  options: ["To go on a road trip", "To take his family on vacations", "He has to drive to work"],
  correctAnswer: "He has to drive to work",
  transcript: "Man: Hey, Sarah. I’ve got some news—I’m moving to a new place.\nWoman: Oh really? That sounds exciting! Where’s your new place?\nMan: It's actually pretty far from my workplace, and the public transport there isn't great. So, I've been thinking, I need to learn how to drive.\nWoman: Yeah, that makes sense. It's hard to rely on public transport if it's not reliable. Have you ever driven before? Man: Not really. I've always used buses and trains, but now it looks like I don't have a choice. I need to get a license.\nWoman: You'll get the hang of it. Driving will definitely make your commute easier. Are you planning to take lessons soon?\nMan: Yeah, I'm going to sign up for a driving school next week. Hopefully, I can get it done quickly."
},
{
  heading: "Question 10 of 17",
  audioUrl: "audio/question1_13/audio_de3_q10.mp3",
  question: "Two friends are talking with each other. What did they both buy?",
  options: ["Clothes", "Shoes", "Books"],
  correctAnswer: "Clothes",
  transcript: "Man: I just got back from shopping. I found a great jacket and also picked up some tea.\nWoman: Nice! What kind of jacket did you get?\nMan: It’s a stylish leather jacket. I think it’ll be perfect for the fall. What about you?\nWoman: I bought a cozy sweater and also grabbed a delicious cake.\nMan: Sounds great! Those are perfect for this weather. Woman: Thanks! I’m excited to try the cake later. Looks like we both made good choices today!\nMan: Absolutely! New clothes and tasty treats for the chilly days ahead!"
},
{
  heading: "Question 11 of 17",
  audioUrl: "audio/question1_13/audio_de3_q11.mp3",
  question: "What area is he describing?",
  options: ["A shopping district", "A university area", "A residential neighborhood"],
  correctAnswer: "A university area",
  transcript: "He’s describing a place with a vibrant atmosphere, full of students and professors. The university area is where he’s talking about, known for its lively campus, beautiful buildings, and the mix of academic and social life that surrounds it."
},
{
  heading: "Question 12 of 17",
  audioUrl: "audio/question1_13/audio_de3_q12.mp3",
  question: "A man wants to buy a new house. What is his biggest problem?",
  options: ["Finding the right house", "Persuading his family", "Getting the financing"],
  correctAnswer: "Persuading his family",
  transcript: "I’ve been having a tough time lately. I really want to move abroad for a new job, but my family isn’t on board with it. They’re worried about me leaving and don’t understand why I want to go so far away. I’ve tried to explain all the benefits, but they just don’t seem to get it. It’s really frustrating because I want their support, but it feels like I’m not getting through to them."
},
{
  heading: "Question 13 of 17",
  audioUrl: "audio/question1_13/audio_de3_q13.mp3",
  question: "Listening to a tour guide talking about Rock City. How old is the city?",
  options: ["1000 years", "2000 years", "1500 years"],
  correctAnswer: "1500 years",
  transcript: "Welcome to Rock City, everyone! I'm excited to show you around this amazing place. Rock City has a very long and interesting history. People first started living here about 1500 years ago. Can you believe how old that is? It's older than many famous cities in the world! The city got its name because of all the big rocks you can see around us. Over time, people built houses and roads between these rocks. Today, we can still see many old buildings from long ago."
},{
  heading: "Question 1 of 17",
  audioUrl: "audio/question1_13/audio_de4_q1.mp3",
  question: "Listen to the instructions of a university. Where is the main office?",
  options: ["in the basement", "on the first floor", "on the second floor"],
  correctAnswer: "on the first floor",
  transcript: "Welcome to our university! When you enter the campus, you’ll see the library on your left and the cafeteria on your right. If you need help with anything, the main office is on the first floor of the center campus building. There, you can ask about classes, schedules, or anything else. Behind the main building, you’ll find the gym and sports area. For quiet study, there are some nice spots in the garden near the science building. Make sure to explore and enjoy your time here!"
},
{
  heading: "Question 2 of 17",
  audioUrl: "audio/question1_13/audio_de4_q2.mp3",
  question: "How much can Max pay for the computer?",
  options: ["200 pounds", "250 pounds", "300 pounds"],
  correctAnswer: "250 pounds",
  transcript: "Hi, it’s me Max. I’m calling about the computer that you are selling. You see. My computer is old and slow. I can’t play any games on it any more and would like to replace it with a new one. How much do you offer? I can pay 250 pounds. This afternoon I am busy but we can discuss this tomorrow morning. Is that okay? Call me back soon."
},
{
  heading: "Question 3 of 17",
  audioUrl: "audio/question1_13/audio_de4_q3.mp3",
  question: "Where does he want to go tomorrow?",
  options: ["The park", "The cinema", "The town hall"],
  correctAnswer: "The town hall",
  transcript: "He has some important things to discuss tomorrow, and the town hall is where he wants to go, as it’s the perfect place for the meeting and gathering more information."
},
{
  heading: "Question 4 of 17",
  audioUrl: "audio/question1_13/audio_de4_q4.mp3",
  question: "What will they bring to the picnic?",
  options: ["Drinks", "Food", "Snacks"],
  correctAnswer: "Food",
  transcript: "Pierre: Hey, Emma, are you ready for the picnic this weekend?\nEmma: Definitely! I’m really looking forward to it. Do you know what everyone’s bringing?\nPierre: Yeah, I spoke with a few people. Sarah’s bringing cups and bowls, and Tom said he’ll take care of drinks. He’s got some lemonade and iced tea ready.\nEmma: Sounds great! I think Clara mentioned she’s making a fruit salad, right?\nPierre: Yep, and Leo’s bringing chips and dips. I guess we’re pretty covered on snacks.\nEmma: Awesome! So, what should we bring? Maybe some food in case we might get hungry?\nPierre: That’s a good idea. How about we prepare some chicken and french fries?\nEmma: Perfect! This picnic is going to be amazing!"
},
{
  heading: "Question 5 of 17",
  audioUrl: "audio/question1_13/audio_de4_q5.mp3",
  question: "How many people live in the town?",
  options: ["5,000", "10,000", "20,000"],
  correctAnswer: "10,000",
  transcript: "Welcome, everyone! Today, I’m excited to introduce you to our charming small town. Right here in the town square, you’ll find local shops, cozy cafes, and a beautiful fountain where people gather to relax. This square is the heart of our community, often filled with cool events like farmers' markets and live music. Currently, there are 10,000 people living in this town. As we explore, you’ll see the unique blend of history and modern life that makes our town so special."
},
{
  heading: "Question 6 of 17",
  audioUrl: "audio/question1_13/audio_de4_q6.mp3",
  question: "Where are they going to meet?",
  options: ["at the park", "at the station", "at the university"],
  correctAnswer: "at the park",
  transcript: "Hi, it’s me! I wanted to confirm where we’re meeting today. I thought we agreed to meet at the park, right? It’s a nice place to relax and catch up. The station would be too crowded, and the university is a bit far for me. Let’s stick to the park so we can enjoy the weather. What time should I meet you there?"
},
{
  heading: "Question 7 of 17",
  audioUrl: "audio/question1_13/audio_de4_q7.mp3",
  question: "What color top is he going to buy?",
  options: ["Green", "Red", "Black"],
  correctAnswer: "Black",
  transcript: "Man: Hello, I would like to buy a top, please.\nWoman: Sure, do you have anything particular in mind? Man: I like the design of that green one over there. Do you have it in blue?\nWoman: Maybe. What size are you?\nMan: I am wearing large.\nWoman: Let me see. Ohh. We have that one in blue but small. The red and black ones, however, are available in large.\nMan: Red is not my cup of tea. Well, I will go with the other option then."
},
{
  heading: "Question 8 of 17",
  audioUrl: "audio/question1_13/audio_de4_q8.mp3",
  question: "What career did he choose?",
  options: ["to work in business", "to become a teacher", "to become a researcher"],
  correctAnswer: "to work in business",
  transcript: "Woman: Welcome, how may I help you?\nMan: Yes, I would like to have some advice for my future job. I majored in Mathematics. Is there anything that I could do?\nWoman: Well, there are a variety of career paths you can take, let say becoming a teacher, a businessman, or continue to study higher to become a researcher.\nMan: I have a friend who also majors in Mathematics and he is now a businessman with his own company. I guess that would be my choice then. I am not suitable to become a teacher since I think I am a bit impatient."
},
{
  heading: "Question 9 of 17",
  audioUrl: "audio/question1_13/audio_de4_q9.mp3",
  question: "When is the assignment due?",
  options: ["on Friday", "on Saturday", "on Sunday"],
  correctAnswer: "on Saturday",
  transcript: "The assignment needs to be submitted soon, and it’s due on Saturday. Make sure to finish it by then to avoid any last-minute stress."
},
{
  heading: "Question 10 of 17",
  audioUrl: "audio/question1_13/audio_de4_q10.mp3",
  question: "What course did he take? / Listen to a student talking about his study. What course is the student going to take this year?",
  options: ["English", "Math", "Computer"],
  correctAnswer: "Computer",
  transcript: "Hi, I’m Ben, and I want to share a bit about my studies. Last term, I took English, math, and science. They were all interesting, but math was a bit tough for me. I worked hard, though, and got good results in the end. This year, I’m really excited because I’m going to take a computer course. I’ve always wanted to learn more about technology, so I’m looking forward to it!"
},
{
  heading: "Question 11 of 17",
  audioUrl: "audio/question1_13/audio_de4_q11.mp3",
  question: "What did she like best about the film?",
  options: ["the mountain scenes", "the action scenes", "the ending"],
  correctAnswer: "the mountain scenes",
  transcript: "\"The Fall\" is one of my favorite films, which I saw last weekend. The film was so terrific that it kept me on the edge of my seat all the time. I usually don’t like watching action movies as they feel the same and repetitive with those dull racing car scenes and meaningless fights that go on for hours. The mountain scenes were rather unusual. The sequencing fascinatingly brings out the most captivating parts for me. The ending, however, was a bit sad. Many people wish it was a happy ending."
},
{
  heading: "Question 12 of 17",
  audioUrl: "audio/question1_13/audio_de4_q12.mp3",
  question: "What elements of the film do they agree on?",
  options: ["the soundtrack", "the characters", "the ending"],
  correctAnswer: "the ending",
  transcript: "Man: \"I just finished watching that film we talked about. What did you think?\"\nWoman: \"I loved it! The ending was so satisfying!\"\nMan: \"Absolutely! It wrapped everything up perfectly. But I wasn’t really sold on the characters.\"\nWoman: \"Really? I thought the characters were great and well developed!\"\nMan: \"I felt they were a bit cliché, especially the main character. But I really love the soundtrack.\"\nWoman: \"Honestly, I didn’t like the music at all. It felt out of place.\""
},
{
  heading: "Question 13 of 17",
  audioUrl: "audio/question1_13/audio_de4_q13.mp3",
  question: "Why does Douglas call Kay?",
  options: ["to ask for a favor", "to say thank you", "to discuss ideas"],
  correctAnswer: "to say thank you",
  transcript: "Hi, Kay! It’s Douglas. I hope you are doing well. I wanted to call you today to say thank you for all your help with the project. Your advice was really valuable, and it made a big difference. I also wanted to ask for a favor. If you have some time, I would love to meet and discuss a few ideas I have. Let me know when you are free!"
},
{
  heading: "Question 1 of 17",
  audioUrl: "audio/question1_13/audio_de5_q1.mp3",
  question: "Listen to the director talking about sales of his company. How many copies of Freeze Frame magazine were sold?",
  options: ["Over 200,000 copies", "Over 300,000 copies", "Over 500,000 copies"],
  correctAnswer: "Over 300,000 copies",
  transcript: "I am excited to share the latest sales figures for our company. This month, we had a fantastic response to our magazine, Freeze Frame. I’m proud to announce that we sold over 300,000 copies! This is a big increase from last month. Many people are buying our magazine, and we are very grateful for your support! We hope to sell even more in the future."
},
{
  heading: "Question 2 of 17",
  audioUrl: "audio/question1_13/audio_de5_q2.mp3",
  question: "Where will they meet to take a bus to home? / Anna is calling her friend. Where will they meet?",
  options: ["At the bus stop", "At the park", "At the marketplace"],
  correctAnswer: "At the marketplace",
  transcript: "Hi, Mia! It’s Anna. I hope you’re having a great day! I wanted to see if we are still meeting at the marketplace later. I’m really excited because I want to try that new ice cream shop we talked about. I heard they have some amazing flavors! I’ll be there around 3 P.M. Let’s also check out the fresh fruits and vegetables. It’s always fun to shop together! See you soon!"
},
{
  heading: "Question 3 of 17",
  audioUrl: "audio/question1_13/audio_de5_q3.mp3",
  question: "What did he leave at a friend’s house? / What did the man lose?",
  options: ["Wallet", "Phone", "Glasses"],
  correctAnswer: "Glasses",
  transcript: "I was at my friend’s house the other day, and I just realized I left my glasses there. I didn’t notice until later, so now I’ll have to give them a call and ask if I can swing by to pick them up."
}
,
{
  heading: "Question 4 of 17",
  audioUrl: "audio/question1_13/audio_de5_q4.mp3",
  question: "Listen to the conversation. Who is she taking a photo of?",
  options: ["The girl's team", "The boys' team", "The coaches"],
  correctAnswer: "The girl's team",
  transcript: "I’m just about to take a photo of the girls’ team now. They’re all lined up and ready, smiling for the camera. I’ve already taken pictures of the boys earlier, so it’s their turn. The coaches will have their photo taken after this. The girls are excited because this picture will be in the school magazine. Alright, everyone, say “cheese”!"
},
{
  heading: "Question 5 of 17",
  audioUrl: "audio/question1_13/audio_de5_q5.mp3",
  question: "Listen to David talking about the conference. How long did he talk in the speech?",
  options: ["10 minutes", "15 minutes", "20 minutes"],
  correctAnswer: "15 minutes",
  transcript: "Hello everyone. Today, I want to tell you about the conference that took place last week. It was very interesting, and many people attended. I spoke about new ideas in business. My presentation wasn’t very long, but I had a lot to say. The other speakers talked about technology and education. After the talks, there were some questions from the audience. My speech lasted about 15 minutes, shorter than expected. However, the audience was very attentive, and I was happy to see that."
},
{
  heading: "Question 6 of 17",
  audioUrl: "audio/question1_13/audio_de5_q6.mp3",
  question: "A woman is talking about her family’s weekend. What does the family do most weekends?",
  options: ["Go for a walk", "Go to the beach", "Visit relatives"],
  correctAnswer: "Go for a walk",
  transcript: "Hello, everyone! I want to share what my family usually does on weekends. We love spending time together and often go for a walk in the park. It’s a nice way to relax and enjoy nature. We like to see the flowers and sometimes have a picnic. However, this weekend is different! My sister is visiting us, and we have planned a small family gathering at home. We will cook a big meal together and play some games. It will be fun to catch up and spend quality time as a family. I’m really looking forward to it!"
},
{
  heading: "Question 7 of 17",
  audioUrl: "audio/question1_13/audio_de5_q7.mp3",
  question: "A girl is calling her mother. Which dress does she want?",
  options: ["Short and blue", "Long and white", "Long and red"],
  correctAnswer: "Long and red",
  transcript: "I want to tell you about something special I just bought. It's a beautiful dress. The dress is long and red, just like a sunset! I feel so happy when I wear it. The fabric is soft, and it flows nicely when I walk. I can wear it to a party or a nice dinner. I love my new dress!"
},
{
  heading: "Question 8 of 17",
  audioUrl: "audio/question1_13/audio_de5_q8.mp3",
  question: "Soobin is talking about his favorite room. What is Soobin's favorite room?",
  options: ["Kitchen", "Living room", "Bathroom"],
  correctAnswer: "Bathroom",
  transcript: "You know, when I think about my favorite room in the house, it’s kind of hard to choose. I mean, I really enjoy the kitchen since I love cooking, and the living room is great for hanging out with friends. But honestly, I have to say the bathroom is my favorite! It might sound strange, but it’s the one place where I can truly relax."
},
{
  heading: "Question 9 of 17",
  audioUrl: "audio/question1_13/audio_de5_q9.mp3",
  question: "A woman is talking about her weekends. What did she do last week?",
  options: ["Went out with friends", "Stayed at home", "Visited a café"],
  correctAnswer: "Stayed at home",
  transcript: "My weekends are not always the same. This week has been busy, but I always look forward to my free time. Last weekend, I stayed at home and enjoyed some quiet moments with a good book. I also watched a few movies and cooked a nice dinner for myself. This weekend, I plan to go out with friends. We might visit a new café or go for a walk in the park. I love spending time with my friends and relaxing after a busy week!"
},
{
  heading: "Question 10 of 17",
  audioUrl: "audio/question1_13/audio_de5_q10.mp3",
  question: "Listen to a saleswoman talking about a property. Which room is the largest?",
  options: ["Living room", "Bedroom", "Kitchen"],
  correctAnswer: "Kitchen",
  transcript: "Hello, and welcome! Let me tell you about this lovely property. It has two spacious bedrooms, both with big windows that let in lots of natural light. The bathroom is modern, with a large shower and plenty of storage space. The living room is cozy, perfect for relaxing after a long day. But the kitchen is the star of the house—it’s the largest room, with lots of counter space for cooking, and it’s great for hosting dinners. You’ll love it here!"
},
{
  heading: "Question 11 of 17",
  audioUrl: "audio/question1_13/audio_de5_q11.mp3",
  question: "Two friends are talking about their trip. What will the weather be like?",
  options: ["Cold and wet", "Hot and sunny", "Mild and dry"],
  correctAnswer: "Cold and wet",
  transcript: "Friend 1: Hey, Sarah! Are you excited about our trip next week?\nFriend 2: Hi, Mike! Yes, I can’t wait! I’ve been looking forward to it for a long time.\nFriend 1: Me too! But I heard the weather is going to be cold and wet. We should prepare for that.\nFriend 2: Oh no! I hope it doesn’t rain too much. We need to pack our rain jackets and warm clothes.\nFriend 1: Definitely! I’ll also bring an umbrella just in case.\nFriend 2: Good idea! Let’s plan some fun indoor activities if the weather is bad.\nFriend 1: Yes! We can visit museums or try some local food. It will still be a great trip!"
},
{
  heading: "Question 12 of 17",
  audioUrl: "audio/question1_13/audio_de5_q12.mp3",
  question: "A customer is calling the hotline of a department store. Which number to press in order to buy a computer?",
  options: ["One", "Two", "Three"],
  correctAnswer: "Three",
  transcript: "Thank you for calling our customer service hotline.\nTo file a complaint about a recent purchase, please press 1.\nFor assistance with maintenance or repairs, press 2.\nIf you’d like a free consultation on buying a new computer, press 3. For all other inquiries, please stay on the line, and a representative will assist you shortly."
},
{
  heading: "Question 13 of 17",
  audioUrl: "audio/question1_13/audio_de5_q13.mp3",
  question: "How does she go to school?",
  options: ["She drives", "She takes the bus", "She walks"],
  correctAnswer: "She walks",
  transcript: "She prefers to stay active, so instead of taking a bus or driving, she walks to school every day. It’s a nice way for her to get some fresh air and clear her mind before starting the day."
}

,{
    heading: "Question 1 of 17",
    audioUrl: "audio/question1_13/audio_de6_q1.mp3",
    question: "Listen to the announcement. When does the train leave the station?",
    options: ["9:30", "9:00", "9:15"],
    correctAnswer: "9:15",
    transcript: "Good morning, everyone. This is an important announcement about a change in the train schedule. The train to London will now leave at 9:15, not 9:30 as planned. Please listen carefully to this information. If you are taking this train, please go to Platform 3 now. Thank you for your attention, and have a good day."
  },
  {
    heading: "Question 2 of 17",
    audioUrl: "audio/question1_13/audio_de6_q2.mp3",
    question: "Jana is talking to her friend. What does Jana’s sister look like?",
    options: ["Blonde", "Tall", "Short"],
    correctAnswer: "Short",
    transcript: "Hey, could you do me a favor? My sister is waiting outside, and I need you to give her my book. She’s the one who is short and has straight hair, so you can’t miss her. I also think she’s wearing a blue jacket today. If you see her, just hand it to her, and I’ll be so grateful. Thanks for helping me out!"
  },
  {
    heading: "Question 3 of 17",
    audioUrl: "audio/question1_13/audio_de6_q3.mp3",
    question: "What does her sister drink? / Linda is talking about what she likes to eat. What does she have for lunch?",
    options: ["Tea", "Juice", "Coffee"],
    correctAnswer: "Tea",
    transcript: "When it comes to lunch, I have a simple pleasure: I really enjoy a warm cup of tea. It’s my favorite drink to have while I eat. I find it calming, and it makes my meal feel special. Sometimes people ask me why I don’t choose coffee or juice, but for me, tea is just perfect. It warms my heart and gives me a moment to relax."
  },
  {
    heading: "Question 4 of 17",
    audioUrl: "audio/question1_13/audio_de6_q4.mp3",
    question: "A man is calling his wife. Where do the couple meet?",
    options: ["At the restaurant", "At the station", "Outside a shop"],
    correctAnswer: "Outside a shop",
    transcript: "Hi honey, it’s me! Just a reminder that the train leaves at 5, so you should arrive around 6 o’clock. I’ll be there to pick you up at the train station. Let’s meet outside the shop opposite the station. I can’t wait to have dinner together! See you soon!"
  },
  {
    heading: "Question 5 of 17",
    audioUrl: "audio/question1_13/audio_de6_q5.mp3",
    question: "A man is talking about his eating habit. What time does he usually eat?",
    options: ["8 o'clock", "7 o'clock", "5 o'clock"],
    correctAnswer: "7 o'clock",
    transcript: "I usually have dinner every evening. It's become a habit for me to enjoy a meal at that time after a long day. I find it’s the perfect time to unwind and relax. Plus, I love to spend time with my family during dinner. It’s our chance to catch up and enjoy some good food together. We usually have dinner at 7 o'clock and it is definitely my favorite meal of the day!"
  },
  {
    heading: "Question 6 of 17",
    audioUrl: "audio/question1_13/audio_de6_q6.mp3",
    question: "A professor is talking to his student. What does the professor ask his student to do?",
    options: ["Submit a report", "Speak at the conference", "Write an essay"],
    correctAnswer: "Speak at the conference",
    transcript: "Professor: Good morning, Alex. I’ve just finished reading your thesis, and I must say, it’s very well done. You’ve put a lot of effort into it.\nStudent: Thank you, Professor! I’m glad you liked it. I worked hard on it.\nProfessor: It shows. Your research is thorough, and your arguments are clear. I actually think you should consider presenting it at the upcoming student conference. Student: Wow, really? That sounds exciting! But, I’m not sure how that works. Could you tell me more about it? Professor: Of course. The conference is a great opportunity to share your findings with a wider audience. You would prepare a short presentation, around 10-15 minutes, and then answer some questions from the audience. It’s a good way to get feedback and gain experience speaking publicly."
  },
  {
    heading: "Question 7 of 17",
    audioUrl: "audio/question1_13/audio_de6_q7.mp3",
    question: "A man and a woman are talking about their old school days. What was the man's favorite thing about school?",
    options: ["Math classes", "History classes", "Sports"],
    correctAnswer: "History classes",
    transcript: "Woman: What do you remember most about our school days? Man: Honestly, I don’t remember much.\nWoman: I remember that I was terrible at math! It was my worst subject. Also, I remember that you were really good at history.\nMan: That’s right! I loved history. Actually, those classes were the ones I remember the most. All those stories and events were so fascinating!"
  },
  {
    heading: "Question 8 of 17",
    audioUrl: "audio/question1_13/audio_de6_q8.mp3",
    question: "Where did she go for the holiday? / Listen to the woman talking about her holiday plans. Where is she going next?",
    options: ["The east", "The north", "The south"],
    correctAnswer: "The south",
    transcript: "I can’t wait for my next holiday! This time, I’m heading to the south, where the mountains are. I’ve never been there before, but I’ve heard it’s beautiful. I’m looking forward to hiking and seeing the snow-covered peaks. It’s going to be a nice change from the city. Hopefully, the weather will be perfect!"
  },
  {
    heading: "Question 9 of 17",
    audioUrl: "audio/question1_13/audio_de6_q9.mp3",
    question: "Listen to a radio man talking about a new popular song. Which is the most attractive part of the song?",
    options: ["The melody", "The rhythm", "The words"],
    correctAnswer: "The words",
    transcript: "Good evening, listeners! Today, I want to talk about a new song that’s quickly becoming popular - You’re my everything. The tune is really catchy, and it makes you want to dance right away. The instruments used are simple but create a great rhythm. However, the most attractive part of all is the words. The lyrics tell a beautiful story that everyone can relate to. It’s no wonder so many people are loving this song! If you haven’t heard it yet, make sure to give it a listen soon!"
  },
  {
    heading: "Question 10 of 17",
    audioUrl: "audio/question1_13/audio_de6_q10.mp3",
    question: "A man is talking about the environment of the countryside. What is the main cause of poor air quality?",
    options: ["Factories", "Cars", "Fires from the countryside"],
    correctAnswer: "Fires from the countryside",
    transcript: "I really like living in the countryside. There are many green fields, tall trees, and small rivers. The air usually smells fresh and clean. But sometimes, the air becomes dirty and hard to breathe. Many people think cars on the roads make the air bad. Others say the smoke from big factories is the problem. These things can make the air dirty, but in the countryside, there’s a bigger issue. Farmers often start fires to clean their fields. They burn old plants and grass. These fires make a lot of smoke that goes into the air. It's sad because the smoke can hurt animals and make people sick. We need to find better ways to clean fields without using fire."
  },
  {
    heading: "Question 11 of 17",
    audioUrl: "audio/question1_13/audio_de6_q11.mp3",
    question: "A person calls a friend about his new car. What is the price of the small car?",
    options: ["3,250 pounds", "3,550 pounds", "3,000 pounds"],
    correctAnswer: "3,250 pounds",
    transcript: "Hey, I just wanted to tell you about my new car! It's a small one, perfect for my needs. I got it for a great price—only 3,250 pounds! Can you believe it? I was looking at bigger models too, but they were way more expensive, around 3,550 pounds or even 4,250 pounds. I'm really happy with my choice!"
  },
{
  heading: "Question 12 of 17",
  audioUrl: "audio/question1_13/audio_de6_q12.mp3",
  question: "Which room will they study in? / Where will the first lesson of computer science take place?",
  options: ["Room 301", "Room 101", "Room 203"],
  correctAnswer: "Room 301",
  transcript: "They’ve decided to meet up for their study session, and room 301 is where they’ll study. It’s a quiet space with plenty of desks, so it’s perfect for focusing and getting some work done."
},
{
  heading: "Question 13 of 17",
  audioUrl: "audio/question1_13/audio_de6_q13.mp3",
  question: "Stephanie is looking for a job taking care of children. How old is she?",
  options: ["21", "25", "30"],
  correctAnswer: "21",
  transcript: "Stephanie is eager to start a career and is looking for a job taking care of children. She’s 21 years old and believes this is the perfect age to begin working in childcare and gaining experience."
},
  {
    heading: "Question 1 of 17",
    audioUrl: "audio/question1_13/audio_de7_q1.mp3",
    question: "Listen to a voice message. How does Evan feel?",
    options: ["Happy", "Tired", "Sick"],
    correctAnswer: "Sick",
    transcript: "Hi, Evan! This is Mom. I just wanted to leave you a message to check on you. I heard you’re not feeling well, and I’m really worried about you. Make sure you’re resting and drinking plenty of fluids. Do you need anything? I can bring you some soup or your favorite snacks. Please take care of yourself! I love you and hope you feel better soon. Call me back when you can!"
  },
  {
    heading: "Question 2 of 17",
    audioUrl: "audio/question1_13/audio_de7_q2.mp3",
    question: "The train was delayed. What time does the train leave? / Listen to a man talking about their train journey. What time did the train depart?",
    options: ["9:00", "9:15", "9:30"],
    correctAnswer: "9:30",
    transcript: "This morning was rough at the station. I thought the train would leave around 9:00, but I heard it would be delayed. It finally departed at 9:30, though some people said it might be even later. Usually, if it’s delayed, it could leave as late as 10:00. I’m glad it didn’t take that long today!"
  },
  {
    heading: "Question 3 of 17",
    audioUrl: "audio/question1_13/audio_de7_q3.mp3",
    question: "A man and woman are discussing their plans for the evening. What do the man and woman decide to do in the evening?",
    options: ["Go to the movies", "Make plans later", "Stay at home"],
    correctAnswer: "Make plans later",
    transcript: "I’m thinking about what to do this evening. I could go to the movies, but I’m not sure if that’s the best idea. I might prefer to stay at home and relax. However, I want to discuss this with my friend first. It might be better to plan when we can decide together. I believe keeping our options open is a good idea. So for now, I’ll wait and see what we want to do."
  },
  {
    heading: "Question 4 of 17",
    audioUrl: "audio/question1_13/audio_de7_q4.mp3",
    question: "A woman is talking about her holiday plan. Where is she going on holidays?",
    options: ["The beach", "The mountains", "The city"],
    correctAnswer: "The mountains",
    transcript: "I'm so excited about my upcoming holiday! I've been thinking about where to go for a long time. Some of my friends suggested going to a nice beach. Others talked about exploring interesting caves. But I've made up my mind - I'm going to the mountains! The mountains are so beautiful with their green forests. I can't wait to breathe the fresh air up there. They are perfect for relaxing and enjoying nature."
  },
  {
    heading: "Question 5 of 17",
    audioUrl: "audio/question1_13/audio_de7_q5.mp3",
    question: "A tour guide is talking about the group's traveling schedule. Where will the group wait for the bus?",
    options: ["By the hotel's main entrance", "In the lobby", "At the train station"],
    correctAnswer: "By the hotel's main entrance",
    transcript: "Good morning, everyone! Let me walk you through today’s schedule. First, we’ll start the day at 9:00 AM with a visit to the City Museum, where you’ll have about two hours to explore the exhibits. After that, at 12:30 PM, we’ll head to the Central Park for a picnic lunch and a relaxing stroll. Around 3:00 PM, we’ll make our way to the Old Town Market, where you can shop for souvenirs and enjoy some local treats. We’ll wrap up our activities by 6:00 PM, giving you a little free time back at the hotel. Finally, at 8:00 PM, we’ll meet at the hotel’s main entrance to catch the bus to the airport. Make sure to be on time, and we’ll head to the airport together!"
  },
  {
    heading: "Question 6 of 17",
    audioUrl: "audio/question1_13/audio_de7_q6.mp3",
    question: "Listen to a tour guide introducing the tour. Where will tea be served?",
    options: ["In the park", "The hotel", "The river boat"],
    correctAnswer: "The river boat",
    transcript: "Welcome to our scenic tour! I’m excited to show you this beautiful area. We’ll start along the coast to enjoy the amazing ocean views. Then, we’ll go up to the mountain looking for some breathtaking views. After that, we’ll head down to the harbor and take a relaxing riverboat cruise. While on the boat, you can enjoy afternoon tea and see the charming riverside scenery. After the boat trip, we’ll end the day with a walk on the beach. Don’t forget your camera—there will be lots of chances for great photos!"
  },
  {
    heading: "Question 7 of 17",
    audioUrl: "audio/question1_13/audio_de7_q7.mp3",
    question: "A man is talking about the city concert. How will the concert end?",
    options: ["With a fireworks display", "With a famous singer", "With the city's favorite group"],
    correctAnswer: "With the city's favorite group",
    transcript: "I can’t wait for the concert this weekend! It’s going to be such an exciting event. The highlight ending will be the city’s favorite group performing on stage. I’ve heard they have some amazing songs planned. There will also be a fireworks performance to celebrate before that, and I’m sure the orchestra will do some singing as well. It’s going to be a night to remember!"
  },
  {
    heading: "Question 8 of 17",
    audioUrl: "audio/question1_13/audio_de7_q8.mp3",
    question: "What is the phone number of the store? (0080...) / A man calls the teleshop. What is the teleshop number?",
    options: ["201030", "102030", "301020"],
    correctAnswer: "201030",
    transcript: "Hello, I need to call the teleshop for some information. My phone is not working. Can you remind me of the number? I think it starts with 20 or 10 or 30 something. Is it 102030 or 301020? No, wait! I remember now—it’s 201030! I really need to order that new gadget. Thanks for your help!"
  },
  {
    heading: "Question 9 of 17",
    audioUrl: "audio/question1_13/audio_de7_q9.mp3",
    question: "Alice is calling her friend. What did she lose?",
    options: ["Book", "Phone", "Laptop"],
    correctAnswer: "Phone",
    transcript: "Hey, it's Alice. I think I might have left something at your house. I had my book with me. It's in my backpack. My laptop’s here too. But I can’t find my phone anywhere! Did you happen to see it after I left? I think I might have left it on the table."
  },
  {
    heading: "Question 10 of 17",
    audioUrl: "audio/question1_13/audio_de7_q10.mp3",
    question: "What time should they meet at the library? What time do men and women meet? / Two people are talking about meeting for dinner. What time does Ahmed meet Rose?",
    options: ["8:00 PM", "Quarter to eight", "7:30 PM"],
    correctAnswer: "Quarter to eight",
    transcript: "Hi Rose. It’s Ahmed, what time should we meet for dinner tonight? How about we meet at quarter past seven instead? Oh wait, I just remembered—I have a meeting ending at a half past seven. Let’s make it quarter to eight instead so we could have 15 minutes to travel. Does that work for you?"
  },
  {
    heading: "Question 11 of 17",
    audioUrl: "audio/question1_13/audio_de7_q11.mp3",
    question: "A woman is talking about her family’s holidays. What did the family do last year?",
    options: ["Camping", "Beach trip", "Road trip"],
    correctAnswer: "Camping",
    transcript: "This year, my family and I are going to the beach for our holiday. I’m really excited because I love swimming and relaxing by the sea. Last year, we went camping on the mountain, which was fun, but this time we wanted to do something different. We’re staying in a small house near the beach, and I can’t wait to watch the sunset every evening. My kids are excited too; they want to build sandcastles and play in the water. I think it’s going to be a great holiday!"
  },
  {
    heading: "Question 12 of 17",
    audioUrl: "audio/question1_13/audio_de7_q12.mp3",
    question: "The woman is walking into a local store. How much are the cleaning products?",
    options: ["Two pounds", "One pound fifty", "Three pounds"],
    correctAnswer: "One pound fifty",
    transcript: "As I walk into the store, I notice that the cleaning products are on sale. They’re usually a bit more expensive, but today they’re only one pound fifty. I was expecting to pay three pounds fifty, so it’s a nice surprise. I grab a few items since I know I’ll need them later. It’s a small store, but the deals are always good here. Time to check out!"
  },
  {
    heading: "Question 13 of 17",
    audioUrl: "audio/question1_13/audio_de7_q13.mp3",
    question: "What advice do they need for decorating their living room? / Mary is talking to her friend about her new home. What does she ask her friend about?",
    options: ["Where to buy a new table", "Where to buy a sofa", "Where to buy curtains"],
    correctAnswer: "Where to buy a new table",
    transcript: "Hi Ivan. It’s Mary. I just moved into my new house. I want something nice for the dining area. I also saw a cute coffee shop nearby, and I’m thinking about getting a mirror for the living room. I need to get some furniture, especially a coffee table. Do you know where to buy one?"
  },{
    heading: "Question 1 of 17",
    audioUrl: "audio/question1_13/audio_de8_q1.mp3",
    question: "Listen to a weather forecast. Where will the weather be best?",
    options: ["In the west", "In the south", "In the east"],
    correctAnswer: "In the east",
    transcript: "Good evening, everyone! Here’s your weather update for today. Unfortunately, the weather down south isn’t looking too great—strong winds and heavy rain are expected throughout the day, so it might be best to avoid any outdoor plans in that region. On a brighter note, the west will have decent weather with clear skies and mild temperatures, making it a nice option if you’re looking for some fresh air. However, the best weather can be found in the east, where we’re expecting sunny skies and perfect temperatures for any outdoor activities. If you’re planning to travel, I’d highly recommend heading east for the best conditions. Safe travels, and make sure to check local forecasts for any changes!"
  },
  {
    heading: "Question 2 of 17",
    audioUrl: "audio/question1_13/audio_de8_q2.mp3",
    question: "Listen to the announcement from a travel agent representative. Why is the air travel cancelled?",
    options: ["Staff shortage", "Poor weather conditions", "Technical issues"],
    correctAnswer: "Poor weather conditions",
    transcript: "Good afternoon, everyone. I’d like to start by saying that we’re doing everything we can to assist you with your travel plans today. Unfortunately, due to poor weather conditions, our flight has been cancelled. I know this isn’t the news you were hoping for, but your safety comes first. That said, we do have alternatives available. The train services are still running, and buses are also operating, so you have options to continue your journey. If you’d like to explore these alternatives, please come see us, and we’ll help with the arrangements. Thank you for your patience and understanding."
  },
  {
    heading: "Question 3 of 17",
    audioUrl: "audio/question1_13/audio_de8_q3.mp3",
    question: "Which platform do you need to take if you want to travel to Edinburgh? / Listen to an announcement. Which platform to wait for the train?",
    options: ["Platform One", "Platform Two", "Platform Three"],
    correctAnswer: "Platform Two",
    transcript: "Attention, all passengers! The 10:30 train to Greenfield is now arriving at Platform 2. Please make sure you have your ticket ready before boarding. This train will stop at River Station and Oakwood before reaching its final destination. Be careful when stepping onto the train, and mind the gap. For your safety, please keep your belongings close and follow all instructions from the staff. Thank you for traveling with us today!"
  },
  {
    heading: "Question 4 of 17",
    audioUrl: "audio/question1_13/audio_de8_q4.mp3",
    question: "When will Anna meet her friend? / A man is calling his friend, Maria. When will he see her?",
    options: ["10am on Saturday", "8pm on Sunday", "9am on Sunday"],
    correctAnswer: "9am on Sunday",
    transcript: "Hey Maria, it's me! I wanted to give you a quick call to let you know that I'll be visiting your town this weekend. I’ve got a few things planned—going to check out the local market and maybe explore some of the nearby parks. But the best part? I’ll finally get to see you! I’ll be at your place at 9 a.m. on Sunday, so we can catch up. Can’t wait to hang out!"
  },
{
  heading: "Question 5 of 17",
  audioUrl: "audio/question1_13/audio_de8_q5.mp3",
  question: "How long does it take to get to the station?",
  options: ["20 minutes", "15 minutes", "25 minutes"],
  correctAnswer: "20 minutes",
  transcript: "It usually takes about 20 minutes to get to the station, depending on traffic. It’s not too far, so it's a convenient trip to catch the train."
},
  {
    heading: "Question 6 of 17",
    audioUrl: "audio/question1_13/audio_de8_q6.mp3",
    question: "Why was the trip to the museum delayed? / A tour guide is making an announcement. Why was the tour canceled?",
    options: ["Not enough people", "Bad weather", "Transportation issue"],
    correctAnswer: "Not enough people",
    transcript: "Hello everyone, I hope you’re all having a good day. I’m your tour guide, and I was really looking forward to showing you around the city today. However, there is a small issue. The weather is perfect, and transportation is not a problem; everything is ready for our trip. Certainly, these are not the problems. Unfortunately, we don’t have enough people for the tour today. Because of this, we have to cancel the tour. I’m really sorry for the inconvenience, and I hope we can see you next time!"
  },
  {
    heading: "Question 7 of 17",
    audioUrl: "audio/question1_13/audio_de8_q7.mp3",
    question: "A man is talking about his trip. What did he enjoy last year?",
    options: ["Hiking", "Cycling", "Swimming"],
    correctAnswer: "Cycling",
    transcript: "Last year, I had an amazing trip! One of the best things I enjoyed was going cycling in the countryside. The views were stunning, and it felt great to be outdoors. I also went for a walk a few times, but cycling really allowed me to explore more areas. We even had a picnic one day, which was lovely too!"
  },
  {
    heading: "Question 8 of 17",
    audioUrl: "audio/question1_13/audio_de8_q8.mp3",
    question: "Where is the girl's office? / Listen to a tour guide. Where is the office located?",
    options: ["Opposite the hotel", "Next to the park", "In the shopping mall"],
    correctAnswer: "Opposite the hotel",
    transcript: "Hello, everyone! Welcome to our tour! My name is Sam, and I’m your tour guide today. I’m excited to show you around this beautiful city. We will visit many interesting places, including parks, museums, and local markets. As we walk, I’ll share fun facts and stories about each location. If you have any questions, feel free to ask! Now, before we start, I want to let you know that our office is opposite the hotel where you are staying. If you need any help or information during your stay, you can always come to us. Let’s begin our adventure and enjoy exploring together!"
  },
  {
    heading: "Question 9 of 17",
    audioUrl: "audio/question1_13/audio_de8_q9.mp3",
    question: "A man is talking about how he goes to work. Why does he prefer traveling by train?",
    options: ["It’s cheaper", "It’s comfortable", "Practical"],
    correctAnswer: "Practical",
    transcript: "I’ve been thinking about how to get to work every day. At first, I considered driving, but the traffic is always really bad in the morning. Then, I thought about riding my bike, but it’s too far, and I’d be tired before I even start my day. The bus is another option, but it’s often late. After thinking about all the choices, I decided to travel by train. It’s practical because it’s on time, and I can relax during the trip. Plus, the station is close to my office!"
  },
  {
    heading: "Question 10 of 17",
    audioUrl: "audio/question1_13/audio_de8_q10.mp3",
    question: "A man is calling his friend to meet for coffee. Where is the coffee shop located?",
    options: ["Opposite the gift shop", "In the shopping center", "Next to the bookstore"],
    correctAnswer: "Opposite the gift shop",
    transcript: "Hey, are you free for coffee later? I found a great new place in town. It’s not hard to find at all. You know the big gift shop on Main Street? Well, the coffee shop is right across from it. Just look for the gift shop, then cross the street. You’ll see the coffee shop right there, opposite the gift shop. They have amazing pastries too. Let’s meet there at 3 PM, okay?"
  },
  {
    heading: "Question 11 of 17",
    audioUrl: "audio/question1_13/audio_de8_q11.mp3",
    question: "Tom is calling his mom. Who is visiting Tom this weekend?",
    options: ["His aunt and uncle", "His sister and her children", "His cousin"],
    correctAnswer: "His sister and her children",
    transcript: "Hey, mom! Are you coming over this weekend? I’d really love to see you! What? You’re busy? That’s too bad. But at least my sister is visiting with her kids. I’m excited about that! Is uncle coming with her too? Oh, he’s not? That’s a shame. Hopefully, you can all get together next time!"
  },
  {
    heading: "Question 12 of 17",
    audioUrl: "audio/question1_13/audio_de8_q12.mp3",
    question: "Who does she live with? / A woman is talking about her vacation. What is the relationship between Lisa and the speaker?",
    options: ["Best friends", "Cousins", "Sisters"],
    correctAnswer: "Best friends",
    transcript: "I just got back from an amazing vacation with Lisa! We’ve been friends for years, and this trip really brought us closer. I can’t imagine going with anyone else. Some people think we look like mother and daughter because we care for each other so much, but it’s really just best friends hanging out!"
  },
  {
    heading: "Question 13 of 17",
    audioUrl: "audio/question1_13/audio_de8_q13.mp3",
    question: "A woman shares her job with her friend. Why does she want to become a writer?",
    options: ["Help people", "Become famous", "Earn money"],
    correctAnswer: "Help people",
    transcript: "I have been thinking a lot about my job, and I really want to become a writer. It’s not just about earning a lot of money or becoming famous for me. My main reason is to help people improve themselves. I believe stories can inspire and support others during hard times. I hope my writing can make a difference in their lives, and that’s why I’m choosing this path."
  },{
    heading: "Question 1 of 17",
    audioUrl: "audio/question1_13/audio_de9_q1.mp3",
    question: "A man is talking about his jobs. What does the man want to do next?",
    options: ["Become a history teacher", "Become a writer", "Become a chef"],
    correctAnswer: "Become a writer",
    transcript: "I used to be a chef, and I loved cooking different dishes for people. It was exciting to create new recipes, but it was also very hard work. After that, I became a history teacher, where I enjoyed sharing stories about the past with my students. Teaching was rewarding, but I wanted to try something new. Now, I want to become a writer! I have many ideas for stories in my mind, and I can’t wait to put them on paper."
  },
  {
    heading: "Question 2 of 17",
    audioUrl: "audio/question1_13/audio_de9_q2.mp3",
    question: "Lucy is calling her brother. What does the brother have to drink?",
    options: ["Tea", "Water", "Coffee"],
    correctAnswer: "Water",
    transcript: "Hi, Jake! It’s Lucy. I just wanted to check in on you. How are you doing? I know you’ve been busy with work and school lately. I’m worried that you’re not drinking enough water. Staying hydrated is really important, especially when you’re working hard! Remember to keep a bottle with you. Anyway, I hope you’re taking care of yourself. Let’s catch up soon!"
  },
{
  heading: "Question 3 of 17",
  audioUrl: "audio/question1_13/audio_de9_q3.mp3",
  question: "What will she do?",
  options: ["Go to work", "Go for a drive", "Stay home"],
  correctAnswer: "Go for a drive",
  transcript: "She’s planning to spend some time relaxing, so she will go for a drive. It’s a great way for her to unwind, enjoy some fresh air, and clear her mind."
},
  {
    heading: "Question 4 of 17",
    audioUrl: "audio/question1_13/audio_de9_q4.mp3",
    question: "Lucy is calling her friend. What is her sister like?",
    options: ["She is taller than Lucy", "They have similar characters", "She is very different from Lucy"],
    correctAnswer: "They have similar characters",
    transcript: "Hi Emma, it’s Lucy. I hope you’re doing well! I need a small favor from you today. Could you pick up my sister after school? She’ll be standing at the school gate at 3 P.M. She looks just like me, so you’ll recognize her easily. I have a meeting, and I won’t make it in time. Thank you so much! Let me know if that’s okay with you."
  },
  {
    heading: "Question 5 of 17",
    audioUrl: "audio/question1_13/audio_de9_q5.mp3",
    question: "A man and a woman are going shopping. What does he buy in the store?",
    options: ["A T-shirt", "A suit for the office", "A hat"],
    correctAnswer: "A suit for the office",
    transcript: "Man: Hey, Sarah! Let’s check out this store. I need something for work. Woman: Sure, John. How about this T-shirt? It looks nice. Man: Hmm, it’s cool, but I don’t really need a T-shirt right now. I’m actually looking for something more formal. Woman: Oh, okay. What about this hat? It would look great on you. Man: Haha, maybe, but not today. I really need a suit for the office. Look, this one seems perfect. Woman: That’s a good choice! It’s smart and looks comfortable. Man: Great! I’ll buy the suit. Let’s keep looking for other things we might need."
  },
  {
    heading: "Question 6 of 17",
    audioUrl: "audio/question1_13/audio_de9_q6.mp3",
    question: "A tour guide is talking about birds' behaviors. What do birds do in the winter?",
    options: ["They stay together in groups for protection", "They fly south", "They hunt for food"],
    correctAnswer: "They stay together in groups for protection",
    transcript: "Welcome, everyone! Today, we'll explore some interesting bird behaviors throughout the year. In spring, birds are busy building nests and finding mates, preparing for the arrival of their young. During summer, they're focused on feeding their chicks and teaching them how to fly. As autumn approaches, many birds begin to migrate, gathering food and energy for their long trips south. In winter, birds tend to stay together in groups for protection from predators. Each season brings out different survival strategies in these amazing creatures!"
  },
{
  heading: "Question 7 of 17",
  audioUrl: "audio/question1_13/audio_de9_q7.mp3",
  question: "How much are the eggs?",
  options: ["2 pounds", "3 pounds", "1.50 pounds"],
  correctAnswer: "1.50 pounds",
  transcript: "The eggs are a bit more expensive than usual, but they cost 1.50 pounds. They’re from a local farm, so the quality is great."
},
{
  heading: "Question 8 of 17",
  audioUrl: "audio/question1_13/audio_de9_q8.mp3",
  question: "A woman is calling her husband. What time is lunch ready?",
  options: ["3pm", "1pm", "2pm"],
  correctAnswer: "2pm",
  transcript: "Hi, just wanted to let you know that lunch will be ready at 2pm. I’ve just finished cooking, and everything is set. So, whenever you’re ready, we can sit down and eat."
},
{
  heading: "Question 9 of 17",
  audioUrl: "audio/question1_13/audio_de9_q9.mp3",
  question: "What time is the meeting?",
  options: ["4pm", "3pm", "2pm"],
  correctAnswer: "2pm",
  transcript: "The meeting was originally scheduled for 1:30pm, but it’s been moved to 2pm now. I’ll adjust my schedule to make sure I’m ready for the new time."
},
  {
    heading: "Question 10 of 17",
    audioUrl: "audio/question1_13/audio_de9_q10.mp3",
    question: "A man is giving directions to a friend about how to get to the football club. The football club is near?",
    options: ["A river", "A park", "A shopping mall"],
    correctAnswer: "A park",
    transcript: "To get to the football club, you just need to head down Main Street. Go past the grocery store on your left, and then take a right at the traffic light. You’ll see the library on your right; just keep going straight. The football club is right after that, next to the park. It’s pretty easy to find!"
  },
  {
    heading: "Question 11 of 17",
    audioUrl: "audio/question1_13/audio_de9_q11.mp3",
    question: "A boy is talking about his cat. What does he feed the cat?",
    options: ["Mice", "Fish", "Birds"],
    correctAnswer: "Fish",
    transcript: "Hi, I’m Alex, and I want to tell you about my cat, Whiskers. He’s really friendly and loves to play. Whiskers is a bit picky about food, though. He doesn’t like eating mice or insects, which is funny for a cat! But he absolutely loves fish. Every time I give him some, he gets so excited! He also enjoys sleeping by the window and watching the birds outside. He’s the best pet ever!"
  },
  {
    heading: "Question 12 of 17",
    audioUrl: "audio/question1_13/audio_de9_q12.mp3",
    question: "Jack is phoning his mom. What does Jack need to buy for his sister?",
    options: ["Clothes", "Chocolates", "A toy"],
    correctAnswer: "Chocolates",
    transcript: "Hi, Mom! It’s Jack. I hope you’re doing well! I’m out shopping, and I need to buy some chocolates for my sister’s birthday. She loves dark chocolate, so I want to get her some nice ones. By the way, do you need anything while I’m here? I can pick up some milk or fruit if you want. Let me know! I’ll talk to you soon!"
  },
  {
    heading: "Question 13 of 17",
    audioUrl: "audio/question1_13/audio_de9_q13.mp3",
    question: "Why does she like the manager?",
    options: ["He was always strict", "He taught her a lot", "He was very friendly"],
    correctAnswer: "He taught her a lot",
    transcript: "You know, I want to talk about my old manager, George. He was a very smart man, and he taught me a lot about work. I remember the first time I joined the team; he showed me how to do my job well. George was not very strict, but he had high expectations. I learned to be better because of him. Overall, I am thankful for his guidance and support during my early days."
  },{
    heading: "Question 1 of 13",
    audioUrl: "audio/question1_13/audio_de10_q1.mp3",
    question: "A woman is talking about her plan for the holiday. What will she do during the holiday?",
    options: ["Go for a run", "Go for a bike ride", "Go for a walk"],
    correctAnswer: "Go for a walk",
    transcript: "I’m really excited about the holiday! I think I’ll go for a walk every day to enjoy the fresh air. I also considered going for a run, but walking sounds more relaxing. Maybe I’ll even try to go for a bike ride later. It’ll be nice to spend some time outdoors!"
  },
{
  heading: "Question 2 of 13",
  audioUrl: "audio/question1_13/audio_de10_q2.mp3",
  question: "Two colleagues talk about meeting. When do they want to meet?",
  options: ["Monday", "Wednesday", "Tuesday"],
  correctAnswer: "Tuesday",
  transcript: "Colleague 1: 'Hey, we’ve been meaning to sit down and discuss the project. When would be a good time for you to meet?' \nColleague 2: 'I’ve got a few things lined up this week, but Tuesday should work for me. I have some free time in the afternoon.' \nColleague 1: 'Tuesday afternoon sounds great! I’ll clear my schedule as well. Let’s aim for around 2pm?' \nColleague 2: 'Perfect, I’ll make a note of it. See you on Tuesday at 2pm!' \nColleague 1: 'Looking forward to it. See you then!'"
},
  {
    heading: "Question 3 of 13",
    audioUrl: "audio/question1_13/audio_de10_q3.mp3",
    question: "A woman is talking about her job. How is being a writer different from other jobs?",
    options: ["She works 9 to 5", "She works at irregular times", "She works at a desk all day"],
    correctAnswer: "She works at irregular times",
    transcript: "Hello, my name is Sarah, and I’m an artist. I paint pictures of nature, like trees, rivers, and animals. I love using bright colors to make my art happy and full of life. My job is very fun, but I work irregular hours, sometimes late at night or on weekends. When I have inspiration, I paint for many hours without a break. I sell my paintings in galleries and online, and it makes me really happy when people like my work. Creating art is the best job for me!"
  },
  {
    heading: "Question 4 of 13",
    audioUrl: "audio/question1_13/audio_de10_q4.mp3",
    question: "A woman is talking about shopping places. Where is she going to go shopping?",
    options: ["At the mall", "At a boutique", "At a new shopping center"],
    correctAnswer: "At a new shopping center",
    transcript: "I love shopping, and there are so many places to choose from in our city. The downtown market is great for fresh fruit and vegetables, and there are lots of small shops there too. If I need clothes, I usually go to the mall, but it can get very crowded on weekends. There’s also a little boutique near my house with some unique items, but it's a bit expensive. This time, I’m excited to check out the new shopping center that just opened. I’ve heard it has everything I need in one place!"
  },
  {
    heading: "Question 5 of 13",
    audioUrl: "audio/question1_13/audio_de10_q5.mp3",
    question: "Jorge is calling his friend about their plan for the weekend. What time does the football match start?",
    options: ["3pm", "5pm", "1pm"],
    correctAnswer: "1pm",
    transcript: "Hey, it’s Jorge! I want to check in about our plans for the weekend. I’ll be busy in the morning, but how about we meet at 11:30 for lunch? The football match starts at 1 p.m., and since it takes about 30 minutes to drive there, we’ll have just enough time to grab something to eat. After the match, we can head back to my place and play some video games. It’s going to be a fun day! Let me know if that works for you. Can’t wait!"
  },
  {
    heading: "Question 6 of 13",
    audioUrl: "audio/question1_13/audio_de10_q6.mp3",
    question: "What does her sister drink? / Linda is talking about what she likes to eat. What does she have for lunch?",
    options: ["Coffee", "Juice", "Tea"],
    correctAnswer: "Tea",
    transcript: "When it comes to lunch, I have a simple pleasure: I really enjoy a warm cup of tea. It’s my favorite drink to have while I eat. I find it calming, and it makes my meal feel special. Sometimes people ask me why I don’t choose coffee or juice, but for me, tea is just perfect. It warms my heart and gives me a moment to relax."
  },
  {
    heading: "Question 7 of 13",
    audioUrl: "audio/question1_13/audio_de10_q7.mp3",
    question: "A man is describing his school. What color is the teacher's building?",
    options: ["Green", "Blue", "White"],
    correctAnswer: "White",
    transcript: "You know, I’ve been spending a lot of time at school lately. I really like our campus! One thing that stands out is the teacher's building. It’s really nice and has a bright, white color. I love how it looks against the blue sky. It’s kind of a central point of the school, and it feels welcoming. I think it adds a lot to the overall atmosphere here."
  },
{
  heading: "Question 8 of 13",
  audioUrl: "audio/question1_13/audio_de10_q8.mp3",
  question: "How much are the eggs?",
  options: ["3.50 pounds", "1.50 pounds", "2.50 pounds"],
  correctAnswer: "2.50 pounds",
  transcript: "Hey, I just saw that the eggs are on sale today! Normally, they’re 2.50 pounds, but right now, they’re discounted. It's a great deal, so I decided to pick up a few extra cartons. If you're planning to buy eggs, today is the perfect day!"
},
{
  heading: "Question 9 of 13",
  audioUrl: "audio/question1_13/audio_de10_q9.mp3",
  question: "What is the way to exercise? / What is she going to do? / What does she do on her holidays?",
  options: ["Cycling", "Running", "Walking"],
  correctAnswer: "Walking",
  transcript: "One of the easiest and most accessible ways to exercise is by walking. It’s simple, doesn't require any special equipment, and you can do it anywhere—whether it’s around your neighborhood or at a park."
},
  {
    heading: "Question 10 of 13",
    audioUrl: "audio/question1_13/audio_de10_q10.mp3",
    question: "Two friends are talking with each other. What did they both buy?",
    options: ["Books", "Clothes", "Shoes"],
    correctAnswer: "Clothes",
    transcript: "Man: I just got back from shopping. I found a great jacket and also picked up some tea.\nWoman: Nice! What kind of jacket did you get?\nMan: It’s a stylish leather jacket. I think it’ll be perfect for the fall. What about you?\nWoman: I bought a cozy sweater and also grabbed a delicious cake.\nMan: Sounds great! Those are perfect for this weather.\nWoman: Thanks! I’m excited to try the cake later. Looks like we both made good choices today!\nMan: Absolutely! New clothes and tasty treats for the chilly days ahead!"
  },
  {
    heading: "Question 11 of 13",
    audioUrl: "audio/question1_13/audio_de10_q11.mp3",
    question: "James is talking about his family members. In what way does his mother and his aunt alike?",
    options: ["They had similar hair styles", "They had similar eye colors", "They were thin"],
    correctAnswer: "They were thin",
    transcript: "This picture is of my aunt and my mom. Many people say they look alike. I find it funny, though, because when they were teenagers, my mom had long hair, while my aunt had short hair. They were both equally thin back then, but their eyes were different. My mom has lovely brown eyes, and my aunt has strikingly beautiful blue eyes. Even with their differences, they share a special bond that makes them so similar in spirit."
  },
  {
    heading: "Question 12 of 13",
    audioUrl: "audio/question1_13/audio_de10_q12.mp3",
    question: "A receptionist is checking the client list of a clinic. How many American clients are there?",
    options: ["Two", "One", "Three"],
    correctAnswer: "One",
    transcript: "Alright, let me go over the list of clients for today. We’ve got Carl, Harry, and Matthew, all from the UK. Leslie, who’s from the US, is also scheduled for an appointment. Then, we have two more clients coming in from France. So that gives us one American, a few from the UK, and the rest from France. It looks like everything’s in order!"
  },
  {
    heading: "Question 13 of 13",
    audioUrl: "audio/question1_13/audio_de10_q13.mp3",
    question: "How many weeks have they been in India?",
    options: ["2 weeks", "4 weeks", "3 weeks"],
    correctAnswer: "2 weeks",
  transcript: "They traveled to India for a short trip, and they spent two weeks there. During that time, they explored different cities, experienced the local culture, and visited some famous landmarks. It was a quick but memorable visit."
  }, {
    heading: "Question 1 of 13",
    audioUrl: "audio/question1_13/audio_de11_q1.mp3",
    question: "Listen to Sarah talking about her hobby. What does she do in her free time?",
    options: ["Go to the beach and swim", "Go to theater and play sports", "Watch TV and read books"],
    correctAnswer: "Go to theater and play sports",
    transcript: "In my free time, I love to go to the theater. There is something magical about watching a live performance. It makes me feel alive and happy. I also enjoy playing sports with my friends. We have so much fun together, whether it’s soccer or basketball. These activities help me relax and make my days brighter."
  },
{
  heading: "Question 2 of 13",
  audioUrl: "audio/question1_13/audio_de11_q2.mp3",
  question: "Where do they go when they travel to India?",
  options: ["Go to the mountains", "Go to the park", "Go to the beach"],
  correctAnswer: "Go to the park",
  transcript: "When they travel to India, they explore many different places, and one of the spots they always visit is the park. It’s a great place to relax, enjoy the local scenery, and experience the vibrant culture."
},
  {
    heading: "Question 3 of 13",
    audioUrl: "audio/question1_13/audio_de11_q3.mp3",
    question: "A tour guide is talking about the vacation list of activities. What can people do in the afternoon?",
    options: ["Visit museums", "Play golf", "Go swimming"],
    correctAnswer: "Play golf",
    transcript: "Now, let’s talk about the afternoon activities. For those interested, we have a golf course available where you can spend your afternoon playing golf. If golf isn’t your thing, don’t worry, there’s also a dance class scheduled in the evening. And of course, you can always go shopping in the nearby stores later on but bear in mind, the store will only open in the morning."
  },
  {
    heading: "Question 4 of 13",
    audioUrl: "audio/question1_13/audio_de11_q4.mp3",
    question: "Where does she walk every night? / Listen to Anna talking about her routine. Where does Anna go for a walk every morning?",
    options: ["The park", "The college", "The beach"],
    correctAnswer: "The college",
    transcript: "I really like to walk in the mornings. Every day, I take a nice walk before my classes start. I could walk around my neighborhood, but I prefer going to college. It’s a great way for me to get a bit of exercise and clear my mind before the day begins. The campus is so peaceful in the mornings."
  },
  {
    heading: "Question 5 of 13",
    audioUrl: "audio/question1_13/audio_de11_q5.mp3",
    question: "A woman is discussing with her team. How many chairs does she need?",
    options: ["25", "15", "20"],
    correctAnswer: "20",
    transcript: "Hi everyone! As we get ready for the meeting, I need to confirm how many seats we need. I’ve counted 12 people on the list, so I was thinking of setting up 15 chairs. Oh, wait! I just remembered there might be a few guests joining us. Let’s go ahead and set up 20 chairs to be safe. Does that work for everyone?"
  },
  {
    heading: "Question 6 of 13",
    audioUrl: "audio/question1_13/audio_de11_q6.mp3",
    question: "Listen to a girl calling the cafe. Where did she ask the coffee shop to look for her lost item?",
    options: ["On the counter", "Near the door", "In the corner"],
    correctAnswer: "In the corner",
    transcript: "Hi, I was at your cafe this afternoon, and I think I left something there. I remember having it when I sat at a small table in the corner. I checked the counter and near the door before I left, but I must have forgotten it in the corner after all. Could you please look there?"
  },
{
  heading: "Question 7 of 13",
  audioUrl: "audio/question1_13/audio_de11_q7.mp3",
  question: "Where did they meet?",
  options: ["The back entrance", "The front entrance", "The side entrance"],
  correctAnswer: "The front entrance",
  transcript: "They were both running a bit late, but they met at the front entrance. It was the easiest spot to find each other, and they knew it would be easy to spot each other there."
},
  {
    heading: "Question 8 of 13",
    audioUrl: "audio/question1_13/audio_de11_q8.mp3",
    question: "The daughter is calling her father. What did she buy?",
    options: ["A dress", "A pair of shoes", "A blouse"],
    correctAnswer: "A dress",
    transcript: "I just went shopping because I’m getting ready for a trip. At first, I wanted to buy a hat, but then I realized I could borrow one from a friend. I was really torn between a dress and a blouse. I love the style of the blouse, but in the end, I chose the dress because it fits me better. I can’t wait to wear it on my trip!"
  },
  {
    heading: "Question 9 of 13",
    audioUrl: "audio/question1_13/audio_de11_q9.mp3",
    question: "Listen to a teacher talking about meeting preparations. What is the teacher preparing for the meeting now?",
    options: ["Order the food", "Print the documents", "Arrange the seating"],
    correctAnswer: "Order the food",
    transcript: "We have a big meeting coming up next week. There are a few things I still need to do to get ready, for example, I need to set up the chairs for everyone. Then, of course, I have to order the food so we can eat during the break. I’ll also organize the documents that we’ll need for the discussion. But, food is the priority right now."
  },
  {
    heading: "Question 10 of 13",
    audioUrl: "audio/question1_13/audio_de11_q10.mp3",
    question: "Adam is calling his friend. When will he need the computer?",
    options: ["Friday", "Thursday", "Tuesday"],
    correctAnswer: "Friday",
    transcript: "Hey James, it’s Adam! I just wanted to give you a quick call. I know you need a computer for your project, so I’m happy to let you borrow mine on Tuesday. Just make sure to take good care of it! But I need it back by Friday because I have a group presentation on Saturday. I really appreciate it, and I’m sure you’ll get a lot done with it. Let me know if that works for you. See you soon!"
  },
{
  heading: "Question 11 of 13",
  audioUrl: "audio/question1_13/audio_de11_q11.mp3",
  question: "What country will they study next semester?",
  options: ["Germany", "Spain", "France"],
  correctAnswer: "France",
  transcript: "They've been planning their study abroad program for a while, and next semester, they will study in France. It’s an exciting opportunity to immerse themselves in the culture and improve their language skills."
},
  {
    heading: "Question 12 of 13",
    audioUrl: "audio/question1_13/audio_de11_q12.mp3",
    question: "What do they need to repair for the building? / A woman is talking about her house. What is she going to change in their house?",
    options: ["The roof", "The windows", "The doors"],
    correctAnswer: "The windows",
    transcript: "I’ve always loved the ocean, that is why I initially wanted to install a big window that looks out to the river at my house. But now my husband and I realized it was too big and now too much sunshine got in. My car got heated and the computer next to the window always seemed like it would explode. I have no choice but to change it into another window that can close entirely."
  },
  {
    heading: "Question 13 of 13",
    audioUrl: "audio/question1_13/audio_de11_q13.mp3",
    question: "Listen to an actor discussing his hobbies. What does the actor like to do in his free time?",
    options: ["Drawing", "Watching movies", "Playing video games"],
    correctAnswer: "Drawing",
    transcript: "I don’t have much free time with my acting schedule, but when I do, I like to relax. Many people think I spend my free time watching movies, but that's not my favorite hobby. Actually, I love drawing. It helps me clear my mind and get creative. I sometimes play sports too, but drawing is what I enjoy most."
  },{
    heading: "Question 1 of 13",
    audioUrl: "audio/question1_13/audio_de12_q1.mp3",
    question: "Listen to a principal talking about new school facilities. What new facility will the school have?",
    options: ["A new library", "A sports field", "A Performance space"],
    correctAnswer: "A Performance space",
    transcript: "Our school is getting some exciting new facilities. We already have a library and a sports field, but we’re adding something different now. The school will have a new performance space for plays, concerts, and other events. It’s going to be a great addition for the students. We’re really looking forward to seeing it finished!"
  },
{
  heading: "Question 2 of 13",
  audioUrl: "audio/question1_13/audio_de12_q2.mp3",
  question: "What does he advise young people to do to save money?",
  options: ["Use public transportation", "Buy second-hand items", "Cook for yourself"],
  correctAnswer: "Cook for yourself",
  transcript: "He often advises young people to save money by cooking for themselves. Instead of eating out frequently, cooking at home can help cut down on unnecessary expenses and improve financial habits."
},
  {
    heading: "Question 3 of 13",
    audioUrl: "audio/question1_13/audio_de12_q3.mp3",
    question: "Listening to a man talking about his business trip. What does he like in Dubai?",
    options: ["He enjoys shopping", "He enjoys his job here", "He enjoys the weather"],
    correctAnswer: "He enjoys his job here",
    transcript: "I've been living in Dubai for about two years now, and I really enjoy my work here. It's challenging, but that's what makes it exciting. The company I work for is great, and I get to meet people from all over the world. The food is also amazing, but the work itself is what keeps me happy. I can see myself staying here for a long time because I feel lucky to do what I love."
  },
  {
    heading: "Question 4 of 13",
    audioUrl: "audio/question1_13/audio_de12_q4.mp3",
    question: "Listen to a conversation between the teacher and a parent. What will the father do?",
    options: ["Change schools", "Arrange private classes", "Enroll in after-school programs"],
    correctAnswer: "Arrange private classes",
    transcript: "Teacher: Hello, Mr. Johnson. Thank you for coming in today. I wanted to talk about your son, Jake.\nFather: Hi, Mrs. Lee. Yes, I’ve noticed he’s been struggling a bit lately.\nTeacher: Yes, his performance is not so good in math and reading. He seems to have some difficulties understanding the lessons.\nFather: I’m worried about that. What can we do to help him?\nTeacher: I know a private tutor who works well with children. She can provide extra help and support. Father: That sounds like a good idea! Can you give me her contact information? Teacher: Of course! I will write it down for you. I think Jake will really benefit from it."
  },
  {
    heading: "Question 5 of 13",
    audioUrl: "audio/question1_13/audio_de12_q5.mp3",
    question: "A woman is talking about her job. What encouraged her to become a scientist?",
    options: ["Her mother's support", "A large stone", "A book she read"],
    correctAnswer: "A large stone",
    transcript: "I’ve always loved science, but there was a moment that really encouraged me to become a scientist. I remember when I was a child, I found a large stone during a school trip. It sparked my curiosity about geology. My mother also inspired me to explore my interests in science. Of course, I use the computer a lot now for my research, but that stone was the beginning."
  },
  {
    heading: "Question 6 of 13",
    audioUrl: "audio/question1_13/audio_de12_q6.mp3",
    question: "Listen to David talking about the conference. How long did he talk in the speech?",
    options: ["20 minutes", "10 minutes", "15 minutes"],
    correctAnswer: "15 minutes",
    transcript: "Hello everyone. Today, I want to tell you about the conference that took place last week. It was very interesting, and many people attended. I spoke about new ideas in business. My presentation wasn’t very long, but I had a lot to say. The other speakers talked about technology and education. After the talks, there were some questions from the audience. My speech lasted about 15 minutes, shorter than expected. However, the audience was very attentive, and I was happy to see that."
  },
  {
    heading: "Question 7 of 13",
    audioUrl: "audio/question1_13/audio_de12_q7.mp3",
    question: "A man is talking about his holiday. How is he going to travel to the city?",
    options: ["By car", "By bus", "By train"],
    correctAnswer: "By bus",
    transcript: "Hello, everyone! I want to share my plans for the holiday. This year, I’m going to travel to the city for a few days. I’m very excited because I love exploring new places. I plan to visit some interesting museums and try different foods at local restaurants. The best part is that I will travel by bus, which is fun and also very cheap! I will leave early in the morning to enjoy the day. I can’t wait to see all the sights and take lots of pictures! It will be an amazing holiday!"
  },
  {
    heading: "Question 8 of 13",
    audioUrl: "audio/question1_13/audio_de12_q8.mp3",
    question: "Lily is talking about her daily routine. What does she do in the evening?",
    options: ["Does yoga", "Goes for a walk", "Watches TV"],
    correctAnswer: "Goes for a walk",
    transcript: "Hi, I’m Lily, and I want to tell you about my daily routine. I wake up early around 6:30 A.M. and have breakfast before going to work. I work in a small office, and my job keeps me busy until about 5 P.M. After dinner, I usually go for a walk to relax, but today I’m going to try something different—I’ll do some yoga at home. It sounds fun and peaceful. After that, I’ll probably watch a movie before going to bed. It’s a simple day, but I like it!"
  },
  {
    heading: "Question 9 of 13",
    audioUrl: "audio/question1_13/audio_de12_q9.mp3",
    question: "A man and a woman are talking about their old school days. What was the man's favorite thing about school?",
    options: ["Math classes", "Sports", "History classes"],
    correctAnswer: "History classes",
    transcript: "Woman: What do you remember most about our school days? Man: Honestly, I don’t remember much.\nWoman: I remember that I was terrible at math! It was my worst subject. Also, I remember that you were really good at history.\nMan: That’s right! I loved history. Actually, those classes were the ones I remember the most. All those stories and events were so fascinating!"
  },
  {
    heading: "Question 10 of 13",
    audioUrl: "audio/question1_13/audio_de12_q10.mp3",
    question: "Listen to a radio man talking about a new popular song. Which is the most attractive part of the song?",
    options: ["The words", "The beat", "The instruments"],
    correctAnswer: "The words",
    transcript: "Good evening, listeners! Today, I want to talk about a new song that’s quickly becoming popular - You’re my everything. The tune is really catchy, and it makes you want to dance right away. The instruments used are simple but create a great rhythm. However, the most attractive part of all is the words. The lyrics tell a beautiful story that everyone can relate to. It’s no wonder so many people are loving this song! If you haven’t heard it yet, make sure to give it a listen soon!"
  },
  {
    heading: "Question 11 of 13",
    audioUrl: "audio/question1_13/audio_de12_q11.mp3",
    question: "Listen to the announcement. When does the train leave the station?",
    options: ["9:15", "9:30", "9:00"],
    correctAnswer: "9:15",
    transcript: "Good morning, everyone. This is an important announcement about a change in the train schedule. The train to London will now leave at 9:15, not 9:30 as planned. Please listen carefully to this information. If you are taking this train, please go to Platform 3 now. Thank you for your attention, and have a good day."
  },
  {
    heading: "Question 12 of 13",
    audioUrl: "audio/question1_13/audio_de12_q12.mp3",
    question: "Lucy is calling her friend. What is her sister like?",
    options: ["They have different hair colors", "They have similar characters", "They are very different"],
    correctAnswer: "They have similar characters",
    transcript: "Hi Emma, it’s Lucy. I hope you’re doing well! I need a small favor from you today. Could you pick up my sister after school? She’ll be standing at the school gate at 3 P.M. She looks just like me, so you’ll recognize her easily. I have a meeting, and I won’t make it in time. Thank you so much! Let me know if that’s okay with you."
  },
  {
    heading: "Question 13 of 13",
    audioUrl: "audio/question1_13/audio_de12_q13.mp3",
    question: "An expert is talking about lack of satisfaction at work. What should be the solution?",
    options: ["Request a transfer", "Take a vacation", "Find a new job"],
    correctAnswer: "Request a transfer",
    transcript: "Many people feel unhappy at work, and often, they think a higher salary or less work will fix it. But that’s not always the solution. Sometimes, the problem is the work environment. A change of place can help improve how we feel at work. However, looking for a new job can be stressful and take time. One option is to ask for a transfer to another branch within the same company. This can offer the same benefits as getting a new job, without the challenges of starting over somewhere new."
  },
  // Mới cập nhật 2026
        {
    heading: "Question 1",
    audioUrl: "audio/question1_13/2026/q1_dinner_time.mp3",
    question: "The woman is calling a friend about meeting for dinner. How long does it take to get to the station?",
    options: ["40 minutes", "20 minutes", "60 minutes"],
    correctAnswer: "40 minutes",
    transcript: "I am happy about dinner tonight! I need to check the time. It takes 40 minutes to walk to the station. I must leave now to catch the train. If I miss it, I will wait another 30 minutes. The new restaurant will be great!"
  },
  {
    heading: "Question 2",
    audioUrl: "audio/question1_13/2026/q2_flight_cost.mp3",
    question: "Listen to a woman asking about a flight. How much does the flight in the morning cost?",
    options: ["250 pounds", "350 pounds", "500 pounds"],
    correctAnswer: "350 pounds",
    transcript: "I am looking at flight prices. The morning flight is 350 pounds. The afternoon one is 300 pounds. There is a 400-pound flight, but it has extra things I don't need. I will choose the 350-pound flight because the time is good for me."
  },
  {
    heading: "Question 3",
    audioUrl: "audio/question1_13/2026/q3_music_player.mp3",
    question: "Listen to a friend talking about selling her music player. How much did she sell it for?",
    options: ["30 dollars", "50 dollars", "70 dollars"],
    correctAnswer: "50 dollars",
    transcript: "I sold my music player last week. It was good, so I wanted 60 dollars. But 40 dollars was too cheap. I finally sold it for 50 dollars. That price was fair. Now I have some money to save."
  },
  {
    heading: "Question 4",
    audioUrl: "audio/question1_13/2026/q4_late_reason.mp3",
    question: "Listen to a woman explaining why she was late. What is the main reason she gets late?",
    options: ["Car broke down", "Heavy traffic", "Missed the train"],
    correctAnswer: "Missed the train",
    transcript: "I am often late. Sometimes I sleep too much, but not today. I left on time, but I missed the train at the last minute. This is the main reason I am late. I usually remember my things, so I don't forget them."
  },
  {
    heading: "Question 5",
    audioUrl: "audio/question1_13/2026/q5_after_work.mp3",
    question: "A man is talking about his routine after work. What is the man going to do after work?",
    options: ["Goes running", "Cooks dinner", "Watches TV"],
    correctAnswer: "Goes running",
    transcript: "My job is hard, so I am very tired after work. I wait for 5 o'clock to go home. I live near my office. I like to run after work to relax. It helps me feel better for the next day."
  },
  {
    heading: "Question 6",
    audioUrl: "audio/question1_13/2026/q6_meeting_time.mp3",
    question: "Tom is calling his friend. What time will they meet?",
    options: ["6 PM", "7 PM", "8 PM"],
    correctAnswer: "7 PM",
    transcript: "Hi Mike, it's Tom. Do you want to meet tonight? Let's meet at the park at 7 P.M. We can eat snacks or play basketball. Tell me if you can come. See you later!"
  },
  {
    heading: "Question 7",
    audioUrl: "audio/question1_13/2026/q7_finance_advice.mp3",
    question: "A finance expert is giving advice to young people. What shouldn't they do?",
    options: ["Ask for more money", "Invest in stocks", "Buy expensive cars"],
    correctAnswer: "Ask for more money",
    transcript: "Saving money is important. I plan my spending carefully. I save for emergencies. Young people should not borrow money from the bank. This brings debt. It is better to save money instead."
  },
  {
    heading: "Question 8",
    audioUrl: "audio/question1_13/2026/q8_show_ending.mp3",
    question: "A girl is talking about a show she will attend. What will it end with?",
    options: ["A surprise performance", "A speech", "A firework display"],
    correctAnswer: "A surprise performance",
    transcript: "Hi, I'm Emma. I am going to a show on Saturday at 7 P.M. There is dancing and singing. The show ends with a surprise performance. I really want to know what it is!"
  },
  {
    heading: "Question 9",
    audioUrl: "audio/question1_13/2026/q9_cabinet.mp3",
    question: "Listen to an auction man talking about a cabinet. Which part of the cabinet is original?",
    options: ["The legs", "The drawer", "The top"],
    correctAnswer: "The drawer",
    transcript: "Welcome to the auction! Look at this beautiful wooden cabinet. It fits in any room. The drawer is original, which makes it special. You can put things inside it. Let's start the bidding!"
  },
  {
    heading: "Question 10",
    audioUrl: "audio/question1_13/2026/q10_coffee_plan.mp3",
    question: "A woman tells her friend about her plans for the day. What is the woman going to do?",
    options: ["Go shopping", "Visit the library", "Have coffee"],
    correctAnswer: "Have coffee",
    transcript: "Hi! I have plans for today. I am meeting a friend at a café for a drink. We haven't met for a long time. A conversation with coffee is a good start to the day. I will think about lunch later."
  },
  {
    heading: "Question 11",
    audioUrl: "audio/question1_13/2026/q11_mother_daughter.mp3",
    question: "Linda is talking about her mother. What do mother and daughter have in common?",
    options: ["Same fashion sense", "Same music taste", "Similar interests"],
    correctAnswer: "Similar interests",
    transcript: "My mom is important to me. We like reading and gardening. We talk about books and plants. We like different music, but our hobbies bring us together. I love spending time with her."
  },
  {
    heading: "Question 12",
    audioUrl: "audio/question1_13/2026/q12_radio_topic.mp3",
    question: "Listen to the speaker talking on the radio. What is she talking about?",
    options: ["Her holiday trip", "Her new car", "Her journey to work"],
    correctAnswer: "Her journey to work",
    transcript: "I take the same way to work every morning. I take a bus and then a train. The train is crowded. I listen to music. Then I walk for ten minutes. It is tiring, but I like the time to think."
  },
  {
    heading: "Question 13",
    audioUrl: "audio/question1_13/2026/q13_library_location.mp3",
    question: "Listen to the conversation about the directions. Where is the library located?",
    options: ["Opposite the park", "Next to the bank", "On the left of the square"],
    correctAnswer: "On the left of the square",
    transcript: "The library is easy to find. It is on the left of the square, past the bakery. It is a big building. It is not in front of the square. There is a park there. Just look to your left."
  },
  {
    heading: "Question 14",
    audioUrl: "audio/question1_13/2026/q14_saving_money.mp3",
    question: "Listen to a woman giving advice on saving money. What advice does she give to save money?",
    options: ["Stop eating out", "Use the public transport", "Sell old clothes"],
    correctAnswer: "Use the public transport",
    transcript: "Do you want to save money? You can buy many things at once. But the best tip is to use the bus or train. Don't drive your car. This saves money on gas. Put money in the bank later, but start with public transport now."
  },
  {
    heading: "Question 15",
    audioUrl: "audio/question1_13/2026/q15_bus_fare.mp3",
    question: "Lalia is talking to her friend about her upcoming trip. How much does she think the bus fare will be?",
    options: ["£2.5", "£1.5", "£5.0"],
    correctAnswer: "£2.5",
    transcript: "I am excited about my trip. How much is the bus ticket? I think it is £2.50. The subway is £4.50. The bus is cheaper. I need small money. When does the bus leave? I don't want to miss it."
  },
  {
    heading: "Question 16",
    audioUrl: "audio/question1_13/2026/q16_afternoon_plan.mp3",
    question: "A woman is chatting with a friend about her afternoon plans. What is she going to do this afternoon?",
    options: ["Sleep at home", "Go to the cinema", "Go on a city tour"],
    correctAnswer: "Go on a city tour",
    transcript: "I am happy about this afternoon. Usually, I stay home. Today I want to do something new. I will go on a city tour. I didn't want to go to the park or museum. The tour is more exciting."
  },
  {
    heading: "Question 17",
    audioUrl: "audio/question1_13/2026/q17_meeting_place.mp3",
    question: "Louis is calling his friend Standar. Where will Luis meet Standar?",
    options: ["Inside the train", "Outside the station", "At the bus stop"],
    correctAnswer: "Outside the station",
    transcript: "Hi. I am at the train station. The cafe inside is crowded. The ticket counter is noisy. Let's meet outside the station. It is easy to find you there."
  },
  {
    heading: "Question 18",
    audioUrl: "audio/question1_13/2026/q18_meeting_reschedule.mp3",
    question: "Jane is calling her friend Martha. What time are they going to meet?",
    options: ["4.30", "5.30", "6.30"],
    correctAnswer: "5.30",
    transcript: "Hi Martha. I want to check our time. I cannot meet at 4:00. Can we meet at 5:30? 6:00 is too late. Please tell me if 5:30 is okay. I want to see you."
  },
  {
    heading: "Question 19",
    audioUrl: "audio/question1_13/2026/q19_job_location.mp3",
    question: "A man is talking about his job. Where is he working now?",
    options: ["In a hospital", "In a school", "In a bank"],
    correctAnswer: "In a bank",
    transcript: "I work in a bank now. It is busy. The pay is good, but the job is stressful. I have a lot of work to do. But I am learning a lot about finance."
  },
  {
    heading: "Question 20",
    audioUrl: "audio/question1_13/2026/q20_key_location.mp3",
    question: "The man is talking about his key. Where did he find the key?",
    options: ["In the front door", "In the kitchen", "Under the car seat"],
    correctAnswer: "In the front door",
    transcript: "I lost my house key. It was not in the car or bedroom. I waited outside for an hour. Then I saw it under the mat at the door. I was very happy."
  },
  {
    heading: "Question 21",
    audioUrl: "audio/question1_13/2026/q21_late_time.mp3",
    question: "A man is calling his mother. How long will he be late?",
    options: ["30 minutes", "5 minutes", "10 minutes"],
    correctAnswer: "10 minutes",
    transcript: "Hi Mom. There is traffic. The train takes 20 minutes. I will be 10 minutes late. But we have 15 minutes before we meet Mr. Smith. I will hurry."
  },
  {
    heading: "Question 22",
    audioUrl: "audio/question1_13/2026/q22_movie_begin.mp3",
    question: "A woman is going to the cinema with her husband. What time does the movie begin?",
    options: ["6:00", "6:40", "7:15"],
    correctAnswer: "6:40",
    transcript: "I checked the time. The movie starts at 6:40. It ends at 9:20. Do you want to eat dinner after? We can go to the new restaurant. We can talk about the movie."
  },
  {
    heading: "Question 23",
    audioUrl: "audio/question1_13/2026/q23_park_meet.mp3",
    question: "A man is calling his friend. Where will they meet?",
    options: ["At the library", "At the mall", "By the park"],
    correctAnswer: "By the park",
    transcript: "Do you want to meet after school? We usually go to the café. I want to go somewhere different. Let's meet by the park. We can walk there. What do you think?"
  },
  {
    heading: "Question 24",
    audioUrl: "audio/question1_13/2026/q24_turn_right.mp3",
    question: "Dan is going to university. Where should Dan turn right?",
    options: ["At the school", "At the bakery", "At the traffic lights"],
    correctAnswer: "At the traffic lights",
    transcript: "It is my first day at university. I go straight to Main Street. Then I turn left at the hospital. At the traffic lights, I turn right. Then I will see the university. Is that right?"
  },
  {
    heading: "Question 25",
    audioUrl: "audio/question1_13/2026/q25_cheapest_computer.mp3",
    question: "A saleswoman is talking to her customer. How much is the cheapest computer in the shop?",
    options: ["120 pounds", "135 pounds", "160 pounds"],
    correctAnswer: "135 pounds",
    transcript: "We have computers for you. The £145 one is good for games. The £155 one is faster for hard work. If you want a simple computer, the cheapest one is £135."
  },
  {
    heading: "Question 26",
    audioUrl: "audio/question1_13/2026/q26_building.mp3",
    question: "A tour guide is introducing a famous building. What is this building currently used for?",
    options: ["A hotel", "A post office", "A department store"],
    correctAnswer: "A department store",
    transcript: "Welcome. This is a famous building. It was a museum in the 1920s. Then it was a cinema. Now, it is a big department store. You can buy many things here."
  },
  {
    heading: "Question 27",
    audioUrl: "audio/question1_13/2026/q27_last_job.mp3",
    question: "David is in an interview. What was his last job?",
    options: ["A driver", "An electrician", "A mechanic"],
    correctAnswer: "An electrician",
    transcript: "I studied engineering. But first, I was a teacher. I liked it. Then I became an electrician. I use my skills with my hands. I like this job very much."
  },
  {
    heading: "Question 28",
    audioUrl: "audio/question1_13/2026/q28_doctor_reason.mp3",
    question: "A man is talking to his friend. Why does he choose to be a doctor?",
    options: ["To be famous", "To travel the world", "To help people"],
    correctAnswer: "To help people",
    transcript: "I want to be a doctor. I want to help people. My family is happy about this. Doctors make good money, but that is not the main reason. I want to save lives."
  },
  {
    heading: "Question 29",
    audioUrl: "audio/question1_13/2026/q29_lost_bag.mp3",
    question: "A woman is talking to the police. What did she lose?",
    options: ["A phone", "A ring", "A bag"],
    correctAnswer: "A bag",
    transcript: "I lost my bag. I bought jewelry for a wedding. I took the 7:30 train. I left my bag on the seat. I still have my wallet. But my bag has important things inside."
  },
  {
    heading: "Question 30",
    audioUrl: "audio/question1_13/2026/q30_favorite_teacher.mp3",
    question: "Tom is talking with his friend about his teachers. What is his favourite teacher?",
    options: ["Mr. White", "Miss Brown", "Mrs. Green"],
    correctAnswer: "Miss Brown",
    transcript: "I am in Miss Taylor's class. She is new. I miss Miss Brown. She was my favorite. Mr. Styles is strict, but Miss Brown was fun. I hope Miss Taylor is good too."
  },
  {
    heading: "Question 31",
    audioUrl: "audio/question1_13/2026/q31_return_dress.mp3",
    question: "A woman is talking to a shop assistant. Why does the woman return the dress?",
    options: ["It is torn", "Wrong style", "Because of its size"],
    correctAnswer: "Because of its size",
    transcript: "I want to return this dress. I like the pattern and color. But it is too small. I cannot lose weight quickly. I bought it yesterday. Can I return it easily?"
  },
  {
    heading: "Question 32",
    audioUrl: "audio/question1_13/2026/q32_restaurant_opinion.mp3",
    question: "Louis is having dinner in a new restaurant. What is his opinion about that restaurant?",
    options: ["The food is cold", "It is too noisy", "The service is slow"],
    correctAnswer: "The service is slow",
    transcript: "I don't like this restaurant. The food is expensive. I don't know if it is good. The service is very slow. We waited 25 minutes. I am very hungry!"
  },
  {
    heading: "Question 33",
    audioUrl: "audio/question1_13/2026/q33_townhouse.mp3",
    question: "A teacher is talking to her students. Where are the students now?",
    options: ["At the zoo", "In a townhouse", "In a library"],
    correctAnswer: "In a townhouse",
    transcript: "I am happy about this trip. We can learn history here. It is better than the museum. This townhouse is near our school. It is easy to get here. I hope you have fun."
  }


];

// Đề mới tính từ đâu
const demoi = 155;

// ===============================================================================================================
// ////////////// CÂU HỎI 1_13 ///////////////
// ===============================================================================================================
let question_index = 0;
function renderQuestion1_13(data) {
  const radioButtons = document.querySelectorAll('input[name="answer"]');
  radioButtons.forEach(button => {
    button.checked = false;  
  });

let questionText_id = `Question ${currentIndex + 1} of ${listeningQuestions1.length}`;

if (currentIndex > demoi) {
  questionText_id += ' <span style="color:red;">(Đề mới)</span>';
}

document.getElementById("question1_13_id").innerHTML = questionText_id;


  const audio = document.getElementById("audioPlayer");
  const questionText = document.getElementById("questionText");
  audio.src = data.audioUrl;
  questionText.innerText = data.question;

  data.options.forEach((option, index) => {
    const label = document.getElementById("label" + index);
    const input = document.getElementById("option" + index);
    if (label && input) {
      label.innerText = option;
      input.value = option;
    }
  });

  // ✅ Đặt lại đáp án sau khi input đã có value
  const storedAnswer = userAnswers[currentIndex]; 
  if (storedAnswer) {
    const savedInput = document.querySelector(`input[name="answer"][value="${storedAnswer}"]`);
    if (savedInput) savedInput.checked = true;
  }

  const playBtn = document.getElementById("playButton");
  const playIcon = document.getElementById("playIcon");
  setupPlayButton(audio, playBtn, playIcon);

  const transcriptBox = document.getElementById("transcriptBox");
  const transcriptContent = document.getElementById("transcriptContent");
  transcriptContent.innerText = data.transcript;

  const showTranscriptButton = document.getElementById("showTranscriptButton");

  transcriptBox.style.display = "none";
  showTranscriptButton.innerText = "Show paragraph";

  showTranscriptButton.removeEventListener("click", toggleTranscript); 
  showTranscriptButton.addEventListener("click", toggleTranscript);
}



// 2. Hàm ẩn hiện paragrap
function toggleTranscript() {
  if (transcriptBox.style.display === "none") {
    transcriptBox.style.display = "block";
    showTranscriptButton.innerText = "Hide paragraph";
  } else {
    transcriptBox.style.display = "none";
    showTranscriptButton.innerText = "Show paragraph";
  }
}

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



// ===============================================================================================================
// 4. Đáp án câu 1-13
document.querySelectorAll('input[name="answer"]').forEach((input, index) => {
  input.addEventListener('change', function() {
    storeUserAnswer(currentIndex, this.value);
  });
});

function storeUserAnswer(questionIndex, answer) {
  userAnswers[questionIndex] = answer;
}

// Hàm sửa lại để chỉ kiểm tra câu hỏi tại currentIndex
function showResults_question1_13() {
  const comparisonBody1 = document.getElementById('comparisonTableBody');
  const totalScoreDisplay = document.getElementById('totalScore');
  comparisonBody1.innerHTML = '';

  let score = 0;
  
  // Lấy câu hỏi hiện tại theo currentIndex
  const question = listeningQuestions1[currentIndex];
  const userAnswer = userAnswers[currentIndex];
  const isCorrect = userAnswer === question.correctAnswer;
  const textColor = isCorrect ? 'text-success' : 'text-danger'; // ✅ Màu chữ cho câu trả lời người dùng

  if (isCorrect) {
    score += 2; // Cộng điểm nếu trả lời đúng
  }

  // Thêm kết quả vào bảng so sánh
  comparisonBody1.innerHTML += `
    <tr>
      <td class="${textColor}">${userAnswer || 'Not answered'}</td>
      <td class="${isCorrect ? 'text-success' : 'text-danger'} fw-bold">${question.correctAnswer}</td>
    </tr>
  `;

  // Hiển thị điểm cho câu hỏi hiện tại
  totalScoreDisplay.innerText = `Score: ${score} / 2`;

  // Hiển thị modal
  const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
  resultModal.show();
}


// Sự kiện khi nhấn nút "Check result"
document.getElementById('checkResultButton').addEventListener('click', function () {
  showResults_question1_13();
});


// ===============================================================================================================
// ////////////// NÚT NHẤN NEXT VÀ BACK ///////////////
// ===============================================================================================================
let currentIndex = 0;
let userAnswers = [];  // Mảng lưu trữ các đáp án người dùng

function renderQuestionByIndex(currentIndex) {
  question_index = currentIndex;
  if (currentIndex <= listeningQuestions1.length - 1) {
    renderQuestion1_13(listeningQuestions1[currentIndex]);
  } 
  if(currentIndex === listeningQuestions1.length - 1) {
    document.getElementById('nextButton').textContent = "The end"; 
  }
}




// ===== XỬ LÝ NÚT NEXT =====
document.getElementById('nextButton').addEventListener('click', function (e) {
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
  if (currentIndex < listeningQuestions1.length - 1) {
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
    renderQuestion1_13(listeningQuestions1[0]);
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


// Kết thúc
});
