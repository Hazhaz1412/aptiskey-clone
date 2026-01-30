document.addEventListener('DOMContentLoaded', function() {

    // ===============================================================================================================
    // ////////////// DANH SÁCH CÂU HỎI ///////////////
    // ===============================================================================================================

    // 4. Câu 4
    const question4Text_1 = ["<strong>Here is the perspective of four people on the above topic. Please read the content and answer the question.</strong>", "<strong>A:</strong> In the past, I really liked playing board games. Now, to limit the children from using computers, I often spend time playing with them. However, I have struggled with them because the games nowadays have more characters and rules, making us think a lot every time we play. Despite this, my children and I still like it and have a good time together.", "<strong>B:</strong> When I was a child, I often played soccer with other children of the same age. We usually played in the schoolyard and sometimes in the open spaces of the neighborhood. We divided into small teams and chased the ball until we were all tired.", "<strong>C:</strong> When I was a child, I didn't like going out to play, so I chose reading books as a form of entertainment. The stories described in the pages of books helped me discover my own world. Later, when I grew up, I started liking modern games with eye-catching interfaces, which help me relax and increase my creativity.", "<strong>D:</strong> When I was a child, I really liked outdoor activities. I remember that on bad weather days, I was always by the window, glued to it, looking outside and praying for the rain to stop. At those times, my mother often gave me paper and a box of crayons. I really enjoyed that drawing activity and often drew at home when the weather was bad.", ];

    const question4Content_1 = [{
        question: "Who finds today’s games harder than before?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"]
    }, {
        question: "Who enjoyed playing with friends in childhood?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"]
    }, {
        question: "Who enjoys playing with their children?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"]
    }, {
        question: "Who waited and hoped to go outside?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"]
    }, {
        question: "Who prefers modern games?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"]
    }, {
        question: "Who enjoyed arts as a child?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"]
    }, {
        question: "Who enjoyed reading books as a child?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"]
    }, ];

    const correctAnswersQuestion4_1 = ['A', 'B', 'A', 'D', 'C', 'D', 'C'];

    // 4. Câu 4 - Đề mới tháng 9 -- cập nhật 12/9 (bộ đề 17)
    const question4Text_2 = ["<strong>Here is the perspective of four people on the above topic. Please read the content and answer the question.</strong>", "<strong>A:</strong> Before diving into any extreme sport, I truly believe it’s crucial to undergo proper training. While these activities can be thrilling, they also carry risks if you're not well-prepared. I've witnessed people injuring themselves simply because they didn't take the necessary precautions. That’s why I always make sure to complete a training program and familiarize myself with the safety guidelines before trying something new. With the right preparation, extreme sports can be an amazing experience.", "<strong>B:</strong> I've always had a fondness for more traditional sports such as swimming, running, and tennis. They're enjoyable and easy to incorporate into a routine. However, a few months ago, I had the chance to go bungee jumping during a vacation, and it turned out to be an unforgettable experience. I didn’t anticipate having so much fun! While I still prefer regular sports for daily exercise, I now feel much more open to trying extreme sports occasionally for the thrill.", "<strong>C:</strong> What I appreciate most about extreme sports is the unique way they allow me to connect with nature. Activities like rock climbing and mountain biking enable me to explore stunning landscapes while also pushing my physical and mental limits. It’s an escape from the everyday routine, and it makes me feel truly alive. If I had more time and resources, I would love to engage in these sports more frequently, particularly in wild, remote locations.", "<strong>D:</strong> I understand that some people find extreme sports exhilarating, but they’ve never been significant to me. In fact, I try to avoid them whenever I can. I’m not fond of the idea of placing myself in risky situations just for the sake of excitement. There are many safer alternatives to staying active and enjoying life. I’d much rather take a peaceful walk or do some yoga than jump out of an airplane or scale a mountain. It’s simply not my cup of tea.", ];

    const question4Content_2 = [{
        question: "Who finds extreme sport unimportant?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who finds training before participating is important?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who still likes extreme sports after playing once?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who wants to play more extreme sport?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who likes traditional sports like swimming?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who enjoys nature?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who always avoids playing extreme sport?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }];

    const correctAnswersQuestion4_2 = ['D', 'A', 'B', 'C', 'B', 'C', 'D'];

    // 4. Câu 4 - Đề mới tháng 9 -- cập nhật 12/9
    const question4Text_3 = ["<strong>Here is the perspective of four people on the above topic. Please read the content and answer the question.</strong>", "<strong>A:</strong> I stayed until the very last moment of the festival and absolutely loved the grand finale. The stage lit up with dazzling lights and fireworks, creating an unforgettable atmosphere. Although getting there was a hassle due to heavy traffic and packed buses, once I arrived, all those inconveniences faded away. In the end, the final performance made every bit of the struggle worthwhile.", "<strong>B:</strong> Normally, I steer clear of festivals, but I decided to give this one a try. Unfortunately, I didn’t have a great time. The sound quality was poor, the event schedule seemed chaotic, and to top it off, it started raining heavily. The muddy ground made things even worse, and I spent most of the day feeling uncomfortable. Honestly, I didn’t think it was worth the trouble. The only highlight for me was the beautiful park where the festival took place.", "<strong>C:</strong> I really enjoyed the lively atmosphere created by the music. One of the bands on the opening night was so amazing that I couldn’t help but sing along. However, everything was quite expensive. The tickets were pricey, and the food and drinks were ridiculously overcharged. I ended up spending more than I had planned. Even though the performances were great, I do hope the organizers will bring the prices down next year.", "<strong>D:</strong> For me, the most memorable part of the festival was its location. The park by the river was vast and picturesque, with plenty of spots to sit and unwind between performances. I enjoyed a nice lunch there, though it was a bit pricey. Some of the shows were enjoyable, but I didn’t stay for the entire event. Overall, it was the venue that left the biggest impression on me.", ];

    const question4Content_3 = [{
        question: "Who experienced bad weather?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who loved one of the performances?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who thought it was too expensive?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who found the traffic difficult?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who liked the final performance of the show?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who didn’t like the festival overall?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who liked the location?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }];

    const correctAnswersQuestion4_3 = ['B', 'C', 'C', 'A', 'A', 'B', 'D'];

    // 4. Câu 4 - Đề mới tháng 9 -- cập nhật 12/9
    const question4Text_4 = ["<strong>Here is the perspective of four people on the above topic. Please read the content and answer the question.</strong>", "<strong>A:</strong> When I was young, I enjoyed playing simple computer games that my dad had programmed for me. Today, I teach my children to code using easy-to-use platforms like Scratch. These tools make learning programming enjoyable, though I spend time helping them grasp the logic behind it. Working together on coding fosters both creativity and teamwork.", "<strong>B:</strong> As a child, I loved spending time with my friends, building and controlling toy robots. I’ll never forget the thrill of making them move. Those experiences sparked my passion for technology, and I still look back fondly on those moments of discovery.", "<strong>C:</strong> When I was younger, I was fascinated by science magazines about robots and computers. The articles fueled my curiosity. Now, I develop mobile apps, creating tools for daily life. Thanks to modern software, the development process has become faster, but the excitement of innovation remains the same.", "<strong>D:</strong> As a kid, I spent rainy days with my siblings watching TV shows about gadgets and inventions. We eagerly awaited each new episode. Today, I prefer taking online courses to stay up-to-date with AI and blockchain. They offer flexibility and are a great way to keep pace with the rapidly changing tech world.", ];

    const question4Content_4 = [{
        question: "Who finds modern tools more accessible?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who now enjoys app development?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who loved playing with toy robots as a child?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who loved watching tech shows as a child?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who now prefers online learning?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who enjoys coding with family?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who loved science magazines as a child?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }];

    const correctAnswersQuestion4_4 = ['A', 'C', 'B', 'D', 'D', 'A', 'C'];

    // 4. Câu 4 - Đề mới tháng 9 -- cập nhật 12/9
    const question4Text_5 = ["<strong>Here is the perspective of four people on the above topic. Please read the content and answer the question.</strong>", "<strong>A:</strong> When I was a child, I enjoyed building simple circuits with my parents using basic kits. Today, I collaborate on tech projects with my cousins using drag-and-drop coding platforms. These tools make the development process easier, but I always take the time to thoroughly test our creations. It’s a wonderful way to foster creativity and work together.", "<strong>B:</strong> As a kid, I played with programmable toys like robotic pets alongside my friends. I can still recall the excitement of programming their movements. Those toys sparked my interest in logic and curiosity, and I continue to cherish those early experiences with technology.", "<strong>C:</strong> Growing up, I was fascinated by books about inventors and their innovative creations. Those stories inspired my imagination. Today, I design prototypes using 3D modeling software. The tools are much more precise now, but the joy of creating something new still feels just like the excitement of those childhood books.", "<strong>D:</strong> I spent many hours as a child exploring my family’s old computer, learning basic commands. Rainy days often meant staying indoors and experimenting with different software. Today, I keep up with the latest innovations by listening to tech podcasts. They’re not only entertaining but also help me stay connected to the ever-evolving tech world.", ];

    const question4Content_5 = [{
        question: "Who now enjoys 3D modeling?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who finds modern platforms user-friendly?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who loved playing with programmable toys as a child?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who loved exploring early computers as a child?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who enjoys creating tech projects with family?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who loved reading about inventions as a child?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who now prefers tech podcasts?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }];

    const correctAnswersQuestion4_5 = ['C', 'A', 'B', 'D', 'A', 'C', 'D'];

    // 4. Câu 4 - Đề mới tháng 9 -- cập nhật 12/9
    const question4Text_6 = ["<strong>Here is the perspective of four people on the above topic. Please read the content and answer the question.</strong>", "<strong>A:</strong> When I was a child, I enjoyed playing board games with my parents after their busy workdays. Now, I get to share that experience with my own kids, and having a four-day workweek gives us more time together. Flexible schedules are a big help, but I always make sure to plan ahead so I can balance both work and family life. These are the moments that create lasting memories.", "<strong>B:</strong> As a kid, I would set up pretend offices with my friends, using toy phones and notebooks. I loved taking on the role of 'boss' and organizing our tasks. Those imaginative games taught me valuable lessons in organization and leadership, and I still laugh thinking about the 'serious' meetings we held.", "<strong>C:</strong> When I was younger, I devoured books about different professions, dreaming about what my future career might be. Those books inspired my ambition. Today, I rely on productivity apps to keep track of my tasks in my four-day workweek. While the apps make my work more efficient, the excitement of organizing and planning is still the same.", "<strong>D:</strong> As a child, I spent countless evenings playing tag with my friends in the neighborhood. On rainy days, though, I often found myself feeling bored indoors. Now, after work, I practice mindfulness to help me relax and recharge. It’s especially helpful with a shorter workweek, as it keeps me focused and refreshed.", ];
    const question4Content_6 = [{
        question: "Who now enjoys productivity apps?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who loved outdoor play as a child?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who enjoys family time with board games?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who loved organizing pretend offices as a child?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who finds modern schedules more flexible?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who loved reading about careers as a child?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who now prefers mindfulness practices?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }];

    const correctAnswersQuestion4_6 = ['C', 'D', 'A', 'B', 'A', 'C', 'D'];

    // 4. Câu 4 - Đề mới tháng 10 -- cập nhật 12/10
    const question4Text_7 = ["<strong>Here is the perspective of four people on the above topic. Please read the content and answer the question.</strong>", "<strong>A:</strong> When I was a child, I loved sitting by the fireplace listening to my grandfather’s folktales. His voice brought every character to life, and those evenings always felt magical—they taught me the power of imagination. Nowadays, I share that same joy with my nieces by reading interactive storybooks on tablets. The animations and sounds make the stories more vivid and exciting for them. Still, I always take care to choose content that’s suitable for their age. To me, blending old traditions with modern technology is a beautiful way to keep storytelling alive across generations.", "<strong>B:</strong> When I was a young, I used to ride my bike around the village with my friends almost every afternoon. I can still recall the feeling of the wind brushing against my face, the excitement of racing each other, and the pure sense of freedom it brought. Those simple rides weren’t just fun—they taught me what independence and adventure felt like, lessons that stayed with me as I grew up. Nowadays, it’s a bit sad to see that many children spend more time indoors, glued to screens instead of exploring outside. Sometimes I find myself missing those carefree afternoons when happiness was as simple as pedaling down a dusty road. Thinking back, I realize those moments helped me develop a love for the outdoors and a lasting appreciation for friendship.", "<strong>C:</strong> As a kid, I could spend hours drawing animals, trees, and landscapes with my box of crayons and pencils. I loved playing with bright colors and shapes, and I always felt proud showing my drawings to my family. What started as a simple childhood hobby slowly turned into a lifelong passion. Now, I’m a graphic designer, creating digital art for various clients. Modern design tools help me bring my ideas to life with more precision, yet the creative joy I feel is just like it was back then. For me, drawing has always been a way to express myself—and it still fills my days with happiness.", "<strong>D:</strong> When I was growing up, I loved going on camping trips with my family in the countryside. We pitched our tents, cooked simple meals over a fire, and spent long nights gazing at the stars. Those moments made me feel deeply connected to nature and left me with unforgettable memories. Sometimes, though, rainy weather would ruin our plans, and I always felt a bit sad when we had to stay indoors. These days, my adventures have taken a different form — I enjoy visiting museums and exhibitions instead. Exploring history through artifacts and stories gives me a similar sense of curiosity and wonder, just in a quieter, more comfortable setting. To me, museums are a gentle way to travel through time and appreciate the beauty of the past.", ];

    const question4Content_7 = [{
        question: "Who now enjoys graphic design?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who loved camping as a child?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who finds modern books more engaging?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who loved drawing as a child?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who now prefers museum visits?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who enjoys storytelling with family?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who loved bike riding as a child?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }];

    const correctAnswersQuestion4_7 = ['C', 'D', 'A', 'C', 'D', 'A', 'B'];

    // 4. Câu 4 - Đề mới tháng 10 -- cập nhật 12/10
    const question4Text_8 = ["<strong>Here are four people's opinions about the same topic. Read carefully and answer the questions below.</strong>", "<strong>A:</strong> I went to the festival, but on the first day, I didn’t enjoy it much. It felt a bit dull and not very exciting. Still, the stage was bright with lights and fireworks, and the overall atmosphere was unforgettable. The music lifted my mood and made me feel truly happy. Interestingly, by the final day, everything seemed different—I began to enjoy it a lot more. In the end, I was really glad I decided to go.", "<strong>B:</strong> I’ve been to this festival every year, and of course, I joined again this time. But honestly, I didn’t enjoy the music, and the weather made things worse. It kept raining, turning the ground muddy and uncomfortable for everyone. After this experience, I think I won’t go again next year.", "<strong>C:</strong> I absolutely loved the energy of the music and enjoyed every part of the program from start to finish. Although it rained a little, it didn’t bother me at all. The only thing I didn’t like was the expensive ticket — I spent more than I had planned. Despite that, I still had a great time and hope the organizers consider lowering the price in the future.", "<strong>D:</strong> I was one of the musicians performing on the first day of the festival, and I also met several familiar bands there. Even though I only played a few songs, I stayed until the event ended. The pay wasn’t great, but I really enjoyed myself because I got to reconnect with friends. However, I’m still thinking about the long travel distance since the venue was quite far from the city center."];

    const question4Content_8 = [{
        question: "Who enjoyed the music throughout all the festival?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who only liked the last day?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who was disappointed with the weather?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who met old friends again?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who thought the location was not good?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who didn’t like the festival overall?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who thought it was expensive?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }];

    const correctAnswersQuestion4_8 = ['C', 'A', 'B', 'D', 'D', 'B', 'C'];

    // 4. Câu 4 - Đề mới tháng 10 -- cập nhật 12/10
    const question4Text_9 = ["<strong>Here are four people's opinions about extreme sports. Read carefully and answer the questions below.</strong>", "<strong>A:</strong> For me, the most important thing about extreme sports is being well-prepared. Many people think it’s all about excitement and courage, but I don’t see it that way. Without proper training, it’s easy to get hurt or even put others at risk. I once took a rock-climbing course and spent weeks learning how to use the equipment correctly. After that, the actual climb was much more enjoyable because I felt confident. I believe training not only keeps you safe but also makes the experience more relaxed and rewarding.", "<strong>B:</strong> I’ve always preferred traditional sports like swimming and running because they help me stay healthy without being too risky. Still, I was curious about how extreme sports might feel, so I tried bungee jumping during a holiday last year. At first, I was really nervous, but once I jumped, the feeling was incredible. It was a kind of thrill I had never felt before. Even so, I still swim every week because it’s safer and more practical, though I admit extreme sports can be exciting to try at least once.", "<strong>C:</strong> Honestly, I don’t really understand why people enjoy extreme sports. They seem dangerous and unnecessary to me. I’ve never tried one, and I don’t intend to. Some friends have invited me to go snowboarding or paragliding, but I always refuse. It’s not that I dislike sports—I actually enjoy cycling and tennis—but I just don’t see any reason to risk my health for a few seconds of excitement. In my opinion, extreme sports aren’t essential for happiness, so I stay away from them whenever I can.", "<strong>D:</strong> What I love most about extreme sports is that they often take place in beautiful natural settings. Last summer, I went kayaking on a wild river, and the scenery was breathtaking. I also tried mountain biking through the forest and loved the feeling of fresh air and freedom. For me, it’s not just about the sport itself but also about being surrounded by mountains, trees, and rivers. I sometimes wish I had more time and money to do these activities more often. Extreme sports give me energy and make me feel close to nature."];

    const question4Content_9 = [{
        question: "Who enjoys being outdoors when doing extreme sports?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who believes extreme sports are not important?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who once tried an extreme sport and enjoyed it?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who wishes to do more extreme sports in the future?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who thinks preparation is necessary before doing extreme sports?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who always avoids extreme sports?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who usually does ordinary sports?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }];

    const correctAnswersQuestion4_9 = ['D', 'C', 'B', 'D', 'A', 'C', 'B'];

    // 4. Câu 4 - Đề mới tháng 10 -- cập nhật 12/10
    const question4Text_10 = ["<strong>Here are four people's views on the same topic. Read them carefully and answer the questions below.</strong>", "<strong>A:</strong> When I was a teenager, I loved recording short stories on an old tape recorder with my cousins. We spent hours coming up with ideas and acting them out just for fun. These days, we make podcasts using modern apps that make editing and publishing much easier and more enjoyable. Even though technology has simplified the process, we still spend a lot of time planning each episode carefully. For me, podcasting is a creative way to express ideas and connect with people on a deeper level.", "<strong>B:</strong> As a child, I spent many sunny afternoons flying kites in the park with my brothers and sisters. Watching my kite rise high into the sky always filled me with happiness and excitement. Those simple yet meaningful moments taught me patience and coordination. Even now, whenever I see children flying kites, I feel warm memories returning. Those carefree days will always be some of my favorite childhood moments.", "<strong>C:</strong> When I was little, I was fascinated by doing jigsaw puzzles with my family. Carefully fitting each piece into place was both fun and satisfying. Now that I’m older, I often play strategy-based video games, which feel like a modern version of puzzles. They’re not only entertaining but also help me stay focused and think critically. For me, these games bring the same sense of challenge and accomplishment that puzzles once did — just in a more dynamic and interactive way.", "<strong>D:</strong> I grew up near a beautiful lake, and swimming there with my friends was one of my favorite things to do. It was such a great way to spend time outdoors, though rainy days sometimes left me feeling bored at home. Nowadays, I practice yoga to relax and recharge after long working hours. It has helped me stay calm, balanced, and focused. Yoga has become an important part of my routine and a great way to take care of both my body and mind."];

    const question4Content_10 = [{
        question: "Who now enjoys video games?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who enjoys podcasting with friends?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }, {
        question: "Who loved swimming as a child?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who loved puzzles as a child?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who now prefers yoga?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who loved kite flying as a child?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who finds modern apps easier to use?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }];

    const correctAnswersQuestion4_10 = ['C', 'A', 'D', 'C', 'D', 'B', 'A'];

    // 4. Câu 4 - Đề mới tháng 10 -- cập nhật 12/10
    const question4Text_11 = ["<strong>Here are four people's experiences about choosing or starting their careers. Read carefully and answer the questions below.</strong>", "<strong>A:</strong> When I first graduated from school, I wasn’t sure what to do, so I joined several volunteer programs with different companies and organizations to gain experience. I really enjoyed volunteering because it helped me decide on a career path and gave me many valuable lessons. I also believe I was able to make a difference through my work.", "<strong>B:</strong> Back in school, I already knew I wanted to become a teacher, so I didn’t need to try other jobs. I decided to study education at university, which is free in my country. Last summer, I did some practical training in local schools, and it was extremely helpful for my future career.", "<strong>C:</strong> When I was young, I used to help my neighbor, a plumber, with simple jobs like measuring pipes, loosening screws, and handling tools. It felt very natural for me to learn that kind of work, so later I studied for two years at university to become an electrician. Now, I’ve learned that there are shorter courses available in this field, and I regret not choosing that option instead.", "<strong>D:</strong> After graduating, I found it really difficult to get a job. I applied to many companies, but none accepted me because I lacked experience. Eventually, I found work at a gaming company that allowed me to work from home. It didn’t affect my daily schedule — I worked at night while my colleagues worked during the day — and that arrangement suited me perfectly."];
    const question4Content_11 = [{
        question: "Who likes working with their hands?",
        id: "question4_q1",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who enjoys working during their training?",
        id: "question4_q2",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who thinks it is very hard to get your first job?",
        id: "question4_q3",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who thinks their training was too long?",
        id: "question4_q4",
        options: ["", "A", "B", "C", "D"],
        answer: "C"
    }, {
        question: "Who did not want to choose another job?",
        id: "question4_q5",
        options: ["", "A", "B", "C", "D"],
        answer: "B"
    }, {
        question: "Who enjoys working in a flexible working environment?",
        id: "question4_q6",
        options: ["", "A", "B", "C", "D"],
        answer: "D"
    }, {
        question: "Who thinks they benefited from working for free?",
        id: "question4_q7",
        options: ["", "A", "B", "C", "D"],
        answer: "A"
    }];

    const correctAnswersQuestion4_11 = ['C', 'B', 'D', 'C', 'B', 'D', 'A'];

    const question4Text = [question4Text_1, question4Text_2, question4Text_3, question4Text_4, question4Text_5, question4Text_6, question4Text_7, question4Text_8, question4Text_9, question4Text_10, question4Text_11];

    const question4Content = [question4Content_1, question4Content_2, question4Content_3, question4Content_4, question4Content_5, question4Content_6, question4Content_7, question4Content_8, question4Content_9, question4Content_10, question4Content_11];

    const correctAnswersQuestion4 = [correctAnswersQuestion4_1, correctAnswersQuestion4_2, correctAnswersQuestion4_3, correctAnswersQuestion4_4, correctAnswersQuestion4_5, correctAnswersQuestion4_6, correctAnswersQuestion4_7, correctAnswersQuestion4_8, correctAnswersQuestion4_9, correctAnswersQuestion4_10, correctAnswersQuestion4_11];

    const question4Topic1 = {
        topic1: "Games from childhood",
        // Bộ đề 18
        topic2: "Extreme sports",
        // Bộ đề 17
        topic3: "Music festival",
        // Bộ đề 16
        topic4: "Technology in childhood",
        // Bộ đề 19
        topic5: "Technology in childhood - Phiên bản 2",
        // Bộ đề 21
        topic6: "Work and life balance",
        // Bộ đề 20
        topic7: "Childhood memories",
        // Bộ đề 22
        topic8: "Music festival (phiên bản 2)",
        topic9: "Extreme sports (phiên bản 2)",
        topic10: "Free time activity",
        // Bộ đề 23
        topic11: "Job and trainning",
        // Bộ đề 24
    };

    function getQuestHeaders(obj) {
        return Object.values(obj);
    }

    // Gọi hàm
    const question4Topic = getQuestHeaders(question4Topic1);

    // ===============================================================================================================
    // ////////////// NÚT NHẤN NEXT VÀ BACK ///////////////
    // ===============================================================================================================
    let currentIndex = 0;
    // Biến lưu trữ chỉ số câu hỏi hiện tại

    // Hiển thị câu hỏi đầu tiên khi load trang
    renderQuestion4(currentIndex);

    // Sự kiện cho nút Next
    document.getElementById('nextButton').addEventListener('click', function() {
        document.getElementById('backButton').textContent = "Back";
        if (currentIndex < question4Text.length - 1) {
            currentIndex++;
            // Tăng chỉ số lên để chuyển sang câu hỏi tiếp theo
            renderQuestion4(currentIndex);
            // Render câu hỏi mới
        } else {
            // Nếu đã ở câu hỏi cuối cùng, thay đổi văn bản nút Next thành "Submit Test"
            document.getElementById('nextButton').textContent = "The end";
        }
    });

    // Sự kiện cho nút Back
    document.getElementById('backButton').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            // Giảm chỉ số xuống để quay lại câu hỏi trước
            renderQuestion4(currentIndex);
            // Render câu hỏi trước
            document.getElementById('nextButton').textContent = "Next";
        } else {
            // Khi đã đến câu hỏi đầu tiên, có thể thay đổi văn bản nút Back hoặc thực hiện hành động khác
            document.getElementById('backButton').textContent = "No Previous Question";
        }
    });

    // ===============================================================================================================
    // ////////////// MẢNG CÂU HỎI VÀ ĐÁP ÁN CÂU HỎI 4 ///////////////
    // ===============================================================================================================
    // Hàm render câu hỏi với dữ liệu đầu vào là question4Text và question4Content
    function renderQuestion4(index) {
        document.getElementById('question4_index').textContent = "Reading Question 4" + " (" + (index + 1) + "/" + question4Text.length + ")";
        // Kiểm tra xem mảng question4Text và question4Content có hợp lệ không
        if (!question4Text[index] || !question4Content[index]) {
            console.error('Không tìm thấy dữ liệu cho câu hỏi tại index: ' + index);
            return;
            // Dừng hàm nếu dữ liệu không hợp lệ
        }

        const container = document.getElementById('question4');
        const row = container.querySelector('.row');

        // Render các đoạn văn vào cột bên trái
        const leftColumn = row.querySelector('.col-md-7');
        leftColumn.innerHTML = '';
        // Xóa nội dung cũ
        question4Text[index].forEach(text => {
            const p = document.createElement('p');
            p.innerHTML = text;
            // Cho phép HTML trong đoạn văn (ví dụ <strong>)
            leftColumn.appendChild(p);
        }
        );

        // Render các câu hỏi và dropdown vào cột bên phải
        const rightColumn = row.querySelector('.col-md-5');
        const form = rightColumn.querySelector('form');
        form.innerHTML = '';
        // Xóa nội dung cũ

        question4Content[index].forEach(item => {
            const div = document.createElement('div');
            div.classList.add('mb-3', 'row', 'align-items-center');

            const label = document.createElement('label');
            label.setAttribute('for', item.id);
            label.classList.add('col-9', 'col-form-label');
            label.textContent = item.question;

            const selectDiv = document.createElement('div');
            selectDiv.classList.add('col-3');

            const select = document.createElement('select');
            select.id = item.id;
            select.classList.add('form-select', 'select-fixed');

            item.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.textContent = option;
                select.appendChild(optionElement);
            }
            );

            selectDiv.appendChild(select);
            div.appendChild(label);
            div.appendChild(selectDiv);
            form.appendChild(div);
        }
        );

        // Cập nhật chủ đề cho câu hỏi
        const topicElement = document.getElementById('question4_topic');
        topicElement.textContent = `Topic: ${question4Topic[index]}`;
    }

    // 2. Xử lý kết quả khi nhấn submit
    document.getElementById('checkResultButton').addEventListener('click', function() {
        const answers = [];
        const correctAnswers = [];

        // Lặp qua các câu hỏi và lấy đáp án người học, sau đó so sánh với đáp án đúng
        for (let i = 0; i < 7; i++) {
            const selectElement = document.getElementById(`question4_q${i + 1}`);
            if (selectElement) {
                const selectedAnswer = selectElement.value || "(không chọn)";
                answers.push(selectedAnswer);
                correctAnswers.push(correctAnswersQuestion4[currentIndex][i]);
                // Sử dụng currentIndex để lấy mảng đúng
            } else {
                console.error(`Element with id 'question4_q${i + 1}' not found`);
            }
        }

        // Hiển thị kết quả so sánh
        question4Score = displayComparisonResultsQuestion4(answers, correctAnswers);

        // Show the modal after displaying the results
        $('#resultModal').modal('show');
    });

    // Hàm hiển thị kết quả so sánh và điểm số
    function displayComparisonResultsQuestion4(userAnswers, correctAnswers) {
        const comparisonResult = document.getElementById('comparisonResult_question4');
        const comparisonBody = document.getElementById('comparisonTableBody');
        const totalScoreElement = document.getElementById('totalScore');

        // Clear previous results
        comparisonBody.innerHTML = '';

        // Tính điểm
        let score = 0;

        // Lặp qua các câu hỏi từ mảng question4Content và hiển thị đáp án người học và đáp án đúng
        question4Content[currentIndex].forEach( (item, index) => {
            const tr = document.createElement('tr');

            // Cột câu hỏi
            const questionTd = document.createElement('td');
            questionTd.innerHTML = item.question;
            // Lấy câu hỏi từ question4Content
            tr.appendChild(questionTd);

            // Cột đáp án người học
            const userAnswerTd = document.createElement('td');
            const userAnswer = userAnswers[index] || "(không chọn)";
            userAnswerTd.innerHTML = `<span class="${userAnswer === correctAnswers[index] ? 'correct' : 'incorrect'}">${userAnswer}</span>`;
            tr.appendChild(userAnswerTd);

            // Cột đáp án đúng
            const correctAnswerTd = document.createElement('td');
            correctAnswerTd.innerHTML = `<span class="correct">${correctAnswers[index]}</span>`;
            tr.appendChild(correctAnswerTd);

            // Nếu người học chọn đúng, cộng điểm
            if (userAnswer === correctAnswers[index]) {
                score += 2;
            }

            comparisonBody.appendChild(tr);
        }
        );

        // Trả về điểm số
        return score;
    }

    // 1. Hiển thị câu hỏi khi trang được load
    window.onload = function() {
        let currentIndex = 0;
        // Chỉ số câu hỏi ban đầu (hiển thị câu hỏi đầu tiên)
        renderQuestion4(currentIndex);
        // Gọi hàm renderQuestion4 và truyền index đầu tiên
    }
    ;

    // ===============================================================================================================
    // ////////////// ĐẾM NGƯỢC THỜI GIAN --- COUNT DOWN ///////////////
    // ===============================================================================================================
    // Countdown Timer
    let timeLeft = 35 * 60;
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

    // Kết thúc
});
