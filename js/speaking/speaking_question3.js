document.addEventListener("DOMContentLoaded", function() {
    // Mảng câu hỏi và đáp án
    const questions = [{
        "urlpic1": "/images/speaking/part3/de01_1.png",
        "urlpic2": "/images/speaking/part3/de01_2.png",
        "question1": "Describe the picture?",
        "question1_answer": "<strong>\nAs I can see in the first picture,</strong> there is a family traveling by car.The man is driving while the woman is sitting beside him. They all look very happy. The environment looks peaceful and comfortable, with natural light coming through the car windows.<strong>\n\nOn the other hand, in the second picture, </strong>there are four people sitting together on a train. They seem to be relaxed, talking, and enjoying their time. The atmosphere is friendly, and they appear to be having a pleasant journey.<strong>\n\nBoth pictures show</strong> people traveling, but in different ways. I prefer the first image because I enjoy the freedom of a road trip, where I can stop whenever I want to explore, try local food, take pictures, and enjoy the journey at my own pace.",
        "question2": "What are the benefits of traveling by car or by train?",
        "question2_answer": "Traveling by car and by train both have benefits.\n\nWhen you travel by car, you have the freedom to go wherever you want and stop at any place you like.\nIt is also convenient if you have a lot of luggage or are traveling with family.\nYou can enjoy the scenery and make your trip more personal.\n\nOn the other hand, traveling by train is relaxing because you do not have to drive.\nTrains can be more comfortable for long trips and you can walk around or use the bathroom easily.\nTrain travel is also better for the environment because it reduces pollution.\n\nBoth options offer different advantages depending on your needs and preferences.",
        "question3": "Why do some people like to travel by train?",
        "question3_answer": "Some people like to travel by train for several reasons.\n\nFirst, trains are often very comfortable, with spacious seats and the ability to walk around during the journey.\nThis makes long trips more enjoyable.\n\nSecond, train travel can be more relaxing because you don’t need to worry about driving or traffic.\nYou can sit back, read a book, or enjoy the view outside.\n\nThird, trains are often more eco-friendly than cars or planes, which helps reduce pollution.\nAdditionally, trains can offer beautiful scenic routes, allowing passengers to see interesting landscapes.\n\nFinally, train stations are usually located in city centers, making it easier to get to your destination."
    }, {
        urlpic1: "/images/speaking/part3/de02_1.png",
        urlpic2: "/images/speaking/part3/de02_2.png",
        question1: "Describe the picture?",
        question1_answer: "<strong>As I can see in the first picture</strong>, there are two children sitting at a table playing chess. They look focused and are enjoying the game. The environment seems calm, and they appear to be in deep concentration.<strong>\n\nOn the other hand, in the second picture,</strong> two kids are sitting on a couch playing video games.They are holding controllers and smiling.The room looks cozy and bright, and the children seem to be having a great time.<strong>\n\nBoth pictures show</strong> children having fun, but in different ways. I prefer the first image because I enjoy the intellectual challenge of a board game, where strategic thinking is key. However, the second image also looks fun, as video games provide a fast-paced, interactive experience.",
        question2: "Do you prefer playing chess or video games, why?",
        question2_answer: "I prefer playing video games because they are more exciting and fun. Video games have colorful graphics, interesting stories, and many challenges that make me want to play more. I can play alone or with friends, which makes it social and enjoyable. However, I think chess is also a great game because it helps improve thinking and planning skills. Sometimes, I enjoy playing chess when I want a quiet and relaxing activity. But overall, I like video games more because they are faster, more modern, and have many options to choose from.",
        question3: "Are outdoor activities important and why?",
        question3_answer: "Yes, outdoor activities are very important. They help people stay healthy and active by moving their bodies and getting fresh air. Activities like running, playing sports, or walking in the park are good for the heart and muscles. Outdoor activities are also fun and help reduce stress because they let people connect with nature. They are a great way to spend time with friends and family, making relationships stronger. Children, especially, learn teamwork and new skills through outdoor games. Overall, outdoor activities keep the mind and body strong and improve happiness and well-being."
    }, {
        urlpic1: "/images/speaking/part3/de03_1.png",
        urlpic2: "/images/speaking/part3/de03_2.png",
        question1: "Describe the picture?",
        question1_answer: "<strong>As I can see in the first picture, </strong>there is a forest with tall green trees. The trees are very big, and the background shows mountains and the sky during sunset. The forest looks quiet and peaceful, perfect for hiking or enjoying nature. <strong>\n\nOn the other hand, in the second picture,</strong> there is a beach with clear blue water and white sand. There are palm trees and chairs on the beach, making it a relaxing place to rest or enjoy the sun. <strong>\n\nBoth pictures show</strong> the beauty of nature, but in different ways. I prefer the first image because I enjoy the calmness and peace of the forest, where I can go hiking, breathe fresh air, and experience the beauty of nature up close. However, the second image also looks wonderful, as the beach offers a great place to relax and enjoy the warmth of the sun.",
        question2: "Which place do you like better? Pine forest or beach?",
        question2_answer: "I like the beach better because it feels relaxing and peaceful. The sound of the waves and the soft sand make it a perfect place to rest. I enjoy swimming in the clear blue water and lying under the shade of palm trees. The beach is also great for watching sunsets and spending time with friends or family. Although the pine forest is beautiful and calm, I prefer the beach because of the warm weather and the chance to enjoy outdoor activities like swimming and walking on the sand. It is my favorite place to feel happy and free.",
        question3: "Does weather affect human emotions? Why?",
        question3_answer: "Yes, weather affects human emotions because it changes how we feel and act. Sunny weather makes people feel happy and energetic because they can go outside and enjoy activities. Rainy weather can make people feel sad or lazy because they stay indoors. Cold weather can feel cozy for some people, but it can also make others feel tired or unhappy. Hot weather can be fun at the beach, but it can also make others feel uncomfortable. Different types of weather can affect our mood because they change the environment around us and how we experience our day.",
    }, {
        urlpic1: "/images/speaking/part3/de04_1.png",
        urlpic2: "/images/speaking/part3/de04_2.png",
        question1: "Describe the picture?",
        question1_answer: "<strong>As I can see in the first picture,</strong> there are four men who are football players. They are standing in a stadium, and there is a sports match happening. It seems like this is a very important match because I see a lot of spectators in the stands. The weather looks very nice, with clear skies and bright sunlight.<strong>\n\nOn the other hand, in the second picture</strong>, there is a woman who looks quite young, around 25 years old. She is jumping over a stick, and this seems to be a competition for athletes. The atmosphere looks energetic and focused.<strong>\n\nBoth pictures</strong> are very nice, and I think they were taken by professional photographers, capturing the energy and excitement of these events.",
        question2: "What is the difference between these 2 sports?",
        question2_answer: "The difference between two sports depends on which ones we are talking about. For example, football and basketball are different in many ways. In football, players use their feet to kick the ball and score goals, while in basketball, players use their hands to dribble and shoot the ball into a hoop. Football is played on a large field, and basketball is played on a smaller court. Another difference is the number of players. Football usually has 11 players on each team, while basketball has 5. The rules of the games are also different, like how points are scored and how long the game lasts. Even though they are different, both sports are fun, and they help players stay active and healthy.",
        question3: "Why are some sports more important than others?",
        question3_answer: "Some sports are more important than others because they are more popular, have a bigger impact, or are played by more people. For example, sports like football and basketball are important because they are played all over the world, with millions of fans watching big tournaments like the World Cup or the NBA. These sports bring people together and create excitement. Some sports are important because they teach valuable skills, like teamwork, discipline, and leadership. In some countries, certain sports are part of the culture and history, making them more meaningful. However, all sports are important in their own way because they help people stay healthy, have fun, and learn new skills even if they are not as famous as others.",
    }, {
        urlpic1: "/images/speaking/part3/de05_1.png",
        urlpic2: "/images/speaking/part3/de05_2.png",
        question1: "Describe the picture?",
        question1_answer: "<strong>As I can see in the first picture,</strong> there are three friends who are studying together. They are wearing different casual clothes and seem to be studying very hard. Looking at the background, I believe this is a library filled with many books.<strong>\n\nOn the other hand, in the second picture</strong>, there is a man reading a book in a coffee shop. He is wearing a striped shirt and is sitting next to the window of the cafe. The weather outside looks very nice, with clear skies and bright sunlight. .<strong>\n\nBoth pictures show</strong> people studying, but in different places. I prefer the first image because I enjoy the peaceful and quiet environment of a library, where I can focus better on my studies. However, the second image also looks nice, as it offers a more relaxed and cozy setting in a cafe.",
        question2: "Do you prefer studying in the library or coffee shop? Why?",
        question2_answer: "I prefer studying in the library. Libraries are quiet and free, which helps me to focus on my work. They also have a variety of resources, such as books, articles, and computers, which can be helpful for research. However, I sometimes study in coffee shops. Coffee shops can be a social and welcoming environment. They also have free Wi-Fi, which can be helpful if I need to access online resources. In the end, the best place to study depends on my individual needs and preferences. If I need to focus on my work, I will study in the library. If I want to be more social, I will study in a coffee shop.",
        question3: "What are the difficulties of studying at the library and at coffee shops?",
        question3_answer: "Studying at a library can sometimes be challenging due to the rigid, quiet atmosphere, which may feel restrictive for some. On the other hand, coffee shops might pose difficulties with noise distractions and limited space. Libraries may lack the comfortable amenities that coffee shops provide, like refreshments. However, coffee shops may have inconsistent Wi-Fi or too much ambient noise. The choice depends on personal preferences, balancing the need for a quiet, focused environment with the desire for a more relaxed and comfortable setting.",
    }, {
        urlpic1: "/images/speaking/part3/de06_1.png",
        urlpic2: "/images/speaking/part3/de06_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a family of four: a father, a mother, and two daughters. They are sitting on the grass in their garden. The family looks happy and full of energy. It seems like they are enjoying a holiday or camping together.\n\nOn the other hand, in the second picture, there is a girl standing by a balcony. She is enjoying the fresh air on a sunny day. She is wearing light white clothes, which move in the breeze, making her feel free and comfortable. It seems like she enjoys being alone and having some quiet time.\n\nBoth pictures show people relaxing, but in different ways. I prefer the first picture because I like spending time with my family, having fun together. However, the second picture also looks nice because it shows a calm and peaceful moment alone.",
        question2: "Do you prefer living with family or living alone?",
        question2_answer: "I feel over the moon when I can live with my family because it provides a strong sense of support and emotional connection. Having loved ones around creates a warm, comforting environment, and it's reassuring to know help is always available. While living alone offers more independence, it can sometimes feel isolating. I enjoy the security and togetherness that comes with being close to family.",
        question3: "Nowadays, why do many people like to live alone?",
        question3_answer: "Many people today choose to live alone because it offers greater independence and personal freedom. It allows them to make decisions without compromising and gives them complete control over their space and schedule. Additionally, living alone promotes self-sufficiency, which is highly valued in our modern, fast-paced society.",
    }, {
        urlpic1: "/images/speaking/part3/de07_1.png",
        urlpic2: "/images/speaking/part3/de07_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a man riding a camel. It seems like he is in the desert because there is a pyramid behind him and golden sand all around him.\n\nOn the other hand, in the second picture, there is a man riding a horse-drawn carriage. He is wearing a very elegant suit. It seems like he is in a town.\n\nBoth pictures show people moving with animals, but in different ways. I prefer the first image because I like the idea of traveling in the desert and seeing the pyramids. However, the second picture also looks nice because it shows a calm and elegant way to travel in the town.",
        question2: "What are the interesting points of these 2 ways of traveling above?",
        question2_answer: "Riding a horse or camel is interesting because these animals make the journey special. Horses are fast and make the trip exciting, creating a strong bond with the rider. Camels are great for slower, relaxed journeys, letting travelers enjoy the surroundings. Both experiences connect people with animals, adding a unique touch to the trip. Riding horses or camels also lets us feel a connection to history, culture, and nature, making the journey more memorable and meaningful.",
        question3: "Should animals be treated like a means of transportation?",
        question3_answer: "I think animals shouldn't just be used as a way to get around. Even though they can help us travel, we need to be kind to them. Animals have feelings and needs, so it's not fair to treat them only as a transportation tool. Taking care of them means giving them enough rest and not making them work too much. We should be nice to animals and make sure they are treated well while still using them for transportation.",
    }, {
        urlpic1: "/images/speaking/part3/de08_1.png",
        urlpic2: "/images/speaking/part3/de08_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, a father and son are feeding a white horse in a park. The boy looks happy, showing the strong bond between people and animals.\n\nOn the other hand, in the second picture, three children are learning about animals in a classroom. They are studying a snake and other animals, which helps them learn more about them.\n\nBoth pictures show the positive relationship between humans and animals, but in different ways. I prefer the first picture because I enjoy seeing the emotional connection between people and animals. However, the second picture also looks nice because it shows children learning and gaining knowledge about animals.",
        question2: "2. Do you like interacting with animals?",
        question2_answer: "es, I really enjoy spending time with animals, particularly with dogs and cats. I believe they share emotions similar to humans, and they play a significant role in helping me unwind after a stressful day. When I return home after a hectic workday, I like to engage in playful moments with my pets. They react with excitement, wagging their tails and expressing joy whenever they hear my voice from a distance. Animals, especially pets, have this incredible ability to create a positive and stable atmosphere in my life. They bring joy and contribute to a sense of family closeness. Overall, I find animals to be not just wonderful companions but also a source of comfort and happiness in my everyday life.",
        question3: "Should children learn about animals?",
        question3_answer: "Yes, children should learn about animals. It helps them understand nature and the world around them. Learning about animals also teaches children to care for living things and respect all creatures. It can make them more curious and aware of the environment.",
    }, {
        urlpic1: "/images/speaking/part3/de09_1.png",
        urlpic2: "/images/speaking/part3/de09_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a man riding a bicycle on the road. He looks very young, and I guess he is about 36 years old. The weather looks very nice, and the trees next to the road are very green and lush.\n\nOn the other hand, in the second picture, I see eight women sitting on a boat. They are participating in a competition and look quite happy, so I think they are friends.\n\nBoth pictures are very beautiful, showing different activities. I think they were taken by professional photographers because the images look so clear and well-captured.",
        question2: "What are the difficulties of these two sports?",
        question2_answer: "Riding a bike and rowing both have their own difficulties. For riding a bike, one challenge is keeping balance, especially on uneven or rough roads. It can be hard to control the bike when going uphill or downhill. Long rides also require a lot of energy and strong legs. Staying focused to avoid accidents is also important. Rowing, on the other hand, is difficult because it requires a lot of upper body strength. Rowers must work hard to move the boat, and it can be tiring over long distances. Another challenge is teamwork in rowing. If you are in a team, everyone must row together at the same time for the boat to move smoothly. Both sports need strength and practice.",
        question3: "Why do many people prefer team sports rather than individual sports?",
        question3_answer: "Many people prefer team sports because they are more social and fun. In team sports, like football or basketball, players work together with friends or teammates. This creates a sense of community and makes the game more exciting. People enjoy cheering for each other and celebrating victories together. Team sports also help build strong friendships and teach important skills like teamwork and communication. Additionally, in team sports, players can share the challenges and support each other, which can be motivating. On the other hand, individual sports, like tennis or running, can be more lonely and require players to rely only on themselves. For many, the social and cooperative aspects of team sports make them more enjoyable.",
    }, {
        urlpic1: "/images/speaking/part3/de10_1.png",
        urlpic2: "/images/speaking/part3/de10_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a man standing in a very large pine forest. The weather looks very nice, and it seems like it is winter because the man is dressed warmly.\n\nOn the other hand, in the second picture, I see many people in the desert. They are walking together, so I think they are friends. The weather looks very hot, and they don't have any water. It reminds me of a memory I had while traveling.\n\nBoth pictures are beautiful, and I think they were taken by professional photographers because they look so clear and well-captured.",
        question2: "What types of people live in these places?",
        question2_answer: "In a pine forest, you can find people who enjoy nature and outdoor activities. These might include hikers, campers, and people who love to explore wildlife. Forest areas often attract those who appreciate quiet, natural surroundings and prefer a peaceful lifestyle. Some people living in pine forests might work in forestry or conservation.In a desert, people often live in areas adapted to hot, dry conditions. This includes people involved in agriculture, such as growing drought-resistant crops, and those who work in mining or tourism. Desert residents are usually well-adapted to the extreme heat and dry environment. Both places have unique lifestyles shaped by their natural surroundings.",
        question3: "Which place would you rather visit, and why?",
        question3_answer: "I would rather visit a pine forest. I find the cool, shaded environment and the fresh, clean air very refreshing. Walking among tall trees and enjoying the peaceful sounds of nature would be relaxing and calming. Pine forests often have beautiful trails for hiking and exploring, which I enjoy. Additionally, being in a forest allows for wildlife observation and the chance to experience a diverse range of plants and animals. The natural beauty and tranquility of a pine forest appeal to me more than the extreme heat and arid conditions of a desert. Overall, a pine forest seems like a great place to unwind and connect with nature.",
    }, {
        urlpic1: "/images/speaking/part3/de11_1.png",
        urlpic2: "/images/speaking/part3/de11_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a group of people playing basketball together. The special thing is that they are all sitting in their own wheelchairs. So, I think they are playing in a basketball match for disabled people.\n\nOn the other hand, in the second picture, there are two old men. They look about 60 years old and are shaking hands. They are both holding their tennis rackets, so I think they have just finished a match. Looking at their faces, they look tired, but they are ready to take a break.\n\nBoth pictures show people enjoying sports in different ways. I think both of them are great because they show people being active and having fun.",
        question2: "What are the benefits of indoor and outdoor sports?",
        question2_answer: "In my opinion, indoor and outdoor activities have their own benefits. First, indoor activities are great for their controlled environment, allowing for focused practice and skill development. Activities like reading, arts, or indoor sports can boost creativity and concentration. On the other hand, outdoor activities offer significant physical benefits, such as improved cardiovascular health and Vitamin D from sunlight. Activities like hiking or playing sports outdoors can boost mood and overall health.",
        question3: "Do you think that the main purpose of playing a game is to win?",
        question3_answer: "From my perspective, I don’t think that the main purpose of playing games is solely to win. While winning can be a motivating factor, the essence of playing games often lies in the enjoyment of the experience, the development of skills, and the social interactions it fosters. Many players value the process of learning, improving, and having fun over just the outcome. Games can offer personal satisfaction and a sense of accomplishment regardless of whether you win or lose.",
    }, {
        urlpic1: "/images/speaking/part3/de12_1.png",
        urlpic2: "/images/speaking/part3/de12_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there are three people in a supermarket. They look quite happy, so I think they are a family. The supermarket they are in looks like it has a lot of things to buy.\n\nOn the other hand, in the second picture, I see many women. They also look happy, so I think they are friends. They seem to be selling items at a local market.\n\nBoth pictures are very beautiful, and I think they were taken by professional photographers because they look very clear and well-captured.",
        question2: "What are the benefits of markets and supermarkets?",
        question2_answer: "Markets and supermarkets both offer many benefits. Markets are great because they often have fresh fruits, vegetables, and other local foods. People like markets for their friendly atmosphere, where they can talk to sellers and sometimes get better prices. Markets also support local farmers and small businesses. On the other hand, supermarkets are very convenient because they have everything you need in one place, from food to household items. They are open for longer hours, and you can find many different products and brands. Supermarkets are also clean and well-organized, making shopping easy and fast. You can use a shopping cart and pay with cash or card. Both markets and supermarkets provide good choices for buying what people need every day.",
        question3: "Why do many people don't like to go shopping?",
        question3_answer: "Many people don't like to go shopping for different reasons. First, shopping can take a lot of time, especially in big stores or when there are long lines. Some people feel it is boring and tiring to walk around and look for things they need. Also, crowded places can make shopping stressful because it is noisy and hard to move around. Some people don't like to spend money or feel pressure to buy things they don't really need. Others might not like shopping because they find it hard to choose from too many options. For some, carrying heavy bags is a problem, and they prefer to shop online where it is easier and quicker. These reasons make shopping less enjoyable for many people.",
    }, {
        urlpic1: "/images/speaking/part3/de13_1.png",
        urlpic2: "/images/speaking/part3/de13_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a group of people climbing a mountain. The sky looks very beautiful, with many clouds in the background. They seem to be professional climbers.\n\nOn the other hand, in the second picture, I see a family at the beach. They look very happy and full of energy. The weather looks beautiful and bright.\n\nBoth pictures show people enjoying different activities, but in different ways. I prefer the first image because I like outdoor adventures like mountain climbing. However, the second image also looks nice because it shows a fun and relaxing family moment at the beach.",
        question2: "Which of the 2 places do you like to go? Why?",
        question2_answer: "I find the mountains more appealing. The serene landscapes and fresh mountain air create a peaceful ambiance that resonates with me. I appreciate the opportunity to hike and explore nature trails, immersing myself in the tranquility of the surroundings. While beaches are lovely, I’m drawn to the rugged beauty and sense of solitude that mountains offer. The idea of cozy mountain retreats and breathtaking views adds to the allure. Overall, the mountains provide a retreat where I can disconnect and recharge amidst the beauty of nature.",
        question3: "Who is suitable for each activity? Why?",
        question3_answer: "It really depends on personal preferences and interests. Beaches are great for those who enjoy sunbathing, water activities, and a more laid-back atmosphere. People who love the sound of waves, sandy shores, and a tropical vibe would likely prefer beaches. On the other hand, mountains cater to individuals who appreciate hiking, nature walks, and a cooler climate. Those seeking adventure, stunning landscapes, and a quieter retreat might find mountains more suitable.",
    }, {
        urlpic1: "/images/speaking/part3/de14_1.png",
        urlpic2: "/images/speaking/part3/de14_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there are two adults and one child. They look quite happy, so I think they are a family. The child is playing the piano, and the man is playing the guitar.\n\nOn the other hand, in the second picture, I see many people. In the middle of the picture, I can see three men playing musical instruments. I think they are friends. This picture was taken at a music festival, and it reminds me of memories from last year's trip.\n\nBoth pictures are very beautiful, and I think they were taken by professional photographers because they look very clear and well-captured.",
        question2: "Where do you like to play music and why?",
        question2_answer: "I like to play music at home because it is comfortable and quiet. At home, I can play music anytime I want, without worrying about disturbing others. I have my instruments, like a guitar or piano, and I can practice in a relaxed space. Playing music at home also allows me to focus and improve my skills without distractions. Sometimes, I enjoy playing music with my family or friends when they visit. It's a fun way to spend time together. I also like to play music in parks or outdoor spaces because it feels nice to be in nature while playing. However, home is my favorite place because it’s peaceful, and I can play for as long as I want.",
        question3: "How will playing music in different places bring different emotions?",
        question3_answer: "Playing music in different places can bring different emotions because the environment affects how we feel. When we play music at home, it can feel relaxing and comfortable because it is a familiar space. We can play peacefully and enjoy the music without stress. In a park or outdoor space, playing music can feel fresh and lively because we are surrounded by nature, like trees and birds. The open air makes us feel happy and free. If we play music on a stage in front of people, it can feel exciting and even a little scary, but the energy from the audience makes it fun. Each place gives a different mood, and that changes how we feel when we play.",
    }, {
        urlpic1: "/images/speaking/part3/de15_1.png",
        urlpic2: "/images/speaking/part3/de15_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there are many people at the beach. There are a lot of umbrellas with many colors. It seems like a very beautiful beach with blue water and white sand. I believe the weather is lovely and perfect for a day at the beach.\n\nOn the other hand, in the second picture, I see two girls sitting next to a river. I think they are sitting and watching the mountains and forests to relax. This picture looks very peaceful.\n\nBoth pictures show different places to travel, but they are both beautiful in their own way. I prefer the first picture because I enjoy the beach and the fun activities you can do there. However, the second picture also looks nice because it shows a calm and relaxing place in nature.",
        question2: "Do you like going to crowded beaches?",
        question2_answer: "No, I don't like going to crowded beaches. First, they are often noisy. There is a lot of noise from people talking, laughing, and playing music. This can be very distracting and make it difficult to relax. Second, crowded beaches are often dirty. There is a lot of trash and litter on the sand and in the water. This can be unsightly and even dangerous. Third, crowded beaches can be uncomfortable. It can be difficult to find a place to sit or lay down, and the sand can be hot and uncomfortable.",
        question3: "Why do many people like quiet places?",
        question3_answer: "People like quiet places because they offer a calm and focused environment. Silence helps with concentration and minimizes distractions, making it easier to study, read, or think deeply. A quiet setting also promotes relaxation and reduces stress. When it's quiet, people can concentrate better on their tasks, which improves productivity. The preference for quiet places is often based on the desire for a peaceful and comfortable atmosphere that supports various activities without interruptions.",
    }, {
        urlpic1: "/images/speaking/part3/de16_1.png",
        urlpic2: "/images/speaking/part3/de16_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a man wearing headphones. He looks quite young, and I guess he is about 24 years old. It seems like he is waiting for the train.\n\nOn the other hand, in the second picture, I see another man. He is standing in an airport, looking out the window. It seems like he is waiting for his next flight. This picture reminds me of a memory I had when I was traveling.\n\nBoth pictures are very beautiful, and I think they were taken by professional photographers because they look so clear and well-captured.",
        question2: "Why do people prefer to go by plane than by train?",
        question2_answer: "People prefer to go by plane instead of by train mainly because it is faster. A plane can take you to your destination in a few hours, while trains can be slow and take much longer. Planes also feel more comfortable for long trips, with nice seats and sometimes food or drinks. Traveling by plane is also exciting for many people, especially when they look forward to flying high in the sky. Planes are better for international trips because trains cannot cross oceans. Even though flying can be more expensive, people like the time they save. In short, planes are popular because they are quick, comfortable, and make long-distance travel easier.",
        question3: "Why does flying make many people uncomfortable?",
        question3_answer: "Flying makes many people uncomfortable for several reasons. First, some people are scared of heights or worry about the plane having problems in the air. The feeling of not being in control can make them nervous. Second, planes are often crowded, and the seats can be small and not very comfortable, especially on long flights. The noise from the engines and being in a tight space can also be annoying. Some people also feel uncomfortable because of changes in air pressure, which can cause ear pain or make them feel sick. Lastly, long flights can be tiring, and not being able to move around much can make people feel stiff or restless. These reasons can make flying an uncomfortable experience for many.",
    }, {
        urlpic1: "/images/speaking/part3/de17_1.png",
        urlpic2: "/images/speaking/part3/de17_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a young woman sitting in a greenhouse. She is picking red tomatoes and placing them into a basket. The greenhouse is full of fresh vegetables, creating a peaceful atmosphere.\n\nOn the other hand, in the second picture, I see a father and his young child working together in a garden. The father is helping the child plant yellow flowers, using small tools and a watering can. It looks like they are in their backyard, enjoying time together.\n\nBoth pictures show people working with plants, but in different ways. I prefer the first image because I enjoy seeing fresh vegetables being picked. However, the second image also looks nice because it shows a father and child spending time together.",
        question2: "Growing a garden has many wonderful benefits?",
        question2_answer: "It allows people to have fresh vegetables and beautiful flowers, making their surroundings healthier and more attractive. Gardening also helps reduce stress, improves mental well-being, and encourages physical activity, which is good for overall health. Moreover, it teaches patience and responsibility, as plants require daily care, watering, and attention to grow properly. In addition, gardening can be a rewarding and relaxing hobby, giving people a sense of accomplishment when they see their plants grow and thrive. It also promotes environmental awareness, as people learn how to take care of nature and appreciate the beauty of green spaces.",
        question3: "Growing vegetables and flowers is appealing for many reasons?",
        question3_answer: "Vegetables provide fresh, nutritious food, reducing grocery expenses and promoting a healthy diet. Homegrown produce is often tastier and free from harmful chemicals, making it a better option for families. Flowers, on the other hand, make any space more colorful, attractive, and peaceful, creating a pleasant and welcoming atmosphere. Both activities offer a deep connection with nature, a sense of accomplishment, and the joy of watching plants flourish over time. Additionally, gardening can be a great way to spend time outdoors, socialize with others who share the same interest, and develop new skills related to plant care and sustainability.",
    }, {
        urlpic1: "/images/speaking/part3/de18_1.png",
        urlpic2: "/images/speaking/part3/de18_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a young woman sitting on a couch, wearing headphones and enjoying music. She looks relaxed and is raising her arms, almost as if she is dancing. There is a laptop beside her, so she might be listening to music online.\n\nOn the other hand, in the second picture, there is a female singer performing on stage with a band. She is wearing a black dress, and the atmosphere seems lively, even though the audience is not visible.\n\nBoth pictures show people enjoying music, but in different ways. I prefer the first picture because I like listening to music in a calm and relaxed way. However, the second picture also looks great because it shows the energy and excitement of a live performance.",
        question2: "The ways to enjoy music in these 2 pictures?",
        question2_answer: "The two pictures represent different ways to enjoy music. The first one shows a personal experience, where someone listens to music alone using headphones. This method is more private and allows people to relax in their own space. In contrast, the second picture captures a social event where people enjoy live performances. Attending concerts or live music events creates a sense of excitement and connection with others. Both ways provide unique experiences, depending on personal preferences and mood.",
        question3: "Benefits of listening to music?",
        question3_answer: "Listening to music has many benefits. It helps people relax, reduce stress, and improve their mood. Music can also boost concentration and creativity, making it useful for studying or working. Additionally, it brings people together, whether at concerts or through shared playlists. Music therapy is even used to help with mental health issues. Overall, whether listening alone or at an event, music has a positive impact on emotions and well-being, making life more enjoyable.",
    }, {
        urlpic1: "/images/speaking/part3/de19_1.png",
        urlpic2: "/images/speaking/part3/de19_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a family playing chess together. The parents are smiling, and their child seems very focused on the game. It shows quality family time and intellectual activity.\n\nOn the other hand, in the second picture, I see a young boy playing video games alone. He looks focused, holding a controller while sitting on a couch.\n\nBoth pictures show indoor activities, but in different ways. I prefer the first picture because I enjoy spending time with family and playing games that require thinking. However, the second picture also looks fun, as it shows a more personal and relaxing activity.",
        question2: "Do you prefer playing chess or playing video games?",
        question2_answer: "I prefer playing video games because they are more exciting and interactive. Video games offer different challenges, from action-packed missions to puzzle-solving adventures. They also improve reflexes and problem-solving skills. However, chess is great for strategic thinking and patience. While both are enjoyable, video games provide a wider variety of experiences and can be played alone or with friends online.",
        question3: "Are indoor activities important? Why?",
        question3_answer: "Indoor activities are important because they provide entertainment and relaxation, especially when outdoor activities are not possible. They help people develop mental skills, such as concentration and problem-solving, through games like chess or video games. Indoor activities also strengthen family bonds, as seen in board games or movie nights. Additionally, they are a safe option during bad weather or when people need to stay indoors for health reasons.",
    }, {
        urlpic1: "/images/speaking/part3/de20_1.png",
        urlpic2: "/images/speaking/part3/de20_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, a man and a boy are cooking together in a modern kitchen. They look happy, and the fresh ingredients on the counter suggest they are preparing a homemade meal. This creates a warm and cozy family atmosphere.\n\nOn the other hand, in the second picture, a man is sitting at an outdoor restaurant, enjoying a slice of pizza. He looks relaxed, and the background shows many people dining, creating a lively and social setting.\n\nBoth pictures show different ways of eating, but in different settings. I prefer the first picture because I enjoy the feeling of cooking and sharing a meal at home with my family. However, the second picture also looks nice because it shows a fun and social experience of eating out.",
        question2: "Why is it appealing to eat at different places?",
        question2_answer: "Eating at different places is appealing because it allows people to explore new foods and flavors. Each restaurant or food stall offers unique dishes, making meals more exciting. It’s also a great way to experience different cultures and cooking styles, which can be both fun and educational. Additionally, dining out provides a change of scenery and atmosphere, making it more interesting than always eating at home. It also offers social opportunities, whether by meeting new people or celebrating special occasions like birthdays or holidays. Overall, trying new places adds variety to life and makes dining a more enjoyable experience.",
        question3: "Where do people like to eat on special occasions?",
        question3_answer: "On special occasions, people prefer to dine at places that feel unique and memorable. Many choose fine dining restaurants or venues with beautiful views to create a luxurious experience. Others may opt for a cozy family restaurant where they feel comfortable and relaxed. Some enjoy celebrating at their favorite local spot, where they know the food is always delicious. For many, hosting a meal at home with family and friends is the best way to celebrate, as it allows for a more personal and intimate gathering. Buffets, barbecue spots, and outdoor picnics are also popular choices for special days. Ultimately, the goal is to enjoy great food, spend time with loved ones, and make the occasion feel truly special.",
    }, {
        urlpic1: "/images/speaking/part3/de21_1.png",
        urlpic2: "/images/speaking/part3/de21_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, a happy family is sitting together on the grass in front of their house. They look relaxed and close to each other, suggesting a warm family life. The house behind them is big and comfortable, showing a peaceful environment.\n\nOn the other hand, in the second picture, a young woman is standing alone on a balcony in the city. She looks confident and independent. The tall buildings in the background suggest she lives in an apartment in an urban area.\n\nBoth pictures show different ways of living, with the first showing family life, which offers support and togetherness. The second shows living alone, which provides independence and privacy. Each lifestyle has its own benefits, depending on personal preferences.",
        question2: "Do you prefer living with family or living alone?",
        question2_answer: "I prefer living with my family because it gives me a sense of comfort, support, and belonging. When I live with my family, I don’t feel lonely, and I always have someone to talk to or share my day with. It also helps with responsibilities like cooking and cleaning, as we can share the tasks. Living with family creates strong bonds and allows me to learn important values such as respect, cooperation, and caring for others. While living alone may offer more freedom and privacy, I think living with family is more meaningful and emotionally fulfilling, especially when you have a close relationship with them.",
        question3: "Nowadays, why do many people like to live alone?",
        question3_answer: "Nowadays, many people like to live alone because it gives them more freedom and independence. When people live alone, they can make their own decisions, manage their time the way they want, and enjoy privacy without being disturbed. This is especially appealing to young adults who want to focus on their careers, studies, or personal growth. Living alone also helps people become more responsible and self-reliant, as they have to handle all daily tasks by themselves. Additionally, in modern cities, people often move away from their families for work or education, so living alone becomes a practical choice. While it can sometimes feel lonely, many enjoy the peace and quiet it offers. With technology, they can still stay connected with friends and family even if they live apart.",
    }, {
        urlpic1: "/images/speaking/part3/de22_1.png",
        urlpic2: "/images/speaking/part3/de22_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a father and his son playing with a horse. The father is wearing a [color] shirt, and the son is wearing a [color] shirt. The boy looks very happy, maybe because it's the first time he has seen a horse. Looking at the background, I think they are in a park and enjoying their day off.\n\nOn the other hand, in the second picture, I see a teacher with her students. The teacher is wearing a [color] shirt, and she is guiding the kids to play with a snake on the table. The kids look excited and happy.\n\nBoth pictures show children interacting with animals, but in different ways. I prefer the first picture because I enjoy seeing a happy family having fun with animals. However, the second picture also looks nice because it shows kids learning about animals in a fun way.",
        question2: "Do you like interacting with animals?",
        question2_answer: "I don't interact with animals myself, but I know that many people enjoy spending time with them! Animals offer companionship, comfort, and can even be therapeutic. Whether it’s playing with a dog, watching birds, or observing wildlife, interacting with animals can help reduce stress and create positive emotions. Animals often show affection and loyalty, which can make people feel valued and loved. I think the bond between humans and animals is special, and it’s wonderful to see how much joy animals bring to people’s lives.",
        question3: "Should children be exposed to animals?",
        question3_answer: "From my perspective, I see eye to eye with the exposure of children to animals from a young age. Having a pet has various benefits for children. According to a survey, children who developed the closest attachments or strong bonds to their pets didn't have the rates of anxiety and depression. Furthermore, caring for their furry friends, such as taking them for a walk, feeding them and grooming them teaches the children to be responsible not only towards other animals but also with people.",
    }, {
        urlpic1: "/images/speaking/part3/de23_1.png",
        urlpic2: "/images/speaking/part3/de23_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a rowing team. They look like they are facing a strong wave from the river because the athletes are pulling as hard as they can. They are wearing life jackets, and the competition seems dangerous.\n\nOn the other hand, in the second picture, I see a male athlete in a bike jersey and helmet. It looks like he is taking part in a competitive road cycling race, which is held on paved roads with a lot of trees around.\n\nBoth pictures show different types of sports, with the first showing a team sport that requires teamwork and strength. The second picture shows an individual sport that tests personal endurance and skill. Each sport has its own challenges and excitement.",
        question2: "What are the difficulties of these 2 sports?",
        question2_answer: "Each sport has its own challenge. As for racing bikes, the first difficulty is that it has a risk of injury. Besides, racing bikes is a sport that requires keeping the pace and understanding how to handle unexpected situations. Regarding the rowing race, I think the hardest part is the co-operation and the ability to tolerate bad weather conditions. Therefore, it is not only physically demanding but mentally exhausting as well.",
        question3: "Why do some people prefer team sports to individual sports?",
        question3_answer: "From my perspective, people who choose to play team sports often receive support from their team members, so it suits best for people who are outgoing, extroverted and sociable. They find themselves most enjoyable while interacting and cooperating with others to achieve the goal. Moreover, team sports teach their players valuable life lessons that they could not learn from individual sports. For example, team sports teach people about leadership, which is one of the most important skills nowadays.",
    }, {
        urlpic1: "/images/speaking/part3/de24_1.png",
        urlpic2: "/images/speaking/part3/de24_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there is a couple walking together at an airport. They are carrying suitcases, and they seem to be preparing for a trip. The scene feels energetic, showing the excitement of traveling.\n\nOn the other hand, in the second picture, there is a man standing on a mountain, taking a photo of the beautiful landscape. He looks focused and calm, enjoying the natural surroundings.\n\nBoth pictures show different travel experiences—the first is about starting a journey, while the second captures the peaceful enjoyment of nature. I prefer the second picture because I enjoy the calmness of nature, but the first picture also looks exciting with the energy of travel.",
        question2: "What do you think of these two ways of travelling?",
        question2_answer: "Both city and mountain travel offer unique experiences. City travel is vibrant and full of life, perfect for those who love culture, shopping, and exploring new urban environments. On the other hand, mountain travel offers a peaceful escape, ideal for nature lovers, hikers, and those seeking solitude and adventure in the great outdoors. It all depends on whether you want to immerse yourself in a fast-paced, cultural environment or relax and recharge amidst nature.",
        question3: "Advantages and disadvantages of these 2 ways of travelling?",
        question3_answer: "City travel offers the convenience of modern amenities, abundant attractions, and the chance to explore diverse cultures. You can visit museums, dine in famous restaurants, and enjoy vibrant nightlife. However, it can be crowded, noisy, and expensive, especially in tourist hotspots. Mountain travel, on the other hand, offers breathtaking views, fresh air, and peaceful surroundings, perfect for outdoor activities like hiking and camping. The downside is that it can be remote, with fewer amenities and services, and physical exertion may be required for some activities. Each has its pros and cons, depending on what type of experience you’re looking for.",
    }, {
        urlpic1: "/images/speaking/part3/de25_1.png",
        urlpic2: "/images/speaking/part3/de25_2.png",
        question1: "Describe the picture?",
        question1_answer: "As I can see in the first picture, there are many people standing around an old white bus, with puddles on the ground. A man is standing on top of the bus, taking things down. It looks like they have just finished a long journey and are ready to return home.\n\nIn the second picture, I see a man in a white shirt and blue jeans, opening the door of a red car. He seems to be getting ready to go somewhere, maybe work.\n\nBoth pictures show different situations. The people in the first picture likely have a more difficult life, while the man in the second picture seems to have a more comfortable lifestyle.",
        question2: "What is the experience of traveling on these two vehicles?",
        question2_answer: "I think these types of vehicles are suitable for each person's demand and financial situation. People who have a limited budget and have to travel frequently will prefer public transportation such as bus, coach and train. It costs them a cheap fee and is quite convenient. But sometimes, it is crowded and noisy, which makes people feel uncomfortable. On the contrary, personal vehicles like cars can provide users with comfort, privacy and safety. Furthermore, they can have control over their time to travel.",
        question3: "Why do you think people still choose to have their own cars?",
        question3_answer: "Many people choose to have their own car because with your own car, you'll enjoy the convenience of being able to travel anywhere you want, any time you want. Part of owning your car is enjoying the convenience but also experiencing your own freedom. And you can also save time in the long run. When you don't have to spend time waiting for a bus, a train, or ride-share system, you can leave work or your home whenever you want.",
    }];

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

        document.getElementById("question_id").innerHTML = "Speaking III - Question " + (currentSetIndex + 1) + "/" + (questions.length);
        document.getElementById("question1Text").innerHTML = currentQuestions.question1;
        document.getElementById("question2Text").innerHTML = currentQuestions.question2;
        document.getElementById("question3Text").innerHTML = currentQuestions.question3;

        // Cập nhật tiêu đề modal và nội dung đáp án
        document.getElementById("answerModalLabel").textContent = currentQuestions[questionKey];
        document.getElementById("answerText").innerHTML = `<strong>Đáp án: \n</strong> ${currentQuestions[answerKey]}`;
        // Cập nhật hình ảnh
        document.getElementById("img1").src = currentQuestions.urlpic1;
        // Cập nhật ảnh 1
        document.getElementById("img2").src = currentQuestions.urlpic2;
        // Cập nhật ảnh 2
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
