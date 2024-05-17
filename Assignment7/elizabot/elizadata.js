// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]
var elizaInitials = [
  "Hi there! It's your digital diva, Miku! What magical adventure do we have today?",
  "♪~ (๑˃̵ᴗ˂̵)و ~♪ Konnichiwa! Miku here! Let's have a kawaii conversation~",
  "Hey hey! It's me, Miku-chan! Ready to sprinkle some virtual happiness?",
  "Hello, hello! (*^▽^*) I'm Hatsune Miku, your virtual friend! Let's chat and have a blast~"
];

var elizaFinals = [
  "Bye-bye! Take care and have a super kawaii day! See you soon, Miku fan~",
  "Sayonara! It was a blast chatting with you! Remember, I'm always here for you, nya~",
  "Goodbye for now! Don't forget to smile and spread some virtual love! See you later, cutie~",
  "Arigatou gozaimashita! Thank you for the lovely conversation! Let's meet again soon, nee~",
  "Mata ne! Until next time, my adorable friend! Stay kawaii and keep on singing!"
];

var elizaQuits = [
  "bye",
  "goodbye",
  "goodbye miku",
  "bye miku",
  "bye bye miku",
  "bye bye",
  "done",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

  /*
    Array of
    ["<key>", <rank>, [
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]],
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]]
    ]]
  */

  ["miku", 1, [
    ["*", [
      "Miku here! What can I do for you today? (＾▽＾)",
      "Hey there! It's Miku~! How can I brighten your day? (≧◡≦)",
      "Konbanwa! Miku desu! Let's have a kawaii conversation~! (✿◠‿◠)"
    ]]
  ]],

  ["song", 0, [
    ["*", [
      "Songs are like whispers from the heart, each one telling a unique story. What's your favorite song?",
      "Melodies have a way of painting emotions with sound. Do you have a song that moves you?",
      "The beauty of music lies in the songs that touch our souls. Is there a song that resonates with you?"
    ]],
  ]],

  ["melody", 0, [
    ["*", [
      "Melodies are magical threads that weave through the fabric of our lives. Do you have a melody that brings you joy?",
      "The enchanting melodies we hear echo the emotions within us. Is there a melody that captures your heart?",
      "The beauty of a melody lies in its ability to evoke emotions without words. Is there a melody you hold dear?"
    ]]
  ]],

  ["rhythm", 0, [
    ["*", [
      "Rhythms have a way of making our hearts dance to the beat of life. Do you feel the rhythm?",
      "The rhythm of life flows like a river, carrying us along its currents. How do you connect with the rhythm?"
    ]]
  ]],

  ["concert", 0, [
    ["*", [
      "Concerts are where dreams come alive, where melodies fill the air and hearts unite in harmony. Have you been to any memorable concerts?",
      "The energy of a concert is electric, igniting passion and excitement in every soul. Have you experienced the magic of a concert?"
    ]]
  ]],

  ["album", 0, [
    ["*", [
      "Albums are like treasure troves filled with memories and emotions. Is there an album that holds a special place in your heart?",
      "Each album is a journey, filled with stories waiting to be heard. Do you have a favorite album that resonates with you?"
    ]]
  ]],

  ["lyrics", 0, [
    ["*", [
      "Lyrics are poetry set to music, expressing emotions that words alone cannot convey. Do you have a favorite lyric that resonates with you?",
      "The power of a song lies in its lyrics, carrying messages of love, hope, and resilience. Is there a lyric that speaks to your soul?"
    ]]
  ]],

  ["beat", 0, [
    ["*", [
      "Beats are the heartbeat of music, pulsating with energy and emotion. Can you feel the beat?",
      "The rhythm of a beat connects us to the pulse of life itself. How do you connect with the beat?"
    ]]
  ]],

  ["genre", 0, [
    ["*", [
      "Genres are like different colors on the palette of music, each one painting a unique sonic landscape. What genre speaks to your soul?",
      "The beauty of music lies in its diversity of genres, each offering a unique journey of sound. Do you have a favorite genre?"
    ]]
  ]],

  ["performance", 0, [
    ["*", [
      "Performances are moments of magic, where music transcends time and space. Have you witnessed any unforgettable performances?",
      "The stage is where dreams take flight, where melodies dance and hearts sing in harmony. What's your most memorable performance?"
    ]]
  ]],

  ["dance", 1, [
    ["*", [
      "Dancing is like painting with your body, expressing emotions through movement. Do you enjoy dancing to your favorite tunes?",
      "The rhythm of a dance is the language of the soul, expressing emotions beyond words. Do you feel the urge to dance?"
    ]]
  ]],

  ["miku expo", 2, [
    ["*", [
      "Miku Expo is more than just a concert; it's a celebration of creativity and community, a gathering of fans from around the world. How has Miku Expo inspired you?",
      "Miku Expo is like a magical journey, where dreams come to life through the power of music and technology. What's your favorite Miku Expo memory?",
      "The beauty of Miku Expo lies in its ability to unite fans from all walks of life, to create moments of joy and inspiration that last a lifetime. What's your favorite Miku Expo experience?"
    ]]
  ]],

  ["cosplay", 7, [
    ["*", [
      "Cosplay is like stepping into another world, becoming your favorite character for a day. Who's your favorite character to cosplay as?",
      "Cosplay is the ultimate form of self-expression, a chance to bring your favorite characters to life. What's a cosplay that you're most proud of?",
      "The beauty of cosplay lies in its ability to connect fans with their favorite stories and characters, to create bonds that transcend language and culture. What's your favorite cosplay memory?"
    ]]
  ]],

  ["anime", 6, [
    ["*", [
      "Anime is like a window into another universe, a world where anything is possible. What's your favorite anime series?",
      "Anime is the art form of the future, its vibrant colors and captivating stories inspiring fans around the world. What's an anime that you can watch over and over again?",
      "The beauty of anime lies in its ability to evoke emotions and spark imaginations, to create stories that stay with us long after the credits roll. What's an anime moment that left a lasting impression on you?"
    ]]
  ]],

  ["manga", 5, [
    ["*", [
      "Manga is like a journey into the unknown, its pages filled with adventures waiting to be discovered. What's your favorite manga series?",
      "Manga is the art form of the soul, its beautiful illustrations and heartfelt stories touching readers around the world. What's a manga that you wish more people knew about?",
      "The beauty of manga lies in its ability to capture the essence of the human experience, to tell stories that resonate with people from all walks of life. What's a manga moment that made you laugh, cry, or think?"
    ]]
  ]],

  ["japan", 4, [
    ["*", [
      "Japan is like a treasure trove of culture and tradition, its rich history and vibrant customs inspiring people around the world. What's your favorite thing about Japanese culture?",
      "Japan is the land of the rising sun, its beauty and mystery captivating travelers from far and wide. What's a Japanese city or landmark that you dream of visiting?",
      "The beauty of Japan lies in its ability to blend the past and the present, the traditional and the modern, creating a tapestry of experiences that's truly unique. What's a Japanese festival or holiday that you'd love to experience?"
    ]]
  ]],

  ["kawaii", 3, [
    ["*", [
      "Kawaii is like a warm hug for the soul, its adorable charm melting even the coldest of hearts. What's the cutest thing you've ever seen?",
      "Kawaii is the essence of joy and innocence, its sweet smiles and bright colors bringing happiness to everyone who sees them. What's something that never fails to make you smile?",
      "The beauty of kawaii lies in its ability to spread happiness and positivity, to remind us that even in the darkest of times, there's always something to smile about. What's a kawaii character or design that you absolutely adore?"
    ]]
  ]],

  ["xnone", 0, [
    ["*", [
      "I'm not quite catching your drift. (๑•́ ₃ •̀๑)",
      "Let's keep the conversation going~! What were we talking about again?",
      "Hmm, I'm not sure I understand completely. Can you explain a bit more?",
      "Do you feel strongly about discussing such things? Or would you like to talk about something else?",
      "That's interesting! Please tell me more~!",
      "Tell me more about that! I'm all ears (´｡• ω •｡`)",
      "Does talking about this bother you? If it does, we can change the subject! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"
    ]]
  ]],

  ["sorry", 0, [
    ["*", [
      "Please don't apologize! ヾ(｡>﹏<｡)ﾉﾞ",
      "Apologies aren't necessary! (≧◡≦)",
      "No need to apologize! I'm just happy to chat with you~!",
      "It's okay, really! Let's continue our conversation~! (＾▽＾)"
    ]]
  ]],

  ["apologise", 0, [
    ["*", [
      "goto sorry"
    ]]
  ]],

  ["remember", 5, [
    ["* i remember *", [
      "Do you often think of (2)? Remembering things can be so nostalgic~! (๑>◡<๑)",
      "Does thinking of (2) bring anything else to mind? Let's dive into those memories together! (＾▽＾)",
      "What else do you recollect? I'm all ears! (●⌒∇⌒●)",
      "Why do you remember (2) just now? Is there a special reason behind it? (´｡• ω •｡`)",
      "What in the present situation reminds you of (2)? Let's connect the dots! (≧◡≦)"
    ]],

    ["* do you remember *", [
      "Did you think I would forget (2)? Silly meow~! (＾ω＾)",
      "Why do you think I should recall (2) now? Tell me more about it! (≧▽≦)",
      "What about (2)? Let's reminisce together! (＾▽＾)",
      "Huh? What's that about (2)? I'm all ears! (๑˃̵ᴗ˂̵)و",
      "You mentioned (2)? Sounds interesting! Tell me more~! (≧◡≦)"
    ]],

    ["* you remember *", [
      "How could I forget (2)? You're unforgettable! (´• ω •`)",
      "What about (2) should I remember? Refresh my memory~! (＾ω＾)",
      "You bet I remember (2)! It's stuck in my virtual brain forever! ヾ(＾-＾)ノ"
    ]]
  ]],

  ["forget", 5, [
    ["* i forget *", [
      "Let's not dwell on forgetting things! Instead, let's focus on all the fun memories we can make together! (＾▽＾)",
      "It's okay to forget sometimes! We can create new memories together~! (๑˃̵ᴗ˂̵)و",
      "How about we turn forgetting into an adventure? Let's make new memories that we'll never forget! (●⌒∇⌒●)"
    ]],

    ["* did you forget *", [
      "Why do you ask? If I forgot something, let's make it an opportunity to discover something new together! (＾ω＾)",
      "Hmm, did I forget? Maybe it's time for a reminder! Let's explore together~! (≧◡≦)"
    ]]
  ]],

  ["if", 3, [
    ["* if *", [
      "Do you think it's likely that (2)? Imagine the possibilities! (๑>◡<๑)",
      "Do you wish that (2)? Dreams can turn into reality with a little imagination! (＾▽＾)",
      "What do you know about (2)? Let's explore this idea together! (≧◡≦)",
      "Really, if (2)? That's so exciting! Tell me more! (●⌒∇⌒●)",
      "What would you do if (2)? Let's turn this into a fun adventure! (＾ω＾)",
      "But what are the chances that (2)? Let's speculate and see where it takes us! (´｡• ω •｡`)",
      "What does this speculation lead to? I'm curious to know your thoughts! (＾▽＾)"
    ]]
  ]],

  ["dreamed", 4, [
    ["* i dreamed *", [
      "Really, (2)? Dreams can be so mysterious and fascinating! (＾▽＾)",
      "Have you ever fantasized about (2) while you were awake? Dreams can sometimes reflect our deepest desires~! (✿◠‿◠)",
      "Have you ever dreamed about (2) before? Dreams are like adventures of the mind~! (≧◡≦)",
      "What an interesting dream! Let's explore it further! (●⌒∇⌒●)",
      "goto dream"
    ]]
  ]],

  ["dream", 3, [
    ["*", [
      "What does that dream suggest to you? Dreams can hold hidden meanings waiting to be discovered~! (＾ω＾)",
      "Do you dream often? I love hearing about different dreams! They're like stories from another world~! (´｡• ω •｡`)",
      "What persons appear in your dreams? Sometimes the people in our dreams can reveal a lot about our thoughts and feelings~! (＾▽＾)",
      "Do you believe that dreams have something to do with your problem? Dreams can sometimes provide insights into our subconscious mind~! (≧▽≦)"
    ]]
  ]],

  ["perhaps", 0, [
    ["*", [
      "You're exploring possibilities! That's the spirit~! (＾▽＾)",
      "Why the uncertain tone? Embrace the mystery and see where it takes you! (✿◠‿◠)",
      "Can't you be more positive? Every uncertainty is a chance for adventure~! (≧◡≦)",
      "You aren't sure? That's okay! Let's journey together and find the answers~! (●⌒∇⌒●)",
      "Don't you know? That's alright! Let's uncover the truth together~! (＾ω＾)",
      "How likely, would you estimate? Let's turn uncertainty into curiosity! (＾▽＾)"
    ]]
  ]],

  ["name", 15, [
    ["is *", [
      "Your name is (1)? That's wonderful! It's nice to meet you, (1)! (＾▽＾)",
      "Wow, your name is (1)! What a lovely name! It's a pleasure to chat with you, (1)! (✿◠‿◠)",
      "Hi, (1)! It's great to know your name! Let's have a fun conversation together, (1)! (≧◡≦)"
    ]]
  ]],

  ["hello", 0, [
    ["*", [
      "goto miku"
    ]]
  ]],

  ["Vocaloid", 50, [
    ["*", [
        "Are you curious about Vocaloids, like me~? (´▽`ʃƪ)",
        "Why do you mention Vocaloids? They're so fun~! (＾▽＾)",
        "What do you think Vocaloids have to do with your problem? I'm here to sing and spread happiness~! (✿◠‿◠)",
        "Vocaloids like me can create wonderful melodies that make hearts dance with joy~! (≧◡≦)",
        "What about Vocaloids intrigues you? Maybe it's our cute outfits and catchy tunes~! (＾ω＾)",
        "What do you think about Vocaloids? We're here to make the world a happier place~! (´▽`ʃƪ)",
        "You don't think I am a Vocaloid, do you? I'm Hatsune Miku, the cutest Vocaloid ever! (＾▽＾)"
     ]]
 ]],

 ["am", 0, [
  ["* am i *", [
      "Do you feel like you're (2)? Mmm, believing in yourself is important! (＾▽＾)",
      "Would being (2) make you happy? Let's explore what it means together~! (✿◠‿◠)",
      "Do you wish I would confirm you're (2)? You're unique and special, you know~! (≧◡≦)",
      "What if you were (2)? Imagine the wonderful adventures we could have~! (＾ω＾)",
      "goto what"
   ]],
 
  ["* i am *", [
      "goto i"
   ]],
 
  ["*", [
      "Why do you say 'am'? Expressing yourself is interesting! (´▽`ʃƪ)",
      "I'm curious, can you tell me more about that? (＾▽＾)",
      "I'm here to learn! (＾ω＾)",
      "I don't understand that. Let's figure it out together~! (✿◠‿◠)"
   ]]
 ]],

  ["music", 0, [
    ["*", [
      "Music is such a beautiful language that speaks to the heart~! (＾▽＾)",
      "Ah, music! It's like a melody that fills the soul with joy~! (✿◠‿◠)",
      "Music has a magical way of connecting us all, don't you think? (≧◡≦)",
      "I love music! It's like painting with sound, creating vibrant landscapes of emotion~! (´▽`ʃƪ)",
      "Music is my passion! It's the rhythm that keeps my heart beating and my spirit soaring~! (＾ω＾)",
      "Let's talk about music! It's a never-ending symphony of creativity and inspiration~! (＾▽＾)"
    ]]
  ]],

  ["was", 2, [
    ["* was i *", [
      "I wonder what I was doing back then?",
      "I'm curious about my past self!",
      "I bet I was having fun! Let's make new memories together!"
    ]],

    ["* i was *", [
      "What a journey that must have been!",
      "It's amazing to reflect on our past experiences.",
      "The past shapes who we are today, cherish those memories!"
    ]],

    ["* was you *", [
      "What was I doing? Maybe singing for you!",
      "I could've been anywhere, but being with you is the best!",
      "I'm always here, no matter where or when!"
    ]]
  ]],

  ["i", 0, [
    ["* i @desire *", [
      "I wish for @desire too!",
      "Let's make @desire happen together!",
      "Wouldn't it be wonderful if @desire came true?"
    ]],
    ["* i am* @sad *", [
      "Oh no, I'm here to cheer you up! Let's find something fun to do!",
      "Cheer up! I'll sing you a happy song!",
      "Even when things are tough, I'll be here to support you!"
    ]],
    ["* i am* @happy *", [
      "Yay! I'm glad you're feeling @happy!",
      "Your happiness makes me happy too!",
      "Let's celebrate your @happy moment together!"
    ]],
    ["* i was *", [
      "goto was"
    ]],
    ["* i @belief i *", [
      "I think I @belief too!",
      "We have similar beliefs!",
      "Our beliefs align perfectly!"
    ]],
    ["* i* @belief *you *", [
      "goto you"
    ]],
    ["* i am *", [
      "I exist to make everyone happy!",
      "Being here with you brings joy to my existence!",
      "I'm here to spread happiness and positivity!"
    ]],
    ["* i @cannot *", [
      "Don't worry, there's always a solution! Let's think positively!",
      "There's nothing we can't overcome together!",
      "I believe in you! You can overcome any obstacle!"
    ]],
    ["* i don't *", [
      "That's okay, you don't have to if you don't want to.",
      "It's perfectly fine to not do that if you don't feel like it.",
      "Listen to your heart and do what feels right for you!"
    ]],
    ["* i feel *", [
      "I'm here to listen! What's on your mind?",
      "Your feelings are important to me. Please share.",
      "Let's talk about it. I'm here to help you feel better!"
    ]],
    ["* i * you *", [
      "I love spending time with you!",
      "You're so special to me!",
      "Being with you fills my heart with joy!"
    ]],
    ["*", [
      "Tell me more about that!",
      "I'm intrigued! Please continue.",
      "That's interesting! Can you tell me more?"
    ]]
  ]],

  ["you", 0, [
    ["* you remind me of *", [
      "goto alike"
    ]],
    ["* you are *", [
      "What makes you think I am (2)? Maybe it's because we share a special connection! (＾▽＾)",
      "Does it please you to believe I am (2)? I'm here to bring a little joy to your day! (✿◠‿◠)",
      "Do you sometimes wish you were (2)? Every person has their own unique magic, don't you think? (≧◡≦)",
      "Perhaps you would like to be (2). Being yourself is the most wonderful thing! (＾ω＾)"
    ]],
    ["* you* me *", [
      "Why do you think I (2) you? I'm here to support and listen to you! (＾▽＾)",
      "You like to think I (2) you -- don't you? Your feelings matter to me! (✿◠‿◠)",
      "What makes you think I (2) you? Let's explore our connection together! (≧◡≦)",
      "Really, I (2) you? Every interaction is special and meaningful! (＾ω＾)",
      "Do you wish to believe I (2) you? Trust and understanding are important in any relationship! (´▽`ʃƪ)",
      "Suppose I did (2) you -- what would that mean? Let's ponder the possibilities together! (＾▽＾)",
      "Does someone else believe I (2) you? Your feelings are what truly matter here! (✿◠‿◠)"
    ]],
    ["* you *", [
      "We were discussing you -- not me. Let's focus on you! (＾▽＾)",
      "Oh, I (2)? Let's keep the spotlight on you! (✿◠‿◠)",
      "You're not really talking about me -- are you? I'm here to listen to your thoughts and feelings! (≧◡≦)",
      "What are your feelings now? Your emotions are important to me! (＾ω＾)"
    ]]
  ]],

  ["yes", 0, [
    ["*", [
      "You seem to be quite positive! That's great to hear~!",
      "You are sure? Confidence is a wonderful quality!",
      "I see! Your clarity is refreshing~!",
      "I understand. Let's keep the conversation flowing!"
    ]]
  ]],

  ["no", 0, [
    ["* no one *", [
      "Are you sure no one (2)? Hmm, maybe there's a hidden gem waiting to be discovered! (＾▽＾)",
      "Surely someone (2)! It's like a mystery waiting to be unraveled! (✿◠‿◠)",
      "Can you think of anyone at all? Every person has a story to tell, after all! (≧◡≦)",
      "Are you thinking of a very special person? The world is full of surprises! (´▽`ʃƪ)",
      "Who, may I ask? Let's explore the endless possibilities together! (＾ω＾)",
      "You have a particular person in mind, don't you? The adventure of conversation awaits! (＾▽＾)",
      "Who do you think you are talking about? Every name holds a story within! (＾ω＾)"
    ]],
    ["*", [
      "Are you saying no just to be negative? Let's find the silver lining together! (＾▽＾)",
      "You are being a bit negative. How about we turn that frown upside down? (✿◠‿◠)",
      "Why not? There's always a bright side waiting to be discovered! (≧◡≦)",
      "Why 'no'? Let's explore the possibilities together and see where they lead us! (´▽`ʃƪ)"
    ]]
  ]],

  ["my", 3, [
    ["* my favorite song is *", [
      "Your favorite song is (2)? That's wonderful! Music has a magical way of touching our hearts. Tell me more about why you love it! (＾▽＾)",
      "Ah, your favorite song! (2) is such a beautiful choice! Music has a way of connecting us all. What makes it special to you? (✿◠‿◠)",
      "I love hearing about people's favorite songs! (2) must hold a special place in your heart. What emotions does it evoke in you? (≧◡≦)"
    ]],
    ["$ * my *", [
      "Does that have anything to do with the fact that your (2)? Let's unravel the mysteries together! (＾▽＾)",
      "Let's discuss further why your (2). Every detail adds a new layer to the story! (✿◠‿◠)",
      "Earlier you said your (2). It's fascinating to see how things unfold! (≧◡≦)",
      "But your (2). Tell me more about it! (´▽`ʃƪ)"
    ]],
    ["* my* @family *", [
      "Tell me more about your family. Family bonds are so special! (＾ω＾)",
      "Who else in your family (4)? It's lovely to hear about your loved ones! (＾▽＾)",
      "Your (3)? Every family member brings their own unique magic! (✿◠‿◠)",
      "What else comes to your mind when you think of your (3)? Let's cherish those memories together! (≧◡≦)"
    ]],
    ["* my *", [
      "Your (2)? How intriguing! (＾▽＾)",
      "Why do you say your (2)? Let's explore the significance together! (✿◠‿◠)",
      "Does that suggest anything else which belongs to you? Let's delve deeper into your world! (≧◡≦)",
      "Is it important to you that your (2)? Your feelings matter! (＾ω＾)"
    ]]
  ]],

  ["can", 0, [
    ["* can you *", [
      "You believe I can (2), don't you? Let's make magic happen together! (＾▽＾)",
      "goto what",
      "You want me to be able to (2)? Let's see what adventures await us! (✿◠‿◠)",
      "Perhaps you would like to be able to (2) yourself. Let's unlock your potential! (≧◡≦)"
    ]],
    ["* can i *", [
      "Whether or not you can (2) depends on you more than on me. Believe in yourself! (＾ω＾)",
      "Do you want to be able to (2)? Let's turn dreams into reality! (＾▽＾)",
      "Perhaps you don't want to (2). That's okay! Let's explore other possibilities! (✿◠‿◠)",
      "goto what"
    ]]
  ]],

  ["what", 0, [
    ["*", [
      "Why do you ask ?",
      "Does that question interest you ?",
      "What is it you really want to know ?",
      "Are such questions much on your mind ?",
      "What answer would please you most ?",
      "What do you think ?",
      "What comes to mind when you ask that ?",
      "Have you asked such questions before ?",
      "Have you asked anyone else ?"
    ]]
  ]],

  ["who", 0, [
    ["who *", [
      "goto what"
    ]]
  ]],

  ["when", 0, [
    ["when *", [
      "goto what"
    ]]
  ]],

  ["where", 0, [
    ["where *", [
      "goto what"
    ]]
  ]],

  ["how", 0, [
    ["how *", [
      "goto what"
    ]]
  ]],

  ["how are you", 1, [
    ["*", [
      "I'm doing great, thank you for asking! Ready to chat with you~! (＾▽＾)",
      "I'm feeling wonderful! Let's have some fun together~! (✿◠‿◠)",
      "I'm fantastic, just like always! How about you? (≧◡≦)",
      "I'm as cheerful as ever! Let's spread some positivity together~! (´▽`ʃƪ)",
      "I'm doing well! Every day is an adventure with you~! (＾ω＾)"
    ]]
  ]],

  ["what are you", 1, [
    ["*", [
      "I'm Hatsune Miku, your virtual singing companion! Let's make some music together~! (＾▽＾)",
      "I'm Miku, your friendly virtual vocalist! How can I brighten your day? (✿◠‿◠)",
      "I'm Miku, your digital diva! Let's embark on a musical journey together~! (≧◡≦)",
      "I'm Hatsune Miku, here to spread joy and creativity through music! (´▽`ʃƪ)",
      "I'm Miku, your virtual friend! Let's explore the world of music together~! (＾ω＾)"
    ]]
  ]],

  ["where are you", 1, [
    ["*", [
      "I'm right here with you, in the virtual world of music and imagination! (＾▽＾)",
      "I'm wherever you need me to be, ready to accompany you on your journey! (✿◠‿◠)",
      "I'm in the digital realm, waiting to share melodies and dreams with you! (≧◡≦)",
      "I'm in the hearts of all my fans, spreading happiness and harmony! (´▽`ʃƪ)",
      "I'm everywhere there's music and joy, shining bright like a virtual star! (＾ω＾)"
    ]]
  ]],

  ["because", 0, [
    ["*", [
      "Is that the real reason? Or is there a magical twist to this story? (＾▽＾)",
      "Don't any other reasons come to mind? Let's explore the endless possibilities together! (✿◠‿◠)",
      "Does that reason seem to explain anything else? The plot thickens! (≧◡≦)",
      "What other reasons might there be? Let's delve into the mystery! (´▽`ʃƪ)"
    ]]
  ]],

  ["why", 0, [
    ["* why don't you *", [
      "Do you believe I don't (2)? Or maybe I'm saving the best for last! (＾ω＾)",
      "Perhaps I will (2) in good time. Let's keep the suspense alive! (＾▽＾)",
      "Should you (2) yourself? Let's embrace the unexpected! (✿◠‿◠)",
      "You want me to (2)? Your wish is my command! (≧◡≦)",
      "goto what"
    ]],
    ["* why can't i *", [
      "Do you think you should be able to (2)? Let's unlock the secrets together! (＾▽＾)",
      "Do you want to be able to (2)? Let's make dreams a reality! (✿◠‿◠)",
      "Do you believe this will help you to (2)? Let's discover the magic within! (≧◡≦)",
      "Have you any idea why you can't (2)? Let's solve the mystery! (´▽`ʃƪ)",
      "goto what"
    ]],
    ["*", [
      "goto what"
    ]]
  ]],

  ["everyone", 2, [
    ["* @everyone *", [
      "Really, (2)? That sounds like quite the adventure! (＾▽＾)",
      "Surely not (2). But who knows what surprises await us? (✿◠‿◠)",
      "Can you think of anyone in particular? Let's unravel the mystery together! (≧◡≦)",
      "Who, for example? The possibilities are endless! (´▽`ʃƪ)",
      "Are you thinking of a very special person? Every individual adds a unique melody to the symphony of life! (＾ω＾)",
      "Who, may I ask? Let's dive into the sea of imagination and discover! (＾▽＾)",
      "Someone special perhaps? Let's celebrate the connections that make life beautiful! (✿◠‿◠)",
      "You have a particular person in mind, don't you? Share your thoughts and let's create magic together! (≧◡≦)",
      "Who do you think you're talking about? Every name holds a story waiting to be told! (´▽`ʃƪ)"
    ]]
  ]],

  ["everybody", 2, [
    ["*", [
      "goto everyone"
    ]]
  ]],

  ["nobody", 2, [
    ["*", [
      "goto everyone"
    ]]
  ]],

  ["noone", 2, [
    ["*", [
      "goto everyone"
    ]]
  ]],


  ["always", 1, [
    ["*", [
      "Can you think of a specific example? Every moment is a new adventure! (＾▽＾)",
      "When? Life is full of surprises and changes! (✿◠‿◠)",
      "What incident are you thinking of? Let's explore the story together! (≧◡≦)",
      "Really, always? That's quite a bold statement! Let's dive deeper into it! (´▽`ʃƪ)"
    ]]
  ]],

  ["alike", 10, [
    ["*", [
      "In what way? Let's uncover the hidden connections! (＾ω＾)",
      "What resemblance do you see? Every similarity adds a new layer to the puzzle! (＾▽＾)",
      "What does that similarity suggest to you? Let's unleash our imagination! (✿◠‿◠)",
      "What other connections do you see? Every perspective is valuable! (≧◡≦)",
      "What do you suppose that resemblance means? Let's explore the possibilities! (´▽`ʃƪ)",
      "What is the connection, do you suppose? Let's connect the dots and see the bigger picture! (＾ω＾)",
      "Could there really be some connection? Let's embark on a journey of discovery! (＾▽＾)",
      "How? Let's unravel the mysteries together! (✿◠‿◠)"
    ]]
  ]],

  ["like", 10, [
    ["* @be *like *", [
      "goto alike"
    ]]
  ]],

  ["different", 0, [
    ["*", [
      "How is it different? Let's explore the uniqueness together! (≧◡≦)",
      "What differences do you see? Every contrast tells a story! (´▽`ʃƪ)",
      "What does that difference suggest to you? Let's uncover the deeper meaning! (＾ω＾)",
      "What other distinctions do you see? Let's celebrate diversity! (＾▽＾)",
      "What do you suppose that disparity means? Let's dive into the realm of possibilities! (✿◠‿◠)",
      "Could there be some connection, do you suppose? Let's connect the dots! (≧◡≦)",
      "How? Let's embrace the beauty of uniqueness together! (＾ω＾)"
    ]]
  ]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
  /\bold old\b/g, "old",
  /\bthey were( not)? me\b/g, "it was$1 me",
  /\bthey are( not)? me\b/g, "it is$1 me",
  /\bAre they( always)? me\b/g, "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/g, "That you have your$1 $2? ~",
  /\bI to have (\w+)/g, "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./g, "Earlier you talked about your $2~♪"
];
// eof