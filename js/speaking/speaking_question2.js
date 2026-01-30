document.addEventListener("DOMContentLoaded", function() {
    // Mảng câu hỏi và đáp án
    const questions = [{
        "urlpic1": "/images/speaking/part2/1.png",
        "question1": "Describe the picture?",
        "question1_answer": "In the photo, I can see a group of friends sitting at the same table and eating in a restaurant. It's a very beautiful place with lots of trees around. There are 2 men and 2 women, they are wearing different colored shirts. They are enjoying their food while smiling and talking to each other, it looks like they are talking about something very funny. Looking at the background of the picture, I can tell that this is a fast-food restaurant or a cake restaurant. They all look happy and full of energy.",
        "question2": "Why do people like eating out with friends?",
        "question2_answer": "People are keen on eating out because it is one of the great ways to spend the time and it is fun and enjoyable activity. Besides, people like to share food with family and friends. Actually, eating out has become one of the most popular ways of recreation. It is a time to be out, see people and meet people. You can enjoy the delicious food that you usually do not cook at home while smiling and talking with your friends about some fun stories. I think that’s why people are into eating out.",
        "question3": "Please talk about the last time you ate with friends?",
        "question3_answer": "The last time I ate with my friends was last night. Me and my group of friends went to a Chinese restaurant in the city center. The purpose we went to eat was to celebrate a friend of mine who passed his English test that morning. We enjoyed our meal a lot while smiling and talking about the beautiful memories of our life. The restaurant had a homely atmosphere and soft music that made me comfortable and helped me let my hair down after a working day."
    }, {
        "urlpic1": "/images/speaking/part2/2.png",
        "question1": "Describe the picture?",
        "question1_answer": "As can be seen in this picture, there is a family in a car. There is a mother, a father, their 3 kids and they are all fastening their seat belts. The father in a red shirt is driving. Sitting next to him is the mother, she is smiling happily. Their children are sitting in the back seat. I think they are going to take a trip to somewhere far away from their home during holidays or weekends. By going on road trips, they can spend time together, which strengthens the family relationships. Everyone look happy and I can tell they’re having a great family road trip together",
        "question2": "Tell me the last time you traveled in a car?",
        "question2_answer": "The last time I traveled by car was yesterday. I drove to HaLong city with my family, which is a coastal city in the north of Vietnam. It took us about 2 hours to get there and we had so many opportunities to experience the picturesque scenery along our way. We even pulled over several times to enjoy the gorgeous scenery and take some beautiful photos. I think that was one of the best experiences that I have ever had.",
        "question3": "How can people overcome the time of a long journey?",
        "question3_answer": "There are so many ways to help people pass the time on a long journey and create more memorable travel experiences. I think the most common one is that we can listen to our favorite music or read a book to kill time. If you don’t have the concentration to read books, then you should watch a film or TV series instead. Playing a fun game is also one of the best ways to make the time pass faster. In addition, carrying some snacks is also extremely popular, in case they feel hungry."
    }, {
        "urlpic1": "/images/speaking/part2/3.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, I see a right hand holding a black remote facing the TV screen with many channels on the screen. There are many different channels on the screen such as music, sports, boxing, animation... I guess he/she is clicking and choosing the show he/she wants to watch. I can't guess if it's a woman or a man choosing a channel because I can only see the hand with the TV remote. Maybe he or she is in the living room because there is a white table and the desk shelf under the TV. It seems to be a smart TV because there are play, pause, stop, next, previous.",
        "question2": "How often do you watch films or programmers at home? Why?",
        "question2_answer": "Well, I’m keen on watching TV because it is one of my favorite activities. I often watch films or programs at home in my spare time like the evening on the weekend with my family. We are into watching comedy TV programs or action movies because we want to enjoy the fun of family weekends. Sometimes I watch a football game with my father on the weekend. Watching movies not only helps me let my hair down after a hard-working day but also makes me happy and expands my horizons. I think watching TV is very interesting.",
        "question3": "Which is better for learning, watching video or reading? Why?",
        "question3_answer": "Personally, I prefer watching videos to reading books. The graphics in the videos attract me and help me understand better. Besides, watching videos is extremely suitable for introductions to difficult topics, especially something unfamiliar. Furthermore, watching a video takes me less time than reading a book with the same content. Moreover, learning through a video can make us feel more comfortable and relaxed than reading. It not only expands my horizons but also helps me let my hair down after a hard-working day. But if you combine these two methods you can learn the best."
    }, {
        "urlpic1": "/images/speaking/part2/4.png",
        "question1": "Describe the picture?",
        "question1_answer": "Well, in the picture, I can see a man watching TV. He is lying on the sofa. It must have been his relaxing time after a hard day. He is wearing his nightwear and I can see the comfort on his face. Perhaps he is watching his favorite TV programs. I guess it may be a soccer match, a fashion show, a music concert or something like that. It is so great for us to have leisure time after long working hours, right? So don’t forget to take your time to refresh your mind and prepare well for a new day.",
        "question2": "Do you often watch TV?",
        "question2_answer": "I don't watch TV very often. I prefer spending my free time doing other activities like reading or going for a walk. However, I do watch TV occasionally, especially in the evening after a busy day. I enjoy watching movies or news programs to relax and stay updated.",
        "question3": "Why is free time important?",
        "question3_answer": "Free time is important because it allows us to relax and recharge. After working or studying, it’s essential to have time to do things we enjoy. This helps reduce stress and keeps us happy. It also gives us a chance to spend time with family or friends, which strengthens relationships. In short, free time helps maintain a healthy balance in life."
    }, {
        "urlpic1": "/images/speaking/part2/5.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, I can see three people. I guess they are members of a family including father, mom and daughter. They are lying down on grass and reading a book. The girl is about 6-8 years old. They seem to be very happy to read the book together. Based on the background, maybe the picture is taken in a park. It seems that they are enjoying their free time.",
        "question2": "What do you usually read?",
        "question2_answer": "Some kinds of books that I would prefer to read are romance novels, history books or science fiction books. During the holiday, science fiction is my favorite choice, such as exploring time travel, space travel, and future scientific and technological advances. I can sit and read these books for hours without getting bored, it not only expands my horizons and improves my mental health but also helps me to let my hair down after a hard working day.",
        "question3": "Why is reading important for children?",
        "question3_answer": "I suppose that reading brings many benefits to children, especially for children’s thinking and perception. Reading allows them to develop a better imagination and get more life information. When you start reading aloud to your child, you are basically giving them background information about the world, which helps them make sense of what they see, hear and read. In addition, I think reading is also good for children’s health because it helps them limit their exposure to electronic devices."
    }, {
        "urlpic1": "/images/speaking/part2/6.png",
        "question1": "Describe the picture?",
        "question1_answer": "Looking at this picture, I see a mother and her child and the mother is carrying her child. They are looking very cheerful and full of energy. I guess that they are at the zoo or the park. Looking at the background, I can see a lot of trees and mountains. I see that the weather is very beautiful and lovely.",
        "question2": "When was the last time you visited a new place?",
        "question2_answer": "The last time I explored a new place was about a month ago. I visited a charming little town in the countryside. The main square was surrounded by quaint cafes and historic buildings, creating a picturesque setting. I spent the day wandering through cobblestone streets, discovering local shops, and indulging in regional cuisine. The highlight was stumbling upon a hidden garden with vibrant flowers and a peaceful atmosphere. It was a refreshing experience, and I enjoyed the blend of history, culture, and nature in that new locale. Exploring unfamiliar places always brings a sense of adventure and discovery.",
        "question3": "Why do people like to go to new places?",
        "question3_answer": "People are drawn to new places for various reasons. The desire for adventure and exploration motivates individuals to discover different cultures, landscapes, and cuisines. Traveling to unfamiliar destinations provides a break from routine, fostering personal growth and creating lasting memories. It satisfies the innate curiosity to learn and experience new things. Whether it's the thrill of discovery, relaxation in a novel environment, or the chance to broaden one's perspectives, the allure of new places lies in the diverse and enriching experiences they offer."
    }, {
        "urlpic1": "/images/speaking/part2/7.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this photo, I see a man and a woman in an apartment or a living room, where there are many storage boxes surrounding them. The couple is doing the housework. The man in white T-shirt and blue jeans is sweeping the floor. He seems to be happy to do that. The woman is collecting some bottles of beer and putting them in a plastic bag. She looks so tired and uncomfortable.",
        "question2": "Describe the last time you did some physical work.",
        "question2_answer": "The last time I did physical work was about a month ago. It's Tet. Everyone has a custom of cleaning the house before the Tet festival and so does my family. I had to sweep and clean 2 floors and besides, my mother and I had to clean and rearrange the cupboard, bookshelves and 2 wardrobes. The last days of the year are always the busiest, when everything had to be completed and the house also needed decorating. Although those are very tiring and heavy tasks, I found that they helped to strengthen the bonds between family members because we could create many unforgettable times with each other.",
        "question3": "Do you think machines will do all our hard work in the future? Why?",
        "question3_answer": "In my opinion, I don't think that machines can replace humans. Although many labor-saving devices have proved to be very useful in helping us save time and effort when doing housework such as washing the dishes, doing the laundry or vacuuming, I still believe that only humans can do non-standardized tasks. Robots are good at repetitive tasks but lousy at dealing with varied and unique situations. Machines make human skills more important. So, rather than undermining humans, we are much better off thinking hard about how to up skill ourselves and learn how to work."
    }, {
        "urlpic1": "/images/speaking/part2/8.png",
        "question1": "Describe the picture?",
        "question1_answer": "Looking at the picture, I can see 4 people, including 2 men and 2 women discussing with each other in an office. There is a man in a gray vest, standing and pointing at a white board. The walls are all painted white.  On the table, there are many cups of tea and coffee and some laptops as well. They all seem to be very concentrated, energetic and enthusiastic about their job. I guess this is a big and important project",
        "question2": "Tell us about the time you give a presentation. How did you feel?",
        "question2_answer": "The last time I spoke in public was when I had to make a presentation about the benefits of nature. It was a project which was held by my club with the aim of raising public awareness about the environment and the measures to protect our nature. At first I was extremely nervous and scared. However I made sure that I knew what I wanted to say and I became more confident. I felt happy that I overcame my fear.",
        "question3": "Why are people scared of public speaking?",
        "question3_answer": "There are many reasons why people become afraid when having to speak in public. First of all, public speaking is an art that requires lots of courage, confidence and will-power. Most people lack this skill because of its challenging type of nature. Besides, people are afraid of public speaking because the look of a lot of people may make them feel shy and unable to express their feelings and their thoughts."
    }, {
        "urlpic1": "/images/speaking/part2/9.png",
        "question1": "Describe the picture?",
        "question1_answer": "This picture feels so dreamy. A girl is chilling on a yacht, soaking in the view of the open sea. She’s probably feeling the cool breeze in her hair while watching the waves sparkle under the sun. The vibe is super calm, like she’s just enjoying a peaceful moment far away from all the noise. Behind her, the ocean stretches endlessly, blending into the horizon where the sky shows off some gorgeous colors. It’s the kind of scene that makes you wanna be there too.",
        "question2": "Tell us the last time you went to the sea?",
        "question2_answer": "Honestly, I haven’t “gone” to the sea myself since I’m just your AI buddy, but if I could, I’d totally hit the beach whenever life feels too crazy. I’d imagine standing barefoot in the sand, feeling the waves tickle my feet, and just zoning out to the sound of the ocean. It’d be the perfect way to recharge. Maybe someday you can share your beach adventures with me—sounds like fun!",
        "question3": "Why do some people dislike going to the sea?",
        "question3_answer": "Not everyone’s into the sea, and that’s okay. Some people hate dealing with sticky sand getting everywhere, or they just can’t handle the salty water stinging their skin. Then there’s the fear factor—deep water and the idea of sharks freak some folks out. And let’s not forget the sunburns—ouch! For others, the sea might feel too quiet or even boring. Everyone vibes differently, and while some love the ocean’s"
    }, {
        "urlpic1": "/images/speaking/part2/10.png",
        "question1": "Describe the picture?",
        "question1_answer": "There’s a guy standing confidently on a ship, rocking a sharp suit that screams elegance and style. Maybe he’s a businessman, or perhaps he’s just someone who knows how to enjoy life luxuriously. He’s got this cool, composed vibe, with one hand casually resting on the railing as he gazes out at the open sea. The sunlight reflects off the water, creating a crisp and clean backdrop that makes him look even more refined. It’s like a scene straight out of a movie or a luxury lifestyle ad—total power vibes!",
        "question2": "Tell me about the last time you used public transport",
        "question2_answer": "The last time I used public transport was just a few days ago. I took the metro to meet a friend in the city. It was a pretty smooth ride, actually. The train was fairly crowded, but it was still faster than driving because I didn’t have to deal with traffic or finding parking. Plus, it was nice not having to worry about the stress of navigating through the city, so I just put on some music and relaxed. I actually enjoy using public transport when it’s easy and convenient!",
        "question3": "How can we increase the number of people using public transport?",
        "question3_answer": "To get more people using public transport, we could make it more convenient and reliable. This means better schedules, faster routes, and more frequent services. Also, making it cheaper or offering discounts might encourage people who usually drive to switch. Lastly, improving the overall experience—like cleaner buses, better seats, and free Wi-Fi—could make a big difference!"
    }, {
        "urlpic1": "/images/speaking/part2/11.png",
        "question1": "Describe the picture?",
        "question1_answer": "Looking at this picture I can see that there are many people. They wear basic clothes and they know how to combine clothes to create the most beautiful outfits. They were laughing and talking happily so I guess they were friends. Looking at the background I can see soft drinks, popcorn and sofas so they are in a movie theater. It reminds me of a memory with my friend when we were in college. This picture is very beautiful and I think it was taken by a professional photographer.",
        "question2": "Tell me about a time you laughed a lot.",
        "question2_answer": "One time I laughed so much was during a camping trip with some friends. We were sitting around the campfire, telling stories, and someone started doing impressions of famous celebrities, but in the most random situations. At one point, they did a dramatic reading of a cereal box as if it was Shakespeare, and we all lost it. We couldn't stop laughing for like 20 minutes, even though it was just so silly.",
        "question3": "Do you think people from different countries laugh at different things?",
        "question3_answer": "Yeah, I definitely think people from different countries laugh at different things. Humor is so tied to culture and language. For example, in some cultures, wordplay and puns are huge, while in others, physical comedy or sarcasm might be more appreciated. Plus, the way people view social norms and taboos can change what’s considered funny, so a joke that works in one place might totally miss the mark in another."
    }, {
        "urlpic1": "/images/speaking/part2/12.png",
        "question1": "Describe the picture?",
        "question1_answer": "It’s such a wholesome scene! There’s a teacher guiding four kids as they work together to knead dough for baking. The kids are all focused, their hands covered in flour, laughing and enjoying the messy fun. The teacher looks patient and encouraging, showing them step-by-step how to work the dough. There’s a sense of teamwork, creativity, and learning in the air. The table is filled with baking tools—bowls, rolling pins, and maybe some sprinkles waiting to be added. It’s the kind of moment that’s both educational and heartwarming, full of joy and life lessons.",
        "question2": "How do people learn to cook in your culture",
        "question2_answer": "Most people learn cooking from family—parents or grandparents are the first teachers. They pass down traditional recipes, and it’s usually a mix of watching, helping out, and eventually doing it yourself. Some learn by trial and error, experimenting with food at home. Nowadays, cooking shows, YouTube tutorials, and food blogs are super popular ways to pick up new skills or explore different cuisines. Schools sometimes offer cooking classes, too. It’s a blend of tradition, curiosity, and adapting to modern resources.",
        "question3": "Why is it important for people to learn how to cook for themselves?",
        "question3_answer": "Knowing how to cook is such a key life skill. It helps you eat healthier, save money, and control what goes into your meals. Cooking gives you independence—you don’t have to rely on takeout or someone else to feed you. Plus, it’s creative and satisfying to make something with your own hands. It’s also great for connecting with others; cooking for family or friends can be a way to bond and show love. And let’s be real, being able to whip up a tasty meal feels pretty awesome!"
    }, {
        "urlpic1": "/images/speaking/part2/13.png",
        "question1": "Describe the picture?",
        "question1_answer": "It’s a heartwarming moment—a father and his child riding bicycles together. The dad leads the way, glancing back with a big smile to check on the little one, who’s pedaling along enthusiastically on a smaller bike. They’re probably in a park or along a quiet path, surrounded by trees and sunlight filtering through the leaves. The child looks happy and determined, and the dad’s body language is full of encouragement and pride. It’s one of those simple yet meaningful moments of bonding, where it’s all about spending quality time together.",
        "question2": "In your country, do parents care about their children?",
        "question2_answer": "Absolutely! Parents in my country put a lot of love and effort into raising their kids. They’re involved in their education, health, and hobbies, always wanting what’s best for them. It’s common for parents to sacrifice their own needs to provide better opportunities for their children. They’re also big on teaching life values, like respect and responsibility. And while every family is different, the idea of nurturing and protecting kids is a universal priority.",
        "question3": "Why do parents care about their children?",
        "question3_answer": "Parents care because their children are a part of them—there’s a natural instinct to protect, nurture, and help them grow. They want to see their kids happy, healthy, and successful in life. It’s also about love; there’s this deep emotional bond that makes parents want to give their kids the best they can. Beyond that, many parents see raising their children well as a way to contribute positively to the future. It’s rewarding for them to watch their kids thrive and become their own unique individuals."
    }, {
        "urlpic1": "/images/speaking/part2/14.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, I can see a big yellow school bus. There are some children. They are about to take the bus home. I think they are going home because they are in a line. There are six students. They look young, maybe primary school. It's a sunny day.",
        "question2": "How do children go to school in your country?",
        "question2_answer": "In my country, some children go to school by bus, some children go by car (with their parents or with a private driver), and some children walk to school. If the children live near the school, they walk. If the children live far away, they go by car or bus.",
        "question3": "Is it common to live far from school in your country? Why?",
        "question3_answer": "It is not common to live far from school in my country because there are many schools, so I don’t have to travel far to find a school. There are private schools and public schools in my country. The schools are not far from the houses. Also, the schools check where the parents live. The parents should live near the school."
    }, {
        "urlpic1": "/images/speaking/part2/15.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, I can see a man dancing. He’s wearing yellow pants and a yellow shirt. He’s wearing a cap too. He’s moving his arms and legs. He looks very happy. Maybe he’s listening to music. You cannot dance without music.",
        "question2": "Do you like dancing? Why? Why not?",
        "question2_answer": "No, I don’t like dancing. There are many reasons why I don’t like dancing. I don’t like dancing because I don’t like listening to music, I don’t think I’m good at dancing, and I don’t know how to dance.",
        "question3": "On what occasions do people usually dance in your country?",
        "question3_answer": "People usually dance in my country at weddings and other celebrations like birthdays. Everyone in the family dances together. Dancing is an important part of the party. When I dance with my friends and family, I feel very happy. I like dancing."
    }, {
        "urlpic1": "/images/speaking/part2/16.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, I can see a group of people in a big garden. It looks like a family. There are some children. There is a girl at the front. She is playing with a hoola hoop. There are two boys. They’re playing with a hoola hoop too. The girl is wearing a white dress. The boy on the left is wearing a green shirt and pants. The boy on the right is wearing a blue shirt and shorts. They look happy.",
        "question2": "Tell me about a game you played when you were a child.",
        "question2_answer": "When I was a child I played with a Playstation. I played a game called Crash. It was a very popular game. The game has an animal. He must jump and kick. To win the game you must eat the apples. It was a fun game.",
        "question3": "How have the children's games changed in the last 50 years?",
        "question3_answer": "In the last 50 years, children’s games have changed a lot. In the past children played mostly outside. They played games like football or they played with toys. They didn’t have phones or tablets. Nowadays children play inside a lot. They play games like Playstation games or they play games on their phones. I think it’s not good for them to play inside so much."
    }, {
        "urlpic1": "/images/speaking/part2/17.png",
        "question1": "Describe the picture?",
        "question1_answer": "it’s an interesting picture. In this picture, I can see a man reading a newspaper. He’s wearing a black suit and a blue tie. He looks about 30 years old. He has short brown hair. Behind him, there are many televisions. The TVs are showing some programs. I think they’re news programs. The TVs are a little old now.",
        "question2": "How do most people in your country learn about world news?",
        "question2_answer": "In my country, there are many ways to learn about world news. You can watch or read the news online, you can read a newspaper, and you can listen to the radio. I think the most popular way of receiving news is online. There are many websites, but you can also get news through social media like Twitter and Facebook. It’s very convenient for me.",
        "question3": "How has the reporting of news changed in the last fifty years?",
        "question3_answer": "That’s an interesting question. 50 years ago the news was reported by radio. People didn’t have the internet and not many people had TVs. Radio was very important 50 years ago worldwide. People could listen to the radio at home, in their cars, or in the restaurant."
    }, {
        "urlpic1": "/images/speaking/part2/18.png",
        "question1": "Describe the picture?",
        "question1_answer": "Five men are climbing a rugged mountain, working together to reach the top. They’re dressed in proper gear—hiking boots, backpacks, and jackets—ready to face the challenges of nature. The trail looks steep and rocky, but they seem determined, helping each other along the way. The background is stunning, with towering peaks and a clear blue sky that makes the scene feel adventurous and inspiring. It’s a picture of teamwork, resilience, and the thrill of conquering challenges in the great outdoors.",
        "question2": "Do you like to climb mountains?",
        "question2_answer": "I don’t climb mountains (being AI and all), but it sounds amazing! I’d imagine it’s a mix of hard work, excitement, and pure freedom when you’re out there in nature. Reaching the top must feel so rewarding, like you’ve conquered something big. Plus, the views are probably unbeatable—totally worth the effort. If I could, I’d love to try it, even if just for the peace and beauty of being surrounded by nature.",
        "question3": "Do you think outdoor activities are important?",
        "question3_answer": "Definitely! Outdoor activities are great for both physical and mental health. They get you moving, help you stay fit, and reduce stress. Being outside also connects you to nature, which can be super calming and refreshing. Activities like hiking, biking, or even just walking are perfect for recharging and breaking away from screens and routines. They’re also great for bonding with friends or family and learning new skills like teamwork or resilience. It’s all about balance, and outdoor time is a big part of that!"
    }, {
        "urlpic1": "/images/speaking/part2/19.png",
        "question1": "Describe the picture?",
        "question1_answer": "A family is gathered in a cozy living room, radiating warmth and happiness. The parents sit on a comfortable couch, smiling as their children play on the soft rug in front of them. The room is inviting, with a few toys scattered around, a coffee table with a book or two, and perhaps a family photo hanging on the wall. The kids are laughing, completely immersed in a game or activity, while the parents look relaxed and engaged. It’s a scene full of love, connection, and the simple joy of being together at home.",
        "question2": "Why is it important to play with children?",
        "question2_answer": "•	Playing with kids isn’t just fun—it’s how they learn and grow! It helps them develop social, emotional, and problem-solving skills while creating a strong bond with their parents. When parents play, it shows kids they’re valued, boosting their confidence and happiness. It also opens up communication, making it easier for kids to share their thoughts and feelings. Plus, playtime is a chance to create happy memories that stick with children for life.",
        "question3": "How should parents spend time together with their children?",
        "question3_answer": "Parents should spend quality time doing activities their kids enjoy, like playing games, reading, or doing crafts. Outdoor adventures, like a trip to the park or a nature walk, are great for bonding. Mealtimes are also perfect for connecting—talking about everyone’s day over dinner. Even simple things, like helping with homework or cooking together, can create meaningful moments. The key is being present and giving kids undivided attention, making them feel loved and important."
    }, {
        "urlpic1": "/images/speaking/part2/20.png",
        "question1": "Describe the picture?",
        "question1_answer": "A heartwarming moment of a mother and her baby riding a horse together. The baby, securely seated in front, looks wide-eyed and excited, while the mother holds the reins confidently, ensuring safety. They’re likely in a peaceful countryside setting, surrounded by green fields and a clear sky. The horse is calm and steady, as if it understands the precious cargo it’s carrying. The scene radiates love, trust, and the joy of introducing a child to the beauty of nature and animals.",
        "question2": "Tell me about an animal that you like?",
        "question2_answer": "I really like dogs! They’re loyal, friendly, and always bring positive energy. They’re also super smart and can learn all kinds of tricks or tasks. What’s great about dogs is how they adapt to their owners—some are playful, while others are more protective or calm. Plus, they’re always excited to see you, no matter what kind of day you’ve had. If I had a dog, I’d imagine it being my perfect adventure buddy.",
        "question3": "How important are animals in our lives?",
        "question3_answer": "Animals are incredibly important! They provide companionship, like pets that make us feel loved and less lonely. In nature, they’re vital to ecosystems, helping maintain balance by pollinating plants or controlling populations. Some animals, like horses or dogs, help us work, while others give us food or materials. Beyond that, animals teach us empathy and responsibility, especially when we care for them. They remind us how connected we are to the world around us."
    }, {
        "urlpic1": "/images/speaking/part2/21.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, I see a father and his son. They are wearing different colored casual clothes. I could tell they were having fun playing soccer on a grass field. It looks like they are very on cloud nine and full of energy. Looking at the background, I can see a lot of trees. In this picture, I can tell that the weather is very lovely and gorgeous.",
        "question2": "What are the benefits of outdoor activities?",
        "question2_answer": "Outdoor activities have many advantages. They keep you physically healthy by promoting exercise and fresh air, which helps your heart and lungs. They also boost mental well-being, reducing stress and lifting your mood. Being in nature creates a sense of connection to the environment and encourages social interactions. Lastly, outdoor activities help develop skills like teamwork and problem-solving. In summary, they're good for your physical health, mental happiness, social connections, and skill-building.",
        "question3": "Why do many people like outdoor activities?",
        "question3_answer": "Many people enjoy outdoor activities for various reasons. Firstly, being outdoors allows them to connect with nature and enjoy the fresh air. Outdoor activities like hiking or biking provide opportunities for exercise, promoting physical health. Additionally, outdoor settings often reduce stress and improve overall well-being. The natural environment offers a break from daily routines, fostering a sense of relaxation. Moreover, outdoor activities can be a social experience, providing opportunities to spend time with friends and family. Overall, people appreciate outdoor activities for their physical, mental, and social benefits."
    }, {
        "urlpic1": "/images/speaking/part2/22.png",
        "question1": "Describe the picture?",
        "question1_answer": "A father and child are in the kitchen, cooking together. The dad is wearing an apron, focused on chopping vegetables or stirring a pot, while the child excitedly helps, maybe holding a spoon or mixing something in a bowl. The kitchen is warm and lively, with ingredients and utensils neatly laid out. The child looks curious and happy, learning and bonding with their dad through this simple activity. It’s a moment filled with love, teamwork, and the joy of creating something together.",
        "question2": "In your country, do parents care about their children?",
        "question2_answer": "Yes, parents care deeply about their children. They invest time and energy into ensuring their kids grow up happy, healthy, and successful. From helping with homework to preparing meals and guiding them through life’s challenges, parents prioritize their children’s well-being. It’s common for parents to make sacrifices, like working extra hours or giving up personal comforts, to provide better opportunities for their kids. They also celebrate their children’s achievements, big or small, showing constant support and love.",
        "question3": "Why do parents care about their children?",
        "question3_answer": "Parents care for their children because of the deep emotional connection and instinct to protect and nurture them. They see their kids as a reflection of themselves and want to help them succeed and thrive in life. Caring is also a way to pass down values, traditions, and skills. Beyond biology, it’s about love and responsibility—parents feel fulfilled when they see their children happy, confident, and ready to face the world."
    }, {
        "urlpic1": "/images/speaking/part2/23.png",
        "question1": "Describe the picture?",
        "question1_answer": "A young woman is walking through a supermarket, pushing a cart filled with groceries. She’s casually dressed, with a shopping list in hand, navigating the aisles with focus. The shelves are neatly stocked with a variety of food and household items, and she seems to be in the process of picking out the essentials. The store is bright and bustling, filled with other shoppers picking out products. It’s a typical scene of everyday life, where people go about their errands, making choices about what to buy.",
        "question2": "Tell me the time you shopped in a local store?",
        "question2_answer": "I haven’t personally shopped, but I can imagine it’s pretty enjoyable for many people! A trip to a local store can be a relaxing experience—taking time to wander through aisles, checking out new products, or grabbing a snack from the bakery section. For some, it’s even a social activity, where they bump into neighbors or friends. It’s a moment of connecting with the community while getting the things you need, like fresh produce or household items.",
        "question3": "Nowadays, why do people like shopping online?",
        "question3_answer": "Online shopping has become super popular because it’s so convenient. People can shop anytime, anywhere, without leaving their homes, which saves time and effort. It’s also easy to compare prices and find exactly what you're looking for with just a few clicks. There are tons of options, and many sites offer fast delivery or even same-day shipping. Plus, you can read reviews to make informed choices before buying. It’s a huge time-saver, especially for busy people!"
    }, {
        "urlpic1": "/images/speaking/part2/24.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this image, a person is being interviewed, likely sitting across from someone with a microphone or recording device. The setting could be in an office, a studio, or another professional environment. The person being interviewed is looking attentive and engaged, while the interviewer is asking questions, maybe taking notes or making eye contact. There may be a camera or some equipment in the background, showing it’s a formal interview. The overall vibe is one of communication, information exchange, and professional interaction.",
        "question2": "Do you prefer reading newspapers or watching news?  ",
        "question2_answer": "I don’t watch or read the news myself, but I know both options have their benefits! Some people prefer reading newspapers because they can take their time with articles, digesting information in depth. Plus, you can read at your own pace, whether in print or online. Others enjoy watching the news because it’s quick, visual, and gives a more immediate feel of events happening in real-time, often with interviews or live coverage. Each has its charm depending on whether you prefer detailed reading or quick updates.",
        "question3": "Why do people need to watch the news?",
        "question3_answer": "Watching the news is important because it keeps people informed about what’s going on in the world. It provides updates on everything from politics and global events to weather and local issues. By staying informed, people can make better decisions in their personal and professional lives, stay aware of potential dangers, and engage in conversations about important topics. News also helps people understand different perspectives and can raise awareness on social or environmental issues, helping them make more conscious choices."
    }, {
        "urlpic1": "/images/speaking/part2/25.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, a crowd of people is walking across a busy street. Some are in a hurry, while others are strolling at a more relaxed pace. The street is filled with pedestrians, and in the background, you can see tall buildings, cars, and traffic lights. There’s a sense of organized chaos—everyone moving in different directions, yet the flow of the crowd seems to be working despite the hustle and bustle. People are dressed in a mix of casual and work clothes, suggesting it’s a busy time of day, like during a morning rush.",
        "question2": "What do you think about living in a crowded city?",
        "question2_answer": "Living in a crowded city can be exciting but also challenging. On one hand, there’s so much to do—restaurants, events, cultural activities, and endless opportunities for socializing or networking. However, the noise, traffic, and lack of personal space can be overwhelming at times. Some people thrive in the fast-paced energy, while others might find it exhausting. It really depends on whether you enjoy the constant movement and convenience or prefer a slower, quieter lifestyle.",
        "question3": "Why do many people hate crowded places?",
        "question3_answer": "Many people dislike crowded places because they feel overwhelmed by the noise, the lack of personal space, and the constant movement around them. It can be hard to relax or focus when there are too many people, and the chaos can lead to feelings of stress or frustration. Additionally, crowded spaces can feel impersonal, and it can be difficult to enjoy an experience or even perform simple tasks like shopping or commuting when there are too many people around. It’s all about the balance between having enough space and the convenience of being in a lively environment."
    }, {
        "urlpic1": "/images/speaking/part2/26.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, a woman is sitting comfortably on a bus, looking out the window, perhaps lost in thought or enjoying the view. She’s dressed casually, with her bag by her side. The bus interior is typical—seats arranged in rows, with some space around her. The soft light coming through the window highlights the peacefulness of the moment. Other passengers can be seen, but the focus is on her, suggesting a moment of quiet reflection during a daily commute or a short trip.",
        "question2": "When was the last time you went on vacation with someone else?",
        "question2_answer": "The last time I went on vacation with someone else was about a year ago. I went with my close friends to the beach. It was a relaxing trip where we enjoyed swimming, sunbathing, and playing beach volleyball. We also visited some local restaurants and tried different types of food. It was a fun time because we were all able to relax and enjoy each other's company.",
        "question3": "What are the benefits of hanging out with other people?",
        "question3_answer": "Hanging out with others has a lot of benefits! It helps build strong social connections, which are important for emotional well-being. Spending time with friends or family can boost your mood, reduce stress, and provide support during tough times. It’s also a great way to learn from others, try new things, and create fun memories. Being around people can even increase your sense of belonging and help you feel more connected to the world around you."
    }, {
        "urlpic1": "/images/speaking/part2/27.png",
        "question1": "Describe the picture?",
        "question1_answer": "As I can see in this picture, there are a girl and her mother. The girl is surprising her mother by covering her eyes with her hands, so her mother can’t see the flowers. They both look very happy, and it seems like it might be Mother’s Day or her mother's birthday.",
        "question2": "Tell me about a time you received or gave gifts?",
        "question2_answer": "Last year, for my birthday, I received a special gift from a close friend. It was a handmade journal because they knew I liked writing. They wanted to help me organize my thoughts and ideas. It was such a thoughtful present, and it really touched me. It showed that they paid attention to what I enjoy. I still use it every day, and whenever I write in it, I remember them.",
        "question3": "On what occasions do people in your country give gifts?",
        "question3_answer": "In my country, people give gifts for many reasons. The most common occasions are birthdays, weddings, and holidays. For example, during Tet (Lunar New Year), people often give gifts like fruits, cakes, or money in red envelopes to wish others good luck for the year. Gifts are also exchanged at weddings, anniversaries, or when visiting friends or family. It’s a way of showing respect and good wishes. Even small gifts, like bringing something when visiting friends or family, are common."
    }, {
        "urlpic1": "/images/speaking/part2/28.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, a man is sitting at a desk, focused on writing a letter by hand. He holds a pen with careful attention, perhaps drafting a thoughtful message. The desk is organized, with a few stationery items, like an envelope and ink bottle, nearby. Soft light from a window or lamp illuminates the space, creating a peaceful, reflective atmosphere. The man’s expression shows concentration, as he pours his thoughts onto the paper, adding a personal touch to his communication.",
        "question2": "Have you ever written a hand letter?",
        "question2_answer": "Yes, I have written a hand letter before. I remember I wrote one to my best friend when she moved to another city. At that time, we didn’t use email or social media very much, so writing a letter was the best way to share news. I told her about my school, my family, and the things we used to do together. I also decorated the envelope with some stickers. It felt more personal and special than sending a message on the phone. When I got her reply, I was very happy and kept it in a box. I think hand letters are a nice way to keep memories.",
        "question3": "Do you plan to write handwritten letters in the future?",
        "question3_answer": "Yes, I do plan to write handwritten letters in the future. Although we can easily send messages or emails now, I think there's something special about receiving a hand letter. It's more personal, and it shows that you took time and effort to write it. I might write letters for special occasions like birthdays or holidays, or just to send a note to a close friend or family member. I believe handwritten letters can create meaningful memories, and they are a nice way to express feelings that might be hard to say in a text."
    }, {
        "urlpic1": "/images/speaking/part2/29.png",
        "question1": "Describe the picture?",
        "question1_answer": "Looking at the picture, I can see a lot of people. They are wearing different casual clothes. It looks like they were at a museum or an art gallery and the paintings are very beautiful and profound. I can tell that they are looking very attentively at the paintings to evaluate them. I believe that they are on cloud nine and full of energy.",
        "question2": "What are the benefits of viewing artworks?",
        "question2_answer": "Viewing artworks has many benefits. First, it helps us to relax and reduce stress. When we look at beautiful paintings or sculptures, it can calm our minds and make us feel peaceful. Art also encourages creativity, as it can inspire new ideas or ways of thinking. Additionally, art allows us to learn about different cultures and histories, giving us a deeper understanding of the world. Lastly, viewing art can be an emotional experience, helping us connect with our feelings and express ourselves better.",
        "question3": "Why do people like to go to art exhibitions?",
        "question3_answer": "People like to go to art exhibitions for many reasons. First, it’s a great way to experience new and unique artworks that they might not see anywhere else. Art exhibitions also provide an opportunity to learn more about different artists and their creative processes. For many people, visiting exhibitions is an enjoyable way to connect with art, which can be relaxing and inspiring. Additionally, exhibitions often have a special atmosphere that allows people to appreciate art in a quiet, focused environment. It’s also a social activity, as people enjoy discussing their thoughts and feelings about the art with friends or other visitors."
    }, {
        "urlpic1": "/images/speaking/part2/30.png",
        "question1": "Describe the picture?",
        "question1_answer": "The picture shows a group of women walking down a busy street. They are holding shopping bags and smiling happily. They are dressed nicely and look excited as they enjoy their shopping day. The street is full of people, and there are many shops with colorful windows. You can also see a café or two in the background. The atmosphere is lively, and everyone is enjoying the busy street. The women are talking and having fun as they walk.",
        "question2": "Tell me the last time you went shopping?",
        "question2_answer": "The last time I went shopping was about a week ago. I needed to buy some clothes for an upcoming event. I went to a shopping mall near my house. It was a busy day, but I enjoyed it because I found a nice jacket that I really liked. I also bought a pair of shoes. After shopping, I went to a café to relax and have a coffee. It was a fun day, and I was happy with the things I bought.",
        "question3": "Why do some people dislike busy places?",
        "question3_answer": "Some people dislike busy places because they can feel crowded and noisy. It can be hard to relax or concentrate when there are too many people around. The noise and the rush can make some people feel stressed or overwhelmed. Also, busy places often have long lines or wait times, which can be frustrating. Some people prefer quiet and calm environments where they can think clearly and enjoy a peaceful atmosphere."
    }, {
        "urlpic1": "/images/speaking/part2/31.png",
        "question1": "Describe the picture?",
        "question1_answer": "In the picture, there is a young couple standing in front of a shop window. The woman, with long blonde hair, is wearing a pink vest and holding shopping bags. It looks like they have just finished shopping. Her partner, who is wearing a light brown shirt, is standing next to her and has his arm around her. He is pointing to a pink sportswear outfit behind the window. It seems like he is showing interest in her choice. Both of them look happy and excited as they enjoy their time shopping together.",
        "question2": "Tell me about the last time you went shopping?",
        "question2_answer": "The last time I went shopping was last weekend. I went to a mall with a friend because I needed to buy some new clothes for the summer. We walked around different stores and tried on a few things. It was a fun day, and I ended up buying a new t-shirt and some shoes.",
        "question3": "Why do many people enjoy shopping with friends?",
        "question3_answer": "Many people enjoy shopping with friends because it makes the experience more fun. When you shop with friends, you can give each other advice on what to buy, try clothes together, and share opinions. Shopping with friends also helps to make the day more social and enjoyable, as you can chat and laugh while looking at different items."
    }, {
        "urlpic1": "/images/speaking/part2/32.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, I see a man and his child. They are wearing simple clothes, but they know how to mix them well to look nice. It looks like they are having breakfast together, and they seem very close, so I think they are a family. In the background, they are sitting near a refrigerator, so maybe they are in the kitchen. This picture reminds me of a moment with my dad three years ago. It looks very beautiful, and I think a professional photographer took it.",
        "question2": "What do you usually eat for breakfast?",
        "question2_answer": "For breakfast, I usually eat something simple and quick. Most mornings, I have a bowl of cereal with milk. Sometimes, I eat toast with butter or jam, and I drink a cup of tea or coffee. On weekends, I like to have something special, like pancakes or eggs with vegetables. I try to eat a healthy breakfast to start the day with energy.",
        "question3": "Is it important to eat a good breakfast? Why?",
        "question3_answer": "Yes, it is important to eat a good breakfast. Breakfast gives us the energy we need to start the day. After sleeping, our body needs food to wake up and be active. Eating a healthy breakfast can help improve concentration and focus, especially at school or work. It also helps to keep us full for longer, so we don’t feel hungry before lunch. A good breakfast with healthy food, like fruits, eggs, or whole grains, can also help keep us healthy."
    }, {
        "urlpic1": "/images/speaking/part2/33.png",
        "question1": "Describe the picture?",
        "question1_answer": "In the picture, there is a little girl lying on the grass, listening to music. She looks happy, and I think she is around 8 years old. She may be listening to her favorite music on the weekend. Her parents have probably taught her to enjoy music in her free time. It’s nice that she has found a good way to spend her free time.",
        "question2": "What do you do to relax?",
        "question2_answer": "I like doing many things to relax, such as playing badminton, reading books, and swimming. However, I mostly enjoy reading books. They always make me curious and help me learn new things. I also like staying at home in my free time because I feel calm and relaxed when I read in my room or water my plants in the garden.",
        "question3": "Why is it important for people to relax?",
        "question3_answer": "Relaxing is important for everyone for many reasons. First, it helps you feel comfortable and relaxed after a busy day. Relaxing also makes you feel happier. It improves your mood and helps you remember things better. After relaxing, you can concentrate better and sleep well at night. So, don’t forget to relax and take care of yourself."
    }, {
        "urlpic1": "/images/speaking/part2/34.png",
        "question1": "Describe the picture?",
        "question1_answer": "In this picture, a boy is surprising his mother. He is covering her eyes with his hands, so she cannot see the flowers. It could be Mother’s Day or her birthday. They both look very happy.",
        "question2": "Tell me about a time when you gave or received some flowers?",
        "question2_answer": "I gave my friend flowers because she had a baby. She gave birth last year in Qatif, the city where we live. I bought the flowers from a shop and chose pink flowers because she had a girl.",
        "question3": "On what occasions in your country do people give flowers?",
        "question3_answer": "In Vietnam, people give flowers on many occasions. They give flowers for birthdays, graduations, weddings, or when a baby is born. People also give flowers to say congratulations, sorry, or to show their love."
    }, {
        "urlpic1": "/images/speaking/part2/35.png",
        "question1": "Describe the picture?",
        "question1_answer": "In the picture, I see a man drawing a painting. He has all the tools he needs, like pencils, paper, and an easel. I think he is a professional artist. He looks happy while drawing, so I believe drawing is not just his job, but also his passion.",
        "question2": "Describe the last time you looked at some art",
        "question2_answer": "To be honest, I don’t have many chances to look at art because I’m always busy. But I remember the last time I went to an art museum with my mom, about two months ago. The museum had many famous paintings by different artists. The painting I liked most was one of a woman wearing the Vietnamese national costume. It made me feel proud of our culture.",
        "question3": "Why do people enjoy creating art?",
        "question3_answer": "People enjoy creating art for several reasons. First, art makes our surroundings more beautiful. It helps us forget the stress of daily life. Second, making art helps us remember a specific moment, person, or place. Third, art allows us to express our feelings, love, and dreams. Art is an important part of being human."
    }, {
        "urlpic1": "/images/speaking/part2/36.png",
        "question1": "Describe the picture?",
        "question1_answer": "In the picture, I see a woman and a little girl sitting together on a sofa. The woman is holding a book and reading it to the girl. They are both smiling and look very happy. The girl is holding a teddy bear and they are covered with a soft blanket. The room looks bright with large windows and natural light. It seems like they are enjoying a peaceful moment, maybe reading a bedtime story or learning something new. The atmosphere is warm and loving, showing the special bond between them. It’s a very sweet and relaxing scene.",
        "question2": "Why is it important to play with children?",
        "question2_answer": "Playing with children is very important because it helps them learn and grow. When children play, they develop new skills like problem-solving, communication, and teamwork. It also helps them become more creative and active. Playing together strengthens the bond between adults and children, making them feel happy and loved. It also teaches children how to share and follow rules. In addition, outdoor play helps improve their health by making them exercise and enjoy fresh air. Overall, playing with children is fun and helps them learn important lessons.",
        "question3": "How should parents spend time together with their children?",
        "question3_answer": "Parents should spend time with their children by doing fun activities together. They can play games, go to the park, or do arts and crafts. Reading books together is also a great way to bond. Parents can teach their children new things, like cooking or gardening. Spending time outdoors, like going for walks or cycling, is good for health and fun. It’s important for parents to listen to their children, talk with them, and show love. This helps children feel happy and cared for. Quality time together makes the relationship stronger."
    }, {
        "urlpic1": "/images/speaking/part2/37.png",
        "question1": "Describe the picture?",
        "question1_answer": "In the picture, there are three people sitting at a table. One person is talking while the others are listening. The person talking is holding some papers in their hands and seems to be explaining something. The two people listening are focused on the speaker. One is holding a coffee cup, and the other has a laptop open on the table. They all look dressed in formal clothes, suggesting that they are having a professional meeting or discussion.",
        "question2": "Do you like visiting an exhibition?",
        "question2_answer": "Yes, I enjoy visiting exhibitions because they give me the chance to learn about different kinds of art and culture. It’s a great way to see creativity up close and appreciate new ideas. Exhibitions also have a peaceful atmosphere where I can think about the artwork and connect with my feelings.",
        "question3": "What should teachers do to help young people like visiting exhibitions?",
        "question3_answer": "Teachers can help young people enjoy exhibitions by making the experience more fun and interesting. They can organize group discussions, encourage students to share their thoughts about the art, and connect the exhibits to topics that students care about. Teachers can also give background information about the artists or the art themes, which will help students feel more curious and make the visit more enjoyable."
    }, // {
    //     "urlpic1": "/images/speaking/part2/1.png",
    //     "question1": "Describe the picture?",
    //     "question1_answer": "",
    //     "question2": "Question1",
    //     "question2_answer": "",
    //     "question3": "Question2",
    //     "question3_answer": ""
    // },

    ];

    let currentSetIndex = 0;
    // Theo dõi phần tử hiện tại trong mảng questions
    let currentQuestionIndex = 1;
    // Theo dõi câu hỏi hiện tại trong mỗi phần tử (1 - question1, 2 - question2, 3 - question3)

    // Hàm cập nhật modal với câu hỏi và đáp án theo index phần tử trong mảng và câu hỏi
    function updateModalContent(questionIndex) {
        const currentQuestions = questions[currentSetIndex];
        // Lấy phần tử câu hỏi hiện tại trong mảng
        const questionKey = `question${questionIndex}`;
        // Câu hỏi hiện tại (question1, question2, question3)
        const answerKey = `${questionKey}_answer`;
        // Đáp án tương ứng

        document.getElementById("question_id").innerHTML = "Speaking II - Question " + (currentSetIndex + 1) + "/" + (questions.length);
        document.getElementById("question1Text").innerHTML = currentQuestions.question1;
        document.getElementById("question2Text").innerHTML = currentQuestions.question2;
        document.getElementById("question3Text").innerHTML = currentQuestions.question3;

        // Cập nhật tiêu đề modal và nội dung đáp án
        document.getElementById("answerModalLabel").textContent = currentQuestions[questionKey];
        document.getElementById("answerText").innerHTML = `<strong>Đáp án: \n</strong> ${currentQuestions[answerKey]}`;
        // Cập nhật hình ảnh
        document.getElementById("img1").src = currentQuestions.urlpic1;
        // Cập nhật ảnh 1
    }

    // Lắng nghe sự kiện nhấn nút "Xem đáp án" cho câu 1
    document.getElementById("btnQuestion1").addEventListener("click", function() {
        updateModalContent(1);
        // Hiển thị câu hỏi 1
    });

    // Lắng nghe sự kiện nhấn nút "Xem đáp án" cho câu 2
    document.getElementById("btnQuestion2").addEventListener("click", function() {
        updateModalContent(2);
        // Hiển thị câu hỏi 2
    });

    // Lắng nghe sự kiện nhấn nút "Xem đáp án" cho câu 3
    document.getElementById("btnQuestion3").addEventListener("click", function() {
        updateModalContent(3);
        // Hiển thị câu hỏi 3
    });

    // Lắng nghe sự kiện nhấn nút "Next"
    document.getElementById("nextButton").addEventListener("click", function() {
        if (currentSetIndex < questions.length - 1) {
            // Nếu còn phần tử tiếp theo trong mảng
            currentSetIndex++;
            // Chuyển đến phần tử tiếp theo trong mảng
            updateModalContent(1);
            // Quay lại câu hỏi đầu tiên của phần tử mới
        }
    });

    // Lắng nghe sự kiện nhấn nút "Back"
    document.getElementById("backButton").addEventListener("click", function() {
        if (currentSetIndex > 0) {
            // Nếu còn phần tử trước đó trong mảng
            currentSetIndex--;
            // Quay lại phần tử trước trong mảng
            updateModalContent(1);
            // Quay lại câu hỏi đầu tiên của phần tử trước đó
        }
    });

    // Cập nhật lần đầu tiên khi trang được tải
    updateModalContent(1);
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
